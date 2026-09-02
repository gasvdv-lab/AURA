import {createDefaultWorld,vec3} from './helpers.mjs';import {EmbodimentKernel} from '../src/embodiment/embodiment-kernel.js';
export function createEmbodiment(options={}){const world=createDefaultWorld(options);const kernel=new EmbodimentKernel(world);const id=kernel.create({id:'test-body',origin:vec3(0,3,0)});return {world,kernel,id,entity:kernel.embodiments.get(id)};}
