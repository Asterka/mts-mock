(this["webpackJsonpmts-mock"]=this["webpackJsonpmts-mock"]||[]).push([[0],{100:function(e,t){},102:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(0),r=n.n(s),a=n(36),i=n.n(a),o=(n(64),n(42)),u=n(56),l=n(10),j=n(25),d=n(9),b=n(30),O=n.n(b),m=n(51),h=n.n(m),f=n(52),x=n.n(f),g=function(e){var t=e.useHistory,n=e.useAuth,s=t(),r=n();return Object(c.jsx)("div",{className:"container is-fluid header",children:Object(c.jsxs)("div",{className:"level is-mobile",style:{width:"100%"},children:[Object(c.jsx)("div",{className:"level-left",children:Object(c.jsx)("div",{className:"navbar-brand",children:Object(c.jsx)("a",{className:"navbar-item",href:"https://pagename.com",children:Object(c.jsx)("img",{id:"logo",src:"http://3.23.57.97/static/MTS_logo.png"})})})}),Object(c.jsxs)("div",{className:"level-right is-mobile",children:[Object(c.jsx)("div",{className:"navbar-item",children:Object(c.jsx)(h.a,{})}),Object(c.jsx)("div",{className:"navbar-item",children:Object(c.jsx)(O.a,{})}),Object(c.jsx)("div",{className:"navbar-item",children:Object(c.jsxs)("div",{className:"dropdown is-hoverable",children:[Object(c.jsx)("div",{className:"dropdown-trigger",children:Object(c.jsx)(x.a,{"aria-haspopup":"true","aria-controls":"dropdown-menu4"})}),Object(c.jsx)("div",{className:"dropdown-menu",style:{left:"-100px"},id:"dropdown-menu4",role:"menu",children:Object(c.jsx)("div",{className:"dropdown-content",children:Object(c.jsx)("div",{className:"dropdown-item",children:Object(c.jsx)("div",{className:"menu",children:Object(c.jsx)("p",{className:"menu-label",onClick:function(){r.signout((function(){return s.push("/login")}))},children:"Log out"})})})})})]})})]})]})})};var v=Object(d.i)((function(e){var t=e.login,n=e.setName,r=e.setPassword,a=e.name,i=e.password,o=Object(s.useState)(!1),u=Object(l.a)(o,2),j=u[0],d=u[1];return Object(s.useEffect)((function(){!0===j&&t()}),[j]),Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(e){!function(e,t,n){e.preventDefault(),n(!t)}(e,j,d)},children:[Object(c.jsx)("label",{htmlFor:"username",children:"Username"}),Object(c.jsx)("input",{type:"text",name:"username",value:a,onChange:function(e){!function(e,t){t(e.target.value)}(e,n)}}),Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{type:"password",name:"password",value:i,onChange:function(e){!function(e,t){t(e.target.value)}(e,r)}}),Object(c.jsx)("input",{type:"submit"})]})})}));function p(e){var t=e.setQuery;e.query;return Object(c.jsx)("input",{id:"input",onChange:function(e){t(e.target.value)}})}function N(e){var t=e.setQuery,n=e.query;return Object(c.jsxs)("div",{className:"search-component",children:[Object(c.jsx)("h2",{children:"\u0417\u0430\u043a\u0430\u0437\u044b"}),Object(c.jsx)(p,{setQuery:t,query:n})]})}var y=n(37),w=n.n(y);function C(e){var t=e.number,n=e.clientName,s=e.issueDate,r=e.issueStatus,a=e.openedModal,i=e.setOpenedModal;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"number1",children:Object(c.jsx)("div",{className:"align-vertically",children:t})}),Object(c.jsx)("td",{className:"client_name",children:Object(c.jsx)("div",{className:"align-vertically",children:n})}),Object(c.jsx)("td",{className:"issue_date",children:Object(c.jsx)("div",{className:"align-vertically",children:s})}),Object(c.jsx)("td",{className:"issue_status",children:Object(c.jsx)("div",{className:"align-vertically ".concat("\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"===r?"is-signed":"is-not-signed"),children:r})}),Object(c.jsx)("td",{className:"show_more",children:Object(c.jsx)("div",{className:"align-vertically",children:Object(c.jsx)(O.a,{onClick:!0===a?function(){!function(e){e(!1)}(i)}:function(){!function(e){e(!0)}(i)}})})})]})}var S=n(54),k=n.n(S),D=n(53),P=n.n(D);function _(e){var t=e.currentPage,n=e.setCurrentPage,s=e.numberOfPages;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)(P.a,{onClick:function(){n(t<=1?1:t-1)}})}),Object(c.jsx)("td",{children:Object(c.jsx)("h3",{children:t})}),Object(c.jsx)("td",{children:Object(c.jsx)(k.a,{onClick:function(){t>=s?console.log("On the last page"):n(t+1)}})})]})}function M(e){var t=e.currentPage,n=e.setCurrentPage,s=e.numberOfPages;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(_,{currentPage:t,setCurrentPage:n,numberOfPages:s})})}var T=n(27),q=n.n(T),E=n(115);function A(e){var t=e.query,n=e.docs,s=e.sortBy,r=e.currentPage,a=e.setSortBy,i=e.setCurrentPage,o=(e.setQueriedDocs,e.openedModal),u=e.setOpenedModal,l=function(e,t){return/\d/.test(e)?t.filter((function(t){return-1!==t.number.toLowerCase().indexOf(e)})):t.filter((function(t){return-1!==t.clientName.toLowerCase().indexOf(e.toLowerCase())}))}(t,n),j=(l=function(e,t,n,c){var s=[];switch(e){case 0:return t;case 1:return s=t.sort((function(e,t){return e.number>t.number?1:e.number<t.number?-1:0})),console.log(s),s;case-1:return s=t.sort((function(e,t){return e.number<t.number?1:e.number>t.number?-1:0})),console.log(s),s;case 2:return s=t.sort((function(e,t){return e.clientName>t.clientName?1:e.clientName<t.clientName?-1:0})),console.log(s),s;case-2:return s=t.sort((function(e,t){return e.clientName<t.clientName?1:e.clientName>t.clientName?-1:0})),console.log(s),s;case 3:return s=t.sort((function(e,t){var n=e.issueDate.split("."),c=t.issueDate.split("."),s=Date("".concat(n[2],"-").concat(n[1],"-").concat(n[0])),r=Date("".concat(c[2],"-").concat(c[1],"-").concat(c[0]));return s<r?1:s>r?-1:0})),console.log(s),s;case-3:return s=t.sort((function(e,t){var n=e.issueDate.split("."),c=t.issueDate.split("."),s=Date("".concat(n[2],"-").concat(n[1],"-").concat(n[0])),r=Date("".concat(c[2],"-").concat(c[1],"-").concat(c[0]));return s>r?1:s<r?-1:0})),console.log(s),s}}(s,l)).slice(9*(r-1),9*r>l.length-1?l.length:9*r-1);return j=j.map((function(e){return Object(c.jsx)(C,{number:e.number,clientName:e.clientName,issueDate:e.issueDate,issueStatus:e.issueStatus,openedModal:o,setOpenedModal:u},Object(E.a)())})),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{id:"number",children:["N\xba",Object(c.jsx)(q.a,{id:"sort-by-number",onClick:function(){return a(1==s?-1:1)}})]}),Object(c.jsxs)("td",{id:"first",children:["\u041a\u043b\u0438\u0435\u043d\u0442",Object(c.jsx)(q.a,{id:"sort-by-client",onClick:function(){return a(2==s?-2:2)}})]}),Object(c.jsxs)("td",{id:"second",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u0435",Object(c.jsx)(q.a,{id:"sort-by-issue",onClick:function(){return a(3==s?-3:3)}})]}),Object(c.jsxs)("td",{id:"third",children:["\u0421\u0442\u0430\u0442\u0443\u0441",Object(c.jsx)(q.a,{id:"sort-by-issue-date",onClick:function(){return a(3==s?-3:3)}})]}),Object(c.jsx)("td",{})]})}),Object(c.jsx)("tbody",{children:j}),Object(c.jsx)("tfoot",{children:Object(c.jsx)(M,{currentPage:r,setCurrentPage:i,numberOfPages:Math.ceil(l.length/9)})})]})})}var B=n(41),F=n.p+"test3.pdf",J=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=(t[0],t[1]),r=Object(s.useState)(1),a=Object(l.a)(r,2),i=a[0];a[1];return Object(c.jsxs)("div",{className:"modal-window",children:[Object(c.jsx)("div",{className:"modal-window__document",children:Object(c.jsx)(B.a,{file:F,onLoadSuccess:function(e){var t=e.numPages;n(t)},children:Object(c.jsx)(B.b,{pageNumber:i})})}),Object(c.jsx)("h3",{children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0434\u043e\u0433\u043e\u0432\u043e\u0440"})]})};function L(e){var t=e.get_documents,n=e.token,r=e.userDetails,a=Object(s.useState)(""),i=Object(l.a)(a,2),o=i[0],u=i[1],j=Object(s.useState)(0),d=Object(l.a)(j,2),b=d[0],O=d[1],m=Object(s.useState)(1),h=Object(l.a)(m,2),f=h[0],x=h[1],g=Object(s.useState)(!1),v=Object(l.a)(g,2),p=v[0],y=v[1],C=Object(s.useState)(!0),S=Object(l.a)(C,2),k=(S[0],S[1],Object(s.useState)(!1)),D=Object(l.a)(k,2),P=(D[0],D[1],Object(s.useState)([])),_=Object(l.a)(P,2),M=_[0],T=_[1];return Object(s.useEffect)((function(){null!==r&&t(n).then((function(e){return e.json()})).then((function(e){var t=e;t=t.filter((function(e){return e.users[0].id===r.id}));var n=[];t.forEach((function(e){n.push({number:e.number,clientName:"".concat(r.first_name+" "+r.last_name),issueStatus:e.sign_status?"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d":"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f",issueDate:null!==e.sign_date?e.sign_date:""})})),T(n)})).catch((function(e){console.log(e)}))}),[r]),Object(c.jsxs)("div",{className:"main mx-6",children:[Object(c.jsx)(N,{query:o,setQuery:u}),Object(c.jsx)(A,{query:o,docs:M,setDocs:T,sortBy:b,currentPage:f,setCurrentPage:x,setSortBy:O,openedModal:p,setOpenedModal:y}),Object(c.jsx)(w.a,{visible:p,width:"50%",height:"80%",effect:"fadeInUp",onClickAway:function(){return function(e){e(!1)}(y)},children:Object(c.jsx)(J,{})})]})}function Q(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(null),i=Object(l.a)(a,2),o=i[0],u=i[1];return Object(c.jsx)(G,{userDetails:o,setUserDetails:u,children:Object(c.jsxs)(j.a,{basename:"mts-mock",children:[Object(c.jsx)(I,{}),Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{path:"/login",children:Object(c.jsx)(R,{setToken:r,userDetails:o,setUserDetails:u})}),Object(c.jsx)(W,{path:"/main",children:Object(c.jsx)(K,{get_documents:U,token:n,userDetails:o})})]})]})})}function U(e){return fetch("http://3.23.57.97:8000/documents/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(e)}})}var z=Object(s.createContext)();function G(e){var t=e.children,n=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1];return{user:n,signin:function(e,t,n,s,r,a){(function(e,t){return fetch("http://3.23.57.97:8000/token-auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})})})(e,t).then((function(e){return e.json()})).then((function(e){"token"in e&&(r(e.token),c("name"),function(e,t){fetch("http://3.23.57.97:8000/users/current_user/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(e)}}).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){console.log(e)}))}(e.token,a),n.push(s))})).catch((function(e){}))},signout:function(e){return function(){c(null),e()}}}}();return Object(c.jsx)(z.Provider,{value:n,children:t})}function H(){return Object(s.useContext)(z)}function I(){Object(d.g)();return H().user?Object(c.jsx)("p",{}):Object(c.jsx)("div",{children:Object(c.jsx)(j.b,{to:"/main",children:"Click me"})})}function W(e){var t=e.children,n=Object(u.a)(e,["children"]),s=H();return Object(c.jsx)(d.b,Object(o.a)(Object(o.a)({},n),{},{render:function(e){var n=e.location;return s.user?t:Object(c.jsx)(d.a,{to:{pathname:"/login",state:{from:n}}})}}))}function K(e){var t=e.get_documents,n=e.token,s=e.userDetails;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g,{useHistory:d.g,useAuth:H}),Object(c.jsx)(L,{get_documents:t,token:n,userDetails:s})]})}function R(e){var t=e.setToken,n=e.setUserDetails,r=Object(s.useState)(""),a=Object(l.a)(r,2),i=a[0],o=a[1],u=Object(s.useState)(""),j=Object(l.a)(u,2),b=j[0],O=j[1],m=Object(d.g)(),h=Object(d.h)(),f=H(),x=(h.state||{from:{pathname:"/main"}}).from;return Object(c.jsx)(v,{login:function(){f.signin(i,b,m,x,t,n)},setPassword:O,setName:o,name:i,password:b})}i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Q,{})}),document.getElementById("root"))},64:function(e,t,n){},96:function(e,t){},97:function(e,t){},98:function(e,t){},99:function(e,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.9ea7d815.chunk.js.map