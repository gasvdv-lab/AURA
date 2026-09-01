import {WorldKernel} from './world-kernel.js';
export function createDefaultWorld(options={}){const w=new WorldKernel(options);w.materials.register('inert-standard',{density:1,restitution:.35,hardness:1,toughness:10,degradationRate:.0001});w.materials.register('rigid-standard',{density:2,restitution:.15,hardness:5,toughness:25,degradationRate:.00002});return w;}
