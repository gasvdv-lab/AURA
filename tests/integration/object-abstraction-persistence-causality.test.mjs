import {strict as assert} from 'node:assert';
import {createDefaultWorld} from '../../src/core/world/default-world.js';
import {ObjectAbstractionKernel} from '../../src/abstraction/object-abstraction-kernel.js';
const world=createDefaultWorld(),events=[],kernel=new ObjectAbstractionKernel({emit:(type,payload)=>events.push({type,payload})});world.createBody({id:'anything',materialId:'inert-standard',mass:1,radius:.5,position:{x:0,y:0,z:0}});const result=kernel.abstractWorld(world.worldState());const restored=ObjectAbstractionKernel.restore(kernel.snapshot());assert.deepEqual(restored.latest(),result);assert.equal(events[0].type,'abstraction.generated');assert.equal(events[0].payload.primitiveCount,1);
