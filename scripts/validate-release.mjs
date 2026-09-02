import {access,readFile} from 'node:fs/promises';

const required=['index.html','README.md','ROADMAP.md','TESTING.md','MODULES.md','AURA_CONSTITUTION.md','EXPERIMENTS.md','docs/WORLD_LAWS.md','docs/OBSERVATORY.md','docs/EMBODIMENT.md','docs/SENSORIMOTOR.md','docs/PERCEPTION.md','docs/MEMORY.md','docs/BELIEFS.md','docs/FOUNDATION_MODEL.md','server/README.md','server/relay-example.mjs','.github/workflows/validate.yml','src/embodiment/embodiment-kernel.js','src/sensorimotor/sensorimotor-kernel.js','src/perception/perception-kernel.js','src/memory/memory-kernel.js','src/belief/belief-kernel.js','src/foundation-model/context-compiler.js','src/foundation-model/foundation-model-bridge.js','src/foundation-model/providers.js'];
for(const path of required)await access(path);

const liveLink='https://gasvdv-lab.github.io/AURA/';
for(const path of ['README.md','TESTING.md'])if(!(await readFile(path,'utf8')).includes(liveLink))throw new Error(`${path} mist de vaste live-link`);

const testing=await readFile('TESTING.md','utf8');
for(const marker of ['volledig Nederlandstalig','GESLAAGD','MISLUKT','handmatige praktijktest'])if(!testing.toLowerCase().includes(marker.toLowerCase()))throw new Error(`TESTING.md mist Nederlandse marker: ${marker}`);

const bannedCapabilities=['getUserMedia','geolocation','RTCPeerConnection','navigator.xr'];
for(const path of ['src/app.js','src/core/world/world-kernel.js','src/embodiment/embodiment-kernel.js','src/sensorimotor/sensorimotor-kernel.js','src/perception/perception-kernel.js','src/memory/memory-kernel.js','src/belief/belief-kernel.js','src/foundation-model/context-compiler.js','src/foundation-model/foundation-model-bridge.js','src/foundation-model/providers.js']){const source=await readFile(path,'utf8');for(const token of bannedCapabilities)if(source.includes(token))throw new Error(`Verboden runtimecapability ${token} in ${path}`);}

const memory=(await readFile('src/memory/memory-kernel.js','utf8')).toLowerCase();
for(const token of ['chat history','worldstate()','observatory.records'])if(memory.includes(token))throw new Error(`Verboden geheugensnelkoppeling: ${token}`);

const page=await readFile('index.html','utf8');
for(const id of ['feedback','step','run','trial','observe','remember','recall','believe','propose','evaluate','compile','test-model','live-model','relay-endpoint','relay-model','model-input','reset'])if(!page.includes(`id="${id}"`))throw new Error(`Ontbrekend interface-element: ${id}`);

for(const path of ['src/app.js','src/foundation-model/context-compiler.js','src/foundation-model/foundation-model-bridge.js','src/foundation-model/providers.js']){const source=await readFile(path,'utf8');for(const secretToken of ['OPENAI_API_KEY','api.openai.com','authorization:'])if(source.includes(secretToken))throw new Error(`Servergeheim of directe OpenAI-aanroep in browsercode: ${path}`);}

console.log('AURA v0.8.0 release validation: PASS');
console.log(`Validated ${required.length} required paths, controlled model context, relay isolation, Dutch testing documentation, and excluded capabilities.`);
