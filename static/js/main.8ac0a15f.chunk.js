(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),r=c(1),l=(c(10),c(2)),s=c.n(l),o=c(0),j=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a[a.length-1]/c),r=(t-1)*c,l=c*t;return Object(o.jsxs)("section",{children:[Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){return n(t-1)},children:"\xab"})}),a.slice(0,i).map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:e===t}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:"".concat(e)})})})),Object(o.jsx)("li",{className:s()("page-item",{disabled:t===i}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){return n(t+1)},children:"\xbb"})})]}),Object(o.jsx)("ul",{children:a.slice(r,l).map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)})}))})]})};var d=function(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}(1,42),u=function(){var e=Object(r.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],u=l[1],h=(s-1)*c+1,b=Math.min(c*s,d[d.length-1]),m=d[d.length-1];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(h," - ").concat(b," of ").concat(m,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){var a=e.target.value;u(1),t(+a)},children:[3,5,10,20].map((function(e){return Object(o.jsx)("option",{value:e,children:e})}))})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:d,perPage:c,currentPage:s,onPageChange:function(e){return u(e)}})]})};n.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8ac0a15f.chunk.js.map