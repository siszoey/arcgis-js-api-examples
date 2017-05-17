// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/_base/lang ../request ./Task ../geometry/SpatialReference ./support/AddressCandidate".split(" "),function(k,d,h,l,p,g){return l.createSubclass({declaredClass:"esri.tasks.Locator",properties:{categories:{value:null,type:[String]},countryCode:{value:null,type:String},outSpatialReference:{value:null,type:p},url:{}},addressToLocations:function(a,c){var b,e=a.outFields,f=a.searchExtent,g=a.countryCode,q=a.magicKey,r=a.distance,m=a.categories,k=a.maxLocations,l=a.forStorage;
a.location&&this.normalization&&(b=a.location.clone().normalize());f&&(f=f.shiftCentralMeridian());a=a.address;var n=this.outSpatialReference;b={query:this._encode(d.mixin({},this.parsedUrl.query,a,{f:"json",outSR:n&&JSON.stringify(n.toJSON()),outFields:e&&e.join(",")||null,searchExtent:f&&JSON.stringify(f.toJSON()),category:m&&m.join(",")||null,countryCode:g||null,magicKey:q||null,distance:r||null,location:b||null,maxLocations:k||null,forStorage:l||null})),callbackParamName:"callback"};if(this.requestOptions||
c)b=d.mixin({},this.requestOptions,c,b);return h(this.parsedUrl.path+"/findAddressCandidates",b).then(this._handleAddressToLocationsResponse)},suggestLocations:function(a,c){a.hasOwnProperty("location")&&this.normalization&&(a.location=a.location.clone().normalize());a.searchExtent&&(a.searchExtent=a.searchExtent.shiftCentralMeridian());var b={query:this._encode(d.mixin({},this.parsedUrl.query,{f:"json",text:a.text,maxSuggestions:a.maxSuggestions,searchExtent:a.searchExtent&&JSON.stringify(a.searchExtent.toJSON()),
category:a.categories&&a.categories.join(",")||null,countryCode:a.countryCode||null,location:a.location||null,distance:a.distance||null},{f:"json"})),callbackParamName:"callback"};if(this.requestOptions||c)b=d.mixin({},this.requestOptions,c,b);return h(this.parsedUrl.path+"/suggest",b).then(this._handleSuggestLocationsResponse)},addressesToLocations:function(a,c){var b=this.outSpatialReference,e=[],f=a.categories,g=a.countryCode;k.forEach(a.addresses,function(a,b){e.push({attributes:a})});b={query:this._encode(d.mixin({},
this.parsedUrl.query,{category:f&&f.join(",")||null,sourceCountry:g||null},{addresses:JSON.stringify({records:e})},{f:"json",outSR:b&&JSON.stringify(b.toJSON())})),callbackParamName:"callback"};if(this.requestOptions||c)b=d.mixin({},this.requestOptions,c,b);return h(this.parsedUrl.path+"/geocodeAddresses",b).then(this._handleAddressesToLocationsResponse)},locationToAddress:function(a,c,b){a&&this.normalization&&(a=a.clone().normalize());var e=this.outSpatialReference;a={query:this._encode(d.mixin({},
this.parsedUrl.query,{outSR:e&&JSON.stringify(e.toJSON()),location:a&&JSON.stringify(a.toJSON()),distance:c,f:"json"})),callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return h(this.parsedUrl.path+"/reverseGeocode",a).then(this._handleLocationToAddressResponse)},_handleAddressToLocationsResponse:function(a){a=a.data;var c=a.spatialReference,b;return(a.candidates||[]).map(function(a){if(b=a.location)b.spatialReference=c;return g.fromJSON(a)})},_handleSuggestLocationsResponse:function(a){return a.data.suggestions||
[]},_handleAddressesToLocationsResponse:function(a){a=a.data;var c=a.spatialReference,b;return(a.locations||[]).map(function(a){if(b=a.location)b.spatialReference=c;return g.fromJSON(a)})},_handleLocationToAddressResponse:function(a){a=a.data;return g.fromJSON({address:a.address,location:a.location,score:100})}})});