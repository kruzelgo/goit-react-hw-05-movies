"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{9355:function(e,r,t){t.d(r,{Df:function(){return o},TP:function(){return v},tx:function(){return h},z1:function(){return p},zv:function(){return f}});var n=t(5861),a=t(4687),c=t.n(a),s=t(340),u="432440a0f2101c7e5f5f1625881e4cc7",i="https://api.themoviedb.org",o=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/trending/movie/day"),{params:{api_key:u}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/search/movie"),{params:{api_key:u,query:r}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(r),{params:{api_key:u}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(r,"/credits"),{params:{api_key:u}});case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(r,"/reviews"),{params:{api_key:u}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},2168:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(5861),a=t(9439),c=t(4687),s=t.n(c),u=t(2791),i=t(7689),o=t(9355),p="Reviews_reviewWrapper__WVQVF",v="Reviews_reviewHeader__72tsb",f="Reviews_reviewList__uMBar",h="Reviews_reviewListItem__Kbkhg",l="Reviews_author__CqYAZ",w="Reviews_review__sHbuN",m="Reviews_noReviews__TJWdg",d=t(184),_=function(){var e=(0,i.UO)().movieId,r=(0,u.useState)([]),t=(0,a.Z)(r,2),c=t[0],_=t[1];return(0,u.useEffect)((function(){var r=function(){var r=(0,n.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,o.tx)(e);case 3:t=r.sent,_(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("h3",{className:v,children:"Reviews"}),c.length?(0,d.jsx)("ul",{className:f,children:c.map((function(e){return(0,d.jsxs)("li",{className:h,children:[(0,d.jsx)("p",{className:w,children:e.content}),e.author&&(0,d.jsxs)("p",{className:l,children:["Author: ",e.author]})]},e.id)}))}):(0,d.jsx)("p",{className:m,children:"This movie hasn't been reviewed yet."})]})}}}]);
//# sourceMappingURL=168.4383dc0d.chunk.js.map