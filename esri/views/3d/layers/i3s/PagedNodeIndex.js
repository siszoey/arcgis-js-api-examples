// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../../lib/glMatrix ../../support/projectionUtils ../../support/aaBoundingBox ../../support/orientedBoundingBox".split(" "),function(u,v,q,t,r,s){return function(){function c(a,b,e){this._pages=[];this.pageSize=0;this._renderSR=this._nodeSR=null;this._nodeSR=a;this._renderSR=b;this.pageSize=e}c.prototype.addPage=function(a,b){for(;this._pages.length<a;)this._pages.push(null);for(var e=this._pages,g=this._nodeSR,h=this._renderSR,k=new s.ObbArray(b.length),d=0;d<b.length;d++)t.bufferToBuffer(b[d].obb.center,
g,0,k.obbs[d].center,h,0,1),q.vec3.set(b[d].obb.halfSize,k.obbs[d].halfSize),q.quat4.set(b[d].obb.quaternion,k.obbs[d].quaternion);e[a]={nodes:b,renderObbs:k.obbs,parents:new Uint32Array(this.pageSize)};e=this._pages;g=this.pageSize;for(h=[0];h.length;)for(var k=h.pop(),d=e[k/g|0].nodes[k%g],l=0;l<d.childCount;l++){var m=d.firstChild+l;null!=e[m/g|0]&&(e[m/g|0].parents[m%g]=k,h.push(m))}};c.prototype.hasPage=function(a){return!!this._pages[a]};c.prototype.getNode=function(a){var b=this.pageSize;return this._pages[a/
b|0].nodes[a%b]};c.prototype.getRenderObb=function(a){var b=this.pageSize;return this._pages[a/b|0].renderObbs[a%b]};c.prototype.getRenderCenter=function(a){return this.getRenderObb(a).center};c.prototype.getParentId=function(a){var b=this.pageSize;return this._pages[a/b|0].parents[a%b]};c.prototype.hasNodes=function(a,b){for(var e=(a+b-1)/this.pageSize|0,g=a/this.pageSize|0;g<=e;g++)if(null==this._pages[g])return!1;return!0};c.prototype.createVisibilityTraverse=function(){var a=this,b=[],e=[],g=
r.create();return function(h,k){b.length=0;b.push(0);e.length=0;for(e.push(0);0<b.length;){var d=b.pop(),l=e.pop(),m=a.getNode(d),c=a.getRenderObb(d),p=!0;if(null!=h.clippingBox){var n=1<<h.frustumPlanes.length;if(0===(l&n)){var f=s.toAaBoundingBox(c,g);r.containsAabb(h.clippingBox,f)?l|=n:r.intersectsAabb(h.clippingBox,f)||(p=!1)}}for(f=0;f<h.frustumPlanes.length&&p;f++)if(n=1<<f,0===(l&n)){var q=s.intersectPlane(c,h.frustumPlanes[f]);0<q?p=!1:0>q&&(l|=n)}if(k.predicate(d,m,p)){c=m.firstChild;m=
m.childCount;f=!1;p=(c+m-1)/a.pageSize|0;for(n=c/a.pageSize|0;n<=p;n++)if(!a.hasPage(n)){k.pageMiss(d,n);f=!0;break}if(!f)for(f=0;f<m;f++)b.push(c+f),e.push(l)}}}};return c}()});