import {strict as assert} from 'node:assert';
import {ObjectAbstractionKernel} from '../../src/abstraction/object-abstraction-kernel.js';
const body=(id,x,mass=2)=>({id,materialId:'inert-standard',mass,radius:.5,position:{x,y:0,z:0},static:false});
const kernel=new ObjectAbstractionKernel(),result=kernel.abstractWorld({tick:4,bodies:[body('arbitrary-b',1),body('arbitrary-a',0)]});
assert.equal(result.primitives.length,2);assert.equal(result.relations.length,1);assert.equal(result.signature.relationTypes.contact,1);assert.equal(result.signature.totalMass,4);assert.ok(result.primitives.every(x=>!('objectName' in x)&&!('label' in x)));
