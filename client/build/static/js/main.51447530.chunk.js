(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{35:function(e,t,r){},37:function(e,t,r){},46:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){},67:function(e,t,r){},68:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),s=r(28),u=r.n(s),i=r(2),o=r.n(i),a=r(8),l=r(3),f=(r(35),r(0));r(37),r(6);r(46);var h=r(5),g=r.n(h);r(65);r(66),r(4);var j=r(19),p=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(j.a)(Object(j.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},O={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},b=Object(n.createContext)(O),d=function(e){var t=e.children,r=Object(n.useReducer)(p,O),c=Object(l.a)(r,2),s=c[0],u=c[1];return Object(n.useEffect)((function(){localStorage.setItem("user",JSON.stringify(s.user))}),[s.user]),Object(f.jsx)(b.Provider,{value:{user:s.user,isFetching:s.isFetching,error:s.error,dispatch:u},children:t})};r(67);r(68),r(69);r(70);r(71);r(72);r(73);var S=function(){return Object(n.useContext)(b).user,function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83d\ude80 ~ file: App.js:17 ~ test ~ test:","test function chl gya"),e.next=3,g.a.get("/api/test");case 3:t=e.sent,console.log("\ud83d\ude80 ~ file: App.js:18 ~ test ~ res:",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),Object(f.jsx)("h1",{children:"hello"})};u.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(d,{children:Object(f.jsx)(S,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.51447530.chunk.js.map