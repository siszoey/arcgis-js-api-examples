// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["../Point"],function(n){function r(a,b){var c,d,e;a instanceof n?(c=b.x-a.x,d=b.y-a.y,e=0,null!=a.z&&null!=b.z&&(e=a.z-b.z)):(c=b[0]-a[0],d=b[1]-a[1],e=0,null!=a[2]&&null!=b[2]&&(e=a[2]-b[2]));return Math.sqrt(c*c+d*d+e*e)}function s(a,b,c){var d,e,f;if(a instanceof n)return d=a.x+c*(b.x-a.x),e=a.y+c*(b.y-a.y),null!=a.z&&null!=b.z&&(f=a.z+c*(b.z-a.z)),new n(d,e,f);d=a[0]+c*(b[0]-a[0]);e=a[1]+c*(b[1]-a[1]);return 2<a.length&&2<b.length?[d,e,a[2]+c*(b[2]-a[2])]:[d,e]}function g(a,b){return 1E-8>
Math.abs(a-b)}function t(a,b,c,d){var e,f=g(a[0],b[0])?1E10:(a[1]-b[1])/(a[0]-b[0]),k=g(c[0],d[0])?1E10:(c[1]-d[1])/(c[0]-d[0]),l=a[1]-f*a[0],h=c[1]-k*c[0];if(g(f,k)){if(g(l,h)){if(g(a[0],b[0]))if(Math.min(a[1],b[1])<Math.max(c[1],d[1])||Math.max(a[1],b[1])>Math.min(c[1],d[1]))a=(a[1]+b[1]+c[1]+d[1]-Math.min(a[1],b[1],c[1],d[1])-Math.max(a[1],b[1],c[1],d[1]))/2,e=(a-l)/f;else return null;else if(Math.min(a[0],b[0])<Math.max(c[0],d[0])||Math.max(a[0],b[0])>Math.min(c[0],d[0]))e=(a[0]+b[0]+c[0]+d[0]-
Math.min(a[0],b[0],c[0],d[0])-Math.max(a[0],b[0],c[0],d[0]))/2,a=f*e+l;else return null;return[e,a]}return null}g(f,1E10)?(e=a[0],a=k*e+h):g(k,1E10)?(e=c[0],a=f*e+l):(e=-(l-h)/(f-k),a=a[1]===b[1]?a[1]:c[1]===d[1]?c[1]:f*e+l);return[e,a]}return{getLength:r,_getLength:function(a,b){var c=b[0]-a[0],d=b[1]-a[1];return Math.sqrt(c*c+d*d)},getPointOnLine:s,getMidpoint:function(a,b){return s(a,b,0.5)},_equals:g,_getLineIntersection:t,getLineIntersection:function(a,b,c,d,e){(a=t([a.x,a.y],[b.x,b.y],[c.x,
c.y],[d.x,d.y]))&&(a=new n(a[0],a[1],e));return a},_getLineIntersection2:function(a,b){var c=a[0],d=a[1],e=b[0],f=b[1],k=c[0],c=c[1],l=d[0],d=d[1],h=e[0],q=e[1],e=f[0]-h,h=k-h,g=l-k,f=f[1]-q,q=c-q,m=d-c,p=f*g-e*m;if(0===p)return!1;e=(e*q-f*h)/p;h=(g*q-m*h)/p;return 0<=e&&1>=e&&0<=h&&1>=h?[k+e*(l-k),c+e*(d-c)]:!1},_pointLineDistance:function(a,b){var c=b[0],d=b[1],e=c[0],f=c[1],c=a[0],k=a[1],l=d[0]-e,h=d[1]-f,g=c-e,n=k-f,d=Math.sqrt,m=Math.pow,p=d(m(l,2)+m(h,2)),g=(g*l+n*h)/(p*p),f=f+g*h;return d(m(c-
(e+g*l),2)+m(k-f,2))},getPathLength:function(a){for(var b=0,c=a.length,d=0;d<c-1;++d)b+=r(a[d],a[d+1]);return b},getPointOnPath:function(a,b){if(0>=b)return a[0];for(var c=0,d=a.length,e=0;e<d-1;++e){var f=r(a[e],a[e+1]);if(b-c<f)return s(a[e],a[e+1],(b-c)/f);c+=f}return a[d-1]}}});