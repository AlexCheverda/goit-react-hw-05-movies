"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[389],{25:function(n,t,e){e.d(t,{_k:function(){return i},hG:function(){return p},oO:function(){return f},uV:function(){return d},z1:function(){return s}});var r=e(861),a=e(757),u=e.n(a),c=e(388),o="eb7b6505abfb7d751373f782f6a3959d";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?query=".concat(t,"&api_key=").concat(o,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},389:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,u,c=e(885),o=e(791),i=e(689),s=e(168),p=e(731),f=e(444),d=(0,f.ZP)(p.rU)(r||(r=(0,s.Z)(["\n  list-style: none;\n  min-width: 100%;\n  text-decoration: none;\n  border-bottom: 1px solid grey;\n  &:hover {\n    padding: 4px;\n    border-radius: 5px;\n    box-shadow: 1px 2px 10px 3px rgba(0, 0, 0, 0.78);\n  }\n"]))),l=f.ZP.ul(a||(a=(0,s.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),x=f.ZP.h2(u||(u=(0,s.Z)(["\n  padding-top: 20px;\n"]))),h=e(25),v=e(184),g=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,i.TH)();return(0,o.useEffect)((function(){(0,h._k)().then((function(n){r(n.results)}))}),[]),(0,v.jsxs)("main",{children:[(0,v.jsx)(x,{children:"Top Movies for today"}),(0,v.jsx)(l,{children:e.map((function(n){return(0,v.jsx)("div",{children:(0,v.jsx)(d,{to:"/movies/".concat(n.id),state:{from:a},children:n.original_title||n.name})},n.id)}))})]})}}}]);
//# sourceMappingURL=389.a438a1dc.chunk.js.map