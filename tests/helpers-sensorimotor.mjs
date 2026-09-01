import {createEmbodiment} from './helpers-embodiment.mjs';import {SensorimotorKernel} from '../src/sensorimotor/sensorimotor-kernel.js';
export function createSensorimotor(options={}){const base=createEmbodiment(options);return {...base,sensorimotor:new SensorimotorKernel(base.kernel)};}
