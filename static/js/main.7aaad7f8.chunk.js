(this.webpackJsonpnicoflix=this.webpackJsonpnicoflix||[]).push([[0],{26:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/noimage.d644f35e.jpg"},70:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(1),c=n.n(i),a=n(35),o=n.n(a),s=n(16),u=n(6),l=n(3),j=n(2);function b(){var t=Object(l.a)(["\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return b=function(){return t},t}function d(){var t=Object(l.a)(["\n  width: 100px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.3s ease-in-out;\n"]);return d=function(){return t},t}function p(){var t=Object(l.a)(["\n  display: flex;\n"]);return p=function(){return t},t}function f(){var t=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: 50px;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);\n  font-size: 16px;\n"]);return f=function(){return t},t}var g=j.c.header(f()),h=j.c.ul(p()),x=j.c.li(d(),(function(t){return t.current?"#e74c3c":"transparent"})),O=Object(j.c)(s.b)(b()),v=Object(u.g)((function(t){var e=t.location.pathname;return Object(r.jsx)(g,{children:Object(r.jsxs)(h,{children:[Object(r.jsx)(x,{current:"/"===e,children:Object(r.jsx)(O,{to:"/",children:"Moives"})}),Object(r.jsx)(x,{current:"/tv"===e,children:Object(r.jsx)(O,{to:"/tv",children:"TV"})}),Object(r.jsx)(x,{current:"/search"===e,children:Object(r.jsx)(O,{to:"/search",children:"Search"})})]})})})),m=n(11),_=n.n(m),y=n(14),w=n(5),S=n(13);function k(){var t=Object(l.a)(["\n    line-height:18px;\n    display:grid;\n    grid-template-columns: repeat(auto-fill, minmax(min-content, 150px));\n    gap:10px;\n"]);return k=function(){return t},t}function M(){var t=Object(l.a)(["\n    font-size:18px;\n    font-weight:600;\n    margin-bottom:10px;\n"]);return M=function(){return t},t}function U(){var t=Object(l.a)(["\n    padding:0 20px;\n\n    &:not(:first-child){\n        margin-top:20px;\n    }\n"]);return U=function(){return t},t}var z=j.c.div(U()),R=j.c.h3(M()),T=j.c.div(k()),C=function(t){var e=t.title,n=t.children;return Object(r.jsxs)(z,{children:[Object(r.jsx)(R,{children:e}),Object(r.jsx)(T,{children:n})]})};function F(){var t=Object(l.a)(["\n    color: #bdc3c7;\n    font-size:20px;\n    font-weight: 600;\n    padding-top:20px;\n"]);return F=function(){return t},t}function N(){var t=Object(l.a)(["\n    width:100vw;\n    height:100vh;\n    display:flex;\n    justify-content:center;\n"]);return N=function(){return t},t}var I=j.c.div(N()),E=j.c.span(F()),P=function(){return Object(r.jsxs)(I,{children:[console.log("loader"),Object(r.jsx)(E,{children:"Loading.."})]})};function V(){var t=Object(l.a)(["\n    color : ",";\n    font-size:20px;\n    font-weight: 600;\n    line-height:30px;\n"]);return V=function(){return t},t}function L(){var t=Object(l.a)(["\n    width:100%;\n    display:flex;\n    justify-content:center;\n"]);return L=function(){return t},t}var q=j.c.div(L()),B=j.c.span(V(),(function(t){return t.color})),J=function(t){var e=t.text,n=t.color;return Object(r.jsx)(q,{children:Object(r.jsx)(B,{color:n,children:e})})};function A(){var t=Object(l.a)(["\n    font-size: 11px;\n    color: rgba(255,255,255,0.5);\n"]);return A=function(){return t},t}function D(){var t=Object(l.a)(["\n    display:block;\n    font-size: 13px;\n    margin-bottom:3px;\n"]);return D=function(){return t},t}function H(){var t=Object(l.a)(["\n    margin-bottom:5px;\n    position: relative;\n    &:hover {\n        ","{\n            opacity:0.3;\n        }\n        ","{\n            opacity:1;\n        }\n    }\n"]);return H=function(){return t},t}function K(){var t=Object(l.a)(["\n    position: absolute;\n    right: 5px;\n    bottom: 3px;\n    opacity: 0;\n"]);return K=function(){return t},t}function G(){var t=Object(l.a)(["\n    height:240px;\n    background-size:cover;\n    background-position: center center;\n    background-image: url(",");\n    border-radius:10px;\n    transition: opacity 0.15s ease-in-out;\n"]);return G=function(){return t},t}function Q(){var t=Object(l.a)(["\n    font-size:12px;\n    padding:5px;\n"]);return Q=function(){return t},t}var W=j.c.div(Q()),X=j.c.div(G(),(function(t){return t.bgUrl})),Y=j.c.span(K()),Z=j.c.div(H(),X,Y),$=j.c.span(D()),tt=j.c.span(A()),et=function(t){var e=t.id,i=t.imageUrl,c=t.title,a=t.rating,o=t.year,u=t.isMovie,l=void 0!==u&&u;return Object(r.jsx)(s.b,{to:l?"/movie/".concat(e):"/show/".concat(e),children:Object(r.jsxs)(W,{children:[Object(r.jsxs)(Z,{children:[Object(r.jsx)(X,{bgUrl:i?"https://image.tmdb.org/t/p/w300/".concat(i):n(26).default}),Object(r.jsxs)(Y,{children:[Object(r.jsx)("span",{role:"img","aria-label":"star",children:"\u2b50\ufe0f"})," ",a,"/10"]})]}),Object(r.jsx)($,{children:c.length>15?"".concat(c.substring(0,15),"..."):c}),Object(r.jsx)(tt,{children:o})]})})};function nt(){var t=Object(l.a)(["\n    padding-top:20px;\n"]);return nt=function(){return t},t}var rt=j.c.div(nt()),it=function(t){var e=t.nowPlaying,n=t.upComing,i=t.popular,c=t.error;return t.loading?Object(r.jsx)(P,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{children:Object(r.jsx)("title",{children:"Movies | Nicoflix"})}),Object(r.jsxs)(rt,{children:[e&&e.length>0&&Object(r.jsx)(C,{title:"Now Playing",children:e.map((function(t){return Object(r.jsx)(et,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),n&&n.length>0&&Object(r.jsx)(C,{title:"Up Coming",children:n.map((function(t){return Object(r.jsx)(et,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),i&&i.length>0&&Object(r.jsx)(C,{title:"Popular Shows",children:i.map((function(t){return Object(r.jsx)(et,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),c&&Object(r.jsx)(J,{text:c,color:"#e74c3c"})]})]})},ct=n(41),at=n.n(ct).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3a377862d155dc0b034c393fad709b13",language:"ko-KR"}}),ot=function(){return at.get("movie/now_playing")},st=function(){return at.get("movie/upcoming")},ut=function(){return at.get("movie/popular")},lt=function(t){return at.get("movie/".concat(t),{params:{append_videos:"vidoes"}})},jt=function(t){return at.get("search/movie",{params:{query:encodeURIComponent(t)}})},bt=function(){return at.get("tv/top_rated")},dt=function(){return at.get("tv/popular")},pt=function(){return at.get("tv/airing_today")},ft=function(t){return at.get("tv/".concat(t),{params:{append_videos:"vidoes"}})},gt=function(t){return at.get("search/tv",{params:{query:encodeURIComponent(t)}})},ht=function(){var t=Object(i.useState)(null),e=Object(w.a)(t,2),n=e[0],c=e[1],a=Object(i.useState)(null),o=Object(w.a)(a,2),s=o[0],u=o[1],l=Object(i.useState)(null),j=Object(w.a)(l,2),b=j[0],d=j[1],p=Object(i.useState)(null),f=Object(w.a)(p,2),g=f[0],h=f[1],x=Object(i.useState)(!0),O=Object(w.a)(x,2),v=O[0],m=O[1];Object(i.useEffect)((function(){S()}),[]);var S=function(){var t=Object(y.a)(_.a.mark((function t(){var e,n,r,i,a,o;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ot();case 3:return e=t.sent,n=e.data.results,t.next=7,st();case 7:return r=t.sent,i=r.data.results,t.next=11,ut();case 11:a=t.sent,o=a.data.results,c(n),u(i),d(o),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),h("Can't find moives information.");case 21:return t.prev=21,m(!1),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[0,18,21,24]])})));return function(){return t.apply(this,arguments)}}();return Object(r.jsx)(it,{nowPlaying:n,upComing:s,popular:b,loading:v,error:g})};function xt(){var t=Object(l.a)(["\n    padding-top:20px;\n"]);return xt=function(){return t},t}var Ot=j.c.div(xt()),vt=function(t){var e=t.topRated,n=t.popular,i=t.airingToday,c=t.error;return t.loading?Object(r.jsx)(P,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.b,{children:Object(r.jsx)("title",{children:"Movies | Nicoflix"})}),Object(r.jsxs)(Ot,{children:[e&&e.length>0&&Object(r.jsx)(C,{title:"Top Rated Shows",children:e.map((function(t){return Object(r.jsx)(et,{id:t.id,title:t.original_name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4),isMovie:!1},t.id)}))}),n&&n.length>0&&Object(r.jsx)(C,{title:"Popular Shows",children:n.map((function(t){return Object(r.jsx)(et,{id:t.id,title:t.original_name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4),isMovie:!1},t.id)}))}),i&&i.length>0&&Object(r.jsx)(C,{title:"Airing Today",children:i.map((function(t){return Object(r.jsx)(et,{id:t.id,title:t.original_name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4),isMovie:!1},t.id)}))}),c&&Object(r.jsx)(J,{text:c,color:"#e74c3c"})]})]})},mt=function(){var t=Object(i.useState)(null),e=Object(w.a)(t,2),n=e[0],c=e[1],a=Object(i.useState)(null),o=Object(w.a)(a,2),s=o[0],u=o[1],l=Object(i.useState)(null),j=Object(w.a)(l,2),b=j[0],d=j[1],p=Object(i.useState)(null),f=Object(w.a)(p,2),g=f[0],h=f[1],x=Object(i.useState)(!0),O=Object(w.a)(x,2),v=O[0],m=O[1];Object(i.useEffect)((function(){S()}),[]);var S=function(){var t=Object(y.a)(_.a.mark((function t(){var e,n,r,i,a,o;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,bt();case 3:return e=t.sent,n=e.data.results,t.next=7,dt();case 7:return r=t.sent,i=r.data.results,t.next=11,pt();case 11:a=t.sent,o=a.data.results,c(n),u(i),d(o),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),h("Can't find TV information.");case 21:return t.prev=21,m(!1),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[0,18,21,24]])})));return function(){return t.apply(this,arguments)}}();return Object(r.jsx)(vt,{topRated:n,popular:s,airingToday:b,loading:v,error:g})};function _t(){var t=Object(l.a)(["\n    all:unset;\n    font-size: 30px;\n    width: 100%;\n"]);return _t=function(){return t},t}function yt(){var t=Object(l.a)(["\n    width: 100%;\n    padding-left:20px;\n"]);return yt=function(){return t},t}function wt(){var t=Object(l.a)(["\n    padding-top:20px;\n"]);return wt=function(){return t},t}var St=j.c.div(wt()),kt=j.c.form(yt()),Mt=j.c.input(_t()),Ut=function(t){var e=t.movieResults,n=t.tvResults,i=t.searchTerm,c=t.error,a=t.loading,o=t.handleSubmit,s=t.updateTerm;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.b,{children:Object(r.jsx)("title",{children:"Movies | Nicoflix"})}),Object(r.jsxs)(St,{children:[Object(r.jsx)(kt,{onSubmit:o,children:Object(r.jsx)(Mt,{placeholder:"Search Movies or TV Shows..",value:i,onChange:s})}),a?Object(r.jsx)(P,{}):Object(r.jsxs)(r.Fragment,{children:[e&&e.length>0&&Object(r.jsx)(C,{title:"Moive Results",children:e.map((function(t){return Object(r.jsx)(et,{id:t.id,title:t.title,imageUrl:t.poster_path,rating:t.vote_average,year:t.release_date&&t.release_date.substring(0,4),isMovie:!0},t.id)}))}),n&&n.length>0&&Object(r.jsx)(C,{title:"TV Show Results",children:n.map((function(t){return Object(r.jsx)(et,{id:t.id,title:t.original_name,imageUrl:t.poster_path,rating:t.vote_average,year:t.first_air_date&&t.first_air_date.substring(0,4),isMovie:!0},t.id)}))}),c&&Object(r.jsx)(J,{text:c,color:"#e74c3c"}),e&&n&&0===e.length&&0===n.length&&Object(r.jsx)(J,{text:"Nothing found",color:"#bdc3c7"})]})]})]})},zt=function(){var t=Object(i.useState)(null),e=Object(w.a)(t,2),n=e[0],c=e[1],a=Object(i.useState)(null),o=Object(w.a)(a,2),s=o[0],u=o[1],l=Object(i.useState)(""),j=Object(w.a)(l,2),b=j[0],d=j[1],p=Object(i.useState)(null),f=Object(w.a)(p,2),g=f[0],h=f[1],x=Object(i.useState)(!1),O=Object(w.a)(x,2),v=O[0],m=O[1];Object(i.useEffect)((function(){}),[]);var S=function(){var t=Object(y.a)(_.a.mark((function t(){var e,n,r,i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,jt(b);case 4:return e=t.sent,n=e.data.results,t.next=8,gt(b);case 8:r=t.sent,i=r.data.results,c(n),u(i),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),h("Can't find results.");case 17:return t.prev=17,m(!1),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})));return function(){return t.apply(this,arguments)}}();return Object(r.jsx)(Ut,{movieResults:n,tvResults:s,searchTerm:b,loading:v,error:g,handleSubmit:function(t){t.preventDefault(),""!==b&&S()},updateTerm:function(t){var e=t.target.value;d(e)}})};function Rt(){var t=Object(l.a)(["\n    font-size: 14px;\n    opacity: 0.7;\n    line-height : 1.5;\n    width: 50%;\n"]);return Rt=function(){return t},t}function Tt(){var t=Object(l.a)(["\n    margin: 0 5px;\n"]);return Tt=function(){return t},t}function Ct(){var t=Object(l.a)([""]);return Ct=function(){return t},t}function Ft(){var t=Object(l.a)(["\n    margin-bottom:20px;\n"]);return Ft=function(){return t},t}function Nt(){var t=Object(l.a)(["\n    font-size:32px;\n    margin-bottom:20px;\n"]);return Nt=function(){return t},t}function It(){var t=Object(l.a)(["\n    width : 70%;\n    margin-left: 20px;\n"]);return It=function(){return t},t}function Et(){var t=Object(l.a)(["\n    width:30%;\n    height:100%;\n    background-image:url(",");\n    background-size:cover;\n    background-position:center center;\n"]);return Et=function(){return t},t}function Pt(){var t=Object(l.a)(["\n    display:flex;\n    position: relative;\n    width:100%;\n    height:100%;\n    z-index:1;\n    padding:50px;\n"]);return Pt=function(){return t},t}function Vt(){var t=Object(l.a)(["\n    position: absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background-image:url(",");\n    background-size:cover;\n    background-position:center center;\n    filter: blur(5px);\n    opacity: 0.5;\n"]);return Vt=function(){return t},t}function Lt(){var t=Object(l.a)(["\n    width:100%;\n    height:calc(100vh - 50px);\n    position:absolute;\n"]);return Lt=function(){return t},t}var qt=j.c.div(Lt()),Bt=j.c.div(Vt(),(function(t){return t.bgImage})),Jt=j.c.div(Pt()),At=j.c.div(Et(),(function(t){return t.bgImage})),Dt=j.c.div(It()),Ht=j.c.h3(Nt()),Kt=j.c.div(Ft()),Gt=j.c.span(Ct()),Qt=j.c.span(Tt()),Wt=j.c.p(Rt()),Xt=function(t){var e=t.result;t.error;return t.loading?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.b,{children:Object(r.jsx)("title",{children:" Loading.. | Nicoflix"})}),Object(r.jsx)(P,{})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.b,{children:e&&Object(r.jsxs)("title",{children:[e.original_title?e.original_title:e.original_name," | Nicoflix"]})}),Object(r.jsx)(qt,{children:e&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Bt,{bgImage:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path)}),Object(r.jsxs)(Jt,{children:[Object(r.jsx)(At,{bgImage:e.poster_path?"https://image.tmdb.org/t/p/original".concat(e.poster_path):n(26)}),Object(r.jsxs)(Dt,{children:[Object(r.jsx)(Ht,{children:e.original_title?e.original_title:e.original_name}),Object(r.jsxs)(Kt,{children:[Object(r.jsx)(Gt,{children:e.release_date?e.release_date.substring(0,4):e.first_air_date.substring(0,4)}),Object(r.jsx)(Qt,{children:"\u2022"}),Object(r.jsxs)(Gt,{children:[e.runtime?e.runtime:e.episode_run_time[0]," min"]}),Object(r.jsx)(Qt,{children:"\u2022"}),Object(r.jsx)(Gt,{children:e.genres&&e.genres.map((function(t,n){return n===e.genres.length-1?t.name:"".concat(t.name," / ")}))})]}),Object(r.jsx)(Wt,{children:e.overview})]})]})]})})]})},Yt=function(t){var e=Object(i.useState)(null),n=Object(w.a)(e,2),c=n[0],a=n[1],o=Object(i.useState)(null),s=Object(w.a)(o,2),u=s[0],l=s[1],j=Object(i.useState)(!0),b=Object(w.a)(j,2),d=b[0],p=b[1],f=t.location.pathname,g=Object(i.useState)(f.includes("/movie/")),h=Object(w.a)(g,1)[0];Object(i.useEffect)((function(){var e=t.match.params.id,n=t.history.push,r=parseInt(e);if(isNaN(r))return n("/");x(r)}),[t]);var x=function(){var t=Object(y.a)(_.a.mark((function t(e){var n,r,i,c,o;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=null,t.prev=1,!h){t.next=10;break}return t.next=5,lt(e);case 5:r=t.sent,i=r.data,n=i,t.next=15;break;case 10:return t.next=12,ft(e);case 12:c=t.sent,o=c.data,n=o;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),l("Can't find anything.");case 20:return t.prev=20,p(!1),a(n),t.finish(20);case 24:case"end":return t.stop()}}),t,null,[[1,17,20,24]])})));return function(e){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){console.log("loading : ",d)}),[d]),Object(r.jsx)(Xt,{result:c,error:u,loading:d})},Zt=function(){return Object(r.jsx)(s.a,{children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(v,{}),Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/",exact:!0,component:ht}),Object(r.jsx)(u.b,{path:"/tv/",component:mt}),Object(r.jsx)(u.b,{path:"/search/",component:zt}),Object(r.jsx)(u.b,{path:"/movie/:id",component:Yt}),Object(r.jsx)(u.b,{path:"/show/:id",component:Yt}),Object(r.jsx)(u.a,{from:"*",to:"/"})]})]})})},$t=n(42);function te(){var t=Object(l.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body {\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:14px;\n        color:white;\n        background-color: rgba(20, 20, 20, 1);\n        padding-top: 50px\n    }\n"]);return te=function(){return t},t}var ee=Object(j.a)(te(),$t.a),ne=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Zt,{}),Object(r.jsx)(ee,{})]})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ne,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.7aaad7f8.chunk.js.map