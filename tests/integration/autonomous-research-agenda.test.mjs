import {strict as assert} from 'node:assert';
import {SelfLearningKernel} from '../../src/self-learning/self-learning-kernel.js';

const events=[],kernel=new SelfLearningKernel({emit:(type,payload)=>{events.push({type,payload});return {id:`evt-${events.length}`};}});
assert.equal(kernel.agenda().filter(x=>x.status==='unexplored').length,2);
const first=kernel.runNextProgram(10),second=kernel.runNextProgram(11);
assert.equal(first.id,'analysis.force-acceleration');assert.equal(second.id,'analysis.inertial-velocity');
for(const result of [first,second]){assert.equal(result.status,'verified');assert.equal(result.origin,'aura-learned');assert.equal(result.tests.length,2);assert.ok(result.tests.every(x=>x.passed));assert.ok(result.competingHypotheses.length>=4);}
assert.throws(()=>kernel.runNextProgram(12),/agenda is voltooid/);
for(const prediction of events.filter(x=>x.type==='self-learning.prediction-committed')){const observed=events.findIndex(x=>x.type==='self-learning.experiment-observed'&&x.payload.experimentId===prediction.payload.experimentId);assert.ok(events.indexOf(prediction)<observed);}
assert.equal(events.filter(x=>x.type==='self-learning.question-selected').length,2);
assert.equal(events.filter(x=>x.type==='self-learning.experiment-plan-committed').length,2);
