// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/watchUtils ../../../core/promiseUtils ../../../core/Logger ../../../core/lang dojo/_base/lang dojox/color/_base dojo/has ../../layers/LayerView ../../../Graphic ../../../symbols/Symbol3D ../../../geometry/Extent ./i3s/I3SUtil ./i3s/I3SBinaryReader ./i3s/I3SProjectionUtil ./i3s/I3SQueryEngine ./graphics/graphicUtils ./support/LayerViewUpdatingPercentage ../support/intersectionUtils ../support/projectionUtils ../support/aaBoundingBox ../webgl-engine/Stage ../webgl-engine/lib/Layer ../webgl-engine/lib/Geometry ../webgl-engine/lib/GeometryData ../webgl-engine/lib/Object3D ../webgl-engine/lib/Texture ../webgl-engine/materials/Material ../webgl-engine/lib/Util ../webgl-engine/lib/base64Binary ../lib/glMatrix ../../../layers/IntegratedMeshLayer".split(" "),
function(xa,ya,ca,z,A,N,G,da,ea,fa,ga,ha,ia,ja,ka,la,J,U,O,ma,Y,na,oa,P,H,V,pa,qa,ra,sa,M,ta,x,za,I,W){function Z(p,e,a,b){var c=!1,d;e.encoding===J.DDS_ENCODING_STRING?d=M.DDS_ENCODING:c=!($(p.width)&&$(p.height));p=e.usedByEngineMats.some(function(a){return a.getParams().atlasRegions})||e.atlas;a=(a||!p)&&!c;return{mipmap:a,wrapClamp:p||!e.wrap,disableAnisotropy:p&&a&&b,encoding:d,noUnpackFlip:!0}}function aa(p,e){for(var a=e.toLowerCase(),b=0,c=Object.keys(p);b<c.length;b++){var d=c[b];if(d.toLowerCase()===
a)return p[d]}return null}var K=da.getLogger("esri.layers.SceneService"),t=x.assert,ua=x.clamp,$=x.isPowerOfTwo,Q=x.fallbackIfUndefined,R=x.objectEmpty,s=x.VertexAttrConstants,ba=[1,1,1,1],p=V.ModelContentType,va=[0.8,0.8,0.8],wa=[0.5,0.5,0.5],L=1,S=null;return function(x){function e(){x.apply(this,arguments);this._queryEngine=null;this._featuresChangedEventScheduled=!1;this._featuresChangedEvent=null}ca(e,x);e.prototype.initialize=function(){var a=this;J.checkSpatialReferences(this.layer,this.view.spatialReference,
this.view.viewingMode);var b=this.layer.version,b=!ha("trident")||1<b.major||1===b.major&&3<b.minor;this.useCompressedTextures=this.view.has("s3tc")&&b;this._disableAtlasAnisotropy=(this._enableAtlasMipMaps=this.view.has("standardDerivatives"))&&!this.view.has("shaderTextureLOD");this._initGraphicsController();this.dbg=!1;this.maxGpuMemory=1E3;this.geoMemoryEstimate=this.texMemoryEstimate=this.gpuMemoryEstimate=0;this._stage=this.view._stage;this._matId2Meta={};this._texId2Meta={};this._requestedTexImageIds=
{};this._nodeId2Meta={};this._colorOverride=null;for(var b=new Uint8Array(256),c=0;c<b.length;c++)b[c]=255;this._whiteTexture=new M(b,"white",{width:8,height:8});this._stage.add(V.ModelContentType.TEXTURE,this._whiteTexture);this._layerEventHandles=[N.init(this.layer,"renderer",function(b){return a._rendererChange(b)}),N.watch(this,"fullOpacity",function(b){return a._opacityChange(b)}),N.init(this.layer,"objectIdFilter",function(){return a._objectIdFilterChange()}),N.init(this.view,"clippingArea",
function(){return a._clippingAreaChanged()})];this._addThisLayerToStage();this.setVisibility(!this.suspended);this.debugLODVis=this.debugNodeVis=!1};e.prototype.destroy=function(){this._stage.remove(V.ModelContentType.TEXTURE,this._whiteTexture.getId());this._removeThisLayerFromStage();this._layerEventHandles.forEach(function(a){a.remove()});this._stage=null;null!=this._controller&&(this._controller.destroy(),this._controller=null);this._nodeId2Meta=this._texId2Meta=this._matId2Meta=null};e.prototype.canResume=
function(){return this.inherited(arguments)&&(!this._controller||this._controller.rootNodeVisible)};e.prototype.isUpdating=function(){return this._controller&&this._controller.updating};e.prototype.memEstimateTextureAdded=function(a){a=a.getEstimatedTexMemRequiredMB();this.gpuMemoryEstimate+=a;this.texMemoryEstimate+=a};e.prototype.memEstimateTextureRemoved=function(a){a=a.getEstimatedTexMemRequiredMB();this.gpuMemoryEstimate-=a;this.texMemoryEstimate-=a};e.prototype.memEstimateGeometryAdded=function(a){a=
a.estimateGpuMemoryUsage()/1E6;this.gpuMemoryEstimate+=a;this.geoMemoryEstimate+=a};e.prototype.memEstimateGeometryRemoved=function(a){a=a.estimateGpuMemoryUsage()/1E6;this.gpuMemoryEstimate-=a;this.geoMemoryEstimate-=a};e.prototype.isBundleAlreadyAddedToStage=function(a,b){var c=!1,d=!1;if(null!=this._nodeId2Meta[a.id]&&this._nodeId2Meta[a.id].engineObjectsPerBundle&&this._nodeId2Meta[a.id].engineObjectsPerBundle[b])for(var d=!0,f=this._nodeId2Meta[a.id].engineObjectsPerBundle[b],n=0;n<f.length&&
!(c=f[n].isPartiallyHidden());n++);return{wasPartiallyHidden:c,alreadyLoaded:d}};e.prototype._initGraphicsController=function(){var a=this,b={addBundle:this._addBundle.bind(this),isBundleAlreadyAddedToStage:this.isBundleAlreadyAddedToStage.bind(this),isOverMemory:this.isOverMemory.bind(this),removeNodeData:this._removeNodeDataFromStage.bind(this),removeFeatures:this._removeFeatures.bind(this),getAddedFeatures:this._getAddedFeatures.bind(this),getAddedNodeIDs:this._getAddedNodeIDs.bind(this),areAllBundlesLoaded:this._areAllBundlesLoaded.bind(this),
wholeNodeSwitchEnabled:!0},c={additionalStartNodeLoadingHandler:this._startNodeLoading.bind(this),additionalCancelNodeLoadingHandler:this.cancelNodeLoading.bind(this),getTexturePrefetchFunctions:function(){return{_calcDesiredTextureLOD:a._calcDesiredTextureLOD.bind(a),_imageIsPartOfTextureBundle:a._imageIsPartOfTextureBundle.bind(a),_matId2Meta:a._matId2Meta,_texId2Meta:a._texId2Meta,useCompressedTextures:function(){return a.useCompressedTextures}}},_nodeDebugVisualizer:this._nodeDebugVisualizer,
setPolygonOffset:this._setPolygonOffset.bind(this),traversalOptions:{initDepthFirst:!0,neighborhood:!0,perLevelTraversal:!1,allowPartialOverlaps:!1},getLoadedAttributes:this.getLoadedAttributes.bind(this),setAttributeData:this.setAttributeData.bind(this)};this.layer.createGraphicsController({layerView:this,layerViewRequiredFunctions:b,layerViewOptionalFunctions:c}).then(function(b){b.watch("rootNodeVisible",function(){a.notifyChange("suspended")})})};e.prototype.setMaxGpuMemory=function(a){this.maxGpuMemory=
a};e.prototype.setVisibility=function(a){if(this._stage&&this._engineLayer){var b=this._engineLayer.getId(),c=0<=this._stage.getViewContent().indexOf(b);!!a!==c&&(b=[b],null!=this._nodeDebugVisualizer&&b.push(this._nodeDebugVisualizer.engineLayer.getId()),a?this._stage.addToViewContent(b):this._stage.removeFromViewContent(b))}};e.prototype.getEngineLayer=function(){return this._engineLayer};e.prototype.getStats=function(){var a={nodesInIndex:0,knownFeatures:0,activeMaterials:0};if(!this._controller)return a;
for(var b=0,c=Object.keys(this._controller.nodeIndex);b<c.length;b++){var d=c[b];a.nodesInIndex++;d=this._controller.nodeIndex[d];null!=d.features&&(a.knownFeatures+=d.features.length)}a.activeMaterials=Object.keys(this._matId2Meta).length;return a};e.prototype._addThisLayerToStage=function(){var a=this._stage;this._initTexture=new M(null,"i3sInitTexture");a.add(p.TEXTURE,this._initTexture);var b=this.layer.id;this._engineLayer=b=new pa(b,{},b);a.add(p.LAYER,b);null!=this._nodeDebugVisualizer&&this._nodeDebugVisualizer.dispose()};
e.prototype._removeThisLayerFromStage=function(){this.cancelNodeLoading();if(null!=this._engineLayer){var a=this._stage;a.remove(p.TEXTURE,this._initTexture.getId());if(null!=this._controller)for(var b in this._controller.nodeIndex)this._controller.nodeIndex.hasOwnProperty(b)&&(this._removeNodeDataFromStage(this._controller.nodeIndex[b]),delete this._controller.nodeIndex[b]);t(R(this._nodeId2Meta));t(R(this._matId2Meta));t(R(this._texId2Meta));a.remove(p.LAYER,this._engineLayer.getId());null!=this._nodeDebugVisualizer&&
this._nodeDebugVisualizer.dispose();this._nodeDebugVisualizer=void 0;this._matId2Meta={};this._texId2Meta={};this._requestedTexImageIds={};this._nodeId2Meta={};this._engineLayer=void 0;this.gpuMemoryEstimate=0}};e.prototype._startNodeLoading=function(){this._updateAllTextureLOD()};e.prototype.cancelNodeLoading=function(){null!=this._nodeDebugVisualizer&&this._nodeDebugVisualizer.clear();this._requestedTexImageIds={}};e.prototype._isAllHidden=function(a){a=this._nodeId2Meta[a.id].engineObjects;for(var b=
0;b<a.length;b++)if(!a[b].isAllHidden())return!1;return!0};e.prototype.getLoadedAttributes=function(a){if((a=this._nodeId2Meta[a.id])&&1===a.engineObjects.length)return a.engineObjects[0].getMetadata().loadedAttributes};e.prototype.setAttributeData=function(a,b,c){if((a=this._nodeId2Meta[a.id])&&1===a.engineObjects.length){a=a.engineObjects[0];var d=a.getMetadata();d.loadedAttributes=b;d.attributeData=c;this._setObjectSymbology(a)}};e.prototype._createUnitTestData=function(a){var b=this.view.navigation.targetCamera,
b={viewParams:{eye:b.eye,center:b.center,up:b.up,viewMatrix:b.viewMatrix,projectionMatrix:b.projectionMatrix,fovX:b.fovX,viewport:b.viewport,perPixelRatio:b.perPixelRatio},visibleObjects:[]};a=a.getAll("objects");for(var c in a){var d=a[c];if(d.getParentLayer()===this._engineLayer){var f=d.getMetadata(),d=f.i3sNode,f=f.features.map(function(a){return a.id});f.sort();b.visibleObjects.push({featureIDs:f,nodeId:d})}}console.debug(""+b.visibleObjects.length);return JSON.stringify(b)};e.prototype.isOverMemory=
function(){return this.gpuMemoryEstimate>this.maxGpuMemory?(K.warn("over memory: "+this.gpuMemoryEstimate+" tex "+this.texMemoryEstimate+" geom "+this.geoMemoryEstimate),!0):!1};e.prototype._getAddedFeatures=function(a){if(null==this._nodeId2Meta[a])return null;var b=[];a=this._nodeId2Meta[a].engineObjects;for(var c=0;c<a.length;c++)b=b.concat(a[c].getMetadata().features);return b};e.prototype._getAddedNodeIDs=function(){return Object.keys(this._nodeId2Meta)};e.prototype._calcEngineMaterialTransparencyParams=
function(a,b,c){var d=this.fullOpacity,f=1-ua(Q(b.transparency,0),0,1),d=d*f;a=1>d||a&&ea.endsWith(a.channels,"a")||!0===b.useVertexColorAlpha||c;return{opacity:d,transparent:a}};e.prototype._calcEngineMaterialDoubleSidedParams=function(a){return null!=a.doubleSided?a.doubleSided:!0};e.prototype._calcEngineMaterialCullFaceParams=function(a){return a.cullFace?a.cullFace:null!=a.doubleSided?a.doubleSided?"none":"back":"none"};e.prototype._createEngineMaterial=function(a,b,c,d,f,n){var e,h;null!=a&&
(e=(h=this._texId2Meta[b])&&h.engineTex?h.engineTex.getId():this._initTexture.getId());var g=c.params,k=Q(g.diffuse,va),m,q;null!=a&&(q=J.getAppropriateTextureEncoding(a.encoding,this.useCompressedTextures),m=-1<q?a.encoding[q]:a.encoding);"standard"!==c.type&&K.warn("Unknown material type '"+c.type+"', must be 'standard'");void 0===g.reflectivity&&K.warn("Material parameter 'reflectivity' is missing.");c=this.layer instanceof W;e={ambient:this._colorOverride||k,diffuse:this._colorOverride||k,specular:Q(g.specular,
wa),shininess:Q(g.shininess,64),atlasRegions:g.vertexRegions,textureId:e&&this._colorOverride?this._whiteTexture.getId():e,vertexColors:!0,flipV:!1,doubleSided:this._calcEngineMaterialDoubleSidedParams(g),cullFace:this._calcEngineMaterialCullFaceParams(g),writeStencil:c,receiveSSAO:!c};c||(k=this._calcEngineMaterialTransparencyParams(a,g),fa.mixin(e,k));e=new ta(e,d);e.metadata={i3sMatId:d,i3sTexId:b,i3sTex:a,i3sMatParams:g};if(null!=a){h?h.usedByEngineMats.push(e):(h={id:b,featureMBS:{},usedByEngineMats:[e],
images:a.images,encoding:m,encodingIdx:q,atlas:!0===a.atlas,wrap:"none"!==a.wrap[0]||"none"!==a.wrap[1]},this._texId2Meta[b]=h);for(a=0;a<f.length;a++)g=f[a],h.featureMBS[g.id]=g.engineMBS;if(void 0!==n[b]){null==h.engineTex&&(f=n[b].data,a=Z(f,h,this._enableAtlasMipMaps,this._disableAtlasAnisotropy),h.engineTex=new M(f,h.id,a),this._stage.add(p.TEXTURE,h.engineTex),h.desiredLOD=n[b].desiredLOD,h.curLOD=h.desiredLOD,this.memEstimateTextureAdded(h.engineTex));f=h.engineTex.getId();for(a=0;a<h.usedByEngineMats.length;a++)g=
h.usedByEngineMats[a],null==this._colorOverride&&g.setParameterValues({textureId:f}),g.metadata.originalTextureId=f;n[b].createdTextureForDomImage();delete n[b]}else this._updateTextureLOD(h)}this._matId2Meta[d]||(this._matId2Meta[d]={});this._matId2Meta[d][b]={engineMat:e,refCount:1};return e};e.prototype._createVertexAndIndexArrays=function(a,b,c){var d,f=a.params.vertexAttributes,n={},e;for(e in f)if(f.hasOwnProperty(e)&&"classification"!==e){var h=f[e];d=U.valueType2TypedArrayClassMap[h.valueType];
t(null!=d,"unsupported vertex attribute value type: "+h.valueType);n[e]={data:new d(b,h.byteOffset,h.count*h.valuesPerElement),size:h.valuesPerElement}}if(null==n[s.COLOR]){d=U.valueType2TypedArrayClassMap.UInt8;n[s.COLOR]={data:new d(4*f.position.count),size:4};for(var g=0;g<n[s.COLOR].data.length;g++)n[s.COLOR].data[g]=0===g%3?255:0}e=!1;null==n[s.NORMAL]&&(e=!0,d=U.valueType2TypedArrayClassMap.Float32,n[s.NORMAL]={data:new d(3*f.position.count),size:3});f=[];d=a.params.faces;if(null!=d&&"PerAttributeArray"!==
a.params.topology){var k={},m;for(m in d)d.hasOwnProperty(m)&&(h=d[m],t(0===h.count%3),t(h.count===d.position.count),t("UInt32"===h.valueType),k[m]=h.byteOffset);for(var q=a.params.components.length,h=Array(q),p=d.position.componentIndices||[0],r=0;r<q;r++){var u=a.params.components[r],v=r<q-1?p[r+1]-p[r]:d.position.count-p[r];m={type:"triangle",positionKey:"position",indices:{},componentRange:[p[r],p[r]+v]};for(var C in d)d.hasOwnProperty(C)&&(m.indices[C]=new Uint32Array(b,k[C],v),k[C]+=4*v);if(null==
m.indices[s.COLOR]){m.indices[s.COLOR]=new Uint32Array(v);for(g=0;g<v;g++)m.indices[s.COLOR][g]=g}if(e&&null==m.indices[s.NORMAL]){m.indices[s.NORMAL]=new Uint32Array(v);for(g=0;g<v;g++)m.indices[s.NORMAL][g]=g}h[r]=m;var g=u.textureID||"none",w=void 0;"none"!==g&&(w=c.textureDefinitions[g],t(void 0!==w,"geometry wants unknown texture "+g));if(w&&!0===w.atlas&&null!=w.regions){t(0<w.regions.length,"texture marked as atlas carries no region definition");g=w.regions[u.regionID].subimageRegion;f=f.concat([65536*
g[0],65536*(g[2]-g[0]),65536*(1-g[3]),65536*(g[3]-g[1])]);g=new Uint32Array(v);for(u=0;u<v;u++)g[u]=f.length/4-1;m.indices[s.REGION]=g}}}else{m={type:"triangle",positionKey:"position",indices:{}};a=n.position.data.length/n.position.size;if(a>L||null==S){for(;a>L;)L*=2;S=new Uint32Array(L);for(g=0;g<L;g++)S[g]=g}a=new Uint32Array(S.buffer,0,a);for(k in n)m.indices[k]=a;a=m.indices[m.positionKey];m.componentRange=[0,null!=a?a.length-1:0];h=[m]}0<f.length&&(a=new Uint16Array(f),n[s.REGION]={data:a,size:4});
return{indexArrays:h,vertexArrays:n}};e.prototype._createEngineMats=function(a,b,c,d,f){for(var e=a.params.components.length,l=Array(e),h=0;h<e;h++){var g=a.params.components[h],k=g.materialID,m=c.materialDefinitions[k];null!=m.href&&(m=d[m.hrefConcat].materialDefinitions[k]);t(void 0!==m,"geometry wants unknown material "+k);var q=g.textureID||"none",p=void 0;"none"!==q&&((null==c.textureDefinitions||null==c.textureDefinitions[q])&&K.warn("textureDefinitions missing in shared resource"),p=c.textureDefinitions[q]);
g=void 0;this._matId2Meta[k]&&this._matId2Meta[k][q]?(k=this._matId2Meta[k][q],g=k.engineMat,k.refCount++):g=this._createEngineMaterial(p,q,m,k,b,f);l[h]=g}return l};e.prototype._areAllBundlesLoaded=function(a,b){if(null==this._nodeId2Meta[a.id]||null==this._nodeId2Meta[a.id].engineObjectsPerBundle)return!1;for(var c=0;c<a.featureData.length;c++){if(null==this._nodeId2Meta[a.id].engineObjectsPerBundle[c])return!1;if(!b)for(var d=this._nodeId2Meta[a.id].engineObjectsPerBundle[c],f=0;f<d.length;f++)if(d[f].isPartiallyHidden())return!1}return!0};
e.prototype._getObjectIdField=function(){return this.layer.objectIdField||"OBJECTID"};e.prototype._findGraphic=function(a){a=aa(a.attributes,this._getObjectIdField());for(var b=0,c=Object.keys(this._nodeId2Meta);b<c.length;b++)for(var d=c[b],f=this._nodeId2Meta[d].engineObjects,e=0;e<f.length;e++){var l=f[e].getMetadata().featureIds.indexOf(a);if(-1!==l)return{node:this._controller.nodeIndex[d],nodeId:d,bundleNr:e,index:l}}return null};e.prototype.whenGraphicBounds=function(a){var b=this._findGraphic(a);
if(null!=b){a=this._nodeId2Meta[b.nodeId].engineObjects[b.bundleNr];var c=a.getMetadata().faceRanges[b.index],b=new Float64Array(24);this._boundingBoxCornerPoints(c,a,b);if(P.bufferToBuffer(b,this.view.renderSpatialReference,0,b,this.view.spatialReference,0,8))return a=H.create(H.NEGATIVE_INFINITY),H.expandBuffer(a,b,0,8),G.resolve(a)}return G.reject()};e.prototype.whenGraphicAttributes=function(a,b){var c=this,d=aa(a.attributes,this._getObjectIdField());return J.whenGraphicAttributes(this.layer,
a,d,b,function(){return c._findGraphic(a)})};e.prototype.getGraphicsFromStageObject=function(a,b){if(this.layer instanceof W)return G.reject();var c=a.getMetadata(),d=a.getFaceRangeIndexFromTriangleNr(b);return null!=d&&null!=c.featureIds&&d<c.featureIds.length?(c=this._createGraphic(d,c),G.resolve(c)):G.reject()};e.prototype._addBundle=function(a,b,c,d,f,e,l){if(!0===this.debugNodeVis&&null!=this._nodeDebugVisualizer){var h="grey";switch(a.level){case 1:h="red";break;case 2:h="green";break;case 3:h=
"blue";break;case 4:h="yellow";break;case 5:h="magenta";break;case 6:h="brown"}this._nodeDebugVisualizer.show(a,this._controller.crsIndex,h)}var h=this._stage,g={};g[p.OBJECT]={};g[p.GEOMETRY]={};g[p.MATERIAL]={};g[p.TEXTURE]={};var k=this._engineLayer,m=k.getId(),q=d[a.sharedResource.hrefConcat];if(null!=this._nodeId2Meta[a.id]&&null!=this._nodeId2Meta[a.id].engineObjectsPerBundle&&this._nodeId2Meta[a.id].engineObjectsPerBundle[l])this._applyFilters(a),null!=f&&f.done();else if(!this.isOverMemory())if(null==
this._nodeId2Meta[a.id]&&(this._nodeId2Meta[a.id]={engineObjects:[],engineObjectsPerBundle:[]}),this._nodeId2Meta[a.id].engineObjectsPerBundle[l]=[],null==b)null!=f&&f.done();else{for(var X=0,r=0;r<b.length;r++){var u=b[r].geometries,v=b[r].features,C=d[a.geometryData[l].hrefConcat];t(C instanceof ArrayBuffer,"I3S: geometry data is not an ArrayBuffer");null==C._isReprojected&&(C._isReprojected={});for(var w=a.id+"|"+v[0].id.toString(),s=[],x=[],A=[],T=void 0,y=function(b){var c=u[b],f=B._createVertexAndIndexArrays(c,
C,q);if(0===f.indexArrays.length)return"continue";var h=B._createEngineMats(c,v,q,d,e),k=B._controller.crsIndex,l=B.view.renderSpatialReference;T=O.reprojectPoints(B._controller.isMeshPyramid?O.ReprojectionTypes.PER_VERTEX:O.ReprojectionTypes.BOUNDINGBOX,f.vertexArrays.position.data,a.mbs,C._isReprojected[c.id],k,B._controller.crsVertex,l);C._isReprojected[c.id]=!0;B._controller.isMeshPyramid&&J.processNormals({normals:f.vertexArrays.normal.data,positions:f.vertexArrays.position.data,normalInd:f.indexArrays[0].indices.normal,
positionInd:f.indexArrays[0].indices.position},B.layer.normalReferenceFrame||"none",function(b,c){O.reprojectNormalsPerVertex(b,a.mbs,k,c,l)});var m=T.localTrafo;null!=c.transformation&&(m=I.mat4d.create(c.transformation),I.mat4d.multiply(T.localTrafo,m,m));for(c=0;c<h.length;c++){var r=h[c];g[p.MATERIAL][r.getId()]=r}f=new qa(new ra(f.indexArrays,f.vertexArrays),w+"_"+b);B.memEstimateGeometryAdded(f.getData());g[p.GEOMETRY][f.getId()]=f;s[b]=f;x[b]=m;A[b]=h},B=this,F=0;F<u.length;++F)y(F);y={i3sNode:a.id,
ceLayer:m,features:v,faceRanges:b[r].faceRanges,featureIds:b[r].featureIds,attributeData:c?c.attributeData:null,loadedAttributes:c?c.loadedAttributes:null,layerId:this.layer.id};X+=null!=y.featureIds?y.featureIds.length:1;y=new sa({idHint:a.id,name:w,geometries:s,materials:A,transformations:x,castShadow:!0,metadata:y});F=I.mat4d.create();I.mat4d.identity(F);I.mat4d.multiply(F,T.globalTrafo,F);y.setObjectTransformation(F);this._nodeId2Meta[a.id].engineObjectsPerBundle[l].push(y);this._nodeId2Meta[a.id].engineObjects.push(y);
g[p.OBJECT][y.getId()]=y;this._setObjectSymbology(y);this._applyFilters(a)}h.beginMod();b=g[p.OBJECT];for(var D in b)b.hasOwnProperty(D)&&k.addObject(b[D]);for(var E in g)if(g.hasOwnProperty(E)){D=g[E];for(var z in D)D.hasOwnProperty(z)&&null==h.get(E,z)&&h.add(E,D[z])}h.endMod();null!=f&&f.done();this._notifyFeaturesChanged(X,0)}};e.prototype._clippingAreaChanged=function(){var a=this,b=[];P.extentToBoundingBox(this.view.clippingArea,b,this.view.renderSpatialReference)?this._clippingArea=b:this._clippingArea=
null;this._updateFilters();if(this._controller){var c=this._controller.nodeIndex;c&&Object.keys(this._nodeId2Meta).forEach(function(b){return a._applyFilters(c[b])});this._controller.updateClippingArea(this.view.clippingArea)}};e.prototype._objectIdFilterChange=function(){var a=this;this._updateFilters();if(this._controller){var b=this._controller.nodeIndex;b&&Object.keys(this._nodeId2Meta).forEach(function(c){return a._applyFilters(b[c])})}};e.prototype._updateFilters=function(){var a=this,b=[];
if(this.layer.objectIdFilter){var c=new Float64Array(this.layer.objectIdFilter.ids),d="include"===this.layer.objectIdFilter.method;c.sort();b.push(function(b,e){return a._objectIdFilter(c,d,e)})}this._clippingArea&&b.push(function(b,c){return a._boundingboxFilter(b,a._clippingArea,c)});this._filters=b};e.prototype._objectIdFilter=function(a,b,c){for(var d=0;d<c.length;)0<=J.binaryIndexOf(a,c[d])===b?d++:c.splice(d,1)};e.prototype._boundingboxFilter=function(a,b,c){var d=[0,0,0,0];P.mbsToMbs(a.mbs,
this._controller.crsIndex,d,this.view.renderSpatialReference);d=null!=b?J.intersectBoundingBoxWithMbs(b,d):2;if(2!==d){var f=0;a=this._nodeId2Meta[a.id].engineObjects;for(var e=0;e<a.length;e++){var l=a[e],h=l.getMetadata().featureIds;if(0===d){for(var g=0,l=0;l<h.length&&f+g<c.length;l+=1)c[f+g]===h[l]&&g++;c.splice(f,g)}else{var k=l.getObjectTransformation(),g=l.getGeometryRecords()[0].getShaderTransformation();I.mat4d.multiply(k,g);if(!(0!==k[1]||0!==k[2]||0!==k[3]||0!==k[4]||0!==k[6]||0!==k[7]||
0!==k[8]||0!==k[9]||0!==k[11]||1!==k[15]))for(var g=(b[0]-k[12])/k[0],m=(b[1]-k[13])/k[5],q=(b[2]-k[14])/k[10],p=(b[3]-k[12])/k[0],r=(b[4]-k[13])/k[5],k=(b[5]-k[14])/k[10],u=l.getGeometryRecords()[0].geometry.getData(),v=u.getFaces()[0].indices.position,u=u.getVertexAttr().position.data,s=l.getMetadata().faceRanges,w=void 0,t=void 0,x=void 0,z=void 0,A=void 0,y=void 0,l=0;l<s.length&&f<c.length;l+=1)if(c[f]===h[l]){for(var w=s[l],B=w[0],F=w[1],w=t=x=Number.MAX_VALUE,z=A=y=-Number.MAX_VALUE;B<=F;B+=
1)for(var D=0;3>D;D+=1)var E=3*v[3*B+D],G=u[E],H=u[E+1],E=u[E+2],w=Math.min(G,w),t=Math.min(H,t),x=Math.min(E,x),z=Math.max(G,z),A=Math.max(H,A),y=Math.max(E,y);w>p||z<g||t>r||A<m||x>k||y<q?c.splice(f,1):f++}}}}};e.prototype._applyFilters=function(a){if(this._nodeId2Meta[a.id]&&null!=this._nodeId2Meta[a.id].engineObjects){for(var b=this._nodeId2Meta[a.id].engineObjects,c=0;c<b.length;c++)b[c].unhideAllFaceRange();if(0!==this._filters.length){for(var d=[],c=0;c<b.length;c++)var f=b[c],d=d.concat(f.getMetadata().featureIds);
c=d.length;for(f=0;f<this._filters.length;f++)this._filters[f](a,d);if(d.length!==c)for(c=a=0;c<b.length;c++){for(var f=b[c],e=[],l=f.getMetadata().faceRanges,h=f.getMetadata().featureIds,g=0;g<h.length;g+=1){var k=h[g],m=l[g];a>=d.length||d[a]!==k?e.push(m):a++}0<e.length&&f.hideFaceRange(f.getGeometryRecords()[0],e)}}}};e.prototype._hideFeatures=function(a,b){for(var c=this._nodeId2Meta[a.id].engineObjects,d=0;d<c.length;d++){for(var f=c[d],e=[],l=f.getMetadata().features,h=f.getMetadata().faceRanges,
g=0;g<b.length;g++)for(var k=b[g],m=0;m<l.length;m++)k===l[m].id&&(null!=h&&1===f.getGeometryRecords().length?e.push(h[m]):f.hideAllFaceRanges());0<e.length&&f.hideFaceRange(f.getGeometryRecords()[0],e)}};e.prototype._removeFeatures=function(a,b){null!=this._nodeId2Meta[a.id]&&(this._hideFeatures(a,b),!0===this._isAllHidden(a)&&this._removeNodeDataFromStage(a))};e.prototype._removeNodeDataFromStage=function(a){if(!(null==this._nodeId2Meta[a.id]||null==this._nodeId2Meta[a.id].engineObjects)){for(var b=
this._stage,c=this._engineLayer,d=0,f=this._nodeId2Meta[a.id].engineObjects,e=0;e<f.length;++e){var l=f[e],h=l.getMetadata(),d=d+(null!=h.featureIds?h.featureIds.length:1);c.removeObject(l);for(var h=l.getGeometryRecords(),g=0;g<h.length;g++){var k=h[g];this.memEstimateGeometryRemoved(k.geometry.getData());b.remove(p.GEOMETRY,k.geometry.getId());for(var m=0;m<k.materials.length;m++){var q=k.materials[m],s=q.getId(),r=q.metadata.i3sMatId,u=q.metadata.i3sTexId||"none",v=this._matId2Meta[r][u];t(0<v.refCount);
v.refCount--;0===v.refCount&&this._removeMaterial(s,u,r,q,b)}}b.remove(p.OBJECT,l.getId())}delete this._nodeId2Meta[a.id];this._notifyFeaturesChanged(0,d)}};e.prototype._emitFeaturesChangedEvent=function(){this.emit("features-changed",this._featuresChangedEvent);this._featuresChangedEvent=null;this._featuresChangedEventScheduled=!1};e.prototype._cancelFeaturesChangedEvent=function(){this._featuresChangedEventScheduled=!1};e.prototype._notifyFeaturesChanged=function(a,b){var c=this;null==this._featuresChangedEvent&&
(this._featuresChangedEvent={addedCount:0,removedCount:0});this._featuresChangedEvent.addedCount+=a;this._featuresChangedEvent.removedCount+=b;!this._featuresChangedEventScheduled&&null!=this._controller&&(this._featuresChangedEventScheduled=!0,this._controller.queueAnimationFrameFunctionCall(function(){return c._emitFeaturesChangedEvent()},null,null,function(){return c._cancelFeaturesChangedEvent()},null))};e.prototype._removeMaterial=function(a,b,c,d,f){f.remove(p.MATERIAL,a);if("none"!==b){a=this._texId2Meta[b];
var e=a.usedByEngineMats;d=e.indexOf(d);t(-1<d);e[d]=e[e.length-1];e.pop();if(1>e.length){if((d=a.engineTex)&&d!==this._initTexture)this.memEstimateTextureRemoved(d),f.remove(p.TEXTURE,a.engineTex.getId());a.engineTex=void 0;a.desiredLOD=-1;a.curLOD=-1;delete this._texId2Meta[b]}}delete this._matId2Meta[c][b];R(this._matId2Meta[c])&&delete this._matId2Meta[c]};e.prototype._updateAllTextureLOD=function(){for(var a in this._texId2Meta)this._texId2Meta.hasOwnProperty(a)&&this._updateTextureLOD(this._texId2Meta[a])};
e.prototype._calcDesiredTextureLOD=function(a,b){var c,d=0;c=0;for(var f=Object.keys(a);c<f.length;c++){var e=a[f[c]],l=I.vec3.dist(e,this._controller.camPos),e=2*e[3]/l*this._controller.screenSizeFactor;e>d&&(d=e)}d/=9;for(c=b.length-1;0<c&&b[c].size<d;)c--;return c};e.prototype._updateTextureLOD=function(a){var b=this;a.desiredLOD=this._calcDesiredTextureLOD(a.featureMBS,a.images);if(a.curLOD!==a.desiredLOD&&(0>a.curLOD||!a.curLOD||0===a.desiredLOD||a.desiredLOD>a.curLOD||a.desiredLOD<a.curLOD-
1)){if(0===a.images.length)return;var c=a.images[a.desiredLOD],d=-1<a.encodingIdx?c.hrefConcat[a.encodingIdx]:c.hrefConcat;if(!this._requestedTexImageIds[c.id]){var f={metadata:{texMeta:a,image:c}};this._requestedTexImageIds[c.id]=!0;this._imageIsPartOfTextureBundle(c)?this._controller.streamDataSupplier.request(d,"binary",f).then(this._extractTextureImageFromBlob.bind(this)):this._controller.streamDataSupplier.request(d,"image",f).then(function(a,c,d,f){b._textureImageLoaded(a,c,f.image,f.texMeta)})}}a.engineTex||
(a.engineTex=this._initTexture,a.curLOD=-1);if(this.debugLODVis){c=ga.fromHsv(270*(a.desiredLOD/a.images.length),100,100).toRgb().map(function(a){return a/255});for(d=0;d<a.usedByEngineMats.length;d++)a.usedByEngineMats[d].setParameterValues({ambient:c,diffuse:c})}};e.prototype._extractTextureImageFromBlob=function(a,b,c,d){var f=d.texMeta;if(0>f.desiredLOD||d.image.size>f.images[f.desiredLOD].size)delete this._requestedTexImageIds[d.image.id];else{var e=this;t("binary"===c);var l="";try{var h=c=
0;-1<f.encodingIdx?(c=d.image.byteOffset[f.encodingIdx],h=d.image.length[f.encodingIdx]):(c=d.image.byteOffset,h=d.image.length);var g=new Uint8Array(b,c,h),k=new Blob([g],{type:f.encoding}),l=window.URL.createObjectURL(k)}catch(m){l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVQ4T2P8zyD6n4ECwDhqAMNoGDCMhgEwDw2DdAAAdzkhQdS8dl8AAAAASUVORK5CYII\x3d",K.error("error loading texture "+a+" "+m)}var q=new Image;q.onerror=function(){window.URL.revokeObjectURL(l);q.src="";q.onerror=
void 0;q.onload=void 0};q.onload=function(){e._controller.queueAnimationFrameFunctionCall(e._textureImageLoaded,e,[a,q,d.image,d.texMeta,l],void 0,1);window.URL.revokeObjectURL(l);q.src="";q.onerror=void 0;q.onload=void 0};q.src=l}};e.prototype._textureImageLoaded=function(a,b,c,d){delete this._requestedTexImageIds[c.id];if(!(0>d.desiredLOD)){a=d.images[d.desiredLOD];var f=d.images[d.curLOD];if(!this.isOverMemory()||!(null==f||c.size>f.size))if(!f||c.size>f.size&&c.size<=a.size||c.size<f.size&&c.size>=
a.size){if((f=d.engineTex)&&f!==this._initTexture)this.memEstimateTextureRemoved(f),this._stage.remove(p.TEXTURE,d.engineTex.getId());f=Z(b,d,this._enableAtlasMipMaps,this._disableAtlasAnisotropy);d.engineTex=new M(b,d.id,f);this._stage.add(p.TEXTURE,d.engineTex);d.curLOD=d.desiredLOD;this.memEstimateTextureAdded(d.engineTex);b=d.engineTex.getId();for(f=0;f<d.usedByEngineMats.length;f++){var e=d.usedByEngineMats[f];null==this._colorOverride&&e.setParameterValues({textureId:b});e.metadata.originalTextureId=
b}c!==a&&(d.curLOD=d.images.indexOf(c),t(-1<d.curLOD),this._requestedTexImageIds[a.id]||(c={metadata:{texMeta:d,image:a}},this._requestedTexImageIds[a.id]=!0,this._controller.streamDataSupplier.request(a.hrefConcat,"binary",c).then(this._extractTextureImageFromBlob.bind(this))))}}};e.prototype._imageIsPartOfTextureBundle=function(a){return!this._controller.isMeshPyramid};e.prototype._setPolygonOffset=function(a,b){if(null!=this._nodeId2Meta[a.id]&&null!=this._nodeId2Meta[a.id].engineObjectsPerBundle)for(var c=
{polygonOffset:b},d=0;d<this._nodeId2Meta[a.id].engineObjectsPerBundle.length;d++)for(var e=this._nodeId2Meta[a.id].engineObjectsPerBundle[d],n=0;n<e.length;n++)for(var l=e[n].getGeometryRecords(),h=0;h<l.length;h++)for(var g=l[h].materials,k=0;k<g.length;k++)g[k].setParameterValues(c)};e.prototype._rendererChange=function(a){(this._currentRenderer=a)&&(a.colorInfo||a.sizeInfo)&&K.warn("renderer.colorInfo and renderer.sizeInfo are not supported for Scene Services. Use visualVariables instead.")};
e.prototype._getRenderingInfo=function(a){var b=this._currentRenderer,c=b&&b.getSymbol(a);if(!c||!(c instanceof ka))return null;var c={symbol:c},d,e;if(b&&b.visualVariables){a=b.getVisualVariableValues(a);for(b=0;b<a.length;b++){var n=a[b],l=n.variable.type;"color"===l?d=n.value:"opacity"===l&&(e=n.value)}}d&&(c.color=[d.r/255,d.g/255,d.b/255]);null!=e?c.opacity=e:d&&null!=d.a&&(c.opacity=d.a);return c};e.prototype._getSymbolFillColor=function(a){a=a.symbolLayers;for(var b=0;b<a.length;b++){var c=
a.getItemAt(b);if("Fill"===c.type&&c.material&&c.material.color)return a=c.material.color,[a.r/255,a.g/255,a.b/255,a.a]}};e.prototype._setObjectSymbology=function(a){if(!(this.layer instanceof W)){for(var b=a.getMetadata(),c=[],d=!1,e=b.faceRanges?b.faceRanges.length:1,n={attributes:{}},l=this.layer.objectIdField,h=this._currentRenderer&&this._currentRenderer.requiredFields,g=0;g<e;g++){null!=l&&null!=b.featureIds&&(n.attributes[l]=b.featureIds[g]);if(null!=h&&null!=b.attributeData)for(var k=0,m=
h;k<m.length;k++){var q=m[k];b.attributeData[q]&&(n.attributes[q]=b.attributeData[q][g])}var p=this._getRenderingInfo(n),k=null!=b.faceRanges?b.faceRanges[g]:null;p?(m=p.color,q=p.opacity,null==m||null==q?(p=this._getSymbolFillColor(p.symbol),m=Y.overrideColor(m,q,p,p&&p[3],ba)):m=Y.overrideColor(m,q,null,null,ba),1>m[3]&&(d=!0),c.push({faceRanges:k,color:m})):c.push({faceRanges:k,color:void 0})}this.layer.cachedDrawingInfo.color?a.setFacerangeColors(c,"replace"):a.setFacerangeColors(c,"blend");a=
a.getGeometryRecords();for(b=0;b<a.length;b++){c=a[b];for(e=0;e<c.materials.length;e++)n=c.materials[e],l=n.getParams().transparent,h=n.getParams().opacity,n.metadata.symbolIsTransparent=d,g=this._calcEngineMaterialTransparencyParams(n.metadata.i3sTex,n.metadata.i3sMatParams,n.metadata.symbolIsTransparent),(l!==g.transparent||h!==g.opacity)&&n.setParameterValues({transparent:g.transparent,opacity:g.opacity})}}};e.prototype._opacityChange=function(a){for(var b in this._matId2Meta)for(var c in this._matId2Meta[b]){a=
this._matId2Meta[b][c].engineMat;var d=a.getParams().transparent,e=a.getParams().opacity,n=this._calcEngineMaterialTransparencyParams(a.metadata.i3sTex,a.metadata.i3sMatParams,a.metadata.symbolIsTransparent);(d!==n.transparent||e!==n.opacity)&&a.setParameterValues({transparent:n.transparent,opacity:n.opacity})}};e.prototype.queryExtent=function(a){return this._ensureQueryEngine().queryExtent(a)};e.prototype.queryFeatureCount=function(a){return this._ensureQueryEngine().queryFeatureCount(a)};e.prototype.queryFeatures=
function(a){return this._ensureQueryEngine().queryFeatures(a)};e.prototype.queryObjectIds=function(a){return this._ensureQueryEngine().queryObjectIds(a)};e.prototype._ensureQueryEngine=function(){this._queryEngine||(this._queryEngine=this._createQueryEngine());return this._queryEngine};e.prototype._createQueryEngine=function(){var a=this,b={id:0,index:0,object:null,bbCorners:new Float64Array(24)};return new ma({forAll:function(c){a._forAllFeatures(function(d,e,n){b.id=d;b.index=e;b.object=n;d=b.object.getMetadata().faceRanges[b.index];
a._boundingBoxCornerPoints(d,b.object,b.bbCorners);c(b)})},createGraphic:function(b,d){var e=a._createGraphic(b.index,b.object.getMetadata());return d&&d.length?a.whenGraphicAttributes(e,d):G.resolve(e)},createExtentBuilder:function(){return a._createExtentBuilder()},createVisibilityFilter:function(){return a._createVisibilityFilter()}},{enableObjectId:!0,enableOutFields:!!this.layer.objectIdField,addVisibilityFilter:!0})};e.prototype._createExtentBuilder=function(){var a=this.view.renderSpatialReference,
b=this.view.spatialReference,c=H.create(H.NEGATIVE_INFINITY),d=new Float64Array(24);return{add:function(e){P.bufferToBuffer(e.bbCorners,a,0,d,b,0,8)&&H.expandBuffer(c,d,0,8)},getExtent:function(){return new la({xmin:c[0],ymin:c[1],zmin:c[2],xmax:c[3],ymax:c[4],zmax:c[5],spatialReference:b})}}};e.prototype._createVisibilityFilter=function(){var a=this.view._stage.getCamera().frustumPlanes,b=0;return function(c){c=oa.conservativeFrustumConvexBuffer(a,c.bbCorners,0,8,b);return 0<=c?(b=c,!1):!0}};e.prototype._forAllFeatures=
function(a){for(var b=0,c=Object.keys(this._nodeId2Meta);b<c.length;b++)for(var d=this._nodeId2Meta[c[b]].engineObjects,e=0;e<d.length;e++)for(var n=d[e],l=n.getMetadata().featureIds,h=0;h<l.length;h++)a(l[h],h,n)};e.prototype._createGraphic=function(a,b){var c={};c[this._getObjectIdField()]=b.featureIds[a];for(var d=0,e=Object.keys(b.attributeData);d<e.length;d++){var n=e[d];c[n]=b.attributeData[n][a]}c=new ja(null,null,c);c.layer=this.layer;return c};e.prototype._boundingBoxCornerPoints=function(a,
b,c){a=b.geometries[0].calculateAABB(0,a);for(var d=0;8>d;++d){var e=[d&1?a[0]:a[3],d&2?a[1]:a[4],d&4?a[2]:a[5]];I.mat4d.multiplyVec3(b.objectTransformation,e);c[3*d]=e[0];c[3*d+1]=e[1];c[3*d+2]=e[2]}return c};z([A.property()],e.prototype,"layer",void 0);z([A.property()],e.prototype,"view",void 0);z([A.property()],e.prototype,"_controller",void 0);z([A.property({dependsOn:["_controller.updating"]})],e.prototype,"updating",void 0);z([A.property({readOnly:!0,aliasOf:"_controller.updatingPercentage"})],
e.prototype,"updatingPercentageValue",void 0);return e=z([A.subclass("esri.views.3d.layers.SceneLayerView3D")],e)}(A.declared(ia,na))});