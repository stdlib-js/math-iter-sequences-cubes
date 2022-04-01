// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;var f=function(r,e,t){var n,f,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(c.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,f&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=f,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=g,d=Object.prototype.hasOwnProperty;var b=function(r,e){return null!=r&&d.call(r,e)},h=b;var y=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&h(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},E=Object.prototype.toString,P=E;var O=function(r){return P.call(r)},_="function"==typeof Symbol?Symbol.toStringTag:"",T=b,S=_,x=E;var V=O,k=function(r){var e,t,n;if(null==r)return x.call(r);t=r[S],e=T(r,S);try{r[S]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[S]=t:delete r[S],n},I=j()?k:V,A=I;var F=Array.isArray?Array.isArray:function(r){return"[object Array]"===A(r)},R=F;var $=function(r){return"object"==typeof r&&null!==r&&!R(r)},M=/./;var C=function(r){return"boolean"==typeof r},N=Boolean.prototype.toString;var B=I,G=function(r){try{return N.call(r),!0}catch(r){return!1}},L=j();var Z=function(r){return"object"==typeof r&&(r instanceof Boolean||(L?G(r):"[object Boolean]"===B(r)))},W=C,X=Z;var z=m,U=function(r){return W(r)||X(r)},Y=Z;z(U,"isPrimitive",C),z(U,"isObject",Y);var D="object"==typeof self?self:null,q="object"==typeof window?window:null,H=U.isPrimitive,J=function(){return new Function("return this;")()},K=D,Q=q,rr=r(Object.freeze({__proto__:null}));var er=function(r){if(arguments.length){if(!H(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(rr)return rr;throw new Error("unexpected error. Unable to resolve global object.")},tr=er(),nr=tr.document&&tr.document.childNodes,ir=Int8Array,or=M,ar=nr,ur=ir;var cr=function(){return"function"==typeof or||"object"==typeof ur||"function"==typeof ar};var sr=function(){return/^\s*function\s*([^(]*)/i},fr=sr;m(fr,"REGEXP",sr());var lr=fr,pr=F;var vr=function(r){return null!==r&&"object"==typeof r};m(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!pr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr));var gr=vr;var mr=I,dr=lr.REGEXP,br=function(r){return gr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var hr=function(r){var e,t,n;if(("Object"===(t=mr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return br(r)?"Buffer":t},yr=hr;var wr=hr;var jr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?yr(r).toLowerCase():e},Er=function(r){return wr(r).toLowerCase()},Pr=cr()?Er:jr;var Or=function(r){return"function"===Pr(r)},_r=Object.getPrototypeOf;var Tr=function(r){return r.__proto__},Sr=I,xr=Tr;var Vr=function(r){var e=xr(r);return e||null===e?e:"[object Function]"===Sr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},kr=_r,Ir=Vr,Ar=Or(Object.getPrototypeOf)?kr:Ir;var Fr=$,Rr=Or,$r=function(r){return null==r?null:(r=Object(r),Ar(r))},Mr=b,Cr=I,Nr=Object.prototype;var Br=function(r){var e;return!!Fr(r)&&(!(e=$r(r))||!Mr(r,"constructor")&&Mr(e,"constructor")&&Rr(e.constructor)&&"[object Function]"===Cr(e.constructor)&&Mr(e,"isPrototypeOf")&&Rr(e.isPrototypeOf)&&(e===Nr||function(r){var e;for(e in r)if(!Mr(r,e))return!1;return!0}(r)))},Gr=Br;var Lr=function(r){return"number"==typeof r},Zr=Number,Wr=Zr.prototype.toString;var Xr=I,zr=Zr,Ur=function(r){try{return Wr.call(r),!0}catch(r){return!1}},Yr=j();var Dr=function(r){return"object"==typeof r&&(r instanceof zr||(Yr?Ur(r):"[object Number]"===Xr(r)))},qr=Lr,Hr=Dr;var Jr=m,Kr=function(r){return qr(r)||Hr(r)},Qr=Dr;Jr(Kr,"isPrimitive",Lr),Jr(Kr,"isObject",Qr);var re=Kr,ee=Number.POSITIVE_INFINITY,te=Zr.NEGATIVE_INFINITY,ne=Math.floor;var ie=function(r){return ne(r)===r},oe=ee,ae=te,ue=ie;var ce=function(r){return r<oe&&r>ae&&ue(r)},se=re.isPrimitive,fe=ce;var le=function(r){return se(r)&&fe(r)},pe=re.isObject,ve=ce;var ge=function(r){return pe(r)&&ve(r.valueOf())},me=le,de=ge;var be=m,he=function(r){return me(r)||de(r)},ye=ge;be(he,"isPrimitive",le),be(he,"isObject",ye);var we=he,je=we.isPrimitive;var Ee=function(r){return je(r)&&r>=0},Pe=we.isObject;var Oe=function(r){return Pe(r)&&r.valueOf()>=0},_e=Ee,Te=Oe;var Se=m,xe=function(r){return _e(r)||Te(r)},Ve=Oe;Se(xe,"isPrimitive",Ee),Se(xe,"isObject",Ve);var ke=xe;var Ie=function(r){return"string"==typeof r},Ae=String.prototype.valueOf;var Fe=I,Re=function(r){try{return Ae.call(r),!0}catch(r){return!1}},$e=j();var Me=function(r){return"object"==typeof r&&(r instanceof String||($e?Re(r):"[object String]"===Fe(r)))},Ce=Ie,Ne=Me;var Be=m,Ge=function(r){return Ce(r)||Ne(r)},Le=Me;Be(Ge,"isPrimitive",Ie),Be(Ge,"isObject",Le);var Ze=Ge,We=ie;var Xe=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&We(r.length)&&r.length>=0&&r.length<=9007199254740991};var ze=function(r){return r!=r},Ue=re.isPrimitive,Ye=ze;var De=function(r){return Ue(r)&&Ye(r)},qe=re.isObject,He=ze;var Je=function(r){return qe(r)&&He(r.valueOf())},Ke=De,Qe=Je;var rt=m,et=function(r){return Ke(r)||Qe(r)},tt=Je;rt(et,"isPrimitive",De),rt(et,"isObject",tt);var nt=Xe,it=we.isPrimitive,ot=Ze.isPrimitive,at=et.isPrimitive;var ut=function(r,e,t){var n,i,o;if(!nt(r)&&!ot(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!it(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(ot(r)){if(!ot(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,at(e)){for(o=i;o<n;o++)if(at(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},ct=Ze.isPrimitive;var st=function(r){if(!ct(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ft=Ze.isPrimitive;var lt=function(r){if(!ft(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},pt=st,vt=lt,gt=Ze.isPrimitive;var mt=function(r){return gt(r)&&r===vt(r)&&r!==pt(r)},dt=ee,bt=te;var ht=function(r){return r==r&&r>bt&&r<dt},yt=ke.isPrimitive,wt=Ze.isPrimitive;var jt=function(r,e){var t,n;if(!wt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!yt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Et=we.isPrimitive,Pt=Ze.isPrimitive;var Ot=jt,_t=function(r,e,t){var n,i;if(!Pt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Pt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Et(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var Tt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(_t(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Ot("0",i):Ot("0",i)+r,n&&(r="-"+r)),r},St=mt,xt=lt,Vt=st,kt=ht,It=re.isPrimitive,At=Tt;var Ft=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!kt(n)){if(!It(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=At(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=At(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=St(r.specifier)?xt(t):Vt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Rt=Ze.isPrimitive,$t=/[-\/\\^$*+?.()|[\]{}]/g;var Mt=function(r){var e,t;if(!Rt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace($t,"\\$&"):(e=(e=r.substring(1,t)).replace($t,"\\$&"),r=r[0]+e+r.substring(t))},Ct=RegExp.prototype.exec;var Nt=I,Bt=function(r){try{return Ct.call(r),!0}catch(r){return!1}},Gt=j();var Lt=Mt,Zt=Or,Wt=Ze.isPrimitive,Xt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Gt?Bt(r):"[object RegExp]"===Nt(r)))};var zt=mt,Ut=lt,Yt=st,Dt=function(r,e,t){if(!Wt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Wt(e))e=Lt(e),e=new RegExp(e,"g");else if(!Xt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Wt(t)&&!Zt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},qt=ht,Ht=re.isPrimitive,Jt=function(r){return Math.abs(r)},Kt=/e\+(\d)$/,Qt=/e-(\d)$/,rn=/^(\d+)$/,en=/^(\d+)e/,tn=/\.0$/,nn=/\.0*e/,on=/(\..*[^0])0*e/;var an=function(r){var e,t,n=parseFloat(r.arg);if(!qt(n)){if(!Ht(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Jt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Dt(t,on,"$1e"),t=Dt(t,nn,"e"),t=Dt(t,tn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Dt(t,Kt,"e+0$1"),t=Dt(t,Qt,"e-0$1"),r.alternate&&(t=Dt(t,rn,"$1."),t=Dt(t,en,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=zt(r.specifier)?Ut(t):Yt(t)},un=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var cn=jt;var sn=Ze.isPrimitive,fn=ut,ln=ze,pn=Ft,vn=an,gn=function(r){var e,t,n,i,o;for(e=0,n=[],o=un.exec(r);o;)(t=r.slice(e,un.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=un.lastIndex,o=un.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},mn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+cn(" ",n):cn(" ",n)+r},dn=Tt,bn=String.fromCharCode;var hn=Gr,yn=b,wn=ke.isPrimitive,jn=function(r){var e,t,n,i,o,a,u,c,s;if(!sn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=gn(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],sn(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!fn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ln(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,ln(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=pn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!ln(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ln(o)?String(n.arg):bn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=vn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=dn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=mn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a};var En=m,Pn=y,On=function(r,e){return hn(e)?yn(e,"iter")&&(r.iter=e.iter,!wn(e.iter))?new TypeError(jn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(jn("invalid argument. Options argument must be an object. Value: `%s`.",e))};var _n=function r(e){var t,n,i,o,a;if(t={iter:208063},arguments.length&&(o=On(t,e)))throw o;return a=-1,En(n={},"next",u),En(n,"return",c),Pn&&En(n,Pn,s),n;function u(){return a+=1,i||a>=t.iter?{done:!0}:{value:a*a*a,done:!1}}function c(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function s(){return r(t)}},Tn=_n;export{Tn as default};
//# sourceMappingURL=mod.js.map
