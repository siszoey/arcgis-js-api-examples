// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang ../../../core/declare ../../../core/Accessoire ../../../core/AccessoirePromise ../../../core/urlUtils ../../../request ../../../tasks/QueryTask".split(" "),function(d,g,h,k,e,f,l){return g([h,k],{classMetadata:{properties:{parsedUrl:{dependsOn:["url","layerId"]},queryTask:{dependsOn:["parsedUrl","gdbVersion"]}}},getDefaults:function(a){var c=this.inherited(arguments),b=a.layer;b&&(c=d.mixin(c,{url:b.url,layerId:b.layerId,gdbVersion:b.gdbVersion}));return c},initialize:function(){this.addResolvingPromise(this._fetchService())},
_parsedUrlGetter:function(){var a=this.url?e.urlToObject(this.url):null;null!=this.layerId&&null!=a&&(a.path=e.join(a.path,this.layerId.toString()));return a},_queryTaskGetter:function(){return new l({url:this.parsedUrl.path,gdbVersion:this.gdbVersion})},queryFeatures:function(a){return this.queryTask.execute(a)},queryObjectIds:function(a){return this.queryTask.executeForIds(a)},queryFeatureCount:function(a){return this.queryTask.executeForCount(a)},queryExtent:function(a){return this.queryTask.executeForExtent(a)},
_fixSymbolUrls:function(a){if(a){var c=this.parsedUrl.path+"/images/",b=[a.symbol,a.defaultSymbol];(a=a.classBreakInfos||a.uniqueValueInfos)&&a.forEach(function(a){b.push(a.symbol)});b.forEach(function(a){var b=a&&a.url;b&&-1===b.search(/https?\:/i)&&(a.url=c+b)})}},_updateUrl:function(a){a&&(this.url=this.url.replace(/^http:/i,"https:"))},_fetchService:function(){return null==this.layerId?f(this.url,{query:{f:"json"},responseType:"json",callbackParamName:"callback"}).then(function(a){this._updateUrl(a.ssl);
if((a=a.data)&&a.layers&&a.layers[0])this.layerId=a.layers[0].id;return this._fetchServiceLayer()}.bind(this)):this._fetchServiceLayer()},_fetchServiceLayer:function(){return f(this.parsedUrl.path,{query:d.mixin({f:"json"},this.parsedUrl.query),responseType:"json",callbackParamName:"callback"}).then(function(a){this._updateUrl(a.ssl);a=a.data;this._fixSymbolUrls(a.drawingInfo&&a.drawingInfo.renderer);this.layerDefinition=a}.bind(this))}})});