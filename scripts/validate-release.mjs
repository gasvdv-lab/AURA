import {access,readFile} from 'node:fs/promises';

const required=['server/start-aura-ai.cmd','server/start-aura-ai.ps1','index.html','README.md','ROADMAP.md','TESTING.md','MODULES.md','AURA_CONSTITUTION.md','EXPERIMENTS.md','docs/WORLD_LAWS.md','docs/OBSERVATORY.md','docs/EMBODIMENT.md','docs/SENSORIMOTOR.md','docs/PERCEPTION.md','docs/MEMORY.md','docs/BELIEFS.md','docs/FOUNDATION_MODEL.md','docs/NATIVE_SKILL.md','docs/ATTENTION.md','server/README.md','server/relay-example.mjs','.github/workflows/validate.yml','src/embodiment/embodiment-kernel.js','src/sensorimotor/sensorimotor-kernel.js','src/perception/perception-kernel.js','src/memory/memory-kernel.js','src/belief/belief-kernel.js','src/capability/capability-kernel.js','src/native-skill/native-skill-kernel.js','src/attention/attention-kernel.js','src/foundation-model/context-compiler.js','src/foundation-model/foundation-model-bridge.js','src/foundation-model/providers.js'];
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
for(const id of ['feedback','workflow-help','next-action','step','run','trial','observe','remember','recall','believe','propose','evaluate','new-hypothesis','attention-status','attention-select','attention-clear','capability-status','capability-id','capability-label','lesson-input','start-learning','test-id','test-challenge','test-expected','test-observed','test-details','run-candidate-test','verify-test','test-pass','test-fail','native-status','native-a','native-b','native-output','native-add-example','native-learn','native-suggest','native-validation-a','native-validation-b','native-validation-output','native-validate','native-test-id','native-test-a','native-test-b','native-expected','native-run','compile','test-model','live-model','relay-provider','relay-endpoint','relay-model','model-input','reset'])if(!page.includes(`id="${id}"`))throw new Error(`Ontbrekend interface-element: ${id}`);

for(const path of ['src/app.js','src/foundation-model/context-compiler.js','src/foundation-model/foundation-model-bridge.js','src/foundation-model/providers.js']){const source=await readFile(path,'utf8');for(const secretToken of ['OPENAI_API_KEY','api.openai.com','authorization:'])if(source.includes(secretToken))throw new Error(`Servergeheim of directe OpenAI-aanroep in browsercode: ${path}`);}

await access('docs/GUIDED_TESTING.md');await access('docs/AUTONOMOUS_LEARNING.md');await access('src/self-learning/self-learning-kernel.js');
for(const id of ['view-toggle','phase-help','self-learning-lab','self-learning-run','self-learning-status'])if(!page.includes(`id="${id}"`))throw new Error(`Ontbrekend begeleidings- of zelfleer-element: ${id}`);
console.log('AURA v0.9.2.1 release validation: PASS');
console.log(`Validated ${required.length} required paths, controlled model context, relay isolation, Dutch testing documentation, and excluded capabilities.`);
