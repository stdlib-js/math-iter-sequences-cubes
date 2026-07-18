"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var f=v(function(j,s){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function h(i,r){return x(r)?y(r,"iter")&&(i.iter=r.iter,!O(r.iter))?new TypeError(o('0Zx2t',"iter",r.iter)):null:new TypeError(o('0Zx2V',r));}s.exports=h
});var g=v(function(I,d){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),w=f(),E=208063;function c(i){var r,e,a,n,t;if(r={iter:E},arguments.length&&(n=w(r,i),n))throw n;return t=-1,e={},u(e,"next",m),u(e,"return",q),l&&u(e,l,b),e;function m(){return t+=1,a||t>=r.iter?{done:!0}:{value:t*t*t,done:!1}}function q(p){return a=!0,arguments.length?{value:p,done:!0}:{done:!0}}function b(){return c(r)}}d.exports=c
});var P=g();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
