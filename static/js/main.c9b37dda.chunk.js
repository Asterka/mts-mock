(this["webpackJsonpmts-mock"]=this["webpackJsonpmts-mock"]||[]).push([[0],{49:function(e,t,s){},77:function(e,t){},78:function(e,t){},79:function(e,t){},80:function(e,t){},81:function(e,t){},83:function(e,t,s){"use strict";s.r(t);var n=s(3),c=s(1),r=s.n(c),a=s(21),u=s.n(a),i=(s(49),s(24)),o=s.n(i),l=s(40),j=s.n(l),b=s(38),m=s.n(b),d=function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("img",{id:"logo",src:"https://static.ssl.mts.ru/mts_rf/images/MTS_Logo_rus_r.png?_ga=2.28346236.1349828396.1606072244-1796690475.1606072244&_gl=1*1l81xjo*_ga*MTc5NjY5MDQ3NS4xNjA2MDcyMjQ0*_ga_DJC0PYZJHN*MTYwNjA3MjI0NC4xLjAuMTYwNjA3MjI0NC42MA.."})}),Object(n.jsxs)("div",{className:"navbar-items",children:[Object(n.jsx)(m.a,{}),Object(n.jsx)(o.a,{}),Object(n.jsx)(j.a,{})]})]})},O=s(19);s(31),s.p;function h(e){var t=e.setQuery;e.query;return Object(n.jsx)("input",{id:"input",onChange:function(e){t(e.target.value)}})}function x(e){var t=e.setQuery,s=e.query;return Object(n.jsxs)("div",{className:"search-component",children:[Object(n.jsx)("h2",{children:"\u0417\u0430\u043a\u0430\u0437\u044b"}),Object(n.jsx)(h,{setQuery:t,query:s})]})}var f=s(16),N=s.n(f);function g(e){var t=e.sortBy,s=e.setSortBy;return Object(n.jsxs)("div",{className:"table-description",children:[Object(n.jsxs)("h2",{id:"number",children:["N\xba",Object(n.jsx)(N.a,{id:"sort-by-number",onClick:function(){return s(1==t?-1:1)}})]}),Object(n.jsxs)("h2",{id:"first",children:["\u041a\u043b\u0438\u0435\u043d\u0442",Object(n.jsx)(N.a,{id:"sort-by-client",onClick:function(){return s(2==t?-2:2)}})]}),Object(n.jsxs)("h2",{id:"second",children:["\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u0435",Object(n.jsx)(N.a,{id:"sort-by-issue",onClick:function(){return s(3==t?-3:3)}})]}),Object(n.jsxs)("h2",{id:"third",children:["\u0421\u0442\u0430\u0442\u0443\u0441",Object(n.jsx)(N.a,{id:"sort-by-issue-date",onClick:function(){return s(3==t?-3:3)}})]})]})}function v(e){var t=e.number,s=e.clientName,c=e.issueDate,r=e.issueStatus;return Object(n.jsxs)("div",{className:"document",children:[Object(n.jsx)("h2",{className:"number",children:t}),Object(n.jsx)("h2",{className:"client_name",children:s}),Object(n.jsx)("h2",{className:"issue_date",children:c}),Object(n.jsx)("h2",{className:"issue_status",style:{color:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"===r?"#00C19B":"#FA8A64"},children:r}),Object(n.jsx)("div",{className:"show_more",children:Object(n.jsx)(o.a,{})})]})}function D(e){var t=e.currentPage,s=e.setCurrentPage,c=e.numberOfPages;return Object(n.jsxs)("div",{className:"footer__nav",children:[Object(n.jsx)("button",{onClick:function(){s(t<=1?1:t-1)},children:"-"}),Object(n.jsx)("h3",{children:t}),console.log(t),Object(n.jsx)("button",{onClick:function(){t>=c?console.log("On the last page"):s(t+1)},children:"+"})]})}function y(e){var t=e.currentPage,s=e.setCurrentPage,c=e.numberOfPages;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(D,{currentPage:t,setCurrentPage:s,numberOfPages:c})})}var S=s(94);function C(e){var t=e.query,s=e.docs,c=e.sortBy,r=e.currentPage,a=e.setCurrentPage,u=(e.setQueriedDocs,function(e,t){return/\d/.test(e)?t.filter((function(t){return-1!==t.number.toLowerCase().indexOf(e)})):t.filter((function(t){return-1!==t.clientName.toLowerCase().indexOf(e.toLowerCase())}))}(t,s)),i=(u=function(e,t,s,n){var c=[];switch(e){case 0:return t;case 1:return c=t.sort((function(e,t){return e.number>t.number?1:e.number<t.number?-1:0})),console.log(c),c;case-1:return c=t.sort((function(e,t){return e.number<t.number?1:e.number>t.number?-1:0})),console.log(c),c;case 2:return c=t.sort((function(e,t){return e.clientName>t.clientName?1:e.clientName<t.clientName?-1:0})),console.log(c),c;case-2:return c=t.sort((function(e,t){return e.clientName<t.clientName?1:e.clientName>t.clientName?-1:0})),console.log(c),c;case 3:return c=t.sort((function(e,t){var s=e.issueDate.split("."),n=t.issueDate.split("."),c=Date("".concat(s[2],"-").concat(s[1],"-").concat(s[0])),r=Date("".concat(n[2],"-").concat(n[1],"-").concat(n[0]));return c<r?1:c>r?-1:0})),console.log(c),c;case-3:return c=t.sort((function(e,t){var s=e.issueDate.split("."),n=t.issueDate.split("."),c=Date("".concat(s[2],"-").concat(s[1],"-").concat(s[0])),r=Date("".concat(n[2],"-").concat(n[1],"-").concat(n[0]));return c>r?1:c<r?-1:0})),console.log(c),c}}(c,u)).slice(9*(r-1),9*r>u.length-1?u.length:9*r-1);return i=i.map((function(e){return Object(n.jsx)(v,{number:e.number,clientName:e.clientName,issueDate:e.issueDate,issueStatus:e.issueStatus},Object(S.a)())})),Object(n.jsxs)("div",{className:"documents",children:[i,Object(n.jsx)("div",{class:"footer",children:Object(n.jsx)(y,{currentPage:r,setCurrentPage:a,numberOfPages:Math.ceil(u.length/9)})})]})}function p(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(0),u=Object(O.a)(a,2),i=u[0],o=u[1],l=Object(c.useState)(1),j=Object(O.a)(l,2),b=j[0],m=j[1],d=Object(c.useState)([{number:"3265482010",clientName:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447",issueDate:"",issueStatus:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f"},{number:"32654812672",clientName:"\u041b\u0435\u0431\u0435\u0434\u0435\u0432\u0430 \u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430 \u0418\u0432\u0430\u043d\u043e\u0432\u043d\u0430",issueDate:"",issueStatus:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f"},{number:"3265409529",clientName:"\u0412\u0435\u0441\u0435\u043b\u043e\u0432 \u0420\u043e\u043c\u0430\u043d \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447",issueDate:"16.10.2020",issueStatus:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"},{number:"3265367895",clientName:"\u0420\u043e\u0441\u043b\u044f\u043a\u043e\u0432 \u041c\u0438\u0445\u0430\u0438\u043b \u0418\u0433\u043e\u0440\u0435\u0432\u0438\u0447",issueDate:"16.10.2020",issueStatus:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"},{number:"3265482010",clientName:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447",issueDate:"",issueStatus:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f"},{number:"32654812672",clientName:"\u041b\u0435\u0431\u0435\u0434\u0435\u0432\u0430 \u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430 \u0418\u0432\u0430\u043d\u043e\u0432\u043d\u0430",issueDate:"",issueStatus:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f"},{number:"3265409529",clientName:"\u0412\u0435\u0441\u0435\u043b\u043e\u0432 \u0420\u043e\u043c\u0430\u043d \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447",issueDate:"16.10.2020",issueStatus:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"},{number:"3265367895",clientName:"\u0420\u043e\u0441\u043b\u044f\u043a\u043e\u0432 \u041c\u0438\u0445\u0430\u0438\u043b \u0418\u0433\u043e\u0440\u0435\u0432\u0438\u0447",issueDate:"16.10.2020",issueStatus:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d"},{number:"3265482010",clientName:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447",issueDate:"",issueStatus:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f"},{number:"3265482010",clientName:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447",issueDate:"",issueStatus:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f"},{number:"3265482010",clientName:"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447",issueDate:"",issueStatus:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u0438\u044f"}]),h=Object(O.a)(d,2),f=h[0],N=h[1];return Object(n.jsxs)("div",{className:"main",children:[Object(n.jsx)(x,{query:s,setQuery:r}),Object(n.jsx)(g,{docs:f,setDocs:N,sortBy:i,setSortBy:o}),Object(n.jsx)(C,{query:s,docs:f,setDocs:N,sortBy:i,currentPage:b,setCurrentPage:m}),Object(n.jsx)("hr",{})]})}u.a.render(Object(n.jsxs)(r.a.StrictMode,{children:[Object(n.jsx)(d,{}),Object(n.jsx)(p,{})]}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.c9b37dda.chunk.js.map