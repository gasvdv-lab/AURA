import assert from 'node:assert/strict';import {createDefaultWorld} from '../src/core/world/default-world.js';import {vec3} from '../src/core/world/vector3.js';
export {assert,createDefaultWorld,vec3};
export const body=(w,overrides={})=>w.createBody({materialId:'inert-standard',mass:1,radius:.5,position:vec3(),...overrides});
