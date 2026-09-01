export const vec3=(x=0,y=0,z=0)=>({x:Number(x),y:Number(y),z:Number(z)});
export const add=(a,b)=>vec3(a.x+b.x,a.y+b.y,a.z+b.z);
export const sub=(a,b)=>vec3(a.x-b.x,a.y-b.y,a.z-b.z);
export const scale=(v,s)=>vec3(v.x*s,v.y*s,v.z*s);
export const dot=(a,b)=>a.x*b.x+a.y*b.y+a.z*b.z;
export const length=v=>Math.sqrt(dot(v,v));
export const normalize=v=>{const n=length(v);return n?scale(v,1/n):vec3();};
export const finite=v=>[v.x,v.y,v.z].every(Number.isFinite);
