"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{9355:function(e,r,t){t.d(r,{Df:function(){return u},TP:function(){return v},tx:function(){return f},z1:function(){return l},zv:function(){return p}});var n=t(5861),a=t(4687),c=t.n(a),s=t(340),o="https://api.themoviedb.org",i={method:"GET",params:{api_key:"432440a0f2101c7e5f5f1625881e4cc7",language:"en-US",include_adult:!1},headers:{accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiI0MzI0NDBhMGYyMTAxYzdlNWY1ZjE2MjU4ODFlNGNjNyIsInN1YiI6IjY2M2ZhZmY1ODQ3ZmFlNTYzMjY3NGY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQUjQGmZCAZg5Ps9XNjTo8LpsmaEyasJxNnZ0C6CHBX1Q"}},u=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(o,"/3/trending/movie/day"),e.prev=1,e.next=4,s.Z.request(i);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(o,"/3/search/movie"),i.params.query=r,e.prev=2,e.next=5,s.Z.request(i);case 5:return t=e.sent,e.abrupt("return",t.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(o,"/3/movie/").concat(r),e.prev=1,e.next=4,s.Z.request(i);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(o,"/3/movie/").concat(r,"/credits"),e.prev=1,e.next=4,s.Z.request(i);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.url="".concat(o,"/3/movie/").concat(r,"/reviews"),e.prev=1,e.next=4,s.Z.request(i);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()},8138:function(e,r,t){t.d(r,{Z:function(){return m}});t(2791);var n=t(1087),a="MovieList_moviesList__QH0TD",c="MovieList_movieItem__vZLnU",s="MovieList_movieLink__S879-",o="MovieList_moviePoster__+y5rM",i="MovieList_movieInfo__0h6ya",u="MovieList_movieName__2kQfJ",l="MovieList_movieInfoText__e3jFu",v="MovieList_movieInfoTextBold__7-F5U",p=t(184),f=function(e){var r=new Date(e).getFullYear();return isNaN(r)?"Unknown":r},h=function(e){return e?"".concat((10*e).toFixed(0),"%"):"Not rated yet"},m=function(e){var r=e.movies;return(0,p.jsx)("ul",{className:a,children:r.map((function(e){return(0,p.jsx)("li",{className:c,children:(0,p.jsxs)(n.rU,{to:"/movie/".concat(e.id),className:s,children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,className:o}),(0,p.jsxs)("div",{className:i,children:[(0,p.jsxs)("h2",{className:u,children:[e.title," (",f(e.release_date),")"]}),(0,p.jsxs)("p",{className:l,children:["User Score: ",h(e.vote_average)]}),(0,p.jsx)("p",{className:l,children:e.overview}),e.genres&&e.genres.length>0&&(0,p.jsxs)("p",{className:l,children:[(0,p.jsx)("span",{className:v,children:"Genres:"})," ",e.genres.map((function(e){return e.name})).join(", ")]})]})]})},e.id)}))})}},7842:function(e,r,t){t.r(r);var n=t(5861),a=t(9439),c=t(4687),s=t.n(c),o=t(2791),i=t(9355),u=t(8138),l=t(184);r.default=function(){var e=(0,o.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Df)();case 3:r=e.sent,c(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Trending Movies"}),(0,l.jsx)(u.Z,{movies:t})]})}}}]);
//# sourceMappingURL=842.0c768d3c.chunk.js.map