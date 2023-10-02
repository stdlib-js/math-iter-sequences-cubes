// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function o(e,t){return r(t)?n(t,"iter")&&(e.iter=t.iter,!s(t.iter))?new TypeError(i("0Zx2t,G9","iter",t.iter)):null:new TypeError(i("0Zx2V,FD",t))}function d(r){var n,s,i,m,l;if(n={iter:208063},arguments.length&&(m=o(n,r)))throw m;return l=-1,e(s={},"next",p),e(s,"return",j),t&&e(s,t,u),s;function p(){return l+=1,i||l>=n.iter?{done:!0}:{value:l*l*l,done:!1}}function j(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return d(n)}}export{d as default};
//# sourceMappingURL=index.mjs.map
