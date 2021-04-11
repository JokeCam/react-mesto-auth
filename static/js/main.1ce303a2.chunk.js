(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(18),s=n.n(o),i=(n(29),n(22)),r=n(2),u=n(3),l=n(5),d=n.p+"static/media/logo.bbe2a6ea.svg",j=(n(30),n(0));var p=function(e){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("img",{className:"header__logo",src:d,alt:"\u041b\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430: \u041c\u0435\u0441\u0442\u043e"}),e.children]})},h=(n(32),n(33),Object(c.createContext)());var b=function(e){var t=Object(c.useContext)(h),n=e.item.owner._id===t._id,a=e.item.likes.some((function(e){return e._id===t._id}));return Object(j.jsxs)("article",{className:"element",children:[Object(j.jsx)("button",{className:"".concat(n?"element__delete":"element__delete_hidden"),type:"button",onClick:function(){e.onCardDelete(e.item)}}),Object(j.jsx)("img",{className:"element__image",src:e.item.link,alt:e.item.name,onClick:function(){e.props(e.item)}}),Object(j.jsx)("h2",{className:"element__title",children:e.item.name}),Object(j.jsxs)("div",{className:"element__like_container",children:[Object(j.jsx)("button",{className:"element__button ".concat(a?"element__button_active":""),type:"button",onClick:function(){e.onCardLike(e.item)}}),Object(j.jsx)("p",{className:"element__likes",children:e.item.likes.length})]})]})};var m=function(e){var t=Object(c.useContext)(h);return Object(j.jsxs)("main",{className:"main",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsxs)("div",{className:"profile__container",children:[Object(j.jsx)("button",{type:"button",className:"profile__edit-button",onClick:function(){e.onEditAvatar(),console.log("clicked onEditAvatar")}}),Object(j.jsx)("img",{className:"profile__picture",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})]}),Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsx)("h1",{className:"profile__title",children:t.name}),Object(j.jsx)("button",{"aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"profile__button",type:"button",onClick:function(){e.onEditProfile(),console.log("clicked onEditProfile")}}),Object(j.jsx)("div",{className:"profile__brake"}),Object(j.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(j.jsx)("button",{className:"profile__add-button",type:"button",onClick:function(){e.onAddPlace(),console.log("clicked onAddPlace")}})]}),Object(j.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(j.jsx)(b,{item:t,props:e.onCardClick,onCardLike:e.handleCardLike,onCardDelete:e.handleCardDelete},t._id)}))})]})};n(34);var _=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 \u0421\u0435\u043b\u044e\u043d\u0438\u043d \u0421\u0442\u0430\u043d\u0438\u0441\u043b\u0430\u0432"})})};n(35);var O=function(e){var t=e.title,n=e.name,c=e.children,a=e.isOpen,o=e.onClose,s=e.onSubmit,i="";return a&&(i="popup_opened"),Object(j.jsx)("div",{className:"popup popup_".concat(n," ").concat(i),children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("h2",{className:"popup__title",children:t}),Object(j.jsxs)("form",{className:"popup__form",id:n,name:n,onSubmit:s,children:[c,Object(j.jsx)("button",{form:n,className:"popup__button",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(j.jsx)("button",{className:"popup__close",type:"button",onClick:o})]})})};var f=function(e){var t=Object(c.useContext)(h);Object(c.useEffect)((function(){s(t.name||""),d(t.about||"")}),[t]);var n=Object(c.useState)(""),a=Object(r.a)(n,2),o=a[0],s=a[1],i=Object(c.useState)(""),u=Object(r.a)(i,2),l=u[0],d=u[1];return Object(j.jsx)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{className:"popup__input",value:o,onChange:function(e){s(e.target.value)},type:"text",id:"name__input",name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",required:!0,noValidate:!0,minLength:"2",maxLength:"40"}),Object(j.jsx)("span",{className:"popup__input-error",id:"name__input_error"}),Object(j.jsx)("input",{className:"popup__input",value:l,onChange:function(e){d(e.target.value)},type:"text",id:"job__input",name:"about",placeholder:"\u0427\u0435\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c?",required:!0,noValidate:!0,minLength:"2",maxLength:"200"}),Object(j.jsx)("span",{className:"popup__input-error",id:"job__input_error"})]}),isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:l})}})};var g=function(e){var t=Object(c.useRef)();return Object(j.jsx)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{ref:t,className:"popup__input",type:"url",id:"avatar__name_input",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(j.jsx)("span",{className:"popup__input-error",id:"avatar__name_input_error"})]}),isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value)}})};var x=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),u=i[0],l=i[1];return Object(j.jsx)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-card",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u}),o(""),l("")},children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{className:"popup__input",value:a,onChange:function(e){o(e.target.value)},type:"text",id:"card__name_input",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30"}),Object(j.jsx)("span",{className:"popup__input-error",id:"card__name_input_error"}),Object(j.jsx)("input",{className:"popup__input",value:u,onChange:function(e){l(e.target.value)},type:"url",id:"img__src_input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(j.jsx)("span",{className:"popup__input-error",id:"img__src_input_error"})]})})};n(36);var v=function(e){var t="";return e.card.link&&(t="popup_opened"),Object(j.jsx)("div",{className:"popup popup_image ".concat(t),children:Object(j.jsxs)("div",{className:"popup__image-container",children:[Object(j.jsx)("img",{className:"popup__image",src:e.card.link,alt:"placeholder"}),Object(j.jsx)("button",{className:"popup__close",type:"button",onClick:e.onClose}),Object(j.jsx)("h2",{className:"popup__image-title",children:e.card.name})]})})},N=n(19),k=n(20),C=new(function(){function e(t){Object(N.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(k.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"updateUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-20",headers:{authorization:"75314450-8bde-49f1-8e95-7ac1e831360d","Content-Type":"application/json"}});n(37);var y=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),u=i[0],d=i[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{children:Object(j.jsx)(l.b,{className:"header__link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.handleLogin(a,u)},className:"login login__form",children:[Object(j.jsx)("h1",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsx)("input",{value:a,onChange:function(e){o(e.target.value)},className:"login__input",type:"email",placeholder:"Email",required:!0}),Object(j.jsx)("input",{value:u,onChange:function(e){d(e.target.value)},className:"login__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(j.jsx)("button",{className:"login__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};n(43);var S=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),u=i[0],d=i[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{children:Object(j.jsx)(l.b,{className:"header__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.handleRegister(a,u)},className:"register register__form",children:[Object(j.jsx)("h1",{className:"register__title",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsx)("input",{onChange:function(e){o(e.target.value)},value:a,className:"register__input",type:"email",placeholder:"Email",required:!0}),Object(j.jsx)("input",{onChange:function(e){d(e.target.value)},value:u,className:"register__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(j.jsx)("button",{className:"register__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsx)(l.b,{className:"register__text",to:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})]})},E=(n(44),n.p+"static/media/Union.a9eb6caf.svg"),P=n.p+"static/media/Union-fail.df8eddf6.svg";var L=function(e){var t="";e.isLogOutPopupOpen&&(t="info_opened");var n=Object(u.g)();return Object(j.jsx)("div",{className:"info ".concat(t),children:Object(j.jsxs)("div",{className:"info__container",children:[Object(j.jsx)("img",{className:"info__logo",src:e.popupError?P:E,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 '\u0443\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f' \u0438\u043b\u0438 '\u043d\u0435\u0443\u0434\u0430\u0447\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f'"}),Object(j.jsx)("p",{className:"info__text",children:e.popupError?e.textFail:e.textSuccess}),Object(j.jsx)("button",{className:"info__close",type:"button",onClick:function(){var t="";t=e.popupError?"/sign-up":"/sign-in",e.closeAllPopups(),n.push(t)}})]})})};n(45);var T=function(e){var t="";return e.isLogOutPopupOpen&&(t="signout_shown"),Object(j.jsxs)("div",{className:"signout ".concat(t),children:[Object(j.jsx)("p",{className:"signout__email",children:e.userEmail}),Object(j.jsx)(l.b,{onClick:e.handleLogOutClick,className:"signout__button",to:"/sign-in",children:"\u0412\u044b\u0439\u0442\u0438"})]})},A=n(23),U=n(24),D=function(e){var t=e.component,n=Object(U.a)(e,["component"]);return Object(j.jsx)(u.b,{children:function(){return n.loggedIn?Object(j.jsx)(t,Object(A.a)({},n)):Object(j.jsx)(u.a,{to:"/sign-in"})}})};var F=function(){var e=Object(u.g)(),t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)({}),d=Object(r.a)(s,2),b=d[0],N=d[1],k=Object(c.useState)([]),E=Object(r.a)(k,2),P=E[0],A=E[1],U=Object(c.useState)(!1),F=Object(r.a)(U,2),I=F[0],R=F[1],w=Object(c.useState)(!1),J=Object(r.a)(w,2),q=J[0],W=J[1],B=Object(c.useState)(!1),G=Object(r.a)(B,2),z=G[0],H=G[1],V=Object(c.useState)(!1),M=Object(r.a)(V,2),K=M[0],Q=M[1],X=Object(c.useState)({}),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=Object(c.useState)(""),te=Object(r.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(!1),oe=Object(r.a)(ae,2),se=oe[0],ie=oe[1];function re(){localStorage.getItem("JWT")&&function(e){return fetch("".concat("https://auth.nomoreparties.co","/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return console.log(e),e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}(localStorage.getItem("JWT")).then((function(t){t&&(ce(t.data.email),o(!0),e.push("/content"))})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))}function ue(){localStorage.removeItem("JWT")}Object(c.useEffect)((function(){C.getCards().then((function(e){return A(e)})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))}),[]),Object(c.useEffect)((function(){C.getUserInfo().then((function(e){N(e)})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))}),[]),Object(c.useEffect)((function(){re()}),[]);var le=function(){H(!1),R(!1),W(!1),Q(!1),$({})};return Object(j.jsx)("div",{className:"content",children:Object(j.jsx)(h.Provider,{value:b,children:Object(j.jsxs)(u.d,{children:[Object(j.jsxs)(u.b,{path:"/content",children:[Object(j.jsx)(T,{userEmail:ne,isLogOutPopupOpen:K,handleLogOutClick:ue}),Object(j.jsxs)(p,{children:[Object(j.jsxs)("div",{className:"header__container",children:[Object(j.jsx)("p",{className:"header__email",children:ne}),Object(j.jsx)(l.b,{onClick:ue,className:"header__signout",to:"/sign-in",children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(j.jsx)("button",{onClick:function(){Q(!K)},className:"header__button ".concat(K?"header__button_active":""),type:"button"})]}),Object(j.jsx)(D,{exact:!0,path:"/",component:m,onEditProfile:function(){R(!0)},onAddPlace:function(){W(!0)},onEditAvatar:function(){H(!0)},onCardClick:function(e){$(e)},handleCardLike:function(e){e.likes.some((function(e){return e._id===b._id}))?C.removeLike(e._id).then((function(t){A((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))})):C.addLike(e._id).then((function(t){A((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))},handleCardDelete:function(e){C.deleteCard(e._id).then(A(P.filter((function(t){return t._id!==e._id})))).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))},cards:P,loggedIn:a}),Object(j.jsx)(_,{}),Object(j.jsx)(f,{isOpen:I,onClose:le,onUpdateUser:function(e){C.updateUserInfo(e).then((function(e){N(e),le()})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))}}),Object(j.jsx)(g,{isOpen:z,onClose:le,onUpdateAvatar:function(e){C.updateUserAvatar(e).then((function(e){N(e),le()})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))}}),Object(j.jsx)(x,{isOpen:q,onClose:le,onAddPlace:function(e){C.addNewCard(e).then((function(e){A([e].concat(Object(i.a)(P))),le()})).catch((function(e){return console.log("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e))}))}}),Object(j.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",children:Object(j.jsx)(j.Fragment,{})}),Object(j.jsx)(v,{card:Z,onClose:le})]}),Object(j.jsx)(u.b,{path:"/sign-in",children:Object(j.jsx)(y,{handleLogin:function(t,n){(function(e,t){return fetch("".concat("https://auth.nomoreparties.co","/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))})(t,n).then((function(n){n&&(ce(t),localStorage.setItem("JWT",n.token),o(!0),e.push("/content"))}))}})}),Object(j.jsxs)(u.b,{path:"/sign-up",children:[Object(j.jsx)(S,{handleRegister:function(e,t){(function(e,t){return fetch("".concat("https://auth.nomoreparties.co","/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))})(e,t).then((function(e){e&&(console.log(e),ie(!1),o(!0),Q(!0))})).catch((function(e){console.log(e),e?(console.log(e),ie(!0),Q(!0)):ie(!1)}))}}),Object(j.jsx)(L,{isLogOutPopupOpen:K,closeAllPopups:le,popupError:se,textSuccess:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c",textFail:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]}),Object(j.jsx)(u.b,{children:a?Object(j.jsx)(u.a,{to:"/content"}):Object(j.jsx)(u.a,{to:"/sign-in"})})]})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(F,{})})}),document.getElementById("root")),I()}},[[46,1,2]]]);
//# sourceMappingURL=main.1ce303a2.chunk.js.map