import {strict as assert} from 'node:assert';
import {CapabilityKernel} from '../../src/capability/capability-kernel.js';
const build=source=>{const k=new CapabilityKernel();k.propose({id:'arithmetic.multiply'});k.addEvidence('arithmetic.multiply',{sourceType:'human-instruction',sourceId:'les',summary:'methode'});k.recordEvaluation('arithmetic.multiply',{testId:'p1',passed:true,evaluationSource:source});k.recordEvaluation('arithmetic.multiply',{testId:'p2',passed:true,evaluationSource:source});return k;};
assert.equal(build('foundation-model').available()[0].origin,'foundation-authorized');
assert.equal(build('native-runtime').available()[0].origin,'aura-learned');
assert.equal(build('unknown').available()[0].origin,'unknown-origin');
