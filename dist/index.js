"use strict";var v=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var f=v(function(j,s){
var x=require('@stdlib/assert-is-plain-object/dist'),y=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function h(t,r){return x(r)?y(r,"iter")&&(t.iter=r.iter,!O(r.iter))?new TypeError(o('0Zx2t',"iter",r.iter)):null:new TypeError(o('0Zx2V',r));}s.exports=h
});var g=v(function(I,d){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),w=f(),E=208063;function c(t){var r,i,a,n,e;if(r={iter:E},arguments.length&&(n=w(r,t),n))throw n;return e=-1,i={},u(i,"next",m),u(i,"return",q),l&&u(i,l,b),i;function m(){return e+=1,a||e>=r.iter?{done:!0}:{value:e*e*e,done:!1}}function q(p){return a=!0,arguments.length?{value:p,done:!0}:{done:!0}}function b(){return c(r)}}d.exports=c
});var P=g();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
