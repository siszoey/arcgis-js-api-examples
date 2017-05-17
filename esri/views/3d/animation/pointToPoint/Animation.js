// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../animation/pointToPoint/Animation ./Camera ../../lib/glMatrix ../../webgl-engine/lib/Camera".split(" "),function(d,k,r,m,l,n,p){var f=n.vec3d,q=f.create();d=function(){function a(e){this.animation=new m.Animation(function(){return new l.default(e)});this._current=new l.default(e)}Object.defineProperty(a.prototype,"finished",{get:function(){return this.currentTime>=this.animation.time},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"time",{get:function(){return this.animation.time},enumerable:!0,configurable:!0});a.prototype.update=function(e,c,a){var g=this.animation.definition.source,d=this.animation.definition.target,b=f.subtract(c.center,e.center,q),h=f.length(b);1E-5<=h?(b[0]/=h,b[1]/=h,b[2]/=h):(b[0]=0,b[1]=1,b[0]=0);f.set(b,g.lookAtDirection);f.set(b,d.lookAtDirection);g.copyFromRenderCamera(e);d.copyFromRenderCamera(c);this._current.copyFrom(g);this.animation.update(g,d,a);this.currentTime=0};a.prototype.cameraAt=function(e,
c){var a=this.animation.cameraAt(e,this._current);c||(c=new p);a.copyToRenderCamera(c);return c};a.prototype.step=function(a,c){this.finished||(this.currentTime+=a,this.currentTime>=this.time&&(this.currentTime=this.time));return this.cameraAt(this.currentTime/this.time,c)};return a}();k.Animation=d;Object.defineProperty(k,"__esModule",{value:!0});k.default=d});