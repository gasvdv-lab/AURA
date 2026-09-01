import {strict as assert} from 'node:assert';
const nodes=new Map(['status','log','step','run','trial','reset'].map(id=>[id,{textContent:'',onclick:null}]));const store=new Map();
Object.defineProperty(globalThis,'document',{value:{querySelector:s=>nodes.get(s.slice(1))},configurable:true});
Object.defineProperty(globalThis,'localStorage',{value:{getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)},configurable:true});
Object.defineProperty(globalThis,'location',{value:{reload(){}},configurable:true});
await import('../../src/app.js');assert.match(nodes.get('status').textContent,/14 body parts/);assert.match(nodes.get('status').textContent,/0 sensorimotor trials/);assert.match(nodes.get('log').textContent,/abstract-humanoid-v1/);await nodes.get('trial').onclick();assert.match(nodes.get('status').textContent,/1 sensorimotor trials/);assert.ok(store.has('aura-sensorimotor-kernel-v0.4.0'));
