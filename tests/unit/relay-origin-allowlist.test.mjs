import {strict as assert} from 'node:assert';
import {allowedOrigins,DEFAULT_ORIGINS} from '../../server/relay-example.mjs';
const defaults=allowedOrigins({});
for(const origin of DEFAULT_ORIGINS)assert.equal(defaults.has(origin),true);
assert.equal(defaults.has('https://gasvdv-lab.github.io'),true);
assert.deepEqual([...allowedOrigins({AURA_ORIGINS:'https://example.test/, http://127.0.0.1:5500'})],['https://example.test','http://127.0.0.1:5500']);
