// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("../../../../core/declare ./Graphics3DSymbolLayer ./Graphics3DGraphicLayer ./Graphics3DSymbolCommonCode ../../support/projectionUtils ../../../../views/3d/lib/glMatrix ../../webgl-engine/Stage ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/materials/Material ../../webgl-engine/lib/Util".split(" "),function(r,D,E,m,F,w,z,G,H,A,I,B){var x=w.vec3d,C=w.mat4d,J=B.assert,h=x.create(),u={};r=r([D],{_prepareResources:function(){var a=
"c3dsymbol"+this.symbol.id,b=this._getMaterialOpacityAndColor(),c=x.create(b),b=b[3],c={diffuse:c,ambient:c,opacity:b,transparent:1>b||this._isPropertyDriven("opacity"),vertexColors:this._isPropertyDriven("color")||this._isPropertyDriven("opacity")};this._material=new I(c,a+"_3dlinemat");this._context.stage.add(z.ModelContentType.MATERIAL,this._material);this.resolve()},destroy:function(){this.isFulfilled()||this.reject();this._material&&(this._context.stage.remove(z.ModelContentType.MATERIAL,this._material.getId()),
this._material=null)},createGraphics3DGraphic:function(a,b){var c=a.geometry;if("polyline"!==c.type)return this._logWarning("unsupported geometry type for path symbol: "+c.type),null;var c="polygon"===c.type?"rings":"paths",m="graphic"+a.uid,g=this._getGraphicElevationInfo(a);return this._createAs3DShape(a,c,b,g,m,a.uid)},layerPropertyChanged:function(a,b,c){if("opacity"===a)return b=this._getMaterialOpacity(),c=1>b||this._isPropertyDriven("opacity"),this._material.setParameterValues({opacity:b,transparent:c}),
!0;if("elevationInfo"===a){this._updateElevationInfo();a=this._context.elevationProvider;var K=this._context.renderCoordsHelper,g=m.ELEV_MODES.ABSOLUTE_HEIGHT,h;for(h in b){var e=b[h],l=e._graphics[c];l&&(e=this._getGraphicElevationInfo(e.graphic),l.elevationAligner=e.mode!==g?y:null,l.elevationInfo.set(e),y(l,a,K))}return!0}return!1},_getPathSize:function(a,b){var c=a.size&&this._isPropertyDriven("size")?m.getSingleSizeDriver(a.size):this.symbol.size||this.symbol.width||1;return c/=this._context.renderCoordsHelper.unitInMeters},
_createAs3DShape:function(a,b,c,h,g,u){var e=a.geometry,l=e.hasZ,f=e[b];if(0<f.length){b=[];a=[];for(var p=[],n=x.create(),r=this._context.renderSpatialReference===F.SphericalRenderSpatialReference,v=Array(6),q=this._getPathSize(c,this.symbol),f=m.getGeometryVertexData3D(f,l,e.spatialReference,this._context.renderSpatialReference,this._context.elevationProvider,h),e=f.geometryData.outlines,l=f.eleVertexData,f=f.vertexData,s=0;s<e.length;++s){var d=e[s],k=d.index,t=d.count;if(this._context.clippingExtent&&
(m.computeBoundingBox(l,k,t,v),m.boundingBoxClipped(v,this._context.clippingExtent)))continue;m.chooseOrigin(f,k,t,n);m.subtractCoordinates(f,k,t,n);d=new Float64Array(l.buffer,3*k*l.BYTES_PER_ELEMENT,3*t);k=m.flatArrayToArrayOfArrays(f,k,t);k=A.createTubeGeometry(k,0.5*q,10,r,n);k.getVertexAttr().mapPos={size:3,data:d};this._material.getParams().vertexColors&&(d=this._getVertexOpacityAndColor(c),k=A.addVertexColors(k,d,!0));d=new H(k,g+"path"+s);d.singleUse=!0;b.push(d);a.push([this._material]);
d=C.identity();C.translate(d,n,d);p.push(d)}if(0<b.length)return c=new G({geometries:b,materials:a,transformations:p,castShadow:!0,metadata:{layerId:this._context.layer.id,graphicId:u},idHint:g}),g=null,h.mode!==m.ELEV_MODES.ABSOLUTE_HEIGHT&&(g=y),new E(this,c,b,null,null,g,h)}return null}});var L=B.VertexAttrConstants,y=function(a,b,c){var r=a.stageObject;a=a.elevationInfo;for(var g=r.getGeometryRecords(),x=g.length,e=0;e<x;e++){var l=g[e].geometry,f=[g[e].transformation[12],g[e].transformation[13],
g[e].transformation[14]],p=l.getData().getVertexAttr(),n=p[L.POSITION].data,y=p.zOffset.data,p=p.mapPos.data,v=p.length/3;J(n.length/3===10*v+2,"unexpected tube geometry");var q=0,s=0;u.spatialReference=b.spatialReference;for(var d=0;d<v;d++){u.x=p[3*d];u.y=p[3*d+1];u.z=p[3*d+2];var k=m.computeElevation(b,u,a),t=10;(0===d||d===v-1)&&t++;for(var w=0;w<t;w++)h[0]=n[q]+f[0],h[1]=n[q+1]+f[1],h[2]=n[q+2]+f[2],c.setAltitude(k+y[s],h,0),n[q]=h[0]-f[0],n[q+1]=h[1]-f[1],n[q+2]=h[2]-f[2],q+=3,s+=1;l.invalidateBoundingInfo()}r.geometryVertexAttrsUpdated(e)}};
return r});