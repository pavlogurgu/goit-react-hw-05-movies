"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[533],{533:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r,c=n(861),a=n(885),s=n(757),o=n.n(s),i=n(739),u=n(791),l=n(168),p=n(128),h=n(731),d=n(444),f=n(184),v=(0,d.ZP)(h.rU)(r||(r=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),x=function(e){var t=e.to,n=e.children;return(0,f.jsxs)(v,{to:t,children:[(0,f.jsx)(p.jTe,{size:"24"}),n]})},g=n(577),m=function(){var e,t,n=(0,i.UO)().movieId,r=(0,u.useState)(null),s=(0,a.Z)(r,2),l=s[0],p=s[1],h="https://image.tmdb.org/t/p/w200",d=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,u.useEffect)((function(){function e(){return e=(0,c.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.t2)(t);case 3:n=e.sent,p(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),e.apply(this,arguments)}!function(t){e.apply(this,arguments)}(n)}),[n]),(0,f.jsx)("div",{children:l&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x,{to:d,children:"Back"}),(0,f.jsx)("div",{children:null===l.poster_path?(0,f.jsx)("img",{src:"".concat(h).concat("/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg"),alt:l.title}):(0,f.jsx)("img",{src:"".concat(h).concat(l.poster_path),alt:l.title})}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[l.title," ",""===l.release_date||void 0===l.release_date?"(No date)":"".concat(l.release_date.slice(0,4))]}),(0,f.jsxs)("p",{children:["User Score: ",Math.floor(10*l.vote_average),"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:l.overview}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:0===l.genres.length?"No genres":"".concat(l.genres.map((function(e){return e.name})).join(", "))})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(x,{to:"/movies/".concat(n,"/cast"),state:{from:d},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(x,{to:"/movies/".concat(n,"/reviews"),state:{from:d},children:"Reviews"})})]}),(0,f.jsx)(u.Suspense,{fallback:(0,f.jsx)("p",{children:"Loading..."}),children:(0,f.jsx)(i.j3,{})})]})]})})}},577:function(e,t,n){n.d(t,{HG:function(){return p},Hg:function(){return u},M1:function(){return v},t2:function(){return d},tx:function(){return g}});var r=n(861),c=n(757),a=n.n(c),s=n(44),o="https://api.themoviedb.org/3",i="520faa847257d57af54017c37ef43fe0";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 3:return t=e.sent,e.next=6,t.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(o,"/search/movie?api_key=").concat(i,"&page=1&query=").concat(t));case 3:return n=e.sent,e.next=6,n.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 3:return n=e.sent,e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(o,"/search/movie/").concat(t,"/credits?api_key=").concat(i));case 3:return n=e.sent,e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return n=e.sent,e.next=6,n.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=533.0c8ba5f2.chunk.js.map