(this["webpackJsonpcovid19-pt"]=this["webpackJsonpcovid19-pt"]||[]).push([[0],{21:function(t,e,n){},59:function(t,e,n){},62:function(t,e){},64:function(t,e){},86:function(t,e,n){"use strict";n.r(e);var l=n(0),a=n(17),c=n.n(a),s=(n(59),n(20)),i=(n(21),n(25)),h=n(6),o=n(28),r=n(54),d=n(52),g=n(19),j=n(29),b=n(53),x=n.p+"static/media/covid-40.8e9a0ad7.jpg",O=n(48),u=n(49),p=n(2),m=function(t,e,n,l){return Object(p.jsxs)("p",{children:[t," ",e,"; (",n,"); ",Object(p.jsxs)("b",{children:[l,"%"]})]})},f=function(t){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{style:{fontSize:16},children:Object(p.jsx)("p",{children:Object(p.jsxs)("b",{children:["Relat\xf3rio do dia ",t[t.length-2][0]]})})}),Object(p.jsxs)("div",{style:{textAlign:"left",fontSize:14},children:[m("Total de Casos em Vigil\xe2ncia:",t[t.length-2][18],t[t.length-2][18]-t[t.length-3][18],((t[t.length-2][18]-t[t.length-3][18])/t[t.length-2][18]*100).toFixed(2)),m("Total de Obitos:",t[t.length-2][13],t[t.length-2][13]-t[t.length-3][13],((t[t.length-2][13]-t[t.length-3][13])/t[t.length-2][13]*100).toFixed(2)),m("Total de Casos Recuperados:",t[t.length-2][12],t[t.length-2][12]-t[t.length-3][12],((t[t.length-2][12]-t[t.length-3][12])/t[t.length-2][12]*100).toFixed(2)),m("Total de Casos Confirmados:",t[t.length-2][2],t[t.length-2][11],(t[t.length-2][11]/t[t.length-2][2]*100).toFixed(2)),m("Total de Casos Ativos:",t[t.length-2][86],t[t.length-2][86]-t[t.length-3][86],((t[t.length-2][86]-t[t.length-3][86])/t[t.length-2][86]*100).toFixed(2)),m("Total de Casos Internados na Enfermaria:",t[t.length-2][87],t[t.length-2][87]-t[t.length-3][87],((t[t.length-2][87]-t[t.length-3][87])/t[t.length-2][87]*100).toFixed(2)),m("Total de Casos Internados em UCI:",t[t.length-2][15],t[t.length-2][15]-t[t.length-3][15],((t[t.length-2][15]-t[t.length-3][15])/t[t.length-2][15]*100).toFixed(2))]})]})},v=function(t){return{text:"*Relat\xf3rio do dia"+t[t.length-2][0]+"*\nTotal de Casos em Vigil\xe2ncia: "+t[t.length-2][18].toString()+" ("+(t[t.length-2][18]-t[t.length-3][18]).toString()+") *"+((t[t.length-2][18]-t[t.length-3][18])/t[t.length-2][18]*100).toFixed(2).toString()+"*\nTotal de Obitos: "+t[t.length-2][13]+" ("+(t[t.length-2][13]-t[t.length-3][13]).toString()+") *"+((t[t.length-2][13]-t[t.length-3][13])/t[t.length-2][13]*100).toFixed(2).toString()+"*\nTotal de Casos Recuperados: "+t[t.length-2][12]+" ("+(t[t.length-2][12]-t[t.length-3][12]).toString()+") *"+((t[t.length-2][12]-t[t.length-3][13])/t[t.length-2][12]*100).toFixed(2).toString()+"*\nTotal de Casos Confirmados: "+t[t.length-2][2]+" ("+t[t.length-2][11]+") *"+(t[t.length-2][11]/t[t.length-2][2]*100).toFixed(2).toString()+"*\nTotal de Casos Ativos: "+t[t.length-2][86]+" ("+(t[t.length-2][86]-t[t.length-3][86]).toString()+") *"+((t[t.length-2][86]-t[t.length-3][86])/t[t.length-2][86]*100).toFixed(2).toString()+"*\nTotal de Casos Internados na Enfermaria: "+t[t.length-2][87]+" ("+(t[t.length-2][87]-t[t.length-3][87]).toString()+") *"+((t[t.length-2][87]-t[t.length-3][87])/t[t.length-2][87]*100).toFixed(2).toString()+"*\nTotal de Casos Internados em UCI: "+t[t.length-2][15]+" ("+(t[t.length-2][15]-t[t.length-3][15]).toString()+") *"+((t[t.length-2][15]-t[t.length-3][15])/t[t.length-2][15]*100).toFixed(2).toString()+"*"}},C=function(t){var e=t.info;return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[f(e),Object(p.jsx)(O.CopyToClipboard,{text:v(e).text,children:Object(p.jsx)(u.a,{variant:"light",children:"Copy to clipboard"})})]})})},S=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("header",{className:"App-header",children:Object(p.jsx)("h1",{children:"On work"})})})},F=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("header",{className:"App-header",children:Object(p.jsx)("h1",{children:"On work"})})})};var T=function(){var t=Object(l.useState)(!0),e=Object(s.a)(t,2),n=e[0],a=e[1],c=Object(l.useState)(null),O=Object(s.a)(c,2),u=O[0],m=O[1],f=Object(l.useState)(null),v=Object(s.a)(f,2),T=v[0],A=v[1],k=Object(l.useState)(null),w=Object(s.a)(k,2),I=w[0],N=w[1];return Object(l.useEffect)((function(){Object(o.a)("https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/vacinas.csv",{download:!0,complete:function(t){N(t.data)}}),Object(o.a)("https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/data.csv",{download:!0,complete:function(t){A(t.data)}}),Object(o.a)("https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/amostras.csv",{download:!0,complete:function(t){m(t.data)}})}),[]),Object(l.useEffect)((function(){null!==u&&null!==I&&null!==T&&a(!1)}),[u,I,T]),Object(p.jsx)(p.Fragment,{children:!1===n?Object(p.jsxs)(i.a,{children:[Object(p.jsxs)(j.a,{bg:"dark",variant:"dark",children:[Object(p.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(j.a.Brand,{children:Object(p.jsx)(d.a,{children:Object(p.jsx)(b.a,{src:x,roundedCircle:!0})})}),Object(p.jsxs)(g.a,{className:"mr-auto",children:[Object(p.jsx)(g.a.Link,{href:"/",children:"Summary"}),Object(p.jsx)(g.a.Link,{href:"/visual",children:"Visual Summary"}),Object(p.jsx)(g.a.Link,{href:"/graph",children:"Graphs"})]})]}),Object(p.jsxs)(h.c,{children:[Object(p.jsx)(h.a,{exact:!0,path:"/",component:C,children:Object(p.jsx)(C,{info:T})}),Object(p.jsx)(h.a,{path:"/visual",component:F,children:Object(p.jsx)(F,{})}),Object(p.jsx)(h.a,{path:"/graph",component:S,children:Object(p.jsx)(S,{})})]})]}):Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"App-header",children:[Object(p.jsx)("p",{children:"Fetching Covid19 data!"}),Object(p.jsx)("p",{children:"It's ok, this is not transmissible"}),Object(p.jsx)(r.a,{animation:"border",variant:"danger"})]})})})},A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(e){var n=e.getCLS,l=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),l(t),a(t),c(t),s(t)}))};n(85);c.a.render(Object(p.jsx)(i.b,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),A()}},[[86,1,2]]]);
//# sourceMappingURL=main.ac62e040.chunk.js.map