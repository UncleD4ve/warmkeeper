(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{134:function(e,n,t){},135:function(e,n,t){},209:function(e,n,t){},210:function(e,n,t){},211:function(e,n,t){},212:function(e,n,t){},214:function(e,n,t){},215:function(e,n,t){},225:function(e,n,t){},226:function(e,n,t){},227:function(e,n,t){},361:function(e,n,t){},363:function(e,n,t){},364:function(e,n,t){},365:function(e,n,t){},366:function(e,n,t){},372:function(e,n,t){},376:function(e,n,t){},378:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),s=t(31),r=t.n(s),i=(t(209),t(210),t(211),t(35)),o=t(21),l=(t(134),t(212),t(1)),u=function(){return Object(l.jsxs)("section",{className:"fire",children:[Object(l.jsxs)("div",{className:"fire-left",children:[Object(l.jsx)("div",{className:"main-fire"}),Object(l.jsx)("div",{className:"particle-fire"})]}),Object(l.jsxs)("div",{className:"fire-main",children:[Object(l.jsx)("div",{className:"main-fire"}),Object(l.jsx)("div",{className:"particle-fire"})]}),Object(l.jsxs)("div",{className:"fire-right",children:[Object(l.jsx)("div",{className:"main-fire"}),Object(l.jsx)("div",{className:"particle-fire"})]}),Object(l.jsx)("div",{className:"fire-bottom",children:Object(l.jsx)("div",{className:"main-fire"})})]})},j=(t(214),function(e){var n=e.autoPlay,t=void 0===n||n,a=e.muted,c=void 0===a||a,s=e.videoSource;e.videoLoop;return console.log(s),Object(l.jsx)("video",{className:"videoBG",autoPlay:t,muted:c,loop:!0,children:Object(l.jsx)("source",{src:s,type:"video/mp4"})})}),b=(t(135),t(215),function(e){var n=e.children,t=e.size,a=void 0===t?"big":t,c=e.color,s=void 0===c?"orangeDark":c;return Object(l.jsx)("h2",{className:"title title--".concat(a," title--").concat(s),children:n})}),d=t(16),f=t(14),m=t.n(f),O=t(24),p=t(42),x=function(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"cors",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"default",s=arguments.length>5?arguments[5]:void 0,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"follow",i={method:e,mode:a,cache:c,credentials:s,redirect:r,headers:{}},o=new Headers;return o.append("Content-Type","application/json"),t&&o.append("Authorization","Bearer ".concat(t)),n&&(i=Object.assign(i,{body:JSON.stringify(n)})),i.headers=o,i},h="https://warmkeeper.herokuapp.com/api",v=function(e){return fetch("".concat(h,"/login"),x("POST",e,null))},g=t(26),_=Object(p.b)({name:"user",initialState:{status:"idle",token:null,hubId:null,user:null},reducers:{logout:function(e){e.token=null,e.user=null},loginRequest:function(e){e.status="request",e.token=null,e.user=null},loginSuccess:function(e,n){var t=n.payload,a=t.token,c=t.user;e.status="success",e.token=a,e.user=c},loginFailure:function(e){g.b.error("Niepoprawny login lub has\u0142o!"),e.status="failure",e.token=null,e.user=null}}}),N=_.actions,k=N.loginFailure,w=N.loginSuccess,y=N.loginRequest,S=N.logout,C=function(e){return e.user.user},z=function(e){return e.user.token},B=function(e){return e.user.status},E=function(e){var n;return null===(n=e.user.user)||void 0===n?void 0:n.id},P=_.reducer,F=function(e){return Object(d.c)(z)?Object(l.jsx)(o.b,{path:e.path,exact:e.exact,component:e.component}):Object(l.jsx)(o.a,{to:"/"})},I=t(168),A=t(169),q=t(170),T=t(197),H=(c.a.Component,t(225),function(){return Object(l.jsxs)("div",{className:"lds-ring",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})}),M=(t(226),t(398)),W=function(e){var n=e.setHidden,t=e.isHidden,a=e.menuItems,c=void 0===a?[]:a,s=Object(o.i)("/panel/furnance/:id");return console.log(s),Object(l.jsxs)("nav",{className:"nav ".concat(t?"translateX100":""),children:[Object(l.jsx)("section",{className:"nav__hamburger",children:Object(l.jsx)(M.a,{toggled:!t,toggle:n})}),c.map((function(e){return"/panel/furnance"!==e.to?Object(l.jsx)(i.c,{onClick:function(){window.innerWidth<=800&&n(!1)},exact:e.isExact,className:"nav__link",activeClassName:"nav__link--active",to:e.to,children:e.text},e.text):s?Object(l.jsx)(i.c,{onClick:function(e){e.preventDefault()},exact:e.isExact,className:"nav__link",activeClassName:"nav__link--active",to:e.to,children:e.text},e.text):void 0}))]})},Z=(t(227),function(e){var n=e.furnance,t=Object(o.g)(),a=n.name,c=n.id,s=n.sensors;return Object(l.jsxs)("section",{className:"furnance",onClick:function(){t.push("/panel/furnance/".concat(c))},children:[Object(l.jsx)("section",{className:"furnance__section furnance__section--justifyRight",children:Object(l.jsx)("h1",{className:"furnance__title",children:a})}),Object(l.jsx)("section",{className:"furnance__section",children:s.map((function(e,n){return Object(l.jsxs)("div",{className:"furnance__icon",children:[Object(l.jsx)("h5",{className:"furnance__iconTitle",children:e.status}),Object(l.jsx)("img",{className:"furnance__img",src:e.img})]},"".concat(e.name,"&ASD^").concat(n))}))})]})}),R=t(10),V=function(e){var n=e.token,t=e.id;return fetch("".concat(h,"/furnace/w/").concat(t),x("GET",null,n))},D=Object(p.b)({name:"furnance",initialState:{status:"idle",furnances:[],numberOfSkeletons:6},reducers:{loadFurnancesRequest:function(e){e.furnances=[],e.numberOfSkeletons=5,e.status="request"},loadFurnancesSuccess:function(e,n){e.status="success",e.furnances=n.payload.furnances,e.numberOfSkeletons=null},loadFurnancesFailure:function(e){e.furnances=[],e.status="failure",e.numberOfSkeletons=null},setIdle:function(e){e.status="idle",e.furnances=[],e.numberOfSkeletons=null}}}),K=D.actions,L=K.loadFurnancesFailure,J=K.loadFurnancesSuccess,G=K.loadFurnancesRequest,U=function(e){return e.furnance.furnances},X=function(e){return e.furnance.status},$=function(e){return e.furnance.numberOfSkeletons},Q=D.reducer,Y=t(391),ee=t(392),ne=t(396),te=t(188),ae=t(189),ce=t(87),se=t(198),re=function(e){var n=e.sensor,t=Object(a.useState)(!1),c=Object(R.a)(t,2),s=c[0],r=c[1];return Object(l.jsx)("section",{className:"furnanceInfo__sensor",children:Object(l.jsx)("div",{className:"flip-card",children:Object(l.jsxs)("div",{className:"flip-card-inner ".concat(s?"rotate180":""),onClick:function(){return r(!s)},children:[Object(l.jsxs)("div",{className:"flip-card-front",children:[null===n||void 0===n?void 0:n.name," ",null===n||void 0===n?void 0:n.status]}),Object(l.jsx)("div",{className:"flip-card-back",children:Object(l.jsx)(Y.a,{width:"90%",height:180,children:Object(l.jsxs)(ee.a,{width:500,height:200,data:null===n||void 0===n?void 0:n.data,margin:{top:10,right:30,left:0,bottom:0},children:[Object(l.jsx)(ne.a,{strokeDasharray:"2 2"}),Object(l.jsx)(te.a,{dataKey:"date"}),Object(l.jsx)(ae.a,{}),Object(l.jsx)(ce.a,{}),Object(l.jsx)(se.a,{type:"monotone",dataKey:"value",stroke:"#ef5a00",fill:"#ef5a00"})]})})})]})})})},ie=t(191),oe=t.n(ie),le=t(190),ue=t.n(le),je=Object(p.b)({name:"appSettings",initialState:{modal:{isVisible:!1}},reducers:{setModal:function(e,n){e.modal=n.payload},hideModal:function(e){e.modal={isVisible:!1}}}}),be=je.actions,de=be.setModal,fe=be.hideModal,me=je.reducer,Oe=function(e){return e.appSettings.modal},pe=(t(361),function(e){var n=e.furnanceName,t=e.furnanceId,c=Object(a.useState)(n||""),s=Object(R.a)(c,2),r=s[0],i=s[1],o=Object(d.c)(E)||"",u=Object(d.c)(z),j=Object(d.b)(),b=function(){var e=Object(O.a)(m.a.mark((function e(){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g.b.info("Wysy\u0142anie..."),e.next=3,fetch("".concat(h,"/furnace/").concat(t),x("PUT",{userId:o,name:r},u));case 3:n=e.sent,e.t0=n.status,e.next=200===e.t0?7:400===e.t0?13:15;break;case 7:return g.b.success("Zapisano"),e.next=10,n.json();case 10:return a=e.sent,j(J({furnances:a})),e.abrupt("break",17);case 13:return g.b.error("Pieca nie ma w bazie"),e.abrupt("break",17);case 15:return g.b.error("Nie uda\u0142o si\u0119 zapisa\u0107 danych"),e.abrupt("break",17);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("section",{className:"furnanceModal",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Nazwa pieca:"}),Object(l.jsx)("input",{className:"furnanceModal__input",value:r,onChange:function(e){var n=e.currentTarget;i(n.value)}})]}),Object(l.jsx)("button",{onClick:b,className:"btn  btn--gradientOrangeAnimation btn--marginBig btn--paddingNormal btn--width50 btn--textCenter btn--fontNormal",children:"Zapisz"})]})}),xe=function(){var e=Object(o.h)().id,n=Object(d.b)(),t=Object(d.c)(function(e){return function(n){return n.furnance.furnances.find((function(n){return n.id==e}))}}(e)),c=Object(a.useState)(!1),s=Object(R.a)(c,2),r=s[0],i=s[1];return Object(l.jsxs)("section",{className:"furnanceInfo",children:[Object(l.jsxs)("section",{className:"furnanceInfo__titleArea",children:[Object(l.jsx)("h2",{children:null===t||void 0===t?void 0:t.name}),Object(l.jsxs)("section",{className:"furnanceInfo__icons",children:[Object(l.jsx)(ue.a,{fontSize:"large",onClick:function(){return i(!r)}}),Object(l.jsx)(oe.a,{fontSize:"large",onClick:function(){n(de({isVisible:!0,children:Object(l.jsx)(pe,{furnanceName:null===t||void 0===t?void 0:t.name,furnanceId:null===t||void 0===t?void 0:t.id})}))}})]})]}),r&&Object(l.jsx)("h1",{style:{color:"black"},children:"Zaawansowany Widok"}),!r&&(null===t||void 0===t?void 0:t.sensors.map((function(e,n){return Object(l.jsx)(re,{sensor:e},"".concat(n,"__sasda#@!").concat(e.name))})))]})},he=(t(363),function(e){var n=e.icons,t=void 0===n?5:n,c=Object(a.useMemo)((function(){return new Array(t).fill({})}),[t]);return Object(l.jsxs)("section",{className:"furnanceSkeleton",children:[Object(l.jsx)("section",{className:"furnanceSkeleton__section furnanceSkeleton__section--justifyRight",children:Object(l.jsx)("h1",{className:"furnanceSkeleton__title"})}),Object(l.jsx)("section",{className:"furnanceSkeleton__section",children:c.map((function(e,n){return Object(l.jsx)(ve,{},n)}))})]})}),ve=function(){return Object(l.jsx)("div",{className:"furnanceSkeleton__icon"})},ge=t(192),_e=t.n(ge),Ne=(t(364),function(e){var n=e.isVisible,t=(e.onClose,e.onOpen,e.children),a=Object(d.b)();return n?r.a.createPortal(Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("div",{className:"modal__top",children:Object(l.jsx)(_e.a,{fontSize:"large",onClick:function(){a(fe())}})}),t," "]}),document.getElementById("portal")):null}),ke=t(196),we=function(){var e=Object(d.b)(),n=Object(d.c)(z),t=Object(o.g)(),a=Object(d.c)(B),c=Object(ke.a)(),s=c.register,r=c.handleSubmit,i=c.errors;return Object(l.jsxs)("section",{className:"login",children:[n&&Object(l.jsx)(o.a,{to:"/panel"}),Object(l.jsx)("aside",{className:"login__left",children:Object(l.jsx)(u,{})}),Object(l.jsx)("section",{className:"login__right",children:"request"===a?Object(l.jsx)(H,{}):Object(l.jsxs)("form",{className:"login__form",onSubmit:r((function(n){e(function(e){return function(){var n=Object(O.a)(m.a.mark((function n(t){var a,c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(y()),n.prev=1,n.next=4,v(e);case 4:a=n.sent,n.t0=a.status,n.next=200===n.t0?8:13;break;case 8:return n.next=10,a.json();case 10:return c=n.sent,t(w(c)),n.abrupt("break",15);case 13:return t(k()),n.abrupt("break",15);case 15:n.next=20;break;case 17:n.prev=17,n.t1=n.catch(1),t(k());case 20:case"end":return n.stop()}}),n,null,[[1,17]])})));return function(e){return n.apply(this,arguments)}}()}(n))})),children:[Object(l.jsx)("input",{className:"login__input",type:"text",id:"username",name:"username",placeholder:"login",ref:s({required:!0})}),Object(l.jsx)("span",{className:"login__warning ".concat(i.username&&"required"===i.username.type?"opacity1":"opacity0"),children:"Pole wymagane"}),Object(l.jsx)("input",{className:"login__input",type:"password",id:"password",name:"password",placeholder:"has\u0142o",ref:s({required:!0})}),Object(l.jsx)("span",{className:"login__warning ".concat(i.password&&"required"===i.password.type?"opacity1":"opacity0"),children:"Pole wymagane"}),Object(l.jsx)("input",{type:"submit",className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingBig btn--width50 btn--textCenter btn--fontNormal",value:"Zaloguj"}),Object(l.jsx)("input",{type:"button",className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingBig btn--width50 btn--textCenter btn--fontNormal",value:"Zarejestruj",onClick:function(){t.push("/register")}})]})})]})},ye=t.p+"static/media/fire2.46c5d2dc.mp4",Se=(t(365),function(){return Object(l.jsxs)("section",{className:"notFound",children:[Object(l.jsx)(j,{videoSource:ye}),Object(l.jsxs)("div",{className:"notFound__elements",children:[Object(l.jsx)(b,{children:"\u017b\u0105dana strona nie zosta\u0142a odnaleziona"}),Object(l.jsx)(i.b,{className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingNormal btn--width50 btn--textCenter btn--fontNormal",to:"/",children:"Powr\xf3t"})]})]})}),Ce=t(37),ze=(t(366),t(195)),Be=t(193),Ee=t.n(Be),Pe=(t(372),function(){var e=Object(d.c)(C),n=Object(d.b)(),t=Object(d.c)(z),c=Object(a.useState)((null===e||void 0===e?void 0:e.fullname)||""),s=Object(R.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)((null===e||void 0===e?void 0:e.email)||""),u=Object(R.a)(o,2),j=u[0],b=u[1],f=Object(a.useState)((null===e||void 0===e?void 0:e.password)||""),p=Object(R.a)(f,2),v=p[0],_=p[1],N=Object(a.useCallback)((function(e){switch(e.currentTarget.name){case"fullname":i(e.target.value);break;case"password":_(e.target.value);break;case"email":b(e.target.value)}}),[]),k=function(){var a=Object(O.a)(m.a.mark((function a(){var c,s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(h,"/user/").concat(e.id),x("PUT",{username:e.username,email:j,fullname:r,password:v},t));case 2:c=a.sent,a.t0=c.status,a.next=200===a.t0?6:400===a.t0?12:15;break;case 6:return a.next=8,c.json();case 8:return s=a.sent,n(w(s)),s.user&&(i(s.user.fullname),b(s.user.email),_(""),g.b.success("Zapisano")),a.abrupt("break",16);case 12:return g.b.error("Has\u0142o powinno zawiera\u0107 8 znak\xf3w"),_(""),a.abrupt("break",16);case 15:return a.abrupt("break",16);case 16:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("section",{className:"profile__field",children:Object(l.jsxs)("h2",{children:["Konto: ",null===e||void 0===e?void 0:e.username]})}),Object(l.jsxs)("section",{className:"profile__field",children:[Object(l.jsx)("label",{children:"Imi\u0119 i nazwisko"}),Object(l.jsx)("input",{name:"fullname",value:r,onChange:N})]}),Object(l.jsxs)("section",{className:"profile__field",children:[Object(l.jsx)("label",{children:"Has\u0142o"}),Object(l.jsx)("input",{name:"password",type:"password",value:v,onChange:N})]}),Object(l.jsxs)("section",{className:"profile__field",children:[Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{name:"email",value:j,onChange:N})]}),Object(l.jsx)("section",{className:"profile__field",children:Object(l.jsx)("button",{onClick:k,className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingBig btn--width50 btn--textCenter btn--fontNormal",children:"Zapisz"})})]})}),Fe=function(){var e=Object(d.b)(),n=Object(a.useState)(!0),t=Object(R.a)(n,2),c=t[0],s=t[1],r=Object(a.useState)(window.innerWidth),i=Object(R.a)(r,2),u=i[0],j=i[1],b=Object(d.c)(X),f=Object(d.c)($),p=Object(d.c)(U),x=Object(d.c)(Oe),h=Object(d.c)(z),v=Object(d.c)(E);return console.log(f),Object(a.useEffect)((function(){return window.addEventListener("resize",(function(e){var n=e.currentTarget;j(n.innerWidth)})),function(){window.removeEventListener("resize",(function(e){}))}}),[]),Object(a.useEffect)((function(){var n;e((n={token:h||"",id:v||""},function(){var e=Object(O.a)(m.a.mark((function e(t){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(G()),e.prev=1,e.next=4,V(n);case 4:a=e.sent,e.t0=a.status,e.next=200===e.t0?8:14;break;case 8:return e.next=10,a.json();case 10:return c=e.sent,console.log(c),t(J({furnances:c})),e.abrupt("break",16);case 14:return t(L()),e.abrupt("break",16);case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(1),t(L());case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(n){return e.apply(this,arguments)}}()))}),[]),Object(l.jsxs)("section",{className:"panel ".concat(x.isVisible?"blurred":""),children:[Object(l.jsx)(Ne,Object(Ce.a)({},x)),Object(l.jsx)("section",{className:"panel__top",children:Object(l.jsx)(M.a,{toggle:s,toggled:c})}),Object(l.jsxs)("section",{className:"panel__middle",children:[Object(l.jsx)("section",{className:"panel__middle--left",children:Object(l.jsx)(W,{setHidden:s,isHidden:!c,menuItems:[{to:"/panel",isExact:!0,text:"Home"},{to:"/panel/furnance",isExact:!1,text:"Piec"},{to:"/panel/weatherForecast",isExact:!0,text:"Sprawd\u017a prognoz\u0119 pogody"},{to:"/panel/profile",isExact:!0,text:"Profil"},{to:"/panel/logout",isExact:!0,text:"Wyloguj"}]})}),Object(l.jsx)("section",{className:"panel__middle--right ".concat(!c&&u>800?" translateX14":""),children:Object(l.jsxs)(ze.a,{children:[Object(l.jsxs)(o.b,{exact:!0,path:"/panel",children:["request"===b&&new Array(9).fill({}).map((function(e,n){return Object(l.jsx)(he,{},n)})),"success"===b&&p.map((function(e){return Object(l.jsx)(Z,{furnance:e},e.id)})),"failure"===b&&Object(l.jsx)("button",{children:"Spr\xf3buj ponownie ! "})]}),Object(l.jsx)(o.b,{path:"/panel/furnance/:id",children:Object(l.jsx)(xe,{})}),Object(l.jsx)(o.b,{path:"/panel/weatherForecast",children:Object(l.jsx)("h2",{children:"Pogoda"})}),Object(l.jsx)(o.b,{path:"/panel/profile",children:Object(l.jsx)(Pe,{})}),Object(l.jsx)(o.b,{path:"/panel/logout",children:Object(l.jsx)(Ie,{})})]})})]}),Object(l.jsx)("div",{className:"panel__top--time",children:Object(l.jsx)("span",{children:Object(l.jsx)(Ee.a,{})})})]})},Ie=function(){var e=Object(d.b)();return Object(a.useEffect)((function(){e(S())}),[e]),Object(l.jsx)("div",{})},Ae=(t(375),t(376),c.a.memo((function(){var e=Object(o.g)(),n=Object(a.useState)(""),t=Object(R.a)(n,2),c=t[0],s=t[1],r=Object(a.useState)(""),i=Object(R.a)(r,2),j=i[0],b=i[1],d=Object(a.useState)(""),f=Object(R.a)(d,2),p=f[0],v=f[1],_=Object(a.useState)(""),N=Object(R.a)(_,2),k=N[0],w=N[1],y=function(){var n=Object(O.a)(m.a.mark((function n(){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g.b.info("\u0141\u0105czenie z serwerem..."),n.next=3,fetch("".concat(h,"/user/create"),x("POST",{email:c,username:j,fullname:p,password:k},null));case 3:t=n.sent,n.t0=t.status,n.next=201===n.t0?7:10;break;case 7:return g.b.success("Zarejestrowano u\u017cytkownika"),e.push("/"),n.abrupt("break",12);case 10:return g.b.error("Nie uda\u0142o si\u0119 zarejestrowa\u0107 u\u017cytkownika"),n.abrupt("break",12);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),S=function(e){var n=e.currentTarget;switch(n.name){case"email":s(n.value);break;case"username":b(n.value);break;case"fullname":v(n.value);break;case"password":w(n.value)}};return Object(l.jsxs)("section",{className:"register",children:[Object(l.jsx)("section",{className:"register__left",children:Object(l.jsx)(u,{})}),Object(l.jsx)("section",{className:"register__right",children:Object(l.jsxs)("form",{className:"register__form",children:[Object(l.jsxs)("h1",{className:"register__title",children:[Object(l.jsx)("span",{className:"register__title--orange",children:"WARM"}),Object(l.jsx)("span",{className:"register__title--white",children:"KEEPER"})]}),Object(l.jsx)("input",{placeholder:"Imi\u0119 i nazwisko",type:"text",className:"register__input",name:"fullname",value:p,onChange:S}),Object(l.jsx)("input",{placeholder:"Nazwa u\u017cytkownika",type:"text",className:"register__input",name:"username",value:j,onChange:S}),Object(l.jsx)("input",{placeholder:"Has\u0142o",type:"password",className:"register__input",name:"password",value:k,onChange:S}),Object(l.jsx)("input",{type:"text",placeholder:"Email",className:"register__input",name:"email",value:c,onChange:S}),Object(l.jsx)("button",{onClick:y,className:"btn btn--fontBlack btn--gradientOrangeAnimation btn--marginBig btn--paddingBig btn--width50 btn--textCenter btn--fontNormal",children:"Zarejestruj"})]})})]})})));var qe=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("main",{children:[Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:!0,path:"/",children:Object(l.jsx)(we,{})}),Object(l.jsx)(o.b,{exact:!0,path:"/register",children:Object(l.jsx)(Ae,{})}),Object(l.jsx)(F,{exact:!1,path:"/panel",component:Fe}),Object(l.jsx)(o.b,{children:Object(l.jsx)(Se,{})})]}),Object(l.jsx)(g.a,{position:"top-left",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(l.jsx)(g.a,{})]})})},Te=Object(p.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}}}),He=Te.actions,Me=(He.increment,He.decrement,He.incrementByAmount,Te.reducer),We=Object(p.a)({reducer:{counter:Me,user:P,furnance:Q,appSettings:me}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d.a,{store:We,children:Object(l.jsx)(qe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[378,1,2]]]);
//# sourceMappingURL=main.523252e7.chunk.js.map