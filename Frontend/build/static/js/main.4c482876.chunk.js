(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{132:function(e,n,t){},206:function(e,n,t){},207:function(e,n,t){},208:function(e,n,t){},209:function(e,n,t){},210:function(e,n,t){},212:function(e,n,t){},213:function(e,n,t){},223:function(e,n,t){},224:function(e,n,t){},225:function(e,n,t){},359:function(e,n,t){},361:function(e,n,t){},362:function(e,n,t){},363:function(e,n,t){},364:function(e,n,t){},370:function(e,n,t){},374:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(33),i=t.n(s),r=(t(206),t(207),t(208),t(34)),o=t(22),l=(t(209),t(210),t(1)),u=function(){return Object(l.jsxs)("section",{className:"fire",children:[Object(l.jsxs)("div",{className:"fire-left",children:[Object(l.jsx)("div",{className:"main-fire"}),Object(l.jsx)("div",{className:"particle-fire"})]}),Object(l.jsxs)("div",{className:"fire-main",children:[Object(l.jsx)("div",{className:"main-fire"}),Object(l.jsx)("div",{className:"particle-fire"})]}),Object(l.jsxs)("div",{className:"fire-right",children:[Object(l.jsx)("div",{className:"main-fire"}),Object(l.jsx)("div",{className:"particle-fire"})]}),Object(l.jsx)("div",{className:"fire-bottom",children:Object(l.jsx)("div",{className:"main-fire"})})]})},j=(t(212),function(e){var n=e.autoPlay,t=void 0===n||n,c=e.muted,a=void 0===c||c,s=e.videoSource;e.videoLoop;return console.log(s),Object(l.jsx)("video",{className:"videoBG",autoPlay:t,muted:a,loop:!0,children:Object(l.jsx)("source",{src:s,type:"video/mp4"})})}),d=(t(132),t(213),function(e){var n=e.children,t=e.size,c=void 0===t?"big":t,a=e.color,s=void 0===a?"orangeDark":a;return Object(l.jsx)("h2",{className:"title title--".concat(c," title--").concat(s),children:n})}),b=t(20),f=t(19),m=t.n(f),O=t(29),p=t(41),x=function(e,n,t){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cors",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",s=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"follow",r={method:e,mode:c,cache:a,credentials:s,redirect:i,headers:{}},o=new Headers;return o.append("Content-Type","application/json"),t&&o.append("Authorization","Bearer ".concat(t)),n&&(r=Object.assign(r,{body:JSON.stringify(n)})),r.headers=o,r},h="https://warmkeeper.herokuapp.com/api",v=function(e){return fetch("".concat(h,"/login"),x("POST",e,null))},g=Object(p.b)({name:"user",initialState:{status:"idle",token:null,hubId:null,user:null},reducers:{logout:function(e){e.token=null,e.user=null},loginRequest:function(e){e.status="request",e.token=null,e.user=null},loginSuccess:function(e,n){var t=n.payload,c=t.token,a=t.user;e.status="success",e.token=c,e.user=a},loginFailure:function(e){e.status="failure",e.token=null,e.user=null}}}),_=g.actions,N=_.loginFailure,k=_.loginSuccess,w=_.loginRequest,y=_.logout,S=function(e){return e.user.user},C=function(e){return e.user.token},B=function(e){return e.user.status},E=function(e){var n;return null===(n=e.user.user)||void 0===n?void 0:n.id},z=g.reducer,F=function(e){return Object(b.c)(C)?Object(l.jsx)(o.b,{path:e.path,exact:e.exact,component:e.component}):Object(l.jsx)(o.a,{to:"/"})},q=t(165),A=t(166),I=t(167),P=t(194),M=(a.a.Component,t(223),function(){return Object(l.jsxs)("div",{className:"lds-ring",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})}),W=(t(224),t(394)),H=function(e){var n=e.setHidden,t=e.isHidden,c=e.menuItems,a=void 0===c?[]:c,s=Object(o.i)("/panel/furnance/:id");return console.log(s),Object(l.jsxs)("nav",{className:"nav ".concat(t?"translateX100":""),children:[Object(l.jsx)("section",{className:"nav__hamburger",children:Object(l.jsx)(W.a,{toggled:!t,toggle:n})}),a.map((function(e){return"/panel/furnance"!==e.to?Object(l.jsx)(r.c,{onClick:function(){window.innerWidth<=800&&n(!1)},exact:e.isExact,className:"nav__link",activeClassName:"nav__link--active",to:e.to,children:e.text},e.text):s?Object(l.jsx)(r.c,{onClick:function(e){e.preventDefault()},exact:e.isExact,className:"nav__link",activeClassName:"nav__link--active",to:e.to,children:e.text},e.text):void 0}))]})},T=(t(225),function(e){var n=e.furnance,t=Object(o.g)(),c=n.name,a=n.id,s=n.sensors;return Object(l.jsxs)("section",{className:"furnance",onClick:function(){t.push("/panel/furnance/".concat(a))},children:[Object(l.jsx)("section",{className:"furnance__section furnance__section--justifyRight",children:Object(l.jsx)("h1",{className:"furnance__title",children:c})}),Object(l.jsx)("section",{className:"furnance__section",children:s.map((function(e,n){return Object(l.jsxs)("div",{className:"furnance__icon",children:[Object(l.jsx)("h5",{className:"furnance__iconTitle",children:e.status}),Object(l.jsx)("img",{className:"furnance__img",src:e.img})]},"".concat(e.name,"&ASD^").concat(n))}))})]})}),R=t(11),V=function(e){var n=e.token,t=e.id;return fetch("".concat(h,"/w/").concat(t),x("GET",null,n))},D=Object(p.b)({name:"furnance",initialState:{status:"idle",furnances:[],numberOfSkeletons:6},reducers:{loadFurnancesRequest:function(e){e.furnances=[],e.numberOfSkeletons=5,e.status="request"},loadFurnancesSuccess:function(e,n){e.status="success",e.furnances=n.payload.furnances,e.numberOfSkeletons=null},loadFurnancesFailure:function(e){e.furnances=[],e.status="failure",e.numberOfSkeletons=null},setIdle:function(e){e.status="idle",e.furnances=[],e.numberOfSkeletons=null}}}),L=D.actions,Z=L.loadFurnancesFailure,J=L.loadFurnancesSuccess,K=L.loadFurnancesRequest,G=function(e){return e.furnance.furnances},X=function(e){return e.furnance.status},$=function(e){return e.furnance.numberOfSkeletons},Q=D.reducer,U=t(387),Y=t(388),ee=t(392),ne=t(185),te=t(186),ce=t(85),ae=t(195),se=function(e){var n=e.sensor,t=Object(c.useState)(!1),a=Object(R.a)(t,2),s=a[0],i=a[1];return Object(l.jsx)("section",{className:"furnanceInfo__sensor",children:Object(l.jsx)("div",{className:"flip-card",children:Object(l.jsxs)("div",{className:"flip-card-inner ".concat(s?"rotate180":""),onClick:function(){return i(!s)},children:[Object(l.jsxs)("div",{className:"flip-card-front",children:[null===n||void 0===n?void 0:n.name," ",null===n||void 0===n?void 0:n.status]}),Object(l.jsx)("div",{className:"flip-card-back",children:Object(l.jsx)(U.a,{width:"90%",height:180,children:Object(l.jsxs)(Y.a,{width:500,height:200,data:null===n||void 0===n?void 0:n.data,margin:{top:10,right:30,left:0,bottom:0},children:[Object(l.jsx)(ee.a,{strokeDasharray:"2 2"}),Object(l.jsx)(ne.a,{dataKey:"date"}),Object(l.jsx)(te.a,{}),Object(l.jsx)(ce.a,{}),Object(l.jsx)(ae.a,{type:"monotone",dataKey:"value",stroke:"#ef5a00",fill:"#ef5a00"})]})})})]})})})},ie=t(188),re=t.n(ie),oe=t(187),le=t.n(oe),ue=Object(p.b)({name:"appSettings",initialState:{modal:{isVisible:!1}},reducers:{setModal:function(e,n){e.modal=n.payload},hideModal:function(e){e.modal={isVisible:!1}}}}),je=ue.actions,de=je.setModal,be=je.hideModal,fe=ue.reducer,me=function(e){return e.appSettings.modal},Oe=(t(359),function(e){var n=e.furnanceName,t=Object(c.useState)(n||""),a=Object(R.a)(t,2),s=a[0],i=a[1];return Object(l.jsxs)("section",{className:"furnanceModal",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Nazwa pieca:"}),Object(l.jsx)("input",{className:"furnanceModal__input",value:s,onChange:function(e){var n=e.currentTarget;i(n.value)}})]}),Object(l.jsx)("button",{className:"btn  btn--gradientOrangeAnimation btn--marginBig btn--paddingNormal btn--width50 btn--textCenter btn--fontNormal",children:"Zapisz"})]})}),pe=function(){var e=Object(o.h)().id,n=Object(b.b)(),t=Object(b.c)(function(e){return function(n){return n.furnance.furnances.find((function(n){return n.id==e}))}}(e)),a=Object(c.useState)(!1),s=Object(R.a)(a,2),i=s[0],r=s[1];return Object(l.jsxs)("section",{className:"furnanceInfo",children:[Object(l.jsxs)("section",{className:"furnanceInfo__titleArea",children:[Object(l.jsx)("h2",{children:null===t||void 0===t?void 0:t.name}),Object(l.jsxs)("section",{className:"furnanceInfo__icons",children:[Object(l.jsx)(le.a,{fontSize:"large",onClick:function(){return r(!i)}}),Object(l.jsx)(re.a,{fontSize:"large",onClick:function(){n(de({isVisible:!0,children:Object(l.jsx)(Oe,{furnanceName:null===t||void 0===t?void 0:t.name})}))}})]})]}),i&&Object(l.jsx)("h1",{style:{color:"black"},children:"Zaawansowany Widok"}),!i&&(null===t||void 0===t?void 0:t.sensors.map((function(e,n){return Object(l.jsx)(se,{sensor:e},"".concat(n,"__sasda#@!").concat(e.name))})))]})},xe=(t(361),function(e){var n=e.icons,t=void 0===n?5:n,a=Object(c.useMemo)((function(){return new Array(t).fill({})}),[t]);return Object(l.jsxs)("section",{className:"furnanceSkeleton",children:[Object(l.jsx)("section",{className:"furnanceSkeleton__section furnanceSkeleton__section--justifyRight",children:Object(l.jsx)("h1",{className:"furnanceSkeleton__title"})}),Object(l.jsx)("section",{className:"furnanceSkeleton__section",children:a.map((function(e,n){return Object(l.jsx)(he,{},n)}))})]})}),he=function(){return Object(l.jsx)("div",{className:"furnanceSkeleton__icon"})},ve=t(189),ge=t.n(ve),_e=(t(362),function(e){var n=e.isVisible,t=(e.onClose,e.onOpen,e.children),c=Object(b.b)();return n?i.a.createPortal(Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("div",{className:"modal__top",children:Object(l.jsx)(ge.a,{fontSize:"large",onClick:function(){c(be())}})}),t," "]}),document.getElementById("portal")):null}),Ne=t(193),ke=function(){var e=Object(b.b)(),n=Object(b.c)(C),t=Object(b.c)(B),c=Object(Ne.a)(),a=c.register,s=c.handleSubmit,i=c.errors;return Object(l.jsxs)("section",{className:"login",children:[n&&Object(l.jsx)(o.a,{to:"/panel"}),Object(l.jsx)("aside",{className:"login__left",children:Object(l.jsx)(u,{})}),Object(l.jsx)("section",{className:"login__right",children:"request"===t?Object(l.jsx)(M,{}):Object(l.jsxs)("form",{className:"login__form",onSubmit:s((function(n){e(function(e){return function(){var n=Object(O.a)(m.a.mark((function n(t){var c,a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(w()),n.prev=1,n.next=4,v(e);case 4:c=n.sent,n.t0=c.status,n.next=200===n.t0?8:13;break;case 8:return n.next=10,c.json();case 10:return a=n.sent,t(k(a)),n.abrupt("break",15);case 13:return t(N()),n.abrupt("break",15);case 15:n.next=20;break;case 17:n.prev=17,n.t1=n.catch(1),t(N());case 20:case"end":return n.stop()}}),n,null,[[1,17]])})));return function(e){return n.apply(this,arguments)}}()}(n))})),children:[Object(l.jsx)("input",{className:"login__input",type:"text",id:"username",name:"username",placeholder:"login",ref:a({required:!0})}),Object(l.jsx)("span",{className:"login__warning ".concat(i.username&&"required"===i.username.type?"opacity1":"opacity0"),children:"Pole wymagane"}),Object(l.jsx)("input",{className:"login__input",type:"password",id:"password",name:"password",placeholder:"has\u0142o",ref:a({required:!0})}),Object(l.jsx)("span",{className:"login__warning ".concat(i.password&&"required"===i.password.type?"opacity1":"opacity0"),children:"Pole wymagane"}),Object(l.jsx)("input",{type:"submit",className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingBig btn--width50 btn--textCenter btn--fontNormal",value:"Zaloguj"})]})})]})},we=t.p+"static/media/fire2.46c5d2dc.mp4",ye=(t(363),function(){return Object(l.jsxs)("section",{className:"notFound",children:[Object(l.jsx)(j,{videoSource:we}),Object(l.jsxs)("div",{className:"notFound__elements",children:[Object(l.jsx)(d,{children:"\u017b\u0105dana strona nie zosta\u0142a odnaleziona"}),Object(l.jsx)(r.b,{className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingNormal btn--width50 btn--textCenter btn--fontNormal",to:"/",children:"Powr\xf3t"})]})]})}),Se=t(36),Ce=(t(364),t(192)),Be=t(190),Ee=t.n(Be),ze=(t(370),function(){var e=Object(b.c)(S),n=Object(c.useState)((null===e||void 0===e?void 0:e.fullname)||""),t=Object(R.a)(n,2),a=t[0],s=t[1],i=Object(c.useState)((null===e||void 0===e?void 0:e.email)||""),r=Object(R.a)(i,2),o=r[0],u=r[1],j=Object(c.useState)((null===e||void 0===e?void 0:e.password)||""),d=Object(R.a)(j,2),f=d[0],m=d[1],O=Object(c.useCallback)((function(e){switch(e.currentTarget.name){case"fullname":s(e.target.value);break;case"password":m(e.target.value);break;case"email":u(e.target.value)}}),[]);return Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("section",{className:"profile__field profile__border",children:Object(l.jsxs)("span",{style:{display:"flex",fontSize:"7vh"},children:["Konto:",Object(l.jsxs)("span",{style:{marginLeft:"5%",fontWeight:"bold"},children:[" ",null===e||void 0===e?void 0:e.username]})]})}),Object(l.jsxs)("section",{className:"profile__field",children:[Object(l.jsx)("label",{children:"Imi\u0119 i nazwisko"}),Object(l.jsx)("input",{className:"profile__input",name:"fullname",value:a,onChange:O})]}),Object(l.jsxs)("section",{className:"profile__field",children:[Object(l.jsx)("label",{children:"Has\u0142o"}),Object(l.jsx)("input",{name:"password",type:"password",className:"profile__input",value:f,onChange:O})]}),Object(l.jsxs)("section",{className:"profile__field",children:[Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{name:"email",value:o,className:"profile__input",onChange:O})]}),Object(l.jsx)("section",{className:"profile__field",children:Object(l.jsx)("button",{className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingBig btn--width50 btn--textCenter btn--fontNormal",children:"Zapisz"})})]})}),Fe=function(){var e=Object(b.b)(),n=Object(c.useState)(!0),t=Object(R.a)(n,2),a=t[0],s=t[1],i=Object(c.useState)(window.innerWidth),r=Object(R.a)(i,2),u=r[0],j=r[1],d=Object(b.c)(X),f=Object(b.c)($),p=Object(b.c)(G),x=Object(b.c)(me),h=Object(b.c)(C),v=Object(b.c)(E);return console.log(f),Object(c.useEffect)((function(){return window.addEventListener("resize",(function(e){var n=e.currentTarget;j(n.innerWidth)})),function(){window.removeEventListener("resize",(function(e){}))}}),[]),Object(c.useEffect)((function(){var n;e((n={token:h||"",id:v||""},function(){var e=Object(O.a)(m.a.mark((function e(t){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(K()),e.prev=1,e.next=4,V(n);case 4:c=e.sent,e.t0=c.status,e.next=200===e.t0?8:13;break;case 8:return e.next=10,c.json();case 10:return a=e.sent,t(J(a)),e.abrupt("break",15);case 13:return t(Z()),e.abrupt("break",15);case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(1),t(Z());case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(n){return e.apply(this,arguments)}}()))}),[]),Object(l.jsxs)("section",{className:"panel ".concat(x.isVisible?"blurred":""),children:[Object(l.jsx)(_e,Object(Se.a)({},x)),Object(l.jsx)("section",{className:"panel__top",children:Object(l.jsx)(W.a,{toggle:s,toggled:a})}),Object(l.jsxs)("section",{className:"panel__middle",children:[Object(l.jsx)("section",{className:"panel__middle--left",children:Object(l.jsx)(H,{setHidden:s,isHidden:!a,menuItems:[{to:"/panel",isExact:!0,text:"Home"},{to:"/panel/furnance",isExact:!1,text:"Piec"},{to:"/panel/weatherForecast",isExact:!0,text:"Sprawd\u017a prognoz\u0119 pogody"},{to:"/panel/profile",isExact:!0,text:"Profil"},{to:"/panel/logout",isExact:!0,text:"Wyloguj"}]})}),Object(l.jsx)("section",{className:"panel__middle--right ".concat(!a&&u>800?" translateX14":""),children:Object(l.jsxs)(Ce.a,{children:[Object(l.jsxs)(o.b,{exact:!0,path:"/panel",children:["request"===d&&new Array(9).fill({}).map((function(e,n){return Object(l.jsx)(xe,{},n)})),"success"===d&&p.map((function(e){return Object(l.jsx)(T,{furnance:e},e.id)})),"failure"===d&&Object(l.jsx)("button",{children:"Spr\xf3buj ponownie ! "})]}),Object(l.jsx)(o.b,{path:"/panel/furnance/:id",children:Object(l.jsx)(pe,{})}),Object(l.jsx)(o.b,{path:"/panel/weatherForecast",children:Object(l.jsx)("h2",{children:"Pogoda"})}),Object(l.jsx)(o.b,{path:"/panel/profile",children:Object(l.jsx)(ze,{})}),Object(l.jsx)(o.b,{path:"/panel/logout",children:Object(l.jsx)(qe,{})})]})})]}),Object(l.jsx)("div",{className:"panel__top--time",children:Object(l.jsx)("span",{children:Object(l.jsx)(Ee.a,{})})})]})},qe=function(){var e=Object(b.b)();return Object(c.useEffect)((function(){e(y())}),[e]),Object(l.jsx)("div",{})};var Ae=function(){return Object(l.jsx)(r.a,{children:Object(l.jsx)("main",{children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",children:Object(l.jsx)(ke,{})}),Object(l.jsx)(F,{exact:!1,path:"/panel",component:Fe}),Object(l.jsx)(o.b,{children:Object(l.jsx)(ye,{})})]})})})},Ie=Object(p.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}}}),Pe=Ie.actions,Me=(Pe.increment,Pe.decrement,Pe.incrementByAmount,Ie.reducer),We=Object(p.a)({reducer:{counter:Me,user:z,furnance:Q,appSettings:fe}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b.a,{store:We,children:Object(l.jsx)(Ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[374,1,2]]]);
//# sourceMappingURL=main.4c482876.chunk.js.map