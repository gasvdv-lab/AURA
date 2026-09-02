const clone=structuredClone;
export class DeterministicTestProvider{
 constructor(){this.id='deterministic-test-provider';}
 async generate(request){const c=request.context;return {provider:this.id,model:'none',text:`CONTEXT_OK perception=${c.perception?1:0} memories=${c.memories.length} beliefs=${c.beliefs.length} hypotheses=${c.hypotheses.length}`,raw:null};}
}
export class RelayProvider{
 constructor({endpoint,model,fetchImpl=fetch,timeoutMs=30000}={}){if(!endpoint||!model)throw new Error('Relay-endpoint en model zijn verplicht');const url=new URL(endpoint);if(url.protocol!=='https:'&&!['localhost','127.0.0.1'].includes(url.hostname))throw new Error('Relay moet HTTPS gebruiken, behalve lokaal');this.id='trusted-relay';this.endpoint=url.href;this.model=model;this.fetchImpl=fetchImpl;this.timeoutMs=timeoutMs;}
 async generate(request){const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),this.timeoutMs);try{const response=await this.fetchImpl(this.endpoint,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({model:this.model,instructions:request.instructions,input:request.input,context:clone(request.context),store:false,tools:[]}),signal:controller.signal});if(!response.ok)throw new Error(`Relay antwoordde met HTTP ${response.status}`);const data=await response.json(),text=data.output_text??data.text??data.output?.flatMap(x=>x.content??[]).find(x=>x.type==='output_text')?.text;if(typeof text!=='string'||!text.trim())throw new Error('Relay gaf geen tekst terug');return {provider:this.id,model:data.model??this.model,text:text.trim(),raw:{responseId:data.id??null,status:data.status??'completed'}};}finally{clearTimeout(timer);}}
}
