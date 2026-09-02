import {strict as assert} from 'node:assert';
const nodes=new Map(['status','log','step','run','trial','observe','remember','recall','reset'].map(id=>[id,{textContent:'',onclick:null}]));const store=new Map();
Object.defineProperty(globalThis,'document',{value:{querySelector:s=>nodes.get(s.slice(1))},configurable:true});
Object.defineProperty(globalThis,'localStorage',{value:{getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)},configurable:true});
Object.defineProperty(globalThis,'location',{value:{reload(){}},configurable:true});
await import('../../src/app.js');assert.match(nodes.get('status').textContent,/14 body parts/);assert.match(nodes.get('status').textContent,/0 traces/);await nodes.get('observe').onclick();await nodes.get('remember').onclick();assert.match(nodes.get('status').textContent,/1 traces/);await nodes.get('recall').onclick();assert.match(nodes.get('log').textContent,/memoryState/);assert.ok(store.has('aura-memory-kernel-v0.6.0'));
