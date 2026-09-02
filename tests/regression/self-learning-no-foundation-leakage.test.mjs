import {strict as assert} from 'node:assert';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../../src/self-learning/self-learning-kernel.js',import.meta.url),'utf8');
for(const forbidden of ['FoundationModel','RelayProvider','fetch(','expectedAnswer','GEMINI','GROQ'])assert.equal(source.includes(forbidden),false);
