import {strict as assert} from 'node:assert';
import {readFile} from 'node:fs/promises';
const app=await readFile(new URL('../../src/app.js',import.meta.url),'utf8');
assert.match(app,/phaseGuidance\.insertAdjacentElement\('afterend',feedback\)/);
assert.match(app,/AI-aanroep bezig… even wachten/);
assert.match(app,/setAttribute\('aria-busy','true'\)/);
assert.match(app,/removeAttribute\('aria-busy'\)/);
