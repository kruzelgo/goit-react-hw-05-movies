"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{9355:function(e,t,r){r.d(t,{Df:function(){return u},TP:function(){return v},tx:function(){return p},z1:function(){return l},zv:function(){return m}});var n=r(5861),a=r(4687),s=r.n(a),i=r(340),c="https://api.themoviedb.org",o={method:"GET",params:{api_key:"432440a0f2101c7e5f5f1625881e4cc7",language:"en-US",include_adult:!1},headers:{accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiI0MzI0NDBhMGYyMTAxYzdlNWY1ZjE2MjU4ODFlNGNjNyIsInN1YiI6IjY2M2ZhZmY1ODQ3ZmFlNTYzMjY3NGY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQUjQGmZCAZg5Ps9XNjTo8LpsmaEyasJxNnZ0C6CHBX1Q"}},u=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.url="".concat(c,"/3/trending/movie/day"),e.prev=1,e.next=4,i.Z.request(o);case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.url="".concat(c,"/3/search/movie"),o.params.query=t,e.prev=2,e.next=5,i.Z.request(o);case 5:return r=e.sent,e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.url="".concat(c,"/3/movie/").concat(t),e.prev=1,e.next=4,i.Z.request(o);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.url="".concat(c,"/3/movie/").concat(t,"/credits"),e.prev=1,e.next=4,i.Z.request(o);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.url="".concat(c,"/3/movie/").concat(t,"/reviews"),e.prev=1,e.next=4,i.Z.request(o);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.error(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},8888:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(5861),a=r(9439),s=r(4687),i=r.n(s),c=r(2791),o=r(7689),u=r(1087),l=r(9355),v={movieDetailsContainer:"MovieDetails_movieDetailsContainer__a6qwu",movieDetailsButton:"MovieDetails_movieDetailsButton__4QU+1",movieDetails:"MovieDetails_movieDetails__EqwEX",movieTitle:"MovieDetails_movieTitle__qwoTW",movieOverview:"MovieDetails_movieOverview__YX5h3",movieInfoItem:"MovieDetails_movieInfoItem__22Hkx",castList:"MovieDetails_castList__TVMgE",reviewList:"MovieDetails_reviewList__Q3HD6",castItem:"MovieDetails_castItem__i26IE",reviewItem:"MovieDetails_reviewItem__QGyU1",castName:"MovieDetails_castName__0Pjke",reviewContent:"MovieDetails_reviewContent__rOLLP"},m=r(184),p=function(){var e=(0,o.UO)().movieId,t=(0,c.useState)({}),r=(0,a.Z)(t,2),s=r[0],p=r[1],h=(0,c.useState)([]),f=(0,a.Z)(h,2),d=f[0],_=f[1],w=(0,c.useState)([]),x=(0,a.Z)(w,2),j=x[0],N=x[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,n.Z)(i().mark((function t(){var r,n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.TP)(e);case 3:return r=t.sent,p(r),t.next=7,(0,l.zv)(e);case 7:return n=t.sent,_(n),t.next=11,(0,l.tx)(e);case 11:a=t.sent,N(a),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,m.jsx)("main",{children:(0,m.jsxs)("div",{className:v.movieDetailsContainer,children:[(0,m.jsx)(u.rU,{to:"/",children:(0,m.jsx)("button",{className:v.movieDetailsButton,children:"Back"})}),(0,m.jsxs)("div",{className:v.movieDetails,children:[(0,m.jsx)("h2",{className:v.movieTitle,children:s.title}),s.poster_path?(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path),width:250,alt:"poster"}):(0,m.jsx)("img",{src:"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-476x700.jpg",width:250,alt:"default poster"}),(0,m.jsx)("p",{className:v.movieOverview,children:s.overview}),(0,m.jsxs)("div",{className:v.movieInfo,children:[(0,m.jsx)("h3",{className:v.movieInfoItem,children:"Cast"}),(0,m.jsx)("ul",{className:v.castList,children:d.map((function(e){return(0,m.jsx)("li",{className:v.castItem,children:(0,m.jsx)("span",{className:v.castName,children:e.name})},e.id)}))})]}),(0,m.jsxs)("div",{className:v.movieInfo,children:[(0,m.jsx)("h3",{className:v.movieInfoItem,children:"Reviews"}),(0,m.jsx)("ul",{className:v.reviewList,children:j.map((function(e){return(0,m.jsx)("li",{className:v.reviewItem,children:(0,m.jsx)("p",{className:v.reviewContent,children:e.content})},e.id)}))})]})]})]})})}}}]);
//# sourceMappingURL=888.d26feb56.chunk.js.map