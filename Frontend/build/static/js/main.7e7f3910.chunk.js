(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},167:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},226:function(e,t,n){},227:function(e,t,n){},228:function(e,t,n){},362:function(e,t,n){},364:function(e,t,n){},365:function(e,t,n){},366:function(e,t,n){},367:function(e,t,n){},373:function(e,t,n){},378:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(31),r=n.n(s),i=(n(210),n(211),n(212),n(35)),o=n(21),l=(n(134),n(213),n(1)),u=function(){return Object(l.jsxs)("section",{className:"fire",children:[Object(l.jsxs)("div",{className:"fire-left",children:[Object(l.jsx)("div",{className:"main-fire"}),Object(l.jsx)("div",{className:"particle-fire"})]}),Object(l.jsxs)("div",{className:"fire-main",children:[Object(l.jsx)("div",{className:"main-fire"}),Object(l.jsx)("div",{className:"particle-fire"})]}),Object(l.jsxs)("div",{className:"fire-right",children:[Object(l.jsx)("div",{className:"main-fire"}),Object(l.jsx)("div",{className:"particle-fire"})]}),Object(l.jsx)("div",{className:"fire-bottom",children:Object(l.jsx)("div",{className:"main-fire"})})]})},j=(n(215),function(e){var t=e.autoPlay,n=void 0===t||t,a=e.muted,c=void 0===a||a,s=e.videoSource;e.videoLoop;return console.log(s),Object(l.jsx)("video",{className:"videoBG",autoPlay:n,muted:c,loop:!0,children:Object(l.jsx)("source",{src:s,type:"video/mp4"})})}),b=(n(135),n(216),function(e){var t=e.children,n=e.size,a=void 0===n?"big":n,c=e.color,s=void 0===c?"orangeDark":c;return Object(l.jsx)("h2",{className:"title title--".concat(a," title--").concat(s),children:t})}),d=n(16),f=n(14),m=n.n(f),O=n(24),p=n(42),x=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cors",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",s=arguments.length>5?arguments[5]:void 0,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"follow",i={method:e,mode:a,cache:c,credentials:s,redirect:r,headers:{}},o=new Headers;return o.append("Content-Type","application/json"),n&&o.append("Authorization","Bearer ".concat(n)),t&&(i=Object.assign(i,{body:JSON.stringify(t)})),i.headers=o,i},h="https://warmkeeper.herokuapp.com/api",v=function(e){return fetch("".concat(h,"/login"),x("POST",e,null))},g=n(26),_=Object(p.b)({name:"user",initialState:{status:"idle",token:null,hubId:null,user:null},reducers:{logout:function(e){e.token=null,e.user=null},loginRequest:function(e){e.status="request",e.token=null,e.user=null},loginSuccess:function(e,t){var n=t.payload,a=n.token,c=n.user;e.status="success",e.token=a,e.user=c},loginFailure:function(e){g.b.error("Niepoprawny login lub has\u0142o!"),e.status="failure",e.token=null,e.user=null}}}),N=_.actions,k=N.loginFailure,w=N.loginSuccess,y=N.loginRequest,S=N.logout,C=function(e){return e.user.user},z=function(e){return e.user.token},B=function(e){return e.user.status},E=function(e){var t;return null===(t=e.user.user)||void 0===t?void 0:t.id},P=_.reducer,A=function(e){return Object(d.c)(z)?Object(l.jsx)(o.b,{path:e.path,exact:e.exact,component:e.component}):Object(l.jsx)(o.a,{to:"/"})},F=n(169),I=n(170),q=n(171),T=n(198),H=(c.a.Component,n(226),function(){return Object(l.jsxs)("div",{className:"lds-ring",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})}),M=(n(227),n(398)),R=function(e){var t=e.setHidden,n=e.isHidden,a=e.menuItems,c=void 0===a?[]:a,s=Object(o.i)("/panel/furnance/:id");return console.log(s),Object(l.jsxs)("nav",{className:"nav ".concat(n?"translateX100":""),children:[Object(l.jsx)("section",{className:"nav__hamburger",children:Object(l.jsx)(M.a,{toggled:!n,toggle:t})}),c.map((function(e){return"/panel/furnance"!==e.to?Object(l.jsx)(i.c,{onClick:function(){window.innerWidth<=800&&t(!1)},exact:e.isExact,className:"nav__link",activeClassName:"nav__link--active",to:e.to,children:e.text},e.text):s?Object(l.jsx)(i.c,{onClick:function(e){e.preventDefault()},exact:e.isExact,className:"nav__link",activeClassName:"nav__link--active",to:e.to,children:e.text},e.text):void 0}))]})},W=(n(228),function(e){var t=e.furnance,n=Object(o.g)(),a=t.name,c=t.id,s=t.sensors;return Object(l.jsxs)("section",{className:"furnance",onClick:function(){n.push("/panel/furnance/".concat(c))},children:[Object(l.jsx)("section",{className:"furnance__section furnance__section--justifyRight",children:Object(l.jsx)("h1",{className:"furnance__title",children:a})}),Object(l.jsx)("section",{className:"furnance__section",children:s.map((function(e,t){return Object(l.jsxs)("div",{className:"furnance__icon",children:[Object(l.jsx)("h5",{className:"furnance__iconTitle",children:e.status}),Object(l.jsx)("img",{className:"furnance__img",src:e.img})]},"".concat(e.name,"&ASD^").concat(t))}))})]})}),Z=n(10),D=function(e){var t=e.token,n=e.id;return fetch("".concat(h,"/furnace/w/").concat(n),x("GET",null,t))},K=function(e){return function(){var t=Object(O.a)(m.a.mark((function t(n){var a,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(U()),t.prev=1,t.next=4,D(e);case 4:a=t.sent,t.t0=a.status,t.next=200===t.t0?8:14;break;case 8:return t.next=10,a.json();case 10:return c=t.sent,console.log(c),n(G({furnances:c})),t.abrupt("break",16);case 14:return n(J()),t.abrupt("break",16);case 16:t.next=21;break;case 18:t.prev=18,t.t1=t.catch(1),n(J());case 21:case"end":return t.stop()}}),t,null,[[1,18]])})));return function(e){return t.apply(this,arguments)}}()},V=Object(p.b)({name:"furnance",initialState:{status:"idle",furnances:[],numberOfSkeletons:6},reducers:{loadFurnancesRequest:function(e){e.furnances=[],e.numberOfSkeletons=5,e.status="request"},loadFurnancesSuccess:function(e,t){e.status="success",e.furnances=t.payload.furnances,e.numberOfSkeletons=null},loadFurnancesFailure:function(e){e.furnances=[],e.status="failure",e.numberOfSkeletons=null},setIdle:function(e){e.status="idle",e.furnances=[],e.numberOfSkeletons=null}}}),L=V.actions,J=L.loadFurnancesFailure,G=L.loadFurnancesSuccess,U=L.loadFurnancesRequest,X=function(e){return e.furnance.furnances},$=function(e){return e.furnance.status},Q=function(e){return e.furnance.numberOfSkeletons},Y=V.reducer,ee=n(391),te=n(392),ne=n(396),ae=n(189),ce=n(190),se=n(87),re=n(199),ie=function(e){var t=e.sensor,n=Object(a.useState)(!1),c=Object(Z.a)(n,2),s=c[0],r=c[1];return Object(l.jsx)("section",{className:"furnanceInfo__sensor",children:Object(l.jsx)("div",{className:"flip-card",children:Object(l.jsxs)("div",{className:"flip-card-inner ".concat(s?"rotate180":""),onClick:function(){return r(!s)},children:[Object(l.jsxs)("div",{className:"flip-card-front",children:[null===t||void 0===t?void 0:t.name," ",null===t||void 0===t?void 0:t.status]}),Object(l.jsx)("div",{className:"flip-card-back",children:Object(l.jsx)(ee.a,{width:"90%",height:180,children:Object(l.jsxs)(te.a,{width:500,height:200,data:null===t||void 0===t?void 0:t.data,margin:{top:10,right:30,left:0,bottom:0},children:[Object(l.jsx)(ne.a,{strokeDasharray:"2 2"}),Object(l.jsx)(ae.a,{dataKey:"date"}),Object(l.jsx)(ce.a,{}),Object(l.jsx)(se.a,{}),Object(l.jsx)(re.a,{type:"monotone",dataKey:"value",stroke:"#ef5a00",fill:"#ef5a00"})]})})})]})})})},oe=n(192),le=n.n(oe),ue=Object(p.b)({name:"appSettings",initialState:{modal:{isVisible:!1}},reducers:{setModal:function(e,t){e.modal=t.payload},hideModal:function(e){e.modal={isVisible:!1}}}}),je=ue.actions,be=je.setModal,de=je.hideModal,fe=ue.reducer,me=function(e){return e.appSettings.modal},Oe=(n(362),function(e){var t=e.furnanceName,n=e.furnanceId,c=Object(a.useState)(t||""),s=Object(Z.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(!1),u=Object(Z.a)(o,2),j=u[0],b=u[1],f=Object(d.c)(E)||"",p=Object(d.c)(z),v=Object(d.b)(),_=function(){var e=Object(O.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g.b.info("Wysy\u0142anie..."),b(!0),e.prev=2,e.next=5,fetch("".concat(h,"/furnace/").concat(n),x("PUT",{userId:f,name:r},p));case 5:t=e.sent,e.t0=t.status,e.next=200===e.t0?9:400===e.t0?16:19;break;case 9:return g.b.success("Zapisano"),e.next=12,t.json();case 12:return a=e.sent,v(G({furnances:a})),b(!1),e.abrupt("break",22);case 16:return g.b.error("Pieca nie ma w bazie"),b(!1),e.abrupt("break",22);case 19:return g.b.error("Nie uda\u0142o si\u0119 zapisa\u0107 danych"),b(!1),e.abrupt("break",22);case 22:e.next=27;break;case 24:e.prev=24,e.t1=e.catch(2),g.b.error("Brak po\u0142\u0105czenia z serwerem");case 27:case"end":return e.stop()}}),e,null,[[2,24]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("section",{className:"furnanceModal",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Nazwa pieca:"}),Object(l.jsx)("input",{className:"furnanceModal__input",value:r,onChange:function(e){var t=e.currentTarget;i(t.value)}})]}),j?Object(l.jsx)(H,{}):Object(l.jsx)("button",{onClick:_,className:"btn  btn--gradientOrangeAnimation btn--marginBig btn--paddingNormal btn--width50 btn--textCenter btn--fontNormal",children:"Zapisz"})]})}),pe=n(191),xe=n.n(pe),he=function(){var e=Object(o.h)().id,t=Object(d.b)(),n=Object(d.c)(function(e){return function(t){return t.furnance.furnances.find((function(t){return t.id==e}))}}(e)),c=Object(a.useState)(!1),s=Object(Z.a)(c,2),r=s[0],i=(s[1],Object(d.c)(z)||""),u=Object(d.c)(E)||"";return Object(l.jsx)("section",{className:"furnanceInfo",children:n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{className:"furnanceInfo__titleArea",children:[Object(l.jsx)("h2",{children:null===n||void 0===n?void 0:n.name}),Object(l.jsxs)("section",{className:"furnanceInfo__icons",children:[Object(l.jsx)(xe.a,{fontSize:"large",onClick:function(){t(K({id:u,token:i}))}}),Object(l.jsx)(le.a,{fontSize:"large",onClick:function(){t(be({isVisible:!0,children:Object(l.jsx)(Oe,{furnanceName:null===n||void 0===n?void 0:n.name,furnanceId:null===n||void 0===n?void 0:n.id})}))}})]})]}),r&&Object(l.jsx)("h1",{style:{color:"black"},children:"Zaawansowany Widok"}),!r&&(null===n||void 0===n?void 0:n.sensors.map((function(e,t){return Object(l.jsx)(ie,{sensor:e},"".concat(t,"__sasda#@!").concat(e.name))})))]}):Object(l.jsx)(H,{})})},ve=(n(364),function(e){var t=e.icons,n=void 0===t?5:t,c=Object(a.useMemo)((function(){return new Array(n).fill({})}),[n]);return Object(l.jsxs)("section",{className:"furnanceSkeleton",children:[Object(l.jsx)("section",{className:"furnanceSkeleton__section furnanceSkeleton__section--justifyRight",children:Object(l.jsx)("h1",{className:"furnanceSkeleton__title"})}),Object(l.jsx)("section",{className:"furnanceSkeleton__section",children:c.map((function(e,t){return Object(l.jsx)(ge,{},t)}))})]})}),ge=function(){return Object(l.jsx)("div",{className:"furnanceSkeleton__icon"})},_e=n(193),Ne=n.n(_e),ke=(n(365),function(e){var t=e.isVisible,n=(e.onClose,e.onOpen,e.children),a=Object(d.b)();return t?r.a.createPortal(Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("div",{className:"modal__top",children:Object(l.jsx)(Ne.a,{fontSize:"large",onClick:function(){a(de())}})}),n," "]}),document.getElementById("portal")):null}),we=n(197),ye=(n(167),function(){var e=Object(d.b)(),t=Object(d.c)(z),n=Object(o.g)(),a=Object(d.c)(B),c=Object(we.a)(),s=c.register,r=c.handleSubmit,i=c.errors;return Object(l.jsxs)("section",{className:"login",children:[t&&Object(l.jsx)(o.a,{to:"/panel"}),Object(l.jsx)("aside",{className:"login__left",children:Object(l.jsx)(u,{})}),Object(l.jsx)("section",{className:"login__right",children:"request"===a?Object(l.jsx)(H,{}):Object(l.jsxs)("form",{className:"login__form",onSubmit:r((function(t){e(function(e){return function(){var t=Object(O.a)(m.a.mark((function t(n){var a,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(y()),t.prev=1,t.next=4,v(e);case 4:a=t.sent,t.t0=a.status,t.next=200===t.t0?8:13;break;case 8:return t.next=10,a.json();case 10:return c=t.sent,n(w(c)),t.abrupt("break",15);case 13:return n(k()),t.abrupt("break",15);case 15:t.next=20;break;case 17:t.prev=17,t.t1=t.catch(1),n(k());case 20:case"end":return t.stop()}}),t,null,[[1,17]])})));return function(e){return t.apply(this,arguments)}}()}(t))})),children:[Object(l.jsxs)("h1",{className:"register__title",children:[Object(l.jsx)("span",{className:"register__title--orange",children:"WARM"}),Object(l.jsx)("span",{className:"register__title--white",children:"KEEPER"})]}),Object(l.jsx)("input",{className:"login__input",type:"text",id:"username",name:"username",placeholder:"login",ref:s({required:!0})}),Object(l.jsx)("span",{className:"login__warning ".concat(i.username&&"required"===i.username.type?"opacity1":"opacity0"),children:"Pole wymagane"}),Object(l.jsx)("input",{className:"login__input",type:"password",id:"password",name:"password",placeholder:"has\u0142o",ref:s({required:!0})}),Object(l.jsx)("span",{className:"login__warning ".concat(i.password&&"required"===i.password.type?"opacity1":"opacity0"),children:"Pole wymagane"}),Object(l.jsx)("input",{type:"submit",className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingBig btn--width50 btn--textCenter btn--fontNormal",value:"Zaloguj"}),Object(l.jsx)("input",{type:"button",className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingBig btn--width50 btn--textCenter btn--fontNormal",value:"Zarejestruj",onClick:function(){n.push("/register")}})]})})]})}),Se=n.p+"static/media/fire2.46c5d2dc.mp4",Ce=(n(366),function(){return Object(l.jsxs)("section",{className:"notFound",children:[Object(l.jsx)(j,{videoSource:Se}),Object(l.jsxs)("div",{className:"notFound__elements",children:[Object(l.jsx)(b,{children:"\u017b\u0105dana strona nie zosta\u0142a odnaleziona"}),Object(l.jsx)(i.b,{className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingNormal btn--width50 btn--textCenter btn--fontNormal",to:"/",children:"Powr\xf3t"})]})]})}),ze=n(37),Be=(n(367),n(196)),Ee=n(194),Pe=n.n(Ee),Ae=(n(373),function(){var e=Object(d.c)(C),t=Object(d.b)(),n=Object(d.c)(z),c=Object(a.useState)((null===e||void 0===e?void 0:e.fullname)||""),s=Object(Z.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)((null===e||void 0===e?void 0:e.email)||""),u=Object(Z.a)(o,2),j=u[0],b=u[1],f=Object(a.useState)((null===e||void 0===e?void 0:e.password)||""),p=Object(Z.a)(f,2),v=p[0],_=p[1],N=Object(a.useCallback)((function(e){switch(e.currentTarget.name){case"fullname":i(e.target.value);break;case"password":_(e.target.value);break;case"email":b(e.target.value)}}),[]),k=function(){var a=Object(O.a)(m.a.mark((function a(){var c,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(h,"/user/").concat(e.id),x("PUT",{username:e.username,email:j,fullname:r,password:v},n));case 2:c=a.sent,a.t0=c.status,a.next=200===a.t0?6:400===a.t0?12:15;break;case 6:return a.next=8,c.json();case 8:return s=a.sent,t(w(s)),s.user&&(i(s.user.fullname),b(s.user.email),_(""),g.b.success("Zapisano")),a.abrupt("break",16);case 12:return g.b.error("Has\u0142o powinno zawiera\u0107 8 znak\xf3w"),_(""),a.abrupt("break",16);case 15:return a.abrupt("break",16);case 16:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("section",{className:"profile__field",children:Object(l.jsxs)("h2",{children:["Konto: ",null===e||void 0===e?void 0:e.username]})}),Object(l.jsxs)("section",{className:"profile__field",children:[Object(l.jsx)("label",{children:"Imi\u0119 i nazwisko"}),Object(l.jsx)("input",{className:"profile__input",name:"fullname",value:r,onChange:N})]}),Object(l.jsxs)("section",{className:"profile__field",children:[Object(l.jsx)("label",{children:"Has\u0142o"}),Object(l.jsx)("input",{className:"profile__input",name:"password",type:"password",value:v,onChange:N})]}),Object(l.jsxs)("section",{className:"profile__field",children:[Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{className:"profile__input",name:"email",value:j,onChange:N})]}),Object(l.jsx)("section",{className:"profile__field",children:Object(l.jsx)("button",{onClick:k,className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingBig btn--width50 btn--textCenter btn--fontNormal",children:"Zapisz"})})]})}),Fe=function(){var e=Object(d.b)(),t=Object(a.useState)(!0),n=Object(Z.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(window.innerWidth),i=Object(Z.a)(r,2),u=i[0],j=i[1],b=Object(d.c)($),f=Object(d.c)(Q),m=Object(d.c)(X),O=Object(d.c)(me),p=Object(d.c)(z),x=Object(d.c)(E);return console.log(f),Object(a.useEffect)((function(){return window.addEventListener("resize",(function(e){var t=e.currentTarget;j(t.innerWidth)})),function(){window.removeEventListener("resize",(function(e){}))}}),[]),Object(a.useEffect)((function(){e(K({token:p||"",id:x||""}))}),[]),Object(l.jsxs)("section",{className:"panel ".concat(O.isVisible?"blurred":""),children:[Object(l.jsx)(ke,Object(ze.a)({},O)),Object(l.jsx)("section",{className:"panel__top",children:Object(l.jsx)(M.a,{toggle:s,toggled:c})}),Object(l.jsxs)("section",{className:"panel__middle",children:[Object(l.jsx)("section",{className:"panel__middle--left",children:Object(l.jsx)(R,{setHidden:s,isHidden:!c,menuItems:[{to:"/panel",isExact:!0,text:"Home"},{to:"/panel/furnance",isExact:!1,text:"Piec"},{to:"/panel/profile",isExact:!0,text:"Profil"},{to:"/panel/logout",isExact:!0,text:"Wyloguj"}]})}),Object(l.jsx)("section",{className:"panel__middle--right ".concat(!c&&u>800?" translateX14":""),children:Object(l.jsxs)(Be.a,{children:[Object(l.jsxs)(o.b,{exact:!0,path:"/panel",children:["request"===b&&new Array(9).fill({}).map((function(e,t){return Object(l.jsx)(ve,{},t)})),"success"===b&&m.map((function(e){return Object(l.jsx)(W,{furnance:e},e.id)})),"failure"===b&&Object(l.jsx)("button",{children:"Spr\xf3buj ponownie ! "})]}),Object(l.jsx)(o.b,{path:"/panel/furnance/:id",children:Object(l.jsx)(he,{})}),Object(l.jsx)(o.b,{path:"/panel/weatherForecast",children:Object(l.jsx)("h2",{children:"Pogoda"})}),Object(l.jsx)(o.b,{path:"/panel/profile",children:Object(l.jsx)(Ae,{})}),Object(l.jsx)(o.b,{path:"/panel/logout",children:Object(l.jsx)(Ie,{})})]})})]}),Object(l.jsx)("div",{className:"panel__top--time",children:Object(l.jsx)("span",{children:Object(l.jsx)(Pe.a,{ticking:!0,interval:59e3})})})]})},Ie=function(){var e=Object(d.b)();return Object(a.useEffect)((function(){e(S())}),[e]),Object(l.jsx)("div",{})},qe=(n(376),c.a.memo((function(){var e=Object(o.g)(),t=Object(a.useState)(""),n=Object(Z.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!1),i=Object(Z.a)(r,2),j=i[0],b=i[1],d=Object(a.useState)(""),f=Object(Z.a)(d,2),p=f[0],v=f[1],_=Object(a.useState)(""),N=Object(Z.a)(_,2),k=N[0],w=N[1],y=Object(a.useState)(""),S=Object(Z.a)(y,2),C=S[0],z=S[1],B=function(){var t=Object(O.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),g.b.info("\u0141\u0105czenie z serwerem..."),t.prev=2,b(!0),t.next=6,fetch("".concat(h,"/user/create"),x("POST",{email:c,username:p,fullname:k,password:C},null));case 6:a=t.sent,t.t0=a.status,t.next=200===t.t0?10:14;break;case 10:return g.b.success("Zarejestrowano u\u017cytkownika"),e.push("/"),b(!1),t.abrupt("break",17);case 14:return g.b.error("Nie uda\u0142o si\u0119 zarejestrowa\u0107 u\u017cytkownika"),b(!1),t.abrupt("break",17);case 17:t.next=23;break;case 19:t.prev=19,t.t1=t.catch(2),g.b.error("B\u0142\u0105d po\u0142\u0105czenia"),b(!1);case 23:case"end":return t.stop()}}),t,null,[[2,19]])})));return function(e){return t.apply(this,arguments)}}(),E=function(e){var t=e.currentTarget;switch(t.name){case"email":s(t.value);break;case"username":v(t.value);break;case"fullname":w(t.value);break;case"password":z(t.value)}};return Object(l.jsxs)("section",{className:"register",children:[Object(l.jsx)("section",{className:"register__left",children:Object(l.jsx)(u,{})}),Object(l.jsx)("section",{className:"register__right",children:Object(l.jsxs)("form",{className:"register__form",children:[Object(l.jsxs)("h1",{className:"register__title",children:[Object(l.jsx)("span",{className:"register__title--orange",children:"WARM"}),Object(l.jsx)("span",{className:"register__title--white",children:"KEEPER"})]}),Object(l.jsx)("input",{placeholder:"Imi\u0119 i nazwisko",type:"text",className:"register__input",name:"fullname",value:k,onChange:E}),Object(l.jsx)("input",{placeholder:"Nazwa u\u017cytkownika",type:"text",className:"register__input",name:"username",value:p,onChange:E}),Object(l.jsx)("input",{placeholder:"Has\u0142o",type:"password",className:"register__input",name:"password",value:C,onChange:E}),Object(l.jsx)("input",{type:"text",placeholder:"Email",className:"register__input",name:"email",value:c,onChange:E}),j?Object(l.jsx)(H,{}):Object(l.jsx)("button",{onClick:B,className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingBig btn--width50 btn--textCenter btn--fontNormal",children:"Zarejestruj"})]})})]})})));var Te=function(){return Object(l.jsx)("main",{children:Object(l.jsxs)(i.a,{children:[Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",children:Object(l.jsx)(ye,{})}),Object(l.jsx)(o.b,{exact:!0,path:"/register",children:Object(l.jsx)(qe,{})}),Object(l.jsx)(A,{exact:!1,path:"/panel",component:Fe}),Object(l.jsx)(o.b,{children:Object(l.jsx)(Ce,{})})]}),Object(l.jsx)(g.a,{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})},He=Object(p.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),Me=He.actions,Re=(Me.increment,Me.decrement,Me.incrementByAmount,He.reducer),We=Object(p.a)({reducer:{counter:Re,user:P,furnance:Y,appSettings:fe}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d.a,{store:We,children:Object(l.jsx)(Te,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[378,1,2]]]);
//# sourceMappingURL=main.7e7f3910.chunk.js.map