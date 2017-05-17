// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../../lib/glMatrix ../../support/earthUtils ../../support/projectionUtils ../../../../core/requireUtils ../../../../core/promiseUtils ../../../../core/Error ../../../../core/urlUtils ../../../../geometry/support/webMercatorUtils dojo/_base/lang dojo/promise/all ../../../../request ../../../../geometry/SpatialReference ../../webgl-engine/Stage ../../webgl-engine/materials/Material ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Layer ../../webgl-engine/lib/Util ./I3SBinaryReader".split(" "),
function(M,g,v,z,t,N,m,w,O,P,Q,R,S,A,h,r,B,C,D,T,U,V){function x(a){return a&&parseInt(a.substring(a.lastIndexOf("/")+1,a.length),10)}function E(a){var e=new A(x(a.store.indexCRS||a.store.geographicCRS));return e.equals(a.spatialReference)?a.spatialReference:e}function F(a){var e=new A(x(a.store.vertexCRS||a.store.projectedCRS));return e.equals(a.spatialReference)?a.spatialReference:e}function u(a,e,b){if(!P.canProject(a,e))throw new w("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",
{});if("local"===b&&a.isGeographic)throw new w("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",{});}function G(a,e,b,c,l,g){if(null!=b){var f=W;t.mbsToMbs(b.mbs,c,f,e);if(0!==H(a,f)){g.push(b);for(var f=null!=b.children?b.children.length:0,d=0;d<f;d++)G(a,e,l[b.children[d].id],c,l,g)}}}function H(a,e){var b=e[0],c=e[1],l=e[2],g=e[3],f=0;if(b<a[0])var d=a[0]-b,f=f+d*d;c<a[1]&&(d=a[1]-c,f+=d*d);l<a[2]&&(d=a[2]-l,f+=d*d);b>a[3]&&(d=b-a[3],f+=d*d);
c>a[4]&&(d=c-a[4],f+=d*d);l>a[5]&&(d=l-a[5],f+=d*d);if(f>g*g)return 0;if(0<f)return 1;f=Infinity;b-a[0]<f&&(f=b-a[0]);c-a[1]<f&&(f=c-a[1]);l-a[2]<f&&(f=l-a[2]);a[3]-b<f&&(f=a[3]-b);a[4]-c<f&&(f=a[4]-c);a[5]-l<f&&(f=a[5]-l);return f>g?2:1}function I(a,e,b){void 0===b&&(b=["*"]);return a?N.when(M,["../../../../tasks/support/Query","../../../../tasks/QueryTask"]).then(function(c){var l=c[1];c=new c[0]({objectIds:[e],outFields:b});return(new l(a.parsedUrl.path)).execute(c)}).then(function(a){return a&&
a.features&&0<a.features.length?a.features[0].attributes:m.reject(Error("Feature not found in companion feature layer."))}):m.reject(Error("Companion feature layer not present."))}function J(a,e,b,c,l){void 0===c&&(c=["*"]);var g=c.some(function(a){return"*"===a});return R(e.attributeData.map(function(b,d){if(!g&&!c.some(function(b){return a[d].name===b}))return m.resolve(null);var k=O.makeAbsolute(b.href,e.baseUrl);return S(k,{query:{token:l},responseType:"array-buffer"}).then(function(b){return V.readBinaryAttribute(a[d],
b.data)}).otherwise(function(){return null})})).then(function(f){for(var e={},c=0;c<f.length;c++)null!=f[c]&&(e[a[c].name]=f[c][b]);return e})}var K=v.vec4d,q=v.vec3d,s=v.mat4d,y=U.assert,W=K.create();g.DDS_ENCODING_STRING="image/vnd-ms.dds";g.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS=["image/jpeg","image/png"];g.addTrailingSlash=function(a){"/"!==a[a.length-1]&&(a+="/");return a};g.extractWkid=x;g.getIndexCrs=E;g.getVertexCrs=F;g.checkSpatialReferences=function(a,e,b){var c=E(a);a=F(a);u(c,e,b);u(a,
e,b)};g.checkSpatialReference=u;g.processNormals=function(a,e,b){switch(e){case "none":e=a.normals;b=a.positions;var c=a.normalInd,g=a.positionInd;y(a.normalInd.length===a.positionInd.length);a=q.create();for(var h=q.create(),f=0;f<g.length;f+=3){var d=3*g[f],k=b[d],p=b[d+1],L=b[d+2],d=3*g[f+1];a[0]=b[d]-k;a[1]=b[d+1]-p;a[2]=b[d+2]-L;d=3*g[f+2];h[0]=b[d]-k;h[1]=b[d+1]-p;h[2]=b[d+2]-L;q.cross(a,h,a);q.normalize(a);for(d=0;3>d;d++)k=3*c[f+d],e[k]=a[0],e[k+1]=a[1],e[k+2]=a[2]}break;case "east-north-up":break;
case "earth-centered":b(a.normals,t.SphericalRenderSpatialReference);break;case "vertex-reference-frame":break;default:throw Error("Received unexpected normalReferenceFrame: "+e);}};g.getAppropriateTextureEncoding=function(a,e){if(Array.isArray(a)){if(e){var b=a.indexOf(g.DDS_ENCODING_STRING);if(-1<b)return b}for(b=0;b<a.length;b++)if(-1<g.BROWSER_SUPPORTED_IMAGE_ENCODING_STRINGS.indexOf(a[b]))return b;throw Error("Could not find appropriate texture encoding (among "+a.toString()+")");}return-1};
g.findIntersectingNodes=G;g.intersectBoundingBoxWithMbs=H;g.makeNodeDebugVisualizer=function(a,e,b){function c(a){return{ambient:a,diffuse:[0,0,0],transparent:!0,opacity:0.5,blendModeOneOne:!1}}var g=new B(C.createCylinderGeometry(1,1,64,[0,0,1],[0,0,0],!1),"debugCylinder"),m=new B(C.createSphereGeometry(1),"debugSphere"),f={red:new r(c([0.8,0,0]),"debugMaterialRed"),grey:new r(c([0.4,0.4,0.4]),"debugMaterialGrey"),brown:new r(c([0.2,0.1,0]),"debugMaterialBrown"),green:new r(c([0,0.8,0]),"debugMaterialGreen"),
blue:new r(c([0,0,0.8]),"debugMaterialBlue"),yellow:new r(c([0.8,0.8,0]),"debugMaterialYellow"),magenta:new r(c([0.8,0,0.8]),"debugMaterialMagenta")},d;for(d in f)a.add(h.ModelContentType.MATERIAL,f[d]);a.add(h.ModelContentType.GEOMETRY,g);b=new T(b+"_debug",{interaction:"IGNORED"},b+"_debug");a.add(h.ModelContentType.LAYER,b);a.addToViewContent([b.getId()]);var k=q.create(),p=s.create();return{engineLayer:b,added:{},show:function(a,b,c){var d=a.computedMbs;d||(d=K.create(),t.mbsToMbs(a.mbs,b,d,e.spatialReference));
var h="node"+a.id+"dbg";q.set(d,k);var n=d[3];if(n>z.earthRadius/10&&e.spatialReference===t.SphericalRenderSpatialReference){this.showWS(k,Math.max(0.01*n,1E4),c,h+"_center");var d=q.length(k),m=z.earthRadius;m+n>d&&(n=(d*d+m*m-n*n)/(2*d),q.scale(k,n/d),n=Math.sqrt(m*m-n*n))}s.identity(p);s.scale(p,[n,n,0.05*n]);c=f[c];y(c);c=new D({name:h,geometries:[g],materials:[[c]],transformations:[p],castShadow:!1,idHint:h});t.computeLinearTransformation(b,a.mbs,p,e.spatialReference);null!=k&&(p[12]=k[0],p[13]=
k[1],p[14]=k[2]);c.setObjectTransformation(p);this._addToStage(c,h)},showWS:function(a,b,c,d){var e=s.identity();s.scale(e,[b,b,b]);b=f[c];y(b);e=new D({name:d,geometries:[m],materials:[[b]],transformations:[e],castShadow:!1,idHint:d});b=s.identity();s.translate(b,a);e.setObjectTransformation(b);this._addToStage(e,d)},_addToStage:function(b,c){a.add(h.ModelContentType.OBJECT,b);this.engineLayer.addObject(b);var d=this.added[c];void 0!==d&&(a.remove(h.ModelContentType.OBJECT,d.getId()),this.engineLayer.removeObject(d));
this.added[c]=b},clear:function(){for(var b in this.added){var c=this.added[b];a.remove(h.ModelContentType.OBJECT,c.getId());this.engineLayer.removeObject(c)}this.added={}},dispose:function(){this.clear();for(var b in f)a.remove(h.ModelContentType.MATERIAL,f[b].getId());a.remove(h.ModelContentType.GEOMETRY,g.getId());a.remove(h.ModelContentType.LAYER,this.engineLayer.getId())}}};g.postData=function(a,e,b){var c=new XMLHttpRequest;c.open("PUT","/put.php"+a,!0);c.setRequestHeader("Content-type",b);
c.send(e)};g.whenGraphicAttributes=function(a,e,b,c,g){c=c.filter(function(a){return!e.attributes.hasOwnProperty(a)});if(0===c.length)return m.resolve(e);var h=function(a){Q.mixin(e.attributes,a);return e},f=a.companionFeatureLayer,d=a.attributeStorageInfo;return f?I(f,b,c).then(h):d&&(b=g(),null!=b)?J(d,b.node,b.index,c,a.token).then(h):m.reject()};g.queryAttributesFromFeatureLayer=I;g.queryAttributesFromCachedAttributes=J;g.binaryIndexOf=function(a,e){for(var b=0,c=a.length-1;b<c;){var g=b+(c-b>>
1);e>a[g]?b=g+1:c=g}return e===a[b]?b:~b};g.checkPointCloudLayerValid=function(a){if(null==a.store||null==a.store.defaultGeometrySchema||null==a.store.defaultGeometrySchema.geometryType||"points"!==a.store.defaultGeometrySchema.geometryType||null!=a.store.defaultGeometrySchema.topology&&"PerAttributeArray"!==a.store.defaultGeometrySchema.topology||null!=a.store.defaultGeometrySchema.encoding&&""!==a.store.defaultGeometrySchema.encoding&&"lepcc-xyz"!==a.store.defaultGeometrySchema.encoding||null==
a.store.defaultGeometrySchema.vertexAttributes||null==a.store.defaultGeometrySchema.vertexAttributes.position)throw new w("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{});};g.checkPointCloudCompatibleWithView=function(a,e){u(a.spatialReference,e.spatialReference,e.viewingMode)}});