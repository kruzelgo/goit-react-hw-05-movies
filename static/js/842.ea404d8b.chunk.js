"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{9355:function(r,e,t){t.d(e,{Df:function(){return u},TP:function(){return v},tx:function(){return l},z1:function(){return p},zv:function(){return f}});var n=t(5861),c=t(4687),a=t.n(c),s=t(340),o="432440a0f2101c7e5f5f1625881e4cc7",i="https://api.themoviedb.org",u=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(i,"/trending/movie/day"),{params:{api_key:o}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(i,"/search/movie"),{params:{api_key:o,query:e}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(i,"/movie/").concat(e),{params:{api_key:o}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(i,"/movie/").concat(e,"/credits"),{params:{api_key:o}});case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie credits:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.Z.get("".concat(i,"/movie/").concat(e,"/reviews"),{params:{api_key:o}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},8138:function(r,e,t){t.d(e,{Z:function(){return u}});t(2791);var n="MovieList_moviesList__QH0TD",c="MovieList_movieItem__vZLnU",a="MovieList_movieTitle__BilE6",s="MovieList_moviePoster__+y5rM",o=t(1087),i=t(184),u=function(r){var e=r.movies;return(0,i.jsx)("ul",{className:n,children:e.map((function(r){return(0,i.jsxs)("li",{className:c,children:[(0,i.jsx)(o.rU,{to:"/movie/".concat(r.id),children:(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r.poster_path),alt:r.title,className:s})}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{className:a,children:r.title})})]},r.id)}))})}},7842:function(r,e,t){t.r(e);var n=t(5861),c=t(9439),a=t(4687),s=t.n(a),o=t(2791),i=t(9355),u=t(8138),p=t(184);e.default=function(){var r=(0,o.useState)([]),e=(0,c.Z)(r,2),t=e[0],a=e[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Df)();case 3:e=r.sent,a(e),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending Movies"}),(0,p.jsx)(u.Z,{movies:t})]})}}}]);
//# sourceMappingURL=842.ea404d8b.chunk.js.map