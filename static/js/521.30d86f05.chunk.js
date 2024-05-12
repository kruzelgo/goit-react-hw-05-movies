"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[521],{9355:function(e,t,r){r.d(t,{Df:function(){return u},TP:function(){return p},tx:function(){return l},z1:function(){return i},zv:function(){return f}});var n=r(5861),c=r(4687),a=r.n(c),s="432440a0f2101c7e5f5f1625881e4cc7",o="https://api.themoviedb.org",u=function(){var e=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/trending/movie/day?api_key=").concat(s));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n.cast);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},521:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(5861),c=r(9439),a=r(4687),s=r.n(a),o=r(2791),u=r(7689),i=r(9355),p={},f=r(184),l=function(e){e.credits;var t=(0,u.UO)().movieId,r=(0,o.useState)([]),a=(0,c.Z)(r,2),l=a[0],h=a[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.zv)(t);case 3:r=e.sent,h(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,f.jsxs)("div",{className:p.castWrapper,children:[(0,f.jsx)("h3",{className:p.castHeader,children:"Cast"}),l.length?(0,f.jsx)("ul",{className:p.castList,children:l.map((function(e){return(0,f.jsxs)("li",{className:p.castListItem,children:[e.profile_path?(0,f.jsx)("img",{className:p.castImage,src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:"".concat(e.name," profile")}):(0,f.jsx)("img",{className:p.castImage,src:"https://via.placeholder.com/200x300?text=No+Image",alt:"".concat(e.name," profile")}),(0,f.jsxs)("div",{className:p.castInfo,children:[(0,f.jsx)("h3",{className:p.castName,children:e.name}),(0,f.jsxs)("p",{children:["Character: ",e.character]})]})]},e.id)}))}):(0,f.jsx)("p",{className:p.noCastText,children:"No cast information available."})]})}},5861:function(e,t,r){function n(e,t,r,n,c,a,s){try{var o=e[a](s),u=o.value}catch(i){return void r(i)}o.done?t(u):Promise.resolve(u).then(n,c)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(c,a){var s=e.apply(t,r);function o(e){n(s,c,a,o,u,"next",e)}function u(e){n(s,c,a,o,u,"throw",e)}o(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=521.30d86f05.chunk.js.map