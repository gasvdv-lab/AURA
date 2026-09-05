import {strict as assert} from 'node:assert';
import {readFileSync,existsSync} from 'node:fs';

const page=readFileSync(new URL('../../index.html',import.meta.url),'utf8'),app=readFileSync(new URL('../../src/app.js',import.meta.url),'utf8');
for(const id of ['avatar-visual','avatar-mode','avatar-tick','avatar-position','avatar-velocity','avatar-integrity'])assert.match(page,new RegExp(`id="${id}"`));
assert.ok(existsSync(new URL('../../assets/textures/aura-avatar-reference.jpg',import.meta.url)));
assert.match(app,/world\.bodies\.get\(embodimentState\?\.bodyIds\?\.torso\)/);
assert.match(app,/embodiment\.readSensors\('aura-body'\)/);
assert.match(app,/renderWithAvatar/);
assert.doesNotMatch(app,/avatarVisual.*world\.(createBody|applyForce|step)/);
