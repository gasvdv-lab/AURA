const part=(id,parent,offset,radius,mass)=>Object.freeze({id,parent,offset:Object.freeze(offset),radius,mass});
export const HUMANOID_BLUEPRINT=Object.freeze({
 id:'abstract-humanoid-v1',
 parts:Object.freeze([
  part('torso',null,{x:0,y:1.6,z:0},.34,8),part('head','torso',{x:0,y:2.22,z:0},.24,3),
  part('left-upper-arm','torso',{x:-.48,y:1.82,z:0},.16,2),part('left-lower-arm','left-upper-arm',{x:-.88,y:1.82,z:0},.14,1.5),part('left-hand','left-lower-arm',{x:-1.18,y:1.82,z:0},.12,.8),
  part('right-upper-arm','torso',{x:.48,y:1.82,z:0},.16,2),part('right-lower-arm','right-upper-arm',{x:.88,y:1.82,z:0},.14,1.5),part('right-hand','right-lower-arm',{x:1.18,y:1.82,z:0},.12,.8),
  part('left-upper-leg','torso',{x:-.2,y:.98,z:0},.19,4),part('left-lower-leg','left-upper-leg',{x:-.2,y:.43,z:0},.17,3),part('left-foot','left-lower-leg',{x:-.2,y:0,z:.16},.16,1.2),
  part('right-upper-leg','torso',{x:.2,y:.98,z:0},.19,4),part('right-lower-leg','right-upper-leg',{x:.2,y:.43,z:0},.17,3),part('right-foot','right-lower-leg',{x:.2,y:0,z:.16},.16,1.2)
 ]),
 jointDefaults:Object.freeze({stiffness:18,damping:3,maxForce:40,tolerance:.08})
});
