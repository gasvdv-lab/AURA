import {createDefaultWorld} from './core/world/default-world.js';
import {vec3} from './core/world/vector3.js';
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
const KEY='aura-world-kernel-v0.2.0';let world;
try{world=localStorage.getItem(KEY)?(await import('./core/world/world-kernel.js')).WorldKernel.restore(JSON.parse(localStorage.getItem(KEY))):createDefaultWorld();}catch{world=createDefaultWorld();}
if(!world.bodies.size){world.createBody({id:'origin-body',materialId:'inert-standard',mass:1,radius:.5,position:vec3(0,2,0)});world.addResource('generic-matter',10);}
const status=document.querySelector('#status'),log=document.querySelector('#log');
function render(){status.textContent=`tick ${world.tick} · ${world.bodies.size} bodies · ${world.observatory.records.length} causal events`;log.textContent=JSON.stringify(world.snapshot(),null,2);}
document.querySelector('#step').onclick=()=>{world.step(1);localStorage.setItem(KEY,JSON.stringify(world.snapshot()));render();};
document.querySelector('#run').onclick=()=>{world.step(60);localStorage.setItem(KEY,JSON.stringify(world.snapshot()));render();};
document.querySelector('#reset').onclick=()=>{localStorage.removeItem(KEY);location.reload();};render();
