// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.
//>>built
define("./Camera ./Util ./gl-matrix ../../../../core/Logger ../../../webgl/Texture ../../../webgl/FramebufferObject ../../../webgl/VertexArrayObject ../../../webgl/BufferObject ./DefaultVertexAttributeLocations ./DefaultVertexBufferLayouts ../../../webgl/Util".split(" "),function(ra,m,t,Z,ea,sa,ta,ua,va,wa,fa){var b=t.vec2d,K=t.vec3d,$=t.vec4d,xa=t.mat3d,D=t.mat4d,H=t.mat4,ya=Z.getLogger("esri.views.3d.webgl-engine");return function(t,h){function u(a,b){K.set3(a[b],a[b+3],a[b+6],ga);return ga}var y=
h.gl,z,L=4096,V,aa=new ea(h,{target:y.TEXTURE_2D,pixelFormat:y.RGBA,dataType:y.UNSIGNED_BYTE,samplingMode:y.NEAREST,width:4,height:4}),M=1,ba=2,N=[0,0,0,0,0];this.dispose=function(){aa.dispose();aa=null};var c=function(){this.camera=new ra;this.lightMat=D.create()},P=[],p,k,v;for(p=0;4>p;++p)P[p]=new c;this.getIsSupported=function(){return h.extensions.standardDerivatives};this.setTextureResolution=function(a){L=a};this.getTextureResolution=function(){return L};this.setMaxNumCascades=function(a){ba=
m.clamp(Math.floor(a),1,4)};this.getMaxNumCascades=function(){return ba};this.setEnableState=function(a){a?this.enable():this.disable()};this.getEnableState=function(){return void 0!==z};this.enable=function(){this.getEnableState()||(this.getIsSupported()?(z=new ea(h,{target:y.TEXTURE_2D,pixelFormat:y.RGBA,dataType:y.UNSIGNED_BYTE,wrapMode:y.CLAMP_TO_EDGE,samplingMode:y.NEAREST,flipped:!0,width:L,height:L}),V=sa.createWithAttachments(h,z,{colorTarget:0,depthStencilTarget:1,width:L,height:L})):ya.warn("Shadow maps are not supported for this browser or hardware"))};
this.disable=function(){this.getEnableState()&&V&&(V.dispose(),z=V=void 0)};var ha=D.create(),ia=D.create(),ja=$.create(),w=Array(8);for(p=0;8>p;++p)w[p]=$.create();var I=K.create(),J=K.create(),ka=b.create(),la=b.create(),Z=b.create(),ma=b.create(),na=b.create(),oa=D.create(),pa=K.create();this.prepare=function(x,R,S,c,s){m.assert(this.getEnableState());D.multiply(x.projectionMatrix,x.viewMatrix,ha);var d=s[0],q=s[1];2>d&&(d=2);2>q&&(q=2);d>=q&&(d=2,q=4);M=Math.min(1+Math.floor(m.logWithBase(q/d,
4)),ba);S=Math.pow(q/d,1/M);for(s=0;s<M+1;++s)N[s]=d*Math.pow(S,s);D.inverse(ha,ia);D.lookAt([0,0,0],[-R[0],-R[1],-R[2]],[0,1,0],oa);S=x.viewMatrix;x=x.projectionMatrix;for(s=0;s<M;++s){c=P[s];d=-N[s];q=-N[s+1];d=(x[10]*d+x[14])/Math.abs(x[11]*d+x[15]);q=(x[10]*q+x[14])/Math.abs(x[11]*q+x[15]);m.assert(d<q);for(k=0;8>k;++k){$.set4(0===k%4||3==k%4?-1:1,0===k%4||1==k%4?-1:1,4>k?d:q,1,ja);D.multiplyVec4(ia,ja,w[k]);for(v=0;3>v;++v)w[k][v]/=w[k][3]}K.negate(w[0],pa);D.translate(oa,pa,c.camera.viewMatrix);
for(k=0;8>k;++k)D.multiplyVec3(c.camera.viewMatrix,w[k]);K.set(w[0],I);K.set(w[0],J);for(k=1;8>k;++k)for(v=0;3>v;++v)I[v]=Math.min(I[v],w[k][v]),J[v]=Math.max(J[v],w[k][v]);I[2]-=200;J[2]+=200;c.camera.near=-J[2];c.camera.far=-I[2];d=1/w[0][3];q=1/w[4][3];m.assert(d<q);var g=d+Math.sqrt(d*q),l=Math.sin(Math.acos(S[2]*R[0]+S[6]*R[1]+S[10]*R[2])),g=g/l,d=w,t=g,p=l,l=ka,A=la,f=Z,E=ma,g=na;b.set2(0,0,C);for(var e=void 0,e=0;4>e;++e)b.add(C,d[e],C);b.scale(C,0.25);b.set2(0,0,W);for(e=4;8>e;++e)b.add(W,
d[e],W);b.scale(W,0.25);b.lerp(d[4],d[5],0.5,Q[0]);b.lerp(d[5],d[6],0.5,Q[1]);b.lerp(d[6],d[7],0.5,Q[2]);b.lerp(d[7],d[4],0.5,Q[3]);for(var n=0,F=b.dist2(Q[0],C),e=1;4>e;++e){var z=b.dist2(Q[e],C);z<F&&(F=z,n=e)}b.subtract(Q[n],d[n+4],r);e=r[0];r[0]=-r[1];r[1]=e;b.subtract(W,C,qa);b.lerp(r,qa,p);b.normalize(r);n=p=void 0;p=n=b.dot(b.subtract(d[0],C,O),r);for(e=1;8>e;++e)F=b.dot(b.subtract(d[e],C,O),r),F<p?p=F:F>n&&(n=F);b.set(C,l);b.scale(r,p-t,O);b.add(l,O,l);for(var z=-1,H=1,e=t=F=0;8>e;++e){b.subtract(d[e],
l,X);b.normalize(X);var G=r[0]*X[1]-r[1]*X[0];0<G?G>z&&(z=G,F=e):G<H&&(H=G,t=e)}m.verify(0<z,"leftArea");m.verify(0>H,"rightArea");b.scale(r,p,T);b.add(T,C,T);b.scale(r,n,U);b.add(U,C,U);Y[0]=-r[1];Y[1]=r[0];A=m.rayRay2D(l,d[t],U,b.add(U,Y,O),1,A);f=m.rayRay2D(l,d[F],U,O,1,f);E=m.rayRay2D(l,d[F],T,b.add(T,Y,O),1,E);d=m.rayRay2D(l,d[t],T,O,1,g);m.verify(A,"rayRay");m.verify(f,"rayRay");m.verify(E,"rayRay");m.verify(d,"rayRay");f=ka;d=la;l=ma;E=na;g=c.camera.projectionMatrix;b.scale(b.subtract(l,E,
B),0.5);a[0]=B[0];a[1]=B[1];a[2]=0;a[3]=B[1];a[4]=-B[0];a[5]=0;a[6]=B[0]*B[0]+B[1]*B[1];a[7]=B[0]*B[1]-B[1]*B[0];a[8]=1;a[6]=-b.dot(u(a,0),f);a[7]=-b.dot(u(a,1),f);f=b.dot(u(a,0),l)+a[6];A=b.dot(u(a,1),l)+a[7];e=b.dot(u(a,0),E)+a[6];E=b.dot(u(a,1),E)+a[7];f=-(f+e)/(A+E);a[0]+=a[1]*f;a[3]+=a[4]*f;a[6]+=a[7]*f;f=1/(b.dot(u(a,0),l)+a[6]);A=1/(b.dot(u(a,1),l)+a[7]);a[0]*=f;a[3]*=f;a[6]*=f;a[1]*=A;a[4]*=A;a[7]*=A;a[2]=a[1];a[5]=a[4];a[8]=a[7];a[7]+=1;f=b.dot(u(a,1),d)+a[7];A=b.dot(u(a,2),d)+a[8];e=b.dot(u(a,
1),l)+a[7];E=b.dot(u(a,2),l)+a[8];f=-0.5*(f/A+e/E);a[1]+=a[2]*f;a[4]+=a[5]*f;a[7]+=a[8]*f;f=b.dot(u(a,1),d)+a[7];A=b.dot(u(a,2),d)+a[8];e=-A/f;a[1]*=e;a[4]*=e;a[7]*=e;g[0]=a[0];g[1]=a[1];g[2]=0;g[3]=a[2];g[4]=a[3];g[5]=a[4];g[6]=0;g[7]=a[5];g[8]=0;g[9]=0;g[10]=1;g[11]=0;g[12]=a[6];g[13]=a[7];g[14]=0;g[15]=a[8];c.camera.projectionMatrix[10]=2/(I[2]-J[2]);c.camera.projectionMatrix[14]=-(I[2]+J[2])/(I[2]-J[2]);D.multiply(c.camera.projectionMatrix,c.camera.viewMatrix,c.lightMat);d=L/2;c.camera.viewport[0]=
0===s%2?0:d;c.camera.viewport[1]=0===Math.floor(s/2)?0:d;c.camera.viewport[2]=d;c.camera.viewport[3]=d}N[M]=100*q;h.bindFramebuffer(V);h.bindTexture(null,7);h.setClearColor(1,1,1,1);h.clear(y.COLOR_BUFFER_BIT|y.DEPTH_BUFFER_BIT);h.setBlendingEnabled(!1)};var ca=[];this.getCascades=function(){for(var a=0;a<M;++a)ca[a]=P[a];ca.length=M;return ca};this.finish=function(a){m.assert(this.getEnableState());h.bindFramebuffer(a)};this.bind=function(a){var b=this.getEnableState();h.bindTexture(b?z:aa,7);h.bindProgram(a);
a.setUniform1i("depthTex",7);a.setUniform1f("depthHalfPixelSz",b?0.5/L:-1);a.setUniform1i("shadowMapNum",M);a.setUniform4f("shadowMapDistance",N[0],N[1],N[2],N[3])};this.bindAll=function(a){a=a.getProgramsUsingUniform("shadowMapDistance");for(var b=0;b<a.length;b++)this.bind(a[b])};var n=H.create(),G=new Float32Array(64);this.bindView=function(a,b){if(this.getEnableState()){var c;H.translate(P[0].lightMat,b,n);for(c=0;16>c;++c)G[c]=n[c];H.translate(P[1].lightMat,b,n);for(c=0;16>c;++c)G[16+c]=n[c];
H.translate(P[2].lightMat,b,n);for(c=0;16>c;++c)G[32+c]=n[c];H.translate(P[3].lightMat,b,n);for(c=0;16>c;++c)G[48+c]=n[c];a.setUniformMatrix4fv("shadowMapMatrix",G)}};c=new Float32Array(16);c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=256;c[5]=0;c[6]=1;c[7]=0;c[8]=0;c[9]=256;c[10]=0;c[11]=1;c[12]=256;c[13]=256;c[14]=1;c[15]=1;var da=new ta(h,va.Default3D,{geometry:wa.Pos2Tex},{geometry:ua.createVertex(h,y.STATIC_DRAW,c)});this.drawDebugQuad=function(a){m.assert(this.getEnableState());var b=t.get("showDepth");
h.setDepthTestEnabled(!1);h.bindProgram(b);b.setUniformMatrix4fv("proj",a);b.setUniform1i("depthTex",0);h.bindTexture(z,0);h.bindVAO(da);fa.assertCompatibleVertexAttributeLocations(da,b);h.drawArrays(y.TRIANGLE_STRIP,0,fa.vertexCount(da,"geometry"));h.setDepthTestEnabled(!0)};var C=b.create(),W=b.create(),Q=[b.create(),b.create(),b.create(),b.create()],r=b.create(),qa=b.create(),O=b.create(),X=b.create(),T=b.create(),U=b.create(),Y=b.create(),ga=K.create(),B=b.create(),a=xa.create()}});