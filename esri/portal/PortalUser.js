// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../core/Error ../core/JSONSupport ./PortalFolder ./PortalGroup ../core/promiseUtils ../core/requireUtils dojo/promise/all".split(" "),function(k,s,l,a,c,f,m,n,g,p,q,r){return function(h){function b(){h.call(this);this.username=this.roleId=this.role=this.region=this.privileges=this.preferredView=this.portal=this.orgId=this.modified=this.fullName=this.email=this.description=
this.culture=this.created=this.access=null}l(b,h);Object.defineProperty(b.prototype,"thumbnailUrl",{get:function(){var d=this.url,b=this.thumbnail;return d&&b?this.portal._normalizeUrl(d+"/info/"+b):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"userContentUrl",{get:function(){var d=this.get("portal.restUrl");return d?d+"/content/users/"+this.username:null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"url",{get:function(){var d=this.get("portal.restUrl");
return d?d+"/community/users/"+this.username:null},enumerable:!0,configurable:!0});b.prototype.addItem=function(d){var b=this,c=d&&d.item,a=d&&d.data;d=d&&d.folder;var e={method:"post"};c&&(e.query=c._getPostQuery(),null!=a&&("string"===typeof a?e.query.text=a:"object"===typeof a&&(e.query.text=JSON.stringify(a))));a=this.userContentUrl;d&&(a+="/"+d.id);return this.portal._request(a+"/addItem",e).then(function(d){c.id=d.id;c.portal=b.portal;return c.loaded?c._reload():c.load()})};b.prototype.deleteItem=
function(d){var b=this.userContentUrl;d.ownerFolder&&(b+="/"+d.ownerFolder);return this.portal._request(b+("/items/"+d.id+"/delete"),{method:"post"}).then(function(){d.id=null;d.portal=null})};b.prototype.fetchFolders=function(){var b=this;return this.portal._request(this.userContentUrl,{query:{num:1}}).then(function(a){return a&&a.folders?a.folders.map(function(a){a=n.fromJSON(a);a.portal=b.portal;return a}):[]})};b.prototype.fetchGroups=function(){var b=this;return this.portal._request(this.url).then(function(a){return a&&
a.groups?a.groups.map(function(a){a=g.fromJSON(a);a.portal=b.portal;return a}):[]})};b.prototype.fetchItems=function(a){var b=this;a||(a={});var c=this.userContentUrl;a.folder&&(c+="/"+a.folder.id);var f;return q.when(k,"./PortalItem").then(function(e){f=e;return b.portal._request(c,{query:{folders:!1,num:a.num||10,start:a.start||1}})}).then(function(a){var c;return a&&a.items?(c=a.items.map(function(a){a=f.fromJSON(a);a.portal=b.portal;a.load();return a}),r(c).always(function(){return{items:c,nextStart:a.nextStart,
total:a.total}})):{items:[],nextStart:-1,total:0}})};b.prototype.queryFavorites=function(a){return this.favGroupId?(this._favGroup||(this._favGroup=new g({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(a)):p.reject(new f("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))};b.prototype.toJSON=function(){throw new f("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented");};a([c.property()],b.prototype,"access",void 0);a([c.property({type:Date})],
b.prototype,"created",void 0);a([c.property()],b.prototype,"culture",void 0);a([c.property()],b.prototype,"description",void 0);a([c.property()],b.prototype,"email",void 0);a([c.property()],b.prototype,"favGroupId",void 0);a([c.property()],b.prototype,"fullName",void 0);a([c.property({type:Date})],b.prototype,"modified",void 0);a([c.property()],b.prototype,"orgId",void 0);a([c.property()],b.prototype,"portal",void 0);a([c.property()],b.prototype,"preferredView",void 0);a([c.property()],b.prototype,
"privileges",void 0);a([c.property()],b.prototype,"region",void 0);a([c.property()],b.prototype,"role",void 0);a([c.property()],b.prototype,"roleId",void 0);a([c.property()],b.prototype,"thumbnail",void 0);a([c.property({dependsOn:["url","thumbnail","portal.credential.token"],readOnly:!0})],b.prototype,"thumbnailUrl",null);a([c.property({dependsOn:["portal.restUrl"],readOnly:!0})],b.prototype,"userContentUrl",null);a([c.property({dependsOn:["portal.restUrl"],readOnly:!0})],b.prototype,"url",null);
a([c.property()],b.prototype,"username",void 0);return b=a([c.subclass("esri.portal.PortalUser")],b)}(c.declared(m))});