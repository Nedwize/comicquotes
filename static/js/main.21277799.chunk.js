(this["webpackJsonpcomic-quotes-site"]=this["webpackJsonpcomic-quotes-site"]||[]).push([[0],{112:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),o=a.n(c),i=(a(112),a(30)),s=a(11),l=a(207),j=a(47),d=a.n(j),b=a(48),u=a.n(b),h=a(93),x=a(206),m=a(44),p=a.n(m),g=a(54),O=a(22),f=a(197),y=a(192),v=a(67),C=a(190),k=a(198),w=a(60),S=a.n(w),q=a(199),D=a(212),I=a(211),P=a(200),E=a(201),T=a(210),W=a(202),A=a(196),F=a(194),B=a(209),N=a(195),L=function(e){return{root:{fontFamily:"Segoe UI",flexGrow:1},title:{flexGrow:1,cursor:"pointer"},icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},link:{margin:e.spacing(1,1.5)},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}},R=a(2),U=Object(C.a)(L),Q=function(e){var t=e.quotes,a=U();return Object(R.jsx)(n.a.Fragment,{children:t.map((function(e){return Object(R.jsx)(y.a,{item:!0,xs:12,sm:6,md:4,children:Object(R.jsxs)(F.a,{className:a.card,children:[Object(R.jsx)(N.a,{className:a.cardContent,children:Object(R.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",color:"textPrimary",children:Object(R.jsx)(B.a,{fontWeight:600,fontSize:18,children:e.quote})})}),Object(R.jsxs)(A.a,{children:[Object(R.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",color:"textSecondary",children:Object(R.jsxs)(B.a,{fontWeight:600,fontSize:15,children:["- ",e.author]})}),Object(R.jsx)(v.a,{gutterBottom:!0,align:"center",variant:"h5",component:"h2",color:"textSecondary",style:{marginLeft:"auto"},children:Object(R.jsxs)(B.a,{fontWeight:600,fontSize:10,children:["ID- ",e.quoteID]})})]})]})},e._id)}))})},G=a(91),Y=a.n(G).a.create({baseURL:"https://comicquotes.herokuapp.com/"}),K={API_KEY:"qqskjf4z"},z=Object(C.a)(L);function _(){var e=Object(r.useState)([]),t=Object(O.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),o=Object(O.a)(c,2),s=o[0],l=o[1],j=Object(r.useState)(""),d=Object(O.a)(j,2),b=d[0],u=d[1],h=Object(r.useState)(!0),x=Object(O.a)(h,2),m=x[0],C=x[1],w=Object(r.useState)({status:"",msg:""}),A=Object(O.a)(w,2),F=A[0],B=A[1],N=z();return Object(r.useEffect)((function(){Object(g.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.get("/api/".concat(K.API_KEY,"/quote?num=30"));case 3:t=e.sent,l(t.data),n(t.data),C(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),C(!1),B({status:"error",msg:"Servers are down. Please try again later"});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(r.useEffect)((function(){var e=s.filter((function(e){return e.quote.toLowerCase().includes(b)||e.author.toLowerCase().includes(b)}));n(e)}),[b]),Object(R.jsxs)("main",{children:[Object(R.jsx)("div",{className:N.heroContent,children:Object(R.jsxs)(f.a,{style:{width:"85vw"},children:[Object(R.jsx)(v.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Comic Quotes"}),Object(R.jsxs)(k.a,{fullWidth:!0,variant:"outlined",children:[Object(R.jsx)(I.a,{htmlFor:"outlined-adornment-amount",children:"Search Quote"}),Object(R.jsx)(D.a,{id:"outlined-adornment-amount",startAdornment:Object(R.jsx)(q.a,{position:"start",children:Object(R.jsx)(S.a,{className:N.icon})}),onChange:function(e){e.preventDefault(),u(e.target.value.toLowerCase())},labelWidth:95})]}),Object(R.jsx)("div",{className:N.heroButtons,children:Object(R.jsxs)(y.a,{container:!0,spacing:2,justify:"center",children:[Object(R.jsx)(y.a,{item:!0,children:Object(R.jsx)(i.b,{to:"/register",style:{textDecoration:"none"},children:Object(R.jsx)(P.a,{variant:"contained",color:"primary",children:"Use it in your own app"})})}),Object(R.jsx)(y.a,{item:!0,children:Object(R.jsx)(i.b,{to:"/api-docs",style:{textDecoration:"none"},children:Object(R.jsx)(P.a,{variant:"outlined",color:"primary",children:"API Documentation"})})})]})})]})}),Object(R.jsx)(f.a,{className:N.cardGrid,style:{width:"85vw",minHeight:"50vh"},children:Object(R.jsx)(y.a,{container:!0,spacing:4,children:m?Object(R.jsx)(E.a,{color:"secondary",style:{marginLeft:"calc(50% - 10px)"}}):"error"===F.status?Object(R.jsxs)(T.a,{severity:F.status,variant:"outlined",children:[Object(R.jsx)(W.a,{children:"success"===F.status?"Success":"Error"}),F.msg]}):Object(R.jsx)(Q,{quotes:a})})})]})}var H=a(203),M=a(92),J=a.n(M),V=Object(C.a)(L),X=function(){var e=V();return Object(R.jsxs)("footer",{className:e.footer,children:[Object(R.jsxs)(v.a,{variant:"h6",align:"center",gutterBottom:!0,children:[Object(R.jsx)(J.a,{text:"Made with \u2764\ufe0f by "}),Object(R.jsx)(H.a,{color:"inherit",href:"https://github.com/NakshatraCodes",children:"Nakshatra"})]}),Object(R.jsxs)(v.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(R.jsx)(H.a,{color:"inherit",href:"https://github.com/ComicQuotes",children:"Comic Quotes"})," ",(new Date).getFullYear(),"."]})]})},Z=a(204),$=a(205),ee=Object(C.a)(L),te=function(){var e=ee();return Object(R.jsx)("div",{className:e.root,children:Object(R.jsx)(Z.a,{position:"static",children:Object(R.jsxs)($.a,{children:[Object(R.jsx)(S.a,{className:e.icon}),Object(R.jsx)(v.a,{variant:"h6",color:"inherit",className:e.title,children:Object(R.jsx)(i.b,{to:"/",style:{textDecoration:"none",color:"white"},children:"Comic Quotes"})}),Object(R.jsx)(i.b,{to:"/api-docs",style:{textDecoration:"none",color:"white"},children:Object(R.jsx)(P.a,{color:"inherit",children:"API"})}),Object(R.jsx)(i.b,{to:"/register",style:{textDecoration:"none",color:"white"},children:Object(R.jsx)(P.a,{color:"inherit",children:"GET API KEY"})}),Object(R.jsx)(P.a,{color:"inherit",onClick:function(e){e.preventDefault(),window.open("http://buymeacoffee.com/nakshatrasaxena","_blank")},children:"Donate"}),Object(R.jsx)(P.a,{color:"inherit",onClick:function(e){e.preventDefault(),window.open("http://github.com/ComicQuotes","_blank")},children:"Github"})]})})})},ae=Object(h.a)({palette:{primary:{main:d.a[700]},text:{primary:u.a[800],secondary:u.a[500]},secondary:{main:d.a[500]}},typography:{fontFamily:["-apple-system",'"Segoe UI"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});function re(){return Object(R.jsx)(n.a.Fragment,{children:Object(R.jsxs)(x.a,{theme:ae,children:[Object(R.jsx)(l.a,{}),Object(R.jsx)(te,{}),Object(R.jsx)(_,{}),Object(R.jsx)(X,{})]})})}var ne=a(208),ce=function(e){var t=e.name,a={marginTop:"20px",padding:"5px 15px",color:"white",fontWeight:"500",backgroundColor:"#d32f2f",borderRadius:"20px",maxWidth:"max-content",marginRight:"6px"};return"green"===e.color&&(a.backgroundColor="#5eb761"),Object(R.jsx)(v.a,{variant:"subtitle1",color:"textPrimary",paragraph:!0,style:a,children:t})},oe={palette:{primary:{main:d.a[700]},text:{primary:u.a[800],secondary:u.a[500]},secondary:{main:d.a[500]}},typography:{fontFamily:["-apple-system",'"Segoe UI"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}},ie=Object(C.a)(L),se=Object(h.a)(oe),le=function(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(!1),i=Object(O.a)(o,2),s=i[0],j=i[1],d=Object(r.useState)({status:"",msg:"",key:""}),b=Object(O.a)(d,2),u=b[0],h=b[1],m=Object(r.useState)(!1),y=Object(O.a)(m,2),C=y[0],k=y[1],w=function(){var e=Object(g.a)(p.a.mark((function e(t){var r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k(!0),e.next=4,Y.post("/register",{email:a});case 4:r=e.sent,n=r.data,k(!1),h({status:n.status,msg:n.msg,key:n.key}),console.log(n),j(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=ie();return Object(R.jsx)(n.a.Fragment,{children:Object(R.jsx)(x.a,{theme:se,children:Object(R.jsxs)(l.a,{children:[Object(R.jsx)(te,{}),Object(R.jsxs)(f.a,{style:{maxWidth:"60vw",minHeight:"100vh"},children:[Object(R.jsx)(v.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,style:{marginTop:"40px"},children:"Comic Quotes"}),Object(R.jsx)(v.a,{variant:"h5",color:"textPrimary",align:"center",paragraph:!0,style:{marginTop:"20px"},children:"You will need an API Key to use this service, please generate one by registering with your email"}),Object(R.jsxs)(f.a,{align:"center",children:[Object(R.jsxs)("form",{className:S.form,noValidate:!0,children:[Object(R.jsx)(ne.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:a,onChange:function(e){return c(e.target.value)}}),Object(R.jsx)(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:S.submit,onClick:w,children:"Request API Key"})]}),function(){if(C)return Object(R.jsx)(E.a,{color:"secondary",style:{marginLeft:"calc(50% - 10px)"}})}(),s?Object(R.jsxs)(n.a.Fragment,{children:[Object(R.jsxs)(T.a,{severity:u.status,variant:"outlined",children:[Object(R.jsx)(W.a,{children:"success"===u.status?"Success":"Error"}),u.msg]}),u.key?Object(R.jsx)(ce,{name:u.key,color:"green",style:{marginLeft:"calc(50% - 50px)"}}):""]}):""]})]}),Object(R.jsx)(X,{})]})})})},je=function(e){var t=e.title,a=e.url,r=e.desc,n={bar:{marginTop:"12px",padding:"8px 15px",borderRadius:"5px",minWidth:"100%",display:"flex",flexDirection:"row",alignItems:"center"},title:{marginRight:"10px",padding:"4px 30px",borderRadius:"5px",maxWidth:"max-content",color:"white",fontWeight:"600"},desc:{marginLeft:"20px",fontWeight:"400",fontSize:16}};switch(e.color){case"green":n.bar.border="1px solid #49cc90",n.bar.backgroundColor="#e8f6f0",n.title.backgroundColor="#49cc90";break;case"blue":n.bar.border="1px solid #61affe",n.bar.backgroundColor="#ebf3fb",n.title.backgroundColor="#61affe";break;case"red":n.bar.border="1px solid #d32f2f",n.bar.backgroundColor="#fae7e7",n.title.backgroundColor="#d32f2f";break;default:n.bar.border="1px solid #49cc90",n.bar.backgroundColor="#e8f6f0",n.title.backgroundColor="#49cc90"}return Object(R.jsxs)(v.a,{variant:"h6",color:"textPrimary",align:"center",style:n.bar,children:[Object(R.jsx)("div",{style:n.title,children:t}),Object(R.jsx)("div",{children:a}),Object(R.jsx)("div",{style:n.desc,children:r})]})},de=Object(h.a)(oe),be=function(){return Object(R.jsx)(n.a.Fragment,{children:Object(R.jsx)(x.a,{theme:de,children:Object(R.jsxs)(l.a,{children:[Object(R.jsx)(te,{}),Object(R.jsxs)(f.a,{style:{maxWidth:"85vw",minHeight:"100vh",display:"flex",flexDirection:"column",marginBottom:"500px"},children:[Object(R.jsx)("div",{children:Object(R.jsx)(v.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,style:{marginTop:"40px"},children:"Comic Quotes"})}),Object(R.jsx)(je,{title:"Base URL",url:"https://comicquotes.herokuapp.com/<apiKey>",color:"red"}),Object(R.jsx)(v.a,{variant:"h5",color:"textPrimary",paragraph:!0,style:{marginTop:"20px"},children:"API Endpoints"}),Object(R.jsx)(je,{title:"GET",url:"/quote/",desc:"Delivers a random quote",color:"green"}),Object(R.jsx)(je,{title:"GET",url:"/quote/:id",desc:"Delivers quote of quoteID=id",color:"green"}),Object(R.jsx)(v.a,{variant:"h5",color:"textPrimary",paragraph:!0,style:{marginTop:"20px"},children:"Query Parameters"}),Object(R.jsx)(je,{title:"QUERY",url:"comic",desc:"Searches for quotes of the comic requested",color:"blue"}),Object(R.jsx)(je,{title:"QUERY",url:"num",desc:"Request for only a number of quotes",color:"blue"}),Object(R.jsx)(v.a,{variant:"h5",color:"textPrimary",paragraph:!0,style:{marginTop:"20px"},children:"Available Comics"}),Object(R.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(R.jsx)(ce,{name:"ironman"}),Object(R.jsx)(ce,{name:"spiderman"}),Object(R.jsx)(ce,{name:"batman"}),Object(R.jsx)(ce,{name:"greenarrow"})]})]}),Object(R.jsx)(X,{})]})})})};function ue(){return Object(R.jsx)(i.a,{children:Object(R.jsxs)(s.c,{children:[Object(R.jsx)(s.a,{exact:!0,path:"/",component:re}),Object(R.jsx)(s.a,{exact:!0,path:"/api-docs",component:be}),Object(R.jsx)(s.a,{exact:!0,path:"/register",component:le})]})})}var he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,215)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};o.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(ue,{})}),document.getElementById("root")),he()}},[[156,1,2]]]);
//# sourceMappingURL=main.21277799.chunk.js.map