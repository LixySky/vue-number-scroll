!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"vue-number-scroll",props:{speed:{type:Number,required:!1,default:50},times:{type:Number,required:!1,default:10},start:{type:Number,required:!1,default:0},end:{type:Number,required:!1,default:0},format:{type:Function,required:!1,default:null}},data:function(){return{showNumber:0}},render:function(e){return e("span",this.format?this.format(this.showNumber):this.showNumber)},created:function(){this.showNumber=this.start},mounted:function(){this.JNumberScroll({speed:this.speed,times:this.times,start:this.start,end:this.end})},watch:{end:function(e,t){this.JNumberScroll({speed:this.speed,times:this.times,start:t,end:e})}},methods:{JNumberScroll:function(e){var t=[],r=Math.abs(e.end-e.start),n=e.end-e.start>0,s=r/e.times,o=String(e.end),u=-1!==o.indexOf(".");!u&&s<1&&(s=1)&&(e.times=r);for(var i=0;i<e.times;i++){var d=n?e.start+s*i:e.start-s*i,a=0;u&&(a=o.length-o.indexOf(".")-1),t.push(u?parseInt(d*Math.pow(10,a))/Math.pow(10,a):parseInt(d))}(n&&t[t.length-1]<e.end||!n&&t[t.length-1]>e.end)&&t.push(e.end);var f=0,p=this,l=setInterval(function(){f<t.length?p.showNumber=t[f++]:clearInterval(l)},e.speed)}}};"undefined"!=typeof window&&"Vue"in window&&window.Vue.component("vns",n),t.default=n}])});
//# sourceMappingURL=vue-number-scroll.js.map