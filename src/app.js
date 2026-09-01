import {createDefaultWorld} from './core/world/default-world.js';
import {WorldKernel} from './core/world/world-kernel.js';
import {EmbodimentKernel} from './embodiment/embodiment-kernel.js';
import {vec3} from './core/world/vector3.js';
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
const KEY='aura-embodiment-kernel-v0.3.0';let world,embodiment;
try{const saved=JSON.parse(localStorage.getItem(KEY));world=WorldKernel.restore(saved.world);embodiment=EmbodimentKernel.restore(world,saved.embodiment);}catch{world=createDefaultWorld();embodiment=new EmbodimentKernel(world);embodiment.create({id:'aura-body',origin:vec3(0,2,0)});}
const status=document.querySelector('#status'),log=document.querySelector('#log');
const save=()=>localStorage.setItem(KEY,JSON.stringify({world:world.snapshot(),embodiment:embodiment.snapshot()}));
function render(){const e=embodiment.embodiments.get('aura-body');status.textContent=`tick ${world.tick} · ${e?Object.keys(e.bodyIds).length:0} body parts · ${world.observatory.records.length} causal events`;log.textContent=JSON.stringify({world:world.worldState(),embodiment:embodiment.snapshot(),latestEvents:world.observatory.snapshot().slice(-20)},null,2);}
document.querySelector('#step').onclick=()=>{embodiment.step(1);save();render();};
document.querySelector('#run').onclick=()=>{embodiment.step(60);save();render();};
document.querySelector('#reset').onclick=()=>{localStorage.removeItem(KEY);location.reload();};render();
