// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/declareExtendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/accessorSupport/decorators ../../../../core/Accessor ../../viewpointUtils".split(" "),function(m,n,k,f,b,l,g){return function(h){function a(a){h.call(this);this.viewpoint=g.create()}k(a,h);a.prototype.begin=function(a,c){this.navigation.begin()};a.prototype.update=function(a,c){var b=c.currentEvent.x,d=c.currentEvent.y,e=c.previousEvent,b=e?e.x-b:-b,d=e?d-e.y:d;a.viewpoint=
g.translateBy(this.viewpoint,a.viewpoint,[b||0,d||0])};a.prototype.end=function(a,b){this.navigation.end()};f([b.property()],a.prototype,"viewpoint",void 0);f([b.property()],a.prototype,"navigation",void 0);return a=f([b.subclass("esri.views.2d.navigation.actions.Pan")],a)}(b.declared(l))});