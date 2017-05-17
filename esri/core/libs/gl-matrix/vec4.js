// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define(["./common"],function(k){var d={create:function(){var a=new k.ARRAY_TYPE(4);a[0]=0;a[1]=0;a[2]=0;a[3]=0;return a},clone:function(a){var b=new k.ARRAY_TYPE(4);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b},fromValues:function(a,b,c,f){var d=new k.ARRAY_TYPE(4);d[0]=a;d[1]=b;d[2]=c;d[3]=f;return d},copy:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];return a},set:function(a,b,c,f,d){a[0]=b;a[1]=c;a[2]=f;a[3]=d;return a},add:function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];
a[3]=b[3]+c[3];return a},subtract:function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];return a}};d.sub=d.subtract;d.multiply=function(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];a[2]=b[2]*c[2];a[3]=b[3]*c[3];return a};d.mul=d.multiply;d.divide=function(a,b,c){a[0]=b[0]/c[0];a[1]=b[1]/c[1];a[2]=b[2]/c[2];a[3]=b[3]/c[3];return a};d.div=d.divide;d.ceil=function(a,b){a[0]=Math.ceil(b[0]);a[1]=Math.ceil(b[1]);a[2]=Math.ceil(b[2]);a[3]=Math.ceil(b[3]);return a};d.floor=function(a,b){a[0]=
Math.floor(b[0]);a[1]=Math.floor(b[1]);a[2]=Math.floor(b[2]);a[3]=Math.floor(b[3]);return a};d.min=function(a,b,c){a[0]=Math.min(b[0],c[0]);a[1]=Math.min(b[1],c[1]);a[2]=Math.min(b[2],c[2]);a[3]=Math.min(b[3],c[3]);return a};d.max=function(a,b,c){a[0]=Math.max(b[0],c[0]);a[1]=Math.max(b[1],c[1]);a[2]=Math.max(b[2],c[2]);a[3]=Math.max(b[3],c[3]);return a};d.round=function(a,b){a[0]=Math.round(b[0]);a[1]=Math.round(b[1]);a[2]=Math.round(b[2]);a[3]=Math.round(b[3]);return a};d.scale=function(a,b,c){a[0]=
b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;return a};d.scaleAndAdd=function(a,b,c,f){a[0]=b[0]+c[0]*f;a[1]=b[1]+c[1]*f;a[2]=b[2]+c[2]*f;a[3]=b[3]+c[3]*f;return a};d.distance=function(a,b){var c=b[0]-a[0],f=b[1]-a[1],d=b[2]-a[2],e=b[3]-a[3];return Math.sqrt(c*c+f*f+d*d+e*e)};d.dist=d.distance;d.squaredDistance=function(a,b){var c=b[0]-a[0],f=b[1]-a[1],d=b[2]-a[2],e=b[3]-a[3];return c*c+f*f+d*d+e*e};d.sqrDist=d.squaredDistance;d.length=function(a){var b=a[0],c=a[1],f=a[2];a=a[3];return Math.sqrt(b*
b+c*c+f*f+a*a)};d.len=d.length;d.squaredLength=function(a){var b=a[0],c=a[1],f=a[2];a=a[3];return b*b+c*c+f*f+a*a};d.sqrLen=d.squaredLength;d.negate=function(a,b){a[0]=-b[0];a[1]=-b[1];a[2]=-b[2];a[3]=-b[3];return a};d.inverse=function(a,b){a[0]=1/b[0];a[1]=1/b[1];a[2]=1/b[2];a[3]=1/b[3];return a};d.normalize=function(a,b){var c=b[0],f=b[1],d=b[2],e=b[3],g=c*c+f*f+d*d+e*e;0<g&&(g=1/Math.sqrt(g),a[0]=c*g,a[1]=f*g,a[2]=d*g,a[3]=e*g);return a};d.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+
a[3]*b[3]};d.lerp=function(a,b,c,d){var h=b[0],e=b[1],g=b[2];b=b[3];a[0]=h+d*(c[0]-h);a[1]=e+d*(c[1]-e);a[2]=g+d*(c[2]-g);a[3]=b+d*(c[3]-b);return a};d.random=function(a,b){b=b||1;a[0]=k.RANDOM();a[1]=k.RANDOM();a[2]=k.RANDOM();a[3]=k.RANDOM();d.normalize(a,a);d.scale(a,a,b);return a};d.transformMat4=function(a,b,c){var d=b[0],h=b[1],e=b[2];b=b[3];a[0]=c[0]*d+c[4]*h+c[8]*e+c[12]*b;a[1]=c[1]*d+c[5]*h+c[9]*e+c[13]*b;a[2]=c[2]*d+c[6]*h+c[10]*e+c[14]*b;a[3]=c[3]*d+c[7]*h+c[11]*e+c[15]*b;return a};d.transformQuat=
function(a,b,c){var d=b[0],h=b[1],e=b[2],g=c[0],k=c[1],l=c[2];c=c[3];var m=c*d+k*e-l*h,n=c*h+l*d-g*e,p=c*e+g*h-k*d,d=-g*d-k*h-l*e;a[0]=m*c+d*-g+n*-l-p*-k;a[1]=n*c+d*-k+p*-g-m*-l;a[2]=p*c+d*-l+m*-k-n*-g;a[3]=b[3];return a};d.forEach=function(){var a=d.create();return function(b,c,d,h,e,g){c||(c=4);d||(d=0);for(h=h?Math.min(h*c+d,b.length):b.length;d<h;d+=c)a[0]=b[d],a[1]=b[d+1],a[2]=b[d+2],a[3]=b[d+3],e(a,a,g),b[d]=a[0],b[d+1]=a[1],b[d+2]=a[2],b[d+3]=a[3];return b}}();d.str=function(a){return"vec4("+
a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"};d.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]};d.equals=function(a,b){var c=a[0],d=a[1],h=a[2],e=a[3],g=b[0],q=b[1],l=b[2],m=b[3];return Math.abs(c-g)<=k.EPSILON*Math.max(1,Math.abs(c),Math.abs(g))&&Math.abs(d-q)<=k.EPSILON*Math.max(1,Math.abs(d),Math.abs(q))&&Math.abs(h-l)<=k.EPSILON*Math.max(1,Math.abs(h),Math.abs(l))&&Math.abs(e-m)<=k.EPSILON*Math.max(1,Math.abs(e),Math.abs(m))};return d});