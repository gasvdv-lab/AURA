import {createDefaultWorld} from '../core/world/default-world.js';
import {vec3} from '../core/world/vector3.js';

const clone=structuredClone,round=n=>Math.round(n*1e9)/1e9;
const PROGRAMS=[
  {id:'analysis.force-acceleration',label:'kracht, massa en versnelling',question:'Welke relatie voorspelt versnelling uit kracht en massa?',kind:'force-mass',candidates:[{id:'force-divided-by-mass',predict:({force,mass})=>force/mass},{id:'force-times-mass',predict:({force,mass})=>force*mass},{id:'force-only',predict:({force})=>force},{id:'mass-only',predict:({mass})=>mass}],training:[[6,2],[12,3],[20,4]],tests:[[15,5],[14,2]]},
  {id:'analysis.inertial-velocity',label:'behoud van snelheid zonder nettokracht',question:'Wat gebeurt met snelheid wanneer geen nettokracht werkt?',kind:'inertia',candidates:[{id:'velocity-remains-constant',predict:({initialVelocity})=>initialVelocity},{id:'velocity-becomes-zero',predict:()=>0},{id:'velocity-doubles',predict:({initialVelocity})=>initialVelocity*2},{id:'velocity-halves',predict:({initialVelocity})=>initialVelocity/2}],training:[[1,10],[3,30],[-2,15]],tests:[[2.5,20],[-4,5]]}
];

export class SelfLearningKernel{
  constructor({emit=()=>({id:null})}={}){this.emit=emit;this.programs=new Map();this.nextRun=1;}
  agenda(){return PROGRAMS.map(({id,label,question})=>({id,label,question,status:this.programs.get(id)?.status??'unexplored'}));}
  runNextProgram(tick=0){const program=PROGRAMS.find(item=>!this.programs.has(item.id));if(!program)throw new Error('De begrensde autonome onderzoeksagenda is voltooid');return this.#run(program,tick);}
  runForceMassProgram(tick=0){const program=PROGRAMS[0];if(this.programs.has(program.id))throw new Error('Dit zelfstandige leerprogramma is al voltooid');return this.#run(program,tick);}
  #run(definition,tick){
    const {id,label,question,kind,candidates}=definition,runId=`self-run-${this.nextRun++}`;
    this.emit('self-learning.program-started',{id,runId,tick});this.emit('self-learning.question-selected',{id,runId,question,tick});
    const plan={trainingCount:definition.training.length,independentTestCount:definition.tests.length,measurement:kind==='force-mass'?'acceleration':'finalVelocity'};
    this.emit('self-learning.experiment-plan-committed',{id,runId,plan:clone(plan),tick});
    const training=definition.training.map((values,index)=>this.#experiment({runId,kind,phase:'training',index,values,tick}));
    const surviving=candidates.filter(rule=>training.every(sample=>Object.is(round(rule.predict(sample)),sample.measured))).map(rule=>rule.id);
    this.emit('self-learning.hypotheses-compared',{id,runId,candidates:candidates.map(x=>x.id),surviving:clone(surviving),tick});
    if(surviving.length!==1)throw new Error('Geen unieke causale regel gevonden');
    const selectedRule=surviving[0],rule=candidates.find(x=>x.id===selectedRule);
    const tests=definition.tests.map((values,index)=>{const inputs=this.#inputs(kind,values),predicted=round(rule.predict(inputs)),experimentId=`${runId}-independent-test-${index+1}`;this.emit('self-learning.prediction-committed',{id,runId,experimentId,...inputs,predicted,ruleId:selectedRule,tick});const sample=this.#experiment({runId,kind,phase:'independent-test',index,values,tick});return {...sample,predicted,passed:Object.is(predicted,sample.measured)};});
    const status=tests.every(x=>x.passed)?'verified':'rejected',program={id,label,runId,status,researchQuestion:question,plan,competingHypotheses:candidates.map(x=>x.id),selectedRule,training,tests,origin:status==='verified'?'aura-learned':'unknown-origin'};
    this.programs.set(id,program);this.emit(`self-learning.${status}`,{id,runId,selectedRule,passed:tests.filter(x=>x.passed).length,total:tests.length,tick});return clone(program);
  }
  #inputs(kind,values){return kind==='force-mass'?{force:values[0],mass:values[1]}:{initialVelocity:values[0],steps:values[1]};}
  #experiment({runId,kind,phase,index,values,tick}){const inputs=this.#inputs(kind,values),world=createDefaultWorld({gravity:vec3(),seed:index+1});world.createBody({id:'probe',materialId:'inert-standard',mass:inputs.mass??1,radius:.1,position:vec3(),velocity:vec3(inputs.initialVelocity??0,0,0)});if(kind==='force-mass')world.applyForce('probe',vec3(inputs.force,0,0));world.step(inputs.steps??1);const measured=round(kind==='force-mass'?world.bodies.get('probe').acceleration.x:world.bodies.get('probe').velocity.x),sample={experimentId:`${runId}-${phase}-${index+1}`,phase,...inputs,measured,source:'world-kernel-measurement'};if(kind==='force-mass')sample.acceleration=measured;else sample.finalVelocity=measured;this.emit('self-learning.experiment-observed',{...sample,tick});return sample;}
  get(id){const value=this.programs.get(id);return value?clone(value):null;}
  snapshot(){return {schema:'aura-self-learning-v2',nextRun:this.nextRun,programs:[...this.programs.entries()].map(([id,x])=>[id,clone(x)])};}
  static restore(snapshot,{emit=()=>({id:null})}={}){if(!['aura-self-learning-v1','aura-self-learning-v2'].includes(snapshot?.schema))throw new Error('Ongeldige self-learning snapshot');const kernel=new SelfLearningKernel({emit});kernel.nextRun=snapshot.nextRun;kernel.programs=new Map(snapshot.programs.map(([id,x])=>[id,clone(x)]));return kernel;}
}
