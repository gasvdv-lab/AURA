import {createDefaultWorld} from '../core/world/default-world.js';
import {vec3} from '../core/world/vector3.js';

const clone=structuredClone,round=n=>Math.round(n*1e9)/1e9;
const CANDIDATES=[
  {id:'force-divided-by-mass',predict:({force,mass})=>force/mass},
  {id:'force-times-mass',predict:({force,mass})=>force*mass},
  {id:'force-only',predict:({force})=>force},
  {id:'mass-only',predict:({mass})=>mass}
];
const TRAINING=[[6,2],[12,3],[20,4]],TESTS=[[15,5],[14,2]];

export class SelfLearningKernel{
  constructor({emit=()=>({id:null})}={}){this.emit=emit;this.programs=new Map();this.nextRun=1;}
  runForceMassProgram(tick=0){
    const id='analysis.force-acceleration',runId=`self-run-${this.nextRun++}`;
    if(this.programs.has(id))throw new Error('Dit zelfstandige leerprogramma is al voltooid');
    this.emit('self-learning.program-started',{id,runId,tick});
    const training=TRAINING.map(([force,mass],index)=>this.#experiment({runId,phase:'training',index,force,mass,tick}));
    const candidates=CANDIDATES.filter(rule=>training.every(sample=>Object.is(round(rule.predict(sample)),sample.acceleration))).map(rule=>rule.id);
    this.emit('self-learning.hypotheses-compared',{id,runId,candidates:clone(candidates),tick});
    if(candidates.length!==1)throw new Error('Geen unieke causale regel gevonden');
    const selectedRule=candidates[0];
    const tests=TESTS.map(([force,mass],index)=>{const predicted=round(CANDIDATES.find(x=>x.id===selectedRule).predict({force,mass}));this.emit('self-learning.prediction-committed',{id,runId,experimentId:`${runId}-independent-test-${index+1}`,force,mass,predicted,ruleId:selectedRule,tick});const sample=this.#experiment({runId,phase:'independent-test',index,force,mass,tick});return {...sample,predicted,passed:Object.is(predicted,sample.acceleration)};});
    const status=tests.every(x=>x.passed)?'verified':'rejected';
    const program={id,runId,status,selectedRule,training,tests,origin:status==='verified'?'aura-learned':'unknown-origin'};
    this.programs.set(id,program);
    this.emit(`self-learning.${status}`,{id,runId,selectedRule,passed:tests.filter(x=>x.passed).length,total:tests.length,tick});
    return clone(program);
  }
  #experiment({runId,phase,index,force,mass,tick}){
    const world=createDefaultWorld({gravity:vec3(),seed:index+1});
    world.createBody({id:'probe',materialId:'inert-standard',mass,radius:.1,position:vec3()});
    world.applyForce('probe',vec3(force,0,0));world.step();
    const acceleration=round(world.bodies.get('probe').acceleration.x),sample={experimentId:`${runId}-${phase}-${index+1}`,phase,force,mass,acceleration,source:'world-kernel-measurement'};
    this.emit('self-learning.experiment-observed',{...sample,tick});return sample;
  }
  get(id){const value=this.programs.get(id);return value?clone(value):null;}
  snapshot(){return {schema:'aura-self-learning-v1',nextRun:this.nextRun,programs:[...this.programs.entries()].map(([id,x])=>[id,clone(x)])};}
  static restore(snapshot,{emit=()=>({id:null})}={}){if(snapshot?.schema!=='aura-self-learning-v1')throw new Error('Ongeldige self-learning snapshot');const kernel=new SelfLearningKernel({emit});kernel.nextRun=snapshot.nextRun;kernel.programs=new Map(snapshot.programs.map(([id,x])=>[id,clone(x)]));return kernel;}
}
