"use strict";var c=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var g=c(function(w,o){
var d=require('@stdlib/ndarray-base-dtype/dist'),l=require('@stdlib/ndarray-base-shape/dist'),p=require('@stdlib/ndarray-base-strides/dist'),h=require('@stdlib/ndarray-base-offset/dist'),m=require('@stdlib/ndarray-base-order/dist'),y=require('@stdlib/ndarray-base-data-buffer/dist');function D(a,e,q){var u,i,t,s,v,f,n,r;return i=l(a,!0),r=i.length,t=p(a,!0),u=h(a),r>=2&&(e%=4,e<0&&(e+=4),f=i[r-2],n=i[r-1],s=t[r-2],v=t[r-1],e===1?(i[r-2]=n,i[r-1]=f,t[r-2]=v,t[r-1]=-s,u+=(f-1)*s):e===2?(t[r-2]=-s,t[r-1]=-v,u+=(f-1)*s+(n-1)*v):e===3&&(i[r-2]=n,i[r-1]=f,t[r-2]=-v,t[r-1]=s,u+=(n-1)*v)),new a.constructor(d(a),y(a),i,t,u,m(a),{readonly:!q})}o.exports=D
});var O=g();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
