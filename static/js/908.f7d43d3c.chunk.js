"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[908],{3025:function(n,t,e){e.d(t,{Df:function(){return s},M1:function(){return d},h$:function(){return p},tx:function(){return l},vl:function(){return f}});var r=e(5861),a=e(4687),c=e.n(a),i=e(5294),o="https://api.themoviedb.org",u="432440a0f2101c7e5f5f1625881e4cc7",s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/3/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/3/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/3/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/3/movie/").concat(t,"}/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3578:function(n,t,e){e.d(t,{T:function(){return a}});var r=e(184),a=function(){return(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,r.jsx)("div",{style:{border:"12px solid #f3f3f3",borderTop:"12px solid #3498db",borderRadius:"50%",width:"80px",height:"80px",animation:"spin 2s linear infinite"}})})}},8603:function(n,t,e){e.d(t,{Fg:function(){return v},HC:function(){return h},NZ:function(){return d},PP:function(){return f},aV:function(){return l}});var r,a,c,i,o,u=e(168),s=e(5867),p=e(1087),f=s.ZP.section(r||(r=(0,u.Z)(["\n  padding-right: 50px;\n  padding-left: 50px;\n"]))),d=s.ZP.h2(a||(a=(0,u.Z)(["\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding-left: 5px;\n  font-size: 30px;\n  font-weight: 600;\n  text-align: center;\n  font-variant: small-caps;\n"]))),l=s.ZP.ul(c||(c=(0,u.Z)(["\n  list-style: none;\n  color: #0d57aa;\n"]))),h=s.ZP.li(i||(i=(0,u.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 1px;\n  }\n"]))),v=(0,s.ZP)(p.rU)(o||(o=(0,u.Z)(["\n  font-size: 20px;\n\n  color: hsl(190, 83%, 30%);\n  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;\n  font-variant: small-caps;\n\n  &:hover,\n  &:focus {\n    color: hsl(89, 82%, 46%);\n    border-bottom: 2px dotted hsl(89, 82%, 46%);\n  }\n"])))},908:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(5861),a=e(9439),c=e(4687),i=e.n(c),o=e(8603),u=e(184),s=function(n){var t=n.trendingMovies;return(0,u.jsxs)(o.PP,{children:[(0,u.jsx)(o.NZ,{children:"Trending today"}),(0,u.jsx)(o.aV,{children:t.map((function(n){return(0,u.jsx)(o.HC,{children:(0,u.jsx)(o.Fg,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})},p=e(3578),f=e(2791),d=e(3025),l=function(){var n=(0,f.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],o=(0,f.useState)(!0),l=(0,a.Z)(o,2),h=l[0],v=l[1],x=(0,f.useState)(!1),g=(0,a.Z)(x,2),m=g[0],Z=g[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!1),v(!0),n.next=5,(0,d.Df)();case 5:t=n.sent,e=t.results,c(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),Z(!0);case 13:return n.prev=13,v(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,u.jsx)(u.Fragment,{children:h?(0,u.jsx)(p.T,{}):m?(0,u.jsx)("p",{children:"Sorry, the trending videos list could not be downloaded. Try it again later."}):(0,u.jsx)(s,{trendingMovies:e})})}}}]);
//# sourceMappingURL=908.f7d43d3c.chunk.js.map