import {createMemory} from './helpers-memory.mjs';import {BeliefKernel} from '../src/belief/belief-kernel.js';
export function createBelief(options={}){const {belief:beliefOptions={},...memoryOptions}=options,x=createMemory(memoryOptions);const belief=new BeliefKernel({...beliefOptions,emit:(type,payload,causeIds=[])=>x.world.emit(type,payload,causeIds)});return {...x,belief};}
