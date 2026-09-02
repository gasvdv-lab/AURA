import {strict as assert} from 'node:assert';
import {SelfLearningKernel} from '../../src/self-learning/self-learning-kernel.js';
const events=[],kernel=new SelfLearningKernel({emit:(type,payload)=>events.push({type,payload})});
const result=kernel.runForceMassProgram(12);
assert.equal(result.selectedRule,'force-divided-by-mass');assert.equal(result.origin,'aura-learned');
assert.equal(result.training.length,3);assert.equal(result.tests.length,2);assert.ok(result.tests.every(x=>x.passed));
assert.ok([...result.training,...result.tests].every(x=>x.source==='world-kernel-measurement'));
assert.equal(events.filter(x=>x.type==='self-learning.experiment-observed').length,5);
assert.throws(()=>kernel.runForceMassProgram(13),/al voltooid/);
