// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define([],function(){function w(a,b,c){c=c||2;var f=b&&b.length,e=f?b[0]*c:a.length,k=F(a,0,e,c,!0),h=[];if(!k)return h;var m,d,p,l;if(f){var g=c,f=[],q,n,t;l=0;for(q=b.length;l<q;l++)n=b[l]*g,t=l<q-1?b[l+1]*g:a.length,n=F(a,n,t,g,!1),n===n.next&&(n.steiner=!0),f.push(J(n));f.sort(K);for(l=0;l<f.length;l++){b=f[l];g=k;if(g=L(b,g))b=G(g,b),x(b,b.next);k=x(k,k.next)}}if(a.length>80*c){m=p=a[0];d=f=a[1];for(g=c;g<e;g+=c)l=a[g],b=a[g+1],l<m&&(m=l),b<d&&(d=b),l>p&&(p=l),b>f&&(f=b);p=Math.max(p-m,f-d)}y(k,
h,c,m,d,p);return h}function F(a,b,c,f,e){var k;if(e===0<z(a,b,c,f))for(e=b;e<c;e+=f)k=H(e,a[e],a[e+1],k);else for(e=c-f;e>=b;e-=f)k=H(e,a[e],a[e+1],k);k&&v(k,k.next)&&(A(k),k=k.next);return k}function x(a,b){if(!a)return a;b||(b=a);var c=a,f;do if(f=!1,!c.steiner&&(v(c,c.next)||0===t(c.prev,c,c.next))){A(c);c=b=c.prev;if(c===c.next)return null;f=!0}else c=c.next;while(f||c!==b);return b}function y(a,b,c,f,e,k,h){if(a){if(!h&&k){var m=a,d=m;do null===d.z&&(d.z=E(d.x,d.y,f,e,k)),d.prevZ=d.prev,d=d.nextZ=
d.next;while(d!==m);d.prevZ.nextZ=null;d.prevZ=null;var m=d,p,l,g,q,n,u,r=1;do{d=m;g=m=null;for(q=0;d;){q++;l=d;for(p=n=0;p<r&&!(n++,l=l.nextZ,!l);p++);for(u=r;0<n||0<u&&l;)0===n?(p=l,l=l.nextZ,u--):0===u||!l?(p=d,d=d.nextZ,n--):d.z<=l.z?(p=d,d=d.nextZ,n--):(p=l,l=l.nextZ,u--),g?g.nextZ=p:m=p,p.prevZ=g,g=p;d=l}g.nextZ=null;r*=2}while(1<q)}for(m=a;a.prev!==a.next;){d=a.prev;l=a.next;if(k)a:{g=a;u=f;var s=e,w=k;q=g.prev;n=g;r=g.next;if(0<=t(q,n,r))g=!1;else{var z=q.x>n.x?q.x>r.x?q.x:r.x:n.x>r.x?n.x:
r.x,C=q.y>n.y?q.y>r.y?q.y:r.y:n.y>r.y?n.y:r.y;p=E(q.x<n.x?q.x<r.x?q.x:r.x:n.x<r.x?n.x:r.x,q.y<n.y?q.y<r.y?q.y:r.y:n.y<r.y?n.y:r.y,u,s,w);u=E(z,C,u,s,w);for(s=g.nextZ;s&&s.z<=u;){if(s!==g.prev&&s!==g.next&&D(q.x,q.y,n.x,n.y,r.x,r.y,s.x,s.y)&&0<=t(s.prev,s,s.next)){g=!1;break a}s=s.nextZ}for(s=g.prevZ;s&&s.z>=p;){if(s!==g.prev&&s!==g.next&&D(q.x,q.y,n.x,n.y,r.x,r.y,s.x,s.y)&&0<=t(s.prev,s,s.next)){g=!1;break a}s=s.prevZ}g=!0}}else a:if(g=a,q=g.prev,n=g,r=g.next,0<=t(q,n,r))g=!1;else{for(p=g.next.next;p!==
g.prev;){if(D(q.x,q.y,n.x,n.y,r.x,r.y,p.x,p.y)&&0<=t(p.prev,p,p.next)){g=!1;break a}p=p.next}g=!0}if(g)b.push(d.i/c),b.push(a.i/c),b.push(l.i/c),A(a),m=a=l.next;else if(a=l,a===m){if(h)if(1===h){h=b;m=c;d=a;do l=d.prev,g=d.next.next,!v(l,g)&&(I(l,d,d.next,g)&&B(l,g)&&B(g,l))&&(h.push(l.i/m),h.push(d.i/m),h.push(g.i/m),A(d),A(d.next),d=a=g),d=d.next;while(d!==a);a=d;y(a,b,c,f,e,k,2)}else{if(2===h)a:{h=a;do{for(m=h.next.next;m!==h.prev;){if(d=h.i!==m.i)if(d=h.next.i!==m.i)if(d=h.prev.i!==m.i){b:{d=
h;l=m;g=d;do{if(g.i!==d.i&&g.next.i!==d.i&&g.i!==l.i&&g.next.i!==l.i&&I(g,g.next,d,l)){d=!0;break b}g=g.next}while(g!==d);d=!1}if(d=!d)if(d=B(h,m))if(d=B(m,h)){d=h;l=!1;g=(h.x+m.x)/2;q=(h.y+m.y)/2;do d.y>q!==d.next.y>q&&g<(d.next.x-d.x)*(q-d.y)/(d.next.y-d.y)+d.x&&(l=!l),d=d.next;while(d!==h);d=l}}if(d){a=G(h,m);h=x(h,h.next);a=x(a,a.next);y(h,b,c,f,e,k);y(a,b,c,f,e,k);break a}m=m.next}h=h.next}while(h!==a)}}else y(x(a),b,c,f,e,k,1);break}}}}function K(a,b){return a.x-b.x}function L(a,b){var c=b,
f=a.x,e=a.y,k=-Infinity,h;do{if(e<=c.y&&e>=c.next.y){var m=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(m<=f&&m>k){k=m;if(m===f){if(e===c.y)return c;if(e===c.next.y)return c.next}h=c.x<c.next.x?c:c.next}}c=c.next}while(c!==b);if(!h)return null;if(f===k)return h.prev;for(var m=h,d=h.x,p=h.y,l=Infinity,g,c=h.next;c!==m;){if(f>=c.x&&c.x>=d&&D(e<p?f:k,e,d,p,e<p?k:f,e,c.x,c.y))if(g=Math.abs(e-c.y)/(f-c.x),(g<l||g===l&&c.x>h.x)&&B(c,a))h=c,l=g;c=c.next}return h}function E(a,b,c,f,e){a=32767*(a-c)/e;b=32767*
(b-f)/e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1}function J(a){var b=a,c=a;do b.x<c.x&&(c=b),b=b.next;while(b!==a);return c}function D(a,b,c,f,e,k,h,m){return 0<=(e-h)*(b-m)-(a-h)*(k-m)&&0<=(a-h)*(f-m)-(c-h)*(b-m)&&0<=(c-h)*(k-m)-(e-h)*(f-m)}function t(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)}function v(a,b){return a.x===b.x&&a.y===b.y}function I(a,b,c,
f){return v(a,b)&&v(c,f)||v(a,f)&&v(c,b)?!0:0<t(a,b,c)!==0<t(a,b,f)&&0<t(c,f,a)!==0<t(c,f,b)}function B(a,b){return 0>t(a.prev,a,a.next)?0<=t(a,b,a.next)&&0<=t(a,a.prev,b):0>t(a,b,a.prev)||0>t(a,a.next,b)}function G(a,b){var c=new C(a.i,a.x,a.y),f=new C(b.i,b.x,b.y),e=a.next,k=b.prev;a.next=b;b.prev=a;c.next=e;e.prev=c;f.next=c;c.prev=f;k.next=f;f.prev=k;return f}function H(a,b,c,f){a=new C(a,b,c);f?(a.next=f.next,a.prev=f,f.next.prev=a,f.next=a):(a.prev=a,a.next=a);return a}function A(a){a.next.prev=
a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function C(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1}function z(a,b,c,f){for(var e=0,k=c-f;b<c;b+=f)e+=(a[k]-a[b])*(a[b+1]+a[k+1]),k=b;return e}w.deviation=function(a,b,c,f){var e=b&&b.length,k=Math.abs(z(a,0,e?b[0]*c:a.length,c));if(e)for(var e=0,h=b.length;e<h;e++)k-=Math.abs(z(a,b[e]*c,e<h-1?b[e+1]*c:a.length,c));for(e=b=0;e<f.length;e+=3){var h=
f[e]*c,m=f[e+1]*c,d=f[e+2]*c;b+=Math.abs((a[h]-a[d])*(a[m+1]-a[h+1])-(a[h]-a[m])*(a[d+1]-a[h+1]))}return 0===k&&0===b?0:Math.abs((b-k)/k)};w.flatten=function(a){for(var b=a[0][0].length,c={vertices:[],holes:[],dimensions:b},f=0,e=0;e<a.length;e++){for(var k=0;k<a[e].length;k++)for(var h=0;h<b;h++)c.vertices.push(a[e][k][h]);0<e&&(f+=a[e-1].length,c.holes.push(f))}return c};return w});