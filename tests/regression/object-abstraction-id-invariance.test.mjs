import {strict as assert} from 'node:assert';
import {ObjectAbstractionKernel} from '../../src/abstraction/object-abstraction-kernel.js';
const state=ids=>({tick:1,bodies:ids.map((id,i)=>({id,materialId:'rigid-standard',mass:i+1,radius:.25,position:{x:i*.5,y:0,z:0},static:false}))});
const a=new ObjectAbstractionKernel().abstractWorld(state(['house','roof'])),b=new ObjectAbstractionKernel().abstractWorld(state(['x-91','unknown-22']));
assert.deepEqual(a.signature,b.signature);assert.deepEqual(a.primitives,b.primitives);assert.deepEqual(a.relations,b.relations);
