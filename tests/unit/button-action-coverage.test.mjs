import {strict as assert} from 'node:assert';
import {readFile} from 'node:fs/promises';
const html=await readFile(new URL('../../index.html',import.meta.url),'utf8'),app=await readFile(new URL('../../src/app.js',import.meta.url),'utf8');
const ids=[...html.matchAll(/<button[^>]+id="([^"]+)"/g)].map(x=>x[1]);assert.ok(ids.length>=25);
for(const id of ids)assert.equal(app.includes(`'${id}'`),true,`Zichtbare knop zonder codeverwijzing: ${id}`);
