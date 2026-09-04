const clone=structuredClone,round=n=>Math.round(n*1e9)/1e9;
const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z);
const sortedObject=entries=>Object.fromEntries([...entries].sort(([a],[b])=>a.localeCompare(b)));

export class ObjectAbstractionKernel{
  constructor({emit=()=>({id:null}),contactTolerance=1e-6}={}){if(!(contactTolerance>=0))throw new Error('Ongeldige contacttolerantie');this.emit=emit;this.contactTolerance=contactTolerance;this.abstractions=[];this.nextId=1;}
  abstractWorld(worldState,tick=worldState?.tick??0){
    if(!Array.isArray(worldState?.bodies))throw new Error('Ongeldige objectieve wereldtoestand');
    const physicalKey=body=>JSON.stringify([body.materialId,body.mass,body.radius,body.position.x,body.position.y,body.position.z,Boolean(body.static)]),bodies=[...worldState.bodies].sort((a,b)=>physicalKey(a).localeCompare(physicalKey(b)));
    const primitives=bodies.map((body,index)=>this.#primitive(body,index));
    const relations=[];
    for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){const a=bodies[i],b=bodies[j],gap=round(distance(a.position,b.position)-a.radius-b.radius);if(gap<=this.contactTolerance)relations.push({type:'contact',from:i,to:j,gap:Math.max(0,gap)});}
    const materialCounts=new Map(),kindCounts=new Map();for(const p of primitives){materialCounts.set(p.material,(materialCounts.get(p.material)??0)+1);kindCounts.set(p.kind,(kindCounts.get(p.kind)??0)+1);}
    const abstraction={schema:'aura-object-abstraction-v1',id:`abstraction-${this.nextId++}`,sourceTick:tick,primitives,relations,signature:{primitiveKinds:sortedObject(kindCounts),materials:sortedObject(materialCounts),relationTypes:{contact:relations.length},totalMass:round(primitives.reduce((sum,p)=>sum+p.mass,0)),totalMeasure:round(primitives.reduce((sum,p)=>sum+p.measure,0))}};
    this.abstractions.push(abstraction);this.emit('abstraction.generated',{id:abstraction.id,sourceTick:tick,primitiveCount:primitives.length,relationCount:relations.length,signature:clone(abstraction.signature)});return clone(abstraction);
  }
  #primitive(body,index){if(!(body.mass>0&&body.radius>0)||!body.position||!body.materialId)throw new Error('Ongeldige physical body');return {index,kind:'volume',shape:'radial',material:body.materialId,mass:round(body.mass),measure:round(4*Math.PI*body.radius**3/3),extent:round(body.radius*2),static:Boolean(body.static)};}
  latest(){return this.abstractions.length?clone(this.abstractions.at(-1)):null;}
  snapshot(){return {schema:'aura-object-abstraction-state-v1',contactTolerance:this.contactTolerance,nextId:this.nextId,abstractions:clone(this.abstractions)};}
  static restore(snapshot,{emit=()=>({id:null})}={}){if(snapshot?.schema!=='aura-object-abstraction-state-v1')throw new Error('Ongeldige abstractiesnapshot');const kernel=new ObjectAbstractionKernel({emit,contactTolerance:snapshot.contactTolerance});kernel.nextId=snapshot.nextId;kernel.abstractions=clone(snapshot.abstractions);return kernel;}
}
