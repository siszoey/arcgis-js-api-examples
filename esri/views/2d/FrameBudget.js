// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/now"],function(d,e,c){return function(){function b(a){void 0===a&&(a=Number.MAX_VALUE);this._budget=this._begin=0;this.enabled=!0;this.reset(a)}b.now=function(){return c()};Object.defineProperty(b.prototype,"done",{get:function(){return this.enabled&&this.elapsed>=this._budget},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"elapsed",{get:function(){return c()-this._begin},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"remaining",{get:function(){return Math.max(this._budget-this.elapsed,0)},enumerable:!0,configurable:!0});b.prototype.reset=function(a){void 0===a&&(a=Number.MAX_VALUE);this._begin=c();this._budget=this.enabled?a:Number.MAX_VALUE};return b}()});