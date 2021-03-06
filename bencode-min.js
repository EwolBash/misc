// ==UserScript==
// ==UserLibrary==
// @name         bencode-min
// @namespace    https://openuserjs.org/users/Anakunda
// @version      0.0.8
// @author       Ben Reinhart
// @license      GPL-3.0-or-later
// @copyright    2021, Ben Reinhart (https://github.com/benjreinhart/bencode-js)
// @description  https://github.com/benjreinhart/bencode-js
// @exclude      *
// ==/UserScript==
// ==/UserLibrary==

(function(b){function a(b,d){if({}.hasOwnProperty.call(a.cache,b))return a.cache[b];var e=a.resolve(b);if(!e)throw new Error('Failed to resolve module '+b);var c={id:b,require:a,filename:b,exports:{},loaded:!1,parent:d,children:[]};d&&d.children.push(c);var f=b.slice(0,b.lastIndexOf('/')+1);return a.cache[b]=c.exports,e.call(c.exports,c,c.exports,f,b),c.loaded=!0,a.cache[b]=c.exports}a.modules={},a.cache={},a.resolve=function(b){return{}.hasOwnProperty.call(a.modules,b)?a.modules[b]:void 0},a.define=function(b,c){a.modules[b]=c},a.define('/src/index.coffee',function(b,c,d,e){b.exports={encode:a('/src/encode.coffee',b),decode:a('/src/decode.coffee',b)}}),a.define('/src/decode.coffee',function(b,c,d,e){var a;a=function(c){var l,d,e,f,b,k,g,h,i,j,n,m;switch(c[0]){case'i':d=c.match(/^i-?\d+e/)[0];return[d.length,+d.slice(1,-1)];case'0':case'1':case'2':case'3':case'4':case'5':case'6':case'7':case'8':case'9':j=c.match(/^\d+/)[0];i=j.length+1;d=c.slice(0,i+ +j);return[d.length,d.slice(i)];case'l':b=1;l=function(e){var d,f,g;while(c[b]!=='e')d=a(c.slice(b)),g=d[0],f=d[1],b+=g,e.push(f);return e}.call(this,[]);return[b+1,l];case'd':b=1;h={};while(c[b]!=='e')e=a(c.slice(b)),g=e[0],k=e[1],f=a(c.slice(b+g)),m=f[0],n=f[1],b+=g+m,h[k]=n;return[b+1,h]}},b.exports=function(b){return a(b)[1]}}),a.define('/src/encode.coffee',function(f,j,i,h){function g(a,b){return{}.hasOwnProperty.call(a,b)}var a,e,d,c,b;b=function(a){return''+a.length+':'+a},d=function(a){return'i'+a+'e'},c=function(b){var c;return c=function(d){var e;for(var c=0,f=b.length;c<f;++c)e=b[c],d.push(a(e));return d}.call(this,[]).join(''),'l'+c+'e'},e=function(b){var d,c;return c=function(c){var a;for(a in b){if(!g(b,a))continue;c.push(a)}return c}.call(this,[]).sort(),d=function(f){var e;for(var d=0,g=c.length;d<g;++d)e=c[d],f.push(''+a(e)+a(b[e]));return f}.call(this,[]).join(''),'d'+d+'e'},a=function(a){switch(!1){case!(typeof a==='string'):return b(a);case!(typeof a==='number'):return d(0|a);case!('[object Array]'==={}.toString.call(a)):return c(a);default:return e(a)}},f.exports=a}),b.Bencode=a('/src/index.coffee')}.call(this,this))