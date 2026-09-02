import {createDefaultWorld} from './core/world/default-world.js';
import {WorldKernel} from './core/world/world-kernel.js';
import {EmbodimentKernel} from './embodiment/embodiment-kernel.js';
import {SensorimotorKernel} from './sensorimotor/sensorimotor-kernel.js';
import {PerceptionKernel} from './perception/perception-kernel.js';
import {vec3} from './core/world/vector3.js';
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
const KEY='aura-perception-kernel-v0.5.0';let world,embodiment,sensorimotor,perception;
try{const saved=JSON.parse(localStorage.getItem(KEY));world=WorldKernel.restore(saved.world);embodiment=EmbodimentKernel.restore(world,saved.embodiment);sensorimotor=SensorimotorKernel.restore(embodiment,saved.sensorimotor);perception=PerceptionKernel.restore(world,embodiment,saved.perception);}catch{world=createDefaultWorld();embodiment=new EmbodimentKernel(world);embodiment.create({id:'aura-body',origin:vec3(0,2,0)});world.createBody({id:'perception-fixture',materialId:'inert-standard',mass:2,radius:.35,position:vec3(0,4.2,-3),static:true});sensorimotor=new SensorimotorKernel(embodiment);perception=new PerceptionKernel(world,embodiment);}
const status=document.querySelector('#status'),log=document.querySelector('#log');
const save=()=>localStorage.setItem(KEY,JSON.stringify({world:world.snapshot(),embodiment:embodiment.snapshot(),sensorimotor:sensorimotor.snapshot(),perception:perception.snapshot()}));
function render(){const e=embodiment.embodiments.get('aura-body'),latest=perception.observations.at(-1)??null;status.textContent=`tick ${world.tick} · ${e?Object.keys(e.bodyIds).length:0} body parts · ${sensorimotor.trials.length} trials · ${perception.observations.length} perceptions · ${world.observatory.records.length} causal events`;log.textContent=JSON.stringify({objectiveWorld:world.worldState(),embodiment:embodiment.snapshot(),sensorimotor:sensorimotor.snapshot(),perceivedState:latest,latestEvents:world.observatory.snapshot().slice(-20)},null,2);}
document.querySelector('#step').onclick=()=>{embodiment.step(1);save();render();};
document.querySelector('#run').onclick=()=>{embodiment.step(60);save();render();};
document.querySelector('#trial').onclick=()=>{const e=embodiment.embodiments.get('aura-body');sensorimotor.runTrial({embodimentId:'aura-body',actuatorId:e.actuators[0].id,command:.25,steps:4});save();render();};
document.querySelector('#observe').onclick=()=>{perception.observe({embodimentId:'aura-body'});save();render();};
document.querySelector('#reset').onclick=()=>{localStorage.removeItem(KEY);location.reload();};render();
