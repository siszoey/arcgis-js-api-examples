// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["require","exports","../../lib/glMatrix"],function(p,m,l){function n(b,d,c){for(;0<b;){var h=d.indexOf(b);if(0<=h)return h;b=c.getParentId(b)}return d.indexOf(b)}m.nodeDiff=function(b,d,c){for(var h=b.map(function(){return!1}),e=b.map(function(){return null}),f=d.map(function(){return!1}),g=d.map(function(){return null}),a=0;a<d.length;a++){var k=n(d[a],b,c);0<=k&&(f[a]=!0,null!=e[k]?e[k].push(d[a]):e[k]=[d[a]])}for(a=0;a<b.length;a++)k=n(b[a],d,c),0<=k&&(h[a]=!0,null!=g[k]?g[k].push(b[a]):
g[k]=[b[a]]);c=[];for(a=0;a<b.length;a++)null==e[a]&&!h[a]&&c.push({load:[],remove:[b[a]]});for(a=0;a<d.length;a++)null==g[a]&&!f[a]&&c.push({load:[d[a]],remove:[]});for(a=0;a<d.length;a++)null!=g[a]&&(1<g[a].length||g[a][0]!==d[a])&&c.push({load:[d[a]],remove:g[a]});for(a=0;a<b.length;a++)null!=e[a]&&(1<e[a].length||e[a][0]!==b[a])&&c.push({load:e[a],remove:[b[a]]});return c};m.sortFrontToBack=function(b,d,c){return b.sort(function(b,e){if(0===b.load.length&&0===e.load.length)return 0;if(0===b.load.length)return-1;
if(0===e.load.length)return 1;if(0===b.remove.length&&0===e.remove.length){var f=c.getRenderCenter(b.load[0]),g=c.getRenderCenter(e.load[0]);return l.vec3d.dot(f,d)-l.vec3d.dot(g,d)}if(0===b.remove.length)return-1;if(0===e.remove.length)return 1;if(1===b.load.length&&1===e.load.length)return f=c.getRenderCenter(b.load[0]),g=c.getRenderCenter(e.load[0]),l.vec3d.dot(f,d)-l.vec3d.dot(g,d);if(1===b.load.length)return-1;if(1===e.load.length)return 1;f=c.getRenderCenter(b.remove[0]);g=c.getRenderCenter(e.remove[0]);
return l.vec3d.dot(f,d)-l.vec3d.dot(g,d)})};m.splitWorkEntry=function(b,d){for(var c=[b.remove[0]],h=[];1===c.length;)for(var e=c.pop(),f=h.length=0;f<b.load.length;f++){for(var g=b.load[f],a=d.getParentId(g);a!==e;)g=a,a=d.getParentId(g);a=c.indexOf(g);0>a&&(a=c.length,c.push(g),h.push([]));h[a].push(b.load[f])}e=[];e.push({remove:b.remove,load:c});for(f=0;f<c.length;f++)1<h[f].length?e.push({remove:[c[f]],load:h[f]}):c[f]=h[f][0];return e}});