// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/typescript ../../../core/Accessor".split(" "),function(l,m,e,b,c,f){var g=function(d){function a(){d.apply(this,arguments)}e(a,d);b([c.property({value:1})],a.prototype,"lodFactor",void 0);return a=b([c.subclass()],a)}(f),h=function(d){function a(){d.apply(this,arguments)}e(a,d);a.prototype.getDefaults=function(){return{"3dObject":new g,point:new g,integratedMesh:new g,
pointCloud:new g}};b([c.property()],a.prototype,"3dObject",void 0);b([c.property()],a.prototype,"point",void 0);b([c.property()],a.prototype,"integratedMesh",void 0);b([c.property()],a.prototype,"pointCloud",void 0);return a=b([c.subclass()],a)}(f),k=function(d){function a(){d.apply(this,arguments)}e(a,d);b([c.property({value:0})],a.prototype,"lodBias",void 0);b([c.property({value:1})],a.prototype,"angledSplitBias",void 0);return a=b([c.subclass()],a)}(f);return function(d){function a(){d.apply(this,
arguments)}e(a,d);a.prototype.getDefaults=function(){return{sceneService:new h,tiledSurface:new k,antialiasingEnabled:!0}};b([c.property()],a.prototype,"sceneService",void 0);b([c.property()],a.prototype,"tiledSurface",void 0);b([c.property()],a.prototype,"antialiasingEnabled",void 0);return a=b([c.subclass()],a)}(f)});