(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(9),o=c.n(i),s=(c(41),c(15)),j=(c(42),c(34)),r=c(59),l=c(58),d=c(18),b=c(21),x=c(22),u=c(8),O=c(25),h=(c(43),c(55)),p=c(56),m=c(3);var f=function(e){var t=e.time;return Object(m.jsx)("option",{value:t,children:t})},v=c(30),T=c(31);var g=function(e){var t=e.todos,c=e.setTodos,n=e.inputText,a=e.inputTime,i=e.setInputText,o=e.setInputTime,s=(e.filter,e.setFilter);return e.handleFilter,Object(m.jsx)(l.a,{children:Object(m.jsxs)(x.a,{children:[Object(m.jsx)(u.a,{}),Object(m.jsx)(u.a,{}),Object(m.jsx)(u.a,{xs:5,children:Object(m.jsx)(l.a.Control,{id:"inlineFormInputName",maxlength:"65",value:n,name:"activity",onChange:function(e){console.log(e.target.value),i(e.target.value)},placeholder:"Add Todo"})}),Object(m.jsx)(u.a,{xs:2,children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.a.Text,{children:Object(m.jsx)(h.a,{})}),Object(m.jsx)(T.a,{placement:"top",overlay:Object(m.jsx)(v.a,{id:"tooltip-top",children:"Minute Estimation"}),children:Object(m.jsx)(b.a,{min:"1",max:"999999",type:"number",value:a,onChange:function(e){o(e.target.value)},name:"time",placeholder:"Min. Spent"})},"top")]})}),Object(m.jsx)(u.a,{xs:"auto",children:Object(m.jsx)(O.a,{id:"button-add",variant:"secondary",onClick:function(e){e.preventDefault(),c([].concat(Object(j.a)(t),[{text:n,time:a,completed:!1,id:Object(r.a)()}])),i(""),o("")},children:"+"})}),Object(m.jsx)(u.a,{xs:2,children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.a.Text,{children:Object(m.jsx)(p.a,{})}),Object(m.jsx)(T.a,{placement:"top",overlay:Object(m.jsx)(v.a,{id:"tooltip-top",children:"Filter by Minute"}),children:Object(m.jsxs)(l.a.Control,{id:"Filter",as:"select",onChange:function(e){s(e.target.value)},children:[Object(m.jsx)("option",{value:"All",children:"All"}),t.map((function(e){return Object(m.jsx)(f,{time:e.time})}))]})},"top")]})}),Object(m.jsx)(u.a,{}),Object(m.jsx)(u.a,{})]})})},S=c(32),C=c(19),I=c(57);var y=function(e){var t=e.text,c=e.todo,n=e.time,a=e.todos,i=e.setTodos;return Object(m.jsxs)(x.a,{children:[Object(m.jsx)(u.a,{}),Object(m.jsx)(u.a,{children:Object(m.jsx)(l.a.Check,{id:"toogle-checked",onChange:function(e){i(a.map((function(e){return e.id===c.id?Object(S.a)(Object(S.a)({},e),{},{completed:!e.completed}):e})))},checked:!!c.completed})}),Object(m.jsx)(u.a,{xs:5,children:Object(m.jsx)(C.a,{children:Object(m.jsx)(C.a.Item,{variant:"dark",id:c.completed?"Completed":"",children:t})})}),Object(m.jsx)(u.a,{xs:1,children:Object(m.jsx)(C.a,{children:Object(m.jsx)(C.a.Item,{variant:"dark",id:c.completed?"Completed":"",children:n})})}),Object(m.jsx)(u.a,{xs:"auto",children:Object(m.jsx)(O.a,{variant:"secondary",onClick:function(){i(a.filter((function(e){return e.id!==c.id})))},children:Object(m.jsx)(I.a,{})})}),Object(m.jsx)(u.a,{xs:2}),Object(m.jsx)(u.a,{}),Object(m.jsx)(u.a,{})]})};var F=function(e){var t=e.todos,c=e.setTodos,n=e.filteredTodos;return Object(m.jsx)("div",{children:n.map((function(e){return Object(m.jsx)(y,{text:e.text,time:e.time,todo:e,todos:t,setTodos:c},e.id)}))})},k="react-todo-list-todos";var A=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),j=o[0],r=o[1],l=Object(n.useState)([]),d=Object(s.a)(l,2),b=d[0],x=d[1],u=Object(n.useState)([]),O=Object(s.a)(u,2),h=O[0],p=O[1],f=Object(n.useState)("All"),v=Object(s.a)(f,2),T=v[0],S=v[1];return Object(n.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem(k));e&&x(e)}()}),[]),Object(n.useEffect)((function(){p("All"===T?b:b.filter((function(e){return e.time===T}))),localStorage.setItem(k,JSON.stringify(b))}),[b,T]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h1",{children:"Spare ToDo"}),Object(m.jsx)("h5",{children:"Spend Your Spare Time Wisely"})]}),Object(m.jsx)(g,{todos:b,setTodos:x,inputText:c,inputTime:j,setInputText:a,setInputTime:r,filter:T,setFilter:S}),Object(m.jsx)(F,{todos:b,setTodos:x,filteredTodos:h})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),i(e),o(e)}))};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root")),E()}},[[49,1,2]]]);
//# sourceMappingURL=main.7e6e4d53.chunk.js.map