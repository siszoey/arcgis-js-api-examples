// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","./Bitmap"],function(q,r,l,m){var n=[0,0],p=[0,0];return function(k){function d(b,e,f,a){void 0===e&&(e=[0,0]);void 0===f&&(f=[0,0]);void 0===a&&(a=0);k.call(this,b);this.source=b;this.topLeft=e;this.bottomRight=f;this.resolution=a}l(d,k);d.prototype.dispose=function(){};d.prototype.renderCanvas2D=function(b){var e=this.source,f=b.context;b=b.state;var a=b.toScreen(n,this.topLeft),g=a[0],h=a[1],c=b.toScreen(p,this.bottomRight),a=
c[0]-g,c=c[1]-h,d=this.width,k=this.height;b.resolution===this.resolution&&(g=Math.round(g),h=Math.round(h),a=Math.round(a),c=Math.round(c));f.clearRect(g,h,a,c);null!=e.drawImage?e.drawImage(f,0,0,d,k,g,h,a,c):f.drawImage(e,0,0,d,k,g,h,a,c)};return d}(m)});