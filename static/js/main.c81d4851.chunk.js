(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n,s=c(5),r=c.n(s),o=c(2),a=c(0),d=c.n(a),i=(c(20),function(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){return e.json()}))});!function(e){e.AddTodos="AddTodos",e.SelectUserById="SelectUserById",e.LoadUserById="LoadUserById"}(n||(n={}));var l=function(e){return{type:n.SelectUserById,payload:e}},u=function(e){return e.todos},j=function(e){return e.selectUserById},b=function(e){return e.user},O=(c(21),c(1)),h=function(){var e=Object(o.b)(),t=Object(o.c)(b),c=Object(o.c)(j);return Object(a.useEffect)((function(){var t;(t=c,i("/users/".concat(t))).then((function(t){return e((c=t,{type:n.LoadUserById,payload:c}));var c}))}),[c]),Object(O.jsxs)("div",{className:"CurrentUser",children:[Object(O.jsx)("h2",{className:"CurrentUser__title",children:Object(O.jsx)("span",{children:"Selected user: ".concat(c)})}),Object(O.jsx)("h3",{className:"CurrentUser__name",children:null===t||void 0===t?void 0:t.name}),Object(O.jsx)("p",{className:"CurrentUser__email",children:null===t||void 0===t?void 0:t.email}),Object(O.jsx)("p",{className:"CurrentUser__phone",children:null===t||void 0===t?void 0:t.phone}),Object(O.jsx)("button",{type:"button",className:"TodoList__user-button button",onClick:function(){return e(l(0))},children:"Clear"})]})},p=c(10),f=(c(23),function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("all"),d=Object(p.a)(r,2),j=d[0],b=d[1],h=Object(o.c)(u),f=Object(o.b)();Object(a.useEffect)((function(){i("/todos").then((function(e){return f((t=e,{type:n.AddTodos,payload:t}));var t}))}),[]);var m=Object(a.useMemo)((function(){return h.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})).filter((function(e){switch(j){case"active":return!e.completed;case"completed":return e.completed;default:return!0}}))}),[j,c,h]);return Object(O.jsxs)("div",{className:"TodoList",children:[Object(O.jsx)("h2",{children:"Todos:"}),Object(O.jsx)("input",{type:"text",value:c,onChange:function(e){return s(e.target.value)},id:"search-query",className:"TodoList_input",placeholder:"Write the Title"}),Object(O.jsxs)("select",{onChange:function(e){return b(e.target.value)},className:"TodoList_section",children:[Object(O.jsx)("option",{value:"all",children:"all"}),Object(O.jsx)("option",{value:"active",children:"active"}),Object(O.jsx)("option",{value:"completed",children:"completed"})]}),Object(O.jsx)("div",{className:"TodoList__list-container",children:Object(O.jsx)("ul",{className:"TodoList__list",children:m.map((function(e){return Object(O.jsxs)("li",{className:"TodoList__item ".concat(e.completed?"TodoList__item--checked":"TodoList__item--unchecked"),children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(O.jsx)("p",{children:e.title})]}),Object(O.jsxs)("button",{className:"TodoList__user-button button",type:"button",onClick:function(){return t=e.userId,f(l(t));var t},children:["User\xa0",e.userId]})]},e.id)}))})})]})}),m=d.a.memo((function(){var e=Object(o.c)(j);return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{className:"App__sidebar",children:Object(O.jsx)(f,{})}),Object(O.jsx)("div",{className:"App__content",children:Object(O.jsx)("div",{className:"App__content-container",children:e?Object(O.jsx)(h,{}):Object(O.jsx)("h3",{children:"No user selected"})})})]})})),v=c(9),x=c(3),_=c(12),y={todos:[],selectUserById:0,user:null},N=Object(_.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.AddTodos:return Object(x.a)(Object(x.a)({},e),{},{todos:[].concat(Object(v.a)(e.todos),Object(v.a)(t.payload))});case n.SelectUserById:return Object(x.a)(Object(x.a)({},e),{},{selectUserById:t.payload});case n.LoadUserById:return Object(x.a)(Object(x.a)({},e),{},{user:t.payload});default:return e}})),U=function(){return Object(O.jsx)(o.a,{store:N,children:Object(O.jsx)(m,{})})};r.a.render(Object(O.jsx)(U,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c81d4851.chunk.js.map