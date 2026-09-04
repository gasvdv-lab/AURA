import {strict as assert} from 'node:assert';
import {readFileSync} from 'node:fs';

const source=readFileSync(new URL('../../src/app.js',import.meta.url),'utf8');
assert.match(source,/OBSOLETE_KEYS=LEGACY_KEYS\.filter\(key=>key!==KEY\)/);
assert.match(source,/for\(const key of OBSOLETE_KEYS\)localStorage\.removeItem\(key\)/);
assert.match(source,/QuotaExceededError/);
assert.match(source,/const message=await operation\(\);const persisted=save\(\)/);
assert.match(source,/het resultaat is uitgevoerd, maar kon niet lokaal worden bewaard/);
