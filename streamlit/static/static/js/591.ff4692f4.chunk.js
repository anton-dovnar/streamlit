"use strict";(self.webpackChunkstreamlit_browser=self.webpackChunkstreamlit_browser||[]).push([[591],{61130:function(t,n,r){r.d(n,{B8:function(){return M},Il:function(){return i},J5:function(){return o},SU:function(){return N},Ss:function(){return Z},Ym:function(){return P},ZP:function(){return v},xV:function(){return a}});var e=r(34176);function i(){}var a=.7,o=1/a,u="\\s*([+-]?\\d+)\\s*",c="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",s="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",l=/^#([0-9a-f]{3,8})$/,h=new RegExp("^rgb\\(".concat(u,",").concat(u,",").concat(u,"\\)$")),f=new RegExp("^rgb\\(".concat(s,",").concat(s,",").concat(s,"\\)$")),p=new RegExp("^rgba\\(".concat(u,",").concat(u,",").concat(u,",").concat(c,"\\)$")),g=new RegExp("^rgba\\(".concat(s,",").concat(s,",").concat(s,",").concat(c,"\\)$")),w=new RegExp("^hsl\\(".concat(c,",").concat(s,",").concat(s,"\\)$")),d=new RegExp("^hsla\\(".concat(c,",").concat(s,",").concat(s,",").concat(c,"\\)$")),y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function b(){return this.rgb().formatHex()}function m(){return this.rgb().formatRgb()}function v(t){var n,r;return t=(t+"").trim().toLowerCase(),(n=l.exec(t))?(r=n[1].length,n=parseInt(n[1],16),6===r?x(n):3===r?new Z(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===r?k(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===r?k(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=h.exec(t))?new Z(n[1],n[2],n[3],1):(n=f.exec(t))?new Z(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=p.exec(t))?k(n[1],n[2],n[3],n[4]):(n=g.exec(t))?k(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=w.exec(t))?X(n[1],n[2]/100,n[3]/100,1):(n=d.exec(t))?X(n[1],n[2]/100,n[3]/100,n[4]):y.hasOwnProperty(t)?x(y[t]):"transparent"===t?new Z(NaN,NaN,NaN,0):null}function x(t){return new Z(t>>16&255,t>>8&255,255&t,1)}function k(t,n,r,e){return e<=0&&(t=n=r=NaN),new Z(t,n,r,e)}function N(t){return t instanceof i||(t=v(t)),t?new Z((t=t.rgb()).r,t.g,t.b,t.opacity):new Z}function M(t,n,r,e){return 1===arguments.length?N(t):new Z(t,n,r,null==e?1:e)}function Z(t,n,r,e){this.r=+t,this.g=+n,this.b=+r,this.opacity=+e}function _(){return"#".concat(S(this.r)).concat(S(this.g)).concat(S(this.b))}function E(){var t=q(this.opacity);return"".concat(1===t?"rgb(":"rgba(").concat(I(this.r),", ").concat(I(this.g),", ").concat(I(this.b)).concat(1===t?")":", ".concat(t,")"))}function q(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function I(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function S(t){return((t=I(t))<16?"0":"")+t.toString(16)}function X(t,n,r,e){return e<=0?t=n=r=NaN:r<=0||r>=1?t=n=NaN:n<=0&&(t=NaN),new Y(t,n,r,e)}function R(t){if(t instanceof Y)return new Y(t.h,t.s,t.l,t.opacity);if(t instanceof i||(t=v(t)),!t)return new Y;if(t instanceof Y)return t;var n=(t=t.rgb()).r/255,r=t.g/255,e=t.b/255,a=Math.min(n,r,e),o=Math.max(n,r,e),u=NaN,c=o-a,s=(o+a)/2;return c?(u=n===o?(r-e)/c+6*(r<e):r===o?(e-n)/c+2:(n-r)/c+4,c/=s<.5?o+a:2-o-a,u*=60):c=s>0&&s<1?0:u,new Y(u,c,s,t.opacity)}function P(t,n,r,e){return 1===arguments.length?R(t):new Y(t,n,r,null==e?1:e)}function Y(t,n,r,e){this.h=+t,this.s=+n,this.l=+r,this.opacity=+e}function H(t){return(t=(t||0)%360)<0?t+360:t}function O(t){return Math.max(0,Math.min(1,t||0))}function j(t,n,r){return 255*(t<60?n+(r-n)*t/60:t<180?r:t<240?n+(r-n)*(240-t)/60:n)}(0,e.Z)(i,v,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:b,formatHex:b,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return R(this).formatHsl()},formatRgb:m,toString:m}),(0,e.Z)(Z,M,(0,e.l)(i,{brighter:function(t){return t=null==t?o:Math.pow(o,t),new Z(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?a:Math.pow(a,t),new Z(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},clamp:function(){return new Z(I(this.r),I(this.g),I(this.b),q(this.opacity))},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:_,formatHex:_,formatHex8:function(){return"#".concat(S(this.r)).concat(S(this.g)).concat(S(this.b)).concat(S(255*(isNaN(this.opacity)?1:this.opacity)))},formatRgb:E,toString:E})),(0,e.Z)(Y,P,(0,e.l)(i,{brighter:function(t){return t=null==t?o:Math.pow(o,t),new Y(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?a:Math.pow(a,t),new Y(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,e=r+(r<.5?r:1-r)*n,i=2*r-e;return new Z(j(t>=240?t-240:t+120,i,e),j(t,i,e),j(t<120?t+240:t-120,i,e),this.opacity)},clamp:function(){return new Y(H(this.h),O(this.s),O(this.l),q(this.opacity))},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=q(this.opacity);return"".concat(1===t?"hsl(":"hsla(").concat(H(this.h),", ").concat(100*O(this.s),"%, ").concat(100*O(this.l),"%").concat(1===t?")":", ".concat(t,")"))}}))},9325:function(t,n,r){r.d(n,{Z:function(){return w}});var e=r(34176),i=r(61130),a=r(8370),o=-.14861,u=1.78277,c=-.29227,s=-.90649,l=1.97294,h=l*s,f=l*u,p=u*c-s*o;function g(t){if(t instanceof d)return new d(t.h,t.s,t.l,t.opacity);t instanceof i.Ss||(t=(0,i.SU)(t));var n=t.r/255,r=t.g/255,e=t.b/255,o=(p*e+h*n-f*r)/(p+h-f),u=e-o,g=(l*(r-o)-c*u)/s,w=Math.sqrt(g*g+u*u)/(l*o*(1-o)),y=w?Math.atan2(g,u)*a.R-120:NaN;return new d(y<0?y+360:y,w,o,t.opacity)}function w(t,n,r,e){return 1===arguments.length?g(t):new d(t,n,r,null==e?1:e)}function d(t,n,r,e){this.h=+t,this.s=+n,this.l=+r,this.opacity=+e}(0,e.Z)(d,w,(0,e.l)(i.Il,{brighter:function(t){return t=null==t?i.J5:Math.pow(i.J5,t),new d(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?i.xV:Math.pow(i.xV,t),new d(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*a.u,n=+this.l,r=isNaN(this.s)?0:this.s*n*(1-n),e=Math.cos(t),h=Math.sin(t);return new i.Ss(255*(n+r*(o*e+u*h)),255*(n+r*(c*e+s*h)),255*(n+r*(l*e)),this.opacity)}}))},34176:function(t,n,r){function e(t,n,r){t.prototype=n.prototype=r,r.constructor=t}function i(t,n){var r=Object.create(t.prototype);for(var e in n)r[e]=n[e];return r}r.d(n,{Z:function(){return e},l:function(){return i}})},306:function(t,n,r){r.d(n,{Uc:function(){return m},ZP:function(){return f}});var e=r(34176),i=r(61130),a=r(8370),o=.96422,u=.82521,c=4/29,s=6/29,l=3*s*s;function h(t){if(t instanceof p)return new p(t.l,t.a,t.b,t.opacity);if(t instanceof v)return x(t);t instanceof i.Ss||(t=(0,i.SU)(t));var n,r,e=y(t.r),a=y(t.g),c=y(t.b),s=g((.2225045*e+.7168786*a+.0606169*c)/1);return e===a&&a===c?n=r=s:(n=g((.4360747*e+.3850649*a+.1430804*c)/o),r=g((.0139322*e+.0971045*a+.7141733*c)/u)),new p(116*s-16,500*(n-s),200*(s-r),t.opacity)}function f(t,n,r,e){return 1===arguments.length?h(t):new p(t,n,r,null==e?1:e)}function p(t,n,r,e){this.l=+t,this.a=+n,this.b=+r,this.opacity=+e}function g(t){return t>.008856451679035631?Math.pow(t,1/3):t/l+c}function w(t){return t>s?t*t*t:l*(t-c)}function d(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function y(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function b(t){if(t instanceof v)return new v(t.h,t.c,t.l,t.opacity);if(t instanceof p||(t=h(t)),0===t.a&&0===t.b)return new v(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var n=Math.atan2(t.b,t.a)*a.R;return new v(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function m(t,n,r,e){return 1===arguments.length?b(t):new v(t,n,r,null==e?1:e)}function v(t,n,r,e){this.h=+t,this.c=+n,this.l=+r,this.opacity=+e}function x(t){if(isNaN(t.h))return new p(t.l,0,0,t.opacity);var n=t.h*a.u;return new p(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}(0,e.Z)(p,f,(0,e.l)(i.Il,{brighter:function(t){return new p(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new p(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,r=isNaN(this.b)?t:t-this.b/200;return n=o*w(n),t=1*w(t),r=u*w(r),new i.Ss(d(3.1338561*n-1.6168667*t-.4906146*r),d(-.9787684*n+1.9161415*t+.033454*r),d(.0719453*n-.2289914*t+1.4052427*r),this.opacity)}})),(0,e.Z)(v,m,(0,e.l)(i.Il,{brighter:function(t){return new v(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new v(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return x(this).rgb()}}))},8370:function(t,n,r){r.d(n,{R:function(){return i},u:function(){return e}});var e=Math.PI/180,i=180/Math.PI},15051:function(t,n){var r={value:function(){}};function e(){for(var t,n=0,r=arguments.length,e={};n<r;++n){if(!(t=arguments[n]+"")||t in e||/[\s.]/.test(t))throw new Error("illegal type: "+t);e[t]=[]}return new i(e)}function i(t){this._=t}function a(t,n){return t.trim().split(/^|\s+/).map((function(t){var r="",e=t.indexOf(".");if(e>=0&&(r=t.slice(e+1),t=t.slice(0,e)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}}))}function o(t,n){for(var r,e=0,i=t.length;e<i;++e)if((r=t[e]).name===n)return r.value}function u(t,n,e){for(var i=0,a=t.length;i<a;++i)if(t[i].name===n){t[i]=r,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=e&&t.push({name:n,value:e}),t}i.prototype=e.prototype={constructor:i,on:function(t,n){var r,e=this._,i=a(t+"",e),c=-1,s=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!==typeof n)throw new Error("invalid callback: "+n);for(;++c<s;)if(r=(t=i[c]).type)e[r]=u(e[r],t.name,n);else if(null==n)for(r in e)e[r]=u(e[r],t.name,null);return this}for(;++c<s;)if((r=(t=i[c]).type)&&(r=o(e[r],t.name)))return r},copy:function(){var t={},n=this._;for(var r in n)t[r]=n[r].slice();return new i(t)},call:function(t,n){if((r=arguments.length-2)>0)for(var r,e,i=new Array(r),a=0;a<r;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=0,r=(e=this._[t]).length;a<r;++a)e[a].value.apply(n,i)},apply:function(t,n,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var e=this._[t],i=0,a=e.length;i<a;++i)e[i].value.apply(n,r)}},n.Z=e},62164:function(t,n,r){function e(t,n,r,e,i){var a=t*t,o=a*t;return((1-3*t+3*a-o)*n+(4-6*a+3*o)*r+(1+3*t+3*a-3*o)*e+o*i)/6}function i(t){var n=t.length-1;return function(r){var i=r<=0?r=0:r>=1?(r=1,n-1):Math.floor(r*n),a=t[i],o=t[i+1],u=i>0?t[i-1]:2*a-o,c=i<n-1?t[i+2]:2*o-a;return e((r-i/n)*n,u,a,o,c)}}r.d(n,{Z:function(){return i},t:function(){return e}})},44468:function(t,n,r){r.d(n,{Z:function(){return i}});var e=r(62164);function i(t){var n=t.length;return function(r){var i=Math.floor(((r%=1)<0?++r:r)*n),a=t[(i+n-1)%n],o=t[i%n],u=t[(i+1)%n],c=t[(i+2)%n];return(0,e.t)((r-i/n)*n,a,o,u,c)}}},41259:function(t,n,r){r.d(n,{ZP:function(){return u},wx:function(){return a},yi:function(){return o}});var e=r(22109);function i(t,n){return function(r){return t+r*n}}function a(t,n){var r=n-t;return r?i(t,r>180||r<-180?r-360*Math.round(r/360):r):(0,e.Z)(isNaN(t)?n:t)}function o(t){return 1===(t=+t)?u:function(n,r){return r-n?function(t,n,r){return t=Math.pow(t,r),n=Math.pow(n,r)-t,r=1/r,function(e){return Math.pow(t+e*n,r)}}(n,r,t):(0,e.Z)(isNaN(n)?r:n)}}function u(t,n){var r=n-t;return r?i(t,r):(0,e.Z)(isNaN(t)?n:t)}},22109:function(t,n){n.Z=function(t){return function(){return t}}},98830:function(t,n,r){function e(t,n){return t=+t,n=+n,function(r){return t*(1-r)+n*r}}r.d(n,{Z:function(){return e}})},42337:function(t,n,r){r.d(n,{YD:function(){return s},hD:function(){return c}});var e=r(61130),i=r(62164),a=r(44468),o=r(41259);function u(t){return function(n){var r,i,a=n.length,o=new Array(a),u=new Array(a),c=new Array(a);for(r=0;r<a;++r)i=(0,e.B8)(n[r]),o[r]=i.r||0,u[r]=i.g||0,c[r]=i.b||0;return o=t(o),u=t(u),c=t(c),i.opacity=1,function(t){return i.r=o(t),i.g=u(t),i.b=c(t),i+""}}}n.ZP=function t(n){var r=(0,o.yi)(n);function i(t,n){var i=r((t=(0,e.B8)(t)).r,(n=(0,e.B8)(n)).r),a=r(t.g,n.g),u=r(t.b,n.b),c=(0,o.ZP)(t.opacity,n.opacity);return function(n){return t.r=i(n),t.g=a(n),t.b=u(n),t.opacity=c(n),t+""}}return i.gamma=t,i}(1);var c=u(i.Z),s=u(a.Z)},50784:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(98830),i=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,a=new RegExp(i.source,"g");function o(t,n){var r,o,u,c=i.lastIndex=a.lastIndex=0,s=-1,l=[],h=[];for(t+="",n+="";(r=i.exec(t))&&(o=a.exec(n));)(u=o.index)>c&&(u=n.slice(c,u),l[s]?l[s]+=u:l[++s]=u),(r=r[0])===(o=o[0])?l[s]?l[s]+=o:l[++s]=o:(l[++s]=null,h.push({i:s,x:(0,e.Z)(r,o)})),c=a.lastIndex;return c<n.length&&(u=n.slice(c),l[s]?l[s]+=u:l[++s]=u),l.length<2?h[0]?function(t){return function(n){return t(n)+""}}(h[0].x):function(t){return function(){return t}}(n):(n=h.length,function(t){for(var r,e=0;e<n;++e)l[(r=h[e]).i]=r.x(t);return l.join("")})}},91846:function(t,n,r){r.d(n,{Y:function(){return s},w:function(){return l}});var e,i=r(98830),a=180/Math.PI,o={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function u(t,n,r,e,i,o){var u,c,s;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(s=t*r+n*e)&&(r-=t*s,e-=n*s),(c=Math.sqrt(r*r+e*e))&&(r/=c,e/=c,s/=c),t*e<n*r&&(t=-t,n=-n,s=-s,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*a,skewX:Math.atan(s)*a,scaleX:u,scaleY:c}}function c(t,n,r,e){function a(t){return t.length?t.pop()+" ":""}return function(o,u){var c=[],s=[];return o=t(o),u=t(u),function(t,e,a,o,u,c){if(t!==a||e!==o){var s=u.push("translate(",null,n,null,r);c.push({i:s-4,x:(0,i.Z)(t,a)},{i:s-2,x:(0,i.Z)(e,o)})}else(a||o)&&u.push("translate("+a+n+o+r)}(o.translateX,o.translateY,u.translateX,u.translateY,c,s),function(t,n,r,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:r.push(a(r)+"rotate(",null,e)-2,x:(0,i.Z)(t,n)})):n&&r.push(a(r)+"rotate("+n+e)}(o.rotate,u.rotate,c,s),function(t,n,r,o){t!==n?o.push({i:r.push(a(r)+"skewX(",null,e)-2,x:(0,i.Z)(t,n)}):n&&r.push(a(r)+"skewX("+n+e)}(o.skewX,u.skewX,c,s),function(t,n,r,e,o,u){if(t!==r||n!==e){var c=o.push(a(o)+"scale(",null,",",null,")");u.push({i:c-4,x:(0,i.Z)(t,r)},{i:c-2,x:(0,i.Z)(n,e)})}else 1===r&&1===e||o.push(a(o)+"scale("+r+","+e+")")}(o.scaleX,o.scaleY,u.scaleX,u.scaleY,c,s),o=u=null,function(t){for(var n,r=-1,e=s.length;++r<e;)c[(n=s[r]).i]=n.x(t);return c.join("")}}}var s=c((function(t){var n=new("function"===typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?o:u(n.a,n.b,n.c,n.d,n.e,n.f)}),"px, ","px)","deg)"),l=c((function(t){return null==t?o:(e||(e=document.createElementNS("http://www.w3.org/2000/svg","g")),e.setAttribute("transform",t),(t=e.transform.baseVal.consolidate())?u((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):o)}),", ",")",")")},88671:function(t,n,r){r.d(n,{B7:function(){return w},HT:function(){return d},zO:function(){return p}});var e,i,a=0,o=0,u=0,c=0,s=0,l=0,h="object"===typeof performance&&performance.now?performance:Date,f="object"===typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function p(){return s||(f(g),s=h.now()+l)}function g(){s=0}function w(){this._call=this._time=this._next=null}function d(t,n,r){var e=new w;return e.restart(t,n,r),e}function y(){s=(c=h.now())+l,a=o=0;try{!function(){p(),++a;for(var t,n=e;n;)(t=s-n._time)>=0&&n._call.call(void 0,t),n=n._next;--a}()}finally{a=0,function(){var t,n,r=e,a=1/0;for(;r;)r._call?(a>r._time&&(a=r._time),t=r,r=r._next):(n=r._next,r._next=null,r=t?t._next=n:e=n);i=t,m(a)}(),s=0}}function b(){var t=h.now(),n=t-c;n>1e3&&(l-=n,c=t)}function m(t){a||(o&&(o=clearTimeout(o)),t-s>24?(t<1/0&&(o=setTimeout(y,t-h.now()-l)),u&&(u=clearInterval(u))):(u||(c=h.now(),u=setInterval(b,1e3)),a=1,f(y)))}w.prototype=d.prototype={constructor:w,restart:function(t,n,r){if("function"!==typeof t)throw new TypeError("callback is not a function");r=(null==r?p():+r)+(null==n?0:+n),this._next||i===this||(i?i._next=this:e=this,i=this),this._call=t,this._time=r,m()},stop:function(){this._call&&(this._call=null,this._time=1/0,m())}}}}]);