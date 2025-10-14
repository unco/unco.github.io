import{a2 as ss,a3 as Zt,a4 as vr,S as It,i as Nt,s as Ft,k as $,l as ee,m as ae,h as J,n as te,b as lt,a5 as nf,L as Te,g as Ae,v as Ni,d as Ie,f as Fi,V as as,I as Bt,o as cu,a6 as Hs,C as Pn,D as Ln,E as Dn,F as Un,w as In,a7 as os,t as Xs,a8 as Ao,R as yi,y as ft,a as de,z as ht,c as pe,A as dt,U as Ti,B as pt,a9 as ot,q as Ee,r as xe,O as ln,G as C,T as gi,M as Ks,aa as Je,u as At,ab as Lt,H as ki,e as js,p as er,J as rf,K as _l,N as sf}from"../chunks/index.7a29442e.js";import{p as af}from"../chunks/stores.7848222e.js";import{d as of,w as an,r as lf}from"../chunks/index.c6e5d921.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="153",cf=0,gl=1,uf=2,uu=1,fu=2,$n=3,xi=0,en=1,ei=2,Si=0,Sr=1,vl=2,Ml=3,Sl=4,ff=5,gr=100,hf=101,df=102,El=103,xl=104,pf=200,mf=201,_f=202,gf=203,hu=204,du=205,vf=206,Mf=207,Sf=208,Ef=209,xf=210,bf=0,yf=1,Tf=2,go=3,wf=4,Af=5,Rf=6,Cf=7,pu=0,Pf=1,Lf=2,An=0,Df=1,Uf=2,If=3,mu=4,Nf=5,_u=300,xr=301,br=302,vo=303,Mo=304,Zs=306,So=1e3,En=1001,Eo=1002,Kt=1003,bl=1004,Fa=1005,cn=1006,Ff=1007,is=1008,Ei=1009,Of=1010,Bf=1011,Co=1012,gu=1013,vi=1014,Mi=1015,yr=1016,vu=1017,Mu=1018,Oi=1020,zf=1021,xn=1023,Vf=1024,kf=1025,Bi=1026,Tr=1027,Gf=1028,Su=1029,Hf=1030,Eu=1031,xu=1033,Oa=33776,Ba=33777,za=33778,Va=33779,yl=35840,Tl=35841,wl=35842,Al=35843,Wf=36196,Rl=37492,Cl=37496,Pl=37808,Ll=37809,Dl=37810,Ul=37811,Il=37812,Nl=37813,Fl=37814,Ol=37815,Bl=37816,zl=37817,Vl=37818,kl=37819,Gl=37820,Hl=37821,ka=36492,Xf=36283,Wl=36284,Xl=36285,jl=36286,Po=3e3,ni=3001,jf=3200,qf=3201,bu=0,Yf=1,zi="",Ye="srgb",Cn="srgb-linear",yu="display-p3",Ga=7680,Kf=519,Zf=512,Jf=513,Qf=514,$f=515,eh=516,th=517,nh=518,ih=519,ql=35044,Yl="300 es",xo=1035,ti=2e3,qs=2001;class Ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ha=Math.PI/180,Ys=180/Math.PI;function ls(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function rh(n,e){return(n%e+e)%e}function Wa(n,e,t){return(1-t)*n+t*e}function Kl(n){return(n&n-1)===0&&n!==0}function bo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ss(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,r,s,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],_=i[5],v=i[8],g=r[0],p=r[3],h=r[6],S=r[1],m=r[4],x=r[7],y=r[2],E=r[5],R=r[8];return s[0]=a*g+o*S+l*y,s[3]=a*p+o*m+l*E,s[6]=a*h+o*x+l*R,s[1]=c*g+u*S+d*y,s[4]=c*p+u*m+d*E,s[7]=c*h+u*x+d*R,s[2]=f*g+_*S+v*y,s[5]=f*p+_*m+v*E,s[8]=f*h+_*x+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,_=c*s-a*l,v=t*d+i*f+r*_;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=_*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Qe;function Tu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Zl={};function ns(n){n in Zl||(Zl[n]=!0,console.warn(n))}function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ja(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const sh=new Qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ah=new Qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function oh(n){return n.convertSRGBToLinear().applyMatrix3(ah)}function lh(n){return n.applyMatrix3(sh).convertLinearToSRGB()}const ch={[Cn]:n=>n,[Ye]:n=>n.convertSRGBToLinear(),[yu]:oh},uh={[Cn]:n=>n,[Ye]:n=>n.convertLinearToSRGB(),[yu]:lh},_n={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Cn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ch[e],r=uh[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let tr;class wu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{tr===void 0&&(tr=rs("canvas")),tr.width=e.width,tr.height=e.height;const i=tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Er(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fh=0;class Au{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=ls(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qa(r[a].image)):s.push(qa(r[a]))}else s=qa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hh=0;class Gt extends Ar{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=En,r=En,s=cn,a=is,o=xn,l=Ei,c=Gt.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=ls(),this.name="",this.source=new Au(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ni?Ye:zi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case So:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case So:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ye?ni:Po}set encoding(e){ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ni?Ye:zi}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=_u;Gt.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],_=l[5],v=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+_+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(c+1)/2,x=(_+1)/2,y=(h+1)/2,E=(u+f)/4,R=(d+g)/4,P=(v+p)/4;return m>x&&m>y?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=E/i,s=R/i):x>y?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=E/r,s=P/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=R/s,r=P/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-v)*(p-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-v)/S,this.y=(d-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+_+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bi extends Ar{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ni?Ye:zi),this.texture=new Gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:cn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Au(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ru extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dh extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],_=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=_,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==f||c!==_||u!==v){let p=1-o;const h=l*f+c*_+u*v+d*g,S=h>=0?1:-1,m=1-h*h;if(m>Number.EPSILON){const y=Math.sqrt(m),E=Math.atan2(y,h*S);p=Math.sin(p*E)/y,o=Math.sin(o*E)/y}const x=o*S;if(l=l*p+f*x,c=c*p+_*x,u=u*p+v*x,d=d*p+g*x,p===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=y,c*=y,u*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],_=s[a+2],v=s[a+3];return e[t]=o*v+u*d+l*_-c*f,e[t+1]=l*v+u*f+c*d-o*_,e[t+2]=c*v+u*_+o*f-l*d,e[t+3]=u*v-o*d-l*f-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),_=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*_*v,this._y=c*_*d-f*u*v,this._z=c*u*v+f*_*d,this._w=c*u*d-f*_*v;break;case"YXZ":this._x=f*u*d+c*_*v,this._y=c*_*d-f*u*v,this._z=c*u*v-f*_*d,this._w=c*u*d+f*_*v;break;case"ZXY":this._x=f*u*d-c*_*v,this._y=c*_*d+f*u*v,this._z=c*u*v+f*_*d,this._w=c*u*d-f*_*v;break;case"ZYX":this._x=f*u*d-c*_*v,this._y=c*_*d+f*u*v,this._z=c*u*v-f*_*d,this._w=c*u*d+f*_*v;break;case"YZX":this._x=f*u*d+c*_*v,this._y=c*_*d+f*u*v,this._z=c*u*v-f*_*d,this._w=c*u*d-f*_*v;break;case"XZY":this._x=f*u*d-c*_*v,this._y=c*_*d-f*u*v,this._z=c*u*v+f*_*d,this._w=c*u*d+f*_*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>d){const _=2*Math.sqrt(1+i-o-d);this._w=(u-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>d){const _=2*Math.sqrt(1+o-i-d);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+d-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*i+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,d=l*r+s*i-a*t,f=-s*t-a*i-o*r;return this.x=c*l+f*-s+u*-o-d*-a,this.y=u*l+f*-a+d*-s-c*-o,this.z=d*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new W,Jl=new cs;class us{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox),nr.applyMatrix4(e.matrixWorld),this.union(nr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Yn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Yn)}else r.boundingBox===null&&r.computeBoundingBox(),nr.copy(r.boundingBox),nr.applyMatrix4(e.matrixWorld),this.union(nr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Es.subVectors(this.max,Jr),ir.subVectors(e.a,Jr),rr.subVectors(e.b,Jr),sr.subVectors(e.c,Jr),di.subVectors(rr,ir),pi.subVectors(sr,rr),Ri.subVectors(ir,sr);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Ri.z,Ri.y,di.z,0,-di.x,pi.z,0,-pi.x,Ri.z,0,-Ri.x,-di.y,di.x,0,-pi.y,pi.x,0,-Ri.y,Ri.x,0];return!Ka(t,ir,rr,sr,Es)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,ir,rr,sr,Es))?!1:(xs.crossVectors(di,pi),t=[xs.x,xs.y,xs.z],Ka(t,ir,rr,sr,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new W,new W,new W,new W,new W,new W,new W,new W],Yn=new W,nr=new us,ir=new W,rr=new W,sr=new W,di=new W,pi=new W,Ri=new W,Jr=new W,Es=new W,xs=new W,Ci=new W;function Ka(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ci.fromArray(n,s);const o=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ph=new us,Qr=new W,Za=new W;class Lo{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ph.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);const t=Qr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(Za)),this.expandByPoint(Qr.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new W,Ja=new W,bs=new W,mi=new W,Qa=new W,ys=new W,$a=new W;class Cu{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ja.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(bs),o=mi.dot(this.direction),l=-mi.dot(bs),c=mi.lengthSq(),u=Math.abs(1-a*a);let d,f,_,v;if(u>0)if(d=a*l-o,f=a*o-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,_=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ja).addScaledVector(bs,f),_}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,r,s){Qa.subVectors(t,e),ys.subVectors(i,e),$a.crossVectors(Qa,ys);let a=this.direction.dot($a),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(ys.crossVectors(mi,ys));if(l<0)return null;const c=o*this.direction.dot(Qa.cross(mi));if(c<0||l+c>a)return null;const u=-o*mi.dot($a);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p)}set(e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=_,h[7]=v,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ar.setFromMatrixColumn(e,0).length(),s=1/ar.setFromMatrixColumn(e,1).length(),a=1/ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,_=a*d,v=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=_+v*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=v+_*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,_=l*d,v=c*u,g=c*d;t[0]=f+g*o,t[4]=v*o-_,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=_*o-v,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,_=l*d,v=c*u,g=c*d;t[0]=f-g*o,t[4]=-a*d,t[8]=v+_*o,t[1]=_+v*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,_=a*d,v=o*u,g=o*d;t[0]=l*u,t[4]=v*c-_,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=_*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,_=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-f*d,t[8]=v*d+_,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=_*d+v,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,_=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=a*u,t[9]=_*d-v,t[2]=v*d-_,t[6]=o*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mh,e,_h)}lookAt(e,t,i){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),_i.crossVectors(i,rn),_i.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),_i.crossVectors(i,rn)),_i.normalize(),Ts.crossVectors(rn,_i),r[0]=_i.x,r[4]=Ts.x,r[8]=rn.x,r[1]=_i.y,r[5]=Ts.y,r[9]=rn.y,r[2]=_i.z,r[6]=Ts.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],_=i[13],v=i[2],g=i[6],p=i[10],h=i[14],S=i[3],m=i[7],x=i[11],y=i[15],E=r[0],R=r[4],P=r[8],M=r[12],A=r[1],I=r[5],Q=r[9],D=r[13],G=r[2],B=r[6],ne=r[10],z=r[14],H=r[3],L=r[7],k=r[11],re=r[15];return s[0]=a*E+o*A+l*G+c*H,s[4]=a*R+o*I+l*B+c*L,s[8]=a*P+o*Q+l*ne+c*k,s[12]=a*M+o*D+l*z+c*re,s[1]=u*E+d*A+f*G+_*H,s[5]=u*R+d*I+f*B+_*L,s[9]=u*P+d*Q+f*ne+_*k,s[13]=u*M+d*D+f*z+_*re,s[2]=v*E+g*A+p*G+h*H,s[6]=v*R+g*I+p*B+h*L,s[10]=v*P+g*Q+p*ne+h*k,s[14]=v*M+g*D+p*z+h*re,s[3]=S*E+m*A+x*G+y*H,s[7]=S*R+m*I+x*B+y*L,s[11]=S*P+m*Q+x*ne+y*k,s[15]=S*M+m*D+x*z+y*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],_=e[14],v=e[3],g=e[7],p=e[11],h=e[15];return v*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*_-i*l*_)+g*(+t*l*_-t*c*f+s*a*f-r*a*_+r*c*u-s*l*u)+p*(+t*c*d-t*o*_-s*a*d+i*a*_+s*o*u-i*c*u)+h*(-r*o*u-t*l*d+t*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],_=e[11],v=e[12],g=e[13],p=e[14],h=e[15],S=d*p*c-g*f*c+g*l*_-o*p*_-d*l*h+o*f*h,m=v*f*c-u*p*c-v*l*_+a*p*_+u*l*h-a*f*h,x=u*g*c-v*d*c+v*o*_-a*g*_-u*o*h+a*d*h,y=v*d*l-u*g*l-v*o*f+a*g*f+u*o*p-a*d*p,E=t*S+i*m+r*x+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=S*R,e[1]=(g*f*s-d*p*s-g*r*_+i*p*_+d*r*h-i*f*h)*R,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*h+i*l*h)*R,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*_-i*l*_)*R,e[4]=m*R,e[5]=(u*p*s-v*f*s+v*r*_-t*p*_-u*r*h+t*f*h)*R,e[6]=(v*l*s-a*p*s-v*r*c+t*p*c+a*r*h-t*l*h)*R,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*_+t*l*_)*R,e[8]=x*R,e[9]=(v*d*s-u*g*s-v*i*_+t*g*_+u*i*h-t*d*h)*R,e[10]=(a*g*s-v*o*s+v*i*c-t*g*c-a*i*h+t*o*h)*R,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*_-t*o*_)*R,e[12]=y*R,e[13]=(u*g*r-v*d*r+v*i*f-t*g*f-u*i*p+t*d*p)*R,e[14]=(v*o*r-a*g*r-v*i*l+t*g*l+a*i*p-t*o*p)*R,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*f+t*o*f)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,_=s*u,v=s*d,g=a*u,p=a*d,h=o*d,S=l*c,m=l*u,x=l*d,y=i.x,E=i.y,R=i.z;return r[0]=(1-(g+h))*y,r[1]=(_+x)*y,r[2]=(v-m)*y,r[3]=0,r[4]=(_-x)*E,r[5]=(1-(f+h))*E,r[6]=(p+S)*E,r[7]=0,r[8]=(v+m)*R,r[9]=(p-S)*R,r[10]=(1-(f+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ar.set(r[0],r[1],r[2]).length();const a=ar.set(r[4],r[5],r[6]).length(),o=ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const c=1/s,u=1/a,d=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ti){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let _,v;if(o===ti)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===qs)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ti){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(a-s),f=(t+e)*c,_=(i+r)*u;let v,g;if(o===ti)v=(a+s)*d,g=-2*d;else if(o===qs)v=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ar=new W,gn=new Tt,mh=new W(0,0,0),_h=new W(1,1,1),_i=new W,Ts=new W,rn=new W,Ql=new Tt,$l=new cs;class Js{constructor(e=0,t=0,i=0,r=Js.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ql,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Js.DEFAULT_ORDER="XYZ";class Do{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gh=0;const ec=new W,or=new cs,Zn=new Tt,ws=new W,$r=new W,vh=new W,Mh=new cs,tc=new W(1,0,0),nc=new W(0,1,0),ic=new W(0,0,1),Sh={type:"added"},rc={type:"removed"};class xt extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new W,t=new Js,i=new cs,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Qe}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(tc,e)}rotateY(e){return this.rotateOnAxis(nc,e)}rotateZ(e){return this.rotateOnAxis(ic,e)}translateOnAxis(e,t){return ec.copy(e).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tc,e)}translateY(e){return this.translateOnAxis(nc,e)}translateZ(e){return this.translateOnAxis(ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ws.copy(e):ws.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt($r,ws,this.up):Zn.lookAt(ws,$r,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(Zn),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(rc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,vh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),_=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),_.length>0&&(i.animations=_),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new W(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new W,Jn=new W,eo=new W,Qn=new W,lr=new W,cr=new W,sc=new W,to=new W,no=new W,io=new W;let As=!1;class Sn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),Jn.subVectors(i,t),eo.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(Jn),l=vn.dot(eo),c=Jn.dot(Jn),u=Jn.dot(eo),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,_=(c*l-o*u)*f,v=(a*u-o*l)*f;return s.set(1-_-v,v,_)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qn),Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(e,t,i,r,s,a,o,l){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Qn),l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),Jn.subVectors(e,t),vn.cross(Jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),vn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),Sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;lr.subVectors(r,i),cr.subVectors(s,i),to.subVectors(e,i);const l=lr.dot(to),c=cr.dot(to);if(l<=0&&c<=0)return t.copy(i);no.subVectors(e,r);const u=lr.dot(no),d=cr.dot(no);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(lr,a);io.subVectors(e,s);const _=lr.dot(io),v=cr.dot(io);if(v>=0&&_<=v)return t.copy(s);const g=_*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(cr,o);const p=u*v-_*d;if(p<=0&&d-u>=0&&_-v>=0)return sc.subVectors(s,r),o=(d-u)/(d-u+(_-v)),t.copy(r).addScaledVector(sc,o);const h=1/(p+g+f);return a=g*h,o=f*h,t.copy(i).addScaledVector(lr,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Eh=0;class fs extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Sr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hu,this.blendDst=du,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function ro(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ye){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_n.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=_n.workingColorSpace){return this.r=e,this.g=t,this.b=i,_n.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=_n.workingColorSpace){if(e=rh(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ro(a,s,e+1/3),this.g=ro(a,s,e),this.b=ro(a,s,e-1/3)}return _n.toWorkingColorSpace(this,r),this}setStyle(e,t=Ye){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ye){const i=Pu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ye){return _n.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Qt(Wt.r*255,0,255))*65536+Math.round(Qt(Wt.g*255,0,255))*256+Math.round(Qt(Wt.b*255,0,255))}getHexString(e=Ye){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_n.workingColorSpace){_n.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_n.workingColorSpace){return _n.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Ye){_n.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,r=Wt.b;return e!==Ye?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Mn),Mn.h+=e,Mn.s+=t,Mn.l+=i,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Rs);const i=Wa(Mn.h,Rs.h,t),r=Wa(Mn.s,Rs.s,t),s=Wa(Mn.l,Rs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new tt;tt.NAMES=Pu;class Lu extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new W,Cs=new nt;class Rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ql,this.updateRange={offset:0,count:-1},this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Du extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uu extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ii extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xh=0;const on=new Tt,so=new xt,ur=new W,sn=new us,es=new us,Ot=new W;class wi extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tu(e)?Uu:Du)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ii(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(sn.min,es.min),sn.expandByPoint(Ot),Ot.addVectors(sn.max,es.max),sn.expandByPoint(Ot)):(sn.expandByPoint(es.min),sn.expandByPoint(es.max))}sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ot.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(e,c),Ot.add(ur)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new W,u[A]=new W;const d=new W,f=new W,_=new W,v=new nt,g=new nt,p=new nt,h=new W,S=new W;function m(A,I,Q){d.fromArray(r,A*3),f.fromArray(r,I*3),_.fromArray(r,Q*3),v.fromArray(a,A*2),g.fromArray(a,I*2),p.fromArray(a,Q*2),f.sub(d),_.sub(d),g.sub(v),p.sub(v);const D=1/(g.x*p.y-p.x*g.y);isFinite(D)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(_,-g.y).multiplyScalar(D),S.copy(_).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(D),c[A].add(h),c[I].add(h),c[Q].add(h),u[A].add(S),u[I].add(S),u[Q].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let A=0,I=x.length;A<I;++A){const Q=x[A],D=Q.start,G=Q.count;for(let B=D,ne=D+G;B<ne;B+=3)m(i[B+0],i[B+1],i[B+2])}const y=new W,E=new W,R=new W,P=new W;function M(A){R.fromArray(s,A*3),P.copy(R);const I=c[A];y.copy(I),y.sub(R.multiplyScalar(R.dot(I))).normalize(),E.crossVectors(P,I);const D=E.dot(u[A])<0?-1:1;l[A*4]=y.x,l[A*4+1]=y.y,l[A*4+2]=y.z,l[A*4+3]=D}for(let A=0,I=x.length;A<I;++A){const Q=x[A],D=Q.start,G=Q.count;for(let B=D,ne=D+G;B<ne;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,_=i.count;f<_;f++)i.setXYZ(f,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let f=0,_=e.count;f<_;f+=3){const v=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,_=t.count;f<_;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let _=0,v=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?_=l[g]*o.data.stride+o.offset:_=l[g]*u;for(let h=0;h<u;h++)f[v++]=c[_++]}return new Rn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],_=e(f,i);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const _=c[d];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,_=d.length;f<_;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new Tt,Pi=new Cu,Ps=new Lo,oc=new W,fr=new W,hr=new W,dr=new W,ao=new W,Ls=new W,Ds=new nt,Us=new nt,Is=new nt,lc=new W,cc=new W,uc=new W,Ns=new W,Fs=new W;let Tn=class extends xt{constructor(e=new wi,t=new Lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ls.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ao.fromBufferAttribute(d,e),a?Ls.addScaledVector(ao,u):Ls.addScaledVector(ao.sub(t),u))}t.add(Ls)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(Ps.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Ps,oc)===null||Pi.origin.distanceToSquared(oc)>(e.far-e.near)**2))&&(ac.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(ac),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const p=f[v],h=a[p.materialIndex],S=Math.max(p.start,_.start),m=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let x=S,y=m;x<y;x+=3){const E=o.getX(x),R=o.getX(x+1),P=o.getX(x+2);r=Os(this,h,e,i,c,u,d,E,R,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(o.count,_.start+_.count);for(let p=v,h=g;p<h;p+=3){const S=o.getX(p),m=o.getX(p+1),x=o.getX(p+2);r=Os(this,a,e,i,c,u,d,S,m,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const p=f[v],h=a[p.materialIndex],S=Math.max(p.start,_.start),m=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let x=S,y=m;x<y;x+=3){const E=x,R=x+1,P=x+2;r=Os(this,h,e,i,c,u,d,E,R,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,_.start),g=Math.min(l.count,_.start+_.count);for(let p=v,h=g;p<h;p+=3){const S=p,m=p+1,x=p+2;r=Os(this,a,e,i,c,u,d,S,m,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function bh(n,e,t,i,r,s,a,o){let l;if(e.side===en?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===xi,o),l===null)return null;Fs.copy(o),Fs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fs);return c<t.near||c>t.far?null:{distance:c,point:Fs.clone(),object:n}}function Os(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,fr),n.getVertexPosition(l,hr),n.getVertexPosition(c,dr);const u=bh(n,e,t,i,fr,hr,dr,Ns);if(u){r&&(Ds.fromBufferAttribute(r,o),Us.fromBufferAttribute(r,l),Is.fromBufferAttribute(r,c),u.uv=Sn.getInterpolation(Ns,fr,hr,dr,Ds,Us,Is,new nt)),s&&(Ds.fromBufferAttribute(s,o),Us.fromBufferAttribute(s,l),Is.fromBufferAttribute(s,c),u.uv1=Sn.getInterpolation(Ns,fr,hr,dr,Ds,Us,Is,new nt),u.uv2=u.uv1),a&&(lc.fromBufferAttribute(a,o),cc.fromBufferAttribute(a,l),uc.fromBufferAttribute(a,c),u.normal=Sn.getInterpolation(Ns,fr,hr,dr,lc,cc,uc,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new W,materialIndex:0};Sn.getNormal(fr,hr,dr,d.normal),u.face=d}return u}class Rr extends wi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,_=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ii(c,3)),this.setAttribute("normal",new ii(u,3)),this.setAttribute("uv",new ii(d,2));function v(g,p,h,S,m,x,y,E,R,P,M){const A=x/R,I=y/P,Q=x/2,D=y/2,G=E/2,B=R+1,ne=P+1;let z=0,H=0;const L=new W;for(let k=0;k<ne;k++){const re=k*I-D;for(let N=0;N<B;N++){const K=N*A-Q;L[g]=K*S,L[p]=re*m,L[h]=G,c.push(L.x,L.y,L.z),L[g]=0,L[p]=0,L[h]=E>0?1:-1,u.push(L.x,L.y,L.z),d.push(N/R),d.push(1-k/P),z+=1}}for(let k=0;k<P;k++)for(let re=0;re<R;re++){const N=f+re+B*k,K=f+re+B*(k+1),ie=f+(re+1)+B*(k+1),ge=f+(re+1)+B*k;l.push(N,K,ge),l.push(K,ie,ge),H+=6}o.addGroup(_,H,M),_+=H,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=wr(n[t]);for(const r in i)e[r]=i[r]}return e}function yh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Iu(n){return n.getRenderTarget()===null?n.outputColorSpace:Cn}const Nu={clone:wr,merge:Yt};var Th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Th,this.fragmentShader=wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=yh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fu extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let $t=class extends Fu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ha*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const pr=-90,mr=1;class Ah extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new $t(pr,mr,e,t);r.layers=this.layers,this.add(r);const s=new $t(pr,mr,e,t);s.layers=this.layers,this.add(s);const a=new $t(pr,mr,e,t);a.layers=this.layers,this.add(a);const o=new $t(pr,mr,e,t);o.layers=this.layers,this.add(o);const l=new $t(pr,mr,e,t);l.layers=this.layers,this.add(l);const c=new $t(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=An,e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Ou extends Gt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rh extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ni?Ye:zi),this.texture=new Ou(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rr(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Si});s.uniforms.tEquirect.value=t;const a=new Tn(r,s),o=t.minFilter;return t.minFilter===is&&(t.minFilter=cn),new Ah(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const oo=new W,Ch=new W,Ph=new Qe;class Di{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=oo.subVectors(i,t).cross(Ch.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(oo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ph.getNormalMatrix(e),r=this.coplanarPoint(oo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Lo,Bs=new W;class Qs{constructor(e=new Di,t=new Di,i=new Di,r=new Di,s=new Di,a=new Di){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],_=r[8],v=r[9],g=r[10],p=r[11],h=r[12],S=r[13],m=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,p-_,x-h).normalize(),i[1].setComponents(l+s,f+c,p+_,x+h).normalize(),i[2].setComponents(l+a,f+u,p+v,x+S).normalize(),i[3].setComponents(l-a,f-u,p-v,x-S).normalize(),i[4].setComponents(l-o,f-d,p-g,x-m).normalize(),t===ti)i[5].setComponents(l+o,f+d,p+g,x+m).normalize();else if(t===qs)i[5].setComponents(o,d,g,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Bs.x=r.normal.x>0?e.max.x:e.min.x,Bs.y=r.normal.y>0?e.max.y:e.min.y,Bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Lh(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,f=c.usage,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const f=u.array,_=u.updateRange;n.bindBuffer(d,c),_.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f,_.offset,_.count):n.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class Uo extends wi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,_=[],v=[],g=[],p=[];for(let h=0;h<u;h++){const S=h*f-a;for(let m=0;m<c;m++){const x=m*d-s;v.push(x,-S,0),g.push(0,0,1),p.push(m/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<o;S++){const m=S+c*h,x=S+c*(h+1),y=S+1+c*(h+1),E=S+1+c*h;_.push(m,x,E),_.push(x,y,E)}this.setIndex(_),this.setAttribute("position",new ii(v,3)),this.setAttribute("normal",new ii(g,3)),this.setAttribute("uv",new ii(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bh="vec3 transformed = vec3( position );",zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kh=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Gh=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,$h=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Rd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nd=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zd=`#ifdef USE_NORMALMAP
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
#endif`,Jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bp=`#ifdef USE_UV
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
#endif`,yp=`#ifdef USE_UV
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
#endif`,Tp=`#ifdef USE_UV
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
#endif`,wp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Up=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Np=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Fp=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zp=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kp=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Gp=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Wp=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,jp=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yp=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Zp=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Qp=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,em=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`uniform float size;
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
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,im=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,rm=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sm=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ke={alphamap_fragment:Dh,alphamap_pars_fragment:Uh,alphatest_fragment:Ih,alphatest_pars_fragment:Nh,aomap_fragment:Fh,aomap_pars_fragment:Oh,begin_vertex:Bh,beginnormal_vertex:zh,bsdfs:Vh,iridescence_fragment:kh,bumpmap_pars_fragment:Gh,clipping_planes_fragment:Hh,clipping_planes_pars_fragment:Wh,clipping_planes_pars_vertex:Xh,clipping_planes_vertex:jh,color_fragment:qh,color_pars_fragment:Yh,color_pars_vertex:Kh,color_vertex:Zh,common:Jh,cube_uv_reflection_fragment:Qh,defaultnormal_vertex:$h,displacementmap_pars_vertex:ed,displacementmap_vertex:td,emissivemap_fragment:nd,emissivemap_pars_fragment:id,encodings_fragment:rd,encodings_pars_fragment:sd,envmap_fragment:ad,envmap_common_pars_fragment:od,envmap_pars_fragment:ld,envmap_pars_vertex:cd,envmap_physical_pars_fragment:Ed,envmap_vertex:ud,fog_vertex:fd,fog_pars_vertex:hd,fog_fragment:dd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_fragment:_d,lightmap_pars_fragment:gd,lights_lambert_fragment:vd,lights_lambert_pars_fragment:Md,lights_pars_begin:Sd,lights_toon_fragment:xd,lights_toon_pars_fragment:bd,lights_phong_fragment:yd,lights_phong_pars_fragment:Td,lights_physical_fragment:wd,lights_physical_pars_fragment:Ad,lights_fragment_begin:Rd,lights_fragment_maps:Cd,lights_fragment_end:Pd,logdepthbuf_fragment:Ld,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Id,map_fragment:Nd,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Vd,morphcolor_vertex:kd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Hd,morphtarget_vertex:Wd,normal_fragment_begin:Xd,normal_fragment_maps:jd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:Kd,normalmap_pars_fragment:Zd,clearcoat_normal_fragment_begin:Jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:$d,iridescence_pars_fragment:ep,output_fragment:tp,packing:np,premultiplied_alpha_fragment:ip,project_vertex:rp,dithering_fragment:sp,dithering_pars_fragment:ap,roughnessmap_fragment:op,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:up,shadowmap_vertex:fp,shadowmask_pars_fragment:hp,skinbase_vertex:dp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:_p,specularmap_fragment:gp,specularmap_pars_fragment:vp,tonemapping_fragment:Mp,tonemapping_pars_fragment:Sp,transmission_fragment:Ep,transmission_pars_fragment:xp,uv_pars_fragment:bp,uv_pars_vertex:yp,uv_vertex:Tp,worldpos_vertex:wp,background_vert:Ap,background_frag:Rp,backgroundCube_vert:Cp,backgroundCube_frag:Pp,cube_vert:Lp,cube_frag:Dp,depth_vert:Up,depth_frag:Ip,distanceRGBA_vert:Np,distanceRGBA_frag:Fp,equirect_vert:Op,equirect_frag:Bp,linedashed_vert:zp,linedashed_frag:Vp,meshbasic_vert:kp,meshbasic_frag:Gp,meshlambert_vert:Hp,meshlambert_frag:Wp,meshmatcap_vert:Xp,meshmatcap_frag:jp,meshnormal_vert:qp,meshnormal_frag:Yp,meshphong_vert:Kp,meshphong_frag:Zp,meshphysical_vert:Jp,meshphysical_frag:Qp,meshtoon_vert:$p,meshtoon_frag:em,points_vert:tm,points_frag:nm,shadow_vert:im,shadow_frag:rm,sprite_vert:sm,sprite_frag:am},_e={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},yn={basic:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Yt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Yt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Yt([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Yt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Yt([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Yt([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Yt([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Yt([_e.lights,_e.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};yn.physical={uniforms:Yt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const zs={r:0,b:0,g:0};function om(n,e,t,i,r,s,a){const o=new tt(0);let l=s===!0?0:1,c,u,d=null,f=0,_=null;function v(p,h){let S=!1,m=h.isScene===!0?h.background:null;switch(m&&m.isTexture&&(m=(h.backgroundBlurriness>0?t:e).get(m)),m===null?g(o,l):m&&m.isColor&&(g(m,1),S=!0),n.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),S=!0;break}(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Zs)?(u===void 0&&(u=new Tn(new Rr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:wr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=m.colorSpace!==Ye,(d!==m||f!==m.version||_!==n.toneMapping)&&(u.material.needsUpdate=!0,d=m,f=m.version,_=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new Tn(new Uo(2,2),new ri({name:"BackgroundMaterial",uniforms:wr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=m.colorSpace!==Ye,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(d!==m||f!==m.version||_!==n.toneMapping)&&(c.material.needsUpdate=!0,d=m,f=m.version,_=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,h){p.getRGB(zs,Iu(n)),i.buffers.color.setClear(zs.r,zs.g,zs.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),l=h,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:v}}function lm(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function d(G,B,ne,z,H){let L=!1;if(a){const k=g(z,ne,B);c!==k&&(c=k,_(c.object)),L=h(G,z,ne,H),L&&S(G,z,ne,H)}else{const k=B.wireframe===!0;(c.geometry!==z.id||c.program!==ne.id||c.wireframe!==k)&&(c.geometry=z.id,c.program=ne.id,c.wireframe=k,L=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(L||u)&&(u=!1,P(G,B,ne,z),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function _(G){return i.isWebGL2?n.bindVertexArray(G):s.bindVertexArrayOES(G)}function v(G){return i.isWebGL2?n.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function g(G,B,ne){const z=ne.wireframe===!0;let H=o[G.id];H===void 0&&(H={},o[G.id]=H);let L=H[B.id];L===void 0&&(L={},H[B.id]=L);let k=L[z];return k===void 0&&(k=p(f()),L[z]=k),k}function p(G){const B=[],ne=[],z=[];for(let H=0;H<r;H++)B[H]=0,ne[H]=0,z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ne,attributeDivisors:z,object:G,attributes:{},index:null}}function h(G,B,ne,z){const H=c.attributes,L=B.attributes;let k=0;const re=ne.getAttributes();for(const N in re)if(re[N].location>=0){const ie=H[N];let ge=L[N];if(ge===void 0&&(N==="instanceMatrix"&&G.instanceMatrix&&(ge=G.instanceMatrix),N==="instanceColor"&&G.instanceColor&&(ge=G.instanceColor)),ie===void 0||ie.attribute!==ge||ge&&ie.data!==ge.data)return!0;k++}return c.attributesNum!==k||c.index!==z}function S(G,B,ne,z){const H={},L=B.attributes;let k=0;const re=ne.getAttributes();for(const N in re)if(re[N].location>=0){let ie=L[N];ie===void 0&&(N==="instanceMatrix"&&G.instanceMatrix&&(ie=G.instanceMatrix),N==="instanceColor"&&G.instanceColor&&(ie=G.instanceColor));const ge={};ge.attribute=ie,ie&&ie.data&&(ge.data=ie.data),H[N]=ge,k++}c.attributes=H,c.attributesNum=k,c.index=z}function m(){const G=c.newAttributes;for(let B=0,ne=G.length;B<ne;B++)G[B]=0}function x(G){y(G,0)}function y(G,B){const ne=c.newAttributes,z=c.enabledAttributes,H=c.attributeDivisors;ne[G]=1,z[G]===0&&(n.enableVertexAttribArray(G),z[G]=1),H[G]!==B&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,B),H[G]=B)}function E(){const G=c.newAttributes,B=c.enabledAttributes;for(let ne=0,z=B.length;ne<z;ne++)B[ne]!==G[ne]&&(n.disableVertexAttribArray(ne),B[ne]=0)}function R(G,B,ne,z,H,L,k){k===!0?n.vertexAttribIPointer(G,B,ne,H,L):n.vertexAttribPointer(G,B,ne,z,H,L)}function P(G,B,ne,z){if(i.isWebGL2===!1&&(G.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const H=z.attributes,L=ne.getAttributes(),k=B.defaultAttributeValues;for(const re in L){const N=L[re];if(N.location>=0){let K=H[re];if(K===void 0&&(re==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),re==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),K!==void 0){const ie=K.normalized,ge=K.itemSize,Me=t.get(K);if(Me===void 0)continue;const Re=Me.buffer,fe=Me.type,De=Me.bytesPerElement,mt=i.isWebGL2===!0&&(fe===n.INT||fe===n.UNSIGNED_INT||K.gpuType===gu);if(K.isInterleavedBufferAttribute){const We=K.data,O=We.stride,Et=K.offset;if(We.isInstancedInterleavedBuffer){for(let Le=0;Le<N.locationSize;Le++)y(N.location+Le,We.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let Le=0;Le<N.locationSize;Le++)x(N.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let Le=0;Le<N.locationSize;Le++)R(N.location+Le,ge/N.locationSize,fe,ie,O*De,(Et+ge/N.locationSize*Le)*De,mt)}else{if(K.isInstancedBufferAttribute){for(let We=0;We<N.locationSize;We++)y(N.location+We,K.meshPerAttribute);G.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let We=0;We<N.locationSize;We++)x(N.location+We);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let We=0;We<N.locationSize;We++)R(N.location+We,ge/N.locationSize,fe,ie,ge*De,ge/N.locationSize*We*De,mt)}}else if(k!==void 0){const ie=k[re];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(N.location,ie);break;case 3:n.vertexAttrib3fv(N.location,ie);break;case 4:n.vertexAttrib4fv(N.location,ie);break;default:n.vertexAttrib1fv(N.location,ie)}}}}E()}function M(){Q();for(const G in o){const B=o[G];for(const ne in B){const z=B[ne];for(const H in z)v(z[H].object),delete z[H];delete B[ne]}delete o[G]}}function A(G){if(o[G.id]===void 0)return;const B=o[G.id];for(const ne in B){const z=B[ne];for(const H in z)v(z[H].object),delete z[H];delete B[ne]}delete o[G.id]}function I(G){for(const B in o){const ne=o[B];if(ne[G.id]===void 0)continue;const z=ne[G.id];for(const H in z)v(z[H].object),delete z[H];delete ne[G.id]}}function Q(){D(),u=!0,c!==l&&(c=l,_(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:m,enableAttribute:x,disableUnusedAttributes:E}}function cm(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let f,_;if(r)f=n,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](s,c,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function um(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),m=f>0,x=a||e.has("OES_texture_float"),y=m&&x,E=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:m,floatFragmentTextures:x,floatVertexTextures:y,maxSamples:E}}function fm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Di,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const _=d.length!==0||f||i!==0||r;return r=f,i=d.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,_){const v=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const S=s?0:i,m=S*4;let x=h.clippingState||null;l.value=x,x=u(v,f,m,_);for(let y=0;y!==m;++y)x[y]=t[y];h.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,_,v){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const h=_+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let m=0,x=_;m!==g;++m,x+=4)a.copy(d[m]).applyMatrix4(S,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function hm(n){let e=new WeakMap;function t(a,o){return o===vo?a.mapping=xr:o===Mo&&(a.mapping=br),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===vo||o===Mo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Rh(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zu extends Fu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mr=4,fc=[.125,.215,.35,.446,.526,.582],Ii=20,lo=new zu,hc=new tt;let co=null;const Ui=(1+Math.sqrt(5))/2,_r=1/Ui,dc=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Ui,_r),new W(0,Ui,-_r),new W(_r,0,Ui),new W(-_r,0,Ui),new W(Ui,_r,0),new W(-Ui,_r,0)];class pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){co=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(co),e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),co=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:yr,format:xn,colorSpace:Cn,depthBuffer:!1},r=mc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(s)),this._blurMaterial=pm(s,e,t)}return r}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,i,r){const o=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(hc),u.toneMapping=An,u.autoClear=!1;const _=new Lu({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),v=new Tn(new Rr,_);let g=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,g=!0):(_.color.copy(hc),g=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):S===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const m=this._cubeSize;Vs(r,S*m,h>2?m:0,m,m),u.setRenderTarget(r),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xr||e.mapping===br;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Tn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,lo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dc[(r-1)%dc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Tn(this._lodPlanes[r],c),f=c.uniforms,_=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Ii-1),g=s/v,p=isFinite(s)?1+Math.floor(u*g):Ii;p>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);const h=[];let S=0;for(let R=0;R<Ii;++R){const P=R/g,M=Math.exp(-P*P/2);h.push(M),R===0?S+=M:R<p&&(S+=2*M)}for(let R=0;R<h.length;R++)h[R]=h[R]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:m}=this;f.dTheta.value=v,f.mipInt.value=m-i;const x=this._sizeLods[r],y=3*x*(r>m-Mr?r-m+Mr:0),E=4*(this._cubeSize-x);Vs(t,y,E,3*x,2*x),l.setRenderTarget(t),l.render(d,lo)}}function dm(n){const e=[],t=[],i=[];let r=n;const s=n-Mr+1+fc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Mr?l=fc[a-n+Mr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],_=6,v=6,g=3,p=2,h=1,S=new Float32Array(g*v*_),m=new Float32Array(p*v*_),x=new Float32Array(h*v*_);for(let E=0;E<_;E++){const R=E%3*2/3-1,P=E>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];S.set(M,g*v*E),m.set(f,p*v*E);const A=[E,E,E,E,E,E];x.set(A,h*v*E)}const y=new wi;y.setAttribute("position",new Rn(S,g)),y.setAttribute("uv",new Rn(m,p)),y.setAttribute("faceIndex",new Rn(x,h)),e.push(y),r>Mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mc(n,e,t){const i=new bi(n,e,t);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pm(n,e,t){const i=new Float32Array(Ii),r=new W(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function _c(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function gc(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function mm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===vo||l===Mo,u=l===xr||l===br;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new pc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new pc(n));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function _m(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gm(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}f.removeEventListener("dispose",a),delete r[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const _=d.morphAttributes;for(const v in _){const g=_[v];for(let p=0,h=g.length;p<h;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(d){const f=[],_=d.index,v=d.attributes.position;let g=0;if(_!==null){const S=_.array;g=_.version;for(let m=0,x=S.length;m<x;m+=3){const y=S[m+0],E=S[m+1],R=S[m+2];f.push(y,E,E,R,R,y)}}else{const S=v.array;g=v.version;for(let m=0,x=S.length/3-1;m<x;m+=3){const y=m+0,E=m+1,R=m+2;f.push(y,E,E,R,R,y)}}const p=new(Tu(f)?Uu:Du)(f,1);p.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const _=d.index;_!==null&&f.version<_.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function vm(n,e,t,i){const r=i.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,_){n.drawElements(s,_,o,f*l),t.update(_,s,1)}function d(f,_,v){if(v===0)return;let g,p;if(r)g=n,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,_,o,f*l,v),t.update(_,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function Mm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Sm(n,e){return n[0]-e[0]}function Em(n,e){return Math.abs(e[1])-Math.abs(n[1])}function xm(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(u);if(g===void 0||g.count!==v){let G=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",G)};g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let P=0;S===!0&&(P=1),m===!0&&(P=2),x===!0&&(P=3);let M=u.attributes.position.count*P,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const I=new Float32Array(M*A*4*v),Q=new Ru(I,M,A,v);Q.type=Mi,Q.needsUpdate=!0;const D=P*4;for(let B=0;B<v;B++){const ne=y[B],z=E[B],H=R[B],L=M*A*4*B;for(let k=0;k<ne.count;k++){const re=k*D;S===!0&&(a.fromBufferAttribute(ne,k),I[L+re+0]=a.x,I[L+re+1]=a.y,I[L+re+2]=a.z,I[L+re+3]=0),m===!0&&(a.fromBufferAttribute(z,k),I[L+re+4]=a.x,I[L+re+5]=a.y,I[L+re+6]=a.z,I[L+re+7]=0),x===!0&&(a.fromBufferAttribute(H,k),I[L+re+8]=a.x,I[L+re+9]=a.y,I[L+re+10]=a.z,I[L+re+11]=H.itemSize===4?a.w:1)}}g={count:v,texture:Q,size:new nt(M,A)},s.set(u,g),u.addEventListener("dispose",G)}let p=0;for(let S=0;S<f.length;S++)p+=f[S];const h=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",h),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const _=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==_){v=[];for(let m=0;m<_;m++)v[m]=[m,0];i[u.id]=v}for(let m=0;m<_;m++){const x=v[m];x[0]=m,x[1]=f[m]}v.sort(Em);for(let m=0;m<8;m++)m<_&&v[m][1]?(o[m][0]=v[m][0],o[m][1]=v[m][1]):(o[m][0]=Number.MAX_SAFE_INTEGER,o[m][1]=0);o.sort(Sm);const g=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let m=0;m<8;m++){const x=o[m],y=x[0],E=x[1];y!==Number.MAX_SAFE_INTEGER&&E?(g&&u.getAttribute("morphTarget"+m)!==g[y]&&u.setAttribute("morphTarget"+m,g[y]),p&&u.getAttribute("morphNormal"+m)!==p[y]&&u.setAttribute("morphNormal"+m,p[y]),r[m]=E,h+=E):(g&&u.hasAttribute("morphTarget"+m)===!0&&u.deleteAttribute("morphTarget"+m),p&&u.hasAttribute("morphNormal"+m)===!0&&u.deleteAttribute("morphNormal"+m),r[m]=0)}const S=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function bm(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Vu=new Gt,ku=new Ru,Gu=new dh,Hu=new Ou,vc=[],Mc=[],Sc=new Float32Array(16),Ec=new Float32Array(9),xc=new Float32Array(4);function Cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=vc[r];if(s===void 0&&(s=new Float32Array(r),vc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $s(n,e){let t=Mc[e];t===void 0&&(t=new Int32Array(e),Mc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ym(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function wm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Rm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;xc.set(i),n.uniformMatrix2fv(this.addr,!1,xc),Ut(t,i)}}function Cm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;Ec.set(i),n.uniformMatrix3fv(this.addr,!1,Ec),Ut(t,i)}}function Pm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,i))return;Sc.set(i),n.uniformMatrix4fv(this.addr,!1,Sc),Ut(t,i)}}function Lm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Dm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function Um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function Im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function Nm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function Om(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function Bm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function zm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Vu,r)}function Vm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gu,r)}function km(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hu,r)}function Gm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ku,r)}function Hm(n){switch(n){case 5126:return ym;case 35664:return Tm;case 35665:return wm;case 35666:return Am;case 35674:return Rm;case 35675:return Cm;case 35676:return Pm;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Um;case 35669:case 35673:return Im;case 5125:return Nm;case 36294:return Fm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Gm}}function Wm(n,e){n.uniform1fv(this.addr,e)}function Xm(n,e){const t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function jm(n,e){const t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function qm(n,e){const t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ym(n,e){const t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Km(n,e){const t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zm(n,e){const t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jm(n,e){n.uniform1iv(this.addr,e)}function Qm(n,e){n.uniform2iv(this.addr,e)}function $m(n,e){n.uniform3iv(this.addr,e)}function e_(n,e){n.uniform4iv(this.addr,e)}function t_(n,e){n.uniform1uiv(this.addr,e)}function n_(n,e){n.uniform2uiv(this.addr,e)}function i_(n,e){n.uniform3uiv(this.addr,e)}function r_(n,e){n.uniform4uiv(this.addr,e)}function s_(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Vu,s[a])}function a_(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gu,s[a])}function o_(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hu,s[a])}function l_(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ku,s[a])}function c_(n){switch(n){case 5126:return Wm;case 35664:return Xm;case 35665:return jm;case 35666:return qm;case 35674:return Ym;case 35675:return Km;case 35676:return Zm;case 5124:case 35670:return Jm;case 35667:case 35671:return Qm;case 35668:case 35672:return $m;case 35669:case 35673:return e_;case 5125:return t_;case 36294:return n_;case 36295:return i_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return l_}}class u_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Hm(t.type)}}class f_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=c_(t.type)}}class h_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function bc(n,e){n.seq.push(e),n.map[e.id]=e}function d_(n,e,t){const i=n.name,r=i.length;for(uo.lastIndex=0;;){const s=uo.exec(i),a=uo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){bc(t,c===void 0?new u_(o,n,e):new f_(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new h_(o),bc(t,d)),t=d}}}class Ws{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);d_(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function yc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let p_=0;function m_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function __(n){switch(n){case Cn:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Tc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+m_(n.getShaderSource(e),a)}else return r}function g_(n,e){const t=__(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function v_(n,e){let t;switch(e){case Df:t="Linear";break;case Uf:t="Reinhard";break;case If:t="OptimizedCineon";break;case mu:t="ACESFilmic";break;case Nf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function M_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ts).join(`
`)}function S_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function E_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ts(n){return n!==""}function wc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x_=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(n){return n.replace(x_,b_)}function b_(n,e){const t=Ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yo(t)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(n){return n.replace(y_,T_)}function T_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function A_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case br:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function C_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pu:e="ENVMAP_BLENDING_MULTIPLY";break;case Pf:e="ENVMAP_BLENDING_MIX";break;case Lf:e="ENVMAP_BLENDING_ADD";break}return e}function P_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function L_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=w_(t),c=A_(t),u=R_(t),d=C_(t),f=P_(t),_=t.isWebGL2?"":M_(t),v=S_(s),g=r.createProgram();let p,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ts).join(`
`),p.length>0&&(p+=`
`),h=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ts).join(`
`),h.length>0&&(h+=`
`)):(p=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),h=[_,Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Ke.tonemapping_pars_fragment:"",t.toneMapping!==An?v_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.encodings_pars_fragment,g_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),a=yo(a),a=wc(a,t),a=Ac(a,t),o=yo(o),o=wc(o,t),o=Ac(o,t),a=Rc(a),o=Rc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const m=S+p+a,x=S+h+o,y=yc(r,r.VERTEX_SHADER,m),E=yc(r,r.FRAGMENT_SHADER,x);if(r.attachShader(g,y),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(g).trim(),A=r.getShaderInfoLog(y).trim(),I=r.getShaderInfoLog(E).trim();let Q=!0,D=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,y,E);else{const G=Tc(r,y,"vertex"),B=Tc(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+G+`
`+B)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||I==="")&&(D=!1);D&&(this.diagnostics={runnable:Q,programLog:M,vertexShader:{log:A,prefix:p},fragmentShader:{log:I,prefix:h}})}r.deleteShader(y),r.deleteShader(E);let R;this.getUniforms=function(){return R===void 0&&(R=new Ws(r,g)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=E_(r,g)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=E,this}let D_=0;class U_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new I_(e),t.set(e,i)),i}}class I_{constructor(e){this.id=D_++,this.code=e,this.usedTimes=0}}function N_(n,e,t,i,r,s,a){const o=new Do,l=new U_,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,A,I,Q,D){const G=Q.fog,B=D.geometry,ne=M.isMeshStandardMaterial?Q.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||ne),H=z&&z.mapping===Zs?z.image.height:null,L=v[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const k=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=k!==void 0?k.length:0;let N=0;B.morphAttributes.position!==void 0&&(N=1),B.morphAttributes.normal!==void 0&&(N=2),B.morphAttributes.color!==void 0&&(N=3);let K,ie,ge,Me;if(L){const at=yn[L];K=at.vertexShader,ie=at.fragmentShader}else K=M.vertexShader,ie=M.fragmentShader,l.update(M),ge=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const Re=n.getRenderTarget(),fe=D.isInstancedMesh===!0,De=!!M.map,mt=!!M.matcap,We=!!z,O=!!M.aoMap,Et=!!M.lightMap,Le=!!M.bumpMap,Xe=!!M.normalMap,Oe=!!M.displacementMap,rt=!!M.emissiveMap,ke=!!M.metalnessMap,Ve=!!M.roughnessMap,et=M.anisotropy>0,_t=M.clearcoat>0,bt=M.iridescence>0,w=M.sheen>0,b=M.transmission>0,j=et&&!!M.anisotropyMap,se=_t&&!!M.clearcoatMap,oe=_t&&!!M.clearcoatNormalMap,ce=_t&&!!M.clearcoatRoughnessMap,Ce=bt&&!!M.iridescenceMap,me=bt&&!!M.iridescenceThicknessMap,Z=w&&!!M.sheenColorMap,we=w&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,Ue=!!M.specularColorMap,be=!!M.specularIntensityMap,Se=b&&!!M.transmissionMap,je=b&&!!M.thicknessMap,st=!!M.gradientMap,U=!!M.alphaMap,he=M.alphaTest>0,X=!!M.extensions,le=!!B.attributes.uv1,ve=!!B.attributes.uv2,$e=!!B.attributes.uv3;return{isWebGL2:u,shaderID:L,shaderType:M.type,shaderName:M.name,vertexShader:K,fragmentShader:ie,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,instancing:fe,instancingColor:fe&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Cn,map:De,matcap:mt,envMap:We,envMapMode:We&&z.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Et,bumpMap:Le,normalMap:Xe,displacementMap:f&&Oe,emissiveMap:rt,normalMapObjectSpace:Xe&&M.normalMapType===Yf,normalMapTangentSpace:Xe&&M.normalMapType===bu,metalnessMap:ke,roughnessMap:Ve,anisotropy:et,anisotropyMap:j,clearcoat:_t,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:ce,iridescence:bt,iridescenceMap:Ce,iridescenceThicknessMap:me,sheen:w,sheenColorMap:Z,sheenRoughnessMap:we,specularMap:Pe,specularColorMap:Ue,specularIntensityMap:be,transmission:b,transmissionMap:Se,thicknessMap:je,gradientMap:st,opaque:M.transparent===!1&&M.blending===Sr,alphaMap:U,alphaTest:he,combine:M.combine,mapUv:De&&g(M.map.channel),aoMapUv:O&&g(M.aoMap.channel),lightMapUv:Et&&g(M.lightMap.channel),bumpMapUv:Le&&g(M.bumpMap.channel),normalMapUv:Xe&&g(M.normalMap.channel),displacementMapUv:Oe&&g(M.displacementMap.channel),emissiveMapUv:rt&&g(M.emissiveMap.channel),metalnessMapUv:ke&&g(M.metalnessMap.channel),roughnessMapUv:Ve&&g(M.roughnessMap.channel),anisotropyMapUv:j&&g(M.anisotropyMap.channel),clearcoatMapUv:se&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(M.sheenRoughnessMap.channel),specularMapUv:Pe&&g(M.specularMap.channel),specularColorMapUv:Ue&&g(M.specularColorMap.channel),specularIntensityMapUv:be&&g(M.specularIntensityMap.channel),transmissionMapUv:Se&&g(M.transmissionMap.channel),thicknessMapUv:je&&g(M.thicknessMap.channel),alphaMapUv:U&&g(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Xe||et),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:ve,vertexUv3s:$e,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(De||U),fog:!!G,useFog:M.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:N,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:An,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ei,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:X&&M.extensions.derivatives===!0,extensionFragDepth:X&&M.extensions.fragDepth===!0,extensionDrawBuffers:X&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:X&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)A.push(I),A.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(S(A,M),m(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function S(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function m(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),M.push(o.mask)}function x(M){const A=v[M.type];let I;if(A){const Q=yn[A];I=Nu.clone(Q.uniforms)}else I=M.uniforms;return I}function y(M,A){let I;for(let Q=0,D=c.length;Q<D;Q++){const G=c[Q];if(G.cacheKey===A){I=G,++I.usedTimes;break}}return I===void 0&&(I=new L_(n,A,M,s),c.push(I)),I}function E(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:y,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:P}}function F_(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function O_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,_,v,g,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:_,groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=_,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=g,h.group=p),e++,h}function o(d,f,_,v,g,p){const h=a(d,f,_,v,g,p);_.transmission>0?i.push(h):_.transparent===!0?r.push(h):t.push(h)}function l(d,f,_,v,g,p){const h=a(d,f,_,v,g,p);_.transmission>0?i.unshift(h):_.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||O_),i.length>1&&i.sort(f||Pc),r.length>1&&r.sort(f||Pc)}function u(){for(let d=e,f=n.length;d<f;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function B_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Lc,n.set(i,[a])):r>=s.length?(a=new Lc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function z_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new tt};break;case"SpotLight":t={position:new W,direction:new W,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function V_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let k_=0;function G_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function H_(n,e){const t=new z_,i=V_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new W);const s=new W,a=new Tt,o=new Tt;function l(u,d){let f=0,_=0,v=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let g=0,p=0,h=0,S=0,m=0,x=0,y=0,E=0,R=0,P=0;u.sort(G_);const M=d===!0?Math.PI:1;for(let I=0,Q=u.length;I<Q;I++){const D=u[I],G=D.color,B=D.intensity,ne=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=G.r*B*M,_+=G.g*B*M,v+=G.b*B*M;else if(D.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(D.sh.coefficients[H],B);else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const L=D.shadow,k=i.get(D);k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,r.directionalShadow[g]=k,r.directionalShadowMap[g]=z,r.directionalShadowMatrix[g]=D.shadow.matrix,x++}r.directional[g]=H,g++}else if(D.isSpotLight){const H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(G).multiplyScalar(B*M),H.distance=ne,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,r.spot[h]=H;const L=D.shadow;if(D.map&&(r.spotLightMap[R]=D.map,R++,L.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[h]=L.matrix,D.castShadow){const k=i.get(D);k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,r.spotShadow[h]=k,r.spotShadowMap[h]=z,E++}h++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(G).multiplyScalar(B),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),r.rectArea[S]=H,S++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*M),H.distance=D.distance,H.decay=D.decay,D.castShadow){const L=D.shadow,k=i.get(D);k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,k.shadowCameraNear=L.camera.near,k.shadowCameraFar=L.camera.far,r.pointShadow[p]=k,r.pointShadowMap[p]=z,r.pointShadowMatrix[p]=D.shadow.matrix,y++}r.point[p]=H,p++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(B*M),H.groundColor.copy(D.groundColor).multiplyScalar(B*M),r.hemi[m]=H,m++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=_,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==g||A.pointLength!==p||A.spotLength!==h||A.rectAreaLength!==S||A.hemiLength!==m||A.numDirectionalShadows!==x||A.numPointShadows!==y||A.numSpotShadows!==E||A.numSpotMaps!==R)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=S,r.point.length=p,r.hemi.length=m,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=E+R-P,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=P,A.directionalLength=g,A.pointLength=p,A.spotLength=h,A.rectAreaLength=S,A.hemiLength=m,A.numDirectionalShadows=x,A.numPointShadows=y,A.numSpotShadows=E,A.numSpotMaps=R,r.version=k_++)}function c(u,d){let f=0,_=0,v=0,g=0,p=0;const h=d.matrixWorldInverse;for(let S=0,m=u.length;S<m;S++){const x=u[S];if(x.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),f++}else if(x.isSpotLight){const y=r.spot[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(h),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),v++}else if(x.isRectAreaLight){const y=r.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(h),o.identity(),a.copy(x.matrixWorld),a.premultiply(h),o.extractRotation(a),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=r.point[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(h),_++}else if(x.isHemisphereLight){const y=r.hemi[p];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function Dc(n,e){const t=new H_(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function W_(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Dc(n,e),t.set(s,[l])):a>=o.length?(l=new Dc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class X_ extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j_ extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
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
}`;function K_(n,e,t){let i=new Qs;const r=new nt,s=new nt,a=new zt,o=new X_({depthPacking:qf}),l=new j_,c={},u=t.maxTextureSize,d={[xi]:en,[en]:xi,[ei]:ei},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const v=new wi;v.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tn(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let h=this.type;this.render=function(y,E,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const P=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Si),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const Q=h!==$n&&this.type===$n,D=h===$n&&this.type!==$n;for(let G=0,B=y.length;G<B;G++){const ne=y[G],z=ne.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const H=z.getFrameExtents();if(r.multiply(H),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,z.mapSize.y=s.y)),z.map===null||Q===!0||D===!0){const k=this.type!==$n?{minFilter:Kt,magFilter:Kt}:{};z.map!==null&&z.map.dispose(),z.map=new bi(r.x,r.y,k),z.map.texture.name=ne.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const L=z.getViewportCount();for(let k=0;k<L;k++){const re=z.getViewport(k);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),I.viewport(a),z.updateMatrices(ne,k),i=z.getFrustum(),x(E,R,z.camera,ne,this.type)}z.isPointLightShadow!==!0&&this.type===$n&&S(z,R),z.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(P,M,A)};function S(y,E){const R=e.update(g);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,_.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new bi(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(E,null,R,f,g,null),_.uniforms.shadow_pass.value=y.mapPass.texture,_.uniforms.resolution.value=y.mapSize,_.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(E,null,R,_,g,null)}function m(y,E,R,P){let M=null;const A=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)M=A;else if(M=R.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=M.uuid,Q=E.uuid;let D=c[I];D===void 0&&(D={},c[I]=D);let G=D[Q];G===void 0&&(G=M.clone(),D[Q]=G),M=G}if(M.visible=E.visible,M.wireframe=E.wireframe,P===$n?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=n.properties.get(M);I.light=R}return M}function x(y,E,R,P,M){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===$n)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const Q=e.update(y),D=y.material;if(Array.isArray(D)){const G=Q.groups;for(let B=0,ne=G.length;B<ne;B++){const z=G[B],H=D[z.materialIndex];if(H&&H.visible){const L=m(y,H,P,M);n.renderBufferDirect(R,null,Q,L,y,z)}}}else if(D.visible){const G=m(y,D,P,M);n.renderBufferDirect(R,null,Q,G,y,null)}}const I=y.children;for(let Q=0,D=I.length;Q<D;Q++)x(I[Q],E,R,P,M)}}function Z_(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const he=new zt;let X=null;const le=new zt(0,0,0,0);return{setMask:function(ve){X!==ve&&!U&&(n.colorMask(ve,ve,ve,ve),X=ve)},setLocked:function(ve){U=ve},setClear:function(ve,$e,Mt,at,Jt){Jt===!0&&(ve*=at,$e*=at,Mt*=at),he.set(ve,$e,Mt,at),le.equals(he)===!1&&(n.clearColor(ve,$e,Mt,at),le.copy(he))},reset:function(){U=!1,X=null,le.set(-1,0,0,0)}}}function s(){let U=!1,he=null,X=null,le=null;return{setTest:function(ve){ve?Re(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ve){he!==ve&&!U&&(n.depthMask(ve),he=ve)},setFunc:function(ve){if(X!==ve){switch(ve){case bf:n.depthFunc(n.NEVER);break;case yf:n.depthFunc(n.ALWAYS);break;case Tf:n.depthFunc(n.LESS);break;case go:n.depthFunc(n.LEQUAL);break;case wf:n.depthFunc(n.EQUAL);break;case Af:n.depthFunc(n.GEQUAL);break;case Rf:n.depthFunc(n.GREATER);break;case Cf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=ve}},setLocked:function(ve){U=ve},setClear:function(ve){le!==ve&&(n.clearDepth(ve),le=ve)},reset:function(){U=!1,he=null,X=null,le=null}}}function a(){let U=!1,he=null,X=null,le=null,ve=null,$e=null,Mt=null,at=null,Jt=null;return{setTest:function(St){U||(St?Re(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(St){he!==St&&!U&&(n.stencilMask(St),he=St)},setFunc:function(St,Rt,Ct){(X!==St||le!==Rt||ve!==Ct)&&(n.stencilFunc(St,Rt,Ct),X=St,le=Rt,ve=Ct)},setOp:function(St,Rt,Ct){($e!==St||Mt!==Rt||at!==Ct)&&(n.stencilOp(St,Rt,Ct),$e=St,Mt=Rt,at=Ct)},setLocked:function(St){U=St},setClear:function(St){Jt!==St&&(n.clearStencil(St),Jt=St)},reset:function(){U=!1,he=null,X=null,le=null,ve=null,$e=null,Mt=null,at=null,Jt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let f={},_={},v=new WeakMap,g=[],p=null,h=!1,S=null,m=null,x=null,y=null,E=null,R=null,P=null,M=!1,A=null,I=null,Q=null,D=null,G=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,z=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(H)[1]),ne=z>=1):H.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ne=z>=2);let L=null,k={};const re=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),K=new zt().fromArray(re),ie=new zt().fromArray(N);function ge(U,he,X,le){const ve=new Uint8Array(4),$e=n.createTexture();n.bindTexture(U,$e),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Mt=0;Mt<X;Mt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(he+Mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return $e}const Me={};Me[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Me[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(n.DEPTH_TEST),l.setFunc(go),Oe(!1),rt(gl),Re(n.CULL_FACE),Le(Si);function Re(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function fe(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function De(U,he){return _[U]!==he?(n.bindFramebuffer(U,he),_[U]=he,i&&(U===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=he),U===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function mt(U,he){let X=g,le=!1;if(U)if(X=v.get(he),X===void 0&&(X=[],v.set(he,X)),U.isWebGLMultipleRenderTargets){const ve=U.texture;if(X.length!==ve.length||X[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,Mt=ve.length;$e<Mt;$e++)X[$e]=n.COLOR_ATTACHMENT0+$e;X.length=ve.length,le=!0}}else X[0]!==n.COLOR_ATTACHMENT0&&(X[0]=n.COLOR_ATTACHMENT0,le=!0);else X[0]!==n.BACK&&(X[0]=n.BACK,le=!0);le&&(t.isWebGL2?n.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function We(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const O={[gr]:n.FUNC_ADD,[hf]:n.FUNC_SUBTRACT,[df]:n.FUNC_REVERSE_SUBTRACT};if(i)O[El]=n.MIN,O[xl]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(O[El]=U.MIN_EXT,O[xl]=U.MAX_EXT)}const Et={[pf]:n.ZERO,[mf]:n.ONE,[_f]:n.SRC_COLOR,[hu]:n.SRC_ALPHA,[xf]:n.SRC_ALPHA_SATURATE,[Sf]:n.DST_COLOR,[vf]:n.DST_ALPHA,[gf]:n.ONE_MINUS_SRC_COLOR,[du]:n.ONE_MINUS_SRC_ALPHA,[Ef]:n.ONE_MINUS_DST_COLOR,[Mf]:n.ONE_MINUS_DST_ALPHA};function Le(U,he,X,le,ve,$e,Mt,at){if(U===Si){h===!0&&(fe(n.BLEND),h=!1);return}if(h===!1&&(Re(n.BLEND),h=!0),U!==ff){if(U!==S||at!==M){if((m!==gr||E!==gr)&&(n.blendEquation(n.FUNC_ADD),m=gr,E=gr),at)switch(U){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vl:n.blendFunc(n.ONE,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,y=null,R=null,P=null,S=U,M=at}return}ve=ve||he,$e=$e||X,Mt=Mt||le,(he!==m||ve!==E)&&(n.blendEquationSeparate(O[he],O[ve]),m=he,E=ve),(X!==x||le!==y||$e!==R||Mt!==P)&&(n.blendFuncSeparate(Et[X],Et[le],Et[$e],Et[Mt]),x=X,y=le,R=$e,P=Mt),S=U,M=!1}function Xe(U,he){U.side===ei?fe(n.CULL_FACE):Re(n.CULL_FACE);let X=U.side===en;he&&(X=!X),Oe(X),U.blending===Sr&&U.transparent===!1?Le(Si):Le(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const le=U.stencilWrite;c.setTest(le),le&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ve(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Re(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(U){A!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),A=U)}function rt(U){U!==cf?(Re(n.CULL_FACE),U!==I&&(U===gl?n.cullFace(n.BACK):U===uf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),I=U}function ke(U){U!==Q&&(ne&&n.lineWidth(U),Q=U)}function Ve(U,he,X){U?(Re(n.POLYGON_OFFSET_FILL),(D!==he||G!==X)&&(n.polygonOffset(he,X),D=he,G=X)):fe(n.POLYGON_OFFSET_FILL)}function et(U){U?Re(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function _t(U){U===void 0&&(U=n.TEXTURE0+B-1),L!==U&&(n.activeTexture(U),L=U)}function bt(U,he,X){X===void 0&&(L===null?X=n.TEXTURE0+B-1:X=L);let le=k[X];le===void 0&&(le={type:void 0,texture:void 0},k[X]=le),(le.type!==U||le.texture!==he)&&(L!==X&&(n.activeTexture(X),L=X),n.bindTexture(U,he||Me[U]),le.type=U,le.texture=he)}function w(){const U=k[L];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function b(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(U){K.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),K.copy(U))}function be(U){ie.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ie.copy(U))}function Se(U,he){let X=d.get(he);X===void 0&&(X=new WeakMap,d.set(he,X));let le=X.get(U);le===void 0&&(le=n.getUniformBlockIndex(he,U.name),X.set(U,le))}function je(U,he){const le=d.get(he).get(U);u.get(he)!==le&&(n.uniformBlockBinding(he,le,U.__bindingPointIndex),u.set(he,le))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},L=null,k={},_={},v=new WeakMap,g=[],p=null,h=!1,S=null,m=null,x=null,y=null,E=null,R=null,P=null,M=!1,A=null,I=null,Q=null,D=null,G=null,K.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Re,disable:fe,bindFramebuffer:De,drawBuffers:mt,useProgram:We,setBlending:Le,setMaterial:Xe,setFlipSided:Oe,setCullFace:rt,setLineWidth:ke,setPolygonOffset:Ve,setScissorTest:et,activeTexture:_t,bindTexture:bt,unbindTexture:w,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:we,texImage3D:Pe,updateUBOMapping:Se,uniformBlockBinding:je,texStorage2D:me,texStorage3D:Z,texSubImage2D:se,texSubImage3D:oe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ce,scissor:Ue,viewport:be,reset:st}}function J_(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,b){return h?new OffscreenCanvas(w,b):rs("canvas")}function m(w,b,j,se){let oe=1;if((w.width>se||w.height>se)&&(oe=se/Math.max(w.width,w.height)),oe<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ce=b?bo:Math.floor,Ce=ce(oe*w.width),me=ce(oe*w.height);g===void 0&&(g=S(Ce,me));const Z=j?S(Ce,me):g;return Z.width=Ce,Z.height=me,Z.getContext("2d").drawImage(w,0,0,Ce,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ce+"x"+me+")."),Z}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function x(w){return Kl(w.width)&&Kl(w.height)}function y(w){return o?!1:w.wrapS!==En||w.wrapT!==En||w.minFilter!==Kt&&w.minFilter!==cn}function E(w,b){return w.generateMipmaps&&b&&w.minFilter!==Kt&&w.minFilter!==cn}function R(w){n.generateMipmap(w)}function P(w,b,j,se,oe=!1){if(o===!1)return b;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce=b;return b===n.RED&&(j===n.FLOAT&&(ce=n.R32F),j===n.HALF_FLOAT&&(ce=n.R16F),j===n.UNSIGNED_BYTE&&(ce=n.R8)),b===n.RG&&(j===n.FLOAT&&(ce=n.RG32F),j===n.HALF_FLOAT&&(ce=n.RG16F),j===n.UNSIGNED_BYTE&&(ce=n.RG8)),b===n.RGBA&&(j===n.FLOAT&&(ce=n.RGBA32F),j===n.HALF_FLOAT&&(ce=n.RGBA16F),j===n.UNSIGNED_BYTE&&(ce=se===Ye&&oe===!1?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)),(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(w,b,j){return E(w,j)===!0||w.isFramebufferTexture&&w.minFilter!==Kt&&w.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function A(w){return w===Kt||w===bl||w===Fa?n.NEAREST:n.LINEAR}function I(w){const b=w.target;b.removeEventListener("dispose",I),D(b),b.isVideoTexture&&v.delete(b)}function Q(w){const b=w.target;b.removeEventListener("dispose",Q),B(b)}function D(w){const b=i.get(w);if(b.__webglInit===void 0)return;const j=w.source,se=p.get(j);if(se){const oe=se[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&G(w),Object.keys(se).length===0&&p.delete(j)}i.remove(w)}function G(w){const b=i.get(w);n.deleteTexture(b.__webglTexture);const j=w.source,se=p.get(j);delete se[b.__cacheKey],a.memory.textures--}function B(w){const b=w.texture,j=i.get(w),se=i.get(b);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)n.deleteFramebuffer(j.__webglFramebuffer[oe]),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[oe]);else{if(n.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let oe=0;oe<j.__webglColorRenderbuffer.length;oe++)j.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[oe]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let oe=0,ce=b.length;oe<ce;oe++){const Ce=i.get(b[oe]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),a.memory.textures--),i.remove(b[oe])}i.remove(b),i.remove(w)}let ne=0;function z(){ne=0}function H(){const w=ne;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),ne+=1,w}function L(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function k(w,b){const j=i.get(w);if(w.isVideoTexture&&_t(w),w.isRenderTargetTexture===!1&&w.version>0&&j.__version!==w.version){const se=w.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(j,w,b);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+b)}function re(w,b){const j=i.get(w);if(w.version>0&&j.__version!==w.version){De(j,w,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+b)}function N(w,b){const j=i.get(w);if(w.version>0&&j.__version!==w.version){De(j,w,b);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+b)}function K(w,b){const j=i.get(w);if(w.version>0&&j.__version!==w.version){mt(j,w,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+b)}const ie={[So]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},ge={[Kt]:n.NEAREST,[bl]:n.NEAREST_MIPMAP_NEAREST,[Fa]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Ff]:n.LINEAR_MIPMAP_NEAREST,[is]:n.LINEAR_MIPMAP_LINEAR},Me={[Zf]:n.NEVER,[ih]:n.ALWAYS,[Jf]:n.LESS,[$f]:n.LEQUAL,[Qf]:n.EQUAL,[nh]:n.GEQUAL,[eh]:n.GREATER,[th]:n.NOTEQUAL};function Re(w,b,j){if(j?(n.texParameteri(w,n.TEXTURE_WRAP_S,ie[b.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ie[b.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ie[b.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ge[b.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ge[b.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==En||b.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,A(b.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,A(b.minFilter)),b.minFilter!==Kt&&b.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Kt||b.minFilter!==Fa&&b.minFilter!==is||b.type===Mi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===yr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(w,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function fe(w,b){let j=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",I));const se=b.source;let oe=p.get(se);oe===void 0&&(oe={},p.set(se,oe));const ce=L(b);if(ce!==w.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),oe[ce].usedTimes++;const Ce=oe[w.__cacheKey];Ce!==void 0&&(oe[w.__cacheKey].usedTimes--,Ce.usedTimes===0&&G(b)),w.__cacheKey=ce,w.__webglTexture=oe[ce].texture}return j}function De(w,b,j){let se=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=n.TEXTURE_3D);const oe=fe(w,b),ce=b.source;t.bindTexture(se,w.__webglTexture,n.TEXTURE0+j);const Ce=i.get(ce);if(ce.version!==Ce.__version||oe===!0){t.activeTexture(n.TEXTURE0+j),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const me=y(b)&&x(b.image)===!1;let Z=m(b.image,me,!1,u);Z=bt(b,Z);const we=x(Z)||o,Pe=s.convert(b.format,b.colorSpace);let Ue=s.convert(b.type),be=P(b.internalFormat,Pe,Ue,b.colorSpace);Re(se,b,we);let Se;const je=b.mipmaps,st=o&&b.isVideoTexture!==!0,U=Ce.__version===void 0||oe===!0,he=M(b,Z,we);if(b.isDepthTexture)be=n.DEPTH_COMPONENT,o?b.type===Mi?be=n.DEPTH_COMPONENT32F:b.type===vi?be=n.DEPTH_COMPONENT24:b.type===Oi?be=n.DEPTH24_STENCIL8:be=n.DEPTH_COMPONENT16:b.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Bi&&be===n.DEPTH_COMPONENT&&b.type!==Co&&b.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=vi,Ue=s.convert(b.type)),b.format===Tr&&be===n.DEPTH_COMPONENT&&(be=n.DEPTH_STENCIL,b.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Oi,Ue=s.convert(b.type))),U&&(st?t.texStorage2D(n.TEXTURE_2D,1,be,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,be,Z.width,Z.height,0,Pe,Ue,null));else if(b.isDataTexture)if(je.length>0&&we){st&&U&&t.texStorage2D(n.TEXTURE_2D,he,be,je[0].width,je[0].height);for(let X=0,le=je.length;X<le;X++)Se=je[X],st?t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Pe,Ue,Se.data):t.texImage2D(n.TEXTURE_2D,X,be,Se.width,Se.height,0,Pe,Ue,Se.data);b.generateMipmaps=!1}else st?(U&&t.texStorage2D(n.TEXTURE_2D,he,be,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,Pe,Ue,Z.data)):t.texImage2D(n.TEXTURE_2D,0,be,Z.width,Z.height,0,Pe,Ue,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){st&&U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,be,je[0].width,je[0].height,Z.depth);for(let X=0,le=je.length;X<le;X++)Se=je[X],b.format!==xn?Pe!==null?st?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,Z.depth,Pe,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,be,Se.width,Se.height,Z.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Se.width,Se.height,Z.depth,Pe,Ue,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,be,Se.width,Se.height,Z.depth,0,Pe,Ue,Se.data)}else{st&&U&&t.texStorage2D(n.TEXTURE_2D,he,be,je[0].width,je[0].height);for(let X=0,le=je.length;X<le;X++)Se=je[X],b.format!==xn?Pe!==null?st?t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Pe,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,X,be,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se.width,Se.height,Pe,Ue,Se.data):t.texImage2D(n.TEXTURE_2D,X,be,Se.width,Se.height,0,Pe,Ue,Se.data)}else if(b.isDataArrayTexture)st?(U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,be,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Pe,Ue,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Z.width,Z.height,Z.depth,0,Pe,Ue,Z.data);else if(b.isData3DTexture)st?(U&&t.texStorage3D(n.TEXTURE_3D,he,be,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Pe,Ue,Z.data)):t.texImage3D(n.TEXTURE_3D,0,be,Z.width,Z.height,Z.depth,0,Pe,Ue,Z.data);else if(b.isFramebufferTexture){if(U)if(st)t.texStorage2D(n.TEXTURE_2D,he,be,Z.width,Z.height);else{let X=Z.width,le=Z.height;for(let ve=0;ve<he;ve++)t.texImage2D(n.TEXTURE_2D,ve,be,X,le,0,Pe,Ue,null),X>>=1,le>>=1}}else if(je.length>0&&we){st&&U&&t.texStorage2D(n.TEXTURE_2D,he,be,je[0].width,je[0].height);for(let X=0,le=je.length;X<le;X++)Se=je[X],st?t.texSubImage2D(n.TEXTURE_2D,X,0,0,Pe,Ue,Se):t.texImage2D(n.TEXTURE_2D,X,be,Pe,Ue,Se);b.generateMipmaps=!1}else st?(U&&t.texStorage2D(n.TEXTURE_2D,he,be,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ue,Z)):t.texImage2D(n.TEXTURE_2D,0,be,Pe,Ue,Z);E(b,we)&&R(se),Ce.__version=ce.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function mt(w,b,j){if(b.image.length!==6)return;const se=fe(w,b),oe=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+j);const ce=i.get(oe);if(oe.version!==ce.__version||se===!0){t.activeTexture(n.TEXTURE0+j),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,Z=[];for(let X=0;X<6;X++)!Ce&&!me?Z[X]=m(b.image[X],!1,!0,c):Z[X]=me?b.image[X].image:b.image[X],Z[X]=bt(b,Z[X]);const we=Z[0],Pe=x(we)||o,Ue=s.convert(b.format,b.colorSpace),be=s.convert(b.type),Se=P(b.internalFormat,Ue,be,b.colorSpace),je=o&&b.isVideoTexture!==!0,st=ce.__version===void 0||se===!0;let U=M(b,we,Pe);Re(n.TEXTURE_CUBE_MAP,b,Pe);let he;if(Ce){je&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Se,we.width,we.height);for(let X=0;X<6;X++){he=Z[X].mipmaps;for(let le=0;le<he.length;le++){const ve=he[le];b.format!==xn?Ue!==null?je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,0,0,ve.width,ve.height,Ue,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,0,0,ve.width,ve.height,Ue,be,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le,Se,ve.width,ve.height,0,Ue,be,ve.data)}}}else{he=b.mipmaps,je&&st&&(he.length>0&&U++,t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Se,Z[0].width,Z[0].height));for(let X=0;X<6;X++)if(me){je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Z[X].width,Z[X].height,Ue,be,Z[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Se,Z[X].width,Z[X].height,0,Ue,be,Z[X].data);for(let le=0;le<he.length;le++){const $e=he[le].image[X].image;je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,0,0,$e.width,$e.height,Ue,be,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,Se,$e.width,$e.height,0,Ue,be,$e.data)}}else{je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ue,be,Z[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Se,Ue,be,Z[X]);for(let le=0;le<he.length;le++){const ve=he[le];je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,0,0,Ue,be,ve.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,le+1,Se,Ue,be,ve.image[X])}}}E(b,Pe)&&R(n.TEXTURE_CUBE_MAP),ce.__version=oe.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function We(w,b,j,se,oe){const ce=s.convert(j.format,j.colorSpace),Ce=s.convert(j.type),me=P(j.internalFormat,ce,Ce,j.colorSpace);i.get(b).__hasExternalTextures||(oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,me,b.width,b.height,b.depth,0,ce,Ce,null):t.texImage2D(oe,0,me,b.width,b.height,0,ce,Ce,null)),t.bindFramebuffer(n.FRAMEBUFFER,w),et(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,oe,i.get(j).__webglTexture,0,Ve(b)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,oe,i.get(j).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(w,b,j){if(n.bindRenderbuffer(n.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let se=n.DEPTH_COMPONENT16;if(j||et(b)){const oe=b.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Mi?se=n.DEPTH_COMPONENT32F:oe.type===vi&&(se=n.DEPTH_COMPONENT24));const ce=Ve(b);et(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,se,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,se,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){const se=Ve(b);j&&et(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,b.width,b.height):et(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const se=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let oe=0;oe<se.length;oe++){const ce=se[oe],Ce=s.convert(ce.format,ce.colorSpace),me=s.convert(ce.type),Z=P(ce.internalFormat,Ce,me,ce.colorSpace),we=Ve(b);j&&et(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Z,b.width,b.height):et(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Z,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Z,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const se=i.get(b.depthTexture).__webglTexture,oe=Ve(b);if(b.depthTexture.format===Bi)et(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(b.depthTexture.format===Tr)et(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Le(w){const b=i.get(w),j=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Et(b.__webglFramebuffer,w)}else if(j){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]=n.createRenderbuffer(),O(b.__webglDepthbuffer[se],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),O(b.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(w,b,j){const se=i.get(w);b!==void 0&&We(se.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),j!==void 0&&Le(w)}function Oe(w){const b=w.texture,j=i.get(w),se=i.get(b);w.addEventListener("dispose",Q),w.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=b.version,a.memory.textures++);const oe=w.isWebGLCubeRenderTarget===!0,ce=w.isWebGLMultipleRenderTargets===!0,Ce=x(w)||o;if(oe){j.__webglFramebuffer=[];for(let me=0;me<6;me++)j.__webglFramebuffer[me]=n.createFramebuffer()}else{if(j.__webglFramebuffer=n.createFramebuffer(),ce)if(r.drawBuffers){const me=w.texture;for(let Z=0,we=me.length;Z<we;Z++){const Pe=i.get(me[Z]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&et(w)===!1){const me=ce?b:[b];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Z=0;Z<me.length;Z++){const we=me[Z];j.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Z]);const Pe=s.convert(we.format,we.colorSpace),Ue=s.convert(we.type),be=P(we.internalFormat,Pe,Ue,we.colorSpace,w.isXRRenderTarget===!0),Se=Ve(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,be,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,j.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),O(j.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),Re(n.TEXTURE_CUBE_MAP,b,Ce);for(let me=0;me<6;me++)We(j.__webglFramebuffer[me],w,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me);E(b,Ce)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const me=w.texture;for(let Z=0,we=me.length;Z<we;Z++){const Pe=me[Z],Ue=i.get(Pe);t.bindTexture(n.TEXTURE_2D,Ue.__webglTexture),Re(n.TEXTURE_2D,Pe,Ce),We(j.__webglFramebuffer,w,Pe,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D),E(Pe,Ce)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?me=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,se.__webglTexture),Re(me,b,Ce),We(j.__webglFramebuffer,w,b,n.COLOR_ATTACHMENT0,me),E(b,Ce)&&R(me),t.unbindTexture()}w.depthBuffer&&Le(w)}function rt(w){const b=x(w)||o,j=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0,oe=j.length;se<oe;se++){const ce=j[se];if(E(ce,b)){const Ce=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(ce).__webglTexture;t.bindTexture(Ce,me),R(Ce),t.unbindTexture()}}}function ke(w){if(o&&w.samples>0&&et(w)===!1){const b=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],j=w.width,se=w.height;let oe=n.COLOR_BUFFER_BIT;const ce=[],Ce=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(w),Z=w.isWebGLMultipleRenderTargets===!0;if(Z)for(let we=0;we<b.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let we=0;we<b.length;we++){ce.push(n.COLOR_ATTACHMENT0+we),w.depthBuffer&&ce.push(Ce);const Pe=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Pe===!1&&(w.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),Z&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[we]),Pe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ce]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ce])),Z){const Ue=i.get(b[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,j,se,0,0,j,se,oe,n.NEAREST),_&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let we=0;we<b.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,me.__webglColorRenderbuffer[we]);const Pe=i.get(b[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Ve(w){return Math.min(d,w.samples)}function et(w){const b=i.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function _t(w){const b=a.render.frame;v.get(w)!==b&&(v.set(w,b),w.update())}function bt(w,b){const j=w.colorSpace,se=w.format,oe=w.type;return w.isCompressedTexture===!0||w.format===xo||j!==Cn&&j!==zi&&(j===Ye?o===!1?e.has("EXT_sRGB")===!0&&se===xn?(w.format=xo,w.minFilter=cn,w.generateMipmaps=!1):b=wu.sRGBToLinear(b):(se!==xn||oe!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=k,this.setTexture2DArray=re,this.setTexture3D=N,this.setTextureCube=K,this.rebindTextures=Xe,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=We,this.useMultisampledRTT=et}function Q_(n,e,t){const i=t.isWebGL2;function r(s,a=zi){let o;if(s===Ei)return n.UNSIGNED_BYTE;if(s===vu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Mu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Of)return n.BYTE;if(s===Bf)return n.SHORT;if(s===Co)return n.UNSIGNED_SHORT;if(s===gu)return n.INT;if(s===vi)return n.UNSIGNED_INT;if(s===Mi)return n.FLOAT;if(s===yr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===zf)return n.ALPHA;if(s===xn)return n.RGBA;if(s===Vf)return n.LUMINANCE;if(s===kf)return n.LUMINANCE_ALPHA;if(s===Bi)return n.DEPTH_COMPONENT;if(s===Tr)return n.DEPTH_STENCIL;if(s===xo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Gf)return n.RED;if(s===Su)return n.RED_INTEGER;if(s===Hf)return n.RG;if(s===Eu)return n.RG_INTEGER;if(s===xu)return n.RGBA_INTEGER;if(s===Oa||s===Ba||s===za||s===Va)if(a===Ye)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Oa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Oa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ba)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===za)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yl||s===Tl||s===wl||s===Al)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===yl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Al)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rl||s===Cl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Rl)return a===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Cl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pl||s===Ll||s===Dl||s===Ul||s===Il||s===Nl||s===Fl||s===Ol||s===Bl||s===zl||s===Vl||s===kl||s===Gl||s===Hl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Pl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ll)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ul)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Il)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ol)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hl)return a===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ka)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ka)return a===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Xf||s===Wl||s===Xl||s===jl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ka)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Wl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class $_ extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ks extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),_=.02,v=.005;c.inputState.pinching&&f>_+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=_-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class tg extends Gt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Bi,u!==Bi&&u!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Bi&&(i=vi),i===void 0&&u===Tr&&(i=Oi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ng extends Ar{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,_=null,v=null;const g=t.getContextAttributes();let p=null,h=null;const S=[],m=[];let x=null;const y=new $t;y.layers.enable(1),y.viewport=new zt;const E=new $t;E.layers.enable(2),E.viewport=new zt;const R=[y,E],P=new $_;P.layers.enable(1),P.layers.enable(2);let M=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(N){x=N},this.getController=function(N){let K=S[N];return K===void 0&&(K=new fo,S[N]=K),K.getTargetRaySpace()},this.getControllerGrip=function(N){let K=S[N];return K===void 0&&(K=new fo,S[N]=K),K.getGripSpace()},this.getHand=function(N){let K=S[N];return K===void 0&&(K=new fo,S[N]=K),K.getHandSpace()};function I(N){const K=m.indexOf(N.inputSource);if(K===-1)return;const ie=S[K];ie!==void 0&&(ie.update(N.inputSource,N.frame,c||a),ie.dispatchEvent({type:N.type,data:N.inputSource}))}function Q(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",D);for(let N=0;N<S.length;N++){const K=m[N];K!==null&&(m[N]=null,S[N].disconnect(K))}M=null,A=null,e.setRenderTarget(p),_=null,f=null,d=null,r=null,h=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:_}),h=new bi(_.framebufferWidth,_.framebufferHeight,{format:xn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ie=null,ge=null;g.depth&&(ge=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Tr:Bi,ie=g.stencil?Oi:vi);const Me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Me),r.updateRenderState({layers:[f]}),h=new bi(f.textureWidth,f.textureHeight,{format:xn,type:Ei,depthTexture:new tg(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Re=e.properties.get(h);Re.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(N){for(let K=0;K<N.removed.length;K++){const ie=N.removed[K],ge=m.indexOf(ie);ge>=0&&(m[ge]=null,S[ge].disconnect(ie))}for(let K=0;K<N.added.length;K++){const ie=N.added[K];let ge=m.indexOf(ie);if(ge===-1){for(let Re=0;Re<S.length;Re++)if(Re>=m.length){m.push(ie),ge=Re;break}else if(m[Re]===null){m[Re]=ie,ge=Re;break}if(ge===-1)break}const Me=S[ge];Me&&Me.connect(ie)}}const G=new W,B=new W;function ne(N,K,ie){G.setFromMatrixPosition(K.matrixWorld),B.setFromMatrixPosition(ie.matrixWorld);const ge=G.distanceTo(B),Me=K.projectionMatrix.elements,Re=ie.projectionMatrix.elements,fe=Me[14]/(Me[10]-1),De=Me[14]/(Me[10]+1),mt=(Me[9]+1)/Me[5],We=(Me[9]-1)/Me[5],O=(Me[8]-1)/Me[0],Et=(Re[8]+1)/Re[0],Le=fe*O,Xe=fe*Et,Oe=ge/(-O+Et),rt=Oe*-O;K.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(rt),N.translateZ(Oe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const ke=fe+Oe,Ve=De+Oe,et=Le-rt,_t=Xe+(ge-rt),bt=mt*De/Ve*ke,w=We*De/Ve*ke;N.projectionMatrix.makePerspective(et,_t,bt,w,ke,Ve),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function z(N,K){K===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(K.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCameraXR=function(N){if(r===null)return N;x&&(N=x),P.near=E.near=y.near=N.near,P.far=E.far=y.far=N.far,(M!==P.near||A!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),M=P.near,A=P.far);const K=N.parent,ie=P.cameras;z(P,K);for(let ge=0;ge<ie.length;ge++)z(ie[ge],K);return ie.length===2?ne(P,y,E):P.projectionMatrix.copy(y.projectionMatrix),x&&H(P,K),P};function H(N,K){const ie=x;K===null?ie.matrix.copy(N.matrixWorld):(ie.matrix.copy(K.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(N.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0);const ge=ie.children;for(let Me=0,Re=ge.length;Me<Re;Me++)ge[Me].updateMatrixWorld(!0);ie.projectionMatrix.copy(N.projectionMatrix),ie.projectionMatrixInverse.copy(N.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ys*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=N)};let L=null;function k(N,K){if(u=K.getViewerPose(c||a),v=K,u!==null){const ie=u.views;_!==null&&(e.setRenderTargetFramebuffer(h,_.framebuffer),e.setRenderTarget(h));let ge=!1;ie.length!==P.cameras.length&&(P.cameras.length=0,ge=!0);for(let Me=0;Me<ie.length;Me++){const Re=ie[Me];let fe=null;if(_!==null)fe=_.getViewport(Re);else{const mt=d.getViewSubImage(f,Re);fe=mt.viewport,Me===0&&(e.setRenderTargetTextures(h,mt.colorTexture,f.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(h))}let De=R[Me];De===void 0&&(De=new $t,De.layers.enable(Me),De.viewport=new zt,R[Me]=De),De.matrix.fromArray(Re.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Re.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(fe.x,fe.y,fe.width,fe.height),Me===0&&(P.matrix.copy(De.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ge===!0&&P.cameras.push(De)}}for(let ie=0;ie<S.length;ie++){const ge=m[ie],Me=S[ie];ge!==null&&Me!==void 0&&Me.update(ge,K,c||a)}L&&L(N,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const re=new Bu;re.setAnimationLoop(k),this.setAnimationLoop=function(N){L=N},this.dispose=function(){}}}function ig(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Iu(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,S,m,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&_(p,h,x)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),g(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,S,m):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===en&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===en&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const m=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*m,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,S,m){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=m*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function _(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===en&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rg(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,m){const x=m.program;i.uniformBlockBinding(S,x)}function c(S,m){let x=r[S.id];x===void 0&&(v(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",p));const y=m.program;i.updateUBOMapping(S,y);const E=e.render.frame;s[S.id]!==E&&(f(S),s[S.id]=E)}function u(S){const m=d();S.__bindingPointIndex=m;const x=n.createBuffer(),y=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,y,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,m,x),x}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const m=r[S.id],x=S.uniforms,y=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,m);for(let E=0,R=x.length;E<R;E++){const P=x[E];if(_(P,E,y)===!0){const M=P.__offset,A=Array.isArray(P.value)?P.value:[P.value];let I=0;for(let Q=0;Q<A.length;Q++){const D=A[Q],G=g(D);typeof D=="number"?(P.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,M+I,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=D.elements[0],P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=D.elements[0],P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=D.elements[0]):(D.toArray(P.__data,I),I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,P.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(S,m,x){const y=S.value;if(x[m]===void 0){if(typeof y=="number")x[m]=y;else{const E=Array.isArray(y)?y:[y],R=[];for(let P=0;P<E.length;P++)R.push(E[P].clone());x[m]=R}return!0}else if(typeof y=="number"){if(x[m]!==y)return x[m]=y,!0}else{const E=Array.isArray(x[m])?x[m]:[x[m]],R=Array.isArray(y)?y:[y];for(let P=0;P<E.length;P++){const M=E[P];if(M.equals(R[P])===!1)return M.copy(R[P]),!0}}return!1}function v(S){const m=S.uniforms;let x=0;const y=16;let E=0;for(let R=0,P=m.length;R<P;R++){const M=m[R],A={boundary:0,storage:0},I=Array.isArray(M.value)?M.value:[M.value];for(let Q=0,D=I.length;Q<D;Q++){const G=I[Q],B=g(G);A.boundary+=B.boundary,A.storage+=B.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,R>0){E=x%y;const Q=y-E;E!==0&&Q-A.boundary<0&&(x+=y-E,M.__offset=x)}x+=A.storage}return E=x%y,E>0&&(x+=y-E),S.__size=x,S.__cache={},this}function g(S){const m={boundary:0,storage:0};return typeof S=="number"?(m.boundary=4,m.storage=4):S.isVector2?(m.boundary=8,m.storage=8):S.isVector3||S.isColor?(m.boundary=16,m.storage=12):S.isVector4?(m.boundary=16,m.storage=16):S.isMatrix3?(m.boundary=48,m.storage=48):S.isMatrix4?(m.boundary=64,m.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),m}function p(S){const m=S.target;m.removeEventListener("dispose",p);const x=a.indexOf(m.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function h(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}function sg(){const n=rs("canvas");return n.style.display="block",n}class Wu{constructor(e={}){const{canvas:t=sg(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const h=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ye,this.useLegacyLights=!0,this.toneMapping=An,this.toneMappingExposure=1;const m=this;let x=!1,y=0,E=0,R=null,P=-1,M=null;const A=new zt,I=new zt;let Q=null;const D=new tt(0);let G=0,B=t.width,ne=t.height,z=1,H=null,L=null;const k=new zt(0,0,B,ne),re=new zt(0,0,B,ne);let N=!1;const K=new Qs;let ie=!1,ge=!1,Me=null;const Re=new Tt,fe=new nt,De=new W,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return R===null?z:1}let O=i;function Et(T,V){for(let q=0;q<T.length;q++){const F=T[q],Y=t.getContext(F,V);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",le,!1),O===null){const V=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&V.shift(),O=Et(V,T),O===null)throw Et(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Le,Xe,Oe,rt,ke,Ve,et,_t,bt,w,b,j,se,oe,ce,Ce,me,Z,we,Pe,Ue,be,Se,je;function st(){Le=new _m(O),Xe=new um(O,Le,e),Le.init(Xe),be=new Q_(O,Le,Xe),Oe=new Z_(O,Le,Xe),rt=new Mm(O),ke=new F_,Ve=new J_(O,Le,Oe,ke,Xe,be,rt),et=new hm(m),_t=new mm(m),bt=new Lh(O,Xe),Se=new lm(O,Le,bt,Xe),w=new gm(O,bt,rt,Se),b=new bm(O,w,bt,rt),we=new xm(O,Xe,Ve),Ce=new fm(ke),j=new N_(m,et,_t,Le,Xe,Se,Ce),se=new ig(m,ke),oe=new B_,ce=new W_(Le,Xe),Z=new om(m,et,_t,Oe,b,f,l),me=new K_(m,b,Xe),je=new rg(O,rt,Xe,Oe),Pe=new cm(O,Le,rt,Xe),Ue=new vm(O,Le,rt,Xe),rt.programs=j.programs,m.capabilities=Xe,m.extensions=Le,m.properties=ke,m.renderLists=oe,m.shadowMap=me,m.state=Oe,m.info=rt}st();const U=new ng(m,O);this.xr=U,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(B,ne,!1))},this.getSize=function(T){return T.set(B,ne)},this.setSize=function(T,V,q=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,ne=V,t.width=Math.floor(T*z),t.height=Math.floor(V*z),q===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(B*z,ne*z).floor()},this.setDrawingBufferSize=function(T,V,q){B=T,ne=V,z=q,t.width=Math.floor(T*q),t.height=Math.floor(V*q),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(k)},this.setViewport=function(T,V,q,F){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,V,q,F),Oe.viewport(A.copy(k).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,V,q,F){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,V,q,F),Oe.scissor(I.copy(re).multiplyScalar(z).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(T){Oe.setScissorTest(N=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(T=!0,V=!0,q=!0){let F=0;if(T){let Y=!1;if(R!==null){const ye=R.texture.format;Y=ye===xu||ye===Eu||ye===Su}if(Y){const ye=R.texture.type,ue=ye===Ei||ye===vi||ye===Co||ye===Oi||ye===vu||ye===Mu,Ne=Z.getClearColor(),Ge=Z.getClearAlpha(),qe=Ne.r,ze=Ne.g,He=Ne.b,ct=ke.get(R).__webglFramebuffer;ue?(_[0]=qe,_[1]=ze,_[2]=He,_[3]=Ge,O.clearBufferuiv(O.COLOR,ct,_)):(v[0]=qe,v[1]=ze,v[2]=He,v[3]=Ge,O.clearBufferiv(O.COLOR,ct,v))}else F|=O.COLOR_BUFFER_BIT}V&&(F|=O.DEPTH_BUFFER_BIT),q&&(F|=O.STENCIL_BUFFER_BIT),O.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",le,!1),oe.dispose(),ce.dispose(),ke.dispose(),et.dispose(),_t.dispose(),b.dispose(),Se.dispose(),je.dispose(),j.dispose(),U.dispose(),U.removeEventListener("sessionstart",St),U.removeEventListener("sessionend",Rt),Me&&(Me.dispose(),Me=null),Ct.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=rt.autoReset,V=me.enabled,q=me.autoUpdate,F=me.needsUpdate,Y=me.type;st(),rt.autoReset=T,me.enabled=V,me.autoUpdate=q,me.needsUpdate=F,me.type=Y}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ve(T){const V=T.target;V.removeEventListener("dispose",ve),$e(V)}function $e(T){Mt(T),ke.remove(T)}function Mt(T){const V=ke.get(T).programs;V!==void 0&&(V.forEach(function(q){j.releaseProgram(q)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,q,F,Y,ye){V===null&&(V=mt);const ue=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=Xi(T,V,q,F,Y);Oe.setMaterial(F,ue);let Ge=q.index,qe=1;F.wireframe===!0&&(Ge=w.getWireframeAttribute(q),qe=2);const ze=q.drawRange,He=q.attributes.position;let ct=ze.start*qe,ut=(ze.start+ze.count)*qe;ye!==null&&(ct=Math.max(ct,ye.start*qe),ut=Math.min(ut,(ye.start+ye.count)*qe)),Ge!==null?(ct=Math.max(ct,0),ut=Math.min(ut,Ge.count)):He!=null&&(ct=Math.max(ct,0),ut=Math.min(ut,He.count));const Xt=ut-ct;if(Xt<0||Xt===1/0)return;Se.setup(Y,F,Ne,q,Ge);let Vt,vt=Pe;if(Ge!==null&&(Vt=bt.get(Ge),vt=Ue,vt.setIndex(Vt)),Y.isMesh)F.wireframe===!0?(Oe.setLineWidth(F.wireframeLinewidth*We()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(Y.isLine){let Ze=F.linewidth;Ze===void 0&&(Ze=1),Oe.setLineWidth(Ze*We()),Y.isLineSegments?vt.setMode(O.LINES):Y.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else Y.isPoints?vt.setMode(O.POINTS):Y.isSprite&&vt.setMode(O.TRIANGLES);if(Y.isInstancedMesh)vt.renderInstances(ct,Xt,Y.count);else if(q.isInstancedBufferGeometry){const Ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,dn=Math.min(q.instanceCount,Ze);vt.renderInstances(ct,Xt,dn)}else vt.render(ct,Xt)},this.compile=function(T,V){function q(F,Y,ye){F.transparent===!0&&F.side===ei&&F.forceSinglePass===!1?(F.side=en,F.needsUpdate=!0,tn(F,Y,ye),F.side=xi,F.needsUpdate=!0,tn(F,Y,ye),F.side=ei):tn(F,Y,ye)}p=ce.get(T),p.init(),S.push(p),T.traverseVisible(function(F){F.isLight&&F.layers.test(V.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(m.useLegacyLights),T.traverse(function(F){const Y=F.material;if(Y)if(Array.isArray(Y))for(let ye=0;ye<Y.length;ye++){const ue=Y[ye];q(ue,T,F)}else q(Y,T,F)}),S.pop(),p=null};let at=null;function Jt(T){at&&at(T)}function St(){Ct.stop()}function Rt(){Ct.start()}const Ct=new Bu;Ct.setAnimationLoop(Jt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(T){at=T,U.setAnimationLoop(T),T===null?Ct.stop():Ct.start()},U.addEventListener("sessionstart",St),U.addEventListener("sessionend",Rt),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(V=U.updateCameraXR(V)),T.isScene===!0&&T.onBeforeRender(m,T,V,R),p=ce.get(T,S.length),p.init(),S.push(p),Re.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(Re),ge=this.localClippingEnabled,ie=Ce.init(this.clippingPlanes,ge),g=oe.get(T,h.length),g.init(),h.push(g),Ai(T,V,0,m.sortObjects),g.finish(),m.sortObjects===!0&&g.sort(H,L),ie===!0&&Ce.beginShadows();const q=p.state.shadowsArray;if(me.render(q,T,V),ie===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,Z.render(g,T),p.setupLights(m.useLegacyLights),V.isArrayCamera){const F=V.cameras;for(let Y=0,ye=F.length;Y<ye;Y++){const ue=F[Y];Gi(g,T,ue,ue.viewport)}}else Gi(g,T,V);R!==null&&(Ve.updateMultisampleRenderTarget(R),Ve.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(m,T,V),Se.resetDefaultState(),P=-1,M=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Ai(T,V,q,F){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){F&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Re);const ue=b.update(T),Ne=T.material;Ne.visible&&g.push(T,ue,Ne,q,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||K.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==rt.render.frame&&(T.skeleton.update(),T.skeleton.frame=rt.render.frame);const ue=b.update(T),Ne=T.material;if(F&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),De.copy(ue.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(Re)),Array.isArray(Ne)){const Ge=ue.groups;for(let qe=0,ze=Ge.length;qe<ze;qe++){const He=Ge[qe],ct=Ne[He.materialIndex];ct&&ct.visible&&g.push(T,ue,ct,q,De.z,He)}}else Ne.visible&&g.push(T,ue,Ne,q,De.z,null)}}const ye=T.children;for(let ue=0,Ne=ye.length;ue<Ne;ue++)Ai(ye[ue],V,q,F)}function Gi(T,V,q,F){const Y=T.opaque,ye=T.transmissive,ue=T.transparent;p.setupLightsView(q),ie===!0&&Ce.setGlobalState(m.clippingPlanes,q),ye.length>0&&un(Y,ye,V,q),F&&Oe.viewport(A.copy(F)),Y.length>0&&fn(Y,V,q),ye.length>0&&fn(ye,V,q),ue.length>0&&fn(ue,V,q),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function un(T,V,q,F){const Y=Xe.isWebGL2;Me===null&&(Me=new bi(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?yr:Ei,minFilter:is,samples:Y&&o===!0?4:0})),m.getDrawingBufferSize(fe),Y?Me.setSize(fe.x,fe.y):Me.setSize(bo(fe.x),bo(fe.y));const ye=m.getRenderTarget();m.setRenderTarget(Me),m.getClearColor(D),G=m.getClearAlpha(),G<1&&m.setClearColor(16777215,.5),m.clear();const ue=m.toneMapping;m.toneMapping=An,fn(T,q,F),Ve.updateMultisampleRenderTarget(Me),Ve.updateRenderTargetMipmap(Me);let Ne=!1;for(let Ge=0,qe=V.length;Ge<qe;Ge++){const ze=V[Ge],He=ze.object,ct=ze.geometry,ut=ze.material,Xt=ze.group;if(ut.side===ei&&He.layers.test(F.layers)){const Vt=ut.side;ut.side=en,ut.needsUpdate=!0,Hi(He,q,F,ct,ut,Xt),ut.side=Vt,ut.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ve.updateMultisampleRenderTarget(Me),Ve.updateRenderTargetMipmap(Me)),m.setRenderTarget(ye),m.setClearColor(D,G),m.toneMapping=ue}function fn(T,V,q){const F=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,ye=T.length;Y<ye;Y++){const ue=T[Y],Ne=ue.object,Ge=ue.geometry,qe=F===null?ue.material:F,ze=ue.group;Ne.layers.test(q.layers)&&Hi(Ne,V,q,Ge,qe,ze)}}function Hi(T,V,q,F,Y,ye){T.onBeforeRender(m,V,q,F,Y,ye),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(m,V,q,F,T,ye),Y.transparent===!0&&Y.side===ei&&Y.forceSinglePass===!1?(Y.side=en,Y.needsUpdate=!0,m.renderBufferDirect(q,V,F,Y,T,ye),Y.side=xi,Y.needsUpdate=!0,m.renderBufferDirect(q,V,F,Y,T,ye),Y.side=ei):m.renderBufferDirect(q,V,F,Y,T,ye),T.onAfterRender(m,V,q,F,Y,ye)}function tn(T,V,q){V.isScene!==!0&&(V=mt);const F=ke.get(T),Y=p.state.lights,ye=p.state.shadowsArray,ue=Y.state.version,Ne=j.getParameters(T,Y.state,ye,V,q),Ge=j.getProgramCacheKey(Ne);let qe=F.programs;F.environment=T.isMeshStandardMaterial?V.environment:null,F.fog=V.fog,F.envMap=(T.isMeshStandardMaterial?_t:et).get(T.envMap||F.environment),qe===void 0&&(T.addEventListener("dispose",ve),qe=new Map,F.programs=qe);let ze=qe.get(Ge);if(ze!==void 0){if(F.currentProgram===ze&&F.lightsStateVersion===ue)return Wi(T,Ne),ze}else Ne.uniforms=j.getUniforms(T),T.onBuild(q,Ne,m),T.onBeforeCompile(Ne,m),ze=j.acquireProgram(Ne,Ge),qe.set(Ge,ze),F.uniforms=Ne.uniforms;const He=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=Ce.uniform),Wi(T,Ne),F.needsLights=hn(T),F.lightsStateVersion=ue,F.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ct=ze.getUniforms(),ut=Ws.seqWithValue(ct.seq,He);return F.currentProgram=ze,F.uniformsList=ut,ze}function Wi(T,V){const q=ke.get(T);q.outputColorSpace=V.outputColorSpace,q.instancing=V.instancing,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function Xi(T,V,q,F,Y){V.isScene!==!0&&(V=mt),Ve.resetTextureUnits();const ye=V.fog,ue=F.isMeshStandardMaterial?V.environment:null,Ne=R===null?m.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Cn,Ge=(F.isMeshStandardMaterial?_t:et).get(F.envMap||ue),qe=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),He=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color,Xt=F.toneMapped?m.toneMapping:An,Vt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=Vt!==void 0?Vt.length:0,Ze=ke.get(F),dn=p.state.lights;if(ie===!0&&(ge===!0||T!==M)){const kt=T===M&&F.id===P;Ce.setState(F,T,kt)}let yt=!1;F.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==dn.state.version||Ze.outputColorSpace!==Ne||Y.isInstancedMesh&&Ze.instancing===!1||!Y.isInstancedMesh&&Ze.instancing===!0||Y.isSkinnedMesh&&Ze.skinning===!1||!Y.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==Ge||F.fog===!0&&Ze.fog!==ye||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ce.numPlanes||Ze.numIntersection!==Ce.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==ze||Ze.morphTargets!==He||Ze.morphNormals!==ct||Ze.morphColors!==ut||Ze.toneMapping!==Xt||Xe.isWebGL2===!0&&Ze.morphTargetsCount!==vt)&&(yt=!0):(yt=!0,Ze.__version=F.version);let jt=Ze.currentProgram;yt===!0&&(jt=tn(F,V,Y));let Fn=!1,On=!1,pn=!1;const Pt=jt.getUniforms(),qt=Ze.uniforms;if(Oe.useProgram(jt.program)&&(Fn=!0,On=!0,pn=!0),F.id!==P&&(P=F.id,On=!0),Fn||M!==T){if(Pt.setValue(O,"projectionMatrix",T.projectionMatrix),Xe.logarithmicDepthBuffer&&Pt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,On=!0,pn=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const kt=Pt.map.cameraPosition;kt!==void 0&&kt.setValue(O,De.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Pt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Y.isSkinnedMesh)&&Pt.setValue(O,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){Pt.setOptional(O,Y,"bindMatrix"),Pt.setOptional(O,Y,"bindMatrixInverse");const kt=Y.skeleton;kt&&(Xe.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),Pt.setValue(O,"boneTexture",kt.boneTexture,Ve),Pt.setValue(O,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bn=q.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0&&Xe.isWebGL2===!0)&&we.update(Y,q,jt),(On||Ze.receiveShadow!==Y.receiveShadow)&&(Ze.receiveShadow=Y.receiveShadow,Pt.setValue(O,"receiveShadow",Y.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(qt.envMap.value=Ge,qt.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),On&&(Pt.setValue(O,"toneMappingExposure",m.toneMappingExposure),Ze.needsLights&&Pr(qt,pn),ye&&F.fog===!0&&se.refreshFogUniforms(qt,ye),se.refreshMaterialUniforms(qt,F,z,ne,Me),Ws.upload(O,Ze.uniformsList,qt,Ve)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ws.upload(O,Ze.uniformsList,qt,Ve),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Pt.setValue(O,"center",Y.center),Pt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),Pt.setValue(O,"normalMatrix",Y.normalMatrix),Pt.setValue(O,"modelMatrix",Y.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const kt=F.uniformsGroups;for(let mn=0,Lr=kt.length;mn<Lr;mn++)if(Xe.isWebGL2){const Bn=kt[mn];je.update(Bn,jt),je.bind(Bn,jt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jt}function Pr(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function hn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,V,q){ke.get(T.texture).__webglTexture=V,ke.get(T.depthTexture).__webglTexture=q;const F=ke.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const q=ke.get(T);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,q=0){R=T,y=V,E=q;let F=!0,Y=null,ye=!1,ue=!1;if(T){const Ge=ke.get(T);Ge.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(O.FRAMEBUFFER,null),F=!1):Ge.__webglFramebuffer===void 0?Ve.setupRenderTarget(T):Ge.__hasExternalTextures&&Ve.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);const qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ue=!0);const ze=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=ze[V],ye=!0):Xe.isWebGL2&&T.samples>0&&Ve.useMultisampledRTT(T)===!1?Y=ke.get(T).__webglMultisampledFramebuffer:Y=ze,A.copy(T.viewport),I.copy(T.scissor),Q=T.scissorTest}else A.copy(k).multiplyScalar(z).floor(),I.copy(re).multiplyScalar(z).floor(),Q=N;if(Oe.bindFramebuffer(O.FRAMEBUFFER,Y)&&Xe.drawBuffers&&F&&Oe.drawBuffers(T,Y),Oe.viewport(A),Oe.scissor(I),Oe.setScissorTest(Q),ye){const Ge=ke.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,q)}else if(ue){const Ge=ke.get(T.texture),qe=V||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.__webglTexture,q||0,qe)}P=-1},this.readRenderTargetPixels=function(T,V,q,F,Y,ye,ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(Ne=Ne[ue]),Ne){Oe.bindFramebuffer(O.FRAMEBUFFER,Ne);try{const Ge=T.texture,qe=Ge.format,ze=Ge.type;if(qe!==xn&&be.convert(qe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ze===yr&&(Le.has("EXT_color_buffer_half_float")||Xe.isWebGL2&&Le.has("EXT_color_buffer_float"));if(ze!==Ei&&be.convert(ze)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Mi&&(Xe.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-F&&q>=0&&q<=T.height-Y&&O.readPixels(V,q,F,Y,be.convert(qe),be.convert(ze),ye)}finally{const Ge=R!==null?ke.get(R).__webglFramebuffer:null;Oe.bindFramebuffer(O.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(T,V,q=0){const F=Math.pow(2,-q),Y=Math.floor(V.image.width*F),ye=Math.floor(V.image.height*F);Ve.setTexture2D(V,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,T.x,T.y,Y,ye),Oe.unbindTexture()},this.copyTextureToTexture=function(T,V,q,F=0){const Y=V.image.width,ye=V.image.height,ue=be.convert(q.format),Ne=be.convert(q.type);Ve.setTexture2D(q,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,T.x,T.y,Y,ye,ue,Ne,V.image.data):V.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,ue,V.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,F,T.x,T.y,ue,Ne,V.image),F===0&&q.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(T,V,q,F,Y=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=T.max.x-T.min.x+1,ue=T.max.y-T.min.y+1,Ne=T.max.z-T.min.z+1,Ge=be.convert(F.format),qe=be.convert(F.type);let ze;if(F.isData3DTexture)Ve.setTexture3D(F,0),ze=O.TEXTURE_3D;else if(F.isDataArrayTexture)Ve.setTexture2DArray(F,0),ze=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const He=O.getParameter(O.UNPACK_ROW_LENGTH),ct=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ut=O.getParameter(O.UNPACK_SKIP_PIXELS),Xt=O.getParameter(O.UNPACK_SKIP_ROWS),Vt=O.getParameter(O.UNPACK_SKIP_IMAGES),vt=q.isCompressedTexture?q.mipmaps[0]:q.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,vt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,T.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,T.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?O.texSubImage3D(ze,Y,V.x,V.y,V.z,ye,ue,Ne,Ge,qe,vt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(ze,Y,V.x,V.y,V.z,ye,ue,Ne,Ge,vt.data)):O.texSubImage3D(ze,Y,V.x,V.y,V.z,ye,ue,Ne,Ge,qe,vt),O.pixelStorei(O.UNPACK_ROW_LENGTH,He),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ut),O.pixelStorei(O.UNPACK_SKIP_ROWS,Xt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Vt),Y===0&&F.generateMipmaps&&O.generateMipmap(ze),Oe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ve.setTextureCube(T,0):T.isData3DTexture?Ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ve.setTexture2DArray(T,0):Ve.setTexture2D(T,0),Oe.unbindTexture()},this.resetState=function(){y=0,E=0,R=null,Oe.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ye?ni:Po}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ni?Ye:Cn}}class ag extends Wu{}ag.prototype.isWebGL1Renderer=!0;class og extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Gs extends fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Uc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lg{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const _=c[d],v=c[d+1];if(_.global&&(_.lastIndex=0),_.test(u))return v}return null}}}const cg=new lg;class Xu{constructor(e){this.manager=e!==void 0?e:cg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class ug extends Xu{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Uc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=rs("img");function l(){u(),Uc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Ic extends Xu{constructor(e){super(e)}load(e,t,i,r){const s=new Gt,a=new ug(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class ju extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ho=new Tt,Nc=new W,Fc=new W;class fg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hg extends fg{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ys*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}let dg=class extends ju{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new hg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},pg=class extends ju{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};class qu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Oc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Oc(){return(typeof performance>"u"?Date:performance).now()}class mg{constructor(e,t,i=0,r=1/0){this.ray=new Cu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Do,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return To(e,this,i,t),i.sort(Bc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)To(e[r],this,i,t);return i.sort(Bc),i}}function Bc(n,e){return n.distance-e.distance}function To(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)To(r[s],e,t,!0)}}class po extends Rr{constructor(e,t,i,r,s,a){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,i,r,s,a)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);const _g={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class ea{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gg=new zu(-1,1,1,-1,0,1),No=new wi;No.setAttribute("position",new ii([-1,3,0,-1,-1,0,3,-1,0],3));No.setAttribute("uv",new ii([0,2,0,0,2,0],2));class vg{constructor(e){this._mesh=new Tn(No,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Mg extends ea{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ri?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Nu.clone(e.uniforms),this.material=new ri({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vg(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zc extends ea{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Sg extends ea{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Eg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new nt);this._width=i.width,this._height=i.height,t=new bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mg(_g),this.clock=new qu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}zc!==void 0&&(a instanceof zc?i=!0:a instanceof Sg&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yu extends ea{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new tt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}const xg=(n,e,t)=>{n.renderer=new Wu({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),n.composer=new Eg(n.renderer),n.composer.addPass(new Yu(n.scene,ss(n.camera)))},Vc=(n,e,t)=>{n.renderer&&(e?n.renderer.outputEncoding=Po:n.renderer.outputEncoding=ni,t?n.renderer.toneMapping=An:n.renderer.toneMapping=mu)},kc=(n,e,t)=>{!n.renderer||!n.composer||(n.renderer.setSize(e.width,e.height),n.renderer.setPixelRatio(t),n.composer.setSize(e.width,e.height),n.composer.setPixelRatio(t))},Gc=(n,e,t)=>{n.renderer&&(n.renderer.shadowMap.enabled=e,n.renderer.shadowMap.type=t)},wn=n=>n.userData,bg=(n,e)=>{n.pointer.update(t=>n.renderer?t.set(e.offsetX/n.renderer.domElement.clientWidth*2-1,-(e.offsetY/n.renderer.domElement.clientHeight)*2+1):t)},Ku=(n,e,t,i)=>(n.raycaster.setFromCamera(e,t),n.raycaster.intersectObjects(i,!1)),yg=(n,e)=>n.object.uuid!==e.object.uuid||n.instanceId!==e.instanceId,Tg=(n,e,t)=>{let i;const r=n.camera.subscribe(l=>i=l);Zt(r);let s;const a=n.pointer.subscribe(l=>s=l);Zt(a);const o=l=>{var u,d;if(l.preventDefault(),n.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,bg(n,l),e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=Ku(e,s,i,Array.from(e.raycastableObjects));c.length>0&&e.interactiveObjects.has(c[0].object)&&((d=(u=wn(c[0].object)).eventDispatcher)==null||d.call(u,l.type,{...c[0],event:l}))};return{onClick:o,onContextMenu:o,onPointerUp:o,onPointerDown:o,onPointerMove:o}},wg=(n,e)=>{let t=ss(n.pointerOverCanvas);const i=n.pointerOverCanvas.subscribe(c=>t=c);Zt(i);let r;const s=n.camera.subscribe(c=>r=c);Zt(s);let a;const o=n.pointer.subscribe(c=>a=c);return Zt(o),{raycast:()=>{var d,f,_,v,g,p,h,S;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Ku(e,a,r,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&yg(e.lastIntersection,u)&&((p=(g=wn(e.lastIntersection.object)).eventDispatcher)==null||p.call(g,"pointerleave",e.lastIntersection),(S=(h=wn(u.object)).eventDispatcher)==null||S.call(h,"pointerenter",u)):(v=(_=wn(u.object)).eventDispatcher)==null||v.call(_,"pointerenter",u):e.lastIntersection&&((f=(d=wn(e.lastIntersection.object)).eventDispatcher)==null||f.call(d,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},Vi=typeof window<"u",Ag=n=>{if(!Vi)return;let e;const t=()=>{n(),e=requestAnimationFrame(t)};t(),Zt(()=>{e&&cancelAnimationFrame(e)})},Rg=(n,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let r=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++r}),r>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((r,s)=>s.order?!0:r,!1),i=n.clock.getDelta();t?Array.from(e.frameHandlers).sort((r,s)=>(r.order??0)>(s.order??0)?1:-1).forEach(r=>r.fn(n,i)):e.frameHandlers.forEach(r=>r.fn(n,i))},Cg=n=>{n.debugFrameloop&&(n.frame+=1,console.log(`frame: ${n.frame}${Object.keys(n.invalidations).length>0?", requested by ↴":""}`),Object.keys(n.invalidations).length>0&&console.table(n.invalidations),n.invalidations={})},Pg=(n,e,t)=>{let i=ss(n.camera);const r=n.camera.subscribe(a=>i=a);Zt(r);const{raycast:s}=wg(n,e);Ag(()=>{const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(s(),t.pointerInvalidated=!1),a&&(!i||!n.composer||!n.renderer||(Rg(n,t),n.composer.passes.length>1?n.composer.render():n.renderer.render(n.scene,i),Cg(t),t.frameInvalidated=!1,t.advance=!1))})},Lg=()=>{const n=new $t(75,0,.1,1e3);return wn(n).threlteDefaultCamera=!0,n.position.z=5,n.lookAt(0,0,0),n},Dg=n=>{const e=n.size.subscribe(t=>{wn(ss(n.camera)).threlteDefaultCamera&&n.camera.update(i=>{const r=i;return r.aspect=t.width/t.height,r.updateProjectionMatrix(),n.invalidate("Default camera: aspect ratio changed"),r})});Zt(e)},Ug=(n,e,t,i,r,s,a)=>{const o={audioListeners:new Map,addAudioListener:(g,p)=>{if(p=p??"default",o.audioListeners.has(p)){console.warn(`An AudioListener with the id "${p}" has already been added, aborting.`);return}o.audioListeners.set(p,g)},removeAudioListener:g=>{if(g=g??"default",!o.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}o.audioListeners.delete(g)},getAudioListener:g=>{if(g=g??"default",!o.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return o.audioListeners.get(g)}},l={debugFrameloop:s,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:of([i,r],([g,p])=>g||p),pointer:an(new nt),pointerOverCanvas:an(!1),clock:new qu,camera:an(Lg()),scene:new og,renderer:void 0,composer:void 0,invalidate:g=>{l.frameInvalidated=!0,l.debugFrameloop&&g&&(l.invalidations[g]=l.invalidations[g]?l.invalidations[g]+1:1)},advance:()=>{l.advance=!0}},u={flat:an(e),linear:an(n),dpr:an(t),setCamera:g=>{c.camera.set(g),c.composer&&(c.composer.passes.forEach(p=>{p instanceof Yu&&(p.camera=g)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new mg,lastIntersection:null,addRaycastableObject:g=>{u.raycastableObjects.add(g)},removeRaycastableObject:g=>{u.raycastableObjects.delete(g)},addInteractiveObject:g=>{u.interactiveObjects.add(g)},removeInteractiveObject:g=>{u.interactiveObjects.delete(g)},addPass:g=>{c.composer&&(c.composer.addPass(g),c.invalidate("Canvas: adding pass"))},removePass:g=>{c.composer&&(c.composer.removePass(g),c.invalidate("Canvas: removing pass"))}};return vr("threlte",c),vr("threlte-root",u),vr("threlte-render-context",l),vr("threlte-audio-context",o),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:o,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>o}},Ig=()=>{const n=an({width:0,height:0});let e={width:0,height:0};const t=n.subscribe(a=>e=a);Zt(t);let i;const r=()=>{const a=e;if(!i||!i.parentElement)return;const{clientWidth:o,clientHeight:l}=i.parentElement;(o!==a.width||l!==a.height)&&n.set({width:o,height:l})},s=a=>{i=a,r(),window.addEventListener("resize",r)};return Vi?(Zt(()=>{window.removeEventListener("resize",r)}),{parentSizeAction:s,parentSize:n}):{parentSize:n,parentSizeAction:s}};function Hc(n){let e;const t=n[30].default,i=Pn(t,n,n[29],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[0]&536870912)&&Ln(i,t,r,r[29],e?Un(t,r[29],s,null):Dn(r[29]),null)},i(r){e||(Ae(i,r),e=!0)},o(r){Ie(i,r),e=!1},d(r){i&&i.d(r)}}}function Ng(n){let e,t,i,r,s=n[1]&&Hc(n);return{c(){e=$("canvas"),s&&s.c(),this.h()},l(a){e=ee(a,"CANVAS",{class:!0});var o=ae(e);s&&s.l(o),o.forEach(J),this.h()},h(){te(e,"class","svelte-15bl8wt")},m(a,o){lt(a,e,o),s&&s.m(e,null),n[31](e),t=!0,i||(r=[nf(n[2].call(null,e)),Te(e,"click",n[8]),Te(e,"contextmenu",n[9]),Te(e,"pointerup",n[12]),Te(e,"pointerdown",n[10]),Te(e,"pointermove",n[11]),Te(e,"pointerenter",n[32]),Te(e,"pointerleave",n[33])],i=!0)},p(a,o){a[1]?s?(s.p(a,o),o[0]&2&&Ae(s,1)):(s=Hc(a),s.c(),Ae(s,1),s.m(e,null)):s&&(Ni(),Ie(s,1,1,()=>{s=null}),Fi())},i(a){t||(Ae(s),t=!0)},o(a){Ie(s),t=!1},d(a){a&&J(e),s&&s.d(),n[31](null),i=!1,as(r)}}}const wo=new Set,Fg=n=>{wo.forEach(e=>e(n))};function Og(n,e,t){let i,r,s,a,{$$slots:o={},$$scope:l}=e,{dpr:c=Vi?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:d=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:_=!1}=e,{shadows:v=!0}=e,{shadowMapType:g=fu}=e,{size:p=void 0}=e,{rendererParameters:h=void 0}=e,S,m=!1;const x=an(p),{parentSize:y,parentSizeAction:E}=Ig(),R=Ug(d,u,c,x,y,_,f),{getCtx:P,getRootCtx:M,getRenderCtx:A,renderCtx:I}=R,{ctx:Q,rootCtx:D,audioCtx:G}=R;Dg(Q),wo.add(Q.invalidate),Zt(()=>{wo.delete(Q.invalidate)});const{size:B,scene:ne}=Q;Bt(n,B,fe=>t(26,r=fe));const{flat:z,linear:H,dpr:L}=D;Bt(n,z,fe=>t(27,s=fe)),Bt(n,H,fe=>t(28,a=fe)),Bt(n,L,fe=>t(25,i=fe)),vr("threlte-parent",an(ne)),cu(()=>{S&&(xg(Q,S,h),Vc(Q,a,s),kc(Q,r,i),Gc(Q,v,g),t(1,m=!0))}),Pg(Q,D,I);const{onClick:k,onContextMenu:re,onPointerDown:N,onPointerMove:K,onPointerUp:ie}=Tg(Q,D,I);function ge(fe){In[fe?"unshift":"push"](()=>{S=fe,t(0,S)})}const Me=()=>P().pointerOverCanvas.set(!0),Re=()=>P().pointerOverCanvas.set(!1);return n.$$set=fe=>{"dpr"in fe&&t(13,c=fe.dpr),"flat"in fe&&t(14,u=fe.flat),"linear"in fe&&t(15,d=fe.linear),"frameloop"in fe&&t(16,f=fe.frameloop),"debugFrameloop"in fe&&t(17,_=fe.debugFrameloop),"shadows"in fe&&t(18,v=fe.shadows),"shadowMapType"in fe&&t(19,g=fe.shadowMapType),"size"in fe&&t(20,p=fe.size),"rendererParameters"in fe&&t(21,h=fe.rendererParameters),"$$scope"in fe&&t(29,l=fe.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&1048576&&x.set(p),n.$$.dirty[0]&32768&&Hs(H,a=d,a),n.$$.dirty[0]&16384&&Hs(z,s=u,s),n.$$.dirty[0]&8192&&Hs(L,i=c,i),n.$$.dirty[0]&402653184&&Vc(P(),a,s),n.$$.dirty[0]&100663296&&kc(P(),r,i),n.$$.dirty[0]&786432&&Gc(P(),v,g)},[S,m,E,P,B,z,H,L,k,re,N,K,ie,c,u,d,f,_,v,g,p,h,Q,D,G,i,r,s,a,l,o,ge,Me,Re]}class Bg extends It{constructor(e){super(),Nt(this,e,Og,Ng,Ft,{dpr:13,flat:14,linear:15,frameloop:16,debugFrameloop:17,shadows:18,shadowMapType:19,size:20,rendererParameters:21,ctx:22,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[22]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Nn=()=>os("threlte"),ta=()=>os("threlte-root"),Fo=n=>{const e=an(n);let t=n;const i=e.subscribe(s=>t=s);return Zt(i),{...e,set:s=>{s.uuid!==t.uuid&&e.set(s)}}};function zg(n){let e;const t=n[8].default,i=Pn(t,n,n[7],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,[s]){i&&i.p&&(!e||s&128)&&Ln(i,t,r,r[7],e?Un(t,r[7],s,null):Dn(r[7]),null)},i(r){e||(Ae(i,r),e=!0)},o(r){Ie(i,r),e=!1},d(r){i&&i.d(r)}}}const Vg=n=>{vr("threlte-parent",n)},kg=()=>os("threlte-parent");function Gg(n,e,t){let i,r,{$$slots:s={},$$scope:a}=e;const o=kg();Bt(n,o,_=>t(6,r=_));let l=r,{object:c}=e;const u=an(c);Bt(n,u,_=>t(5,i=_));let d=c;Vg(u);const{invalidate:f}=Nn();return r.add(i),f("HierarchicalObject: object added"),Zt(()=>{r.remove(i),f("HierarchicalObject: object removed")}),n.$$set=_=>{"object"in _&&t(2,c=_.object),"$$scope"in _&&t(7,a=_.$$scope)},n.$$.update=()=>{n.$$.dirty&4&&Hs(u,i=c,i),n.$$.dirty&112&&i!==d&&(d&&r.remove(d),r.add(i),f("HierarchicalObject: object changed"),t(4,d=i)),n.$$.dirty&104&&r!==l&&(l.remove(i),r.add(i),f("HierarchicalObject: parent changed"),t(3,l=r))},[o,u,c,l,d,i,r,a,s]}class Zu extends It{constructor(e){super(),Nt(this,e,Gg,zg,Ft,{object:2})}}function Hg(n,e,t){let i,r,{object:s}=e;const a=Fo(s);Bt(n,a,c=>t(4,r=c));const o=os("threlte-layers");Bt(n,o,c=>t(3,i=c));const{invalidate:l}=Nn();return n.$$set=c=>{"object"in c&&t(2,s=c.object)},n.$$.update=()=>{if(n.$$.dirty&4&&a.set(s),n.$$.dirty&24){if(i==="all")r.layers.enableAll();else if(i==="none")r.layers.disableAll();else if(Array.isArray(i))for(let c=0;c<32;c+=1){const u=c;i.includes(u)?r.layers.enable(c):r.layers.disable(c)}else i!==void 0&&r.layers.set(i);l("LayerableObject")}},[a,o,s,i,r]}class Wg extends It{constructor(e){super(),Nt(this,e,Hg,null,Ft,{object:2})}}const Oo=(n,e)=>{if(!Vi)return{start:()=>{},stop:()=>{},started:lf(!1)};const t=os("threlte-render-context"),i={fn:n,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},r=an(!1),s=()=>{t.frameHandlers.delete(i),r.set(!1)},a=()=>{t.frameHandlers.add(i),r.set(!0)};return((e==null?void 0:e.autostart)??!0)&&a(),Zt(()=>{s()}),{start:a,stop:s,started:{subscribe:r.subscribe}}},Ju=()=>{const n=an(!1);return(async()=>{await Xs(),n.set(!0)})(),n};function Xg(n,e,t){let i,r,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new W,d=Ao(),{invalidate:f}=Nn(),_=Ju();Bt(n,_,m=>t(8,r=m));const v=async()=>{r||await Xs(),d("transform")},g=async()=>{f("TransformableObject: transformed"),await v()};wn(s).onTransform=g;const{start:p,stop:h}=Oo(async()=>{c&&!l&&c instanceof xt&&(c.getWorldPosition(u),s.lookAt(u),await v())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),S=Fo(s);return Bt(n,S,m=>t(7,i=m)),n.$$set=m=>{"object"in m&&t(2,s=m.object),"position"in m&&t(3,a=m.position),"scale"in m&&t(4,o=m.scale),"rotation"in m&&t(5,l=m.rotation),"lookAt"in m&&t(6,c=m.lookAt)},n.$$.update=()=>{n.$$.dirty&4&&S.set(s),n.$$.dirty&232&&(a&&(i.position.set(a.x??0,a.y??0,a.z??0),g()),c&&!l&&(c instanceof xt?p():(h(),i.lookAt(c.x??0,c.y??0,c.z??0),g())),c||h()),n.$$.dirty&144&&o&&(typeof o=="number"?i.scale.set(o,o,o):i.scale.set(o.x??1,o.y??1,o.z??1),g()),n.$$.dirty&160&&l&&(i.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),g())},[_,S,s,a,o,l,c,i]}class Qu extends It{constructor(e){super(),Nt(this,e,Xg,null,Ft,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function jg(n,e,t){let i,r,s,{object:a}=e,{viewportAware:o=!1}=e;const l=Ao(),{camera:c,invalidate:u}=Nn();Bt(n,c,E=>t(8,s=E));const d=new Qs,f=new Tt,_=E=>E.type==="Mesh",v=new W,g=()=>s?(f.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),d.setFromProjectionMatrix(f),_(a)?d.intersectsObject(a):(a.getWorldPosition(v),d.containsPoint(v))):!0,p=Ju();Bt(n,p,E=>t(7,r=E));let{inViewport:h=g()}=e;const S=async E=>{E?(r||await Xs(),l("viewportenter",a)):(r||await Xs(),l("viewportleave",a))},{start:m,stop:x,started:y}=Oo(()=>{const E=g();h===void 0?(t(3,h=g()),S(h)):E!==h&&(S(E),t(3,h=E))},{autostart:o,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Bt(n,y,E=>t(6,i=E)),u("ViewportAwareObject"),n.$$set=E=>{"object"in E&&t(4,a=E.object),"viewportAware"in E&&t(5,o=E.viewportAware),"inViewport"in E&&t(3,h=E.inViewport)},n.$$.update=()=>{n.$$.dirty&96&&(o&&!i?m():!o&&i&&x())},[c,p,y,h,a,o,i]}class qg extends It{constructor(e){super(),Nt(this,e,jg,null,Ft,{object:4,viewportAware:5,inViewport:3})}}function Yg(n){let e;const t=n[12].default,i=Pn(t,n,n[16],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&65536)&&Ln(i,t,r,r[16],e?Un(t,r[16],s,null):Dn(r[16]),null)},i(r){e||(Ae(i,r),e=!0)},o(r){Ie(i,r),e=!1},d(r){i&&i.d(r)}}}function Kg(n){let e,t,i,r,s,a,o,l,c;e=new Wg({props:{object:n[1]}}),i=new Qu({props:{object:n[1],position:n[2],rotation:n[4],scale:n[3],lookAt:n[5]}}),s=new Zu({props:{object:n[1],$$slots:{default:[Yg]},$$scope:{ctx:n}}});function u(f){n[13](f)}let d={object:n[1],viewportAware:n[6]};return n[0]!==void 0&&(d.inViewport=n[0]),o=new qg({props:d}),In.push(()=>yi(o,"inViewport",u)),o.$on("viewportenter",n[14]),o.$on("viewportleave",n[15]),{c(){ft(e.$$.fragment),t=de(),ft(i.$$.fragment),r=de(),ft(s.$$.fragment),a=de(),ft(o.$$.fragment)},l(f){ht(e.$$.fragment,f),t=pe(f),ht(i.$$.fragment,f),r=pe(f),ht(s.$$.fragment,f),a=pe(f),ht(o.$$.fragment,f)},m(f,_){dt(e,f,_),lt(f,t,_),dt(i,f,_),lt(f,r,_),dt(s,f,_),lt(f,a,_),dt(o,f,_),c=!0},p(f,[_]){const v={};_&2&&(v.object=f[1]),e.$set(v);const g={};_&2&&(g.object=f[1]),_&4&&(g.position=f[2]),_&16&&(g.rotation=f[4]),_&8&&(g.scale=f[3]),_&32&&(g.lookAt=f[5]),i.$set(g);const p={};_&2&&(p.object=f[1]),_&65536&&(p.$$scope={dirty:_,ctx:f}),s.$set(p);const h={};_&2&&(h.object=f[1]),_&64&&(h.viewportAware=f[6]),!l&&_&1&&(l=!0,h.inViewport=f[0],Ti(()=>l=!1)),o.$set(h)},i(f){c||(Ae(e.$$.fragment,f),Ae(i.$$.fragment,f),Ae(s.$$.fragment,f),Ae(o.$$.fragment,f),c=!0)},o(f){Ie(e.$$.fragment,f),Ie(i.$$.fragment,f),Ie(s.$$.fragment,f),Ie(o.$$.fragment,f),c=!1},d(f){pt(e,f),f&&J(t),pt(i,f),f&&J(r),pt(s,f),f&&J(a),pt(o,f)}}}function Zg(n,e,t){let{$$slots:i={},$$scope:r}=e,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:d=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:_=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:g=void 0}=e,{visible:p=void 0}=e;const{invalidate:h}=Nn(),S=()=>s;function m(E){d=E,t(0,d)}function x(E){ot.call(this,n,E)}function y(E){ot.call(this,n,E)}return n.$$set=E=>{"object"in E&&t(1,s=E.object),"position"in E&&t(2,a=E.position),"scale"in E&&t(3,o=E.scale),"rotation"in E&&t(4,l=E.rotation),"lookAt"in E&&t(5,c=E.lookAt),"viewportAware"in E&&t(6,u=E.viewportAware),"inViewport"in E&&t(0,d=E.inViewport),"castShadow"in E&&t(7,f=E.castShadow),"receiveShadow"in E&&t(8,_=E.receiveShadow),"frustumCulled"in E&&t(9,v=E.frustumCulled),"renderOrder"in E&&t(10,g=E.renderOrder),"visible"in E&&t(11,p=E.visible),"$$scope"in E&&t(16,r=E.$$scope)},n.$$.update=()=>{n.$$.dirty&3968&&(p!==void 0&&(S().visible=p),f!==void 0&&(S().castShadow=f),_!==void 0&&(S().receiveShadow=_),v!==void 0&&(S().frustumCulled=v),g!==void 0&&(S().renderOrder=g),h("Object3DInstance: props changed"))},[d,s,a,o,l,c,u,f,_,v,g,p,i,m,x,y,r]}class Bo extends It{constructor(e){super(),Nt(this,e,Zg,Kg,Ft,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11})}}function Jg(n){let e;const t=n[15].default,i=Pn(t,n,n[19],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&524288)&&Ln(i,t,r,r[19],e?Un(t,r[19],s,null):Dn(r[19]),null)},i(r){e||(Ae(i,r),e=!0)},o(r){Ie(i,r),e=!1},d(r){i&&i.d(r)}}}function Qg(n){let e,t,i;function r(a){n[16](a)}let s={object:n[1],lookAt:n[5],castShadow:n[7],receiveShadow:n[8],frustumCulled:n[9],renderOrder:n[10],position:n[2],scale:n[3],rotation:n[4],viewportAware:n[6],visible:n[11],$$slots:{default:[Jg]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.inViewport=n[0]),e=new Bo({props:s}),In.push(()=>yi(e,"inViewport",r)),e.$on("viewportenter",n[17]),e.$on("viewportleave",n[18]),{c(){ft(e.$$.fragment)},l(a){ht(e.$$.fragment,a)},m(a,o){dt(e,a,o),i=!0},p(a,[o]){const l={};o&2&&(l.object=a[1]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&524288&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],Ti(()=>t=!1)),e.$set(l)},i(a){i||(Ae(e.$$.fragment,a),i=!0)},o(a){Ie(e.$$.fragment,a),i=!1},d(a){pt(e,a)}}}function $g(n,e,t){let i,{$$slots:r={},$$scope:s}=e,{camera:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:d=!1}=e,{inViewport:f=!1}=e,{castShadow:_=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:p=void 0}=e,{visible:h=void 0}=e,{useCamera:S=!1}=e;const m=Fo(a);Bt(n,m,P=>t(14,i=P));const{setCamera:x}=ta();function y(P){f=P,t(0,f)}function E(P){ot.call(this,n,P)}function R(P){ot.call(this,n,P)}return n.$$set=P=>{"camera"in P&&t(1,a=P.camera),"position"in P&&t(2,o=P.position),"scale"in P&&t(3,l=P.scale),"rotation"in P&&t(4,c=P.rotation),"lookAt"in P&&t(5,u=P.lookAt),"viewportAware"in P&&t(6,d=P.viewportAware),"inViewport"in P&&t(0,f=P.inViewport),"castShadow"in P&&t(7,_=P.castShadow),"receiveShadow"in P&&t(8,v=P.receiveShadow),"frustumCulled"in P&&t(9,g=P.frustumCulled),"renderOrder"in P&&t(10,p=P.renderOrder),"visible"in P&&t(11,h=P.visible),"useCamera"in P&&t(13,S=P.useCamera),"$$scope"in P&&t(19,s=P.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&m.set(a),n.$$.dirty&24576&&S&&x(i)},[f,a,o,l,c,u,d,_,v,g,p,h,m,S,i,r,y,E,R,s]}class ev extends It{constructor(e){super(),Nt(this,e,$g,Qg,Ft,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,useCamera:13})}}function tv(n){let e;const t=n[18].default,i=Pn(t,n,n[22],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&4194304)&&Ln(i,t,r,r[22],e?Un(t,r[22],s,null):Dn(r[22]),null)},i(r){e||(Ae(i,r),e=!0)},o(r){Ie(i,r),e=!1},d(r){i&&i.d(r)}}}function nv(n){let e,t,i;function r(a){n[19](a)}let s={camera:n[0],position:n[2],scale:n[3],rotation:n[4],castShadow:n[6],receiveShadow:n[7],frustumCulled:n[8],renderOrder:n[9],visible:n[10],viewportAware:n[11],lookAt:n[5],useCamera:n[12],$$slots:{default:[tv]},$$scope:{ctx:n}};return n[1]!==void 0&&(s.inViewport=n[1]),e=new ev({props:s}),In.push(()=>yi(e,"inViewport",r)),e.$on("viewportenter",n[20]),e.$on("viewportleave",n[21]),{c(){ft(e.$$.fragment)},l(a){ht(e.$$.fragment,a)},m(a,o){dt(e,a,o),i=!0},p(a,[o]){const l={};o&1&&(l.camera=a[0]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.castShadow=a[6]),o&128&&(l.receiveShadow=a[7]),o&256&&(l.frustumCulled=a[8]),o&512&&(l.renderOrder=a[9]),o&1024&&(l.visible=a[10]),o&2048&&(l.viewportAware=a[11]),o&32&&(l.lookAt=a[5]),o&4096&&(l.useCamera=a[12]),o&4194304&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.inViewport=a[1],Ti(()=>t=!1)),e.$set(l)},i(a){i||(Ae(e.$$.fragment,a),i=!0)},o(a){Ie(e.$$.fragment,a),i=!1},d(a){pt(e,a)}}}function iv(n,e,t){let i,{$$slots:r={},$$scope:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:_=void 0}=e,{visible:v=void 0}=e,{viewportAware:g=!1}=e,{inViewport:p=!1}=e,{useCamera:h=!0}=e,{near:S=void 0}=e,{far:m=void 0}=e,{fov:x=void 0}=e;const{size:y,invalidate:E}=Nn();Bt(n,y,I=>t(17,i=I));const R=new $t(x,i.width/i.height,S,m);function P(I){p=I,t(1,p)}function M(I){ot.call(this,n,I)}function A(I){ot.call(this,n,I)}return n.$$set=I=>{"position"in I&&t(2,a=I.position),"scale"in I&&t(3,o=I.scale),"rotation"in I&&t(4,l=I.rotation),"lookAt"in I&&t(5,c=I.lookAt),"castShadow"in I&&t(6,u=I.castShadow),"receiveShadow"in I&&t(7,d=I.receiveShadow),"frustumCulled"in I&&t(8,f=I.frustumCulled),"renderOrder"in I&&t(9,_=I.renderOrder),"visible"in I&&t(10,v=I.visible),"viewportAware"in I&&t(11,g=I.viewportAware),"inViewport"in I&&t(1,p=I.inViewport),"useCamera"in I&&t(12,h=I.useCamera),"near"in I&&t(14,S=I.near),"far"in I&&t(15,m=I.far),"fov"in I&&t(16,x=I.fov),"$$scope"in I&&t(22,s=I.$$scope)},n.$$.update=()=>{n.$$.dirty&131073&&(t(0,R.aspect=i.width/i.height,R),R.updateProjectionMatrix(),E("PerspectiveCamera: aspect changed")),n.$$.dirty&114689&&(S!==void 0&&t(0,R.near=S,R),m!==void 0&&t(0,R.far=m,R),x!==void 0&&t(0,R.fov=x,R),R.updateProjectionMatrix(),E("PerspectiveCamera: props changed"))},[R,p,a,o,l,c,u,d,f,_,v,g,h,y,S,m,x,i,r,P,M,A,s]}class rv extends It{constructor(e){super(),Nt(this,e,iv,nv,Ft,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,viewportAware:11,inViewport:1,useCamera:12,near:14,far:15,fov:16,camera:0})}get camera(){return this.$$.ctx[0]}}const Wc=[],sv=(n,e)=>{const t=Wc.find(r=>r instanceof n);if(t)return t;const i=e();return Wc.push(i),i},av=(n,e)=>e?new tt(n):new tt().setHex(new tt(n).getHex()).convertSRGBToLinear();function ov(n){let e;const t=n[16].default,i=Pn(t,n,n[20],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&1048576)&&Ln(i,t,r,r[20],e?Un(t,r[20],s,null):Dn(r[20]),null)},i(r){e||(Ae(i,r),e=!0)},o(r){Ie(i,r),e=!1},d(r){i&&i.d(r)}}}function lv(n){let e,t,i;function r(a){n[17](a)}let s={object:n[0],lookAt:n[5],castShadow:n[7],receiveShadow:n[8],frustumCulled:n[9],renderOrder:n[10],position:n[2],scale:n[3],rotation:n[4],viewportAware:n[6],visible:n[11],$$slots:{default:[ov]},$$scope:{ctx:n}};return n[1]!==void 0&&(s.inViewport=n[1]),e=new Bo({props:s}),In.push(()=>yi(e,"inViewport",r)),e.$on("viewportenter",n[18]),e.$on("viewportleave",n[19]),{c(){ft(e.$$.fragment)},l(a){ht(e.$$.fragment,a)},m(a,o){dt(e,a,o),i=!0},p(a,[o]){const l={};o&1&&(l.object=a[0]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&1048576&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.inViewport=a[1],Ti(()=>t=!1)),e.$set(l)},i(a){i||(Ae(e.$$.fragment,a),i=!0)},o(a){Ie(e.$$.fragment,a),i=!1},d(a){pt(e,a)}}}function cv(n,e,t){let i,{$$slots:r={},$$scope:s}=e,{light:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:d=!1}=e,{inViewport:f=!1}=e,{castShadow:_=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:p=void 0}=e,{visible:h=void 0}=e,{color:S=void 0}=e,{intensity:m=void 0}=e;const{invalidate:x}=Nn(),{linear:y}=ta();Bt(n,y,M=>t(15,i=M));function E(M){f=M,t(1,f)}function R(M){ot.call(this,n,M)}function P(M){ot.call(this,n,M)}return n.$$set=M=>{"light"in M&&t(0,a=M.light),"position"in M&&t(2,o=M.position),"scale"in M&&t(3,l=M.scale),"rotation"in M&&t(4,c=M.rotation),"lookAt"in M&&t(5,u=M.lookAt),"viewportAware"in M&&t(6,d=M.viewportAware),"inViewport"in M&&t(1,f=M.inViewport),"castShadow"in M&&t(7,_=M.castShadow),"receiveShadow"in M&&t(8,v=M.receiveShadow),"frustumCulled"in M&&t(9,g=M.frustumCulled),"renderOrder"in M&&t(10,p=M.renderOrder),"visible"in M&&t(11,h=M.visible),"color"in M&&t(13,S=M.color),"intensity"in M&&t(14,m=M.intensity),"$$scope"in M&&t(20,s=M.$$scope)},n.$$.update=()=>{n.$$.dirty&57344&&(m!==void 0&&t(0,a.intensity=m,a),S!==void 0&&t(0,a.color=av(S,i),a),x("LightInstance: props changed"))},[a,f,o,l,c,u,d,_,v,g,p,h,y,S,m,i,r,E,R,P,s]}class $u extends It{constructor(e){super(),Nt(this,e,cv,lv,Ft,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,color:13,intensity:14})}}function uv(n){let e;const t=n[14].default,i=Pn(t,n,n[18],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&262144)&&Ln(i,t,r,r[18],e?Un(t,r[18],s,null):Dn(r[18]),null)},i(r){e||(Ae(i,r),e=!0)},o(r){Ie(i,r),e=!1},d(r){i&&i.d(r)}}}function fv(n){let e,t,i;function r(a){n[15](a)}let s={light:n[13],lookAt:n[4],position:n[1],scale:n[2],rotation:n[3],castShadow:n[5],receiveShadow:n[6],frustumCulled:n[7],renderOrder:n[8],visible:n[9],viewportAware:n[10],color:n[11],intensity:n[12],$$slots:{default:[uv]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.inViewport=n[0]),e=new $u({props:s}),In.push(()=>yi(e,"inViewport",r)),e.$on("viewportenter",n[16]),e.$on("viewportleave",n[17]),{c(){ft(e.$$.fragment)},l(a){ht(e.$$.fragment,a)},m(a,o){dt(e,a,o),i=!0},p(a,[o]){const l={};o&16&&(l.lookAt=a[4]),o&2&&(l.position=a[1]),o&4&&(l.scale=a[2]),o&8&&(l.rotation=a[3]),o&32&&(l.castShadow=a[5]),o&64&&(l.receiveShadow=a[6]),o&128&&(l.frustumCulled=a[7]),o&256&&(l.renderOrder=a[8]),o&512&&(l.visible=a[9]),o&1024&&(l.viewportAware=a[10]),o&2048&&(l.color=a[11]),o&4096&&(l.intensity=a[12]),o&262144&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],Ti(()=>t=!1)),e.$set(l)},i(a){i||(Ae(e.$$.fragment,a),i=!0)},o(a){Ie(e.$$.fragment,a),i=!1},d(a){pt(e,a)}}}function hv(n,e,t){let{$$slots:i={},$$scope:r}=e,{position:s=void 0}=e,{scale:a=void 0}=e,{rotation:o=void 0}=e,{lookAt:l=void 0}=e,{castShadow:c=void 0}=e,{receiveShadow:u=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:f=void 0}=e,{visible:_=void 0}=e,{viewportAware:v=!1}=e,{inViewport:g=!1}=e,{color:p=void 0}=e,{intensity:h=void 0}=e;const S=new pg(p,h);function m(E){g=E,t(0,g)}function x(E){ot.call(this,n,E)}function y(E){ot.call(this,n,E)}return n.$$set=E=>{"position"in E&&t(1,s=E.position),"scale"in E&&t(2,a=E.scale),"rotation"in E&&t(3,o=E.rotation),"lookAt"in E&&t(4,l=E.lookAt),"castShadow"in E&&t(5,c=E.castShadow),"receiveShadow"in E&&t(6,u=E.receiveShadow),"frustumCulled"in E&&t(7,d=E.frustumCulled),"renderOrder"in E&&t(8,f=E.renderOrder),"visible"in E&&t(9,_=E.visible),"viewportAware"in E&&t(10,v=E.viewportAware),"inViewport"in E&&t(0,g=E.inViewport),"color"in E&&t(11,p=E.color),"intensity"in E&&t(12,h=E.intensity),"$$scope"in E&&t(18,r=E.$$scope)},[g,s,a,o,l,c,u,d,f,_,v,p,h,S,i,m,x,y,r]}class dv extends It{constructor(e){super(),Nt(this,e,hv,fv,Ft,{position:1,scale:2,rotation:3,lookAt:4,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,viewportAware:10,inViewport:0,color:11,intensity:12,light:13})}get light(){return this.$$.ctx[13]}}function Xc(n){let e,t,i,r;return e=new Zu({props:{object:n[14]}}),i=new Qu({props:{object:n[14],position:n[12]}}),{c(){ft(e.$$.fragment),t=de(),ft(i.$$.fragment)},l(s){ht(e.$$.fragment,s),t=pe(s),ht(i.$$.fragment,s)},m(s,a){dt(e,s,a),lt(s,t,a),dt(i,s,a),r=!0},p(s,a){const o={};a[0]&4096&&(o.position=s[12]),i.$set(o)},i(s){r||(Ae(e.$$.fragment,s),Ae(i.$$.fragment,s),r=!0)},o(s){Ie(e.$$.fragment,s),Ie(i.$$.fragment,s),r=!1},d(s){pt(e,s),s&&J(t),pt(i,s)}}}function pv(n){let e;const t=n[21].default,i=Pn(t,n,n[25],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[0]&33554432)&&Ln(i,t,r,r[25],e?Un(t,r[25],s,null):Dn(r[25]),null)},i(r){e||(Ae(i,r),e=!0)},o(r){Ie(i,r),e=!1},d(r){i&&i.d(r)}}}function mv(n){let e,t,i,r,s=n[12]&&!(n[12]instanceof xt)&&Xc(n);function a(l){n[22](l)}let o={light:n[1],position:n[2],scale:n[3],rotation:n[4],castShadow:!!n[13],receiveShadow:n[7],frustumCulled:n[6],renderOrder:n[8],visible:n[9],viewportAware:n[5],color:n[10],intensity:n[11],$$slots:{default:[pv]},$$scope:{ctx:n}};return n[0]!==void 0&&(o.inViewport=n[0]),t=new $u({props:o}),In.push(()=>yi(t,"inViewport",a)),t.$on("viewportenter",n[23]),t.$on("viewportleave",n[24]),{c(){s&&s.c(),e=de(),ft(t.$$.fragment)},l(l){s&&s.l(l),e=pe(l),ht(t.$$.fragment,l)},m(l,c){s&&s.m(l,c),lt(l,e,c),dt(t,l,c),r=!0},p(l,c){l[12]&&!(l[12]instanceof xt)?s?(s.p(l,c),c[0]&4096&&Ae(s,1)):(s=Xc(l),s.c(),Ae(s,1),s.m(e.parentNode,e)):s&&(Ni(),Ie(s,1,1,()=>{s=null}),Fi());const u={};c[0]&2&&(u.light=l[1]),c[0]&4&&(u.position=l[2]),c[0]&8&&(u.scale=l[3]),c[0]&16&&(u.rotation=l[4]),c[0]&8192&&(u.castShadow=!!l[13]),c[0]&128&&(u.receiveShadow=l[7]),c[0]&64&&(u.frustumCulled=l[6]),c[0]&256&&(u.renderOrder=l[8]),c[0]&512&&(u.visible=l[9]),c[0]&32&&(u.viewportAware=l[5]),c[0]&1024&&(u.color=l[10]),c[0]&2048&&(u.intensity=l[11]),c[0]&33554432&&(u.$$scope={dirty:c,ctx:l}),!i&&c[0]&1&&(i=!0,u.inViewport=l[0],Ti(()=>i=!1)),t.$set(u)},i(l){r||(Ae(s),Ae(t.$$.fragment,l),r=!0)},o(l){Ie(s),Ie(t.$$.fragment,l),r=!1},d(l){s&&s.d(l),l&&J(e),pt(t,l)}}}function _v(n,e,t){let i,{$$slots:r={},$$scope:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{viewportAware:c=!1}=e,{inViewport:u=!1}=e,{frustumCulled:d=void 0}=e,{receiveShadow:f=void 0}=e,{renderOrder:_=void 0}=e,{visible:v=void 0}=e,{color:g=void 0}=e,{intensity:p=void 0}=e,{angle:h=void 0}=e,{decay:S=void 0}=e,{distance:m=void 0}=e,{penumbra:x=void 0}=e,{power:y=void 0}=e,{target:E=void 0}=e,{shadow:R=void 0}=e;const{invalidate:P}=Nn(),M=new dg(g,p),A=M.target,{start:I,stop:Q,started:D}=Oo(()=>{},{autostart:!1,debugFrameloopMessage:"SpotLight: tracking target"});Bt(n,D,L=>t(26,i=L));const G=L=>{L&&L instanceof xt&&!i?(t(1,M.target=L,M),I(),P("SpotLight: target changed")):(!L||!(L instanceof xt))&&i&&(t(1,M.target=A,M),Q(),P("SpotLight: target changed"))},B=L=>{if(L){const{mapSize:k=[512,512],camera:{near:re=.5,far:N=500}={},bias:K=0,radius:ie=1}=L===!0?{}:L;M.shadow.mapSize.set(k[0],k[1]),t(1,M.shadow.camera.near=re,M),t(1,M.shadow.camera.far=N,M),t(1,M.shadow.bias=K,M),t(1,M.shadow.radius=ie,M)}P("SpotLight: shadow changed")};function ne(L){u=L,t(0,u)}function z(L){ot.call(this,n,L)}function H(L){ot.call(this,n,L)}return n.$$set=L=>{"position"in L&&t(2,a=L.position),"scale"in L&&t(3,o=L.scale),"rotation"in L&&t(4,l=L.rotation),"viewportAware"in L&&t(5,c=L.viewportAware),"inViewport"in L&&t(0,u=L.inViewport),"frustumCulled"in L&&t(6,d=L.frustumCulled),"receiveShadow"in L&&t(7,f=L.receiveShadow),"renderOrder"in L&&t(8,_=L.renderOrder),"visible"in L&&t(9,v=L.visible),"color"in L&&t(10,g=L.color),"intensity"in L&&t(11,p=L.intensity),"angle"in L&&t(16,h=L.angle),"decay"in L&&t(17,S=L.decay),"distance"in L&&t(18,m=L.distance),"penumbra"in L&&t(19,x=L.penumbra),"power"in L&&t(20,y=L.power),"target"in L&&t(12,E=L.target),"shadow"in L&&t(13,R=L.shadow),"$$scope"in L&&t(25,s=L.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&4096&&G(E),n.$$.dirty[0]&8192&&B(R),n.$$.dirty[0]&2031616&&(m!==void 0&&t(1,M.distance=m,M),S!==void 0&&t(1,M.decay=S,M),h!==void 0&&t(1,M.angle=h,M),x!==void 0&&t(1,M.penumbra=x,M),y!==void 0&&t(1,M.power=y,M),P("SpotLight: props changed"))},[u,M,a,o,l,c,d,f,_,v,g,p,E,R,A,D,h,S,m,x,y,r,ne,z,H,s]}class na extends It{constructor(e){super(),Nt(this,e,_v,mv,Ft,{position:2,scale:3,rotation:4,viewportAware:5,inViewport:0,frustumCulled:6,receiveShadow:7,renderOrder:8,visible:9,color:10,intensity:11,angle:16,decay:17,distance:18,penumbra:19,power:20,target:12,shadow:13,light:1},null,[-1,-1])}get light(){return this.$$.ctx[1]}}function gv(n,e,t){let{object:i}=e,r=i,{interactive:s=!1}=e,{ignorePointer:a=!1}=e;const o=Ao(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:d}=ta(),{invalidate:f}=Nn(),_=g=>{d(g),c(g),delete wn(g).eventDispatcher},v=(g,p,h)=>{wn(g).eventDispatcher=o,p?(d(g),c(g)):(u(g),h?l(g):c(g))};return Zt(()=>{_(i),f("InteractiveObject: object removed")}),n.$$set=g=>{"object"in g&&t(0,i=g.object),"interactive"in g&&t(1,s=g.interactive),"ignorePointer"in g&&t(2,a=g.ignorePointer)},n.$$.update=()=>{n.$$.dirty&15&&(i!==r?(_(r),v(i,a,s),f("InteractiveObject: object changed"),t(3,r=i)):i===r&&(v(i,a,s),f("InteractiveObject: props changed")))},[i,s,a,r]}class vv extends It{constructor(e){super(),Nt(this,e,gv,null,Ft,{object:0,interactive:1,ignorePointer:2})}}function Mv(n){let e;const t=n[14].default,i=Pn(t,n,n[25],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&33554432)&&Ln(i,t,r,r[25],e?Un(t,r[25],s,null):Dn(r[25]),null)},i(r){e||(Ae(i,r),e=!0)},o(r){Ie(i,r),e=!1},d(r){i&&i.d(r)}}}function Sv(n){let e,t,i,r,s;function a(l){n[15](l)}let o={object:n[1],lookAt:n[5],position:n[2],scale:n[3],rotation:n[4],castShadow:n[7],receiveShadow:n[8],frustumCulled:n[9],renderOrder:n[10],visible:n[11],viewportAware:n[6],$$slots:{default:[Mv]},$$scope:{ctx:n}};return n[0]!==void 0&&(o.inViewport=n[0]),e=new Bo({props:o}),In.push(()=>yi(e,"inViewport",a)),e.$on("viewportenter",n[16]),e.$on("viewportleave",n[17]),r=new vv({props:{object:n[1],interactive:n[12],ignorePointer:n[13]}}),r.$on("click",n[18]),r.$on("contextmenu",n[19]),r.$on("pointerup",n[20]),r.$on("pointerdown",n[21]),r.$on("pointerenter",n[22]),r.$on("pointerleave",n[23]),r.$on("pointermove",n[24]),{c(){ft(e.$$.fragment),i=de(),ft(r.$$.fragment)},l(l){ht(e.$$.fragment,l),i=pe(l),ht(r.$$.fragment,l)},m(l,c){dt(e,l,c),lt(l,i,c),dt(r,l,c),s=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&64&&(u.viewportAware=l[6]),c&33554432&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Ti(()=>t=!1)),e.$set(u);const d={};c&2&&(d.object=l[1]),c&4096&&(d.interactive=l[12]),c&8192&&(d.ignorePointer=l[13]),r.$set(d)},i(l){s||(Ae(e.$$.fragment,l),Ae(r.$$.fragment,l),s=!0)},o(l){Ie(e.$$.fragment,l),Ie(r.$$.fragment,l),s=!1},d(l){pt(e,l),l&&J(i),pt(r,l)}}}function Ev(n,e,t){let{$$slots:i={},$$scope:r}=e,{mesh:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:d=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:_=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:g=void 0}=e,{visible:p=void 0}=e,{interactive:h=!1}=e,{ignorePointer:S=!1}=e;function m(D){d=D,t(0,d)}function x(D){ot.call(this,n,D)}function y(D){ot.call(this,n,D)}function E(D){ot.call(this,n,D)}function R(D){ot.call(this,n,D)}function P(D){ot.call(this,n,D)}function M(D){ot.call(this,n,D)}function A(D){ot.call(this,n,D)}function I(D){ot.call(this,n,D)}function Q(D){ot.call(this,n,D)}return n.$$set=D=>{"mesh"in D&&t(1,s=D.mesh),"position"in D&&t(2,a=D.position),"scale"in D&&t(3,o=D.scale),"rotation"in D&&t(4,l=D.rotation),"lookAt"in D&&t(5,c=D.lookAt),"viewportAware"in D&&t(6,u=D.viewportAware),"inViewport"in D&&t(0,d=D.inViewport),"castShadow"in D&&t(7,f=D.castShadow),"receiveShadow"in D&&t(8,_=D.receiveShadow),"frustumCulled"in D&&t(9,v=D.frustumCulled),"renderOrder"in D&&t(10,g=D.renderOrder),"visible"in D&&t(11,p=D.visible),"interactive"in D&&t(12,h=D.interactive),"ignorePointer"in D&&t(13,S=D.ignorePointer),"$$scope"in D&&t(25,r=D.$$scope)},[d,s,a,o,l,c,u,f,_,v,g,p,h,S,i,m,x,y,E,R,P,M,A,I,Q,r]}class xv extends It{constructor(e){super(),Nt(this,e,Ev,Sv,Ft,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,interactive:12,ignorePointer:13})}}function bv(n){let e;const t=n[18].default,i=Pn(t,n,n[29],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s[0]&536870912)&&Ln(i,t,r,r[29],e?Un(t,r[29],s,null):Dn(r[29]),null)},i(r){e||(Ae(i,r),e=!0)},o(r){Ie(i,r),e=!1},d(r){i&&i.d(r)}}}function yv(n){let e,t,i;function r(a){n[19](a)}let s={mesh:n[13],position:n[1],scale:n[2],rotation:n[3],lookAt:n[12],castShadow:n[5],receiveShadow:n[6],frustumCulled:n[7],renderOrder:n[8],visible:n[9],interactive:n[10],ignorePointer:n[11],viewportAware:n[4],$$slots:{default:[bv]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.inViewport=n[0]),e=new xv({props:s}),In.push(()=>yi(e,"inViewport",r)),e.$on("click",n[20]),e.$on("contextmenu",n[21]),e.$on("pointerup",n[22]),e.$on("pointerdown",n[23]),e.$on("pointerenter",n[24]),e.$on("pointerleave",n[25]),e.$on("pointermove",n[26]),e.$on("viewportenter",n[27]),e.$on("viewportleave",n[28]),{c(){ft(e.$$.fragment)},l(a){ht(e.$$.fragment,a)},m(a,o){dt(e,a,o),i=!0},p(a,o){const l={};o[0]&2&&(l.position=a[1]),o[0]&4&&(l.scale=a[2]),o[0]&8&&(l.rotation=a[3]),o[0]&4096&&(l.lookAt=a[12]),o[0]&32&&(l.castShadow=a[5]),o[0]&64&&(l.receiveShadow=a[6]),o[0]&128&&(l.frustumCulled=a[7]),o[0]&256&&(l.renderOrder=a[8]),o[0]&512&&(l.visible=a[9]),o[0]&1024&&(l.interactive=a[10]),o[0]&2048&&(l.ignorePointer=a[11]),o[0]&16&&(l.viewportAware=a[4]),o[0]&536870912&&(l.$$scope={dirty:o,ctx:a}),!t&&o[0]&1&&(t=!0,l.inViewport=a[0],Ti(()=>t=!1)),e.$set(l)},i(a){i||(Ae(e.$$.fragment,a),i=!0)},o(a){Ie(e.$$.fragment,a),i=!1},d(a){pt(e,a)}}}function Tv(n,e,t){let{$$slots:i={},$$scope:r}=e,{position:s=void 0}=e,{scale:a=void 0}=e,{rotation:o=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:_=void 0}=e,{visible:v=void 0}=e,{interactive:g=!1}=e,{ignorePointer:p=!1}=e,{lookAt:h=void 0}=e,{geometry:S}=e,{material:m}=e,x=m,y=S;const{invalidate:E}=Nn(),R=new Tn(S,m),P=()=>R;function M(L){c=L,t(0,c)}function A(L){ot.call(this,n,L)}function I(L){ot.call(this,n,L)}function Q(L){ot.call(this,n,L)}function D(L){ot.call(this,n,L)}function G(L){ot.call(this,n,L)}function B(L){ot.call(this,n,L)}function ne(L){ot.call(this,n,L)}function z(L){ot.call(this,n,L)}function H(L){ot.call(this,n,L)}return n.$$set=L=>{"position"in L&&t(1,s=L.position),"scale"in L&&t(2,a=L.scale),"rotation"in L&&t(3,o=L.rotation),"viewportAware"in L&&t(4,l=L.viewportAware),"inViewport"in L&&t(0,c=L.inViewport),"castShadow"in L&&t(5,u=L.castShadow),"receiveShadow"in L&&t(6,d=L.receiveShadow),"frustumCulled"in L&&t(7,f=L.frustumCulled),"renderOrder"in L&&t(8,_=L.renderOrder),"visible"in L&&t(9,v=L.visible),"interactive"in L&&t(10,g=L.interactive),"ignorePointer"in L&&t(11,p=L.ignorePointer),"lookAt"in L&&t(12,h=L.lookAt),"geometry"in L&&t(14,S=L.geometry),"material"in L&&t(15,m=L.material),"$$scope"in L&&t(29,r=L.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&98304&&(m!==x?(P().material=m,E("Mesh: material changed")):E("Mesh: material props changed"),t(16,x=m)),n.$$.dirty[0]&147456&&(S!==y?(P().geometry=S,E("Mesh: geometry changed")):E("Mesh: geometry props changed"),t(17,y=S))},[c,s,a,o,l,u,d,f,_,v,g,p,h,R,S,m,x,y,i,M,A,I,Q,D,G,B,ne,z,H,r]}class mo extends It{constructor(e){super(),Nt(this,e,Tv,yv,Ft,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,interactive:10,ignorePointer:11,lookAt:12,geometry:14,material:15,mesh:13},null,[-1,-1])}get mesh(){return this.$$.ctx[13]}}const ef=new xt;ef.scale.set(0,0,0);ef.matrix;new Tt().fromArray(new Array(16).fill(0));new tt(16777215);const wv=sv(Ic,()=>new Ic),_o=(n,e)=>wv.load(n,t=>{var i;Fg("useTexture"),(i=e==null?void 0:e.onLoad)==null||i.call(e,t)},t=>{var i;(i=e==null?void 0:e.onProgress)==null||i.call(e,t)},t=>{var i;(i=e==null?void 0:e.onError)==null||i.call(e,t)}),Av=n=>typeof n=="string",Rv=n=>Array.isArray(n),jc=n=>{try{const e=ta();if(!e)return n;ss(e.linear)||(n.encoding=ni)}catch{console.warn("Calling useTexture outside component initialization does not support color correction.")}return n};function Cv(n,e){return Av(n)?Vi?jc(_o(n,e)):new Gt:Rv(n)?Vi?n.map(t=>jc(_o(t,e))):n.map(()=>new Gt):Object.entries(n).reduce((r,[s,a])=>(r[s]=Vi?_o(a,e):new Gt,r),{})}function qc(n,e,t){const i=n.slice();return i[70]=e[t],i[72]=t,i}function Pv(n){let e;return{c(){e=Ee("↧")},l(t){e=xe(t,"↧")},m(t,i){lt(t,e,i)},d(t){t&&J(e)}}}function Lv(n){let e;return{c(){e=Ee("↥")},l(t){e=xe(t,"↥")},m(t,i){lt(t,e,i)},d(t){t&&J(e)}}}function Yc(n){let e,t,i,r=n[72]+1+"",s,a,o,l,c,u;function d(){return n[38](n[72])}function f(){return n[39](n[72])}return{c(){e=$("div"),t=$("a"),i=Ee("Fav "),s=Ee(r),a=$("a"),o=Ee("⨯"),l=de(),this.h()},l(_){e=ee(_,"DIV",{class:!0});var v=ae(e);t=ee(v,"A",{href:!0,class:!0});var g=ae(t);i=xe(g,"Fav "),s=xe(g,r),g.forEach(J),a=ee(v,"A",{href:!0,class:!0});var p=ae(a);o=xe(p,"⨯"),p.forEach(J),l=pe(v),v.forEach(J),this.h()},h(){te(t,"href","/"),te(t,"class","svelte-ek39oa"),te(a,"href","/"),te(a,"class","svelte-ek39oa"),te(e,"class","btn fav svelte-ek39oa")},m(_,v){lt(_,e,v),C(e,t),C(t,i),C(t,s),C(e,a),C(a,o),C(e,l),c||(u=[Te(t,"click",gi(d)),Te(a,"click",gi(f))],c=!0)},p(_,v){n=_},d(_){_&&J(e),c=!1,as(u)}}}function Kc(n){let e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p,h,S,m,x,y,E,R,P,M,A,I,Q,D,G,B,ne,z=n[6]/100+"",H,L,k,re,N,K,ie,ge=n[7]/100+"",Me,Re,fe,De,mt,We,O,Et,Le,Xe,Oe,rt,ke,Ve,et,_t,bt,w,b,j,se,oe,ce,Ce,me,Z,we,Pe,Ue,be,Se,je,st,U,he,X,le,ve,$e,Mt,at,Jt,St,Rt,Ct,Ai,Gi,un,fn,Hi,tn,Wi,Xi,Pr,hn,T,V,q,F,Y,ye,ue,Ne,Ge,qe,ze,He,ct,ut,Xt,Vt,vt,Ze,dn,yt,jt,Fn,On,pn,Pt,qt,bn,kt,mn,Lr,Bn,ia,ra,zn,ji,sa,si,aa,hs,oa,Vn,qi,la,ai,ca,ds,ua,kn,Yi,fa,oi,ha,ps,da,Gn,Ki,pa,li,ma,ms,_a,Hn,Zi,ga,ci,va,_s,Ma,Wn,Ji,Sa,ui,Ea,gs,xa,Xn,Qi,ba,fi,ya,vs,Ta,jn,$i,wa,hi,Aa,Ms,Ra,zo;return{c(){e=$("div"),t=$("div"),i=$("div"),r=Ee("Misc"),s=de(),a=$("div"),o=$("div"),l=Ee("Toggle floor"),c=$("input"),u=de(),d=$("div"),f=$("div"),_=Ee("Toggle html"),v=$("input"),g=de(),p=$("div"),h=$("div"),S=Ee("Animate"),m=$("input"),x=de(),y=$("div"),E=$("div"),R=Ee("Camera FOV"),P=$("input"),M=de(),A=Ee(n[5]),I=de(),Q=$("div"),D=$("div"),G=Ee("Ambient intensity"),B=$("input"),ne=de(),H=Ee(z),L=de(),k=$("div"),re=$("div"),N=Ee("Spot intensity"),K=$("input"),ie=de(),Me=Ee(ge),Re=de(),fe=$("div"),De=Ee("Cube 1"),mt=de(),We=$("div"),O=$("div"),Et=Ee("Animation"),Le=$("input"),Xe=de(),Oe=Ee(n[12]),rt=de(),ke=$("div"),Ve=$("div"),et=Ee("X rotation"),_t=$("input"),bt=de(),w=Ee(n[13]),b=de(),j=$("div"),se=$("div"),oe=Ee("Y rotation"),ce=$("input"),Ce=de(),me=Ee(n[14]),Z=de(),we=$("div"),Pe=$("div"),Ue=Ee("Z rotation"),be=$("input"),Se=de(),je=Ee(n[15]),st=de(),U=$("div"),he=$("div"),X=Ee("X move"),le=$("input"),ve=de(),$e=Ee(n[16]),Mt=de(),at=$("div"),Jt=$("div"),St=Ee("Y move"),Rt=$("input"),Ct=de(),Ai=Ee(n[17]),Gi=de(),un=$("div"),fn=$("div"),Hi=Ee("Z move"),tn=$("input"),Wi=de(),Xi=Ee(n[18]),Pr=de(),hn=$("div"),T=$("div"),V=Ee("Scale"),q=$("input"),F=de(),Y=Ee(n[19]),ye=de(),ue=$("div"),Ne=$("div"),Ge=Ee("Spots"),qe=de(),ze=$("div"),He=$("div"),ct=Ee("Spot 1"),ut=$("input"),Xt=de(),Vt=$("div"),vt=$("div"),Ze=Ee("Spot 2"),dn=$("input"),yt=de(),jt=$("div"),Fn=$("div"),On=Ee("Spot 3"),pn=$("input"),Pt=de(),qt=$("div"),bn=$("div"),kt=Ee("Spot 4"),mn=$("input"),Lr=de(),Bn=$("div"),ia=Ee("Cube 2"),ra=de(),zn=$("div"),ji=$("div"),sa=Ee("Animation"),si=$("input"),aa=de(),hs=Ee(n[20]),oa=de(),Vn=$("div"),qi=$("div"),la=Ee("X rotation"),ai=$("input"),ca=de(),ds=Ee(n[21]),ua=de(),kn=$("div"),Yi=$("div"),fa=Ee("Y rotation"),oi=$("input"),ha=de(),ps=Ee(n[22]),da=de(),Gn=$("div"),Ki=$("div"),pa=Ee("Z rotation"),li=$("input"),ma=de(),ms=Ee(n[23]),_a=de(),Hn=$("div"),Zi=$("div"),ga=Ee("X move"),ci=$("input"),va=de(),_s=Ee(n[24]),Ma=de(),Wn=$("div"),Ji=$("div"),Sa=Ee("Y move"),ui=$("input"),Ea=de(),gs=Ee(n[25]),xa=de(),Xn=$("div"),Qi=$("div"),ba=Ee("Z move"),fi=$("input"),ya=de(),vs=Ee(n[26]),Ta=de(),jn=$("div"),$i=$("div"),wa=Ee("Scale"),hi=$("input"),Aa=de(),Ms=Ee(n[27]),this.h()},l(Be){e=ee(Be,"DIV",{class:!0});var Fe=ae(e);t=ee(Fe,"DIV",{class:!0});var it=ae(t);i=ee(it,"DIV",{class:!0});var Vo=ae(i);r=xe(Vo,"Misc"),Vo.forEach(J),s=pe(it),a=ee(it,"DIV",{class:!0});var Ca=ae(a);o=ee(Ca,"DIV",{class:!0});var ko=ae(o);l=xe(ko,"Toggle floor"),ko.forEach(J),c=ee(Ca,"INPUT",{type:!0}),Ca.forEach(J),u=pe(it),d=ee(it,"DIV",{class:!0});var Pa=ae(d);f=ee(Pa,"DIV",{class:!0});var Go=ae(f);_=xe(Go,"Toggle html"),Go.forEach(J),v=ee(Pa,"INPUT",{type:!0}),Pa.forEach(J),g=pe(it),p=ee(it,"DIV",{class:!0});var La=ae(p);h=ee(La,"DIV",{class:!0});var Ho=ae(h);S=xe(Ho,"Animate"),Ho.forEach(J),m=ee(La,"INPUT",{type:!0}),La.forEach(J),x=pe(it),y=ee(it,"DIV",{class:!0});var Dr=ae(y);E=ee(Dr,"DIV",{class:!0});var Wo=ae(E);R=xe(Wo,"Camera FOV"),Wo.forEach(J),P=ee(Dr,"INPUT",{type:!0}),M=pe(Dr),A=xe(Dr,n[5]),Dr.forEach(J),I=pe(it),Q=ee(it,"DIV",{class:!0});var Ur=ae(Q);D=ee(Ur,"DIV",{class:!0});var Xo=ae(D);G=xe(Xo,"Ambient intensity"),Xo.forEach(J),B=ee(Ur,"INPUT",{type:!0}),ne=pe(Ur),H=xe(Ur,z),Ur.forEach(J),L=pe(it),k=ee(it,"DIV",{class:!0});var Ir=ae(k);re=ee(Ir,"DIV",{class:!0});var jo=ae(re);N=xe(jo,"Spot intensity"),jo.forEach(J),K=ee(Ir,"INPUT",{type:!0}),ie=pe(Ir),Me=xe(Ir,ge),Ir.forEach(J),Re=pe(it),fe=ee(it,"DIV",{class:!0});var qo=ae(fe);De=xe(qo,"Cube 1"),qo.forEach(J),mt=pe(it),We=ee(it,"DIV",{class:!0});var Nr=ae(We);O=ee(Nr,"DIV",{class:!0});var Yo=ae(O);Et=xe(Yo,"Animation"),Yo.forEach(J),Le=ee(Nr,"INPUT",{type:!0}),Xe=pe(Nr),Oe=xe(Nr,n[12]),Nr.forEach(J),rt=pe(it),ke=ee(it,"DIV",{class:!0});var Fr=ae(ke);Ve=ee(Fr,"DIV",{class:!0});var Ko=ae(Ve);et=xe(Ko,"X rotation"),Ko.forEach(J),_t=ee(Fr,"INPUT",{type:!0}),bt=pe(Fr),w=xe(Fr,n[13]),Fr.forEach(J),b=pe(it),j=ee(it,"DIV",{class:!0});var Or=ae(j);se=ee(Or,"DIV",{class:!0});var Zo=ae(se);oe=xe(Zo,"Y rotation"),Zo.forEach(J),ce=ee(Or,"INPUT",{type:!0}),Ce=pe(Or),me=xe(Or,n[14]),Or.forEach(J),Z=pe(it),we=ee(it,"DIV",{class:!0});var Br=ae(we);Pe=ee(Br,"DIV",{class:!0});var Jo=ae(Pe);Ue=xe(Jo,"Z rotation"),Jo.forEach(J),be=ee(Br,"INPUT",{type:!0}),Se=pe(Br),je=xe(Br,n[15]),Br.forEach(J),st=pe(it),U=ee(it,"DIV",{class:!0});var zr=ae(U);he=ee(zr,"DIV",{class:!0});var Qo=ae(he);X=xe(Qo,"X move"),Qo.forEach(J),le=ee(zr,"INPUT",{type:!0}),ve=pe(zr),$e=xe(zr,n[16]),zr.forEach(J),Mt=pe(it),at=ee(it,"DIV",{class:!0});var Vr=ae(at);Jt=ee(Vr,"DIV",{class:!0});var $o=ae(Jt);St=xe($o,"Y move"),$o.forEach(J),Rt=ee(Vr,"INPUT",{type:!0}),Ct=pe(Vr),Ai=xe(Vr,n[17]),Vr.forEach(J),Gi=pe(it),un=ee(it,"DIV",{class:!0});var kr=ae(un);fn=ee(kr,"DIV",{class:!0});var el=ae(fn);Hi=xe(el,"Z move"),el.forEach(J),tn=ee(kr,"INPUT",{type:!0}),Wi=pe(kr),Xi=xe(kr,n[18]),kr.forEach(J),Pr=pe(it),hn=ee(it,"DIV",{class:!0});var Gr=ae(hn);T=ee(Gr,"DIV",{class:!0});var tl=ae(T);V=xe(tl,"Scale"),tl.forEach(J),q=ee(Gr,"INPUT",{type:!0}),F=pe(Gr),Y=xe(Gr,n[19]),Gr.forEach(J),it.forEach(J),ye=pe(Fe),ue=ee(Fe,"DIV",{class:!0});var gt=ae(ue);Ne=ee(gt,"DIV",{class:!0});var nl=ae(Ne);Ge=xe(nl,"Spots"),nl.forEach(J),qe=pe(gt),ze=ee(gt,"DIV",{class:!0});var Da=ae(ze);He=ee(Da,"DIV",{class:!0});var il=ae(He);ct=xe(il,"Spot 1"),il.forEach(J),ut=ee(Da,"INPUT",{type:!0}),Da.forEach(J),Xt=pe(gt),Vt=ee(gt,"DIV",{class:!0});var Ua=ae(Vt);vt=ee(Ua,"DIV",{class:!0});var rl=ae(vt);Ze=xe(rl,"Spot 2"),rl.forEach(J),dn=ee(Ua,"INPUT",{type:!0}),Ua.forEach(J),yt=pe(gt),jt=ee(gt,"DIV",{class:!0});var Ia=ae(jt);Fn=ee(Ia,"DIV",{class:!0});var sl=ae(Fn);On=xe(sl,"Spot 3"),sl.forEach(J),pn=ee(Ia,"INPUT",{type:!0}),Ia.forEach(J),Pt=pe(gt),qt=ee(gt,"DIV",{class:!0});var Na=ae(qt);bn=ee(Na,"DIV",{class:!0});var al=ae(bn);kt=xe(al,"Spot 4"),al.forEach(J),mn=ee(Na,"INPUT",{type:!0}),Na.forEach(J),Lr=pe(gt),Bn=ee(gt,"DIV",{class:!0});var ol=ae(Bn);ia=xe(ol,"Cube 2"),ol.forEach(J),ra=pe(gt),zn=ee(gt,"DIV",{class:!0});var Hr=ae(zn);ji=ee(Hr,"DIV",{class:!0});var ll=ae(ji);sa=xe(ll,"Animation"),ll.forEach(J),si=ee(Hr,"INPUT",{type:!0}),aa=pe(Hr),hs=xe(Hr,n[20]),Hr.forEach(J),oa=pe(gt),Vn=ee(gt,"DIV",{class:!0});var Wr=ae(Vn);qi=ee(Wr,"DIV",{class:!0});var cl=ae(qi);la=xe(cl,"X rotation"),cl.forEach(J),ai=ee(Wr,"INPUT",{type:!0}),ca=pe(Wr),ds=xe(Wr,n[21]),Wr.forEach(J),ua=pe(gt),kn=ee(gt,"DIV",{class:!0});var Xr=ae(kn);Yi=ee(Xr,"DIV",{class:!0});var ul=ae(Yi);fa=xe(ul,"Y rotation"),ul.forEach(J),oi=ee(Xr,"INPUT",{type:!0}),ha=pe(Xr),ps=xe(Xr,n[22]),Xr.forEach(J),da=pe(gt),Gn=ee(gt,"DIV",{class:!0});var jr=ae(Gn);Ki=ee(jr,"DIV",{class:!0});var fl=ae(Ki);pa=xe(fl,"Z rotation"),fl.forEach(J),li=ee(jr,"INPUT",{type:!0}),ma=pe(jr),ms=xe(jr,n[23]),jr.forEach(J),_a=pe(gt),Hn=ee(gt,"DIV",{class:!0});var qr=ae(Hn);Zi=ee(qr,"DIV",{class:!0});var hl=ae(Zi);ga=xe(hl,"X move"),hl.forEach(J),ci=ee(qr,"INPUT",{type:!0}),va=pe(qr),_s=xe(qr,n[24]),qr.forEach(J),Ma=pe(gt),Wn=ee(gt,"DIV",{class:!0});var Yr=ae(Wn);Ji=ee(Yr,"DIV",{class:!0});var dl=ae(Ji);Sa=xe(dl,"Y move"),dl.forEach(J),ui=ee(Yr,"INPUT",{type:!0}),Ea=pe(Yr),gs=xe(Yr,n[25]),Yr.forEach(J),xa=pe(gt),Xn=ee(gt,"DIV",{class:!0});var Kr=ae(Xn);Qi=ee(Kr,"DIV",{class:!0});var pl=ae(Qi);ba=xe(pl,"Z move"),pl.forEach(J),fi=ee(Kr,"INPUT",{type:!0}),ya=pe(Kr),vs=xe(Kr,n[26]),Kr.forEach(J),Ta=pe(gt),jn=ee(gt,"DIV",{class:!0});var Zr=ae(jn);$i=ee(Zr,"DIV",{class:!0});var ml=ae($i);wa=xe(ml,"Scale"),ml.forEach(J),hi=ee(Zr,"INPUT",{type:!0}),Aa=pe(Zr),Ms=xe(Zr,n[27]),Zr.forEach(J),gt.forEach(J),Fe.forEach(J),this.h()},h(){te(i,"class","header svelte-ek39oa"),te(o,"class","label svelte-ek39oa"),te(c,"type","checkbox"),te(a,"class","control svelte-ek39oa"),te(f,"class","label svelte-ek39oa"),te(v,"type","checkbox"),te(d,"class","control svelte-ek39oa"),te(h,"class","label svelte-ek39oa"),te(m,"type","checkbox"),te(p,"class","control svelte-ek39oa"),te(E,"class","label svelte-ek39oa"),te(P,"type","range"),te(y,"class","control svelte-ek39oa"),te(D,"class","label svelte-ek39oa"),te(B,"type","range"),te(Q,"class","control svelte-ek39oa"),te(re,"class","label svelte-ek39oa"),te(K,"type","range"),te(k,"class","control svelte-ek39oa"),te(fe,"class","header svelte-ek39oa"),te(O,"class","label svelte-ek39oa"),te(Le,"type","range"),te(We,"class","control svelte-ek39oa"),te(Ve,"class","label svelte-ek39oa"),te(_t,"type","range"),te(ke,"class","control svelte-ek39oa"),te(se,"class","label svelte-ek39oa"),te(ce,"type","range"),te(j,"class","control svelte-ek39oa"),te(Pe,"class","label svelte-ek39oa"),te(be,"type","range"),te(we,"class","control svelte-ek39oa"),te(he,"class","label svelte-ek39oa"),te(le,"type","range"),te(U,"class","control svelte-ek39oa"),te(Jt,"class","label svelte-ek39oa"),te(Rt,"type","range"),te(at,"class","control svelte-ek39oa"),te(fn,"class","label svelte-ek39oa"),te(tn,"type","range"),te(un,"class","control svelte-ek39oa"),te(T,"class","label svelte-ek39oa"),te(q,"type","range"),te(hn,"class","control svelte-ek39oa"),te(t,"class","control-wrapper svelte-ek39oa"),te(Ne,"class","header svelte-ek39oa"),te(He,"class","label svelte-ek39oa"),te(ut,"type","checkbox"),te(ze,"class","control svelte-ek39oa"),te(vt,"class","label svelte-ek39oa"),te(dn,"type","checkbox"),te(Vt,"class","control svelte-ek39oa"),te(Fn,"class","label svelte-ek39oa"),te(pn,"type","checkbox"),te(jt,"class","control svelte-ek39oa"),te(bn,"class","label svelte-ek39oa"),te(mn,"type","checkbox"),te(qt,"class","control svelte-ek39oa"),te(Bn,"class","header svelte-ek39oa"),te(ji,"class","label svelte-ek39oa"),te(si,"type","range"),te(zn,"class","control svelte-ek39oa"),te(qi,"class","label svelte-ek39oa"),te(ai,"type","range"),te(Vn,"class","control svelte-ek39oa"),te(Yi,"class","label svelte-ek39oa"),te(oi,"type","range"),te(kn,"class","control svelte-ek39oa"),te(Ki,"class","label svelte-ek39oa"),te(li,"type","range"),te(Gn,"class","control svelte-ek39oa"),te(Zi,"class","label svelte-ek39oa"),te(ci,"type","range"),te(Hn,"class","control svelte-ek39oa"),te(Ji,"class","label svelte-ek39oa"),te(ui,"type","range"),te(Wn,"class","control svelte-ek39oa"),te(Qi,"class","label svelte-ek39oa"),te(fi,"type","range"),te(Xn,"class","control svelte-ek39oa"),te($i,"class","label svelte-ek39oa"),te(hi,"type","range"),te(jn,"class","control svelte-ek39oa"),te(ue,"class","control-wrapper svelte-ek39oa"),te(e,"class","settings-wrapper svelte-ek39oa")},m(Be,Fe){lt(Be,e,Fe),C(e,t),C(t,i),C(i,r),C(t,s),C(t,a),C(a,o),C(o,l),C(a,c),c.checked=n[1],C(t,u),C(t,d),C(d,f),C(f,_),C(d,v),v.checked=n[3],C(t,g),C(t,p),C(p,h),C(h,S),C(p,m),m.checked=n[0],C(t,x),C(t,y),C(y,E),C(E,R),C(y,P),Je(P,n[5]),C(y,M),C(y,A),C(t,I),C(t,Q),C(Q,D),C(D,G),C(Q,B),Je(B,n[6]),C(Q,ne),C(Q,H),C(t,L),C(t,k),C(k,re),C(re,N),C(k,K),Je(K,n[7]),C(k,ie),C(k,Me),C(t,Re),C(t,fe),C(fe,De),C(t,mt),C(t,We),C(We,O),C(O,Et),C(We,Le),Je(Le,n[12]),C(We,Xe),C(We,Oe),C(t,rt),C(t,ke),C(ke,Ve),C(Ve,et),C(ke,_t),Je(_t,n[13]),C(ke,bt),C(ke,w),C(t,b),C(t,j),C(j,se),C(se,oe),C(j,ce),Je(ce,n[14]),C(j,Ce),C(j,me),C(t,Z),C(t,we),C(we,Pe),C(Pe,Ue),C(we,be),Je(be,n[15]),C(we,Se),C(we,je),C(t,st),C(t,U),C(U,he),C(he,X),C(U,le),Je(le,n[16]),C(U,ve),C(U,$e),C(t,Mt),C(t,at),C(at,Jt),C(Jt,St),C(at,Rt),Je(Rt,n[17]),C(at,Ct),C(at,Ai),C(t,Gi),C(t,un),C(un,fn),C(fn,Hi),C(un,tn),Je(tn,n[18]),C(un,Wi),C(un,Xi),C(t,Pr),C(t,hn),C(hn,T),C(T,V),C(hn,q),Je(q,n[19]),C(hn,F),C(hn,Y),C(e,ye),C(e,ue),C(ue,Ne),C(Ne,Ge),C(ue,qe),C(ue,ze),C(ze,He),C(He,ct),C(ze,ut),ut.checked=n[8],C(ue,Xt),C(ue,Vt),C(Vt,vt),C(vt,Ze),C(Vt,dn),dn.checked=n[9],C(ue,yt),C(ue,jt),C(jt,Fn),C(Fn,On),C(jt,pn),pn.checked=n[10],C(ue,Pt),C(ue,qt),C(qt,bn),C(bn,kt),C(qt,mn),mn.checked=n[11],C(ue,Lr),C(ue,Bn),C(Bn,ia),C(ue,ra),C(ue,zn),C(zn,ji),C(ji,sa),C(zn,si),Je(si,n[20]),C(zn,aa),C(zn,hs),C(ue,oa),C(ue,Vn),C(Vn,qi),C(qi,la),C(Vn,ai),Je(ai,n[21]),C(Vn,ca),C(Vn,ds),C(ue,ua),C(ue,kn),C(kn,Yi),C(Yi,fa),C(kn,oi),Je(oi,n[22]),C(kn,ha),C(kn,ps),C(ue,da),C(ue,Gn),C(Gn,Ki),C(Ki,pa),C(Gn,li),Je(li,n[23]),C(Gn,ma),C(Gn,ms),C(ue,_a),C(ue,Hn),C(Hn,Zi),C(Zi,ga),C(Hn,ci),Je(ci,n[24]),C(Hn,va),C(Hn,_s),C(ue,Ma),C(ue,Wn),C(Wn,Ji),C(Ji,Sa),C(Wn,ui),Je(ui,n[25]),C(Wn,Ea),C(Wn,gs),C(ue,xa),C(ue,Xn),C(Xn,Qi),C(Qi,ba),C(Xn,fi),Je(fi,n[26]),C(Xn,ya),C(Xn,vs),C(ue,Ta),C(ue,jn),C(jn,$i),C($i,wa),C(jn,hi),Je(hi,n[27]),C(jn,Aa),C(jn,Ms),Ra||(zo=[Te(c,"change",n[40]),Te(v,"change",n[41]),Te(m,"change",n[42]),Te(P,"change",n[43]),Te(P,"input",n[43]),Te(B,"change",n[44]),Te(B,"input",n[44]),Te(K,"change",n[45]),Te(K,"input",n[45]),Te(Le,"change",n[46]),Te(Le,"input",n[46]),Te(_t,"change",n[47]),Te(_t,"input",n[47]),Te(ce,"change",n[48]),Te(ce,"input",n[48]),Te(be,"change",n[49]),Te(be,"input",n[49]),Te(le,"change",n[50]),Te(le,"input",n[50]),Te(Rt,"change",n[51]),Te(Rt,"input",n[51]),Te(tn,"change",n[52]),Te(tn,"input",n[52]),Te(q,"change",n[53]),Te(q,"input",n[53]),Te(ut,"change",n[54]),Te(dn,"change",n[55]),Te(pn,"change",n[56]),Te(mn,"change",n[57]),Te(si,"change",n[58]),Te(si,"input",n[58]),Te(ai,"change",n[59]),Te(ai,"input",n[59]),Te(oi,"change",n[60]),Te(oi,"input",n[60]),Te(li,"change",n[61]),Te(li,"input",n[61]),Te(ci,"change",n[62]),Te(ci,"input",n[62]),Te(ui,"change",n[63]),Te(ui,"input",n[63]),Te(fi,"change",n[64]),Te(fi,"input",n[64]),Te(hi,"change",n[65]),Te(hi,"input",n[65])],Ra=!0)},p(Be,Fe){Fe[0]&2&&(c.checked=Be[1]),Fe[0]&8&&(v.checked=Be[3]),Fe[0]&1&&(m.checked=Be[0]),Fe[0]&32&&Je(P,Be[5]),Fe[0]&32&&At(A,Be[5]),Fe[0]&64&&Je(B,Be[6]),Fe[0]&64&&z!==(z=Be[6]/100+"")&&At(H,z),Fe[0]&128&&Je(K,Be[7]),Fe[0]&128&&ge!==(ge=Be[7]/100+"")&&At(Me,ge),Fe[0]&4096&&Je(Le,Be[12]),Fe[0]&4096&&At(Oe,Be[12]),Fe[0]&8192&&Je(_t,Be[13]),Fe[0]&8192&&At(w,Be[13]),Fe[0]&16384&&Je(ce,Be[14]),Fe[0]&16384&&At(me,Be[14]),Fe[0]&32768&&Je(be,Be[15]),Fe[0]&32768&&At(je,Be[15]),Fe[0]&65536&&Je(le,Be[16]),Fe[0]&65536&&At($e,Be[16]),Fe[0]&131072&&Je(Rt,Be[17]),Fe[0]&131072&&At(Ai,Be[17]),Fe[0]&262144&&Je(tn,Be[18]),Fe[0]&262144&&At(Xi,Be[18]),Fe[0]&524288&&Je(q,Be[19]),Fe[0]&524288&&At(Y,Be[19]),Fe[0]&256&&(ut.checked=Be[8]),Fe[0]&512&&(dn.checked=Be[9]),Fe[0]&1024&&(pn.checked=Be[10]),Fe[0]&2048&&(mn.checked=Be[11]),Fe[0]&1048576&&Je(si,Be[20]),Fe[0]&1048576&&At(hs,Be[20]),Fe[0]&2097152&&Je(ai,Be[21]),Fe[0]&2097152&&At(ds,Be[21]),Fe[0]&4194304&&Je(oi,Be[22]),Fe[0]&4194304&&At(ps,Be[22]),Fe[0]&8388608&&Je(li,Be[23]),Fe[0]&8388608&&At(ms,Be[23]),Fe[0]&16777216&&Je(ci,Be[24]),Fe[0]&16777216&&At(_s,Be[24]),Fe[0]&33554432&&Je(ui,Be[25]),Fe[0]&33554432&&At(gs,Be[25]),Fe[0]&67108864&&Je(fi,Be[26]),Fe[0]&67108864&&At(vs,Be[26]),Fe[0]&134217728&&Je(hi,Be[27]),Fe[0]&134217728&&At(Ms,Be[27])},d(Be){Be&&J(e),Ra=!1,as(zo)}}}function Zc(n){let e,t;return e=new na({props:{shadow:!0,position:{x:-5,y:20,z:-10},intensity:n[7]/50}}),{c(){ft(e.$$.fragment)},l(i){ht(e.$$.fragment,i)},m(i,r){dt(e,i,r),t=!0},p(i,r){const s={};r[0]&128&&(s.intensity=i[7]/50),e.$set(s)},i(i){t||(Ae(e.$$.fragment,i),t=!0)},o(i){Ie(e.$$.fragment,i),t=!1},d(i){pt(e,i)}}}function Jc(n){let e,t;return e=new na({props:{shadow:!0,position:{x:-10,y:20,z:-5},intensity:n[7]/50}}),{c(){ft(e.$$.fragment)},l(i){ht(e.$$.fragment,i)},m(i,r){dt(e,i,r),t=!0},p(i,r){const s={};r[0]&128&&(s.intensity=i[7]/50),e.$set(s)},i(i){t||(Ae(e.$$.fragment,i),t=!0)},o(i){Ie(e.$$.fragment,i),t=!1},d(i){pt(e,i)}}}function Qc(n){let e,t;return e=new na({props:{shadow:!0,position:{x:-10,y:20,z:5},intensity:n[7]/50}}),{c(){ft(e.$$.fragment)},l(i){ht(e.$$.fragment,i)},m(i,r){dt(e,i,r),t=!0},p(i,r){const s={};r[0]&128&&(s.intensity=i[7]/50),e.$set(s)},i(i){t||(Ae(e.$$.fragment,i),t=!0)},o(i){Ie(e.$$.fragment,i),t=!1},d(i){pt(e,i)}}}function $c(n){let e,t;return e=new na({props:{target:{x:13,y:5,z:8.5},shadow:!0,position:{x:-15,y:25,z:-10},intensity:2}}),{c(){ft(e.$$.fragment)},l(i){ht(e.$$.fragment,i)},m(i,r){dt(e,i,r),t=!0},i(i){t||(Ae(e.$$.fragment,i),t=!0)},o(i){Ie(e.$$.fragment,i),t=!1},d(i){pt(e,i)}}}function Dv(n){let e,t,i,r,s,a,o,l,c,u,d,f,_,v;e=new rv({props:{position:{x:0,y:20,z:0},lookAt:{x:0,y:0,z:0},fov:n[5]}});let g=n[8]&&Zc(n),p=n[9]&&Jc(n),h=n[10]&&Qc(n),S=n[11]&&$c();return o=new dv({props:{intensity:n[6]/100}}),c=new mo({props:{scale:n[19]/20,position:{x:n[16]/2.5-20,y:n[17]/10-10,z:n[18]/5-10},rotation:{x:n[13]*3.6*(Math.PI/180),y:n[14]*3.6*(Math.PI/180),z:n[15]*3.6*(Math.PI/180)},castShadow:!0,receiveShadow:!0,geometry:new po(5,3,5),material:n[4]}}),d=new mo({props:{scale:n[27]/20,position:{x:n[24]/2.5-20,y:n[25]/10-10,z:n[26]/5-10},rotation:{x:n[21]*3.6*(Math.PI/180),y:n[22]*3.6*(Math.PI/180),z:n[23]*3.6*(Math.PI/180)},castShadow:!0,receiveShadow:!0,geometry:new po(5,3,5),material:n[4]}}),_=new mo({props:{receiveShadow:!0,rotation:{x:-90*(Math.PI/180)},geometry:new po(300,300,.01),material:n[1]?n[4]:n[30]}}),{c(){ft(e.$$.fragment),t=de(),g&&g.c(),i=de(),p&&p.c(),r=de(),h&&h.c(),s=de(),S&&S.c(),a=de(),ft(o.$$.fragment),l=de(),ft(c.$$.fragment),u=de(),ft(d.$$.fragment),f=de(),ft(_.$$.fragment)},l(m){ht(e.$$.fragment,m),t=pe(m),g&&g.l(m),i=pe(m),p&&p.l(m),r=pe(m),h&&h.l(m),s=pe(m),S&&S.l(m),a=pe(m),ht(o.$$.fragment,m),l=pe(m),ht(c.$$.fragment,m),u=pe(m),ht(d.$$.fragment,m),f=pe(m),ht(_.$$.fragment,m)},m(m,x){dt(e,m,x),lt(m,t,x),g&&g.m(m,x),lt(m,i,x),p&&p.m(m,x),lt(m,r,x),h&&h.m(m,x),lt(m,s,x),S&&S.m(m,x),lt(m,a,x),dt(o,m,x),lt(m,l,x),dt(c,m,x),lt(m,u,x),dt(d,m,x),lt(m,f,x),dt(_,m,x),v=!0},p(m,x){const y={};x[0]&32&&(y.fov=m[5]),e.$set(y),m[8]?g?(g.p(m,x),x[0]&256&&Ae(g,1)):(g=Zc(m),g.c(),Ae(g,1),g.m(i.parentNode,i)):g&&(Ni(),Ie(g,1,1,()=>{g=null}),Fi()),m[9]?p?(p.p(m,x),x[0]&512&&Ae(p,1)):(p=Jc(m),p.c(),Ae(p,1),p.m(r.parentNode,r)):p&&(Ni(),Ie(p,1,1,()=>{p=null}),Fi()),m[10]?h?(h.p(m,x),x[0]&1024&&Ae(h,1)):(h=Qc(m),h.c(),Ae(h,1),h.m(s.parentNode,s)):h&&(Ni(),Ie(h,1,1,()=>{h=null}),Fi()),m[11]?S?x[0]&2048&&Ae(S,1):(S=$c(),S.c(),Ae(S,1),S.m(a.parentNode,a)):S&&(Ni(),Ie(S,1,1,()=>{S=null}),Fi());const E={};x[0]&64&&(E.intensity=m[6]/100),o.$set(E);const R={};x[0]&524288&&(R.scale=m[19]/20),x[0]&458752&&(R.position={x:m[16]/2.5-20,y:m[17]/10-10,z:m[18]/5-10}),x[0]&57344&&(R.rotation={x:m[13]*3.6*(Math.PI/180),y:m[14]*3.6*(Math.PI/180),z:m[15]*3.6*(Math.PI/180)}),x[0]&16&&(R.material=m[4]),c.$set(R);const P={};x[0]&134217728&&(P.scale=m[27]/20),x[0]&117440512&&(P.position={x:m[24]/2.5-20,y:m[25]/10-10,z:m[26]/5-10}),x[0]&14680064&&(P.rotation={x:m[21]*3.6*(Math.PI/180),y:m[22]*3.6*(Math.PI/180),z:m[23]*3.6*(Math.PI/180)}),x[0]&16&&(P.material=m[4]),d.$set(P);const M={};x[0]&18&&(M.material=m[1]?m[4]:m[30]),_.$set(M)},i(m){v||(Ae(e.$$.fragment,m),Ae(g),Ae(p),Ae(h),Ae(S),Ae(o.$$.fragment,m),Ae(c.$$.fragment,m),Ae(d.$$.fragment,m),Ae(_.$$.fragment,m),v=!0)},o(m){Ie(e.$$.fragment,m),Ie(g),Ie(p),Ie(h),Ie(S),Ie(o.$$.fragment,m),Ie(c.$$.fragment,m),Ie(d.$$.fragment,m),Ie(_.$$.fragment,m),v=!1},d(m){pt(e,m),m&&J(t),g&&g.d(m),m&&J(i),p&&p.d(m),m&&J(r),h&&h.d(m),m&&J(s),S&&S.d(m),m&&J(a),pt(o,m),m&&J(l),pt(c,m),m&&J(u),pt(d,m),m&&J(f),pt(_,m)}}}function eu(n){let e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p,h;return{c(){e=$("div"),t=$("div"),i=de(),r=$("div"),s=Ee("Careers"),a=de(),o=$("h1"),l=$("b"),c=Ee("Passionate about open source?"),u=$("br"),d=Ee(`
      So are we. Be where the cutting edge is established.`),f=de(),_=$("div"),v=$("input"),g=de(),p=$("div"),h=Ee("Search roles"),this.h()},l(S){e=ee(S,"DIV",{class:!0});var m=ae(e);t=ee(m,"DIV",{class:!0}),ae(t).forEach(J),i=pe(m),r=ee(m,"DIV",{class:!0});var x=ae(r);s=xe(x,"Careers"),x.forEach(J),a=pe(m),o=ee(m,"H1",{class:!0});var y=ae(o);l=ee(y,"B",{});var E=ae(l);c=xe(E,"Passionate about open source?"),E.forEach(J),u=ee(y,"BR",{}),d=xe(y,`
      So are we. Be where the cutting edge is established.`),y.forEach(J),f=pe(m),_=ee(m,"DIV",{class:!0});var R=ae(_);v=ee(R,"INPUT",{type:!0,placeholder:!0,class:!0}),g=pe(R),p=ee(R,"DIV",{class:!0});var P=ae(p);h=xe(P,"Search roles"),P.forEach(J),R.forEach(J),m.forEach(J),this.h()},h(){te(t,"class","fake-header svelte-ek39oa"),te(r,"class","page-header svelte-ek39oa"),te(o,"class","svelte-ek39oa"),te(v,"type","text"),te(v,"placeholder","Search by keyword"),te(v,"class","svelte-ek39oa"),te(p,"class","btn svelte-ek39oa"),te(_,"class","search svelte-ek39oa"),te(e,"class","html-overlay svelte-ek39oa"),ln(e,"dark",n[4]==n[29][1])},m(S,m){lt(S,e,m),C(e,t),C(e,i),C(e,r),C(r,s),C(e,a),C(e,o),C(o,l),C(l,c),C(o,u),C(o,d),C(e,f),C(e,_),C(_,v),C(_,g),C(_,p),C(p,h)},p(S,m){m[0]&536870928&&ln(e,"dark",S[4]==S[29][1])},d(S){S&&J(e)}}}function Uv(n){let e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p,h,S,m,x,y,E,R,P,M,A,I,Q;function D(k,re){return k[2]?Lv:Pv}let G=D(n),B=G(n),ne=n[28],z=[];for(let k=0;k<ne.length;k+=1)z[k]=Yc(qc(n,ne,k));let H=n[2]&&Kc(n);P=new Bg({props:{$$slots:{default:[Dv]},$$scope:{ctx:n}}});let L=n[3]&&eu(n);return{c(){e=$("div"),t=$("div"),i=$("div"),r=Ee("Settings "),B.c(),s=de(),a=$("div"),o=Ee("Material 1"),l=de(),c=$("div"),u=Ee("Material 2"),d=de(),f=$("div"),_=Ee("."),v=de(),g=$("div"),p=Ee("Randomize"),h=de(),S=$("div"),m=Ee("+"),x=de();for(let k=0;k<z.length;k+=1)z[k].c();y=de(),H&&H.c(),E=de(),R=$("div"),ft(P.$$.fragment),M=de(),L&&L.c(),this.h()},l(k){e=ee(k,"DIV",{class:!0});var re=ae(e);t=ee(re,"DIV",{});var N=ae(t);i=ee(N,"DIV",{class:!0});var K=ae(i);r=xe(K,"Settings "),B.l(K),K.forEach(J),s=pe(N),a=ee(N,"DIV",{class:!0});var ie=ae(a);o=xe(ie,"Material 1"),ie.forEach(J),l=pe(N),c=ee(N,"DIV",{class:!0});var ge=ae(c);u=xe(ge,"Material 2"),ge.forEach(J),d=pe(N),f=ee(N,"DIV",{class:!0});var Me=ae(f);_=xe(Me,"."),Me.forEach(J),v=pe(N),g=ee(N,"DIV",{class:!0});var Re=ae(g);p=xe(Re,"Randomize"),Re.forEach(J),h=pe(N),S=ee(N,"DIV",{class:!0});var fe=ae(S);m=xe(fe,"+"),fe.forEach(J),x=pe(N);for(let mt=0;mt<z.length;mt+=1)z[mt].l(N);N.forEach(J),y=pe(re),H&&H.l(re),E=pe(re),R=ee(re,"DIV",{class:!0});var De=ae(R);ht(P.$$.fragment,De),M=pe(De),L&&L.l(De),De.forEach(J),re.forEach(J),this.h()},h(){te(i,"class","settings-toggle svelte-ek39oa"),te(a,"class","btn svelte-ek39oa"),ln(a,"selected",n[4]==n[29][0]),te(c,"class","btn svelte-ek39oa"),ln(c,"selected",n[4]==n[29][1]),te(f,"class","btn svelte-ek39oa"),ln(f,"selected",n[4]==n[29][2]),te(g,"class","btn svelte-ek39oa"),te(S,"class","btn svelte-ek39oa"),te(R,"class","canvas-wrapper svelte-ek39oa"),te(e,"class","suru_wrapper svelte-ek39oa")},m(k,re){lt(k,e,re),C(e,t),C(t,i),C(i,r),B.m(i,null),C(t,s),C(t,a),C(a,o),C(t,l),C(t,c),C(c,u),C(t,d),C(t,f),C(f,_),C(t,v),C(t,g),C(g,p),C(t,h),C(t,S),C(S,m),C(t,x);for(let N=0;N<z.length;N+=1)z[N]&&z[N].m(t,null);C(e,y),H&&H.m(e,null),C(e,E),C(e,R),dt(P,R,null),C(R,M),L&&L.m(R,null),A=!0,I||(Q=[Te(i,"click",gi(n[34])),Te(a,"click",gi(n[35])),Te(c,"click",gi(n[36])),Te(f,"click",gi(n[37])),Te(g,"click",gi(n[31])),Te(S,"click",gi(n[32]))],I=!0)},p(k,re){if(G!==(G=D(k))&&(B.d(1),B=G(k),B&&(B.c(),B.m(i,null))),(!A||re[0]&536870928)&&ln(a,"selected",k[4]==k[29][0]),(!A||re[0]&536870928)&&ln(c,"selected",k[4]==k[29][1]),(!A||re[0]&536870928)&&ln(f,"selected",k[4]==k[29][2]),re[0]&268435456|re[1]&4){ne=k[28];let K;for(K=0;K<ne.length;K+=1){const ie=qc(k,ne,K);z[K]?z[K].p(ie,re):(z[K]=Yc(ie),z[K].c(),z[K].m(t,null))}for(;K<z.length;K+=1)z[K].d(1);z.length=ne.length}k[2]?H?H.p(k,re):(H=Kc(k),H.c(),H.m(e,E)):H&&(H.d(1),H=null);const N={};re[0]&267382770|re[2]&2048&&(N.$$scope={dirty:re,ctx:k}),P.$set(N),k[3]?L?L.p(k,re):(L=eu(k),L.c(),L.m(R,null)):L&&(L.d(1),L=null)},i(k){A||(Ae(P.$$.fragment,k),A=!0)},o(k){Ie(P.$$.fragment,k),A=!1},d(k){k&&J(e),B.d(),Ks(z,k),H&&H.d(),pt(P),L&&L.d(),I=!1,as(Q)}}}function Iv(n,e,t){let i=!1,r=!1,s=!1;const a=Cv("https://unco.github.io/docs/paper.png",{onError:Se=>{console.warn(`An error occured loading the texture: ${Se.message}`)}});let o=[new Gs({map:a}),new Gs({color:"#000000"}),new Gs({color:"#E95420"})],l=o[0],c=new Gs({color:"#ff3300"}),u=50,d=100,f=100,_=!0,v=!0,g=!0,p=!0,h=!0,S=5,m=34,x=16,y=5,E=69,R=49,P=51,M=34,A=10,I=60,Q=5,D=5,G=80,B=50,ne=79,z=45,H=[[86,4,44,24,69,72,34,65,22,20,61,0,68,78,1],[69,19,83,13,47,32,91,51,64,96,64,73,68,53,0]],L;async function k(){L&&clearInterval(L),r&&(L=setInterval(()=>{t(15,y+=S/200),t(13,m+=S/200),t(23,D+=A/200),t(21,I+=A/200),y>100&&t(15,y=0),D>100&&t(23,D=0),m>100&&t(13,m=0),I>100&&t(21,I=0)},100))}function re(){t(13,m=Math.round(Math.random()*100)),t(14,x=Math.round(Math.random()*100)),t(15,y=Math.round(Math.random()*100)),t(16,E=Math.round(Math.random()*100)),t(17,R=Math.round(Math.random()*100)),t(18,P=Math.round(Math.random()*100)),t(19,M=Math.round(Math.random()*100)),t(21,I=Math.round(Math.random()*100)),t(22,Q=Math.round(Math.random()*100)),t(23,D=Math.round(Math.random()*100)),t(24,G=Math.round(Math.random()*100)),t(25,B=Math.round(Math.random()*100)),t(26,ne=Math.round(Math.random()*100)),t(27,z=Math.round(Math.random()*100))}function N(){H.push([m,x,y,E,R,P,M,I,Q,D,G,B,ne,z]),t(28,H)}function K(Se){t(13,[m,x,y,E,R,P,M,I,Q,D,G,B,ne,z]=H[Se],m,t(14,x),t(15,y),t(16,E),t(17,R),t(18,P),t(19,M),t(21,I),t(22,Q),t(23,D),t(24,G),t(25,B),t(26,ne),t(27,z)),console.log("m?",H[Se][14]),t(4,l=o[H[Se][14]])}const ie=()=>{t(2,i=!i)},ge=()=>{t(4,l=o[0])},Me=()=>{t(4,l=o[1])},Re=()=>{t(4,l=o[2])},fe=Se=>{K(Se)},De=Se=>{};function mt(){_=this.checked,t(1,_)}function We(){s=this.checked,t(3,s)}function O(){r=this.checked,t(0,r)}function Et(){u=Lt(this.value),t(5,u)}function Le(){d=Lt(this.value),t(6,d)}function Xe(){f=Lt(this.value),t(7,f)}function Oe(){S=Lt(this.value),t(12,S)}function rt(){m=Lt(this.value),t(13,m)}function ke(){x=Lt(this.value),t(14,x)}function Ve(){y=Lt(this.value),t(15,y)}function et(){E=Lt(this.value),t(16,E)}function _t(){R=Lt(this.value),t(17,R)}function bt(){P=Lt(this.value),t(18,P)}function w(){M=Lt(this.value),t(19,M)}function b(){v=this.checked,t(8,v)}function j(){g=this.checked,t(9,g)}function se(){p=this.checked,t(10,p)}function oe(){h=this.checked,t(11,h)}function ce(){A=Lt(this.value),t(20,A)}function Ce(){I=Lt(this.value),t(21,I)}function me(){Q=Lt(this.value),t(22,Q)}function Z(){D=Lt(this.value),t(23,D)}function we(){G=Lt(this.value),t(24,G)}function Pe(){B=Lt(this.value),t(25,B)}function Ue(){ne=Lt(this.value),t(26,ne)}function be(){z=Lt(this.value),t(27,z)}return n.$$.update=()=>{n.$$.dirty[0]&1&&k(),n.$$.dirty[0]&2},[r,_,i,s,l,u,d,f,v,g,p,h,S,m,x,y,E,R,P,M,A,I,Q,D,G,B,ne,z,H,o,c,re,N,K,ie,ge,Me,Re,fe,De,mt,We,O,Et,Le,Xe,Oe,rt,ke,Ve,et,_t,bt,w,b,j,se,oe,ce,Ce,me,Z,we,Pe,Ue,be]}class Nv extends It{constructor(e){super(),Nt(this,e,Iv,Uv,Ft,{},null,[-1,-1,-1])}}function tu(n,e,t){const i=n.slice();return i[16]=e[t],i[18]=t,i}function nu(n,e,t){const i=n.slice();return i[19]=e[t],i[21]=t,i}function iu(n){let e,t=n[4],i=[];for(let r=0;r<t.length;r+=1)i[r]=su(tu(n,t,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=js()},l(r){for(let s=0;s<i.length;s+=1)i[s].l(r);e=js()},m(r,s){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(r,s);lt(r,e,s)},p(r,s){if(s&57){t=r[4];let a;for(a=0;a<t.length;a+=1){const o=tu(r,t,a);i[a]?i[a].p(o,s):(i[a]=su(o),i[a].c(),i[a].m(e.parentNode,e))}for(;a<i.length;a+=1)i[a].d(1);i.length=t.length}},d(r){Ks(i,r),r&&J(e)}}}function ru(n){let e,t,i,r;function s(){return n[12](n[18],n[21])}return{c(){e=$("div"),t=$("div"),this.h()},l(a){e=ee(a,"DIV",{class:!0,style:!0});var o=ae(e);t=ee(o,"DIV",{style:!0,class:!0}),ae(t).forEach(J),o.forEach(J),this.h()},h(){er(t,"background-image","url(https://unco.github.io/docs/glyphs/"+n[19]+".svg)"),te(t,"class","svelte-1vq0jo4"),te(e,"class","glyph svelte-1vq0jo4"),er(e,"width",n[3]+"px"),er(e,"height",n[3]+"px"),ln(e,"hover_target",n[0]),ln(e,"empty",n[19]=="X")},m(a,o){lt(a,e,o),C(e,t),i||(r=Te(e,"mouseleave",s),i=!0)},p(a,o){n=a,o&16&&er(t,"background-image","url(https://unco.github.io/docs/glyphs/"+n[19]+".svg)"),o&8&&er(e,"width",n[3]+"px"),o&8&&er(e,"height",n[3]+"px"),o&1&&ln(e,"hover_target",n[0]),o&16&&ln(e,"empty",n[19]=="X")},d(a){a&&J(e),i=!1,r()}}}function su(n){let e,t,i=n[16],r=[];for(let s=0;s<i.length;s+=1)r[s]=ru(nu(n,i,s));return{c(){e=$("div");for(let s=0;s<r.length;s+=1)r[s].c();t=de(),this.h()},l(s){e=ee(s,"DIV",{class:!0});var a=ae(e);for(let o=0;o<r.length;o+=1)r[o].l(a);t=pe(a),a.forEach(J),this.h()},h(){te(e,"class","row svelte-1vq0jo4")},m(s,a){lt(s,e,a);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null);C(e,t)},p(s,a){if(a&57){i=s[16];let o;for(o=0;o<i.length;o+=1){const l=nu(s,i,o);r[o]?r[o].p(l,a):(r[o]=ru(l),r[o].c(),r[o].m(e,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=i.length}},d(s){s&&J(e),Ks(r,s)}}}function Fv(n){let e,t=n[1]&&iu(n);return{c(){e=$("div"),t&&t.c(),this.h()},l(i){e=ee(i,"DIV",{class:!0});var r=ae(e);t&&t.l(r),r.forEach(J),this.h()},h(){te(e,"class","glyphs_container svelte-1vq0jo4")},m(i,r){lt(i,e,r),t&&t.m(e,null),n[13](e)},p(i,[r]){i[1]?t?t.p(i,r):(t=iu(i),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:ki,o:ki,d(i){i&&J(e),t&&t.d(),n[13](null)}}}let Ov=45;function Bv(n,e,t){let i,r=!1,s,{hover_target:a=!0}=e,{glyph_break:o=.4}=e,{blank_fill:l=!1}=e,{glyph_grid:c=[]}=e,{single_target:u}=e,{iterations:d=10}=e,{initial_ms:f=300}=e,_=[];function v(){t(4,_=structuredClone(c)),p(0),t(1,r=!0)}function g(m,x,y){let E=Math.floor(Math.random()*(Ov-1))+1+"";if(y==d&&(c[m][x]==""?E="X":u?E=u:c[m][x]!=="?"&&(E=c[m][x]),Math.random()<o)){let A=f*(Math.random()*87+3);setTimeout(function(){g(m,x,y+10)},A)}!l&&c[m][x]==""&&(E="X"),t(4,_[m][x]=E,_),t(4,_);let R=y/d*f;R=R*(Math.random()*(1.2-.8)+.8);let P=f-R;y<d&&setTimeout(function(){g(m,x,y+1)},P)}function p(m){_.forEach((x,y)=>{x.forEach((E,R)=>{g(y,R,m)})})}cu(()=>{let m=c.length,x=c[0].length,y=i.offsetWidth/x,E=i.offsetHeight/m;t(3,s=Math.floor(Math.min(y,E))),v()});const h=(m,x)=>g(m,x,0);function S(m){In[m?"unshift":"push"](()=>{i=m,t(2,i)})}return n.$$set=m=>{"hover_target"in m&&t(0,a=m.hover_target),"glyph_break"in m&&t(6,o=m.glyph_break),"blank_fill"in m&&t(7,l=m.blank_fill),"glyph_grid"in m&&t(8,c=m.glyph_grid),"single_target"in m&&t(9,u=m.single_target),"iterations"in m&&t(10,d=m.iterations),"initial_ms"in m&&t(11,f=m.initial_ms)},n.$$.update=()=>{n.$$.dirty&258&&r&&(t(1,r=!1),v())},[a,r,i,s,_,g,o,l,c,u,d,f,h,S]}class tf extends It{constructor(e){super(),Nt(this,e,Bv,Fv,Ft,{hover_target:0,glyph_break:6,blank_fill:7,glyph_grid:8,single_target:9,iterations:10,initial_ms:11})}}function zv(n){let e,t,i,r,s;return r=new tf({props:{glyph_grid:n[0],single_target:Vv,blank_fill:Gv,glyph_break:Hv,hover_target:kv}}),{c(){e=$("h1"),t=Ee("Made by Canonical with"),i=$("span"),ft(r.$$.fragment),this.h()},l(a){e=ee(a,"H1",{class:!0});var o=ae(e);t=xe(o,"Made by Canonical with"),i=ee(o,"SPAN",{class:!0});var l=ae(i);ht(r.$$.fragment,l),l.forEach(J),o.forEach(J),this.h()},h(){te(i,"class","svelte-hvpd2t"),te(e,"class","svelte-hvpd2t")},m(a,o){lt(a,e,o),C(e,t),C(e,i),dt(r,i,null),s=!0},p:ki,i(a){s||(Ae(r.$$.fragment,a),s=!0)},o(a){Ie(r.$$.fragment,a),s=!1},d(a){a&&J(e),pt(r)}}}let Vv=!1,kv=!1,Gv=!0,Hv=0;function Wv(n){return[[["29","18","28","8"]]]}class Xv extends It{constructor(e){super(),Nt(this,e,Wv,zv,Ft,{})}}function au(n,e,t){const i=n.slice();return i[10]=e[t],i}function ou(n){let e,t;return e=new tf({props:{glyph_grid:n[2],single_target:qv,blank_fill:Kv,glyph_break:n[3],hover_target:Yv}}),{c(){ft(e.$$.fragment)},l(i){ht(e.$$.fragment,i)},m(i,r){dt(e,i,r),t=!0},p(i,r){const s={};r&4&&(s.glyph_grid=i[2]),r&8&&(s.glyph_break=i[3]),e.$set(s)},i(i){t||(Ae(e.$$.fragment,i),t=!0)},o(i){Ie(e.$$.fragment,i),t=!1},d(i){pt(e,i)}}}function lu(n){let e,t=n[10]+"",i;return{c(){e=$("option"),i=Ee(t),this.h()},l(r){e=ee(r,"OPTION",{});var s=ae(e);i=xe(s,t),s.forEach(J),this.h()},h(){e.__value=n[10],e.value=e.__value},m(r,s){lt(r,e,s),C(e,i)},p:ki,d(r){r&&J(e)}}}function jv(n){let e,t,i,r,s,a,o,l,c,u,d,f,_,v,g,p,h,S=n[2]&&ou(n),m=n[4],x=[];for(let y=0;y<m.length;y+=1)x[y]=lu(au(n,m,y));return{c(){e=$("div"),t=$("div"),S&&S.c(),i=de(),r=$("div"),s=Ee(`Glyph
    `),a=$("select");for(let y=0;y<x.length;y+=1)x[y].c();o=Ee(`

   Decay `),l=$("button"),c=Ee("-"),u=de(),d=$("button"),f=Ee("+"),_=de(),v=Ee(n[0]),this.h()},l(y){e=ee(y,"DIV",{class:!0});var E=ae(e);t=ee(E,"DIV",{class:!0});var R=ae(t);S&&S.l(R),R.forEach(J),i=pe(E),r=ee(E,"DIV",{class:!0});var P=ae(r);s=xe(P,`Glyph
    `),a=ee(P,"SELECT",{});var M=ae(a);for(let Q=0;Q<x.length;Q+=1)x[Q].l(M);M.forEach(J),o=xe(P,`

   Decay `),l=ee(P,"BUTTON",{});var A=ae(l);c=xe(A,"-"),A.forEach(J),u=pe(P),d=ee(P,"BUTTON",{});var I=ae(d);f=xe(I,"+"),I.forEach(J),_=pe(P),v=xe(P,n[0]),P.forEach(J),E.forEach(J),this.h()},h(){te(t,"class","glyphs svelte-1qfryrb"),n[1]===void 0&&rf(()=>n[5].call(a)),te(r,"class","panel svelte-1qfryrb"),te(e,"class","win svelte-1qfryrb")},m(y,E){lt(y,e,E),C(e,t),S&&S.m(t,null),C(e,i),C(e,r),C(r,s),C(r,a);for(let R=0;R<x.length;R+=1)x[R]&&x[R].m(a,null);_l(a,n[1],!0),C(r,o),C(r,l),C(l,c),C(r,u),C(r,d),C(d,f),C(r,_),C(r,v),g=!0,p||(h=[Te(a,"change",n[5]),Te(l,"click",n[6]),Te(d,"click",n[7])],p=!0)},p(y,[E]){if(y[2]?S?(S.p(y,E),E&4&&Ae(S,1)):(S=ou(y),S.c(),Ae(S,1),S.m(t,null)):S&&(Ni(),Ie(S,1,1,()=>{S=null}),Fi()),E&16){m=y[4];let R;for(R=0;R<m.length;R+=1){const P=au(y,m,R);x[R]?x[R].p(P,E):(x[R]=lu(P),x[R].c(),x[R].m(a,null))}for(;R<x.length;R+=1)x[R].d(1);x.length=m.length}E&18&&_l(a,y[1]),(!g||E&1)&&At(v,y[0])},i(y){g||(Ae(S),g=!0)},o(y){Ie(S),g=!1},d(y){y&&J(e),S&&S.d(),Ks(x,y),p=!1,as(h)}}}let qv=!1,Yv=!0,Kv=!1;function Zv(n,e,t){let i=20,r=0,s=["?","","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41"],a=s[14],o=[[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],i[a],[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a]];function l(){a=sf(this),t(1,a),t(4,s)}const c=()=>{i>0&&t(0,i-=10)},u=()=>{i<100&&t(0,i+=10)};return n.$$.update=()=>{if(n.$$.dirty&1&&t(3,r=i/100),n.$$.dirty&7){let d=[];for(let f=0;f<10;f++){let _=[];for(let v=0;v<17;v++)JSON.stringify(o),_.push(a);d.push(_)}t(3,r=i/100),t(2,o=d)}},[i,a,o,r,s,l,c,u]}class Jv extends It{constructor(e){super(),Nt(this,e,Zv,jv,Ft,{})}}function Qv(n){let e;return{c(){e=Ee("no toy")},l(t){e=xe(t,"no toy")},m(t,i){lt(t,e,i)},i:ki,o:ki,d(t){t&&J(e)}}}function $v(n){let e,t;return e=new Jv({}),{c(){ft(e.$$.fragment)},l(i){ht(e.$$.fragment,i)},m(i,r){dt(e,i,r),t=!0},i(i){t||(Ae(e.$$.fragment,i),t=!0)},o(i){Ie(e.$$.fragment,i),t=!1},d(i){pt(e,i)}}}function e0(n){let e,t;return e=new Xv({}),{c(){ft(e.$$.fragment)},l(i){ht(e.$$.fragment,i)},m(i,r){dt(e,i,r),t=!0},i(i){t||(Ae(e.$$.fragment,i),t=!0)},o(i){Ie(e.$$.fragment,i),t=!1},d(i){pt(e,i)}}}function t0(n){let e,t;return e=new Nv({}),{c(){ft(e.$$.fragment)},l(i){ht(e.$$.fragment,i)},m(i,r){dt(e,i,r),t=!0},i(i){t||(Ae(e.$$.fragment,i),t=!0)},o(i){Ie(e.$$.fragment,i),t=!1},d(i){pt(e,i)}}}function n0(n){let e,t,i,r;const s=[t0,e0,$v,Qv],a=[];function o(l,c){return l[0]=="suru"?0:l[0]=="love"?1:l[0]=="glyph"?2:3}return e=o(n),t=a[e]=s[e](n),{c(){t.c(),i=js()},l(l){t.l(l),i=js()},m(l,c){a[e].m(l,c),lt(l,i,c),r=!0},p:ki,i(l){r||(Ae(t),r=!0)},o(l){Ie(t),r=!1},d(l){a[e].d(l),l&&J(i)}}}function i0(n,e,t){let i;return Bt(n,af,s=>t(1,i=s)),[i.params.toy]}class f0 extends It{constructor(e){super(),Nt(this,e,i0,n0,Ft,{})}}export{f0 as component};
