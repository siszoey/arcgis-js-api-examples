// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/watchUtils ../../../core/Collection ../../../core/Logger ../webgl-engine/lib/RenderSlot ../webgl-engine/lib/RenderPass ../webgl-engine/lib/gl-matrix ./RenderContext".split(" "),function(f,r,h,g,k,d,l,m,n){var p=k.getLogger("esri.views.3d.externalRenderers"),e=m.vec3d;f=function(){function c(){this._renderers=new g}c.prototype.add=function(a,b){this._findOrCreateStageRenderer(a).add(b)};c.prototype.remove=function(a,b){var c=this._findStageRenderer(a);c&&c.remove(b);
0===c.renderers.length&&(c.destroy(),this._renderers.remove(c))};c.prototype._findStageRenderer=function(a){return this._renderers.find(function(b){return b.view===a})};c.prototype._findOrCreateStageRenderer=function(a){var b=this._findStageRenderer(a);b||(b=new q(a),this._renderers.add(b));return b};return c}();var q=function(){function c(a){var b=this;this.view=a;this.didRender=!0;this.needsRender=!1;this.renderers=new g;this._readyWatchHandle=h.init(a,"ready",function(a){a?(b.context=new n(b.view),
b.view._stage.addExternalRenderer([d.OPAQUE_EXTERNAL,d.TRANSPARENT_EXTERNAL],b)):(b.renderers.forEach(function(a){a.dispose(b.context)}),b.context=null)})}c.prototype.destroy=function(){var a=this;this.renderers.drain(function(b){a.context&&b.dispose(a.context)});this.view._stage&&this.view._stage.removeExternalRenderer(this);this._readyWatchHandle&&(this._readyWatchHandle.remove(),this._readyWatchHandle=null);this.context=null};c.prototype.add=function(a){-1!==this.renderers.indexOf(a)?p.warn("add(): Cannot add external renderer: renderer has already been added"):
(this.renderers.add(a),this.context&&(this._webglStateReset(),a.setup(this.context),this.view._stage.setNeedsRender()))};c.prototype.remove=function(a){var b=this.renderers.indexOf(a);-1!==b&&(this.renderers.removeAt(b),this.context&&(a.dispose(this.context),this.view._stage.setNeedsRender()))};c.prototype.initializeRenderContext=function(a){var b=this;this.context.gl=a.rctx.gl;this.context.rctx=a.rctx;0<this.renderers.length&&this._webglStateReset();this.renderers.forEach(function(a){a.setup(b.context)})};
c.prototype.uninitializeRenderContext=function(a){};c.prototype.render=function(a){var b=this;if(a.pass!==l.MATERIAL)return!0;this._updateContext(a);0<this.renderers.length&&this._webglStateReset();this.renderers.forEach(function(c){switch(a.slot){case d.OPAQUE_EXTERNAL:c.render&&c.render(b.context);break;case d.TRANSPARENT_EXTERNAL:c.renderTransparent&&c.renderTransparent(b.context)}});return!0};c.prototype.resetNeedsRender=function(){};c.prototype._updateContext=function(a){this.context.camera.copyFrom(a.camera);
e.set(a.lightingData.direction,this.context.sunLight.direction);e.set(a.lightingData.diffuse,this.context.sunLight.diffuse.color);e.set(a.lightingData.ambient,this.context.sunLight.ambient.color);this.context.sunLight.diffuse.intensity=a.lightingData.diffuse[3];this.context.sunLight.ambient.intensity=a.lightingData.ambient[3];this.context._renderTargetHelper=a.offscreenRenderingHelper};c.prototype._webglStateReset=function(){this.context.rctx.resetState();this.context._renderTargetHelper&&this.context._renderTargetHelper.bindFramebuffer()};
return c}();return f});