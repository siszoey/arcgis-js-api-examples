// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ../../webgl-engine/lib/Util ./I3SUtil ./I3SBinaryReader ../../support/PromiseLightweight ../../support/projectionUtils ../../lib/glMatrix ../../support/PromiseNativeOrShim ../../../../core/urlUtils".split(" "),function(J,K,C,D,B,A,E,F,G,p,y){var z=D.assert,H=G.vec4d,I={};return function(){function h(a,c,b,d,f,e,g,w,k,l,t,q,m,r,s){this.bundleLoadedCallback=c;this.queueFunctionCall=b;this.debugVis=d;this.renderCoordsHelper=f;this.indexSR=e;this.calcDesiredTextureLOD=
g;this.imageIsPartOfTextureBundle=w;this.matId2Meta=k;this.texId2Meta=l;this.useCompressedTextures=t;this.logger=q;this.defaultGeometrySchema=m;this.requiredAttributes=r;this.bypassFeatureData=s;this.texIdToPromises={};this.loadShared=function(a){if(null==a.sharedResource)return p.resolve({});var b=y.makeAbsolute(a.sharedResource.href,a.baseUrl)+"/";a.sharedResource.hrefConcat=b;return this.loadJSON(b).then(function(a){h.fixTextureEncodings(a);h.addAbsoluteHrefTexture(a,b);return a})};this.loader=
a;this.cancelled=!1}h.prototype.waitForAnimationFrame=function(){var a=this;return new p(function(c,b){a.queueFunctionCall(c,null,[],b)})};h.prototype.cancel=function(){this.cancelled=!0};h.prototype.loadJSON=function(a){var c=this.loader.request(a,"json");return new p(function(b,d){c.then(function(a,e){b(e)},function(b){d(Error("Failed to load: "+a))})})};h.prototype.loadBinary=function(a){var c=this.loader.request(a,"binary");return new p(function(b,d){c.then(function(a,e){b(e)},function(b){d(Error("Failed to load: "+
a))})})};h.prototype.loadImage=function(a){var c=this.loader.request(a,"image");return new p(function(b,d){c.then(function(a,e){b(e)},function(b){d(Error("Failed to load: "+a))})})};h.prototype.loadAttribute=function(a,c,b){a=B.addTrailingSlash(y.makeAbsolute(b,a));return this.loadBinary(a).then(function(a){return A.readBinaryAttribute(c,a)})};h.prototype.loadAttributes=function(a,c,b){var d=this,f=b.map(function(b){return null==a.attributeData||null==a.attributeData[b.index]?p.reject(Error("Missing attributeData on node '"+
a.id+"'")):d.loadAttribute(c,b.attributeStorageInfo,a.attributeData[b.index].href)});return p.all(f).then(function(a){for(var c={},d=0;d<b.length;++d)a[d]&&(c[b[d].name]=a[d]);return c})};h.prototype.prepareBinaryGeometryData=function(a,c,b,d){C.mixin(a.geometries[0].params,b);a.faceRanges[0][0]=0;a.faceRanges[0][1]=b.header.fields.vertexCount/3-1;!d&&null==b.vertexAttributes.region&&delete b.vertexAttributes.region;if(null!=b.featureAttributes){d=b.featureAttributes;if(d.faceRange){a.faceRanges=
[];for(var f=A.createTypedView(c,d.faceRange),e=d.faceRange.valuesPerElement,g=0;g<b.header.fields.featureCount;g++)a.faceRanges[g]=[f[g*e],f[g*e+1]]}if(d.id){a.featureIds=[];f=1;g=A.valueType2TypedArrayClassMap[d.id.valueType];"UInt64"===d.id.valueType&&(g=Uint32Array,f=2);c=new g(c,d.id.byteOffset,d.id.count*d.id.valuesPerElement*f);for(g=0;g<b.header.fields.featureCount;g++)if(a.featureIds[g]=c[g*d.id.valuesPerElement*f],2===f){e=c[g*d.id.valuesPerElement*f+1];if(2097150<=e)throw Error("ID exceeded maximum range supported by javascript (max \x3d 53bit-1 \x3d 9007199254740991)");
a.featureIds[g]+=4294967296*e}}}};h.prototype.loadNodeData=function(a,c,b,d,f){var e=this,g=null==a.features,w=a.baseUrl,k={},l=this.loadShared(a),t=l.then(function(a){return e.loadReferencedShared(a,w)}),q=null;null!=this.requiredAttributes&&(q=this.loadAttributes(a,w,this.requiredAttributes));var m=null;null!=a.geometryData&&(m=a.geometryData.map(function(a,b){if(-1===c.indexOf(b))return null;var d=y.makeAbsolute(a.href,w);a.hrefConcat=d;return e.loadBinary(d)}));p.all([l,t]).then(function(b){var l=
b[0];b=b[1];e.handleCancelled();a.sharedResource&&(k[a.sharedResource.hrefConcat]=l,C.mixin(k,b));b=c.map(function(b){return e.loadFeatureData(a,b,l).then(function(c){e.handleCancelled();g&&h.buildNodeFeatures(a,b,c);var f=e.collectGeometries(a,b,c,l);c=null;c=null!=m&&null!=m[b]?m[b].then(function(c){k[a.geometryData[b].hrefConcat]=c;var d=Object.keys(l.materialDefinitions)[0],d=l.materialDefinitions[d].params.vertexRegions,g=A.createGeometryDataIndex(c,e.defaultGeometrySchema,d);e.prepareBinaryGeometryData(f[0],
c,g,d);return f}):p.resolve(f);var w=d?e.loadTextures(f,l,e.matId2Meta,e.texId2Meta).then(function(a){var b={};a.forEach(function(a){var c=a.i3sTexId;b[c]={i3sTexId:c,data:a.data,encoding:a.encoding,desiredLOD:a.desiredLOD,createdTextureForDomImage:function(){e.texIdToPromises[c]&&delete e.texIdToPromises[c]}}});return b}):null;return p.all([w,c,q])}).then(function(c){var d=c[0],g=c[1];c=c[2];e.handleCancelled();void 0!==e.debugVis&&e.debugVis.show(a,e.indexSR,"green");var l=null;c&&(l={attributeData:c,
loadedAttributes:e.requiredAttributes});return e.callbackWrapped(a,g,l,k,d,b,f)}).catch(function(c){e.handleCancelled();e.logger.error("Failed to load node '"+a.id+"' bundle "+b+": "+c);return e.callbackWrapped(a,null,null,k,null,b,f)})});return p.all(b)}).catch(function(b){if(!e.cancelled)return e.logger.error("Failed to shared data of node '"+a.id+"': "+b),b=c.map(function(b){return e.callbackWrapped(a,null,null,k,null,b,f)}),p.all(b)}).then(function(){b.done()})};h.prototype.callbackWrapped=function(a,
c,b,d,f,e,g){var h=this;return this.waitForAnimationFrame().then(function(){return new p(function(k,l){var p=new E.Promise,q=h.bundleLoadedCallback;q(a,c,b,d,p,f,e,g);p.then(k,l)})})};h.addAbsoluteHrefTexture=function(a,c){var b=a.textureDefinitions;if(void 0!==b)for(var d in b)if(b.hasOwnProperty(d))for(var f=b[d],e=0;e<f.images.length;e++){var g=f.images[e];Array.isArray(f.encoding)?g.hrefConcat=g.href.map(function(a){return y.makeAbsolute(a,c)}):g.hrefConcat=y.makeAbsolute(g.href,c)}};h.fixTextureEncodings=
function(a){a=a.textureDefinitions;if(null!=a)for(var c in a){var b=a[c];if(Array.isArray(b.encoding))for(var d=0;d<b.encoding.length;d++){var f=b.encoding[d];"data:"===f.substring(0,5)&&(b.encoding[d]=f.substring(5))}else f=b.encoding,"data:"===f.substring(0,5)&&(b.encoding=f.substring(5))}};h.prototype.loadReferencedShared=function(a,c){var b=this;if(null==a||null==a.materialDefinitions)return p.resolve({});var d=Object.keys(a.materialDefinitions).filter(function(b){return a.materialDefinitions[b]&&
null!=a.materialDefinitions[b].href}).map(function(b){return y.makeAbsolute(a.materialDefinitions[b].href,c)+"/"});return p.all(d.map(function(a){return b.loadJSON(a).then(function(b){return[a,b]})})).then(function(a){for(var b={},c=0;c<a.length;c++){var d=a[c],k=d[0],d=d[1];h.fixTextureEncodings(d);h.addAbsoluteHrefTexture(d,k);b[k]=d}return b})};h.prototype.loadTexture=function(a,c,b,d,f,e){var g=this,h=-1<e?b.encoding[e]:b.encoding;b=h===B.DDS_ENCODING_STRING;var k=this.imageIsPartOfTextureBundle(d);
z(!(b&&k),"DDS in multi texture bundles not supported at the moment");return b?this.loadBinary(a).then(function(a){return g.cancelled?p.reject():{i3sTexId:c,data:a,encoding:h,desiredLOD:f}}):k?this.loadBinary(a).then(function(b){var k;try{var q=void 0,m;-1<e?(z(Array.isArray(d.byteOffset)&&Array.isArray(d.length),"texture encoding is array, but image byteOffset/length isn't"),q=d.byteOffset[e],m=d.length[e]):(q=d.byteOffset,m=d.length);var r=new Uint8Array(b,q,m),s=new Blob([r],{type:h});k=window.URL.createObjectURL(s)}catch(x){k=
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIElEQVQ4T2P8zyD6n4ECwDhqAMNoGDCMhgEwDw2DdAAAdzkhQdS8dl8AAAAASUVORK5CYII\x3d",g.logger.error("error loading texture "+a+": "+x)}var n=new Image;b=new p(function(a,b){var d=function(){window.URL.revokeObjectURL(k);n.onerror=void 0;n.onload=void 0};n.onerror=function(a){d();b(a)};n.onload=function(){d();g.cancelled?b():a({i3sTexId:c,data:n,encoding:h,desiredLOD:f})}});n.src=k;return b}):this.loadImage(a).then(function(a){return g.cancelled?
p.reject():{i3sTexId:c,data:a,encoding:h,desiredLOD:f}})};h.getAllEngineMBS=function(a){for(var c=[],b=0;b<a.length;b++)c.push(a[b].engineMBS);return c};h.prototype.loadTextures=function(a,c,b,d){for(var f=[],e=0;e<a.length;e++)for(var g=a[e].geometries,w=h.getAllEngineMBS(a[e].features),k=0;k<g.length;++k)for(var l=g[k],t=l.params.components.length,q=0;q<t;q++){var m=l.params.components[q],r=m.materialID,m=m.textureID||"none";if(!(b[r]&&null!=b[r][m])&&null==d[m]&&"none"!==m)if(null!=this.texIdToPromises[m])f.push(this.texIdToPromises[m]);
else{(null==c.textureDefinitions||null==c.textureDefinitions[m])&&this.logger.warn("textureDefinitions missing in shared resource. i3sTexId: "+m);r=c.textureDefinitions[m];z(void 0!==r,"geometry wants unknown texture "+m);var s=this.calcDesiredTextureLOD(w,r.images);if(0!==r.images.length){var x=r.images[s],n=B.getAppropriateTextureEncoding(r.encoding,this.useCompressedTextures()),r=this.loadTexture(-1<n?x.hrefConcat[n]:x.hrefConcat,m,r,x,s,n);f.push(r);this.texIdToPromises[m]=r}}}return p.all(f)};
h.getIdFromJsonPointer=function(a){a=a.split("/");return a[a.length-1]};h.buildNodeFeatures=function(a,c,b){null==a.features&&(a.features=[]);for(var d in b.featureData)a.features.push({id:b.featureData[d].id,mbs:a.mbs,block:c})};h.prototype.collectGeometries=function(a,c,b,d){var f=[],e=!1,g=0,p=a.features.length-1;null==a.featureData[c].featureRange?e=!0:(g=a.featureData[c].featureRange[0],p=a.featureData[c].featureRange[1]);for(;g<=p;++g){var k=a.features[g];if(!k.engineMBS){var l=H.create();F.mbsToMbs(k.mbs,
this.indexSR,l,this.renderCoordsHelper.spatialReference);l[3]=k.mbs[3];k.engineMBS=l}if(!(e&&k.block!==c)){for(var t=b.featureData,l=void 0,q=0;q<t.length;q++)if(t[q].id===k.id){l=t[q];break}z(null!=l,"I3S: unable to find feature data in specified block in node.id "+a.id+" feature.id "+k.id);var t=l.geometries,q=[],m=[];if(null!=t)for(var r=0;r<t.length;r++){var s=l.geometries[r];if("GeometryReference"===s.type){for(var x=h.getIdFromJsonPointer(s.params.$ref),n=void 0,u=0;u<b.geometryData.length;u++){var v=
b.geometryData[u];if(v.id+""===x){n=v;break}}z(null!=n,"I3S: Unable to find referenced geometry");null==n.params.material&&(this.logger.warn("material definition is missing in featureData, node: "+a.id),u=Object.keys(d.materialDefinitions)[0],n.params.material="/materialDefinitions/"+u);null==n.params.components&&(n.params.components=null!=n.params.texture?[{material:n.params.material,materialID:h.getIdFromJsonPointer(n.params.material),texture:n.params.texture,textureID:h.getIdFromJsonPointer(n.params.texture),
id:1}]:[{material:n.params.material,materialID:h.getIdFromJsonPointer(n.params.material),id:1}],null!=n.params.faces&&null!=n.params.faces.position&&(n.params.faces.position.componentIndices=[0]));v=void 0;v=null;for(u=0;u<f.length;u++)if(1===f[u].geometries.length&&f[u].geometries[0].id+""===x){v=f[u];break}null===v&&(v={features:[],featureDataPositions:[],faceRanges:[],geometries:[n]},f.push(v));v.features.push(k);v.featureDataPositions.push(l.position);v.faceRanges.push(s.params.faceRange)}else q.push(s),
null!=s.params.faceRange&&m.push(s.params.faceRange)}else null!=l.position&&q.push({id:k.id,type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}});0===m.length&&(m=null);0<q.length&&f.push({features:[k],featureDataPositions:[l.position],geometries:q,faceRanges:m})}}return f};h.prototype.idHash=function(a){var c=0,b=a.length;if(0===b)return c;for(var d=0;d<b;d++)var f=a.charCodeAt(d),c=(c<<5)-c+f,c=c|0;return c};h.prototype.loadFeatureData=function(a,c,b){if(this.bypassFeatureData&&
this.defaultGeometrySchema){a=this.idHash(a.id);var d=c=void 0;null!=b.materialDefinitions&&(c=Object.keys(b.materialDefinitions)[0]);null!=b.textureDefinitions&&(d=Object.keys(b.textureDefinitions)[0]);b=h.buildDefaultFeatureData(a,c,d,null);return p.resolve(b)}b=y.makeAbsolute(a.featureData[c].href,a.baseUrl);a.featureData[c].hrefConcat=b;return this.loadJSON(b)};h.buildDefaultFeatureData=function(a,c,b,d){return{featureData:[{id:a,position:[0,0,0],pivotOffset:[0,0,0],mbb:d,layer:"Default",geometries:[{id:1,
type:"GeometryReference",params:{$ref:"/geometryData/0",faceRange:[0,0]}}]}],geometryData:[{id:0,type:"ArrayBufferView",params:{type:"triangles",material:"/materialDefinitions/"+c,texture:null!=b?"/textureDefinitions/"+b:void 0}}]}};h.prototype.handleCancelled=function(){if(this.cancelled)throw I;};return h}()});