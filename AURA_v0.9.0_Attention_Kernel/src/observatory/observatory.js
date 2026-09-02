import {createHash} from '../core/causality/hash.js';
export class Observatory{
 constructor(records=[]){this.records=records.map(x=>Object.freeze({...x,payload:Object.freeze(structuredClone(x.payload))}));}
 append({tick,type,causeIds=[],payload={}}){for(const id of causeIds)if(!this.records.some(r=>r.id===id))throw new Error(`Unknown cause: ${id}`);const sequence=this.records.length;const body={sequence,tick,type,causeIds:[...causeIds],payload:structuredClone(payload),previousHash:sequence?this.records.at(-1).hash:null};const record=Object.freeze({...body,id:`evt-${sequence.toString().padStart(8,'0')}`,hash:createHash(body),payload:Object.freeze(body.payload),causeIds:Object.freeze(body.causeIds)});this.records.push(record);return record;}
 snapshot(){return this.records.map(x=>structuredClone(x));}
 static restore(records){return new Observatory(records);}
 verify(){return this.records.every((r,i)=>r.sequence===i&&r.previousHash===(i?this.records[i-1].hash:null)&&r.hash===createHash({sequence:r.sequence,tick:r.tick,type:r.type,causeIds:[...r.causeIds],payload:structuredClone(r.payload),previousHash:r.previousHash}));}
}
