import {strict as assert} from 'node:assert';
import {SelfLearningKernel} from '../../src/self-learning/self-learning-kernel.js';
const events=[],emit=(type,payload)=>{events.push({type,payload});return {id:`event-${events.length}`};};
const original=new SelfLearningKernel({emit});const learned=original.runForceMassProgram(7);
const restored=SelfLearningKernel.restore(original.snapshot(),{emit});
assert.deepEqual(restored.snapshot(),original.snapshot());assert.deepEqual(restored.get(learned.id),learned);
assert.equal(events[0].type,'self-learning.program-started');assert.equal(events.at(-1).type,'self-learning.verified');
assert.equal(events.at(-1).payload.passed,2);for(const prediction of events.filter(x=>x.type==='self-learning.prediction-committed')){const observationIndex=events.findIndex(x=>x.type==='self-learning.experiment-observed'&&x.payload.experimentId===prediction.payload.experimentId);assert.ok(events.indexOf(prediction)<observationIndex);}
