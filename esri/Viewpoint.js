// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["./core/JSONSupporter","./Camera","./core/lang","./geometry/support/jsonUtils"],function(d,b,e,f){var c=d.createSubclass({declaredClass:"esri.Viewpoint",classMetadata:{properties:{camera:{type:b}}},rotation:0,_rotationSetter:function(a){a%=360;0>a&&(a+=360);return a},scale:0,targetGeometry:null,_targetGeometryReader:function(a){return f.fromJSON(a)},camera:null,_cameraReader:function(a){return b.fromJSON(a)},toJSON:function(){var a={scale:this.scale,rotation:this.rotation,targetGeometry:this.targetGeometry?
this.targetGeometry.toJSON():void 0,camera:this.camera?this.camera.toJSON():void 0};a.camera&&delete a.camera.fov;return e.fixJson(a)},clone:function(){return new c({rotation:this.rotation,scale:this.scale,targetGeometry:this.targetGeometry?this.targetGeometry.clone():null,camera:this.camera?this.camera.clone():null})}});return c});