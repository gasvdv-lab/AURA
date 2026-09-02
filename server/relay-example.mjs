import {createServer} from 'node:http';
import {pathToFileURL} from 'node:url';

const prompt=x=>JSON.stringify({controlled_context:x.context,user_input:x.input??''});
export const DEFAULT_ORIGINS=['http://127.0.0.1:5500','http://localhost:5500','https://gasvdv-lab.github.io'];
export function allowedOrigins(env={}){return new Set((env.AURA_ORIGINS??env.AURA_ORIGIN??DEFAULT_ORIGINS.join(',')).split(',').map(x=>x.trim().replace(/\/$/,'')).filter(Boolean));}

export async function callGemini({apiKey,model,incoming,fetchImpl=fetch}){const r=await fetchImpl(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,{method:'POST',headers:{'content-type':'application/json','x-goog-api-key':apiKey},body:JSON.stringify({systemInstruction:{parts:[{text:incoming.instructions}]},contents:[{role:'user',parts:[{text:prompt(incoming)}]}],generationConfig:{maxOutputTokens:400}})}),d=await r.json();if(!r.ok)throw Object.assign(new Error(d.error?.message??'Gemini-fout'),{status:r.status});const text=d.candidates?.[0]?.content?.parts?.map(x=>x.text??'').join('');if(!text)throw new Error('Gemini gaf geen tekst terug');return {id:d.responseId??null,provider:'gemini',model,output_text:text,status:'completed'};}
export async function callGroq({apiKey,model,incoming,fetchImpl=fetch}){const r=await fetchImpl('https://api.groq.com/openai/v1/chat/completions',{method:'POST',headers:{'content-type':'application/json',authorization:`Bearer ${apiKey}`},body:JSON.stringify({model,messages:[{role:'system',content:incoming.instructions},{role:'user',content:prompt(incoming)}],max_completion_tokens:400,temperature:0})}),d=await r.json();if(!r.ok)throw Object.assign(new Error(d.error?.message??'Groq-fout'),{status:r.status});const text=d.choices?.[0]?.message?.content;if(!text)throw new Error('Groq gaf geen tekst terug');return {id:d.id??null,provider:'groq',model:d.model??model,output_text:text,status:'completed'};}

export function createAuraRelay({env=process.env,fetchImpl=fetch}={}){
  const origins=allowedOrigins(env),gemini={apiKey:env.GEMINI_API_KEY,model:env.GEMINI_MODEL??'gemini-2.5-flash'},groq={apiKey:env.GROQ_API_KEY,model:env.GROQ_MODEL??'llama-3.1-8b-instant'};
  const cors=(origin,privateNetwork=false)=>({'content-type':'application/json','access-control-allow-origin':origin,'access-control-allow-private-network':privateNetwork?'true':'false','vary':'origin'});
  const send=(res,status,data,origin)=>{res.writeHead(status,cors(origin));res.end(JSON.stringify(data));};
  return createServer(async(req,res)=>{
    const origin=(req.headers.origin??'').replace(/\/$/,'');
    if(!origins.has(origin))return send(res,403,{error:`Deze pagina is niet toegestaan. Toegestaan: ${[...origins].join(', ')}`},origin||'null');
    if(req.method==='OPTIONS'){res.writeHead(204,{...cors(origin,req.headers['access-control-request-private-network']==='true'),'access-control-allow-methods':'POST, OPTIONS','access-control-allow-headers':'content-type'});return res.end();}
    if(req.method!=='POST'||req.url!=='/v1/aura/respond')return send(res,404,{error:'niet gevonden'},origin);
    let body='';for await(const chunk of req){body+=chunk;if(body.length>200000)return send(res,413,{error:'context te groot'},origin);}
    try{const incoming=JSON.parse(body);if(incoming.context?.schema!=='aura-controlled-context-v1'||incoming.tools?.length)return send(res,400,{error:'ongeldige of onveilige context'},origin);const wanted=incoming.provider==='groq'?'groq':'gemini',primary=wanted==='gemini'?gemini:groq,secondary=wanted==='gemini'?groq:gemini;if(!primary.apiKey&&!secondary.apiKey)return send(res,503,{error:'Geen Gemini- of Groq-sleutel actief. Start de starter opnieuw.'},origin);const invoke=(name,config)=>name==='gemini'?callGemini({...config,incoming,fetchImpl}):callGroq({...config,incoming,fetchImpl});try{const name=primary.apiKey?wanted:(wanted==='gemini'?'groq':'gemini'),config=primary.apiKey?primary:secondary,result=await invoke(name,config);return send(res,200,{...result,fallback:name!==wanted},origin);}catch(error){if(secondary.apiKey&&primary.apiKey&&(error.status===429||error.status>=500)){const name=wanted==='gemini'?'groq':'gemini',result=await invoke(name,secondary);return send(res,200,{...result,fallback:true},origin);}return send(res,error.status??500,{error:error.message},origin);}}catch(error){return send(res,400,{error:error.message},origin);}
  });
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){const port=Number(process.env.PORT??8787);createAuraRelay().listen(port,'127.0.0.1',()=>console.log(`AURA Gemini/Groq-relay is actief op http://127.0.0.1:${port}`));}
