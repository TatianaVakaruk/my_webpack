(()=>{"use strict";var e={424:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([e.id,"/* file path: src/index.css */\r\n\r\nbody {\r\n    font-size: 16px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    margin: 0;\r\n  }\r\n  \r\n  .page {\r\n    display: flex;\r\n    height: 100vh;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: url('https://gromcode.s3.eu-central-1.amazonaws.com/front-end/tools/lesson6/task1/background.jpg');\r\n  }",""]);const s=i},846:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([e.id,"/* file path: src/profile/profile.scss */\r\n\r\n.profile {\r\n    padding: 8px;\r\n    border-radius: 8px;\r\n    border: 3px solid #ccc;\r\n    background-color: #fff;\r\n  \r\n    &__name {\r\n      font-size: 18px;\r\n      font-weight: 700;\r\n    }\r\n  \r\n    &__location {\r\n      opacity: 0.7;\r\n    }\r\n  }",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=t.base?c[0]+t.base:c[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var v=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=r(a[i]);n[s].references--}for(var c=t(e,o),l=0;l<a.length;l++){var u=r(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nc=void 0,(()=>{var e=r(379),n=r.n(e),t=r(795),o=r.n(t),a=r(569),i=r.n(a),s=r(565),c=r.n(s),l=r(216),u=r.n(l),p=r(589),d=r.n(p),f=r(846),v={};v.styleTagTransform=d(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=u(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var m=r(424),h={};h.styleTagTransform=d(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,(({name:e,location:n})=>{const r=document.querySelector(".profile__name"),t=document.querySelector(".profile__location");r.textContent=e,t.textContent=`from ${n}`})({name:"Tom",location:"The World"})})()})();