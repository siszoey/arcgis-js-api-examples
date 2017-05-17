// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["../../../geometry/Extent","./mathUtils","./projectionUtils","../lib/glMatrix","./cameraUtilsInternal"],function(q,g,k,l,r){function m(a,b,s){a=d.create();var c=d.create();e.identity(h);e.rotateZ(h,-g.deg2rad(b));e.rotateX(h,g.deg2rad(s));e.multiplyVec3(h,n,a);d.scale(a,-1);e.multiplyVec3(h,p,c);return{direction:a,up:c}}var t={headingTiltToDirectionUp:m,directionToHeadingTilt:function(a,c,b,d){return r.directionToHeadingTilt(c,b,d,n,p)},eyeForCenterWithHeadingTilt:function(a,c,b,e){var f=
m(a,b,e);a=d.add(d.scale(f.direction,-c,d.create()),a);return{up:f.up,eye:a,heading:b,tilt:e}},lookAtTiltToEyeTilt:function(a,b,c){return g.rad2deg(c)},eyeTiltToLookAtTilt:function(a,c,b){return g.deg2rad(b)},toExtent:function(a,d,e,h,f){var g=a.renderSpatialReference;a=a.map&&a.spatialReference||d.spatialReference;k.pointToVector(d,b,g);k.pointToVector(d,c,g);b[0]-=e/2;c[0]+=e/2;b[1]-=h/2;c[1]+=h/2;k.vectorToVector(b,g,b,a);k.vectorToVector(c,g,c,a);f?(f.xmin=b[0],f.ymin=b[1],f.xmax=c[0],f.ymax=
c[1],f.spatialReference=a):f=new q(b[0],b[1],c[0],c[1],a);return f}},d=l.vec3d,e=l.mat4d,p=d.createFrom(0,1,0),n=d.createFrom(0,0,1),h=e.create(),b=d.create(),c=d.create();return t});