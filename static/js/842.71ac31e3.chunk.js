"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{9355:function(e,r,t){t.d(r,{Df:function(){return u},TP:function(){return f},tx:function(){return p},z1:function(){return i},zv:function(){return v}});var n=t(5861),c=t(4687),o=t.n(c),a="432440a0f2101c7e5f5f1625881e4cc7",s="https://api.themoviedb.org",u=function(){var e=(0,n.Z)(o().mark((function e(){var r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/trending/movie/day?api_key=").concat(a));case 3:return r=e.sent,e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t.results);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(o().mark((function e(r){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/search/movie?api_key=").concat(a,"&query=").concat(r));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(o().mark((function e(r){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(r,"?api_key=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(o().mark((function e(r){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(r,"/credits?api_key=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.cast);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(o().mark((function e(r){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(r,"/reviews?api_key=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}()},4809:function(e,r,t){t.d(r,{Z:function(){return a}});t(2791);var n={},c=t(1087),o=t(184),a=function(e){var r=e.movies;return(0,o.jsx)("ul",{className:n.moviesList,children:r.map((function(e){return(0,o.jsxs)("li",{className:n.movieItem,children:[(0,o.jsx)(c.rU,{to:"/movie/".concat(e.id),children:(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,className:n.moviePoster})}),(0,o.jsx)("div",{children:(0,o.jsx)("p",{className:n.movieTitle,children:e.title})})]},e.id)}))})}},7842:function(e,r,t){t.r(r);var n=t(5861),c=t(9439),o=t(4687),a=t.n(o),s=t(2791),u=t(9355),i=t(4809),f=t(184);r.default=function(){var e=(0,s.useState)([]),r=(0,c.Z)(e,2),t=r[0],o=r[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Df)();case 3:r=e.sent,o(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Trending Movies"}),(0,f.jsx)(i.Z,{movies:t})]})}},5861:function(e,r,t){function n(e,r,t,n,c,o,a){try{var s=e[o](a),u=s.value}catch(i){return void t(i)}s.done?r(u):Promise.resolve(u).then(n,c)}function c(e){return function(){var r=this,t=arguments;return new Promise((function(c,o){var a=e.apply(r,t);function s(e){n(a,c,o,s,u,"next",e)}function u(e){n(a,c,o,s,u,"throw",e)}s(void 0)}))}}t.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=842.71ac31e3.chunk.js.map