const clone=structuredClone;
const RULES=[
  {id:'identity-left',run:([a])=>a},
  {id:'identity-right',run:([,b])=>b},
  {id:'sum',run:([a,b])=>a+b},
  {id:'difference',run:([a,b])=>a-b},
  {id:'repeated-addition',run:([a,b])=>{if(!Number.isInteger(a)||!Number.isInteger(b)||a<0||b<0)return NaN;let total=0;for(let i=0;i<b;i++)total+=a;return total;}}
];
const validInputs=x=>Array.isArray(x)&&x.length===2&&x.every(Number.isFinite);
export class NativeSkillKernel{
  constructor({emit=()=>({id:null})}={}){this.emit=emit;this.skills=new Map();}
  create({id,label=id},tick=0){if(typeof id!=='string'||!id||this.skills.has(id))throw new Error('Ongeldige of bestaande native skill');const skill={id,label,status:'collecting',examples:[],selectedRule:null,challenges:[]};this.skills.set(id,skill);this.emit('native-skill.created',{id,tick});return clone(skill);}
  addExample(id,{inputs,output},tick=0){const s=this.#get(id);if(!validInputs(inputs)||!Number.isFinite(output))throw new Error('Ongeldig trainingsvoorbeeld');if(s.examples.some(x=>JSON.stringify(x.inputs)===JSON.stringify(inputs)))throw new Error('Dubbele trainingsinvoer');s.examples.push({inputs:clone(inputs),output,tick});s.status='collecting';s.selectedRule=null;this.emit('native-skill.training-example-recorded',{id,inputs:clone(inputs),output,tick});return clone(s);}
  learn(id,tick=0){const s=this.#get(id);if(s.examples.length<3)throw new Error('Minimaal drie verschillende trainingsvoorbeelden nodig');const matches=RULES.filter(rule=>s.examples.every(x=>Object.is(rule.run(x.inputs),x.output)));this.emit('native-skill.rule-candidates-generated',{id,candidates:matches.map(x=>x.id),tick});if(matches.length!==1)throw new Error(matches.length?'Voorbeelden bepalen nog geen unieke regel':'Geen generieke regel verklaart alle voorbeelden');s.selectedRule=matches[0].id;s.status='candidate';this.emit('native-skill.rule-selected',{id,ruleId:s.selectedRule,tick});return clone(s);}
  runChallenge(id,{challengeId,inputs},tick=0){const s=this.#get(id);if(!s.selectedRule)throw new Error('Zoek eerst een native regel');if(!challengeId||!validInputs(inputs))throw new Error('Ongeldige native proef');if(s.examples.some(x=>JSON.stringify(x.inputs)===JSON.stringify(inputs)))throw new Error('Trainingsinvoer is geen onafhankelijke proef');if(s.challenges.some(x=>x.challengeId===challengeId||JSON.stringify(x.inputs)===JSON.stringify(inputs)))throw new Error('Dubbele native proef');const rule=RULES.find(x=>x.id===s.selectedRule),output=rule.run(inputs);s.challenges.push({challengeId,inputs:clone(inputs),output,tick});this.emit('native-skill.challenge-completed',{id,challengeId,inputs:clone(inputs),output,ruleId:s.selectedRule,tick});return {challengeId,output,ruleId:s.selectedRule};}
  get(id){const s=this.skills.get(id);return s?clone(s):null;}
  #get(id){const s=this.skills.get(id);if(!s)throw new Error(`Onbekende native skill: ${id}`);return s;}
  snapshot(){return {schema:'aura-native-skills-v1',skills:[...this.skills.entries()].sort(([a],[b])=>a.localeCompare(b)).map(([id,s])=>[id,clone(s)])};}
  static restore(snapshot,{emit=()=>({id:null})}={}){const k=new NativeSkillKernel({emit});if(snapshot?.schema!=='aura-native-skills-v1')throw new Error('Ongeldige native-skill snapshot');k.skills=new Map(snapshot.skills.map(([id,s])=>[id,clone(s)]));return k;}
}
