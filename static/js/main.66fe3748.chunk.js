(this["webpackJsonpmts-mock"]=this["webpackJsonpmts-mock"]||[]).push([[0],{100:function(e,t){},102:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(0),a=n.n(s),r=n(36),i=n.n(r),o=(n(64),n(41)),u=n(56),l=n(10),j=n(25),d=n(9),b=n(30),m=n.n(b),O=n(50),h=n.n(O),f=n(51),x=n.n(f),g=function(e){var t=e.useHistory,n=e.useAuth,s=t(),a=n();return Object(c.jsx)("div",{className:"container is-fluid header",children:Object(c.jsxs)("div",{className:"level is-mobile",style:{width:"100%"},children:[Object(c.jsx)("div",{className:"level-left",children:Object(c.jsx)("div",{className:"navbar-brand",children:Object(c.jsx)("a",{className:"navbar-item",href:"https://pagename.com",children:Object(c.jsx)("img",{id:"logo",src:"http://3.23.57.97/static/MTS_logo.png"})})})}),Object(c.jsxs)("div",{className:"level-right is-mobile",children:[Object(c.jsx)("div",{className:"navbar-item",children:Object(c.jsx)(h.a,{})}),Object(c.jsx)("div",{className:"navbar-item",children:Object(c.jsx)(m.a,{})}),Object(c.jsx)("div",{className:"navbar-item",children:Object(c.jsxs)("div",{className:"dropdown is-hoverable",children:[Object(c.jsx)("div",{className:"dropdown-trigger",children:Object(c.jsx)(x.a,{"aria-haspopup":"true","aria-controls":"dropdown-menu4"})}),Object(c.jsx)("div",{className:"dropdown-menu",style:{left:"-100px"},id:"dropdown-menu4",role:"menu",children:Object(c.jsx)("div",{className:"dropdown-content",children:Object(c.jsx)("div",{className:"dropdown-item",children:Object(c.jsx)("div",{className:"menu",children:Object(c.jsx)("p",{className:"menu-label",onClick:function(){a.signout((function(){return s.push("/login")}))},children:"Log out"})})})})})]})})]})]})})};var p=Object(d.i)((function(e){var t=e.login,n=e.setName,a=e.setPassword,r=e.name,i=e.password,o=Object(s.useState)(!1),u=Object(l.a)(o,2),j=u[0],d=u[1];return Object(s.useEffect)((function(){!0===j&&t()}),[j]),Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(e){!function(e,t,n){e.preventDefault(),n(!t)}(e,j,d)},children:[Object(c.jsx)("label",{htmlFor:"username",children:"Username"}),Object(c.jsx)("input",{type:"text",name:"username",value:r,onChange:function(e){!function(e,t){t(e.target.value)}(e,n)}}),Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{type:"password",name:"password",value:i,onChange:function(e){!function(e,t){t(e.target.value)}(e,a)}}),Object(c.jsx)("input",{type:"submit"})]})})}));function v(e){var t=e.setQuery;e.query;return Object(c.jsx)("input",{id:"input",onChange:function(e){t(e.target.value)}})}function N(e){var t=e.setQuery,n=e.query;return Object(c.jsxs)("div",{className:"search-component",children:[Object(c.jsx)("h2",{children:"\u0417\u0430\u043a\u0430\u0437\u044b"}),Object(c.jsx)(v,{setQuery:t,query:n})]})}function y(e){var t=e.number,n=e.clientName,s=e.issueDate,a=e.issueStatus,r=e.openedModal,i=e.setOpenedModal,o=e.setUrl,u=e.token;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"number1",children:Object(c.jsx)("div",{className:"align-vertically",children:t})}),Object(c.jsx)("td",{className:"client_name",children:Object(c.jsx)("div",{className:"align-vertically",children:n})}),Object(c.jsx)("td",{className:"issue_date",children:Object(c.jsx)("div",{className:"align-vertically",children:s})}),Object(c.jsx)("td",{className:"issue_status",children:Object(c.jsx)("div",{className:"align-vertically ".concat("\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"===a?"is-signed":"is-not-signed"),children:a})}),Object(c.jsx)("td",{className:"show_more",children:Object(c.jsx)("div",{className:"align-vertically",children:Object(c.jsx)(m.a,{onClick:!0===r?function(){!function(e){e(!1)}(i)}:function(){!function(e,t,n,c){fetch("http://3.23.57.97:8000/documents/1092349/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(e)}}).then((function(e){n("http://3.23.57.97:8000/media/".concat("science.pdf")),t(!0)})).catch((function(e){console.log(e)}))}(u,i,o)}})})})]})}var k=n(53),w=n.n(k),C=n(52),S=n.n(C);function D(e){var t=e.currentPage,n=e.setCurrentPage,s=e.numberOfPages;return Object(c.jsx)("tr",{className:"level",children:Object(c.jsxs)("div",{className:"level-left",style:{marginTop:"56px"},children:[Object(c.jsx)("td",{children:Object(c.jsx)(S.a,{onClick:function(){n(t<=1?1:t-1)}})}),Object(c.jsx)("td",{children:Object(c.jsx)("h3",{style:{margin:"30px 30px"},children:t})}),Object(c.jsx)("td",{children:Object(c.jsx)(w.a,{onClick:function(){t>=s?console.log("On the last page"):n(t+1)}})})]})})}function _(e){var t=e.currentPage,n=e.setCurrentPage,s=e.numberOfPages;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(D,{currentPage:t,setCurrentPage:n,numberOfPages:s})})}var P=n(27),T=n.n(P),M=n(115);function E(e){var t=e.query,n=e.docs,s=e.sortBy,a=e.currentPage,r=e.setSortBy,i=e.setCurrentPage,o=(e.setQueriedDocs,e.openedModal),u=e.setOpenedModal,l=e.setUrl,j=e.token,d=function(e,t){return/\d/.test(e)?t.filter((function(t){return-1!==t.number.toLowerCase().indexOf(e)})):t.filter((function(t){return-1!==t.clientName.toLowerCase().indexOf(e.toLowerCase())}))}(t,n),b=(d=function(e,t,n,c){var s=[];switch(e){case 0:return t;case 1:return s=t.sort((function(e,t){return e.number>t.number?1:e.number<t.number?-1:0})),console.log(s),s;case-1:return s=t.sort((function(e,t){return e.number<t.number?1:e.number>t.number?-1:0})),console.log(s),s;case 2:return s=t.sort((function(e,t){return e.clientName>t.clientName?1:e.clientName<t.clientName?-1:0})),console.log(s),s;case-2:return s=t.sort((function(e,t){return e.clientName<t.clientName?1:e.clientName>t.clientName?-1:0})),console.log(s),s;case 3:return s=t.sort((function(e,t){var n=e.issueDate.split("."),c=t.issueDate.split("."),s=Date("".concat(n[2],"-").concat(n[1],"-").concat(n[0])),a=Date("".concat(c[2],"-").concat(c[1],"-").concat(c[0]));return s<a?1:s>a?-1:0})),console.log(s),s;case-3:return s=t.sort((function(e,t){var n=e.issueDate.split("."),c=t.issueDate.split("."),s=Date("".concat(n[2],"-").concat(n[1],"-").concat(n[0])),a=Date("".concat(c[2],"-").concat(c[1],"-").concat(c[0]));return s>a?1:s<a?-1:0})),console.log(s),s}}(s,d)).slice(9*(a-1),9*a>d.length-1?d.length:9*a-1);return b=b.map((function(e){return Object(c.jsx)(y,{number:e.number,clientName:e.clientName,issueDate:e.issueDate,issueStatus:e.issueStatus,openedModal:o,setOpenedModal:u,setUrl:l,token:j},Object(M.a)())})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("table",{className:"table",id:"main-table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{id:"number",children:["N\xba",Object(c.jsx)(T.a,{id:"sort-by-number",onClick:function(){return r(1==s?-1:1)}})]}),Object(c.jsxs)("td",{id:"first",children:["\u041a\u043b\u0438\u0435\u043d\u0442",Object(c.jsx)(T.a,{id:"sort-by-client",onClick:function(){return r(2==s?-2:2)}})]}),Object(c.jsxs)("td",{id:"second",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u0435",Object(c.jsx)(T.a,{id:"sort-by-issue",onClick:function(){return r(3==s?-3:3)}})]}),Object(c.jsxs)("td",{id:"third",children:["\u0421\u0442\u0430\u0442\u0443\u0441",Object(c.jsx)(T.a,{id:"sort-by-issue-date",onClick:function(){return r(3==s?-3:3)}})]}),Object(c.jsx)("td",{})]})}),Object(c.jsx)("tbody",{children:b})]}),Object(c.jsx)(_,{currentPage:a,setCurrentPage:i,numberOfPages:Math.ceil(d.length/9)})]})}var U=n(54),B=n.n(U),q=n(40),A=function(e){var t=e.url,n=(e.token,e.fetch_documents,Object(s.useState)(null)),a=Object(l.a)(n,2),r=(a[0],a[1]),i=Object(s.useState)(1),o=Object(l.a)(i,2),u=o[0];o[1];return Object(c.jsxs)("div",{className:"modal-window",children:[Object(c.jsx)("div",{className:"modal-window__document",children:Object(c.jsx)(q.a,{file:t,onLoadSuccess:function(e){var t=e.numPages;r(t)},children:Object(c.jsx)(q.b,{pageNumber:u})})}),Object(c.jsx)("button",{onClick:function(){window.open(t)},children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0434\u043e\u0433\u043e\u0432\u043e\u0440"})]})};function J(e){var t=e.get_documents,n=e.token,a=e.userDetails,r=Object(s.useState)(""),i=Object(l.a)(r,2),o=i[0],u=i[1],j=Object(s.useState)(0),d=Object(l.a)(j,2),b=d[0],m=d[1],O=Object(s.useState)(1),h=Object(l.a)(O,2),f=h[0],x=h[1],g=Object(s.useState)(!1),p=Object(l.a)(g,2),v=p[0],y=p[1],k=Object(s.useState)("http://3.23.57.97:8000/media"),w=Object(l.a)(k,2),C=w[0],S=w[1],D=Object(s.useState)([]),_=Object(l.a)(D,2),P=_[0],T=_[1];return Object(s.useEffect)((function(){null!==a&&t(n,"").then((function(e){return e.json()})).then((function(e){console.log(e);var t=e;t=t.filter((function(e){return e.users[0].id===a.id}));var n=[];t.forEach((function(e){n.push({number:e.number,clientName:"".concat(a.first_name+" "+a.last_name),issueStatus:e.sign_status?"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d":"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f",issueDate:null!==e.sign_date?e.sign_date:""})})),T(n)})).catch((function(e){console.log(e)}))}),[a]),Object(c.jsxs)("div",{className:"main mx-6",children:[Object(c.jsx)(N,{query:o,setQuery:u}),Object(c.jsx)(E,{query:o,docs:P,setDocs:T,sortBy:b,currentPage:f,setCurrentPage:x,setSortBy:m,openedModal:v,setOpenedModal:y,setUrl:S,token:n}),Object(c.jsx)(B.a,{visible:v,width:"50%",height:"80%",effect:"fadeInUp",onClickAway:function(){return function(e){document.getElementById("main-table").style.animation="fadeOut 0.3s",T([]),t(n,"").then((function(e){return e.json()})).then((function(t){console.log(t);var n=t;n=n.filter((function(e){return e.users[0].id===a.id}));var c=[];n.forEach((function(e){c.push({number:e.number,clientName:"".concat(a.first_name+" "+a.last_name),issueStatus:e.sign_status?"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d":"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f",issueDate:null!==e.sign_date?e.sign_date:""})})),T(c),document.getElementById("main-table").style.animation="fadeIn 1.3s",e(!1)})).catch((function(e){console.log(e)}))}(y)},children:Object(c.jsx)(A,{url:C,token:n})})]})}function F(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(null),i=Object(l.a)(r,2),o=i[0],u=i[1];return Object(c.jsx)(L,{userDetails:o,setUserDetails:u,children:Object(c.jsxs)(j.a,{basename:"mts-mock",children:[Object(c.jsx)(z,{}),Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{path:"/login",children:Object(c.jsx)(H,{setToken:a,userDetails:o,setUserDetails:u})}),Object(c.jsx)(G,{path:"/main",children:Object(c.jsx)(W,{get_documents:function(e){return fetch("http://3.23.57.97:8000/documents/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(e)}})},token:n,userDetails:o})})]})]})})}var I=Object(s.createContext)();function L(e){var t=e.children,n=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1];return{user:n,signin:function(e,t,n,s,a,r){(function(e,t){return fetch("http://3.23.57.97:8000/token-auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})})})(e,t).then((function(e){return e.json()})).then((function(e){"token"in e&&(a(e.token),c("name"),function(e,t){fetch("http://3.23.57.97:8000/users/current_user/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(e)}}).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){console.log(e)}))}(e.token,r),n.push(s))})).catch((function(e){}))},signout:function(e){return function(){c(null),e()}}}}();return Object(c.jsx)(I.Provider,{value:n,children:t})}function Q(){return Object(s.useContext)(I)}function z(){Object(d.g)();return Q().user?Object(c.jsx)("p",{}):Object(c.jsx)("div",{children:Object(c.jsx)(j.b,{to:"/main",children:"Click me"})})}function G(e){var t=e.children,n=Object(u.a)(e,["children"]),s=Q();return Object(c.jsx)(d.b,Object(o.a)(Object(o.a)({},n),{},{render:function(e){var n=e.location;return s.user?t:Object(c.jsx)(d.a,{to:{pathname:"/login",state:{from:n}}})}}))}function W(e){var t=e.get_documents,n=e.token,s=e.userDetails;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g,{useHistory:d.g,useAuth:Q}),Object(c.jsx)(J,{get_documents:t,token:n,userDetails:s})]})}function H(e){var t=e.setToken,n=e.setUserDetails,a=Object(s.useState)(""),r=Object(l.a)(a,2),i=r[0],o=r[1],u=Object(s.useState)(""),j=Object(l.a)(u,2),b=j[0],m=j[1],O=Object(d.g)(),h=Object(d.h)(),f=Q(),x=(h.state||{from:{pathname:"/main"}}).from;return Object(c.jsx)(p,{login:function(){f.signin(i,b,O,x,t,n)},setPassword:m,setName:o,name:i,password:b})}i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))},64:function(e,t,n){},96:function(e,t){},97:function(e,t){},98:function(e,t){},99:function(e,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.66fe3748.chunk.js.map