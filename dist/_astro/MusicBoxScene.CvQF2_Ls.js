/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tl="167",qi={ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Df=0,dc=1,If=2,Gh=1,Vh=2,kn=3,fi=0,Ge=1,An=2,li=0,_r=1,lo=2,pc=3,mc=4,Uf=5,Li=100,Nf=101,Of=102,Ff=103,zf=104,Bf=200,kf=201,Gf=202,Vf=203,wa=204,ba=205,Hf=206,Wf=207,Xf=208,Yf=209,qf=210,Kf=211,Zf=212,jf=213,Jf=214,$f=0,Qf=1,td=2,co=3,ed=4,nd=5,id=6,rd=7,Hh=0,sd=1,od=2,ci=0,ad=1,ld=2,cd=3,Wh=4,hd=5,ud=6,fd=7,Xh=300,Sr=301,Er=302,Aa=303,Ca=304,To=306,Ra=1e3,Ii=1001,Pa=1002,fn=1003,dd=1004,Es=1005,Mn=1006,Fo=1007,Ui=1008,Xn=1009,Yh=1010,qh=1011,rs=1012,wl=1013,ki=1014,Hn=1015,_s=1016,bl=1017,Al=1018,Tr=1020,Kh=35902,Zh=1021,jh=1022,Sn=1023,Jh=1024,$h=1025,gr=1026,wr=1027,Qh=1028,Cl=1029,tu=1030,Rl=1031,Pl=1033,$s=33776,Qs=33777,to=33778,eo=33779,La=35840,Da=35841,Ia=35842,Ua=35843,Na=36196,Oa=37492,Fa=37496,za=37808,Ba=37809,ka=37810,Ga=37811,Va=37812,Ha=37813,Wa=37814,Xa=37815,Ya=37816,qa=37817,Ka=37818,Za=37819,ja=37820,Ja=37821,no=36492,$a=36494,Qa=36495,eu=36283,tl=36284,el=36285,nl=36286,pd=3200,md=3201,nu=0,_d=1,ri="",xn="srgb",gi="srgb-linear",Ll="display-p3",wo="display-p3-linear",ho="linear",ne="srgb",uo="rec709",fo="p3",Ki=7680,_c=519,gd=512,vd=513,xd=514,iu=515,Md=516,yd=517,Sd=518,Ed=519,gc=35044,vc="300 es",Wn=2e3,po=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],io=Math.PI/180,mo=180/Math.PI;function Ur(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[r&255]+Ne[r>>8&255]+Ne[r>>16&255]+Ne[r>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Re(r,t,e){return Math.max(t,Math.min(e,r))}function Td(r,t){return(r%t+t)%t}function zo(r,t,e){return(1-e)*r+e*t}function zr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function He(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const wd={DEG2RAD:io};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,s,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],v=i[4],M=i[7],A=i[2],w=i[5],b=i[8];return s[0]=o*_+a*x+l*A,s[3]=o*m+a*v+l*w,s[6]=o*p+a*M+l*b,s[1]=c*_+h*x+u*A,s[4]=c*m+h*v+u*w,s[7]=c*p+h*M+u*b,s[2]=f*_+d*x+g*A,s[5]=f*m+d*v+g*w,s[8]=f*p+d*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bo=new Ht;function ru(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function _o(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bd(){const r=_o("canvas");return r.style.display="block",r}const xc={};function jr(r){r in xc||(xc[r]=!0,console.warn(r))}function Ad(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Mc=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yc=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Br={[gi]:{transfer:ho,primaries:uo,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[xn]:{transfer:ne,primaries:uo,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[wo]:{transfer:ho,primaries:fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(yc),fromReference:r=>r.applyMatrix3(Mc)},[Ll]:{transfer:ne,primaries:fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(yc),fromReference:r=>r.applyMatrix3(Mc).convertLinearToSRGB()}},Cd=new Set([gi,wo]),$t={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Cd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Br[t].toReference,i=Br[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Br[r].primaries},getTransfer:function(r){return r===ri?ho:Br[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(Br[t].luminanceCoefficients)}};function vr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ko(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Zi;class Rd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=_o("canvas")),Zi.width=t.width,Zi.height=t.height;const n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_o("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=vr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vr(e[n]/255)*255):e[n]=vr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pd=0;class su{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Ur(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Go(i[o].image)):s.push(Go(i[o]))}else s=Go(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Go(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ld=0;class Ve extends Wi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=Ii,i=Ii,s=Mn,o=Ui,a=Sn,l=Xn,c=Ve.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Ur(),this.name="",this.source=new su(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Xh;Ve.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(d+1)/2,A=(p+1)/2,w=(h+f)/4,b=(u+_)/4,R=(g+m)/4;return v>M&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=b/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=R/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dd extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new su(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Dd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ou extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Id extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,p*x);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const M=a*x;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vo.copy(this).projectOnVector(t),this.sub(Vo)}reflect(t){return this.sub(Vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new I,Sc=new Vi;class gs{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(kr),ws.subVectors(this.max,kr),ji.subVectors(t.a,kr),Ji.subVectors(t.b,kr),$i.subVectors(t.c,kr),jn.subVectors(Ji,ji),Jn.subVectors($i,Ji),Mi.subVectors(ji,$i);let e=[0,-jn.z,jn.y,0,-Jn.z,Jn.y,0,-Mi.z,Mi.y,jn.z,0,-jn.x,Jn.z,0,-Jn.x,Mi.z,0,-Mi.x,-jn.y,jn.x,0,-Jn.y,Jn.x,0,-Mi.y,Mi.x,0];return!Ho(e,ji,Ji,$i,ws)||(e=[1,0,0,0,1,0,0,0,1],!Ho(e,ji,Ji,$i,ws))?!1:(bs.crossVectors(jn,Jn),e=[bs.x,bs.y,bs.z],Ho(e,ji,Ji,$i,ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new I,new I,new I,new I,new I,new I,new I,new I],_n=new I,Ts=new gs,ji=new I,Ji=new I,$i=new I,jn=new I,Jn=new I,Mi=new I,kr=new I,ws=new I,bs=new I,yi=new I;function Ho(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){yi.fromArray(r,s);const a=i.x*Math.abs(yi.x)+i.y*Math.abs(yi.y)+i.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ud=new gs,Gr=new I,Wo=new I;class bo{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);const e=Gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Gr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(Wo)),this.expandByPoint(Gr.copy(t.center).sub(Wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new I,Xo=new I,As=new I,$n=new I,Yo=new I,Cs=new I,qo=new I;class Dl{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xo.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(Xo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(As),a=$n.dot(this.direction),l=-$n.dot(As),c=$n.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xo).addScaledVector(As,f),d}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,s){Yo.subVectors(e,t),Cs.subVectors(n,t),qo.crossVectors(Yo,Cs);let o=this.direction.dot(qo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,t);const l=a*this.direction.dot(Cs.crossVectors($n,Cs));if(l<0)return null;const c=a*this.direction.dot(Yo.cross($n));if(c<0||l+c>o)return null;const h=-a*$n.dot(qo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qi.setFromMatrixColumn(t,0).length(),s=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Od)}lookAt(t,e,n){const i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Qn.crossVectors(n,Qe),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Qn.crossVectors(n,Qe)),Qn.normalize(),Rs.crossVectors(Qe,Qn),i[0]=Qn.x,i[4]=Rs.x,i[8]=Qe.x,i[1]=Qn.y,i[5]=Rs.y,i[9]=Qe.y,i[2]=Qn.z,i[6]=Rs.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],M=n[11],A=n[15],w=i[0],b=i[4],R=i[8],y=i[12],S=i[1],L=i[5],U=i[9],N=i[13],B=i[2],q=i[6],z=i[10],Z=i[14],Y=i[3],ot=i[7],ct=i[11],ht=i[15];return s[0]=o*w+a*S+l*B+c*Y,s[4]=o*b+a*L+l*q+c*ot,s[8]=o*R+a*U+l*z+c*ct,s[12]=o*y+a*N+l*Z+c*ht,s[1]=h*w+u*S+f*B+d*Y,s[5]=h*b+u*L+f*q+d*ot,s[9]=h*R+u*U+f*z+d*ct,s[13]=h*y+u*N+f*Z+d*ht,s[2]=g*w+_*S+m*B+p*Y,s[6]=g*b+_*L+m*q+p*ot,s[10]=g*R+_*U+m*z+p*ct,s[14]=g*y+_*N+m*Z+p*ht,s[3]=x*w+v*S+M*B+A*Y,s[7]=x*b+v*L+M*q+A*ot,s[11]=x*R+v*U+M*z+A*ct,s[15]=x*y+v*N+M*Z+A*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,v=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,M=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,A=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,w=e*x+n*v+i*M+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=x*b,t[1]=(_*f*s-u*m*s-_*i*d+n*m*d+u*i*p-n*f*p)*b,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*b,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*b,t[4]=v*b,t[5]=(h*m*s-g*f*s+g*i*d-e*m*d-h*i*p+e*f*p)*b,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*b,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*b,t[8]=M*b,t[9]=(g*u*s-h*_*s-g*n*d+e*_*d+h*n*p-e*u*p)*b,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*b,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*b,t[12]=A*b,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*b,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,_=o*h,m=o*u,p=a*u,x=l*c,v=l*h,M=l*u,A=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*A,i[1]=(d+M)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(d-M)*w,i[5]=(1-(f+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+v)*b,i[9]=(m-x)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Qi.set(i[0],i[1],i[2]).length();const o=Qi.set(i[4],i[5],i[6]).length(),a=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],gn.copy(this);const c=1/s,h=1/o,u=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Wn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===Wn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===po)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Wn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h;let g,_;if(a===Wn)g=(o+s)*u,_=-2*u;else if(a===po)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new I,gn=new oe,Nd=new I(0,0,0),Od=new I(1,1,1),Qn=new I,Rs=new I,Qe=new I,Ec=new oe,Tc=new Vi;class Ln{constructor(t=0,e=0,n=0,i=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class au{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fd=0;const wc=new I,tr=new Vi,Fn=new oe,Ps=new I,Vr=new I,zd=new I,Bd=new Vi,bc=new I(1,0,0),Ac=new I(0,1,0),Cc=new I(0,0,1),Rc={type:"added"},kd={type:"removed"},er={type:"childadded",child:null},Ko={type:"childremoved",child:null};class Ee extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new I,e=new Ln,n=new Vi,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ht}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(Cc,t)}translateOnAxis(t,e){return wc.copy(t).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(Cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Vr,Ps,this.up):Fn.lookAt(Ps,Vr,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(Fn),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kd),Ko.child=t,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new I(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new I,zn=new I,Zo=new I,Bn=new I,nr=new I,ir=new I,Pc=new I,jo=new I,Jo=new I,$o=new I;class Cn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){vn.subVectors(i,e),zn.subVectors(n,e),Zo.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(zn),l=vn.dot(Zo),c=zn.dot(zn),h=zn.dot(Zo),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),zn.subVectors(t,e),vn.cross(zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),vn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;nr.subVectors(i,n),ir.subVectors(s,n),jo.subVectors(t,n);const l=nr.dot(jo),c=ir.dot(jo);if(l<=0&&c<=0)return e.copy(n);Jo.subVectors(t,i);const h=nr.dot(Jo),u=ir.dot(Jo);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(nr,o);$o.subVectors(t,s);const d=nr.dot($o),g=ir.dot($o);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ir,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Pc.subVectors(s,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Pc,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Qo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Td(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Qo(o,s,t+1/3),this.g=Qo(o,s,t),this.b=Qo(o,s,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}copyLinearToSRGB(t){return this.r=ko(t.r),this.g=ko(t.g),this.b=ko(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return $t.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Re(Oe.r*255,0,255))*65536+Math.round(Re(Oe.g*255,0,255))*256+Math.round(Re(Oe.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,i=Oe.g,s=Oe.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=xn){$t.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,i=Oe.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Ls);const n=zo(ti.h,Ls.h,e),i=zo(ti.s,Ls.s,e),s=zo(ti.l,Ls.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new kt;kt.NAMES=lu;let Gd=0;class Nr extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=_r,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=ba,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Jr extends Nr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new I,Ds=new nt;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return jr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zr(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zr(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zr(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}}class cu extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hu extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vd=0;const hn=new oe,ta=new Ee,rr=new I,tn=new gs,Hr=new gs,Ce=new I;class Le extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?hu:cu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(tn.min,Hr.min),tn.expandByPoint(Ce),Ce.addVectors(tn.max,Hr.max),tn.expandByPoint(Ce)):(tn.expandByPoint(Hr.min),tn.expandByPoint(Hr.max))}tn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ce.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ce));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(rr.fromBufferAttribute(t,c),Ce.add(rr)),i=Math.max(i,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new I,l[R]=new I;const c=new I,h=new I,u=new I,f=new nt,d=new nt,g=new nt,_=new I,m=new I;function p(R,y,S){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[R].add(_),a[y].add(_),a[S].add(_),l[R].add(m),l[y].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,y=x.length;R<y;++R){const S=x[R],L=S.start,U=S.count;for(let N=L,B=L+U;N<B;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const v=new I,M=new I,A=new I,w=new I;function b(R){A.fromBufferAttribute(i,R),w.copy(A);const y=a[R];v.copy(y),v.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(w,y);const L=M.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,y=x.length;R<y;++R){const S=x[R],L=S.start,U=S.count;for(let N=L,B=L+U;N<B;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Xe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new oe,Si=new Dl,Is=new bo,Dc=new I,sr=new I,or=new I,ar=new I,ea=new I,Us=new I,Ns=new nt,Os=new nt,Fs=new nt,Ic=new I,Uc=new I,Nc=new I,zs=new I,Bs=new I;class _t extends Ee{constructor(t=new Le,e=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(ea.fromBufferAttribute(u,t),o?Us.addScaledVector(ea,h):Us.addScaledVector(ea.sub(e),h))}e.add(Us)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(s),Si.copy(t.ray).recast(t.near),!(Is.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Is,Dc)===null||Si.origin.distanceToSquared(Dc)>(t.far-t.near)**2))&&(Lc.copy(s).invert(),Si.copy(t.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,A=v;M<A;M+=3){const w=a.getX(M),b=a.getX(M+1),R=a.getX(M+2);i=ks(this,p,t,n,c,h,u,w,b,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);i=ks(this,o,t,n,c,h,u,x,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,A=v;M<A;M+=3){const w=M,b=M+1,R=M+2;i=ks(this,p,t,n,c,h,u,w,b,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,M=m+2;i=ks(this,o,t,n,c,h,u,x,v,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Hd(r,t,e,n,i,s,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===fi,a),l===null)return null;Bs.copy(a),Bs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Bs);return c<e.near||c>e.far?null:{distance:c,point:Bs.clone(),object:r}}function ks(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,sr),r.getVertexPosition(l,or),r.getVertexPosition(c,ar);const h=Hd(r,t,e,n,sr,or,ar,zs);if(h){i&&(Ns.fromBufferAttribute(i,a),Os.fromBufferAttribute(i,l),Fs.fromBufferAttribute(i,c),h.uv=Cn.getInterpolation(zs,sr,or,ar,Ns,Os,Fs,new nt)),s&&(Ns.fromBufferAttribute(s,a),Os.fromBufferAttribute(s,l),Fs.fromBufferAttribute(s,c),h.uv1=Cn.getInterpolation(zs,sr,or,ar,Ns,Os,Fs,new nt)),o&&(Ic.fromBufferAttribute(o,a),Uc.fromBufferAttribute(o,l),Nc.fromBufferAttribute(o,c),h.normal=Cn.getInterpolation(zs,sr,or,ar,Ic,Uc,Nc,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};Cn.getNormal(sr,or,ar,u.normal),h.face=u}return h}class _e extends Le{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(_,m,p,x,v,M,A,w,b,R,y){const S=M/b,L=A/R,U=M/2,N=A/2,B=w/2,q=b+1,z=R+1;let Z=0,Y=0;const ot=new I;for(let ct=0;ct<z;ct++){const ht=ct*L-N;for(let Pt=0;Pt<q;Pt++){const Gt=Pt*S-U;ot[_]=Gt*x,ot[m]=ht*v,ot[p]=B,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[p]=w>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Pt/b),u.push(1-ct/R),Z+=1}}for(let ct=0;ct<R;ct++)for(let ht=0;ht<b;ht++){const Pt=f+ht+q*ct,Gt=f+ht+q*(ct+1),H=f+(ht+1)+q*(ct+1),j=f+(ht+1)+q*ct;l.push(Pt,Gt,j),l.push(Gt,H,j),Y+=6}a.addGroup(d,Y,y),d+=Y,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function br(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(r){const t={};for(let e=0;e<r.length;e++){const n=br(r[e]);for(const i in n)t[i]=n[i]}return t}function Wd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function uu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Xd={clone:br,merge:Be};var Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Nr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fu extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new I,Oc=new nt,Fc=new nt;class We extends fu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,Fc),e.subVectors(Fc,Oc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(io*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const lr=-90,cr=1;class Kd extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(lr,cr,t,e);i.layers=this.layers,this.add(i);const s=new We(lr,cr,t,e);s.layers=this.layers,this.add(s);const o=new We(lr,cr,t,e);o.layers=this.layers,this.add(o);const a=new We(lr,cr,t,e);a.layers=this.layers,this.add(a);const l=new We(lr,cr,t,e);l.layers=this.layers,this.add(l);const c=new We(lr,cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class du extends Ve{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Sr,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zd extends Gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new du(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _e(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:li});s.uniforms.tEquirect.value=e;const o=new _t(i,s),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Mn),new Kd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const na=new I,jd=new I,Jd=new Ht;class ii{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=na.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jd.getNormalMatrix(t),i=this.coplanarPoint(na).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new bo,Gs=new I;class Il{constructor(t=new ii,e=new ii,n=new ii,i=new ii,s=new ii,o=new ii){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,m-d,M-p).normalize(),n[1].setComponents(l+s,f+c,m+d,M+p).normalize(),n[2].setComponents(l+o,f+h,m+g,M+x).normalize(),n[3].setComponents(l-o,f-h,m-g,M-x).normalize(),n[4].setComponents(l-a,f-u,m-_,M-v).normalize(),e===Wn)n[5].setComponents(l+a,f+u,m+_,M+v).normalize();else if(e===po)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Gs.x=i.normal.x>0?t.max.x:t.min.x,Gs.y=i.normal.y>0?t.max.y:t.min.y,Gs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function $d(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,a),u.count===-1&&f.length===0&&r.bufferSubData(c,0,h),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class vs extends Le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*f-o;for(let v=0;v<c;v++){const M=v*u-s;g.push(M,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,M=x+c*(p+1),A=x+1+c*(p+1),w=x+1+c*p;d.push(v,M,w),d.push(M,A,w)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$p=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ym=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,s_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,g_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,E_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Qd,alphahash_pars_fragment:tp,alphamap_fragment:ep,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:rp,aomap_fragment:sp,aomap_pars_fragment:op,batching_pars_vertex:ap,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:hp,bsdfs:up,iridescence_fragment:fp,bumpmap_pars_fragment:dp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:gp,color_fragment:vp,color_pars_fragment:xp,color_pars_vertex:Mp,color_vertex:yp,common:Sp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:Tp,displacementmap_pars_vertex:wp,displacementmap_vertex:bp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Cp,colorspace_fragment:Rp,colorspace_pars_fragment:Pp,envmap_fragment:Lp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Ip,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Xp,envmap_vertex:Np,fog_vertex:Op,fog_pars_vertex:Fp,fog_fragment:zp,fog_pars_fragment:Bp,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Vp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Wp,lights_toon_fragment:Yp,lights_toon_pars_fragment:qp,lights_phong_fragment:Kp,lights_phong_pars_fragment:Zp,lights_physical_fragment:jp,lights_physical_pars_fragment:Jp,lights_fragment_begin:$p,lights_fragment_maps:Qp,lights_fragment_end:tm,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:rm,map_fragment:sm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:hm,morphinstance_vertex:um,morphcolor_vertex:fm,morphnormal_vertex:dm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:_m,normal_fragment_maps:gm,normal_pars_fragment:vm,normal_pars_vertex:xm,normal_vertex:Mm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:wm,opaque_fragment:bm,packing:Am,premultiplied_alpha_fragment:Cm,project_vertex:Rm,dithering_fragment:Pm,dithering_pars_fragment:Lm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Im,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Nm,shadowmap_vertex:Om,shadowmask_pars_fragment:Fm,skinbase_vertex:zm,skinning_pars_vertex:Bm,skinning_vertex:km,skinnormal_vertex:Gm,specularmap_fragment:Vm,specularmap_pars_fragment:Hm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:Ym,transmission_pars_fragment:qm,uv_pars_fragment:Km,uv_pars_vertex:Zm,uv_vertex:jm,worldpos_vertex:Jm,background_vert:$m,background_frag:Qm,backgroundCube_vert:t_,backgroundCube_frag:e_,cube_vert:n_,cube_frag:i_,depth_vert:r_,depth_frag:s_,distanceRGBA_vert:o_,distanceRGBA_frag:a_,equirect_vert:l_,equirect_frag:c_,linedashed_vert:h_,linedashed_frag:u_,meshbasic_vert:f_,meshbasic_frag:d_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:__,meshmatcap_frag:g_,meshnormal_vert:v_,meshnormal_frag:x_,meshphong_vert:M_,meshphong_frag:y_,meshphysical_vert:S_,meshphysical_frag:E_,meshtoon_vert:T_,meshtoon_frag:w_,points_vert:b_,points_frag:A_,shadow_vert:C_,shadow_frag:R_,sprite_vert:P_,sprite_frag:L_},mt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},bn={basic:{uniforms:Be([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Be([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Be([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Be([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Be([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Be([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Be([mt.points,mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Be([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Be([mt.common,mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Be([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Be([mt.sprite,mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Be([mt.common,mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Be([mt.lights,mt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};bn.physical={uniforms:Be([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Vs={r:0,b:0,g:0},Ti=new Ln,D_=new oe;function I_(r,t,e,n,i,s,o){const a=new kt(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const M=g(x);M===null?p(a,l):M&&M.isColor&&(p(M,1),v=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===To)?(h===void 0&&(h=new _t(new _e(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:br(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ti.copy(v.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(Ti)),h.material.toneMapped=$t.getTransfer(M.colorSpace)!==ne,(u!==M||f!==M.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new _t(new vs(2,2),new di({name:"BackgroundMaterial",uniforms:br(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=$t.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(Vs,uu(r)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m}}function U_(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,L,U,N,B){let q=!1;const z=u(N,U,L);s!==z&&(s=z,c(s.object)),q=d(S,N,U,B),q&&g(S,N,U,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(S,L,U,N),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,L,U){const N=U.wireframe===!0;let B=n[S.id];B===void 0&&(B={},n[S.id]=B);let q=B[L.id];q===void 0&&(q={},B[L.id]=q);let z=q[N];return z===void 0&&(z=f(l()),q[N]=z),z}function f(S){const L=[],U=[],N=[];for(let B=0;B<e;B++)L[B]=0,U[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:N,object:S,attributes:{},index:null}}function d(S,L,U,N){const B=s.attributes,q=L.attributes;let z=0;const Z=U.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const ct=B[Y];let ht=q[Y];if(ht===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),ct===void 0||ct.attribute!==ht||ht&&ct.data!==ht.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function g(S,L,U,N){const B={},q=L.attributes;let z=0;const Z=U.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let ct=q[Y];ct===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));const ht={};ht.attribute=ct,ct&&ct.data&&(ht.data=ct.data),B[Y]=ht,z++}s.attributes=B,s.attributesNum=z,s.index=N}function _(){const S=s.newAttributes;for(let L=0,U=S.length;L<U;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const U=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;U[S]=1,N[S]===0&&(r.enableVertexAttribArray(S),N[S]=1),B[S]!==L&&(r.vertexAttribDivisor(S,L),B[S]=L)}function x(){const S=s.newAttributes,L=s.enabledAttributes;for(let U=0,N=L.length;U<N;U++)L[U]!==S[U]&&(r.disableVertexAttribArray(U),L[U]=0)}function v(S,L,U,N,B,q,z){z===!0?r.vertexAttribIPointer(S,L,U,B,q):r.vertexAttribPointer(S,L,U,N,B,q)}function M(S,L,U,N){_();const B=N.attributes,q=U.getAttributes(),z=L.defaultAttributeValues;for(const Z in q){const Y=q[Z];if(Y.location>=0){let ot=B[Z];if(ot===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){const ct=ot.normalized,ht=ot.itemSize,Pt=t.get(ot);if(Pt===void 0)continue;const Gt=Pt.buffer,H=Pt.type,j=Pt.bytesPerElement,at=H===r.INT||H===r.UNSIGNED_INT||ot.gpuType===wl;if(ot.isInterleavedBufferAttribute){const ut=ot.data,Rt=ut.stride,Ut=ot.offset;if(ut.isInstancedInterleavedBuffer){for(let At=0;At<Y.locationSize;At++)p(Y.location+At,ut.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let At=0;At<Y.locationSize;At++)m(Y.location+At);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let At=0;At<Y.locationSize;At++)v(Y.location+At,ht/Y.locationSize,H,ct,Rt*j,(Ut+ht/Y.locationSize*At)*j,at)}else{if(ot.isInstancedBufferAttribute){for(let ut=0;ut<Y.locationSize;ut++)p(Y.location+ut,ot.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ut=0;ut<Y.locationSize;ut++)m(Y.location+ut);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let ut=0;ut<Y.locationSize;ut++)v(Y.location+ut,ht/Y.locationSize,H,ct,ht*j,ht/Y.locationSize*ut*j,at)}}else if(z!==void 0){const ct=z[Z];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(Y.location,ct);break;case 3:r.vertexAttrib3fv(Y.location,ct);break;case 4:r.vertexAttrib4fv(Y.location,ct);break;default:r.vertexAttrib1fv(Y.location,ct)}}}}x()}function A(){R();for(const S in n){const L=n[S];for(const U in L){const N=L[U];for(const B in N)h(N[B].object),delete N[B];delete L[U]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const U in L){const N=L[U];for(const B in N)h(N[B].object),delete N[B];delete L[U]}delete n[S.id]}function b(S){for(const L in n){const U=n[L];if(U[S.id]===void 0)continue;const N=U[S.id];for(const B in N)h(N[B].object),delete N[B];delete U[S.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function N_(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function O_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Sn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const b=w===_s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Xn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Hn&&!b)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:M,maxSamples:A}}function F_(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ii,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,v=x*4;let M=p.clippingState||null;l.value=M,M=h(g,f,v,d);for(let A=0;A!==v;++A)M[A]=e[A];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=d;v!==_;++v,M+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function z_(r){let t=new WeakMap;function e(o,a){return a===Aa?o.mapping=Sr:a===Ca&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Aa||a===Ca)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Zd(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class mu extends fu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fr=4,zc=[.125,.215,.35,.446,.526,.582],Di=20,ia=new mu,Bc=new kt;let ra=null,sa=0,oa=0,aa=!1;const Ri=(1+Math.sqrt(5))/2,hr=1/Ri,kc=[new I(-Ri,hr,0),new I(Ri,hr,0),new I(-hr,0,Ri),new I(hr,0,Ri),new I(0,Ri,-hr),new I(0,Ri,hr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,sa,oa),this._renderer.xr.enabled=aa,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Sr||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:_s,format:Sn,colorSpace:gi,depthBuffer:!1},i=Gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B_(s)),this._blurMaterial=k_(s,t,e)}return i}_compileMaterial(t){const e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,i){const a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Bc),h.toneMapping=ci,h.autoClear=!1;const d=new Jr({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new _t(new _e,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Bc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Hs(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Sr||t.mapping===Er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=kc[(i-s-1)%kc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _t(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Di-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Di;m>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const p=[];let x=0;for(let b=0;b<Di;++b){const R=b/_,y=Math.exp(-R*R/2);p.push(y),b===0?x+=y:b<m&&(x+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const M=this._sizeLods[i],A=3*M*(i>v-fr?i-v+fr:0),w=4*(this._cubeSize-M);Hs(e,A,w,3*M,2*M),l.setRenderTarget(e),l.render(u,ia)}}function B_(r){const t=[],e=[],n=[];let i=r;const s=r-fr+1+zc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-fr?l=zc[o-r+fr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,R=w>2?0:-1,y=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];x.set(y,_*g*w),v.set(f,m*g*w);const S=[w,w,w,w,w,w];M.set(S,p*g*w)}const A=new Le;A.setAttribute("position",new Xe(x,_)),A.setAttribute("uv",new Xe(v,m)),A.setAttribute("faceIndex",new Xe(M,p)),t.push(A),i>fr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gc(r,t,e){const n=new Gi(r,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function k_(r,t,e){const n=new Float32Array(Di),i=new I(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Vc(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Hc(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function G_(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Aa||l===Ca,h=l===Sr||l===Er;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new il(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new il(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function V_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&jr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function H_(r,t,e,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,M=x.length;v<M;v+=3){const A=x[v+0],w=x[v+1],b=x[v+2];f.push(A,w,w,b,b,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,M=x.length/3-1;v<M;v+=3){const A=v+0,w=v+1,b=v+2;f.push(A,w,w,b,b,A)}}else return;const m=new(ru(f)?hu:cu)(f,1);m.version=_;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function W_(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x];for(let x=0;x<_.length;x++)e.update(p,n,_[x])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function X_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Y_(r,t,e){const n=new WeakMap,i=new ie;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let M=a.attributes.position.count*v,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const w=new Float32Array(M*A*4*u),b=new ou(w,M,A,u);b.type=Hn,b.needsUpdate=!0;const R=v*4;for(let S=0;S<u;S++){const L=m[S],U=p[S],N=x[S],B=M*A*4*S;for(let q=0;q<L.count;q++){const z=q*R;d===!0&&(i.fromBufferAttribute(L,q),w[B+z+0]=i.x,w[B+z+1]=i.y,w[B+z+2]=i.z,w[B+z+3]=0),g===!0&&(i.fromBufferAttribute(U,q),w[B+z+4]=i.x,w[B+z+5]=i.y,w[B+z+6]=i.z,w[B+z+7]=0),_===!0&&(i.fromBufferAttribute(N,q),w[B+z+8]=i.x,w[B+z+9]=i.y,w[B+z+10]=i.z,w[B+z+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:b,size:new nt(M,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function q_(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class _u extends Ve{constructor(t,e,n,i,s,o,a,l,c,h=gr){if(h!==gr&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gr&&(n=ki),n===void 0&&h===wr&&(n=Tr),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gu=new Ve,Wc=new _u(1,1),vu=new ou,xu=new Id,Mu=new du,Xc=[],Yc=[],qc=new Float32Array(16),Kc=new Float32Array(9),Zc=new Float32Array(4);function Or(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Xc[i];if(s===void 0&&(s=new Float32Array(i),Xc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function be(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ae(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ao(r,t){let e=Yc[t];e===void 0&&(e=new Int32Array(t),Yc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function K_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Z_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2fv(this.addr,t),Ae(e,t)}}function j_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;r.uniform3fv(this.addr,t),Ae(e,t)}}function J_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4fv(this.addr,t),Ae(e,t)}}function $_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;Zc.set(n),r.uniformMatrix2fv(this.addr,!1,Zc),Ae(e,n)}}function Q_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;Kc.set(n),r.uniformMatrix3fv(this.addr,!1,Kc),Ae(e,n)}}function tg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,n))return;qc.set(n),r.uniformMatrix4fv(this.addr,!1,qc),Ae(e,n)}}function eg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ng(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2iv(this.addr,t),Ae(e,t)}}function ig(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;r.uniform3iv(this.addr,t),Ae(e,t)}}function rg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4iv(this.addr,t),Ae(e,t)}}function sg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function og(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;r.uniform2uiv(this.addr,t),Ae(e,t)}}function ag(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;r.uniform3uiv(this.addr,t),Ae(e,t)}}function lg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;r.uniform4uiv(this.addr,t),Ae(e,t)}}function cg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Wc.compareFunction=iu,s=Wc):s=gu,e.setTexture2D(t||s,i)}function hg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xu,i)}function ug(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Mu,i)}function fg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vu,i)}function dg(r){switch(r){case 5126:return K_;case 35664:return Z_;case 35665:return j_;case 35666:return J_;case 35674:return $_;case 35675:return Q_;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return sg;case 36294:return og;case 36295:return ag;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}function pg(r,t){r.uniform1fv(this.addr,t)}function mg(r,t){const e=Or(t,this.size,2);r.uniform2fv(this.addr,e)}function _g(r,t){const e=Or(t,this.size,3);r.uniform3fv(this.addr,e)}function gg(r,t){const e=Or(t,this.size,4);r.uniform4fv(this.addr,e)}function vg(r,t){const e=Or(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function xg(r,t){const e=Or(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Mg(r,t){const e=Or(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function yg(r,t){r.uniform1iv(this.addr,t)}function Sg(r,t){r.uniform2iv(this.addr,t)}function Eg(r,t){r.uniform3iv(this.addr,t)}function Tg(r,t){r.uniform4iv(this.addr,t)}function wg(r,t){r.uniform1uiv(this.addr,t)}function bg(r,t){r.uniform2uiv(this.addr,t)}function Ag(r,t){r.uniform3uiv(this.addr,t)}function Cg(r,t){r.uniform4uiv(this.addr,t)}function Rg(r,t,e){const n=this.cache,i=t.length,s=Ao(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||gu,s[o])}function Pg(r,t,e){const n=this.cache,i=t.length,s=Ao(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||xu,s[o])}function Lg(r,t,e){const n=this.cache,i=t.length,s=Ao(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Mu,s[o])}function Dg(r,t,e){const n=this.cache,i=t.length,s=Ao(e,i);be(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||vu,s[o])}function Ig(r){switch(r){case 5126:return pg;case 35664:return mg;case 35665:return _g;case 35666:return gg;case 35674:return vg;case 35675:return xg;case 35676:return Mg;case 5124:case 35670:return yg;case 35667:case 35671:return Sg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return wg;case 36294:return bg;case 36295:return Ag;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dg(e.type)}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ig(e.type)}}class Og{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function jc(r,t){r.seq.push(t),r.map[t.id]=t}function Fg(r,t,e){const n=r.name,i=n.length;for(la.lastIndex=0;;){const s=la.exec(n),o=la.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){jc(e,c===void 0?new Ug(a,r,t):new Ng(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Og(a),jc(e,u)),e=u}}}class ro{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Fg(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Jc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const zg=37297;let Bg=0;function kg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Gg(r){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(r);let n;switch(t===e?n="":t===fo&&e===uo?n="LinearDisplayP3ToLinearSRGB":t===uo&&e===fo&&(n="LinearSRGBToLinearDisplayP3"),r){case gi:case wo:return[n,"LinearTransferOETF"];case xn:case Ll:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function $c(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+kg(r.getShaderSource(t),o)}else return i}function Vg(r,t){const e=Gg(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Hg(r,t){let e;switch(t){case ad:e="Linear";break;case ld:e="Reinhard";break;case cd:e="OptimizedCineon";break;case Wh:e="ACESFilmic";break;case ud:e="AgX";break;case fd:e="Neutral";break;case hd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ws=new I;function Wg(){$t.getLuminanceCoefficients(Ws);const r=Ws.x.toFixed(4),t=Ws.y.toFixed(4),e=Ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function Yg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function qr(r){return r!==""}function Qc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function th(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(r){return r.replace(Kg,jg)}const Zg=new Map;function jg(r,t){let e=Vt[t];if(e===void 0){const n=Zg.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rl(e)}const Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(r){return r.replace(Jg,$g)}function $g(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function t0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Sr:case Er:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Er:t="ENVMAP_MODE_REFRACTION";break}return t}function n0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hh:t="ENVMAP_BLENDING_MULTIPLY";break;case sd:t="ENVMAP_BLENDING_MIX";break;case od:t="ENVMAP_BLENDING_ADD";break}return t}function i0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function r0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Qg(e),c=t0(e),h=e0(e),u=n0(e),f=i0(e),d=Xg(e),g=Yg(s),_=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qr).join(`
`),p.length>0&&(p+=`
`)):(m=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),p=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ci?Hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),Wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),o=rl(o),o=Qc(o,e),o=th(o,e),a=rl(a),a=Qc(a,e),a=th(a,e),o=eh(o),a=eh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+m+o,M=x+p+a,A=Jc(i,i.VERTEX_SHADER,v),w=Jc(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(L){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(A).trim(),B=i.getShaderInfoLog(w).trim();let q=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const Z=$c(i,A,"vertex"),Y=$c(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+Z+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||B==="")&&(z=!1);z&&(L.diagnostics={runnable:q,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(A),i.deleteShader(w),R=new ro(i,_),y=qg(i,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,zg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let s0=0;class o0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new a0(t),e.set(t,n)),n}}class a0{constructor(t){this.id=s0++,this.code=t,this.usedTimes=0}}function l0(r,t,e,n,i,s,o){const a=new au,l=new o0,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,L,U,N){const B=U.fog,q=N.geometry,z=y.isMeshStandardMaterial?U.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||z),Y=Z&&Z.mapping===To?Z.image.height:null,ot=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=ct!==void 0?ct.length:0;let Pt=0;q.morphAttributes.position!==void 0&&(Pt=1),q.morphAttributes.normal!==void 0&&(Pt=2),q.morphAttributes.color!==void 0&&(Pt=3);let Gt,H,j,at;if(ot){const Kt=bn[ot];Gt=Kt.vertexShader,H=Kt.fragmentShader}else Gt=y.vertexShader,H=y.fragmentShader,l.update(y),j=l.getVertexShaderID(y),at=l.getFragmentShaderID(y);const ut=r.getRenderTarget(),Rt=N.isInstancedMesh===!0,Ut=N.isBatchedMesh===!0,At=!!y.map,Xt=!!y.matcap,P=!!Z,st=!!y.aoMap,et=!!y.lightMap,dt=!!y.bumpMap,J=!!y.normalMap,Ct=!!y.displacementMap,pt=!!y.emissiveMap,Mt=!!y.metalnessMap,D=!!y.roughnessMap,T=y.anisotropy>0,V=y.clearcoat>0,tt=y.dispersion>0,Q=y.iridescence>0,$=y.sheen>0,Tt=y.transmission>0,ft=T&&!!y.anisotropyMap,vt=V&&!!y.clearcoatMap,zt=V&&!!y.clearcoatNormalMap,rt=V&&!!y.clearcoatRoughnessMap,gt=Q&&!!y.iridescenceMap,Wt=Q&&!!y.iridescenceThicknessMap,Dt=$&&!!y.sheenColorMap,yt=$&&!!y.sheenRoughnessMap,Nt=!!y.specularMap,Bt=!!y.specularColorMap,re=!!y.specularIntensityMap,E=Tt&&!!y.transmissionMap,k=Tt&&!!y.thicknessMap,G=!!y.gradientMap,K=!!y.alphaMap,it=y.alphaTest>0,wt=!!y.alphaHash,Ot=!!y.extensions;let me=ci;y.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(me=r.toneMapping);const Te={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:Gt,fragmentShader:H,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:at,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&N._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&N.instanceColor!==null,instancingMorph:Rt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:gi,alphaToCoverage:!!y.alphaToCoverage,map:At,matcap:Xt,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:Y,aoMap:st,lightMap:et,bumpMap:dt,normalMap:J,displacementMap:f&&Ct,emissiveMap:pt,normalMapObjectSpace:J&&y.normalMapType===_d,normalMapTangentSpace:J&&y.normalMapType===nu,metalnessMap:Mt,roughnessMap:D,anisotropy:T,anisotropyMap:ft,clearcoat:V,clearcoatMap:vt,clearcoatNormalMap:zt,clearcoatRoughnessMap:rt,dispersion:tt,iridescence:Q,iridescenceMap:gt,iridescenceThicknessMap:Wt,sheen:$,sheenColorMap:Dt,sheenRoughnessMap:yt,specularMap:Nt,specularColorMap:Bt,specularIntensityMap:re,transmission:Tt,transmissionMap:E,thicknessMap:k,gradientMap:G,opaque:y.transparent===!1&&y.blending===_r&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:it,alphaHash:wt,combine:y.combine,mapUv:At&&_(y.map.channel),aoMapUv:st&&_(y.aoMap.channel),lightMapUv:et&&_(y.lightMap.channel),bumpMapUv:dt&&_(y.bumpMap.channel),normalMapUv:J&&_(y.normalMap.channel),displacementMapUv:Ct&&_(y.displacementMap.channel),emissiveMapUv:pt&&_(y.emissiveMap.channel),metalnessMapUv:Mt&&_(y.metalnessMap.channel),roughnessMapUv:D&&_(y.roughnessMap.channel),anisotropyMapUv:ft&&_(y.anisotropyMap.channel),clearcoatMapUv:vt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:zt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(y.sheenRoughnessMap.channel),specularMapUv:Nt&&_(y.specularMap.channel),specularColorMapUv:Bt&&_(y.specularColorMap.channel),specularIntensityMapUv:re&&_(y.specularIntensityMap.channel),transmissionMapUv:E&&_(y.transmissionMap.channel),thicknessMapUv:k&&_(y.thicknessMap.channel),alphaMapUv:K&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(J||T),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(At||K),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:me,decodeVideoTexture:At&&y.map.isVideoTexture===!0&&$t.getTransfer(y.map.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===An,flipSided:y.side===Ge,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ot&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&y.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(x(S,y),v(S,y),S.push(r.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function x(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function v(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),y.push(a.mask)}function M(y){const S=g[y.type];let L;if(S){const U=bn[S];L=Xd.clone(U.uniforms)}else L=y.uniforms;return L}function A(y,S){let L;for(let U=0,N=h.length;U<N;U++){const B=h[U];if(B.cacheKey===S){L=B,++L.usedTimes;break}}return L===void 0&&(L=new r0(r,S,y,s),h.push(L)),L}function w(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function b(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:R}}function c0(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function h0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ih(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function rh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||h0),n.length>1&&n.sort(f||ih),i.length>1&&i.sort(f||ih)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function u0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new rh,r.set(n,[o])):i>=s.length?(o=new rh,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function f0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new kt};break;case"SpotLight":e={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function d0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let p0=0;function m0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function _0(r){const t=new f0,e=d0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,s=new oe,o=new oe;function a(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,x=0,v=0,M=0,A=0,w=0,b=0;c.sort(m0);for(let y=0,S=c.length;y<S;y++){const L=c[y],U=L.color,N=L.intensity,B=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*N,u+=U.g*N,f+=U.b*N;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],N);b++}else if(L.isDirectionalLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,Y=e.get(L);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=L.shadow.matrix,x++}n.directional[d]=z,d++}else if(L.isSpotLight){const z=t.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(U).multiplyScalar(N),z.distance=B,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[_]=z;const Z=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,Z.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,L.castShadow){const Y=e.get(L);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=q,M++}_++}else if(L.isRectAreaLight){const z=t.get(L);z.color.copy(U).multiplyScalar(N),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=z,m++}else if(L.isPointLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const Z=L.shadow,Y=e.get(L);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=z,g++}else if(L.isHemisphereLight){const z=t.get(L);z.skyColor.copy(L.color).multiplyScalar(N),z.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[p]=z,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==v||R.numSpotShadows!==M||R.numSpotMaps!==A||R.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=v,R.numSpotShadows=M,R.numSpotMaps=A,R.numLightProbes=b,n.version=p0++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const v=c[p];if(v.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(v.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function sh(r){const t=new _0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function g0(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new sh(r),t.set(i,[a])):s>=o.length?(a=new sh(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class v0 extends Nr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class x0 extends Nr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const M0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S0(r,t,e){let n=new Il;const i=new nt,s=new nt,o=new ie,a=new v0({depthPacking:md}),l=new x0,c={},h=e.maxTextureSize,u={[fi]:Ge,[Ge]:fi,[An]:An},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:M0,fragmentShader:y0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(w,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),S=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),U=r.state;U.setBlending(li),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=p!==kn&&this.type===kn,B=p===kn&&this.type!==kn;for(let q=0,z=w.length;q<z;q++){const Z=w[q],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const ot=Y.getFrameExtents();if(i.multiply(ot),s.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ot.x),i.x=s.x*ot.x,Y.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ot.y),i.y=s.y*ot.y,Y.mapSize.y=s.y)),Y.map===null||N===!0||B===!0){const ht=this.type!==kn?{minFilter:fn,magFilter:fn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Gi(i.x,i.y,ht),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const ct=Y.getViewportCount();for(let ht=0;ht<ct;ht++){const Pt=Y.getViewport(ht);o.set(s.x*Pt.x,s.y*Pt.y,s.x*Pt.z,s.y*Pt.w),U.viewport(o),Y.updateMatrices(Z,ht),n=Y.getFrustum(),M(b,R,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===kn&&x(Y,R),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,S,L)};function x(w,b){const R=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gi(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,R,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,R,d,_,null)}function v(w,b,R,y){let S=null;const L=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=S.uuid,N=b.uuid;let B=c[U];B===void 0&&(B={},c[U]=B);let q=B[N];q===void 0&&(q=S.clone(),B[N]=q,b.addEventListener("dispose",A)),S=q}if(S.visible=b.visible,S.wireframe=b.wireframe,y===kn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:u[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=r.properties.get(S);U.light=R}return S}function M(w,b,R,y,S){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const N=t.update(w),B=w.material;if(Array.isArray(B)){const q=N.groups;for(let z=0,Z=q.length;z<Z;z++){const Y=q[z],ot=B[Y.materialIndex];if(ot&&ot.visible){const ct=v(w,ot,y,S);w.onBeforeShadow(r,w,b,R,N,ct,Y),r.renderBufferDirect(R,null,N,ct,w,Y),w.onAfterShadow(r,w,b,R,N,ct,Y)}}}else if(B.visible){const q=v(w,B,y,S);w.onBeforeShadow(r,w,b,R,N,q,null),r.renderBufferDirect(R,null,N,q,w,null),w.onAfterShadow(r,w,b,R,N,q,null)}}const U=w.children;for(let N=0,B=U.length;N<B;N++)M(U[N],b,R,y,S)}function A(w){w.target.removeEventListener("dispose",A);for(const R in c){const y=c[R],S=w.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function E0(r){function t(){let E=!1;const k=new ie;let G=null;const K=new ie(0,0,0,0);return{setMask:function(it){G!==it&&!E&&(r.colorMask(it,it,it,it),G=it)},setLocked:function(it){E=it},setClear:function(it,wt,Ot,me,Te){Te===!0&&(it*=me,wt*=me,Ot*=me),k.set(it,wt,Ot,me),K.equals(k)===!1&&(r.clearColor(it,wt,Ot,me),K.copy(k))},reset:function(){E=!1,G=null,K.set(-1,0,0,0)}}}function e(){let E=!1,k=null,G=null,K=null;return{setTest:function(it){it?at(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(it){k!==it&&!E&&(r.depthMask(it),k=it)},setFunc:function(it){if(G!==it){switch(it){case $f:r.depthFunc(r.NEVER);break;case Qf:r.depthFunc(r.ALWAYS);break;case td:r.depthFunc(r.LESS);break;case co:r.depthFunc(r.LEQUAL);break;case ed:r.depthFunc(r.EQUAL);break;case nd:r.depthFunc(r.GEQUAL);break;case id:r.depthFunc(r.GREATER);break;case rd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}G=it}},setLocked:function(it){E=it},setClear:function(it){K!==it&&(r.clearDepth(it),K=it)},reset:function(){E=!1,k=null,G=null,K=null}}}function n(){let E=!1,k=null,G=null,K=null,it=null,wt=null,Ot=null,me=null,Te=null;return{setTest:function(Kt){E||(Kt?at(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function(Kt){k!==Kt&&!E&&(r.stencilMask(Kt),k=Kt)},setFunc:function(Kt,we,ve){(G!==Kt||K!==we||it!==ve)&&(r.stencilFunc(Kt,we,ve),G=Kt,K=we,it=ve)},setOp:function(Kt,we,ve){(wt!==Kt||Ot!==we||me!==ve)&&(r.stencilOp(Kt,we,ve),wt=Kt,Ot=we,me=ve)},setLocked:function(Kt){E=Kt},setClear:function(Kt){Te!==Kt&&(r.clearStencil(Kt),Te=Kt)},reset:function(){E=!1,k=null,G=null,K=null,it=null,wt=null,Ot=null,me=null,Te=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,x=null,v=null,M=null,A=null,w=new kt(0,0,0),b=0,R=!1,y=null,S=null,L=null,U=null,N=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=z>=1):Z.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=z>=2);let Y=null,ot={};const ct=r.getParameter(r.SCISSOR_BOX),ht=r.getParameter(r.VIEWPORT),Pt=new ie().fromArray(ct),Gt=new ie().fromArray(ht);function H(E,k,G,K){const it=new Uint8Array(4),wt=r.createTexture();r.bindTexture(E,wt),r.texParameteri(E,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(E,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<G;Ot++)E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY?r.texImage3D(k,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,it):r.texImage2D(k+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,it);return wt}const j={};j[r.TEXTURE_2D]=H(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=H(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=H(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=H(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),at(r.DEPTH_TEST),s.setFunc(co),dt(!1),J(dc),at(r.CULL_FACE),st(li);function at(E){c[E]!==!0&&(r.enable(E),c[E]=!0)}function ut(E){c[E]!==!1&&(r.disable(E),c[E]=!1)}function Rt(E,k){return h[E]!==k?(r.bindFramebuffer(E,k),h[E]=k,E===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=k),E===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=k),!0):!1}function Ut(E,k){let G=f,K=!1;if(E){G=u.get(k),G===void 0&&(G=[],u.set(k,G));const it=E.textures;if(G.length!==it.length||G[0]!==r.COLOR_ATTACHMENT0){for(let wt=0,Ot=it.length;wt<Ot;wt++)G[wt]=r.COLOR_ATTACHMENT0+wt;G.length=it.length,K=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,K=!0);K&&r.drawBuffers(G)}function At(E){return d!==E?(r.useProgram(E),d=E,!0):!1}const Xt={[Li]:r.FUNC_ADD,[Nf]:r.FUNC_SUBTRACT,[Of]:r.FUNC_REVERSE_SUBTRACT};Xt[Ff]=r.MIN,Xt[zf]=r.MAX;const P={[Bf]:r.ZERO,[kf]:r.ONE,[Gf]:r.SRC_COLOR,[wa]:r.SRC_ALPHA,[qf]:r.SRC_ALPHA_SATURATE,[Xf]:r.DST_COLOR,[Hf]:r.DST_ALPHA,[Vf]:r.ONE_MINUS_SRC_COLOR,[ba]:r.ONE_MINUS_SRC_ALPHA,[Yf]:r.ONE_MINUS_DST_COLOR,[Wf]:r.ONE_MINUS_DST_ALPHA,[Kf]:r.CONSTANT_COLOR,[Zf]:r.ONE_MINUS_CONSTANT_COLOR,[jf]:r.CONSTANT_ALPHA,[Jf]:r.ONE_MINUS_CONSTANT_ALPHA};function st(E,k,G,K,it,wt,Ot,me,Te,Kt){if(E===li){g===!0&&(ut(r.BLEND),g=!1);return}if(g===!1&&(at(r.BLEND),g=!0),E!==Uf){if(E!==_||Kt!==R){if((m!==Li||v!==Li)&&(r.blendEquation(r.FUNC_ADD),m=Li,v=Li),Kt)switch(E){case _r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lo:r.blendFunc(r.ONE,r.ONE);break;case pc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case _r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case pc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case mc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}p=null,x=null,M=null,A=null,w.set(0,0,0),b=0,_=E,R=Kt}return}it=it||k,wt=wt||G,Ot=Ot||K,(k!==m||it!==v)&&(r.blendEquationSeparate(Xt[k],Xt[it]),m=k,v=it),(G!==p||K!==x||wt!==M||Ot!==A)&&(r.blendFuncSeparate(P[G],P[K],P[wt],P[Ot]),p=G,x=K,M=wt,A=Ot),(me.equals(w)===!1||Te!==b)&&(r.blendColor(me.r,me.g,me.b,Te),w.copy(me),b=Te),_=E,R=!1}function et(E,k){E.side===An?ut(r.CULL_FACE):at(r.CULL_FACE);let G=E.side===Ge;k&&(G=!G),dt(G),E.blending===_r&&E.transparent===!1?st(li):st(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),s.setFunc(E.depthFunc),s.setTest(E.depthTest),s.setMask(E.depthWrite),i.setMask(E.colorWrite);const K=E.stencilWrite;o.setTest(K),K&&(o.setMask(E.stencilWriteMask),o.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),o.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),pt(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?at(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function dt(E){y!==E&&(E?r.frontFace(r.CW):r.frontFace(r.CCW),y=E)}function J(E){E!==Df?(at(r.CULL_FACE),E!==S&&(E===dc?r.cullFace(r.BACK):E===If?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),S=E}function Ct(E){E!==L&&(q&&r.lineWidth(E),L=E)}function pt(E,k,G){E?(at(r.POLYGON_OFFSET_FILL),(U!==k||N!==G)&&(r.polygonOffset(k,G),U=k,N=G)):ut(r.POLYGON_OFFSET_FILL)}function Mt(E){E?at(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function D(E){E===void 0&&(E=r.TEXTURE0+B-1),Y!==E&&(r.activeTexture(E),Y=E)}function T(E,k,G){G===void 0&&(Y===null?G=r.TEXTURE0+B-1:G=Y);let K=ot[G];K===void 0&&(K={type:void 0,texture:void 0},ot[G]=K),(K.type!==E||K.texture!==k)&&(Y!==G&&(r.activeTexture(G),Y=G),r.bindTexture(E,k||j[E]),K.type=E,K.texture=k)}function V(){const E=ot[Y];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function tt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Tt(){try{r.texSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function vt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function zt(){try{r.texStorage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function gt(){try{r.texImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Wt(){try{r.texImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Dt(E){Pt.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),Pt.copy(E))}function yt(E){Gt.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),Gt.copy(E))}function Nt(E,k){let G=l.get(k);G===void 0&&(G=new WeakMap,l.set(k,G));let K=G.get(E);K===void 0&&(K=r.getUniformBlockIndex(k,E.name),G.set(E,K))}function Bt(E,k){const K=l.get(k).get(E);a.get(k)!==K&&(r.uniformBlockBinding(k,K,E.__bindingPointIndex),a.set(k,K))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},Y=null,ot={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,x=null,v=null,M=null,A=null,w=new kt(0,0,0),b=0,R=!1,y=null,S=null,L=null,U=null,N=null,Pt.set(0,0,r.canvas.width,r.canvas.height),Gt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:at,disable:ut,bindFramebuffer:Rt,drawBuffers:Ut,useProgram:At,setBlending:st,setMaterial:et,setFlipSided:dt,setCullFace:J,setLineWidth:Ct,setPolygonOffset:pt,setScissorTest:Mt,activeTexture:D,bindTexture:T,unbindTexture:V,compressedTexImage2D:tt,compressedTexImage3D:Q,texImage2D:gt,texImage3D:Wt,updateUBOMapping:Nt,uniformBlockBinding:Bt,texStorage2D:zt,texStorage3D:rt,texSubImage2D:$,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:vt,scissor:Dt,viewport:yt,reset:re}}function oh(r,t,e,n){const i=T0(n);switch(e){case Zh:return r*t;case Jh:return r*t;case $h:return r*t*2;case Qh:return r*t/i.components*i.byteLength;case Cl:return r*t/i.components*i.byteLength;case tu:return r*t*2/i.components*i.byteLength;case Rl:return r*t*2/i.components*i.byteLength;case jh:return r*t*3/i.components*i.byteLength;case Sn:return r*t*4/i.components*i.byteLength;case Pl:return r*t*4/i.components*i.byteLength;case $s:case Qs:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Da:case Ua:return Math.max(r,16)*Math.max(t,8)/4;case La:case Ia:return Math.max(r,8)*Math.max(t,8)/2;case Na:case Oa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ka:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case qa:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case no:case $a:case Qa:return Math.ceil(r/4)*Math.ceil(t/4)*16;case eu:case tl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case el:case nl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T0(r){switch(r){case Xn:case Yh:return{byteLength:1,components:1};case rs:case qh:case _s:return{byteLength:2,components:1};case bl:case Al:return{byteLength:2,components:4};case ki:case wl:case Hn:return{byteLength:4,components:1};case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function w0(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return d?new OffscreenCanvas(D,T):_o("canvas")}function _(D,T,V){let tt=1;const Q=Mt(D);if((Q.width>V||Q.height>V)&&(tt=V/Math.max(Q.width,Q.height)),tt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(tt*Q.width),Tt=Math.floor(tt*Q.height);u===void 0&&(u=g($,Tt));const ft=T?g($,Tt):u;return ft.width=$,ft.height=Tt,ft.getContext("2d").drawImage(D,0,0,$,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Tt+")."),ft}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==fn&&D.minFilter!==Mn}function p(D){r.generateMipmap(D)}function x(D,T,V,tt,Q=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=T;if(T===r.RED&&(V===r.FLOAT&&($=r.R32F),V===r.HALF_FLOAT&&($=r.R16F),V===r.UNSIGNED_BYTE&&($=r.R8)),T===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.R8UI),V===r.UNSIGNED_SHORT&&($=r.R16UI),V===r.UNSIGNED_INT&&($=r.R32UI),V===r.BYTE&&($=r.R8I),V===r.SHORT&&($=r.R16I),V===r.INT&&($=r.R32I)),T===r.RG&&(V===r.FLOAT&&($=r.RG32F),V===r.HALF_FLOAT&&($=r.RG16F),V===r.UNSIGNED_BYTE&&($=r.RG8)),T===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&($=r.RG8UI),V===r.UNSIGNED_SHORT&&($=r.RG16UI),V===r.UNSIGNED_INT&&($=r.RG32UI),V===r.BYTE&&($=r.RG8I),V===r.SHORT&&($=r.RG16I),V===r.INT&&($=r.RG32I)),T===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),T===r.RGBA){const Tt=Q?ho:$t.getTransfer(tt);V===r.FLOAT&&($=r.RGBA32F),V===r.HALF_FLOAT&&($=r.RGBA16F),V===r.UNSIGNED_BYTE&&($=Tt===ne?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(D,T){let V;return D?T===null||T===ki||T===Tr?V=r.DEPTH24_STENCIL8:T===Hn?V=r.DEPTH32F_STENCIL8:T===rs&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ki||T===Tr?V=r.DEPTH_COMPONENT24:T===Hn?V=r.DEPTH_COMPONENT32F:T===rs&&(V=r.DEPTH_COMPONENT16),V}function M(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==fn&&D.minFilter!==Mn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function A(D){const T=D.target;T.removeEventListener("dispose",A),b(T),T.isVideoTexture&&h.delete(T)}function w(D){const T=D.target;T.removeEventListener("dispose",w),y(T)}function b(D){const T=n.get(D);if(T.__webglInit===void 0)return;const V=D.source,tt=f.get(V);if(tt){const Q=tt[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(D),Object.keys(tt).length===0&&f.delete(V)}n.remove(D)}function R(D){const T=n.get(D);r.deleteTexture(T.__webglTexture);const V=D.source,tt=f.get(V);delete tt[T.__cacheKey],o.memory.textures--}function y(D){const T=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(T.__webglFramebuffer[tt]))for(let Q=0;Q<T.__webglFramebuffer[tt].length;Q++)r.deleteFramebuffer(T.__webglFramebuffer[tt][Q]);else r.deleteFramebuffer(T.__webglFramebuffer[tt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[tt])}else{if(Array.isArray(T.__webglFramebuffer))for(let tt=0;tt<T.__webglFramebuffer.length;tt++)r.deleteFramebuffer(T.__webglFramebuffer[tt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let tt=0;tt<T.__webglColorRenderbuffer.length;tt++)T.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[tt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=D.textures;for(let tt=0,Q=V.length;tt<Q;tt++){const $=n.get(V[tt]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(V[tt])}n.remove(D)}let S=0;function L(){S=0}function U(){const D=S;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),S+=1,D}function N(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function B(D,T){const V=n.get(D);if(D.isVideoTexture&&Ct(D),D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){const tt=D.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(V,D,T);return}}e.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+T)}function q(D,T){const V=n.get(D);if(D.version>0&&V.__version!==D.version){Gt(V,D,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+T)}function z(D,T){const V=n.get(D);if(D.version>0&&V.__version!==D.version){Gt(V,D,T);return}e.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+T)}function Z(D,T){const V=n.get(D);if(D.version>0&&V.__version!==D.version){H(V,D,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+T)}const Y={[Ra]:r.REPEAT,[Ii]:r.CLAMP_TO_EDGE,[Pa]:r.MIRRORED_REPEAT},ot={[fn]:r.NEAREST,[dd]:r.NEAREST_MIPMAP_NEAREST,[Es]:r.NEAREST_MIPMAP_LINEAR,[Mn]:r.LINEAR,[Fo]:r.LINEAR_MIPMAP_NEAREST,[Ui]:r.LINEAR_MIPMAP_LINEAR},ct={[gd]:r.NEVER,[Ed]:r.ALWAYS,[vd]:r.LESS,[iu]:r.LEQUAL,[xd]:r.EQUAL,[Sd]:r.GEQUAL,[Md]:r.GREATER,[yd]:r.NOTEQUAL};function ht(D,T){if(T.type===Hn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Mn||T.magFilter===Fo||T.magFilter===Es||T.magFilter===Ui||T.minFilter===Mn||T.minFilter===Fo||T.minFilter===Es||T.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Y[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Y[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Y[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,ot[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,ot[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,ct[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fn||T.minFilter!==Es&&T.minFilter!==Ui||T.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Pt(D,T){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",A));const tt=T.source;let Q=f.get(tt);Q===void 0&&(Q={},f.set(tt,Q));const $=N(T);if($!==D.__cacheKey){Q[$]===void 0&&(Q[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[$].usedTimes++;const Tt=Q[D.__cacheKey];Tt!==void 0&&(Q[D.__cacheKey].usedTimes--,Tt.usedTimes===0&&R(T)),D.__cacheKey=$,D.__webglTexture=Q[$].texture}return V}function Gt(D,T,V){let tt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(tt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(tt=r.TEXTURE_3D);const Q=Pt(D,T),$=T.source;e.bindTexture(tt,D.__webglTexture,r.TEXTURE0+V);const Tt=n.get($);if($.version!==Tt.__version||Q===!0){e.activeTexture(r.TEXTURE0+V);const ft=$t.getPrimaries($t.workingColorSpace),vt=T.colorSpace===ri?null:$t.getPrimaries(T.colorSpace),zt=T.colorSpace===ri||ft===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let rt=_(T.image,!1,i.maxTextureSize);rt=pt(T,rt);const gt=s.convert(T.format,T.colorSpace),Wt=s.convert(T.type);let Dt=x(T.internalFormat,gt,Wt,T.colorSpace,T.isVideoTexture);ht(tt,T);let yt;const Nt=T.mipmaps,Bt=T.isVideoTexture!==!0,re=Tt.__version===void 0||Q===!0,E=$.dataReady,k=M(T,rt);if(T.isDepthTexture)Dt=v(T.format===wr,T.type),re&&(Bt?e.texStorage2D(r.TEXTURE_2D,1,Dt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Dt,rt.width,rt.height,0,gt,Wt,null));else if(T.isDataTexture)if(Nt.length>0){Bt&&re&&e.texStorage2D(r.TEXTURE_2D,k,Dt,Nt[0].width,Nt[0].height);for(let G=0,K=Nt.length;G<K;G++)yt=Nt[G],Bt?E&&e.texSubImage2D(r.TEXTURE_2D,G,0,0,yt.width,yt.height,gt,Wt,yt.data):e.texImage2D(r.TEXTURE_2D,G,Dt,yt.width,yt.height,0,gt,Wt,yt.data);T.generateMipmaps=!1}else Bt?(re&&e.texStorage2D(r.TEXTURE_2D,k,Dt,rt.width,rt.height),E&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,gt,Wt,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Dt,rt.width,rt.height,0,gt,Wt,rt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Bt&&re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,k,Dt,Nt[0].width,Nt[0].height,rt.depth);for(let G=0,K=Nt.length;G<K;G++)if(yt=Nt[G],T.format!==Sn)if(gt!==null)if(Bt){if(E)if(T.layerUpdates.size>0){const it=oh(yt.width,yt.height,T.format,T.type);for(const wt of T.layerUpdates){const Ot=yt.data.subarray(wt*it/yt.data.BYTES_PER_ELEMENT,(wt+1)*it/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,wt,yt.width,yt.height,1,gt,Ot,0,0)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,yt.width,yt.height,rt.depth,gt,yt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,Dt,yt.width,yt.height,rt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?E&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,yt.width,yt.height,rt.depth,gt,Wt,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,G,Dt,yt.width,yt.height,rt.depth,0,gt,Wt,yt.data)}else{Bt&&re&&e.texStorage2D(r.TEXTURE_2D,k,Dt,Nt[0].width,Nt[0].height);for(let G=0,K=Nt.length;G<K;G++)yt=Nt[G],T.format!==Sn?gt!==null?Bt?E&&e.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,yt.width,yt.height,gt,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,G,Dt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?E&&e.texSubImage2D(r.TEXTURE_2D,G,0,0,yt.width,yt.height,gt,Wt,yt.data):e.texImage2D(r.TEXTURE_2D,G,Dt,yt.width,yt.height,0,gt,Wt,yt.data)}else if(T.isDataArrayTexture)if(Bt){if(re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,k,Dt,rt.width,rt.height,rt.depth),E)if(T.layerUpdates.size>0){const G=oh(rt.width,rt.height,T.format,T.type);for(const K of T.layerUpdates){const it=rt.data.subarray(K*G/rt.data.BYTES_PER_ELEMENT,(K+1)*G/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,rt.width,rt.height,1,gt,Wt,it)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,gt,Wt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,rt.width,rt.height,rt.depth,0,gt,Wt,rt.data);else if(T.isData3DTexture)Bt?(re&&e.texStorage3D(r.TEXTURE_3D,k,Dt,rt.width,rt.height,rt.depth),E&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,gt,Wt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Dt,rt.width,rt.height,rt.depth,0,gt,Wt,rt.data);else if(T.isFramebufferTexture){if(re)if(Bt)e.texStorage2D(r.TEXTURE_2D,k,Dt,rt.width,rt.height);else{let G=rt.width,K=rt.height;for(let it=0;it<k;it++)e.texImage2D(r.TEXTURE_2D,it,Dt,G,K,0,gt,Wt,null),G>>=1,K>>=1}}else if(Nt.length>0){if(Bt&&re){const G=Mt(Nt[0]);e.texStorage2D(r.TEXTURE_2D,k,Dt,G.width,G.height)}for(let G=0,K=Nt.length;G<K;G++)yt=Nt[G],Bt?E&&e.texSubImage2D(r.TEXTURE_2D,G,0,0,gt,Wt,yt):e.texImage2D(r.TEXTURE_2D,G,Dt,gt,Wt,yt);T.generateMipmaps=!1}else if(Bt){if(re){const G=Mt(rt);e.texStorage2D(r.TEXTURE_2D,k,Dt,G.width,G.height)}E&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,gt,Wt,rt)}else e.texImage2D(r.TEXTURE_2D,0,Dt,gt,Wt,rt);m(T)&&p(tt),Tt.__version=$.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function H(D,T,V){if(T.image.length!==6)return;const tt=Pt(D,T),Q=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+V);const $=n.get(Q);if(Q.version!==$.__version||tt===!0){e.activeTexture(r.TEXTURE0+V);const Tt=$t.getPrimaries($t.workingColorSpace),ft=T.colorSpace===ri?null:$t.getPrimaries(T.colorSpace),vt=T.colorSpace===ri||Tt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const zt=T.isCompressedTexture||T.image[0].isCompressedTexture,rt=T.image[0]&&T.image[0].isDataTexture,gt=[];for(let K=0;K<6;K++)!zt&&!rt?gt[K]=_(T.image[K],!0,i.maxCubemapSize):gt[K]=rt?T.image[K].image:T.image[K],gt[K]=pt(T,gt[K]);const Wt=gt[0],Dt=s.convert(T.format,T.colorSpace),yt=s.convert(T.type),Nt=x(T.internalFormat,Dt,yt,T.colorSpace),Bt=T.isVideoTexture!==!0,re=$.__version===void 0||tt===!0,E=Q.dataReady;let k=M(T,Wt);ht(r.TEXTURE_CUBE_MAP,T);let G;if(zt){Bt&&re&&e.texStorage2D(r.TEXTURE_CUBE_MAP,k,Nt,Wt.width,Wt.height);for(let K=0;K<6;K++){G=gt[K].mipmaps;for(let it=0;it<G.length;it++){const wt=G[it];T.format!==Sn?Dt!==null?Bt?E&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,wt.width,wt.height,Dt,wt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Nt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?E&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,wt.width,wt.height,Dt,yt,wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Nt,wt.width,wt.height,0,Dt,yt,wt.data)}}}else{if(G=T.mipmaps,Bt&&re){G.length>0&&k++;const K=Mt(gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,k,Nt,K.width,K.height)}for(let K=0;K<6;K++)if(rt){Bt?E&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,gt[K].width,gt[K].height,Dt,yt,gt[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Nt,gt[K].width,gt[K].height,0,Dt,yt,gt[K].data);for(let it=0;it<G.length;it++){const Ot=G[it].image[K].image;Bt?E&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,Ot.width,Ot.height,Dt,yt,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Nt,Ot.width,Ot.height,0,Dt,yt,Ot.data)}}else{Bt?E&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,yt,gt[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Nt,Dt,yt,gt[K]);for(let it=0;it<G.length;it++){const wt=G[it];Bt?E&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,Dt,yt,wt.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Nt,Dt,yt,wt.image[K])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),$.__version=Q.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function j(D,T,V,tt,Q,$){const Tt=s.convert(V.format,V.colorSpace),ft=s.convert(V.type),vt=x(V.internalFormat,Tt,ft,V.colorSpace);if(!n.get(T).__hasExternalTextures){const rt=Math.max(1,T.width>>$),gt=Math.max(1,T.height>>$);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,vt,rt,gt,T.depth,0,Tt,ft,null):e.texImage2D(Q,$,vt,rt,gt,0,Tt,ft,null)}e.bindFramebuffer(r.FRAMEBUFFER,D),J(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,tt,Q,n.get(V).__webglTexture,0,dt(T)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,tt,Q,n.get(V).__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(D,T,V){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){const tt=T.depthTexture,Q=tt&&tt.isDepthTexture?tt.type:null,$=v(T.stencilBuffer,Q),Tt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=dt(T);J(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,$,T.width,T.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,D)}else{const tt=T.textures;for(let Q=0;Q<tt.length;Q++){const $=tt[Q],Tt=s.convert($.format,$.colorSpace),ft=s.convert($.type),vt=x($.internalFormat,Tt,ft,$.colorSpace),zt=dt(T);V&&J(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,vt,T.width,T.height):J(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,zt,vt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,vt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);const tt=n.get(T.depthTexture).__webglTexture,Q=dt(T);if(T.depthTexture.format===gr)J(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0);else if(T.depthTexture.format===wr)J(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Rt(D){const T=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ut(T.__webglFramebuffer,D)}else if(V){T.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[tt]),T.__webglDepthbuffer[tt]=r.createRenderbuffer(),at(T.__webglDepthbuffer[tt],D,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),at(T.__webglDepthbuffer,D,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(D,T,V){const tt=n.get(D);T!==void 0&&j(tt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Rt(D)}function At(D){const T=D.texture,V=n.get(D),tt=n.get(T);D.addEventListener("dispose",w);const Q=D.textures,$=D.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=T.version,o.memory.textures++),$){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let vt=0;vt<T.mipmaps.length;vt++)V.__webglFramebuffer[ft][vt]=r.createFramebuffer()}else V.__webglFramebuffer[ft]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<T.mipmaps.length;ft++)V.__webglFramebuffer[ft]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let ft=0,vt=Q.length;ft<vt;ft++){const zt=n.get(Q[ft]);zt.__webglTexture===void 0&&(zt.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&J(D)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ft=0;ft<Q.length;ft++){const vt=Q[ft];V.__webglColorRenderbuffer[ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[ft]);const zt=s.convert(vt.format,vt.colorSpace),rt=s.convert(vt.type),gt=x(vt.internalFormat,zt,rt,vt.colorSpace,D.isXRRenderTarget===!0),Wt=dt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,gt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,V.__webglColorRenderbuffer[ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),at(V.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),ht(r.TEXTURE_CUBE_MAP,T);for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)j(V.__webglFramebuffer[ft][vt],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,vt);else j(V.__webglFramebuffer[ft],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(T)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ft=0,vt=Q.length;ft<vt;ft++){const zt=Q[ft],rt=n.get(zt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),ht(r.TEXTURE_2D,zt),j(V.__webglFramebuffer,D,zt,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,0),m(zt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ft=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ft=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ft,tt.__webglTexture),ht(ft,T),T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)j(V.__webglFramebuffer[vt],D,T,r.COLOR_ATTACHMENT0,ft,vt);else j(V.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,ft,0);m(T)&&p(ft),e.unbindTexture()}D.depthBuffer&&Rt(D)}function Xt(D){const T=D.textures;for(let V=0,tt=T.length;V<tt;V++){const Q=T[V];if(m(Q)){const $=D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Tt=n.get(Q).__webglTexture;e.bindTexture($,Tt),p($),e.unbindTexture()}}}const P=[],st=[];function et(D){if(D.samples>0){if(J(D)===!1){const T=D.textures,V=D.width,tt=D.height;let Q=r.COLOR_BUFFER_BIT;const $=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(D),ft=T.length>1;if(ft)for(let vt=0;vt<T.length;vt++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let vt=0;vt<T.length;vt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const zt=n.get(T[vt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,zt,0)}r.blitFramebuffer(0,0,V,tt,0,0,V,tt,Q,r.NEAREST),l===!0&&(P.length=0,st.length=0,P.push(r.COLOR_ATTACHMENT0+vt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(P.push($),st.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,st)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,P))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ft)for(let vt=0;vt<T.length;vt++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const zt=n.get(T[vt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function dt(D){return Math.min(i.maxSamples,D.samples)}function J(D){const T=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ct(D){const T=o.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function pt(D,T){const V=D.colorSpace,tt=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==gi&&V!==ri&&($t.getTransfer(V)===ne?(tt!==Sn||Q!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function Mt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=Z,this.rebindTextures=Ut,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=J}function b0(r,t){function e(n,i=ri){let s;const o=$t.getTransfer(i);if(n===Xn)return r.UNSIGNED_BYTE;if(n===bl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return r.BYTE;if(n===qh)return r.SHORT;if(n===rs)return r.UNSIGNED_SHORT;if(n===wl)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===Hn)return r.FLOAT;if(n===_s)return r.HALF_FLOAT;if(n===Zh)return r.ALPHA;if(n===jh)return r.RGB;if(n===Sn)return r.RGBA;if(n===Jh)return r.LUMINANCE;if(n===$h)return r.LUMINANCE_ALPHA;if(n===gr)return r.DEPTH_COMPONENT;if(n===wr)return r.DEPTH_STENCIL;if(n===Qh)return r.RED;if(n===Cl)return r.RED_INTEGER;if(n===tu)return r.RG;if(n===Rl)return r.RG_INTEGER;if(n===Pl)return r.RGBA_INTEGER;if(n===$s||n===Qs||n===to||n===eo)if(o===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===$s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===$s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Ia||n===Ua)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===La)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Oa||n===Fa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Na||n===Oa)return o===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fa)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===Ba||n===ka||n===Ga||n===Va||n===Ha||n===Wa||n===Xa||n===Ya||n===qa||n===Ka||n===Za||n===ja||n===Ja)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===za)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===$a||n===Qa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===no)return o===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eu||n===tl||n===el||n===nl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===no)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class A0 extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class En extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C0={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new En;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const R0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class L0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ve,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new di({vertexShader:R0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class D0 extends Wi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new L0,m=e.getContextAttributes();let p=null,x=null;const v=[],M=[],A=new nt;let w=null;const b=new We;b.layers.enable(1),b.viewport=new ie;const R=new We;R.layers.enable(2),R.viewport=new ie;const y=[b,R],S=new A0;S.layers.enable(1),S.layers.enable(2);let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=v[H];return j===void 0&&(j=new ca,v[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=v[H];return j===void 0&&(j=new ca,v[H]=j),j.getGripSpace()},this.getHand=function(H){let j=v[H];return j===void 0&&(j=new ca,v[H]=j),j.getHandSpace()};function N(H){const j=M.indexOf(H.inputSource);if(j===-1)return;const at=v[j];at!==void 0&&(at.update(H.inputSource,H.frame,c||o),at.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",q);for(let H=0;H<v.length;H++){const j=M[H];j!==null&&(M[H]=null,v[H].disconnect(j))}L=null,U=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,x=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",B),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Gi(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,at=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?wr:gr,at=m.stencil?Tr:ki);const Rt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Rt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Gi(f.textureWidth,f.textureHeight,{format:Sn,type:Xn,depthTexture:new _u(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(H){for(let j=0;j<H.removed.length;j++){const at=H.removed[j],ut=M.indexOf(at);ut>=0&&(M[ut]=null,v[ut].disconnect(at))}for(let j=0;j<H.added.length;j++){const at=H.added[j];let ut=M.indexOf(at);if(ut===-1){for(let Ut=0;Ut<v.length;Ut++)if(Ut>=M.length){M.push(at),ut=Ut;break}else if(M[Ut]===null){M[Ut]=at,ut=Ut;break}if(ut===-1)break}const Rt=v[ut];Rt&&Rt.connect(at)}}const z=new I,Z=new I;function Y(H,j,at){z.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(at.matrixWorld);const ut=z.distanceTo(Z),Rt=j.projectionMatrix.elements,Ut=at.projectionMatrix.elements,At=Rt[14]/(Rt[10]-1),Xt=Rt[14]/(Rt[10]+1),P=(Rt[9]+1)/Rt[5],st=(Rt[9]-1)/Rt[5],et=(Rt[8]-1)/Rt[0],dt=(Ut[8]+1)/Ut[0],J=At*et,Ct=At*dt,pt=ut/(-et+dt),Mt=pt*-et;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Mt),H.translateZ(pt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const D=At+pt,T=Xt+pt,V=J-Mt,tt=Ct+(ut-Mt),Q=P*Xt/T*D,$=st*Xt/T*D;H.projectionMatrix.makePerspective(V,tt,Q,$,D,T),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function ot(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;_.texture!==null&&(H.near=_.depthNear,H.far=_.depthFar),S.near=R.near=b.near=H.near,S.far=R.far=b.far=H.far,(L!==S.near||U!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,U=S.far,b.near=L,b.far=U,R.near=L,R.far=U,b.updateProjectionMatrix(),R.updateProjectionMatrix(),H.updateProjectionMatrix());const j=H.parent,at=S.cameras;ot(S,j);for(let ut=0;ut<at.length;ut++)ot(at[ut],j);at.length===2?Y(S,b,R):S.projectionMatrix.copy(b.projectionMatrix),ct(H,S,j)};function ct(H,j,at){at===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(at.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=mo*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ht=null;function Pt(H,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const at=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ut=!1;at.length!==S.cameras.length&&(S.cameras.length=0,ut=!0);for(let Ut=0;Ut<at.length;Ut++){const At=at[Ut];let Xt=null;if(d!==null)Xt=d.getViewport(At);else{const st=u.getViewSubImage(f,At);Xt=st.viewport,Ut===0&&(t.setRenderTargetTextures(x,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(x))}let P=y[Ut];P===void 0&&(P=new We,P.layers.enable(Ut),P.viewport=new ie,y[Ut]=P),P.matrix.fromArray(At.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(At.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ut===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ut===!0&&S.cameras.push(P)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Ut=u.getDepthInformation(at[0]);Ut&&Ut.isValid&&Ut.texture&&_.init(t,Ut,i.renderState)}}for(let at=0;at<v.length;at++){const ut=M[at],Rt=v[at];ut!==null&&Rt!==void 0&&Rt.update(ut,j,c||o)}ht&&ht(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Gt=new pu;Gt.setAnimationLoop(Pt),this.setAnimationLoop=function(H){ht=H},this.dispose=function(){}}}const wi=new Ln,I0=new oe;function U0(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),v=x.envMap,M=x.envMapRotation;v&&(m.envMap.value=v,wi.copy(M),wi.x*=-1,wi.y*=-1,wi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(I0.makeRotationFromEuler(wi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function N0(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const M=v.program;n.uniformBlockBinding(x,M)}function c(x,v){let M=i[x.id];M===void 0&&(g(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",m));const A=v.program;n.updateUBOMapping(x,A);const w=t.render.frame;s[x.id]!==w&&(f(x),s[x.id]=w)}function h(x){const v=u();x.__bindingPointIndex=v;const M=r.createBuffer(),A=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],M=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,b=M.length;w<b;w++){const R=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,S=R.length;y<S;y++){const L=R[y];if(d(L,w,y,A)===!0){const U=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let q=0;q<N.length;q++){const z=N[q],Z=_(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,U+B,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,v,M,A){const w=x.value,b=v+"_"+M;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const R=A[b];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[b]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(x){const v=x.uniforms;let M=0;const A=16;for(let b=0,R=v.length;b<R;b++){const y=Array.isArray(v[b])?v[b]:[v[b]];for(let S=0,L=y.length;S<L;S++){const U=y[S],N=Array.isArray(U.value)?U.value:[U.value];for(let B=0,q=N.length;B<q;B++){const z=N[B],Z=_(z),Y=M%A,ot=Y%Z.boundary,ct=Y+ot;M+=ot,ct!==0&&A-ct<Z.storage&&(M+=A-ct),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Z.storage}}}const w=M%A;return w>0&&(M+=A-w),x.__size=M,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class O0{constructor(t={}){const{canvas:e=bd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=ci,this.toneMappingExposure=1;const v=this;let M=!1,A=0,w=0,b=null,R=-1,y=null;const S=new ie,L=new ie;let U=null;const N=new kt(0);let B=0,q=e.width,z=e.height,Z=1,Y=null,ot=null;const ct=new ie(0,0,q,z),ht=new ie(0,0,q,z);let Pt=!1;const Gt=new Il;let H=!1,j=!1;const at=new oe,ut=new I,Rt=new ie,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Xt(){return b===null?Z:1}let P=n;function st(C,O){return e.getContext(C,O)}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tl}`),e.addEventListener("webglcontextlost",G,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",it,!1),P===null){const O="webgl2";if(P=st(O,C),P===null)throw st(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let et,dt,J,Ct,pt,Mt,D,T,V,tt,Q,$,Tt,ft,vt,zt,rt,gt,Wt,Dt,yt,Nt,Bt,re;function E(){et=new V_(P),et.init(),Nt=new b0(P,et),dt=new O_(P,et,t,Nt),J=new E0(P),Ct=new X_(P),pt=new c0,Mt=new w0(P,et,J,pt,dt,Nt,Ct),D=new z_(v),T=new G_(v),V=new $d(P),Bt=new U_(P,V),tt=new H_(P,V,Ct,Bt),Q=new q_(P,tt,V,Ct),Wt=new Y_(P,dt,Mt),zt=new F_(pt),$=new l0(v,D,T,et,dt,Bt,zt),Tt=new U0(v,pt),ft=new u0,vt=new g0(et),gt=new I_(v,D,T,J,Q,f,l),rt=new S0(v,Q,dt),re=new N0(P,Ct,dt,J),Dt=new N_(P,et,Ct),yt=new W_(P,et,Ct),Ct.programs=$.programs,v.capabilities=dt,v.extensions=et,v.properties=pt,v.renderLists=ft,v.shadowMap=rt,v.state=J,v.info=Ct}E();const k=new D0(v,P);this.xr=k,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(q,z,!1))},this.getSize=function(C){return C.set(q,z)},this.setSize=function(C,O,W=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,z=O,e.width=Math.floor(C*Z),e.height=Math.floor(O*Z),W===!0&&(e.style.width=C+"px",e.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(q*Z,z*Z).floor()},this.setDrawingBufferSize=function(C,O,W){q=C,z=O,Z=W,e.width=Math.floor(C*W),e.height=Math.floor(O*W),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(ct)},this.setViewport=function(C,O,W,X){C.isVector4?ct.set(C.x,C.y,C.z,C.w):ct.set(C,O,W,X),J.viewport(S.copy(ct).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(ht)},this.setScissor=function(C,O,W,X){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,O,W,X),J.scissor(L.copy(ht).multiplyScalar(Z).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(C){J.setScissorTest(Pt=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){ot=C},this.getClearColor=function(C){return C.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(C=!0,O=!0,W=!0){let X=0;if(C){let F=!1;if(b!==null){const lt=b.texture.format;F=lt===Pl||lt===Rl||lt===Cl}if(F){const lt=b.texture.type,xt=lt===Xn||lt===ki||lt===rs||lt===Tr||lt===bl||lt===Al,St=gt.getClearColor(),Et=gt.getClearAlpha(),It=St.r,Ft=St.g,Lt=St.b;xt?(d[0]=It,d[1]=Ft,d[2]=Lt,d[3]=Et,P.clearBufferuiv(P.COLOR,0,d)):(g[0]=It,g[1]=Ft,g[2]=Lt,g[3]=Et,P.clearBufferiv(P.COLOR,0,g))}else X|=P.COLOR_BUFFER_BIT}O&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",G,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ft.dispose(),vt.dispose(),pt.dispose(),D.dispose(),T.dispose(),Q.dispose(),Bt.dispose(),re.dispose(),$.dispose(),k.dispose(),k.removeEventListener("sessionstart",ve),k.removeEventListener("sessionend",Kn),De.stop()};function G(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=Ct.autoReset,O=rt.enabled,W=rt.autoUpdate,X=rt.needsUpdate,F=rt.type;E(),Ct.autoReset=C,rt.enabled=O,rt.autoUpdate=W,rt.needsUpdate=X,rt.type=F}function it(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function wt(C){const O=C.target;O.removeEventListener("dispose",wt),Ot(O)}function Ot(C){me(C),pt.remove(C)}function me(C){const O=pt.get(C).programs;O!==void 0&&(O.forEach(function(W){$.releaseProgram(W)}),C.isShaderMaterial&&$.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,W,X,F,lt){O===null&&(O=Ut);const xt=F.isMesh&&F.matrixWorld.determinant()<0,St=Cf(C,O,W,X,F);J.setMaterial(X,xt);let Et=W.index,It=1;if(X.wireframe===!0){if(Et=tt.getWireframeAttribute(W),Et===void 0)return;It=2}const Ft=W.drawRange,Lt=W.attributes.position;let Zt=Ft.start*It,ue=(Ft.start+Ft.count)*It;lt!==null&&(Zt=Math.max(Zt,lt.start*It),ue=Math.min(ue,(lt.start+lt.count)*It)),Et!==null?(Zt=Math.max(Zt,0),ue=Math.min(ue,Et.count)):Lt!=null&&(Zt=Math.max(Zt,0),ue=Math.min(ue,Lt.count));const fe=ue-Zt;if(fe<0||fe===1/0)return;Bt.setup(F,X,St,W,Et);let Je,jt=Dt;if(Et!==null&&(Je=V.get(Et),jt=yt,jt.setIndex(Je)),F.isMesh)X.wireframe===!0?(J.setLineWidth(X.wireframeLinewidth*Xt()),jt.setMode(P.LINES)):jt.setMode(P.TRIANGLES);else if(F.isLine){let bt=X.linewidth;bt===void 0&&(bt=1),J.setLineWidth(bt*Xt()),F.isLineSegments?jt.setMode(P.LINES):F.isLineLoop?jt.setMode(P.LINE_LOOP):jt.setMode(P.LINE_STRIP)}else F.isPoints?jt.setMode(P.POINTS):F.isSprite&&jt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const bt=F._multiDrawStarts,Ie=F._multiDrawCounts,Jt=F._multiDrawCount,mn=Et?V.get(Et).bytesPerElement:1,Yi=pt.get(X).currentProgram.getUniforms();for(let $e=0;$e<Jt;$e++)Yi.setValue(P,"_gl_DrawID",$e),jt.render(bt[$e]/mn,Ie[$e])}else if(F.isInstancedMesh)jt.renderInstances(Zt,fe,F.count);else if(W.isInstancedBufferGeometry){const bt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ie=Math.min(W.instanceCount,bt);jt.renderInstances(Zt,fe,Ie)}else jt.render(Zt,fe)};function Te(C,O,W){C.transparent===!0&&C.side===An&&C.forceSinglePass===!1?(C.side=Ge,C.needsUpdate=!0,Ss(C,O,W),C.side=fi,C.needsUpdate=!0,Ss(C,O,W),C.side=An):Ss(C,O,W)}this.compile=function(C,O,W=null){W===null&&(W=C),m=vt.get(W),m.init(O),x.push(m),W.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),C!==W&&C.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const X=new Set;return C.traverse(function(F){const lt=F.material;if(lt)if(Array.isArray(lt))for(let xt=0;xt<lt.length;xt++){const St=lt[xt];Te(St,W,F),X.add(St)}else Te(lt,W,F),X.add(lt)}),x.pop(),m=null,X},this.compileAsync=function(C,O,W=null){const X=this.compile(C,O,W);return new Promise(F=>{function lt(){if(X.forEach(function(xt){pt.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){F(C);return}setTimeout(lt,10)}et.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Kt=null;function we(C){Kt&&Kt(C)}function ve(){De.stop()}function Kn(){De.start()}const De=new pu;De.setAnimationLoop(we),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(C){Kt=C,k.setAnimationLoop(C),C===null?De.stop():De.start()},k.addEventListener("sessionstart",ve),k.addEventListener("sessionend",Kn),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(O),O=k.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,O,b),m=vt.get(C,x.length),m.init(O),x.push(m),at.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Gt.setFromProjectionMatrix(at),j=this.localClippingEnabled,H=zt.init(this.clippingPlanes,j),_=ft.get(C,p.length),_.init(),p.push(_),k.enabled===!0&&k.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&Un(lt,O,-1/0,v.sortObjects)}Un(C,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(Y,ot),At=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,At&&gt.addToRenderList(_,C),this.info.render.frame++,H===!0&&zt.beginShadows();const W=m.state.shadowsArray;rt.render(W,C,O),H===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,F=_.transmissive;if(m.setupLights(),O.isArrayCamera){const lt=O.cameras;if(F.length>0)for(let xt=0,St=lt.length;xt<St;xt++){const Et=lt[xt];Fr(X,F,C,Et)}At&&gt.render(C);for(let xt=0,St=lt.length;xt<St;xt++){const Et=lt[xt];xi(_,C,Et,Et.viewport)}}else F.length>0&&Fr(X,F,C,O),At&&gt.render(C),xi(_,C,O);b!==null&&(Mt.updateMultisampleRenderTarget(b),Mt.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(v,C,O),Bt.resetDefaultState(),R=-1,y=null,x.pop(),x.length>0?(m=x[x.length-1],H===!0&&zt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Un(C,O,W,X){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Gt.intersectsSprite(C)){X&&Rt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(at);const xt=Q.update(C),St=C.material;St.visible&&_.push(C,xt,St,W,Rt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Gt.intersectsObject(C))){const xt=Q.update(C),St=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Rt.copy(C.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Rt.copy(xt.boundingSphere.center)),Rt.applyMatrix4(C.matrixWorld).applyMatrix4(at)),Array.isArray(St)){const Et=xt.groups;for(let It=0,Ft=Et.length;It<Ft;It++){const Lt=Et[It],Zt=St[Lt.materialIndex];Zt&&Zt.visible&&_.push(C,xt,Zt,W,Rt.z,Lt)}}else St.visible&&_.push(C,xt,St,W,Rt.z,null)}}const lt=C.children;for(let xt=0,St=lt.length;xt<St;xt++)Un(lt[xt],O,W,X)}function xi(C,O,W,X){const F=C.opaque,lt=C.transmissive,xt=C.transparent;m.setupLightsView(W),H===!0&&zt.setGlobalState(v.clippingPlanes,W),X&&J.viewport(S.copy(X)),F.length>0&&ys(F,O,W),lt.length>0&&ys(lt,O,W),xt.length>0&&ys(xt,O,W),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Fr(C,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Gi(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?_s:Xn,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const lt=m.state.transmissionRenderTarget[X.id],xt=X.viewport||S;lt.setSize(xt.z,xt.w);const St=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(N),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),At&&gt.render(W);const Et=v.toneMapping;v.toneMapping=ci;const It=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),H===!0&&zt.setGlobalState(v.clippingPlanes,X),ys(C,W,X),Mt.updateMultisampleRenderTarget(lt),Mt.updateRenderTargetMipmap(lt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Lt=0,Zt=O.length;Lt<Zt;Lt++){const ue=O[Lt],fe=ue.object,Je=ue.geometry,jt=ue.material,bt=ue.group;if(jt.side===An&&fe.layers.test(X.layers)){const Ie=jt.side;jt.side=Ge,jt.needsUpdate=!0,cc(fe,W,X,Je,jt,bt),jt.side=Ie,jt.needsUpdate=!0,Ft=!0}}Ft===!0&&(Mt.updateMultisampleRenderTarget(lt),Mt.updateRenderTargetMipmap(lt))}v.setRenderTarget(St),v.setClearColor(N,B),It!==void 0&&(X.viewport=It),v.toneMapping=Et}function ys(C,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let F=0,lt=C.length;F<lt;F++){const xt=C[F],St=xt.object,Et=xt.geometry,It=X===null?xt.material:X,Ft=xt.group;St.layers.test(W.layers)&&cc(St,O,W,Et,It,Ft)}}function cc(C,O,W,X,F,lt){C.onBeforeRender(v,O,W,X,F,lt),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),F.transparent===!0&&F.side===An&&F.forceSinglePass===!1?(F.side=Ge,F.needsUpdate=!0,v.renderBufferDirect(W,O,X,F,C,lt),F.side=fi,F.needsUpdate=!0,v.renderBufferDirect(W,O,X,F,C,lt),F.side=An):v.renderBufferDirect(W,O,X,F,C,lt),C.onAfterRender(v,O,W,X,F,lt)}function Ss(C,O,W){O.isScene!==!0&&(O=Ut);const X=pt.get(C),F=m.state.lights,lt=m.state.shadowsArray,xt=F.state.version,St=$.getParameters(C,F.state,lt,O,W),Et=$.getProgramCacheKey(St);let It=X.programs;X.environment=C.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(C.isMeshStandardMaterial?T:D).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,It===void 0&&(C.addEventListener("dispose",wt),It=new Map,X.programs=It);let Ft=It.get(Et);if(Ft!==void 0){if(X.currentProgram===Ft&&X.lightsStateVersion===xt)return uc(C,St),Ft}else St.uniforms=$.getUniforms(C),C.onBeforeCompile(St,v),Ft=$.acquireProgram(St,Et),It.set(Et,Ft),X.uniforms=St.uniforms;const Lt=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Lt.clippingPlanes=zt.uniform),uc(C,St),X.needsLights=Pf(C),X.lightsStateVersion=xt,X.needsLights&&(Lt.ambientLightColor.value=F.state.ambient,Lt.lightProbe.value=F.state.probe,Lt.directionalLights.value=F.state.directional,Lt.directionalLightShadows.value=F.state.directionalShadow,Lt.spotLights.value=F.state.spot,Lt.spotLightShadows.value=F.state.spotShadow,Lt.rectAreaLights.value=F.state.rectArea,Lt.ltc_1.value=F.state.rectAreaLTC1,Lt.ltc_2.value=F.state.rectAreaLTC2,Lt.pointLights.value=F.state.point,Lt.pointLightShadows.value=F.state.pointShadow,Lt.hemisphereLights.value=F.state.hemi,Lt.directionalShadowMap.value=F.state.directionalShadowMap,Lt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Lt.spotShadowMap.value=F.state.spotShadowMap,Lt.spotLightMatrix.value=F.state.spotLightMatrix,Lt.spotLightMap.value=F.state.spotLightMap,Lt.pointShadowMap.value=F.state.pointShadowMap,Lt.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Ft,X.uniformsList=null,Ft}function hc(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=ro.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function uc(C,O){const W=pt.get(C);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Cf(C,O,W,X,F){O.isScene!==!0&&(O=Ut),Mt.resetTextureUnits();const lt=O.fog,xt=X.isMeshStandardMaterial?O.environment:null,St=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:gi,Et=(X.isMeshStandardMaterial?T:D).get(X.envMap||xt),It=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ft=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!W.morphAttributes.position,Zt=!!W.morphAttributes.normal,ue=!!W.morphAttributes.color;let fe=ci;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(fe=v.toneMapping);const Je=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,jt=Je!==void 0?Je.length:0,bt=pt.get(X),Ie=m.state.lights;if(H===!0&&(j===!0||C!==y)){const cn=C===y&&X.id===R;zt.setState(X,C,cn)}let Jt=!1;X.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ie.state.version||bt.outputColorSpace!==St||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==Et||X.fog===!0&&bt.fog!==lt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==zt.numPlanes||bt.numIntersection!==zt.numIntersection)||bt.vertexAlphas!==It||bt.vertexTangents!==Ft||bt.morphTargets!==Lt||bt.morphNormals!==Zt||bt.morphColors!==ue||bt.toneMapping!==fe||bt.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,bt.__version=X.version);let mn=bt.currentProgram;Jt===!0&&(mn=Ss(X,O,F));let Yi=!1,$e=!1,Uo=!1;const xe=mn.getUniforms(),Zn=bt.uniforms;if(J.useProgram(mn.program)&&(Yi=!0,$e=!0,Uo=!0),X.id!==R&&(R=X.id,$e=!0),Yi||y!==C){xe.setValue(P,"projectionMatrix",C.projectionMatrix),xe.setValue(P,"viewMatrix",C.matrixWorldInverse);const cn=xe.map.cameraPosition;cn!==void 0&&cn.setValue(P,ut.setFromMatrixPosition(C.matrixWorld)),dt.logarithmicDepthBuffer&&xe.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xe.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,$e=!0,Uo=!0)}if(F.isSkinnedMesh){xe.setOptional(P,F,"bindMatrix"),xe.setOptional(P,F,"bindMatrixInverse");const cn=F.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),xe.setValue(P,"boneTexture",cn.boneTexture,Mt))}F.isBatchedMesh&&(xe.setOptional(P,F,"batchingTexture"),xe.setValue(P,"batchingTexture",F._matricesTexture,Mt),xe.setOptional(P,F,"batchingIdTexture"),xe.setValue(P,"batchingIdTexture",F._indirectTexture,Mt),xe.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&xe.setValue(P,"batchingColorTexture",F._colorsTexture,Mt));const No=W.morphAttributes;if((No.position!==void 0||No.normal!==void 0||No.color!==void 0)&&Wt.update(F,W,mn),($e||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,xe.setValue(P,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Zn.envMap.value=Et,Zn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Zn.envMapIntensity.value=O.environmentIntensity),$e&&(xe.setValue(P,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&Rf(Zn,Uo),lt&&X.fog===!0&&Tt.refreshFogUniforms(Zn,lt),Tt.refreshMaterialUniforms(Zn,X,Z,z,m.state.transmissionRenderTarget[C.id]),ro.upload(P,hc(bt),Zn,Mt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ro.upload(P,hc(bt),Zn,Mt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xe.setValue(P,"center",F.center),xe.setValue(P,"modelViewMatrix",F.modelViewMatrix),xe.setValue(P,"normalMatrix",F.normalMatrix),xe.setValue(P,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const cn=X.uniformsGroups;for(let Oo=0,Lf=cn.length;Oo<Lf;Oo++){const fc=cn[Oo];re.update(fc,mn),re.bind(fc,mn)}}return mn}function Rf(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function Pf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,O,W){pt.get(C.texture).__webglTexture=O,pt.get(C.depthTexture).__webglTexture=W;const X=pt.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,O){const W=pt.get(C);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,W=0){b=C,A=O,w=W;let X=!0,F=null,lt=!1,xt=!1;if(C){const Et=pt.get(C);Et.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(P.FRAMEBUFFER,null),X=!1):Et.__webglFramebuffer===void 0?Mt.setupRenderTarget(C):Et.__hasExternalTextures&&Mt.rebindTextures(C,pt.get(C.texture).__webglTexture,pt.get(C.depthTexture).__webglTexture);const It=C.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(xt=!0);const Ft=pt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?F=Ft[O][W]:F=Ft[O],lt=!0):C.samples>0&&Mt.useMultisampledRTT(C)===!1?F=pt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[W]:F=Ft,S.copy(C.viewport),L.copy(C.scissor),U=C.scissorTest}else S.copy(ct).multiplyScalar(Z).floor(),L.copy(ht).multiplyScalar(Z).floor(),U=Pt;if(J.bindFramebuffer(P.FRAMEBUFFER,F)&&X&&J.drawBuffers(C,F),J.viewport(S),J.scissor(L),J.setScissorTest(U),lt){const Et=pt.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,W)}else if(xt){const Et=pt.get(C.texture),It=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Et.__webglTexture,W||0,It)}R=-1},this.readRenderTargetPixels=function(C,O,W,X,F,lt,xt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){J.bindFramebuffer(P.FRAMEBUFFER,St);try{const Et=C.texture,It=Et.format,Ft=Et.type;if(!dt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-X&&W>=0&&W<=C.height-F&&P.readPixels(O,W,X,F,Nt.convert(It),Nt.convert(Ft),lt)}finally{const Et=b!==null?pt.get(b).__webglFramebuffer:null;J.bindFramebuffer(P.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(C,O,W,X,F,lt,xt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xt!==void 0&&(St=St[xt]),St){J.bindFramebuffer(P.FRAMEBUFFER,St);try{const Et=C.texture,It=Et.format,Ft=Et.type;if(!dt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=C.width-X&&W>=0&&W<=C.height-F){const Lt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.bufferData(P.PIXEL_PACK_BUFFER,lt.byteLength,P.STREAM_READ),P.readPixels(O,W,X,F,Nt.convert(It),Nt.convert(Ft),0),P.flush();const Zt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await Ad(P,Zt,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,lt)}finally{P.deleteBuffer(Lt),P.deleteSync(Zt)}return lt}}finally{const Et=b!==null?pt.get(b).__webglFramebuffer:null;J.bindFramebuffer(P.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(C,O=null,W=0){C.isTexture!==!0&&(jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,C=arguments[1]);const X=Math.pow(2,-W),F=Math.floor(C.image.width*X),lt=Math.floor(C.image.height*X),xt=O!==null?O.x:0,St=O!==null?O.y:0;Mt.setTexture2D(C,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,xt,St,F,lt),J.unbindTexture()},this.copyTextureToTexture=function(C,O,W=null,X=null,F=0){C.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],O=arguments[2],F=arguments[3]||0,W=null);let lt,xt,St,Et,It,Ft;W!==null?(lt=W.max.x-W.min.x,xt=W.max.y-W.min.y,St=W.min.x,Et=W.min.y):(lt=C.image.width,xt=C.image.height,St=0,Et=0),X!==null?(It=X.x,Ft=X.y):(It=0,Ft=0);const Lt=Nt.convert(O.format),Zt=Nt.convert(O.type);Mt.setTexture2D(O,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const ue=P.getParameter(P.UNPACK_ROW_LENGTH),fe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Je=P.getParameter(P.UNPACK_SKIP_PIXELS),jt=P.getParameter(P.UNPACK_SKIP_ROWS),bt=P.getParameter(P.UNPACK_SKIP_IMAGES),Ie=C.isCompressedTexture?C.mipmaps[F]:C.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ie.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ie.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,St),P.pixelStorei(P.UNPACK_SKIP_ROWS,Et),C.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,It,Ft,lt,xt,Lt,Zt,Ie.data):C.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,It,Ft,Ie.width,Ie.height,Lt,Ie.data):P.texSubImage2D(P.TEXTURE_2D,F,It,Ft,lt,xt,Lt,Zt,Ie),P.pixelStorei(P.UNPACK_ROW_LENGTH,ue),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Je),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,bt),F===0&&O.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(C,O,W=null,X=null,F=0){C.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,C=arguments[2],O=arguments[3],F=arguments[4]||0);let lt,xt,St,Et,It,Ft,Lt,Zt,ue;const fe=C.isCompressedTexture?C.mipmaps[F]:C.image;W!==null?(lt=W.max.x-W.min.x,xt=W.max.y-W.min.y,St=W.max.z-W.min.z,Et=W.min.x,It=W.min.y,Ft=W.min.z):(lt=fe.width,xt=fe.height,St=fe.depth,Et=0,It=0,Ft=0),X!==null?(Lt=X.x,Zt=X.y,ue=X.z):(Lt=0,Zt=0,ue=0);const Je=Nt.convert(O.format),jt=Nt.convert(O.type);let bt;if(O.isData3DTexture)Mt.setTexture3D(O,0),bt=P.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Mt.setTexture2DArray(O,0),bt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const Ie=P.getParameter(P.UNPACK_ROW_LENGTH),Jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Yi=P.getParameter(P.UNPACK_SKIP_ROWS),$e=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,fe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Et),P.pixelStorei(P.UNPACK_SKIP_ROWS,It),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ft),C.isDataTexture||C.isData3DTexture?P.texSubImage3D(bt,F,Lt,Zt,ue,lt,xt,St,Je,jt,fe.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(bt,F,Lt,Zt,ue,lt,xt,St,Je,fe.data):P.texSubImage3D(bt,F,Lt,Zt,ue,lt,xt,St,Je,jt,fe),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ie),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,$e),F===0&&O.generateMipmaps&&P.generateMipmap(bt),J.unbindTexture()},this.initRenderTarget=function(C){pt.get(C).__webglFramebuffer===void 0&&Mt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Mt.setTextureCube(C,0):C.isData3DTexture?Mt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Mt.setTexture2DArray(C,0):Mt.setTexture2D(C,0),J.unbindTexture()},this.resetState=function(){A=0,w=0,b=null,J.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ll?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===wo?"display-p3":"srgb"}}class Nl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new Nl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ah extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ol extends Nr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lh=new oe,sl=new Dl,Xs=new bo,Ys=new I;class yu extends Ee{constructor(t=new Le,e=new Ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(i),Xs.radius+=s,t.ray.intersectsSphere(Xs)===!1)return;lh.copy(i).invert(),sl.copy(t.ray).applyMatrix4(lh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Ys.fromBufferAttribute(u,m),ch(Ys,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Ys.fromBufferAttribute(u,g),ch(Ys,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ch(r,t,e,n,i,s,o){const a=sl.distanceSqToPoint(r);if(a<e){const l=new I;sl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class F0 extends Ve{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new nt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],s=[],o=[],a=new I,l=new oe;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Re(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Re(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fl extends In{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class z0 extends Fl{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zl(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const qs=new I,ha=new zl,ua=new zl,fa=new zl;class B0 extends In{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(qs.subVectors(i[0],i[1]).add(i[0]),c=qs);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(qs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=qs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ha.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),ua.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),fa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ua.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),fa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ha.calc(l),ua.calc(l),fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function hh(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function k0(r,t){const e=1-r;return e*e*t}function G0(r,t){return 2*(1-r)*r*t}function V0(r,t){return r*r*t}function $r(r,t,e,n){return k0(r,t)+G0(r,e)+V0(r,n)}function H0(r,t){const e=1-r;return e*e*e*t}function W0(r,t){const e=1-r;return 3*e*e*r*t}function X0(r,t){return 3*(1-r)*r*r*t}function Y0(r,t){return r*r*r*t}function Qr(r,t,e,n,i){return H0(r,t)+W0(r,e)+X0(r,n)+Y0(r,i)}class Su extends In{constructor(t=new nt,e=new nt,n=new nt,i=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qr(t,i.x,s.x,o.x,a.x),Qr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class q0 extends In{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Qr(t,i.x,s.x,o.x,a.x),Qr(t,i.y,s.y,o.y,a.y),Qr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Eu extends In{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K0 extends In{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends In{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set($r(t,i.x,s.x,o.x),$r(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z0 extends In{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set($r(t,i.x,s.x,o.x),$r(t,i.y,s.y,o.y),$r(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wu extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(hh(a,l.x,c.x,h.x,u.x),hh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new nt().fromArray(i))}return this}}var ol=Object.freeze({__proto__:null,ArcCurve:z0,CatmullRomCurve3:B0,CubicBezierCurve:Su,CubicBezierCurve3:q0,EllipseCurve:Fl,LineCurve:Eu,LineCurve3:K0,QuadraticBezierCurve:Tu,QuadraticBezierCurve3:Z0,SplineCurve:wu});class j0 extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new ol[i.type]().fromJSON(i))}return this}}class al extends j0{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Eu(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Tu(this.currentPoint.clone(),new nt(t,e),new nt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Su(this.currentPoint.clone(),new nt(t,e),new nt(n,i),new nt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Fl(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bl extends Le{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Re(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new nt,d=new I,g=new I,_=new I;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let x=0;x<=e;x++){const v=n+x*h*i,M=Math.sin(v),A=Math.cos(v);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*M,u.y=t[w].y,u.z=t[w].x*A,o.push(u.x,u.y,u.z),f.x=x/e,f.y=w/(t.length-1),a.push(f.x,f.y);const b=l[3*w+0]*M,R=l[3*w+1],y=l[3*w+0]*A;c.push(b,R,y)}}for(let x=0;x<e;x++)for(let v=0;v<t.length-1;v++){const M=v+x*t.length,A=M,w=M+t.length,b=M+t.length+1,R=M+1;s.push(A,w,R),s.push(b,R,w)}this.setIndex(s),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bl(t.points,t.segments,t.phiStart,t.phiLength)}}class Tn extends Bl{constructor(t=1,e=1,n=4,i=8){const s=new al;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Tn(t.radius,t.length,t.capSegments,t.radialSegments)}}class kl extends Le{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new I,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class yn extends Le{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(d,2));function x(){const M=new I,A=new I;let w=0;const b=(e-t)/n;for(let R=0;R<=s;R++){const y=[],S=R/s,L=S*(e-t)+t;for(let U=0;U<=i;U++){const N=U/i,B=N*l+a,q=Math.sin(B),z=Math.cos(B);A.x=L*q,A.y=-S*n+m,A.z=L*z,u.push(A.x,A.y,A.z),M.set(q,b,z).normalize(),f.push(M.x,M.y,M.z),d.push(N,1-S),y.push(g++)}_.push(y)}for(let R=0;R<i;R++)for(let y=0;y<s;y++){const S=_[y][R],L=_[y+1][R],U=_[y+1][R+1],N=_[y][R+1];h.push(S,L,N),h.push(L,U,N),w+=6}c.addGroup(p,w,0),p+=w}function v(M){const A=g,w=new nt,b=new I;let R=0;const y=M===!0?t:e,S=M===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const L=g;for(let U=0;U<=i;U++){const B=U/i*l+a,q=Math.cos(B),z=Math.sin(B);b.x=y*z,b.y=m*S,b.z=y*q,u.push(b.x,b.y,b.z),f.push(0,S,0),w.x=q*.5+.5,w.y=z*.5*S+.5,d.push(w.x,w.y),g++}for(let U=0;U<i;U++){const N=A+U,B=L+U;M===!0?h.push(B,B+1,N):h.push(B+1,B,N),R+=3}c.addGroup(p,R,M===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ss extends yn{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ss(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gl extends Le{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Qt(s,3)),this.setAttribute("normal",new Qt(s.slice(),3)),this.setAttribute("uv",new Qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new I,M=new I,A=new I;for(let w=0;w<e.length;w+=3)d(e[w+0],v),d(e[w+1],M),d(e[w+2],A),l(v,M,A,x)}function l(x,v,M,A){const w=A+1,b=[];for(let R=0;R<=w;R++){b[R]=[];const y=x.clone().lerp(M,R/w),S=v.clone().lerp(M,R/w),L=w-R;for(let U=0;U<=L;U++)U===0&&R===w?b[R][U]=y:b[R][U]=y.clone().lerp(S,U/L)}for(let R=0;R<w;R++)for(let y=0;y<2*(w-R)-1;y++){const S=Math.floor(y/2);y%2===0?(f(b[R][S+1]),f(b[R+1][S]),f(b[R][S])):(f(b[R][S+1]),f(b[R+1][S+1]),f(b[R+1][S]))}}function c(x){const v=new I;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(x),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function h(){const x=new I;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const M=m(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;o.push(M,1-A)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],M=o[x+2],A=o[x+4],w=Math.max(v,M,A),b=Math.min(v,M,A);w>.9&&b<.1&&(v<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,v){const M=x*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const x=new I,v=new I,M=new I,A=new I,w=new nt,b=new nt,R=new nt;for(let y=0,S=0;y<s.length;y+=9,S+=6){x.set(s[y+0],s[y+1],s[y+2]),v.set(s[y+3],s[y+4],s[y+5]),M.set(s[y+6],s[y+7],s[y+8]),w.set(o[S+0],o[S+1]),b.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),A.copy(x).add(v).add(M).divideScalar(3);const L=m(A);_(w,S+0,x,L),_(b,S+2,v,L),_(R,S+4,M,L)}}function _(x,v,M,A){A<0&&x.x===1&&(o[v]=x.x-1),M.x===0&&M.z===0&&(o[v]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.vertices,t.indices,t.radius,t.details)}}class Vl extends al{constructor(t){super(t),this.uuid=Ur(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new al().fromJSON(i))}return this}}const J0={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=bu(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(n&&(s=nv(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],f=r[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return os(s,o,e,a,l,d,0),o}};function bu(r,t,e,n,i){let s,o;if(i===dv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=uh(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=uh(s,r[s],r[s+1],o);return o&&Co(o,o.next)&&(ls(o),o=o.next),o}function Hi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Co(e,e.next)||ce(e.prev,e,e.next)===0)){if(ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function os(r,t,e,n,i,s,o){if(!r)return;!o&&s&&av(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Q0(r,n,i,s):$0(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),ls(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=tv(Hi(r),t,e),os(r,t,e,n,i,s,2)):o===2&&ev(r,t,e,n,i,s):os(Hi(r),t,e,n,i,s,1);break}}}function $0(r){const t=r.prev,e=r,n=r.next;if(ce(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&dr(i,a,s,l,o,c,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Q0(r,t,e,n){const i=r.prev,s=r,o=r.next;if(ce(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=ll(d,g,t,e,n),x=ll(_,m,t,e,n);let v=r.prevZ,M=r.nextZ;for(;v&&v.z>=p&&M&&M.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&dr(a,h,l,u,c,f,v.x,v.y)&&ce(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&dr(a,h,l,u,c,f,M.x,M.y)&&ce(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&dr(a,h,l,u,c,f,v.x,v.y)&&ce(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=x;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&dr(a,h,l,u,c,f,M.x,M.y)&&ce(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function tv(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Co(i,s)&&Au(i,n,n.next,s)&&as(i,s)&&as(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),ls(n),ls(n.next),n=r=s),n=n.next}while(n!==r);return Hi(n)}function ev(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hv(o,a)){let l=Cu(o,a);o=Hi(o,o.next),l=Hi(l,l.next),os(o,t,e,n,i,s,0),os(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function nv(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=bu(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(cv(c));for(i.sort(iv),s=0;s<i.length;s++)e=rv(i[s],e);return e}function iv(r,t){return r.x-t.x}function rv(r,t){const e=sv(r,t);if(!e)return t;const n=Cu(e,r);return Hi(n,n.next),Hi(e,e.next)}function sv(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&dr(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),as(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&ov(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function ov(r,t){return ce(r.prev,r,t.prev)<0&&ce(t.next,r,r.next)<0}function av(r,t,e,n){let i=r;do i.z===0&&(i.z=ll(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,lv(i)}function lv(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function ll(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function cv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function dr(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function hv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!uv(r,t)&&(as(r,t)&&as(t,r)&&fv(r,t)&&(ce(r.prev,r,t.prev)||ce(r,t.prev,t))||Co(r,t)&&ce(r.prev,r,r.next)>0&&ce(t.prev,t,t.next)>0)}function ce(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Co(r,t){return r.x===t.x&&r.y===t.y}function Au(r,t,e,n){const i=Zs(ce(r,t,e)),s=Zs(ce(r,t,n)),o=Zs(ce(e,n,r)),a=Zs(ce(e,n,t));return!!(i!==s&&o!==a||i===0&&Ks(r,e,t)||s===0&&Ks(r,n,t)||o===0&&Ks(e,r,n)||a===0&&Ks(e,t,n))}function Ks(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Zs(r){return r>0?1:r<0?-1:0}function uv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Au(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function as(r,t){return ce(r.prev,r,r.next)<0?ce(r,t,r.next)>=0&&ce(r,r.prev,t)>=0:ce(r,t,r.prev)<0||ce(r,r.next,t)<0}function fv(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Cu(r,t){const e=new cl(r.i,r.x,r.y),n=new cl(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function uh(r,t,e,n){const i=new cl(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ls(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function cl(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class ts{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return ts.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];fh(t),dh(n,t);let o=t.length;e.forEach(fh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,dh(n,e[l]);const a=J0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function fh(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function dh(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ro extends Le{constructor(t=new Vl([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Qt(i,3)),this.setAttribute("uv",new Qt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:pv;let v,M=!1,A,w,b,R;p&&(v=p.getSpacedPoints(h),M=!0,f=!1,A=p.computeFrenetFrames(h,!1),w=new I,b=new I,R=new I),f||(m=0,d=0,g=0,_=0);const y=a.extractPoints(c);let S=y.shape;const L=y.holes;if(!ts.isClockWise(S)){S=S.reverse();for(let P=0,st=L.length;P<st;P++){const et=L[P];ts.isClockWise(et)&&(L[P]=et.reverse())}}const N=ts.triangulateShape(S,L),B=S;for(let P=0,st=L.length;P<st;P++){const et=L[P];S=S.concat(et)}function q(P,st,et){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(st,et)}const z=S.length,Z=N.length;function Y(P,st,et){let dt,J,Ct;const pt=P.x-st.x,Mt=P.y-st.y,D=et.x-P.x,T=et.y-P.y,V=pt*pt+Mt*Mt,tt=pt*T-Mt*D;if(Math.abs(tt)>Number.EPSILON){const Q=Math.sqrt(V),$=Math.sqrt(D*D+T*T),Tt=st.x-Mt/Q,ft=st.y+pt/Q,vt=et.x-T/$,zt=et.y+D/$,rt=((vt-Tt)*T-(zt-ft)*D)/(pt*T-Mt*D);dt=Tt+pt*rt-P.x,J=ft+Mt*rt-P.y;const gt=dt*dt+J*J;if(gt<=2)return new nt(dt,J);Ct=Math.sqrt(gt/2)}else{let Q=!1;pt>Number.EPSILON?D>Number.EPSILON&&(Q=!0):pt<-Number.EPSILON?D<-Number.EPSILON&&(Q=!0):Math.sign(Mt)===Math.sign(T)&&(Q=!0),Q?(dt=-Mt,J=pt,Ct=Math.sqrt(V)):(dt=pt,J=Mt,Ct=Math.sqrt(V/2))}return new nt(dt/Ct,J/Ct)}const ot=[];for(let P=0,st=B.length,et=st-1,dt=P+1;P<st;P++,et++,dt++)et===st&&(et=0),dt===st&&(dt=0),ot[P]=Y(B[P],B[et],B[dt]);const ct=[];let ht,Pt=ot.concat();for(let P=0,st=L.length;P<st;P++){const et=L[P];ht=[];for(let dt=0,J=et.length,Ct=J-1,pt=dt+1;dt<J;dt++,Ct++,pt++)Ct===J&&(Ct=0),pt===J&&(pt=0),ht[dt]=Y(et[dt],et[Ct],et[pt]);ct.push(ht),Pt=Pt.concat(ht)}for(let P=0;P<m;P++){const st=P/m,et=d*Math.cos(st*Math.PI/2),dt=g*Math.sin(st*Math.PI/2)+_;for(let J=0,Ct=B.length;J<Ct;J++){const pt=q(B[J],ot[J],dt);ut(pt.x,pt.y,-et)}for(let J=0,Ct=L.length;J<Ct;J++){const pt=L[J];ht=ct[J];for(let Mt=0,D=pt.length;Mt<D;Mt++){const T=q(pt[Mt],ht[Mt],dt);ut(T.x,T.y,-et)}}}const Gt=g+_;for(let P=0;P<z;P++){const st=f?q(S[P],Pt[P],Gt):S[P];M?(b.copy(A.normals[0]).multiplyScalar(st.x),w.copy(A.binormals[0]).multiplyScalar(st.y),R.copy(v[0]).add(b).add(w),ut(R.x,R.y,R.z)):ut(st.x,st.y,0)}for(let P=1;P<=h;P++)for(let st=0;st<z;st++){const et=f?q(S[st],Pt[st],Gt):S[st];M?(b.copy(A.normals[P]).multiplyScalar(et.x),w.copy(A.binormals[P]).multiplyScalar(et.y),R.copy(v[P]).add(b).add(w),ut(R.x,R.y,R.z)):ut(et.x,et.y,u/h*P)}for(let P=m-1;P>=0;P--){const st=P/m,et=d*Math.cos(st*Math.PI/2),dt=g*Math.sin(st*Math.PI/2)+_;for(let J=0,Ct=B.length;J<Ct;J++){const pt=q(B[J],ot[J],dt);ut(pt.x,pt.y,u+et)}for(let J=0,Ct=L.length;J<Ct;J++){const pt=L[J];ht=ct[J];for(let Mt=0,D=pt.length;Mt<D;Mt++){const T=q(pt[Mt],ht[Mt],dt);M?ut(T.x,T.y+v[h-1].y,v[h-1].x+et):ut(T.x,T.y,u+et)}}}H(),j();function H(){const P=i.length/3;if(f){let st=0,et=z*st;for(let dt=0;dt<Z;dt++){const J=N[dt];Rt(J[2]+et,J[1]+et,J[0]+et)}st=h+m*2,et=z*st;for(let dt=0;dt<Z;dt++){const J=N[dt];Rt(J[0]+et,J[1]+et,J[2]+et)}}else{for(let st=0;st<Z;st++){const et=N[st];Rt(et[2],et[1],et[0])}for(let st=0;st<Z;st++){const et=N[st];Rt(et[0]+z*h,et[1]+z*h,et[2]+z*h)}}n.addGroup(P,i.length/3-P,0)}function j(){const P=i.length/3;let st=0;at(B,st),st+=B.length;for(let et=0,dt=L.length;et<dt;et++){const J=L[et];at(J,st),st+=J.length}n.addGroup(P,i.length/3-P,1)}function at(P,st){let et=P.length;for(;--et>=0;){const dt=et;let J=et-1;J<0&&(J=P.length-1);for(let Ct=0,pt=h+m*2;Ct<pt;Ct++){const Mt=z*Ct,D=z*(Ct+1),T=st+dt+Mt,V=st+J+Mt,tt=st+J+D,Q=st+dt+D;Ut(T,V,tt,Q)}}}function ut(P,st,et){l.push(P),l.push(st),l.push(et)}function Rt(P,st,et){At(P),At(st),At(et);const dt=i.length/3,J=x.generateTopUV(n,i,dt-3,dt-2,dt-1);Xt(J[0]),Xt(J[1]),Xt(J[2])}function Ut(P,st,et,dt){At(P),At(st),At(dt),At(st),At(et),At(dt);const J=i.length/3,Ct=x.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);Xt(Ct[0]),Xt(Ct[1]),Xt(Ct[3]),Xt(Ct[1]),Xt(Ct[2]),Xt(Ct[3])}function At(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function Xt(P){s.push(P.x),s.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mv(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ol[i.type]().fromJSON(i)),new Ro(n,t.options)}}const pv={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new nt(s,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-u),new nt(f,1-g),new nt(_,1-p)]:[new nt(a,1-l),new nt(h,1-u),new nt(d,1-g),new nt(m,1-p)]}};function mv(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Po extends Gl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Po(t.radius,t.detail)}}class Hl extends Le{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,d=new I,g=new nt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,v=x,M=x+n+1,A=x+n+2,w=x+1;a.push(v,M,w),a.push(M,A,w)}}this.setIndex(a),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ye extends Le{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,f=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const w=A/e;u.x=-t*Math.cos(i+w*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+w*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+M,1-v),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=h[p][x+1],M=h[p][x],A=h[p+1][x],w=h[p+1][x+1];(p!==0||o>0)&&d.push(v,M,w),(p!==n-1||l<Math.PI)&&d.push(M,A,w)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ar extends Le{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,x=(i+1)*d+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class qt extends Nr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xs extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _v extends xs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const da=new oe,ph=new I,mh=new I;class Wl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(ph),mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mh),e.updateMatrixWorld(),da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class gv extends Wl{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=mo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class vv extends xs{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const _h=new oe,Wr=new I,pa=new I;class xv extends Wl{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Wr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Wr),pa.copy(n.position),pa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pa),n.updateMatrixWorld(),i.makeTranslation(-Wr.x,-Wr.y,-Wr.z),_h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h)}}class ma extends xs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Mv extends Wl{constructor(){super(new mu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gh extends xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Mv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yv extends xs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=vh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function vh(){return(typeof performance>"u"?Date:performance).now()}class xh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);const Mh={type:"change"},_a={type:"start"},yh={type:"end"},js=new Dl,Sh=new ii,Ev=Math.cos(70*wd.DEG2RAD);class Tv extends Wi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",vt),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",vt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mh),n.update(),s=i.NONE},this.update=function(){const E=new I,k=new Vi().setFromUnitVectors(t.up,new I(0,1,0)),G=k.clone().invert(),K=new I,it=new Vi,wt=new I,Ot=2*Math.PI;return function(Te=null){const Kt=n.object.position;E.copy(Kt).sub(n.target),E.applyQuaternion(k),a.setFromVector3(E),n.autoRotate&&s===i.NONE&&U(S(Te)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let we=n.minAzimuthAngle,ve=n.maxAzimuthAngle;isFinite(we)&&isFinite(ve)&&(we<-Math.PI?we+=Ot:we>Math.PI&&(we-=Ot),ve<-Math.PI?ve+=Ot:ve>Math.PI&&(ve-=Ot),we<=ve?a.theta=Math.max(we,Math.min(ve,a.theta)):a.theta=a.theta>(we+ve)/2?Math.max(we,a.theta):Math.min(ve,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Kn=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)a.radius=ct(a.radius);else{const De=a.radius;a.radius=ct(a.radius*c),Kn=De!=a.radius}if(E.setFromSpherical(a),E.applyQuaternion(G),Kt.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&w){let De=null;if(n.object.isPerspectiveCamera){const Un=E.length();De=ct(Un*c);const xi=Un-De;n.object.position.addScaledVector(M,xi),n.object.updateMatrixWorld(),Kn=!!xi}else if(n.object.isOrthographicCamera){const Un=new I(A.x,A.y,0);Un.unproject(n.object);const xi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Kn=xi!==n.object.zoom;const Fr=new I(A.x,A.y,0);Fr.unproject(n.object),n.object.position.sub(Fr).add(Un),n.object.updateMatrixWorld(),De=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;De!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(De).add(n.object.position):(js.origin.copy(n.object.position),js.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(js.direction))<Ev?t.lookAt(n.target):(Sh.setFromNormalAndCoplanarPoint(n.object.up,n.target),js.intersectPlane(Sh,n.target))))}else if(n.object.isOrthographicCamera){const De=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),De!==n.object.zoom&&(n.object.updateProjectionMatrix(),Kn=!0)}return c=1,w=!1,Kn||K.distanceToSquared(n.object.position)>o||8*(1-it.dot(n.object.quaternion))>o||wt.distanceToSquared(n.target)>o?(n.dispatchEvent(Mh),K.copy(n.object.position),it.copy(n.object.quaternion),wt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",gt),n.domElement.removeEventListener("pointerdown",Mt),n.domElement.removeEventListener("pointercancel",T),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",T),n.domElement.getRootNode().removeEventListener("keydown",Tt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",vt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new xh,l=new xh;let c=1;const h=new I,u=new nt,f=new nt,d=new nt,g=new nt,_=new nt,m=new nt,p=new nt,x=new nt,v=new nt,M=new I,A=new nt;let w=!1;const b=[],R={};let y=!1;function S(E){return E!==null?2*Math.PI/60*n.autoRotateSpeed*E:2*Math.PI/60/60*n.autoRotateSpeed}function L(E){const k=Math.abs(E*.01);return Math.pow(.95,n.zoomSpeed*k)}function U(E){l.theta-=E}function N(E){l.phi-=E}const B=function(){const E=new I;return function(G,K){E.setFromMatrixColumn(K,0),E.multiplyScalar(-G),h.add(E)}}(),q=function(){const E=new I;return function(G,K){n.screenSpacePanning===!0?E.setFromMatrixColumn(K,1):(E.setFromMatrixColumn(K,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(G),h.add(E)}}(),z=function(){const E=new I;return function(G,K){const it=n.domElement;if(n.object.isPerspectiveCamera){const wt=n.object.position;E.copy(wt).sub(n.target);let Ot=E.length();Ot*=Math.tan(n.object.fov/2*Math.PI/180),B(2*G*Ot/it.clientHeight,n.object.matrix),q(2*K*Ot/it.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(G*(n.object.right-n.object.left)/n.object.zoom/it.clientWidth,n.object.matrix),q(K*(n.object.top-n.object.bottom)/n.object.zoom/it.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ot(E,k){if(!n.zoomToCursor)return;w=!0;const G=n.domElement.getBoundingClientRect(),K=E-G.left,it=k-G.top,wt=G.width,Ot=G.height;A.x=K/wt*2-1,A.y=-(it/Ot)*2+1,M.set(A.x,A.y,1).unproject(n.object).sub(n.object.position).normalize()}function ct(E){return Math.max(n.minDistance,Math.min(n.maxDistance,E))}function ht(E){u.set(E.clientX,E.clientY)}function Pt(E){ot(E.clientX,E.clientX),p.set(E.clientX,E.clientY)}function Gt(E){g.set(E.clientX,E.clientY)}function H(E){f.set(E.clientX,E.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const k=n.domElement;U(2*Math.PI*d.x/k.clientHeight),N(2*Math.PI*d.y/k.clientHeight),u.copy(f),n.update()}function j(E){x.set(E.clientX,E.clientY),v.subVectors(x,p),v.y>0?Z(L(v.y)):v.y<0&&Y(L(v.y)),p.copy(x),n.update()}function at(E){_.set(E.clientX,E.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(_),n.update()}function ut(E){ot(E.clientX,E.clientY),E.deltaY<0?Y(L(E.deltaY)):E.deltaY>0&&Z(L(E.deltaY)),n.update()}function Rt(E){let k=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),k=!0;break}k&&(E.preventDefault(),n.update())}function Ut(E){if(b.length===1)u.set(E.pageX,E.pageY);else{const k=Bt(E),G=.5*(E.pageX+k.x),K=.5*(E.pageY+k.y);u.set(G,K)}}function At(E){if(b.length===1)g.set(E.pageX,E.pageY);else{const k=Bt(E),G=.5*(E.pageX+k.x),K=.5*(E.pageY+k.y);g.set(G,K)}}function Xt(E){const k=Bt(E),G=E.pageX-k.x,K=E.pageY-k.y,it=Math.sqrt(G*G+K*K);p.set(0,it)}function P(E){n.enableZoom&&Xt(E),n.enablePan&&At(E)}function st(E){n.enableZoom&&Xt(E),n.enableRotate&&Ut(E)}function et(E){if(b.length==1)f.set(E.pageX,E.pageY);else{const G=Bt(E),K=.5*(E.pageX+G.x),it=.5*(E.pageY+G.y);f.set(K,it)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const k=n.domElement;U(2*Math.PI*d.x/k.clientHeight),N(2*Math.PI*d.y/k.clientHeight),u.copy(f)}function dt(E){if(b.length===1)_.set(E.pageX,E.pageY);else{const k=Bt(E),G=.5*(E.pageX+k.x),K=.5*(E.pageY+k.y);_.set(G,K)}m.subVectors(_,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(_)}function J(E){const k=Bt(E),G=E.pageX-k.x,K=E.pageY-k.y,it=Math.sqrt(G*G+K*K);x.set(0,it),v.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),Z(v.y),p.copy(x);const wt=(E.pageX+k.x)*.5,Ot=(E.pageY+k.y)*.5;ot(wt,Ot)}function Ct(E){n.enableZoom&&J(E),n.enablePan&&dt(E)}function pt(E){n.enableZoom&&J(E),n.enableRotate&&et(E)}function Mt(E){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",D),n.domElement.addEventListener("pointerup",T)),!yt(E)&&(Wt(E),E.pointerType==="touch"?zt(E):V(E)))}function D(E){n.enabled!==!1&&(E.pointerType==="touch"?rt(E):tt(E))}function T(E){switch(Dt(E),b.length){case 0:n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",T),n.dispatchEvent(yh),s=i.NONE;break;case 1:const k=b[0],G=R[k];zt({pointerId:k,pageX:G.x,pageY:G.y});break}}function V(E){let k;switch(E.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case qi.DOLLY:if(n.enableZoom===!1)return;Pt(E),s=i.DOLLY;break;case qi.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;Gt(E),s=i.PAN}else{if(n.enableRotate===!1)return;ht(E),s=i.ROTATE}break;case qi.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;ht(E),s=i.ROTATE}else{if(n.enablePan===!1)return;Gt(E),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(_a)}function tt(E){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;H(E);break;case i.DOLLY:if(n.enableZoom===!1)return;j(E);break;case i.PAN:if(n.enablePan===!1)return;at(E);break}}function Q(E){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(E.preventDefault(),n.dispatchEvent(_a),ut($(E)),n.dispatchEvent(yh))}function $(E){const k=E.deltaMode,G={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(k){case 1:G.deltaY*=16;break;case 2:G.deltaY*=100;break}return E.ctrlKey&&!y&&(G.deltaY*=10),G}function Tt(E){E.key==="Control"&&(y=!0,n.domElement.getRootNode().addEventListener("keyup",ft,{passive:!0,capture:!0}))}function ft(E){E.key==="Control"&&(y=!1,n.domElement.getRootNode().removeEventListener("keyup",ft,{passive:!0,capture:!0}))}function vt(E){n.enabled===!1||n.enablePan===!1||Rt(E)}function zt(E){switch(Nt(E),b.length){case 1:switch(n.touches.ONE){case ni.ROTATE:if(n.enableRotate===!1)return;Ut(E),s=i.TOUCH_ROTATE;break;case ni.PAN:if(n.enablePan===!1)return;At(E),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(E),s=i.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;st(E),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(_a)}function rt(E){switch(Nt(E),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;et(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;dt(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ct(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(E),n.update();break;default:s=i.NONE}}function gt(E){n.enabled!==!1&&E.preventDefault()}function Wt(E){b.push(E.pointerId)}function Dt(E){delete R[E.pointerId];for(let k=0;k<b.length;k++)if(b[k]==E.pointerId){b.splice(k,1);return}}function yt(E){for(let k=0;k<b.length;k++)if(b[k]==E.pointerId)return!0;return!1}function Nt(E){let k=R[E.pointerId];k===void 0&&(k=new nt,R[E.pointerId]=k),k.set(E.pageX,E.pageY)}function Bt(E){const k=E.pointerId===b[0]?b[1]:b[0];return R[k]}n.domElement.addEventListener("contextmenu",gt),n.domElement.addEventListener("pointerdown",Mt),n.domElement.addEventListener("pointercancel",T),n.domElement.addEventListener("wheel",Q,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Tt,{passive:!0,capture:!0}),this.update()}}function Gn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ru(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cr={duration:.5,overwrite:!1,delay:0},Xl,Ue,se,dn=1e8,ee=1/dn,hl=Math.PI*2,wv=hl/4,bv=0,Pu=Math.sqrt,Av=Math.cos,Cv=Math.sin,Pe=function(t){return typeof t=="string"},pe=function(t){return typeof t=="function"},Yn=function(t){return typeof t=="number"},Yl=function(t){return typeof t>"u"},Dn=function(t){return typeof t=="object"},Ye=function(t){return t!==!1},ql=function(){return typeof window<"u"},Js=function(t){return pe(t)||Pe(t)},Lu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ze=Array.isArray,Rv=/random\([^)]+\)/g,Pv=/,\s*/g,Eh=/(?:-?\.?\d|\.)+/gi,Du=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,pr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ga=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Iu=/[+-]=-?[.\d]+/,Lv=/[^,'"\[\]\s]+/gi,Dv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,le,wn,ul,Kl,an={},go={},Uu,Nu=function(t){return(go=Rr(t,an))&&je},Zl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},cs=function(t,e){return!e&&console.warn(t)},Ou=function(t,e){return t&&(an[t]=e)&&go&&(go[t]=e)||an},hs=function(){return 0},Iv={suppressEvents:!0,isStart:!0,kill:!1},so={suppressEvents:!0,kill:!1},Uv={suppressEvents:!0},jl={},hi=[],fl={},Fu,en={},va={},Th=30,oo=[],Jl="",$l=function(t){var e=t[0],n,i;if(Dn(e)||pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=oo.length;i--&&!oo[i].targetTest(e););n=oo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new lf(t[i],n)))||t.splice(i,1);return t},Oi=function(t){return t._gsap||$l(pn(t))[0]._gsap},zu=function(t,e,n){return(n=t[e])&&pe(n)?t[e]():Yl(n)&&t.getAttribute&&t.getAttribute(e)||n},qe=function(t,e){return(t=t.split(",")).forEach(e)||t},ge=function(t){return Math.round(t*1e5)/1e5||0},ae=function(t){return Math.round(t*1e7)/1e7||0},xr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Nv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},vo=function(){var t=hi.length,e=hi.slice(0),n,i;for(fl={},hi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ql=function(t){return!!(t._initted||t._startAt||t.add)},Bu=function(t,e,n,i){hi.length&&!Ue&&vo(),t.render(e,n,!!(Ue&&e<0&&Ql(t))),hi.length&&!Ue&&vo()},ku=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Lv).length<2?e:Pe(t)?t.trim():t},Gu=function(t){return t},ln=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ov=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Rr=function(t,e){for(var n in e)t[n]=e[n];return t},wh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Dn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},xo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},es=function(t){var e=t.parent||le,n=t.keyframes?Ov(ze(t.keyframes)):ln;if(Ye(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Fv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Vu=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Lo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},pi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Fi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},zv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},dl=function(t,e,n,i){return t._startAt&&(Ue?t._startAt.revert(so):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Bv=function r(t){return!t||t._ts&&r(t.parent)},bh=function(t){return t._repeat?Pr(t._tTime,t=t.duration()+t._rDelay)*t:0},Pr=function(t,e){var n=Math.floor(t=ae(t/e));return t&&n===t?n-1:n},Mo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Do=function(t){return t._end=ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||ee)||0))},Io=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Do(t),n._dirty||Fi(n,t)),t},Hu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Mo(t.rawTime(),e),(!e._dur||Ms(0,e.totalDuration(),n)-e._tTime>ee)&&e.render(n,!0)),Fi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ee}},Rn=function(t,e,n,i){return e.parent&&pi(e),e._start=ae((Yn(n)?n:n||t!==le?un(t,n,e):t._time)+e._delay),e._end=ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Vu(t,e,"_first","_last",t._sort?"_start":0),pl(e)||(t._recent=e),i||Hu(t,e),t._ts<0&&Io(t,t._tTime),t},Wu=function(t,e){return(an.ScrollTrigger||Zl("scrollTrigger",e))&&an.ScrollTrigger.create(e,t)},Xu=function(t,e,n,i,s){if(ec(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ue&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Fu!==nn.frame)return hi.push(t),t._lazy=[s,i],1},kv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},pl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Gv=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&kv(t)&&!(!t._initted&&pl(t))||(t._ts<0||t._dp._ts<0)&&!pl(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Ms(0,t._tDur,e),h=Pr(l,a),t._yoyo&&h&1&&(o=1-o),h!==Pr(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ue||i||t._zTime===ee||!e&&t._zTime){if(!t._initted&&Xu(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ee:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&dl(t,e,n,!0),t._onUpdate&&!n&&rn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&rn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&pi(t,1),!n&&!Ue&&(rn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Vv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Lr=function(t,e,n,i){var s=t._repeat,o=ae(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ae(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Io(t,t._tTime=t._tDur*a),t.parent&&Do(t),n||Fi(t.parent,t),t},Ah=function(t){return t instanceof ke?Fi(t):Lr(t,t._dur)},Hv={_start:0,endTime:hs,totalDuration:hs},un=function r(t,e,n){var i=t.labels,s=t._recent||Hv,o=t.duration()>=dn?s.endTime(!1):t._dur,a,l,c;return Pe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(ze(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ns=function(t,e,n){var i=Yn(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ye(l.vars.inherit)&&l.parent;o.immediateRender=Ye(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Se(e[0],o,e[s+1])},vi=function(t,e){return t||t===0?e(t):e},Ms=function(t,e,n){return n<t?t:n>e?e:n},Fe=function(t,e){return!Pe(t)||!(e=Dv.exec(t))?"":e[1]},Wv=function(t,e,n){return vi(n,function(i){return Ms(t,e,i)})},ml=[].slice,Yu=function(t,e){return t&&Dn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Dn(t[0]))&&!t.nodeType&&t!==wn},Xv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Pe(i)&&!e||Yu(i,1)?(s=n).push.apply(s,pn(i)):n.push(i)})||n},pn=function(t,e,n){return se&&!e&&se.selector?se.selector(t):Pe(t)&&!n&&(ul||!Dr())?ml.call((e||Kl).querySelectorAll(t),0):ze(t)?Xv(t,n):Yu(t)?ml.call(t,0):t?[t]:[]},_l=function(t){return t=pn(t)[0]||cs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return pn(e,n.querySelectorAll?n:n===t?cs("Invalid scope")||Kl.createElement("div"):t)}},qu=function(t){return t.sort(function(){return .5-Math.random()})},Ku=function(t){if(pe(t))return t;var e=Dn(t)?t:{each:t},n=zi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Pe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||e).length,m=o[_],p,x,v,M,A,w,b,R,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,dn])[1],!y){for(b=-dn;b<(b=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*h-.5:i%y,x=y===dn?0:l?_*u/y-.5:i/y|0,b=0,R=dn,w=0;w<_;w++)v=w%y-p,M=x-(w/y|0),m[w]=A=c?Math.abs(c==="y"?M:v):Pu(v*v+M*M),A>b&&(b=A),A<R&&(R=A);i==="random"&&qu(m),m.max=b-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Fe(e.amount||e.each)||0,n=n&&_<0?sf(n):n}return _=(m[f]-m.min)/m.max||0,ae(m.b+(n?n(_):_)*m.v)+m.u}},gl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ae(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Yn(n)?0:Fe(n))}},Zu=function(t,e){var n=ze(t),i,s;return!n&&Dn(t)&&(i=n=t.radius||dn,t.values?(t=pn(t.values),(s=!Yn(t[0]))&&(i*=i)):t=gl(t.increment)),vi(e,n?pe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=dn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,s||h===o||Yn(o)?h:h+Fe(o)}:gl(t))},ju=function(t,e,n,i){return vi(ze(t)?!e:n===!0?!!(n=0):!i,function(){return ze(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Yv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},qv=function(t,e){return function(n){return t(parseFloat(n))+(e||Fe(n))}},Kv=function(t,e,n){return $u(t,e,0,1,n)},Ju=function(t,e,n){return vi(n,function(i){return t[~~e(i)]})},Zv=function r(t,e,n){var i=e-t;return ze(t)?Ju(t,r(0,t.length),e):vi(n,function(s){return(i+(s-t)%i)%i+t})},jv=function r(t,e,n){var i=e-t,s=i*2;return ze(t)?Ju(t,r(0,t.length-1),e):vi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},us=function(t){return t.replace(Rv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Pv);return ju(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},$u=function(t,e,n,i,s){var o=e-t,a=i-n;return vi(s,function(l){return n+((l-t)/o*a||0)})},Jv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Pe(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(ze(t)&&!ze(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=Rr(ze(t)?[]:{},t));if(!h){for(l in e)tc.call(a,t,l,"get",e[l]);s=function(g){return rc(g,a)||(o?t.p:t)}}}return vi(n,s)},Ch=function(t,e,n){var i=t.labels,s=dn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},rn=function(t,e,n){var i=t.vars,s=i[e],o=se,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&hi.length&&vo(),a&&(se=a),h=l?s.apply(c,l):s.call(c),se=o,h},Kr=function(t){return pi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ue),t.progress()<1&&rn(t,"onInterrupt"),t},mr,Qu=[],tf=function(t){if(t)if(t=!t.name&&t.default||t,ql()||t.headless){var e=t.name,n=pe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:hs,render:rc,add:tc,kill:dx,modifier:fx,rawVars:0},o={targetTest:0,get:0,getSetter:ic,aliases:{},register:0};if(Dr(),t!==i){if(en[e])return;ln(i,ln(xo(t,s),o)),Rr(i.prototype,Rr(s,xo(t,o))),en[i.prop=e]=i,t.targetTest&&(oo.push(i),jl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ou(e,i),t.register&&t.register(je,i,Ke)}else Qu.push(t)},te=255,Zr={aqua:[0,te,te],lime:[0,te,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,te],navy:[0,0,128],white:[te,te,te],olive:[128,128,0],yellow:[te,te,0],orange:[te,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[te,0,0],pink:[te,192,203],cyan:[0,te,te],transparent:[te,te,te,0]},xa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*te+.5|0},ef=function(t,e,n){var i=t?Yn(t)?[t>>16,t>>8&te,t&te]:0:Zr.black,s,o,a,l,c,h,u,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Zr[t])i=Zr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&te,i&te,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&te,t&te]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Eh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=xa(l+1/3,s,o),i[1]=xa(l,s,o),i[2]=xa(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Du),n&&i.length<4&&(i[3]=1),i}else i=t.match(Eh)||Zr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/te,o=i[1]/te,a=i[2]/te,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},nf=function(t){var e=[],n=[],i=-1;return t.split(ui).forEach(function(s){var o=s.match(pr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Rh=function(t,e,n){var i="",s=(t+i).match(ui),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=ef(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=nf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ui,"1").split(pr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ui),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},ui=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Zr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),$v=/hsl[a]?\(/,rf=function(t){var e=t.join(" "),n;if(ui.lastIndex=0,ui.test(e))return n=$v.test(e),t[1]=Rh(t[1],n),t[0]=Rh(t[0],n,nf(t[1])),!0},fs,nn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,g=function _(m){var p=r()-i,x=m===!0,v,M,A,w;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,v=A-o,(v>0||x)&&(w=++u.frame,f=A-u.time*1e3,u.time=A=A/1e3,o+=v+(v>=s?4:s-v),M=1),x||(l=c(_)),M)for(d=0;d<a.length;d++)a[d](A,f,w,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Uu&&(!ul&&ql()&&(wn=ul=window,Kl=wn.document||{},an.gsap=je,(wn.gsapVersions||(wn.gsapVersions=[])).push(je.version),Nu(go||wn.GreenSockGlobals||!wn.gsap&&wn||{}),Qu.forEach(tf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},fs=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),fs=0,c=hs},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,x){var v=p?function(M,A,w,b){m(M,A,w,b),u.remove(v)}:m;return u.remove(m),a[x?"unshift":"push"](v),Dr(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u}(),Dr=function(){return!fs&&nn.wake()},Yt={},Qv=/^[\d.\-M][\d.\-,\s]/,tx=/["']/g,ex=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(tx,"").trim():+c,i=l.substr(a+1).trim();return e},nx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},ix=function(t){var e=(t+"").split("("),n=Yt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ex(e[1])]:nx(t).split(",").map(ku)):Yt._CE&&Qv.test(t)?Yt._CE("",t):n},sf=function(t){return function(e){return 1-t(1-e)}},of=function r(t,e){for(var n=t._first,i;n;)n instanceof ke?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},zi=function(t,e){return t&&(pe(t)?t:Yt[t]||ix(t))||e},Xi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return qe(t,function(a){Yt[a]=an[a]=s,Yt[o=a.toLowerCase()]=n;for(var l in s)Yt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Yt[a+"."+l]=s[l]}),s},af=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ma=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/hl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Cv((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:af(a);return s=hl/s,l.config=function(c,h){return r(t,c,h)},l},ya=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:af(n);return i.config=function(s){return r(t,s)},i};qe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Xi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Yt.Linear.easeNone=Yt.none=Yt.Linear.easeIn;Xi("Elastic",Ma("in"),Ma("out"),Ma());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Xi("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Xi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Xi("Circ",function(r){return-(Pu(1-r*r)-1)});Xi("Sine",function(r){return r===1?1:-Av(r*wv)+1});Xi("Back",ya("in"),ya("out"),ya());Yt.SteppedEase=Yt.steps=an.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-ee;return function(a){return((i*Ms(0,o,a)|0)+s)*n}}};Cr.ease=Yt["quad.out"];qe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Jl+=r+","+r+"Params,"});var lf=function(t,e){this.id=bv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:zu,this.set=e?e.getSetter:ic},ds=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Lr(this,+e.duration,1,1),this.data=e.data,se&&(this._ctx=se,se.data.push(this)),fs||nn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Lr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Dr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Io(this,n),!s._dp||s.parent||Hu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Rn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Bu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Pr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Mo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ee?0:this._rts,this.totalTime(Ms(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Do(this),zv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ee&&(this._tTime-=ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ae(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Rn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ye(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Uv);var i=Ue;return Ue=n,Ql(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ue=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ah(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ah(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(un(this,n),Ye(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ye(i)),this._dur||(this._zTime=-ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ee)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=pe(n)?n:Gu,l=function(){var h=i.then;i.then=null,s&&s(),pe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Kr(this)},r}();ln(ds.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ee,_prom:0,_ps:!1,_rts:1});var ke=function(r){Ru(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ye(n.sortChildren),le&&Rn(n.parent||le,Gn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Wu(Gn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ns(0,arguments,this),this},e.from=function(i,s,o){return ns(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ns(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,es(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Se(i,s,un(this,o),1),this},e.call=function(i,s,o){return Rn(this,Se.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Se(i,o,un(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,es(o).immediateRender=Ye(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,es(a).immediateRender=Ye(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ae(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,x,v,M,A,w,b;if(this!==le&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,M=this._start,v=this._ts,p=!v,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=ae(h%m),h===l?(_=this._repeat,f=c):(A=ae(h/m),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=Pr(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(f=c-f,b=1),_!==A&&!this._lock){var R=w&&A&1,y=R===(w&&_&1);if(_<A&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(b?0:ae(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;of(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Vv(this,ae(a),ae(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!A&&(rn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=-ee);break}}d=g}else{d=this._last;for(var S=i<0?i:f;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||Ue&&Ql(d)),f!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=S?-ee:ee);break}}d=g}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-ee)._zTime=f>=a?1:-1,this._ts))return this._start=M,Do(this),this.render(i,s,o);this._onUpdate&&!s&&rn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&pi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(rn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Yn(s)||(s=un(this,s,i)),!(i instanceof ds)){if(ze(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Pe(i))return this.addLabel(i,s);if(pe(i))i=Se.delayedCall(0,i);else return this}return this!==i?Rn(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-dn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Se?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Pe(i)?this.removeLabel(i):pe(i)?this.killTweensOf(i):(i.parent===this&&Lo(this,i),i===this._recent&&(this._recent=this._last),Fi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ae(nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=un(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Se.delayedCall(0,s||hs,o);return a.data="isPause",this._hasPause=1,Rn(this,a,un(this,i))},e.removePause=function(i){var s=this._first;for(i=un(this,i);s;)s._start===i&&s.data==="isPause"&&pi(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)si!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=pn(i),l=this._first,c=Yn(s),h;l;)l instanceof Se?Nv(l._targets,a)&&(c?(!si||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=un(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=Se.to(o,ln({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ee,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Lr(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ln({startAt:{time:un(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ch(this,un(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ch(this,un(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ee)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=ae(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Fi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fi(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=dn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Rn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=ae(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Lr(o,o===le&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(le._ts&&(Bu(le,Mo(i,le)),Fu=nn.frame),nn.frame>=Th){Th+=on.autoSleep||120;var s=le._first;if((!s||!s._ts)&&on.autoSleep&&nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||nn.sleep()}}},t}(ds);ln(ke.prototype,{_lock:0,_hasPause:0,_forcing:0});var rx=function(t,e,n,i,s,o,a){var l=new Ke(this._pt,t,e,0,1,pf,null,s),c=0,h=0,u,f,d,g,_,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=us(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),f=n.match(ga)||[];u=ga.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?xr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=ga.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Iu.test(i)||p)&&(l.e=0),this._pt=l,l},tc=function(t,e,n,i,s,o,a,l,c,h){pe(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:pe(u)?c?t[e.indexOf("set")||!pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=pe(u)?c?cx:ff:nc,g;if(Pe(i)&&(~i.indexOf("random(")&&(i=us(i)),i.charAt(1)==="="&&(g=xr(f,i)+(Fe(f)||0),(g||g===0)&&(i=g))),!h||f!==i||vl)return!isNaN(f*i)&&i!==""?(g=new Ke(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?ux:df,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&Zl(e,i),rx.call(this,t,e,f,i,d,l||on.stringFilter,c))},sx=function(t,e,n,i,s){if(pe(t)&&(t=is(t,s,e,n,i)),!Dn(t)||t.style&&t.nodeType||ze(t)||Lu(t))return Pe(t)?is(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=is(t[a],s,e,n,i);return o},cf=function(t,e,n,i,s,o){var a,l,c,h;if(en[t]&&(a=new en[t]).init(s,a.rawVars?e[t]:sx(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Ke(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==mr))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},si,vl,ec=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!Xl,M=t.timeline,A,w,b,R,y,S,L,U,N,B,q,z,Z;if(M&&(!f||!s)&&(s="none"),t._ease=zi(s,Cr.ease),t._yEase=u?sf(zi(u===!0?s:u,Cr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!i.runBackwards,!M||f&&!i.stagger){if(U=m[0]?Oi(m[0]).harness:0,z=U&&i[U.prop],A=xo(i,jl),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?so:Iv),_._lazy=0),o){if(pi(t._startAt=Se.set(m,ln({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ye(l),startAt:null,delay:0,onUpdate:c&&function(){return rn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue||!a&&!d)&&t._startAt.revert(so),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),b=ln({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ye(l),immediateRender:a,stagger:0,parent:p},A),z&&(b[U.prop]=z),pi(t._startAt=Se.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue?t._startAt.revert(so):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ee,ee);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Ye(l)||l&&!g,w=0;w<m.length;w++){if(y=m[w],L=y._gsap||$l(m)[w]._gsap,t._ptLookup[w]=B={},fl[L.id]&&hi.length&&vo(),q=x===m?w:x.indexOf(y),U&&(N=new U).init(y,z||A,t,q,x)!==!1&&(t._pt=R=new Ke(t._pt,y,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(Y){B[Y]=R}),N.priority&&(S=1)),!U||z)for(b in A)en[b]&&(N=cf(b,A,t,q,y,x))?N.priority&&(S=1):B[b]=R=tc.call(t,y,b,"get",A[b],q,x,0,i.stringFilter);t._op&&t._op[w]&&t.kill(y,t._op[w]),v&&t._pt&&(si=t,le.killTweensOf(y,B,t.globalTime(e)),Z=!t.parent,si=0),t._pt&&l&&(fl[L.id]=1)}S&&mf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Z,f&&e<=0&&M.render(dn,!0,!0)},ox=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return vl=1,t.vars[e]="+=0",ec(t,a),vl=0,l?cs(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=ge(n)+Fe(u.e)),u.b&&(u.b=h.s+Fe(u.b))},ax=function(t,e){var n=t[0]?Oi(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Rr({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},lx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(ze(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},is=function(t,e,n,i,s){return pe(t)?t.call(e,n,i,s):Pe(t)&&~t.indexOf("random(")?us(t):t},hf=Jl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",uf={};qe(hf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return uf[r]=1});var Se=function(r){Ru(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:es(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,x=i.parent||le,v=(ze(n)||Lu(n)?Yn(n[0]):"length"in i)?[n]:pn(n),M,A,w,b,R,y,S,L;if(a._targets=v.length?$l(v):cs("GSAP target "+n+" not found. https://gsap.com",!on.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Js(c)||Js(h)){if(i=a.vars,M=a.timeline=new ke({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),M.kill(),M.parent=M._dp=Gn(a),M._start=0,f||Js(c)||Js(h)){if(b=v.length,S=f&&Ku(f),Dn(f))for(R in f)~hf.indexOf(R)&&(L||(L={}),L[R]=f[R]);for(A=0;A<b;A++)w=xo(i,uf),w.stagger=0,p&&(w.yoyoEase=p),L&&Rr(w,L),y=v[A],w.duration=+is(c,Gn(a),A,y,v),w.delay=(+is(h,Gn(a),A,y,v)||0)-a._delay,!f&&b===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),M.to(y,w,S?S(A,y,v):0),M._ease=Yt.none;M.duration()?c=h=0:a.timeline=0}else if(g){es(ln(M.vars.defaults,{ease:"none"})),M._ease=zi(g.ease||i.ease||"none");var U=0,N,B,q;if(ze(g))g.forEach(function(z){return M.to(v,z,">")}),M.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||lx(R,g[R],w,g.easeEach);for(R in w)for(N=w[R].sort(function(z,Z){return z.t-Z.t}),U=0,A=0;A<N.length;A++)B=N[A],q={ease:B.e,duration:(B.t-(A?N[A-1].t:0))/100*c},q[R]=B.v,M.to(v,q,U),U+=q.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!Xl&&(si=Gn(a),le.killTweensOf(v),si=0),Rn(x,Gn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===ae(x._time)&&Ye(u)&&Bv(Gn(a))&&x.data!=="nested")&&(a._tTime=-ee,a.render(Math.max(0,-h)||0)),m&&Wu(Gn(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ee&&!h?l:i<ee?0:i,f,d,g,_,m,p,x,v,M;if(!c)Gv(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(f=ae(u%_),u===l?(g=this._repeat,f=c):(m=ae(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(M=this._yEase,f=c-f),m=Pr(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(v&&this._yEase&&of(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(ae(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Xu(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(M||this._ease)(f/c),this._from&&(this.ratio=x=1-x),!a&&u&&!s&&!m&&(rn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&dl(this,i,s,o),rn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&rn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&dl(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&pi(this,1),!s&&!(h&&!a)&&(u||a||p)&&(rn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){fs||nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ec(this,c),h=this._ease(c/this._dur),ox(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Io(this,0),this.parent||Vu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Kr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ue),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,si&&si.vars.overwrite!==!0)._first||Kr(this),this.parent&&o!==this.timeline.totalDuration()&&Lr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?pn(i):a,c=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!s||s==="all")&&Fv(a,l))return s==="all"&&(this._pt=0),Kr(this);for(u=this._op=this._op||[],s!=="all"&&(Pe(s)&&(_={},qe(s,function(x){return _[x]=1}),s=_),s=ax(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(u[p]=s,g=f,d={}):(d=u[p]=u[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Lo(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Kr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ns(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ns(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return le.killTweensOf(i,s,o)},t}(ds);ln(Se.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qe("staggerTo,staggerFrom,staggerFromTo",function(r){Se[r]=function(){var t=new ke,e=ml.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var nc=function(t,e,n){return t[e]=n},ff=function(t,e,n){return t[e](n)},cx=function(t,e,n,i){return t[e](i.fp,n)},hx=function(t,e,n){return t.setAttribute(e,n)},ic=function(t,e){return pe(t[e])?ff:Yl(t[e])&&t.setAttribute?hx:nc},df=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ux=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},pf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},rc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},fx=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},dx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Lo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},px=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},mf=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Ke=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||df,this.d=l||this,this.set=c||nc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=px,this.m=n,this.mt=s,this.tween=i},r}();qe(Jl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return jl[r]=1});an.TweenMax=an.TweenLite=Se;an.TimelineLite=an.TimelineMax=ke;le=new ke({sortChildren:!1,defaults:Cr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});on.stringFilter=rf;var Bi=[],ao={},mx=[],Ph=0,_x=0,Sa=function(t){return(ao[t]||mx).map(function(e){return e()})},xl=function(){var t=Date.now(),e=[];t-Ph>2&&(Sa("matchMediaInit"),Bi.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=wn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Sa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ph=t,Sa("matchMedia"))},_f=function(){function r(e,n){this.selector=n&&_l(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_x++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){pe(n)&&(s=i,i=n,n=pe);var o=this,a=function(){var c=se,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=_l(s)),se=o,u=i.apply(o,arguments),pe(u)&&o._r.push(u),se=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===pe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=se;se=null,n(this),se=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Se&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ke?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Se)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Bi.length;o--;)Bi[o].id===this.id&&Bi.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),gx=function(){function r(e){this.contexts=[],this.scope=e,se&&se.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Dn(n)||(n={matches:n});var o=new _f(0,s||this.scope),a=o.conditions={},l,c,h;se&&!o.selector&&(o.selector=se.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=wn.matchMedia(n[c]),l&&(Bi.indexOf(o)<0&&Bi.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(xl):l.addEventListener("change",xl)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),yo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return tf(i)})},timeline:function(t){return new ke(t)},getTweensOf:function(t,e){return le.getTweensOf(t,e)},getProperty:function(t,e,n,i){Pe(t)&&(t=pn(t)[0]);var s=Oi(t||{}).get,o=n?Gu:ku;return n==="native"&&(n=""),t&&(e?o((en[e]&&en[e].get||s)(t,e,n,i)):function(a,l,c){return o((en[a]&&en[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=pn(t),t.length>1){var i=t.map(function(h){return je.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=en[e],a=Oi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;mr._pt=0,u.init(t,n?h+n:h,mr,0,[t]),u.render(1,u),mr._pt&&rc(1,mr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=je.to(t,ln((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=zi(t.ease,Cr.ease)),wh(Cr,t||{})},config:function(t){return wh(on,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!en[a]&&!an[a]&&cs(e+" effect requires "+a+" plugin.")}),va[e]=function(a,l,c){return n(pn(a),ln(l||{},s),c)},o&&(ke.prototype[e]=function(a,l,c){return this.add(va[e](a,Dn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Yt[t]=zi(e)},parseEase:function(t,e){return arguments.length?zi(t,e):Yt},getById:function(t){return le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ke(t),i,s;for(n.smoothChildTiming=Ye(t.smoothChildTiming),le.remove(n),n._dp=0,n._time=n._tTime=le._time,i=le._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Se&&i.vars.onComplete===i._targets[0]))&&Rn(n,i,i._start-i._delay),i=s;return Rn(le,n,0),n},context:function(t,e){return t?new _f(t,e):se},matchMedia:function(t){return new gx(t)},matchMediaRefresh:function(){return Bi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||xl()},addEventListener:function(t,e){var n=ao[t]||(ao[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ao[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Zv,wrapYoyo:jv,distribute:Ku,random:ju,snap:Zu,normalize:Kv,getUnit:Fe,clamp:Wv,splitColor:ef,toArray:pn,selector:_l,mapRange:$u,pipe:Yv,unitize:qv,interpolate:Jv,shuffle:qu},install:Nu,effects:va,ticker:nn,updateRoot:ke.updateRoot,plugins:en,globalTimeline:le,core:{PropTween:Ke,globals:Ou,Tween:Se,Timeline:ke,Animation:ds,getCache:Oi,_removeLinkedListItem:Lo,reverting:function(){return Ue},context:function(t){return t&&se&&(se.data.push(t),t._ctx=se),se},suppressOverwrites:function(t){return Xl=t}}};qe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return yo[r]=Se[r]});nn.add(ke.updateRoot);mr=yo.to({},{duration:0});var vx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},xx=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=vx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ea=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Pe(s)&&(l={},qe(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}xx(a,s)}}}},je=yo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ue?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ea("roundProps",gl),Ea("modifiers"),Ea("snap",Zu))||yo;Se.version=ke.version=je.version="3.14.2";Uu=1;ql()&&Dr();Yt.Power0;Yt.Power1;Yt.Power2;Yt.Power3;Yt.Power4;Yt.Linear;Yt.Quad;Yt.Cubic;Yt.Quart;Yt.Quint;Yt.Strong;Yt.Elastic;Yt.Back;Yt.SteppedEase;Yt.Bounce;Yt.Sine;Yt.Expo;Yt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Lh,oi,Mr,sc,Ni,Dh,oc,Mx=function(){return typeof window<"u"},qn={},Pi=180/Math.PI,yr=Math.PI/180,ur=Math.atan2,Ih=1e8,ac=/([A-Z])/g,yx=/(left|right|width|margin|padding|x)/i,Sx=/[\s,\(]\S/,Pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ml=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ex=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Tx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},wx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},bx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},gf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},vf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ax=function(t,e,n){return t.style[e]=n},Cx=function(t,e,n){return t.style.setProperty(e,n)},Rx=function(t,e,n){return t._gsap[e]=n},Px=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Lx=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Dx=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},he="transform",Ze=he+"Origin",Ix=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in qn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Pn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Vn(i,a)}):this.tfm[t]=o.x?o[t]:Vn(i,t),t===Ze&&(this.tfm.zOrigin=o.zOrigin);else return Pn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(he)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ze,e,"")),t=he}(s||e)&&this.props.push(t,e,s[t])},xf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ux=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ac,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=oc(),(!s||!s.isStart)&&!n[he]&&(xf(n),i.zOrigin&&n[Ze]&&(n[Ze]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Mf=function(t,e){var n={target:t,props:[],revert:Ux,save:Ix};return t._gsap||je.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},yf,yl=function(t,e){var n=oi.createElementNS?oi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):oi.createElement(t);return n&&n.style?n:oi.createElement(t)},sn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ac,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Ir(e)||e,1)||""},Uh="O,Moz,ms,Ms,Webkit".split(","),Ir=function(t,e,n){var i=e||Ni,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Uh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Uh[o]:"")+t},Sl=function(){Mx()&&window.document&&(Lh=window,oi=Lh.document,Mr=oi.documentElement,Ni=yl("div")||{style:{}},yl("div"),he=Ir(he),Ze=he+"Origin",Ni.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yf=!!Ir("perspective"),oc=je.core.reverting,sc=1)},Nh=function(t){var e=t.ownerSVGElement,n=yl("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Mr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Mr.removeChild(n),s},Oh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Sf=function(t){var e,n;try{e=t.getBBox()}catch{e=Nh(t),n=1}return e&&(e.width||e.height)||n||(e=Nh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Oh(t,["x","cx","x1"])||0,y:+Oh(t,["y","cy","y1"])||0,width:0,height:0}:e},Ef=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Sf(t))},mi=function(t,e){if(e){var n=t.style,i;e in qn&&e!==Ze&&(e=he),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ac,"-$1").toLowerCase())):n.removeAttribute(e)}},ai=function(t,e,n,i,s,o){var a=new Ke(t._pt,e,n,0,1,o?vf:gf);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Fh={deg:1,rad:1,turn:1},Nx={grid:1,flex:1},_i=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ni.style,l=yx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Fh[i]||Fh[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&Ef(t),(d||o==="%")&&(qn[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],ge(d?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===oi||!_.appendChild)&&(_=oi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===nn.time&&!m.uncache)return ge(s/m.width*u);if(d&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,g=t[h],x?t.style[e]=x:mi(t,e)}else(d||o==="%")&&!Nx[sn(_,"display")]&&(a.position=sn(t,"position")),_===t&&(a.position="static"),_.appendChild(Ni),g=Ni[h],_.removeChild(Ni),a.position="absolute";return l&&d&&(m=Oi(_),m.time=nn.time,m.width=_[h]),ge(f?g*s/u:g&&s?u/g*s:0)},Vn=function(t,e,n,i){var s;return sc||Sl(),e in Pn&&e!=="transform"&&(e=Pn[e],~e.indexOf(",")&&(e=e.split(",")[0])),qn[e]&&e!=="transform"?(s=ms(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Eo(sn(t,Ze))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=So[e]&&So[e](t,e,n)||sn(t,e)||zu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?_i(t,e,s,n)+n:s},Ox=function(t,e,n,i){if(!n||n==="none"){var s=Ir(e,t,1),o=s&&sn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=sn(t,"borderTopColor"))}var a=new Ke(this._pt,t.style,e,0,1,pf),l=0,c=0,h,u,f,d,g,_,m,p,x,v,M,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=sn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=sn(t,e)||i,_?t.style[e]=_:mi(t,e)),h=[n,i],rf(h),n=h[0],i=h[1],f=n.match(pr)||[],A=i.match(pr)||[],A.length){for(;u=pr.exec(i);)m=u[0],x=i.substring(l,u.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),m.charAt(1)==="="&&(m=xr(d,m)+M),p=parseFloat(m),v=m.substr((p+"").length),l=pr.lastIndex-v.length,v||(v=v||on.units[e]||M,l===i.length&&(i+=v,a.e+=v)),M!==v&&(d=_i(t,e,_,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?vf:gf;return Iu.test(i)&&(a.e=0),this._pt=a,a},zh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Fx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=zh[n]||n,e[1]=zh[i]||i,e.join(" ")},zx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],qn[a]&&(l=1,a=a==="transformOrigin"?Ze:he),mi(n,a);l&&(mi(n,he),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ms(n,1),o.uncache=1,xf(i)))}},So={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Ke(t._pt,e,n,0,0,zx);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ps=[1,0,0,1,0,0],Tf={},wf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Bh=function(t){var e=sn(t,he);return wf(e)?ps:e.substr(7).match(Du).map(ge)},lc=function(t,e){var n=t._gsap||Oi(t),i=t.style,s=Bh(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ps:s):(s===ps&&!t.offsetParent&&t!==Mr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Mr.appendChild(t)),s=Bh(t),l?i.display=l:mi(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Mr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},El=function(t,e,n,i,s,o){var a=t._gsap,l=s||lc(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],v=e.split(" "),M=parseFloat(v[0])||0,A=parseFloat(v[1])||0,w,b,R,y;n?l!==ps&&(b=d*m-g*_)&&(R=M*(m/b)+A*(-_/b)+(_*x-m*p)/b,y=M*(-g/b)+A*(d/b)-(d*x-g*p)/b,M=R,A=y):(w=Sf(t),M=w.x+(~v[0].indexOf("%")?M/100*w.width:M),A=w.y+(~(v[1]||v[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(p=M-c,x=A-h,a.xOffset=u+(p*d+x*_)-p,a.yOffset=f+(p*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ze]="0px 0px",o&&(ai(o,a,"xOrigin",c,M),ai(o,a,"yOrigin",h,A),ai(o,a,"xOffset",u,a.xOffset),ai(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+A)},ms=function(t,e){var n=t._gsap||new lf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=sn(t,Ze)||"0",h,u,f,d,g,_,m,p,x,v,M,A,w,b,R,y,S,L,U,N,B,q,z,Z,Y,ot,ct,ht,Pt,Gt,H,j;return h=u=f=_=m=p=x=v=M=0,d=g=1,n.svg=!!(t.getCTM&&Ef(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[he]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[he]!=="none"?l[he]:"")),i.scale=i.rotate=i.translate="none"),b=lc(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),El(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==ps&&(L=b[0],U=b[1],N=b[2],B=b[3],h=q=b[4],u=z=b[5],b.length===6?(d=Math.sqrt(L*L+U*U),g=Math.sqrt(B*B+N*N),_=L||U?ur(U,L)*Pi:0,x=N||B?ur(N,B)*Pi+_:0,x&&(g*=Math.abs(Math.cos(x*yr))),n.svg&&(h-=A-(A*L+w*N),u-=w-(A*U+w*B))):(j=b[6],Gt=b[7],ct=b[8],ht=b[9],Pt=b[10],H=b[11],h=b[12],u=b[13],f=b[14],R=ur(j,Pt),m=R*Pi,R&&(y=Math.cos(-R),S=Math.sin(-R),Z=q*y+ct*S,Y=z*y+ht*S,ot=j*y+Pt*S,ct=q*-S+ct*y,ht=z*-S+ht*y,Pt=j*-S+Pt*y,H=Gt*-S+H*y,q=Z,z=Y,j=ot),R=ur(-N,Pt),p=R*Pi,R&&(y=Math.cos(-R),S=Math.sin(-R),Z=L*y-ct*S,Y=U*y-ht*S,ot=N*y-Pt*S,H=B*S+H*y,L=Z,U=Y,N=ot),R=ur(U,L),_=R*Pi,R&&(y=Math.cos(R),S=Math.sin(R),Z=L*y+U*S,Y=q*y+z*S,U=U*y-L*S,z=z*y-q*S,L=Z,q=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=ge(Math.sqrt(L*L+U*U+N*N)),g=ge(Math.sqrt(z*z+j*j)),R=ur(q,z),x=Math.abs(R)>2e-4?R*Pi:0,M=H?1/(H<0?-H:H):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!wf(sn(t,he)),Z&&t.setAttribute("transform",Z))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ge(d),n.scaleY=ge(g),n.rotation=ge(_)+a,n.rotationX=ge(m)+a,n.rotationY=ge(p)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ze]=Eo(c)),n.xOffset=n.yOffset=0,n.force3D=on.force3D,n.renderTransform=n.svg?kx:yf?bf:Bx,n.uncache=0,n},Eo=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ta=function(t,e,n){var i=Fe(e);return ge(parseFloat(e)+parseFloat(_i(t,"x",n+"px",i)))+i},Bx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bf(t,e)},bi="0deg",Xr="0px",Ai=") ",bf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,M="",A=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==bi||h!==bi)){var w=parseFloat(h)*yr,b=Math.sin(w),R=Math.cos(w),y;w=parseFloat(u)*yr,y=Math.cos(w),o=Ta(x,o,b*y*-v),a=Ta(x,a,-Math.sin(w)*-v),l=Ta(x,l,R*y*-v+v)}m!==Xr&&(M+="perspective("+m+Ai),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(A||o!==Xr||a!==Xr||l!==Xr)&&(M+=l!==Xr||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ai),c!==bi&&(M+="rotate("+c+Ai),h!==bi&&(M+="rotateY("+h+Ai),u!==bi&&(M+="rotateX("+u+Ai),(f!==bi||d!==bi)&&(M+="skew("+f+", "+d+Ai),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Ai),x.style[he]=M||"translate(0, 0)"},kx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(o),M=parseFloat(a),A,w,b,R,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=yr,c*=yr,A=Math.cos(l)*u,w=Math.sin(l)*u,b=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=yr,y=Math.tan(c-h),y=Math.sqrt(1+y*y),b*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),A*=y,w*=y)),A=ge(A),w=ge(w),b=ge(b),R=ge(R)):(A=u,R=f,w=b=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=_i(d,"x",o,"px"),M=_i(d,"y",a,"px")),(g||_||m||p)&&(v=ge(v+g-(g*A+_*b)+m),M=ge(M+_-(g*w+_*R)+p)),(i||s)&&(y=d.getBBox(),v=ge(v+i/100*y.width),M=ge(M+s/100*y.height)),y="matrix("+A+","+w+","+b+","+R+","+v+","+M+")",d.setAttribute("transform",y),x&&(d.style[he]=y)},Gx=function(t,e,n,i,s){var o=360,a=Pe(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Pi:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Ih)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Ih)%o-~~(c/o)*o)),t._pt=f=new Ke(t._pt,e,n,i,c,Ex),f.e=h,f.u="deg",t._props.push(n),f},kh=function(t,e){for(var n in e)t[n]=e[n];return t},Vx=function(t,e,n){var i=kh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[he]=e,a=ms(n,1),mi(n,he),n.setAttribute("transform",c)):(c=getComputedStyle(n)[he],o[he]=e,a=ms(n,1),o[he]=c);for(l in qn)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=Fe(c),g=Fe(h),u=d!==g?_i(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Ke(t._pt,a,l,u,f-u,Ml),t._pt.u=g||0,t._props.push(l));kh(a,i)};qe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});So[t>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(g){return Vn(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var Af={name:"css",register:Sl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,d,g,_,m,p,x,v,M,A,w,b,R,y;sc||Sl(),this.styles=this.styles||Mf(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(en[_]&&cf(_,e,n,i,t,s)))){if(d=typeof h,g=So[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=us(h)),g)g(this,t,_,h,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ui.lastIndex=0,ui.test(c)||(m=Fe(c),p=Fe(h),p?m!==p&&(c=_i(t,_,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Pe(c)&&~c.indexOf("random(")&&(c=us(c)),Fe(c+"")||c==="auto"||(c+=on.units[_]||Fe(Vn(t,_))||""),(c+"").charAt(1)==="="&&(c=Vn(t,_))):c=Vn(t,_),f=parseFloat(c),x=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),_ in Pn&&(_==="autoAlpha"&&(f===1&&Vn(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),ai(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Pn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in qn,v){if(this.styles.save(_),y=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=sn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=sn(t,"perspective"),S?t.style.perspective=S:mi(t,"perspective")}u=parseFloat(h)}if(M||(A=t._gsap,A.renderTransform&&!e.parseTransform||ms(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,M=this._pt=new Ke(this._pt,a,he,0,1,A.renderTransform,A,0,-1),M.dep=1),_==="scale")this._pt=new Ke(this._pt,A,"scaleY",A.scaleY,(x?xr(A.scaleY,x+u):u)-A.scaleY||0,Ml),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Ze,0,a[Ze]),h=Fx(h),A.svg?El(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&ai(this,A,"zOrigin",A.zOrigin,p),ai(this,a,_,Eo(c),Eo(h)));continue}else if(_==="svgOrigin"){El(t,h,1,w,0,this);continue}else if(_ in Tf){Gx(this,A,_,f,x?xr(f,x+h):h);continue}else if(_==="smoothOrigin"){ai(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){Vx(this,h,t);continue}}else _ in a||(_=Ir(_)||_);if(v||(u||u===0)&&(f||f===0)&&!Sx.test(h)&&_ in a)m=(c+"").substr((f+"").length),u||(u=0),p=Fe(h)||(_ in on.units?on.units[_]:m),m!==p&&(f=_i(t,_,c,p)),this._pt=new Ke(this._pt,v?A:a,_,f,(x?xr(f,x+u):u)-f,!v&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?bx:Ml),this._pt.u=p||0,v&&y!==h?(this._pt.b=c,this._pt.e=y,this._pt.r=wx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Tx);else if(_ in a)Ox.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,s);else if(_!=="parseTransform"){Zl(_,h);continue}v||(_ in a?R.push(_,0,a[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),o.push(_)}}b&&mf(this)},render:function(t,e){if(e.tween._time||!oc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Vn,aliases:Pn,getSetter:function(t,e,n){var i=Pn[e];return i&&i.indexOf(",")<0&&(e=i),e in qn&&e!==Ze&&(t._gsap.x||Vn(t,"x"))?n&&Dh===n?e==="scale"?Px:Rx:(Dh=n||{})&&(e==="scale"?Lx:Dx):t.style&&!Yl(t.style[e])?Ax:~e.indexOf("-")?Cx:ic(t,e)},core:{_removeProperty:mi,_getMatrix:lc}};je.utils.checkPrefix=Ir;je.core.getStyleSaver=Mf;(function(r,t,e,n){var i=qe(r+","+t+","+e,function(s){qn[s]=1});qe(t,function(s){on.units[s]="deg",Tf[s]=1}),Pn[i[13]]=r+","+t,qe(n,function(s){var o=s.split(":");Pn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){on.units[r]="px"});je.registerPlugin(Af);var de=je.registerPlugin(Af)||je;de.core.Tween;function Hx(r){const t=new En,e=new qt({color:6042391,roughness:.55,metalness:.05,envMapIntensity:.4}),n=new qt({color:3807752,roughness:.45,metalness:.08,envMapIntensity:.3}),i=new qt({color:16498468,roughness:.15,metalness:.92,envMapIntensity:1.2}),s=new qt({color:15247484,roughness:.2,metalness:.85,envMapIntensity:1}),o=new qt({color:9109536,roughness:.95,metalness:0}),a=new qt({color:16777215,roughness:.05,metalness:.95,envMapIntensity:2}),l=new qt({color:2956046,roughness:.7,metalness:0}),c=new _e(3,1.2,2),h=new _t(c,e);h.position.y=.6,h.castShadow=!0,h.receiveShadow=!0,t.add(h);const u=new _e(2.75,.75,1.75),f=new _t(u,o);f.position.y=.88,t.add(f);const d=new _e(.02,.7,1.3);for(const H of[-1.51,1.51]){const j=new _t(d,l);j.position.set(H,.6,0),t.add(j)}const g=new _e(2.2,.6,.02);for(const H of[-1.01,1.01]){const j=new _t(g,l);j.position.set(0,.6,H),t.add(j)}const _=new _e(3.08,.04,.04),m=new _e(.04,.04,2.08);for(const H of[0,1.2]){for(const j of[-1,1]){const at=new _t(_,i);at.position.set(0,H,j),t.add(at)}for(const j of[-1.5,1.5]){const at=new _t(m,i);at.position.set(j,H,0),t.add(at)}}const p=new yn(.025,.025,1.2,8);for(const H of[-1.5,1.5])for(const j of[-1,1]){const at=new _t(p,i);at.position.set(H,.6,j),t.add(at)}for(const H of[-1.3,1.3])for(const j of[-.8,.8]){const at=new En,ut=new _t(new ye(.09,12,12),i);ut.scale.y=.5,at.add(ut);for(let Rt=0;Rt<3;Rt++){const Ut=Rt/3*Math.PI-Math.PI*.5,At=new _t(new ss(.015,.06,4),i);At.position.set(Math.cos(Ut)*.07,-.03,Math.sin(Ut)*.07),At.rotation.x=.3,at.add(At)}at.position.set(H,0,j),t.add(at)}for(const H of[-.8,.8]){const j=new _t(new _e(.15,.08,.06),s);j.position.set(H,1.22,-1),t.add(j);const at=new _t(new yn(.012,.012,.18,8),i);at.rotation.z=Math.PI/2,at.position.set(H,1.22,-1.03),t.add(at)}const x=new En;x.position.set(0,1.2,-1);const v=new _e(3,.15,2),M=new _t(v,n);M.position.set(0,.075,1),M.castShadow=!0,x.add(M);const A=new _t(new _e(2.7,.04,1.8),o);A.position.set(0,-.01,1),x.add(A);const w=new vs(1.2,.8),b=new _t(w,a);b.position.set(0,-.03,1),b.rotation.x=Math.PI,x.add(b);const R=new _e(1.3,.02,.03);for(const H of[.57,1.43]){const j=new _t(R,i);j.position.set(0,-.02,H),x.add(j)}const y=new _e(.03,.02,.9);for(const H of[-.63,.63]){const j=new _t(y,i);j.position.set(H,-.02,1),x.add(j)}const S=new Vl,L=0,U=0;S.moveTo(L,U+.25),S.bezierCurveTo(L,U+.25,L-.25,U,L-.25,U),S.bezierCurveTo(L-.25,U-.15,L,U-.3,L,U-.4),S.bezierCurveTo(L,U-.3,L+.25,U-.15,L+.25,U),S.bezierCurveTo(L+.25,U,L,U+.25,L,U+.25);const N=new Ro(S,{depth:.02,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:4}),B=new _t(N,i);B.rotation.x=-Math.PI/2,B.position.set(0,.17,1),B.scale.setScalar(1.5),x.add(B);const q=new _t(new _e(3.08,.04,.04),i);q.position.set(0,.075,2),x.add(q),t.add(x);const z=new _t(new _e(.35,.2,.06),s);z.position.set(0,1.15,1.03),t.add(z);const Z=new _t(new yn(.025,.025,.07,8),l);Z.rotation.x=Math.PI/2,Z.position.set(0,1.15,1.065),t.add(Z);const Y=new yn(.05,.06,.2,12),ot=new _t(Y,i);ot.rotation.z=Math.PI/2,ot.position.set(1.6,.6,0),t.add(ot);const ct=new yn(.02,.02,.15,8),ht=new _t(ct,i);ht.rotation.z=Math.PI/2,ht.position.set(1.75,.6,0),t.add(ht);const Pt=new Ar(.1,.018,12,24),Gt=new _t(Pt,i);return Gt.position.set(1.85,.6,0),Gt.rotation.y=Math.PI/2,t.add(Gt),t.position.y=-.5,{group:t,lid:x,body:h,interior:f}}function Yr(r){const t=new En,e=r.height/1.6,n=new qt({color:r.skinColor,roughness:.65,metalness:.05}),i=new qt({color:r.hairColor,roughness:.85,metalness:0}),s=new qt({color:r.outfitColor,roughness:.45,metalness:.1,envMapIntensity:.5}),o=new ye(.18*e,16,16),a=new _t(o,n);a.position.y=r.height-.18*e,a.castShadow=!0,t.add(a);const l=new ye(.21*e,16,16),c=new _t(l,i);if(c.position.y=r.height-.1*e,c.scale.set(1.05,.85,1.05),t.add(c),r.longHair)for(let p=0;p<8;p++){const x=new _t(new Tn(.04*e,.5*e,4,8),i),v=Math.PI*.3+p/8*(Math.PI*1.4);x.position.set(Math.sin(v)*.14*e,r.height-.3*e-p*.03*e,Math.cos(v)*.14*e-.05*e),x.rotation.x=.15,x.rotation.z=Math.sin(v)*.1,t.add(x)}const h=new qt({color:16777215,roughness:.3}),u=new qt({color:1710638,roughness:.2}),f=new qt({color:16777215,emissive:16777215,emissiveIntensity:.3});for(const p of[-1,1]){const x=new _t(new ye(.035*e,10,10),h);x.position.set(p*.07*e,r.height-.19*e,.15*e),x.scale.set(1,.8,.6),t.add(x);const v=new _t(new ye(.018*e,8,8),u);v.position.set(p*.07*e,r.height-.19*e,.17*e),t.add(v);const M=new _t(new ye(.006*e,6,6),f);M.position.set(p*.06*e,r.height-.18*e,.18*e),t.add(M)}const d=new qt({color:16747146,transparent:!0,opacity:.35,roughness:.9});for(const p of[-1,1]){const x=new _t(new ye(.04*e,8,8),d);x.position.set(p*.11*e,r.height-.24*e,.13*e),x.scale.set(1,.6,.3),t.add(x)}const g=new qt({color:13386820}),_=new Ar(.04*e,.008*e,6,16,Math.PI),m=new _t(_,g);if(m.position.set(0,r.height-.27*e,.16*e),m.rotation.x=Math.PI,t.add(m),r.crownColor){const p=new qt({color:r.crownColor,metalness:.92,roughness:.15,envMapIntensity:1.5}),x=new yn(.11*e,.14*e,.07*e,6),v=new _t(x,p);v.position.y=r.height+.03*e,t.add(v);for(let M=0;M<5;M++){const A=M/5*Math.PI*2,w=new _t(new ss(.018*e,.06*e,5),p);w.position.set(Math.cos(A)*.11*e,r.height+.09*e,Math.sin(A)*.11*e),t.add(w);const b=new qt({color:[14753096,2450411,1096065,14239471,16096779][M],metalness:.3,roughness:.1,emissive:new kt([14753096,2450411,1096065,14239471,16096779][M]),emissiveIntensity:.2}),R=new _t(new Po(.012*e),b);R.position.set(Math.cos(A)*.12*e,r.height+.055*e,Math.sin(A)*.12*e),t.add(R)}}if(r.hairAccessory){const p=new qt({color:r.hairAccessory,roughness:.4,metalness:.1});for(let v=0;v<5;v++){const M=v/5*Math.PI*2,A=new _t(new ye(.025*e,6,6),p);A.position.set(-.15*e+Math.cos(M)*.03*e,r.height+.01*e,.05*e+Math.sin(M)*.03*e),A.scale.set(1,.5,1),t.add(A)}const x=new _t(new ye(.012*e,6,6),new qt({color:16498468}));x.position.set(-.15*e,r.height+.015*e,.05*e),t.add(x)}if(r.isBaby){const p=new ye(.17*e,14,14),x=new _t(p,s);x.position.y=r.height*.35,x.scale.set(1,1.15,.85),x.castShadow=!0,t.add(x);for(const A of[-1,1]){const w=new _t(new Tn(.035*e,.12*e,4,8),n);w.position.set(A*.2*e,r.height*.45,0),w.rotation.z=A*-.9,t.add(w);const b=new _t(new ye(.025*e,6,6),n);b.position.set(A*.28*e,r.height*.52,0),t.add(b)}const v=new qt({color:16020150,roughness:.4}),M=new _t(new ye(.02*e,6,6),v);M.position.set(0,r.height-.29*e,.18*e),t.add(M)}else if(r.isDress){const p=new qt({color:r.dressColor||r.outfitColor,roughness:.4,metalness:.15,envMapIntensity:.6}),x=new Tn(.12*e,.2*e,6,14),v=new _t(x,p);v.position.y=r.height*.58,v.castShadow=!0,t.add(v);const M=new ss(.35*e,.55*e,16,1,!0),A=new _t(M,p);A.position.y=r.height*.25,A.castShadow=!0,t.add(A);const w=new qt({color:r.dressColor||r.outfitColor,roughness:.5,metalness:.1,transparent:!0,opacity:.8});for(let b=0;b<3;b++){const R=new Ar((.28+b*.04)*e,.015*e,4,24),y=new _t(R,w);y.position.y=r.height*(.05+b*.06),y.rotation.x=Math.PI/2,t.add(y)}for(const b of[-1,1]){const R=new _t(new Tn(.035*e,.2*e,4,8),n);R.position.set(b*.18*e,r.height*.56,0),R.rotation.z=b*.25,t.add(R);const y=new _t(new ye(.03*e,8,8),n);y.position.set(b*.25*e,r.height*.42,0),t.add(y)}for(const b of[-1,1]){const R=new _t(new _e(.04*e,.02*e,.06*e),new qt({color:16498468,metalness:.6,roughness:.3}));R.position.set(b*.06*e,r.height*.01,.03*e),t.add(R)}}else{const p=new Tn(.14*e,.35*e,6,14),x=new _t(p,s);x.position.y=r.height*.55,x.castShadow=!0,t.add(x);const v=new qt({color:16498468,metalness:.85,roughness:.2});for(const R of[-1,1]){const y=new _t(new ye(.04*e,6,6),v);y.position.set(R*.18*e,r.height*.68,0),y.scale.set(1.2,.5,.8),t.add(y)}const M=new qt({color:1710638,roughness:.4,metalness:.3}),A=new _t(new yn(.145*e,.145*e,.03*e,12),M);A.position.y=r.height*.42,t.add(A);const w=new _t(new _e(.04*e,.035*e,.02*e),new qt({color:16498468,metalness:.9,roughness:.2}));w.position.set(0,r.height*.42,.14*e),t.add(w);for(const R of[-1,1]){const y=new _t(new Tn(.04*e,.2*e,4,8),s);y.position.set(R*.2*e,r.height*.58,0),y.rotation.z=R*.12,t.add(y);const S=new _t(new ye(.03*e,8,8),n);S.position.set(R*.22*e,r.height*.38,0),t.add(S)}const b=new qt({color:2763333,roughness:.6});for(const R of[-1,1]){const y=new _t(new Tn(.05*e,.28*e,4,8),b);y.position.set(R*.07*e,r.height*.18,0),t.add(y);const S=new _t(new _e(.06*e,.03*e,.09*e),new qt({color:1707528,roughness:.5,metalness:.15}));S.position.set(R*.07*e,r.height*.02,.02*e),t.add(S)}}if(r.hasBeard){const p=new qt({color:r.hairColor,roughness:.9}),x=new ye(.13*e,10,10),v=new _t(x,p);v.position.set(0,r.height-.33*e,.06*e),v.scale.set(.9,1.4,.55),t.add(v);for(const M of[-1,1]){const A=new _t(new Tn(.015*e,.06*e,4,6),p);A.position.set(M*.04*e,r.height-.26*e,.16*e),A.rotation.z=M*.4,t.add(A)}}return t}const Ci=(r,t)=>r&&r.startsWith("#")?parseInt(r.replace("#","0x"),16):t;function Wx(r){const t=new En,e=new yn(1.25,1.25,.1,48),n=new qt({color:9109536,roughness:.9,metalness:0}),i=new _t(e,n);i.position.y=.05,i.receiveShadow=!0,t.add(i);const s=new Ar(1.25,.025,8,48),o=new qt({color:16498468,metalness:.6,roughness:.4,envMapIntensity:.8}),a=new _t(s,o);a.rotation.x=Math.PI/2,a.position.y=.1,t.add(a);const l=r.characters,c=Yr({skinColor:Ci(l.prince_skin,16113331),hairColor:Ci(l.prince_hair,3875860),outfitColor:Ci(l.prince_outfit,1981066),height:1.5,crownColor:16498468});c.position.set(-.35,.1,.1),c.rotation.y=.2,c.scale.setScalar(.85),t.add(c);const h=Yr({skinColor:Ci(l.princess_skin,7028262),hairColor:Ci(l.princess_hair,1710638),outfitColor:Ci(l.princess_outfit,14239471),height:1.4,longHair:!0,hairAccessory:16020150,crownColor:12632256,isDress:!0,dressColor:Ci(l.princess_outfit,14239471)});h.position.set(.35,.1,.1),h.rotation.y=-.2,h.scale.setScalar(.85),t.add(h);const u=Yr({skinColor:15783344,hairColor:9127187,outfitColor:366185,height:1.5,hasBeard:!0});u.position.set(0,.1,.35),u.rotation.y=0,u.scale.setScalar(.85),t.add(u);const f=Yr({skinColor:13935988,hairColor:2956046,outfitColor:16498468,height:1,isBaby:!0});f.position.set(0,.1,0),f.scale.setScalar(.85),t.add(f);const d=Yr({skinColor:13934714,hairColor:12632256,outfitColor:8141549,height:1.4,longHair:!0,isDress:!0,dressColor:8141549});return d.position.set(.5,.1,-.45),d.rotation.y=-.4,d.scale.setScalar(.85),t.add(d),{group:t,prince:c,rapunzel:h,partner:u,baby:f,elder:d}}function Xx(){const t=new Float32Array(240),e=new Float32Array(80*3),n=new Float32Array(80*3),i=new Float32Array(80),s=[new kt(16020150),new kt(16478597),new kt(14753096),new kt(16622767),new kt(16498468),new kt(16007006),new kt(14239471)];for(let g=0;g<80;g++){const _=g*3,m=Math.random()*Math.PI*2,p=2+Math.random()*4;t[_]=Math.cos(m)*p,t[_+1]=2+Math.random()*8,t[_+2]=Math.sin(m)*p,e[_]=(Math.random()-.5)*.15,e[_+1]=-(.15+Math.random()*.25),e[_+2]=(Math.random()-.5)*.15,i[g]=Math.random()*Math.PI*2;const x=s[Math.floor(Math.random()*s.length)];n[_]=x.r,n[_+1]=x.g,n[_+2]=x.b}const o=new Le;o.setAttribute("position",new Xe(t,3)),o.setAttribute("color",new Xe(n,3));const a=document.createElement("canvas");a.width=64,a.height=64;const l=a.getContext("2d");l.clearRect(0,0,64,64);const c=l.createRadialGradient(32,28,0,32,32,30);c.addColorStop(0,"rgba(255, 255, 255, 1)"),c.addColorStop(.3,"rgba(255, 255, 255, 0.9)"),c.addColorStop(.6,"rgba(255, 255, 255, 0.5)"),c.addColorStop(1,"rgba(255, 255, 255, 0)"),l.fillStyle=c,l.beginPath(),l.ellipse(32,32,28,18,0,0,Math.PI*2),l.fill();const h=new F0(a),u=new Ol({size:.2,map:h,transparent:!0,opacity:.8,vertexColors:!0,blending:lo,depthWrite:!1,sizeAttenuation:!0});return{points:new yu(o,u),update:(g,_)=>{const m=o.attributes.position,p=m.array;for(let x=0;x<80;x++){const v=x*3,M=i[x];if(p[v]+=e[v]*_+Math.sin(g*.2+M)*.005,p[v+1]+=e[v+1]*_,p[v+2]+=e[v+2]*_+Math.cos(g*.18+M)*.005,p[v+1]<-1.5){const A=Math.random()*Math.PI*2,w=2+Math.random()*4;p[v]=Math.cos(A)*w,p[v+1]=5+Math.random()*5,p[v+2]=Math.sin(A)*w}}m.needsUpdate=!0}}}class Yx{renderer;scene;camera;controls;clock;animId=0;musicBox=null;characters=null;petals=null;config;disposed=!1;spotLight=null;fillLight=null;interiorGlow=null;hearts3D=null;sparkles=null;starField=null;groundPlane=null;isPlaying=!1;cameraTimeline=null;constructor(t,e){this.config=e,this.clock=new Sv,this.renderer=new O0({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t.clientWidth||window.innerWidth,t.clientHeight||window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vh,this.renderer.toneMapping=Wh,this.renderer.toneMappingExposure=1.2,this.renderer.outputColorSpace=xn,this.scene=new ah,this.scene.fog=new Nl(656149,.04),this.camera=new We(38,(t.clientWidth||window.innerWidth)/(t.clientHeight||window.innerHeight),.1,200),this.camera.position.set(0,4,8),this.camera.lookAt(0,.3,0),this.controls=new Tv(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.enablePan=!1,this.controls.minDistance=2.5,this.controls.maxDistance=14,this.controls.minPolarAngle=Math.PI*.08,this.controls.maxPolarAngle=Math.PI*.55,this.controls.autoRotate=!1,this.controls.target.set(0,.3,0),this.controls.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_ROTATE},this.setupLights(),this.setupGround(),this.setupStarField(),this.setupHearts3D(),this.setupSparkles(),this.musicBox=Hx(),this.scene.add(this.musicBox.group),this.characters=Wx(e),this.characters.group.visible=!1,this.characters.group.position.set(0,.75,0),this.scene.add(this.characters.group),this.petals=Xx(),this.scene.add(this.petals.points);try{this.setupEnvironment()}catch(n){console.warn("Env map failed:",n)}window.addEventListener("resize",this.handleResize)}setupLights(){this.scene.add(new yv(16772829,.25)),this.scene.add(new _v(16574451,1705253,.4));const t=new gh(16774630,1.2);t.position.set(5,8,6),t.castShadow=!0,t.shadow.mapSize.setScalar(1024),t.shadow.camera.near=1,t.shadow.camera.far=25,t.shadow.camera.left=-5,t.shadow.camera.right=5,t.shadow.camera.top=5,t.shadow.camera.bottom=-5,t.shadow.bias=-3e-4,this.scene.add(t),this.fillLight=new gh(16738740,.3),this.fillLight.position.set(-5,4,-3),this.scene.add(this.fillLight);const e=new ma(16498468,.8,18);e.position.set(0,6,-6),this.scene.add(e),this.spotLight=new vv(16770278,1.5,18,Math.PI/5,.5,1),this.spotLight.position.set(0,9,4),this.spotLight.target.position.set(0,0,0),this.spotLight.castShadow=!0,this.spotLight.shadow.mapSize.setScalar(512),this.scene.add(this.spotLight),this.scene.add(this.spotLight.target);const n=new ma(8141549,.3,15);n.position.set(-4,3,-6),this.scene.add(n),this.interiorGlow=new ma(16007006,0,4),this.interiorGlow.position.set(0,.6,0),this.scene.add(this.interiorGlow)}setupEnvironment(){const t=new il(this.renderer);t.compileEquirectangularShader();const e=new ah;e.add(new _t(new ye(12,16,16),new Jr({side:Ge,color:new kt(.25,.1,.18)})));const n=new Jr({color:16772829});for(let s=0;s<8;s++){const o=s/8*Math.PI*2,a=new _t(new ye(.3),n);a.position.set(Math.cos(o)*8,4+Math.sin(o*3)*2,Math.sin(o)*8),e.add(a)}const i=t.fromScene(e,0).texture;this.scene.environment=i,t.dispose()}setupGround(){const t=new kl(12,32),e=new qt({color:1706514,roughness:.9,metalness:0,transparent:!0,opacity:.5}),n=new _t(t,e);n.rotation.x=-Math.PI/2,n.position.y=-.51,n.receiveShadow=!0,this.groundPlane=n,this.scene.add(n);const i=new Hl(1.8,2.2,32),s=new Jr({color:16007006,transparent:!0,opacity:.12,side:An}),o=new _t(i,s);o.rotation.x=-Math.PI/2,o.position.y=-.49,this.scene.add(o)}setupStarField(){const e=new Float32Array(900),n=new Float32Array(300*3);for(let s=0;s<300;s++){const o=s*3,a=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),c=40+Math.random()*30;e[o]=c*Math.sin(l)*Math.cos(a),e[o+1]=Math.abs(c*Math.cos(l)),e[o+2]=c*Math.sin(l)*Math.sin(a);const h=.5+Math.random()*.5;n[o]=h,n[o+1]=h*.9,n[o+2]=h*.8}const i=new Le;i.setAttribute("position",new Xe(e,3)),i.setAttribute("color",new Xe(n,3)),this.starField=new yu(i,new Ol({size:.15,vertexColors:!0,transparent:!0,opacity:.8,blending:lo,depthWrite:!1})),this.scene.add(this.starField)}setupHearts3D(){this.hearts3D=new En;const t=new Vl;t.moveTo(0,.15),t.bezierCurveTo(0,.15,-.15,0,-.15,0),t.bezierCurveTo(-.15,-.08,0,-.2,0,-.28),t.bezierCurveTo(0,-.2,.15,-.08,.15,0),t.bezierCurveTo(.15,0,0,.15,0,.15);const e=new Ro(t,{depth:.05,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:2}),n=[16007006,14753096,16020150,16622767,16498468];for(let i=0;i<6;i++){const s=new _t(e,new qt({color:n[i%n.length],emissive:n[i%n.length],emissiveIntensity:.3,roughness:.3,metalness:.4,transparent:!0,opacity:.7})),o=i/6*Math.PI*2,a=3+Math.random()*1.5,l=1.5+Math.random()*3;s.position.set(Math.cos(o)*a,l,Math.sin(o)*a),s.scale.setScalar(.3+Math.random()*.2),s.userData={angle:o,radius:a,height:l,speed:.15+Math.random()*.2,bobSpeed:.5+Math.random()*.5},this.hearts3D.add(s)}this.scene.add(this.hearts3D)}setupSparkles(){this.sparkles=new En;const t=new Po(.04,0),e=new qt({color:16498468,emissive:16498468,emissiveIntensity:.5,metalness:.9,roughness:.1});for(let n=0;n<15;n++){const i=new _t(t,e),s=n/15*Math.PI*2,o=2+Math.random()*2,a=.5+Math.random()*3;i.position.set(Math.cos(s)*o,a,Math.sin(s)*o),i.userData={angle:s,radius:o,height:a,speed:.3+Math.random()*.4},this.sparkles.add(i)}this.scene.add(this.sparkles)}autoPlay(t){this.isPlaying=!0;const e=this.config.scene.animation_speed;this.controls.autoRotate=!1,this.cameraTimeline=de.timeline(),this.cameraTimeline.to(this.camera.position,{x:3,y:3,z:6,duration:2.5/e,ease:"power2.inOut",onUpdate:()=>{this.camera.lookAt(0,.3,0),this.controls.target.set(0,.3,0)}}),this.cameraTimeline.call(()=>{t("opening"),this.openBoxInternal()},[],"+=0.3"),this.cameraTimeline.to(this.camera.position,{x:1.5,y:2.5,z:4.5,duration:3/e,ease:"power2.inOut",onUpdate:()=>{this.camera.lookAt(0,.5,0),this.controls.target.set(0,.5,0)}},"-=0.3"),this.cameraTimeline.call(()=>{t("playing"),this.revealCharactersInternal()},[],"+=0.5"),this.cameraTimeline.to(this.camera.position,{x:.5,y:1.8,z:3.2,duration:2.5/e,ease:"power2.inOut",onUpdate:()=>{this.camera.lookAt(0,1,0),this.controls.target.set(0,1,0)}},"+=0.5"),this.cameraTimeline.to(this.camera.position,{x:-2,y:3,z:5.5,duration:3/e,ease:"power2.inOut",onUpdate:()=>{this.camera.lookAt(0,.8,0),this.controls.target.set(0,.8,0)}},"+=2"),this.cameraTimeline.call(()=>{this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.8})}openBoxInternal(){if(!this.musicBox)return;const t=this.config.scene.animation_speed;de.to(this.musicBox.group.position,{y:-.04,duration:.3/t,ease:"power2.in"}),de.to(this.musicBox.group.position,{y:0,duration:.4/t,ease:"power2.out",delay:.25/t}),de.to(this.musicBox.lid.rotation,{x:-Math.PI*.55,duration:3/t,ease:"power3.out",delay:.3/t}),de.to(this.musicBox.lid.rotation,{x:-Math.PI*.5,duration:.8/t,ease:"elastic.out(1, 0.3)",delay:3.3/t}),this.interiorGlow&&de.to(this.interiorGlow,{intensity:2.5,duration:1.5/t,ease:"power2.out",delay:1/t})}revealCharactersInternal(){if(!this.characters)return;const t=this.config.scene.animation_speed;this.characters.group.visible=!0;const e=[{char:this.characters.prince,scale:.85,delay:.2},{char:this.characters.rapunzel,scale:.85,delay:.25},{char:this.characters.partner,scale:.85,delay:.3},{char:this.characters.baby,scale:.85,delay:.15},{char:this.characters.elder,scale:.85,delay:.4}];e.forEach(({char:n})=>{n.scale.setScalar(.01)}),e.forEach(({char:n,scale:i,delay:s})=>{de.to(n.scale,{x:i,y:i,z:i,duration:.8/t,ease:"elastic.out(1.2, 0.4)",delay:s/t})}),setTimeout(()=>this.startDance(),2e3/t)}startDance(){if(!this.characters||this.disposed)return;const t=this.config.scene.animation_speed,{prince:e,partner:n,rapunzel:i,baby:s,elder:o}=this.characters;de.to(e.position,{x:-.08,duration:2/t,ease:"sine.inOut",yoyo:!0,repeat:-1}),de.to(i.position,{x:.08,duration:2/t,ease:"sine.inOut",yoyo:!0,repeat:-1}),de.to(e.rotation,{z:-.08,y:.35,duration:2.5/t,ease:"sine.inOut",yoyo:!0,repeat:-1}),de.to(i.rotation,{z:.08,y:-.35,duration:2.5/t,ease:"sine.inOut",yoyo:!0,repeat:-1}),de.to(e.position,{y:"+=0.04",duration:.8/t,ease:"sine.inOut",yoyo:!0,repeat:-1}),de.to(i.position,{y:"+=0.04",duration:.8/t,ease:"sine.inOut",yoyo:!0,repeat:-1,delay:.2/t}),de.to(n.position,{y:"+=0.04",duration:.8/t,ease:"sine.inOut",yoyo:!0,repeat:-1,delay:.1/t}),de.to(n.rotation,{z:-.06,y:.15,duration:2.5/t,ease:"sine.inOut",yoyo:!0,repeat:-1}),de.to(s.rotation,{z:.25,duration:.4/t,ease:"sine.inOut",yoyo:!0,repeat:-1}),de.to(s.position,{y:"+=0.08",duration:.35/t,ease:"sine.inOut",yoyo:!0,repeat:-1}),de.to(s.rotation,{y:.5,duration:1.5/t,ease:"sine.inOut",yoyo:!0,repeat:-1}),de.to(o.rotation,{z:.05,duration:3/t,ease:"sine.inOut",yoyo:!0,repeat:-1}),de.to(o.position,{y:"+=0.03",duration:2/t,ease:"sine.inOut",yoyo:!0,repeat:-1}),de.to(this.characters.group.rotation,{y:Math.PI*2,duration:30/t,ease:"none",repeat:-1})}handleResize=()=>{if(this.disposed)return;const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)};start(){this.animate()}animate=()=>{if(this.disposed)return;this.animId=requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=this.clock.getElapsedTime();if(this.controls.update(),this.spotLight&&(this.spotLight.position.x=Math.sin(e*.15)*1.2,this.spotLight.intensity=1.3+Math.sin(e*.4)*.4),this.fillLight&&(this.fillLight.intensity=.2+Math.sin(e*.3)*.15),this.interiorGlow&&this.isPlaying){const n=Math.sin(e*4)*.5+.5;this.interiorGlow.intensity=1.5+n*1.5}if(this.isPlaying&&this.musicBox){const n=this.musicBox.group.children;if(n.length>0){const i=n[n.length-1];i.rotation.x+=t*1.5}}if(this.hearts3D)for(const n of this.hearts3D.children){const i=n.userData;i.angle+=t*i.speed,n.position.x=Math.cos(i.angle)*i.radius,n.position.z=Math.sin(i.angle)*i.radius,n.position.y=i.height+Math.sin(e*i.bobSpeed+i.angle)*.4,n.rotation.y+=t*.5}if(this.sparkles)for(const n of this.sparkles.children){const i=n.userData;i.angle+=t*i.speed,n.position.x=Math.cos(i.angle)*i.radius,n.position.z=Math.sin(i.angle)*i.radius,n.position.y=i.height+Math.sin(e*1.5+i.angle*2)*.3,n.rotation.x+=t*3,n.rotation.y+=t*2}this.starField&&(this.starField.rotation.y+=t*.008),this.petals&&this.petals.update(e,t),this.renderer.render(this.scene,this.camera)};openBox(t){this.openBoxInternal(),setTimeout(t,4e3/this.config.scene.animation_speed)}showCharacters(){this.revealCharactersInternal()}dispose(){this.disposed||(this.disposed=!0,this.isPlaying=!1,this.cameraTimeline&&(this.cameraTimeline.kill(),this.cameraTimeline=null),cancelAnimationFrame(this.animId),window.removeEventListener("resize",this.handleResize),this.controls.dispose(),this.scene.traverse(t=>{if(t instanceof _t){t.geometry.dispose();const e=t.material;Array.isArray(e)?e.forEach(n=>n.dispose()):e.dispose()}}),this.renderer.dispose())}}export{Yx as MusicBoxScene};
