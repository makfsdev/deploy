(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[22],{110:function(e,t,c){"use strict";c(2);var n=c.p+"static/media/load.7151e7e6.png",r=c(4);t.a=function(){return Object(r.jsx)("div",{className:"loading",children:Object(r.jsxs)("header",{className:"loading-header",children:[Object(r.jsx)("p",{children:"Loading ..."}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("img",{src:n,className:"loading-logo",alt:"logo"})]})})}},113:function(e,t,c){"use strict";c.d(t,"a",(function(){return i})),c.d(t,"d",(function(){return l})),c.d(t,"f",(function(){return u})),c.d(t,"b",(function(){return j})),c.d(t,"h",(function(){return d})),c.d(t,"g",(function(){return h})),c.d(t,"c",(function(){return b})),c.d(t,"e",(function(){return p}));var n=c(16),r=c.n(n),s=c(20),a=c(28),o=c.n(a),i=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("http://localhost:5000/api","/voiture"),t,{});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(r.a.mark((function e(t,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("http://localhost:5000/api","/voitures/validation/limit"),{validation:t,count:c});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),u=function(){var e=Object(s.a)(r.a.mark((function e(t,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("".concat("http://localhost:5000/api","/voiture/").concat(t),{headers:{authtoken:c}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat("http://localhost:5000/api","/voiture/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(r.a.mark((function e(t,c,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.put("".concat("http://localhost:5000/api","/voiture/").concat(t),c,{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(r.a.mark((function e(t,c,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.put("".concat("http://localhost:5000/api","/voiture/update/").concat(t),c,{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(r.a.mark((function e(t,c,n,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("http://localhost:5000/api","/voitures"),{validation:t,sort:c,order:n,page:s});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c,n,r){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat("http://localhost:5000/api","/voitures/total"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},310:function(e,t,c){"use strict";c.r(t);var n=c(109),r=c(105),s=c(2),a=c(30),o=c(33),i=c(284),l=c(113),u=c(110),j=c(314),d=c(315),h=c(316),b=c(137),p=c(44),x=c.p+"static/media/car-check.0cc19140.png",O=c(4);t.default=function(e){e.history;var t=Object(s.useState)([]),c=Object(r.a)(t,2),f=c[0],m=c[1],v=Object(s.useState)(!1),g=Object(r.a)(v,2),y=g[0],N=g[1],w=Object(s.useState)([]),k=Object(r.a)(w,2),S=k[0],V=k[1],C=Object(a.c)((function(e){return Object(n.a)({},e)})).user;Object(s.useEffect)((function(){z()}),[]);var z=function(){N(!0),Object(l.d)(!1).then((function(e){m(e.data),N(!1)})).catch((function(e){console.log(e),N(!1)})),Object(l.d)(!0).then((function(e){V(e.data),N(!1)})).catch((function(e){console.log(e),N(!1)}))},_=function(e){window.confirm("Suprimer ? ")&&Object(l.f)(e,C.token).then((function(e){z(),p.b.error("Voiture Suprimer")})).catch((function(e){400===e.response.status&&p.b.error(e.response.data),console.log(e)}))};return Object(O.jsx)(O.Fragment,{children:y?Object(O.jsx)(u.a,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"container-fluid p-2 ",style:{backgroundColor:"white"},children:[Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"col text-center p-3 ",style:{backgroundColor:"#186291"},children:Object(O.jsxs)("h4",{style:{color:"white"},children:[f.length,"/ Voiture(s) \xe0 Consulter"]})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"row pt-3",children:Object(O.jsx)("div",{className:"col",children:f.length?Object(O.jsxs)("table",{className:"table table-border text-center",children:[Object(O.jsx)("thead",{className:"thead-light",children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"col",children:"Image"}),Object(O.jsx)("th",{scope:"col",children:"Marque"}),Object(O.jsx)("th",{scope:"col",children:"Mod\xe8le"}),Object(O.jsx)("th",{scope:"col",children:"Ann\xe9e"}),Object(O.jsx)("th",{scope:"col",children:"Carrosserie"}),Object(O.jsx)("th",{scope:"col",children:"Version"}),Object(O.jsx)("th",{scope:"col",children:"Prix en \u20ac"}),Object(O.jsx)("th",{scope:"col",children:"N\xb0T\xe9l\xe9phone"}),Object(O.jsx)("th",{scope:"col",children:"Valider"}),Object(O.jsx)("th",{scope:"col",children:"Modifier"}),Object(O.jsx)("th",{scope:"col",children:"Suprimer"})]})}),f.map((function(e){return Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("div",{style:{width:"80px",height:"auto"},children:Object(O.jsx)(i.a,{large:e.images[0]?e.images[0].url:x,small:e.images[0]?e.images[0].url:x})})}),Object(O.jsx)("td",{children:e.marque}),Object(O.jsx)("td",{children:e.mod\u00e8le}),Object(O.jsx)("td",{children:e.ann\u00e9e}),Object(O.jsx)("td",{children:e.carrosserie}),Object(O.jsx)("td",{children:e.version}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{value:e.prix,className:"form-control input-nbr ",type:"number",style:{width:"72px"}})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{value:e.phone,className:"form-control input-nbr ",type:"number",style:{width:"118px"}})}),Object(O.jsx)("td",{className:"text-center",children:e.validation?Object(O.jsx)(j.a,{style:{fontSize:"20px"},className:"text-success"}):Object(O.jsx)(d.a,{onClick:function(){return t=e._id,void(window.confirm("Valider Cette voiture \xe0 Vendre ? ")&&Object(l.g)(t,!0,C.token).then((function(e){z(),p.b.success("Voiture en stock \xe0 Vendre")})).catch((function(e){400===e.response.status&&p.b.error(e.response.data),console.log(e)})));var t},className:"text-danger",style:{fontSize:"20px",cursor:"pointer"}})}),Object(O.jsx)("td",{className:"text-center",children:Object(O.jsxs)(o.b,{to:"/admin/dashboard/".concat(e._id),children:[" ",Object(O.jsx)(h.a,{style:{fontSize:"20px",cursor:"pointer"},className:"text-danger"})]})}),Object(O.jsx)("td",{className:"text-center",children:Object(O.jsx)(b.a,{style:{fontSize:"20px",cursor:"pointer"},className:"text-danger",onClick:function(){return _(e._id)}})})]})},e._id)}))]}):Object(O.jsx)("p",{children:"Pas de voitures non valider."})})})]}),Object(O.jsxs)("div",{className:"container-fluid p-2 ",style:{backgroundColor:"white"},children:[Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"col text-center p-3",style:{backgroundColor:"#186291"},children:Object(O.jsxs)("h4",{style:{color:"white"},children:[S.length,"/ Voiture(s) \xe0 Vendre"]})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"row pt-3",children:Object(O.jsx)("div",{className:"col",children:S.length?Object(O.jsxs)("table",{className:"table table-border text-center",children:[Object(O.jsx)("thead",{className:"thead-light",children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"col",children:"Image"}),Object(O.jsx)("th",{scope:"col",children:"Marque"}),Object(O.jsx)("th",{scope:"col",children:"Mod\xe8le"}),Object(O.jsx)("th",{scope:"col",children:"Ann\xe9e"}),Object(O.jsx)("th",{scope:"col",children:"Carrosserie"}),Object(O.jsx)("th",{scope:"col",children:"Version"}),Object(O.jsx)("th",{scope:"col",children:"Prix en \u20ac"}),Object(O.jsx)("th",{scope:"col",children:"N\xb0T\xe9l\xe9phone"}),Object(O.jsx)("th",{scope:"col",children:"Valider"}),Object(O.jsx)("th",{scope:"col",children:"Modifier"}),Object(O.jsx)("th",{scope:"col",children:"Suprimer"})]})}),S.map((function(e){return Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("div",{style:{width:"80px",height:"auto"},children:Object(O.jsx)(i.a,{large:e.images[0]?e.images[0].url:x,small:e.images[0]?e.images[0].url:x})})}),Object(O.jsx)("td",{children:e.marque}),Object(O.jsx)("td",{children:e.mod\u00e8le}),Object(O.jsx)("td",{children:e.ann\u00e9e}),Object(O.jsx)("td",{children:e.carrosserie}),Object(O.jsx)("td",{children:e.version}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{value:e.prix,className:"form-control input-nbr ",type:"number",style:{width:"72px"}})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{value:e.phone,className:"form-control input-nbr ",type:"number",style:{width:"118px"}})}),Object(O.jsx)("td",{className:"text-center",children:e.validation?Object(O.jsx)(j.a,{style:{fontSize:"20px"},className:"text-success"}):Object(O.jsx)(d.a,{className:"text-danger",style:{fontSize:"20px"}})}),Object(O.jsx)("td",{className:"text-center",children:Object(O.jsxs)(o.b,{to:"/admin/dashboard/".concat(e._id),children:[" ",Object(O.jsx)(h.a,{style:{fontSize:"20px",cursor:"pointer"},className:"text-danger"})]})}),Object(O.jsx)("td",{className:"text-center",children:Object(O.jsx)(b.a,{style:{fontSize:"20px",cursor:"pointer"},className:"text-danger",onClick:function(){return _(e._id)}})})]})},e._id)}))]}):Object(O.jsx)("p",{children:"Pas de voitures non valider."})})})]})]})})}}}]);
//# sourceMappingURL=22.7ee415d9.chunk.js.map