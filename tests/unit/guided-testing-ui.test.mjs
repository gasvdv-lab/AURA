import {strict as assert} from 'node:assert';
import {readFile} from 'node:fs/promises';
const page=await readFile(new URL('../../index.html',import.meta.url),'utf8');
const app=await readFile(new URL('../../src/app.js',import.meta.url),'utf8');
const css=await readFile(new URL('../../styles/main.css',import.meta.url),'utf8');
for(const id of ['world-lab','attention-lab','learning-lab','native-lab','ai-lab','research-state'])assert.match(page,new RegExp(`href="#${id}"`));
assert.match(page,/id="view-toggle"/);assert.match(page,/id="phase-help"/);
assert.match(app,/panel\.hidden=panel\.id!==id/);assert.match(app,/body\.classList\.toggle\('focus-mode'/);
assert.match(css,/\.focus-mode main>section\[hidden\]\{display:none\}/);
