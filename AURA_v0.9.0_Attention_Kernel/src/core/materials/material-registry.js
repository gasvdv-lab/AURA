const clean=n=>{if(!Number.isFinite(n)||n<0)throw new Error('Material properties must be finite and non-negative');return n;};
export class MaterialRegistry{
 #items=new Map();
 register(id,p){if(!id||this.#items.has(id))throw new Error(`Invalid or duplicate material: ${id}`);const m=Object.freeze({id,density:clean(p.density),restitution:clean(p.restitution),hardness:clean(p.hardness),toughness:clean(p.toughness),degradationRate:clean(p.degradationRate??0)});if(m.restitution>1)throw new Error('Restitution must be <= 1');this.#items.set(id,m);return m;}
 get(id){const m=this.#items.get(id);if(!m)throw new Error(`Unknown material: ${id}`);return m;}
 entries(){return [...this.#items.values()];}
 snapshot(){return this.entries().map(x=>({...x}));}
 static restore(items){const r=new MaterialRegistry();for(const {id,...p} of items)r.register(id,p);return r;}
}
