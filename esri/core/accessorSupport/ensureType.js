// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/has"],function(h,c,k){function e(a,b){return b.isInstanceOf?b.isInstanceOf(a):b instanceof a}function d(a,b){if(1===arguments.length)return d.bind(null,a);b&&(a&&!e(a,b))&&(g&&b.constructor&&void 0!==b.constructor._meta?console.warn("Assigning an instance of '"+(b.declaredClass||"unknown")+"' which is not a subclass of '"+(a.prototype&&a.prototype.declaredClass||"unknown")+"'"):b=new a(b));return b}function f(a,b){return 1===arguments.length?f.bind(null,a):!b?b:Array.isArray(b)?
b.map(d.bind(null,a)):[d(a,b)]}var g=0;c.isInstanceOf=e;c.ensureDate=function(a){return null==a?a:new Date(a)};c.ensureBoolean=function(a){return!0===a||!1===a?a:!!a};c.ensureString=function(a){return null==a?a:a.toString()};c.ensureNumber=function(a){return null==a?a:parseFloat(a)};c.ensureType=d;c.ensureArray=f;Object.defineProperty(c,"__esModule",{value:!0});c.default=d});