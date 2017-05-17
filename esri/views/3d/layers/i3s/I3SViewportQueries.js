// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../../lib/glMatrix ./I3SUtil ../../webgl-engine/lib/Util ../../support/projectionUtils ../graphics/Graphics3DSymbolCommonCode ../../../../geometry/Point".split(" "),function(s,t,k,n,p,m,q,r){var f=k.vec3d,l=k.vec4d;return function(){function g(a,b,c,d,e,g,k,h){void 0===h&&(h={});this.indexSR=a;this.extent=d;this.errorMetricPreference=e;this.elevationProvider=g;this.elevationInfo=k;this.options=h;this.fp=[];this._tmp1=[0,0,0];this._tmp2=[0,0,0];this._tmp3=[0,0,0];this._tmp0=
[0,0,0];this.supportedMetrics=["screenSpaceRelative","maxScreenThreshold","removedFeatureDiameter","distanceRangeFromDefaultCamera"];this.maxDistance=h.maxDistance||Number.MAX_VALUE;this.screenspaceErrorBias=h.screenspaceErrorBias||1;this.enableLoD=!1!==h.disableLod;for(d=0;8>d;++d)this.fp[d]=l.create();p.matrix2frustumPlanes(c.viewMatrix,c.projectionMatrix,this.fp);this.engineSR=b.spatialReference;this._screenSizeFactor=1/c.perPixelRatio;this._camPos=c.eye;this._center=c.center;this._camDir=f.subtract(this._center,
this._camPos,[0,0,0]);f.normalize(this._camDir);this.tmpPoint=new r({x:0,y:0,z:0,spatialReference:a})}g.prototype.computedMbs=function(a){a.computedMbs||(a.computedMbs=l.create(),a.computedMbs[3]=-1);var b=a.computedMbs;0>b[3]&&(l.set(a.mbs,b),this.elevationProvider&&1E5>a.mbs[3]&&(this.tmpPoint.x=b[0],this.tmpPoint.y=b[1],this.tmpPoint.z=b[2],b[2]=q.computeElevation(this.elevationProvider,this.tmpPoint,this.elevationInfo)),m.mbsToMbs(b,this.indexSR,b,this.engineSR));return b};g.prototype.isNodeVisible=
function(a){a=this.computedMbs(a);return this.isMBSinExtent(a)&&this.isMBSVisible(a)};g.prototype.isMBSinExtent=function(a){return!this.extent?!0:0!==n.intersectBoundingBoxWithMbs(this.extent,a)};g.prototype.isMBSVisible=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];var e=this.fp;return e[0][0]*b+e[0][1]*c+e[0][2]*d+e[0][3]<=a&&e[1][0]*b+e[1][1]*c+e[1][2]*d+e[1][3]<=a&&e[2][0]*b+e[2][1]*c+e[2][2]*d+e[2][3]<=a&&e[3][0]*b+e[3][1]*c+e[3][2]*d+e[3][3]<=a&&e[4][0]*b+e[4][1]*c+e[4][2]*d+e[4][3]<=a&&e[5][0]*
b+e[5][1]*c+e[5][2]*d+e[5][3]<=a};g.prototype.calcScreenSpaceSize=function(a,b){var c=this.computedMbs(a),d=c[3],c=f.dist2(c,this._camPos)-d*d;return 0>c?0.5*Number.MAX_VALUE:b/Math.sqrt(c)*this._screenSizeFactor};g.prototype.calcCameraDistance=function(a){a=this.computedMbs(a);return Math.max(0,f.dist(a,this._camPos)-a[3])};g.prototype.calcAngleDependentLoD=function(a){a=this.computedMbs(a);var b=a[3];a=(Math.abs(a[0]*(a[0]-this._camPos[0])+a[1]*(a[1]-this._camPos[1])+a[2]*(a[2]-this._camPos[2]))/
f.length(a)+b)/f.dist(a,this._camPos);return Math.min(1,a)};g.prototype.hasLOD=function(a){return this.enableLoD&&null!=a.lodSelection};g.prototype.hasFeatures=function(a){return null!=a.features&&0<a.features.length||null!=a.featureData};g.prototype.getDistancePlanarMode=function(a,b,c){var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];d=d+d+e*e;if(d<=c*c)return Math.abs(a);c=Math.sqrt(d)-c;return Math.sqrt(a*a+c*c)};g.prototype.getDistanceGlobeMode=function(a,b,c){var d=f.length(b),e=f.length(a)-d;f.scale(a,
f.dot(a,b)/f.length2(a),this._tmp0);if(f.dist2(b,this._tmp0)<=c*c)return Math.abs(e);b=f.scale(b,1/d,this._tmp0);var d=f.scale(b,d-c*c/2/d,this._tmp1),g=f.subtract(a,d,this._tmp2),g=f.subtract(g,f.scale(b,f.dot(b,g),this._tmp3),this._tmp2),d=f.add(d,f.scale(g,c/f.length(g),this._tmp2),this._tmp2);c=f.dist(a,d);2E5<=e&&(a=f.subtract(a,d,this._tmp1),a=f.dot(a,b)/f.length(a),0.08>a&&(a=1E-4),c/=a);return c};g.prototype.getDistance=function(a,b,c){return this.engineSR===m.SphericalRenderSpatialReference?
this.getDistanceGlobeMode(a,b,c):this.getDistancePlanarMode(a,b,c)};g.prototype._selectErrorMetric=function(a){if(this.errorMetricPreference)for(var b=0;b<this.errorMetricPreference.length;b++)for(var c=0;c<a.length;c++){if(a[c].metricType===this.errorMetricPreference[b])return a[c]}else for(b=0;b<a.length;b++)if(0<=this.supportedMetrics.indexOf(a[b].metricType))return a[b];return null};g.prototype.isTooHighLOD=function(a){if(a.lodSelection&&0<a.lodSelection.length){if(!1===this.hasFeatures(a))return!1;
var b=this._selectErrorMetric(a.lodSelection);if(null!=b)return this.evaluateLODmetric(a,b)}return!1};g.prototype.evaluateLODmetric=function(a,b){if("screenSpaceRelative"===b.metricType){var c=this.computedMbs(a),c=2*this.getDistance(this._camPos,c,c[3])/this._screenSizeFactor;return b.maxError*this.screenspaceErrorBias<=c}return"maxScreenThreshold"===b.metricType?(c=this.calcScreenSpaceSize(a,a.mbs[3]),this.options.angleDependentLoD&&(c*=this.calcAngleDependentLoD(a)),c*this.screenspaceErrorBias<
b.maxError):"removedFeatureDiameter"===b.metricType?10>this.calcScreenSpaceSize(a,b.maxError)*this.screenspaceErrorBias:"distanceRangeFromDefaultCamera"===b.metricType?this.calcCameraDistance(a)>b.maxError:!1};g.prototype.isChosenLOD=function(a,b,c,d){return a.lodSelection&&0<a.lodSelection.length?(c||!a.children)&&!(b&&d):!0};g.prototype.distToPOI=function(a,b){var c=this.computedMbs(a);return f.dist(c,b)-c[3]};return g}()});