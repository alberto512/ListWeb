(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{155:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},200:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){},308:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(30),s=a.n(r),i=(a(155),a(8)),o=a(9),l=a(11),d=a(12),j=a(23),u=a(2),b=c.a.forwardRef((function(e,t){var a=c.a.useState(!1),n=Object(j.a)(a,2),r=n[0],i=n[1];c.a.useImperativeHandle(t,(function(){return{openNavBar:function(){return o()},closeNavBar:function(){return l()}}}));var o=function(){i(!0)},l=function(){i(!1)};return r?s.a.createPortal(Object(u.jsxs)("div",{className:"modal-wrapper",children:[Object(u.jsx)("div",{onClick:l,className:"modal-backdrop"}),Object(u.jsx)("div",{className:"modal-box",children:e.children})]}),document.getElementById("root")):null})),h=a(22),p=a(96);var m=function(){var e=Object(n.useState)(function(){var e=localStorage.getItem("token"),t=JSON.parse(e);return t||void 0}()),t=Object(j.a)(e,2),a=t[0],c=t[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),c(e.token)},token:a}};a(179);var O=function(){var e=c.a.useRef(),t=function(){e.current.openNavBar()};return m().token?Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(p.c,{size:"2x",className:"icon",onClick:t,icon:"bars"}),Object(u.jsx)(b,{ref:e,children:Object(u.jsx)("div",{className:"div-nav-bar",children:Object(u.jsx)("div",{className:"div-nav-elements",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(h.c,{exact:!0,activeClassName:"current",to:"/ListsWeb/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.c,{exact:!0,activeClassName:"current",to:"/ListsWeb/anime",children:"Anime"})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.c,{exact:!0,activeClassName:"current",to:"/ListsWeb",onClick:function(){localStorage.removeItem("token"),window.location.reload()},children:"Logout"})})]})})})})]}):Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(p.c,{size:"2x",className:"icon",onClick:t,icon:"bars"}),Object(u.jsx)(b,{ref:e,children:Object(u.jsx)("div",{className:"div-nav-bar",children:Object(u.jsx)("div",{className:"div-nav-elements",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(h.c,{exact:!0,activeClassName:"current",to:"/ListsWeb/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.c,{exact:!0,activeClassName:"current",to:"/ListsWeb/auth",children:"Authenticate"})})]})})})})]})},x=(a(180),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#D2A5FF"}},{key:"render",value:function(){return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h1",{className:"lists",children:"Lists Web"})})]})}}]),a}(n.Component)),f=a(13),v=a(53),g=a(21),y=a.n(g),w=a(34),C=a(25),k=a(6),N=a(31),S=a.n(N),A=a(39),I=a.n(A);a(200);function L(e){return T.apply(this,arguments)}function T(){return(T=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.post("http://127.0.0.1:8000/api/signup/",t).then((function(e){return e.data})).catch((function(e){console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(e){var t=e.setToken,a=Object(n.useState)(!1),r=Object(j.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(),l=Object(j.a)(o,2),d=l[0],b=l[1],h=Object(n.useState)(),p=Object(j.a)(h,2),m=p[0],O=p[1],x=new FormData,f=function(){var e=Object(w.a)(y.a.mark((function e(a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!1!==a.currentTarget.checkValidity()){e.next=5;break}return a.stopPropagation(),e.abrupt("return");case 5:return i(!0),x.append("username",d),x.append("password",m),e.next=10,L(x);case 10:(null===(n=e.sent)||void 0===n?void 0:n.token)?(window.location.href="https://alberto512.github.io/ListsWeb/",t(n.token)):"A user with that username already exists."===(null===n||void 0===n?void 0:n.username[0])?I.a.fire({title:"Oops...",text:"A user with that username already exists",icon:"error",willClose:function(){window.location.reload(!1)}}):I.a.fire({title:"Oops...",text:"Something went wrong",icon:"error",willClose:function(){window.location.reload(!1)}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)("br",{}),Object(u.jsxs)(k.a,{noValidate:!0,validated:s,onSubmit:f,children:[Object(u.jsxs)(k.a.Group,{controlId:"formUsername",children:[Object(u.jsx)(k.a.Label,{children:"Username"}),Object(u.jsx)(k.a.Control,{required:!0,type:"text",placeholder:"Enter username",onChange:function(e){return b(e.target.value)}})]}),Object(u.jsxs)(k.a.Group,{controlId:"formBasicPassword",children:[Object(u.jsx)(k.a.Label,{children:"Password"}),Object(u.jsx)(k.a.Control,{required:!0,type:"password",placeholder:"Password",onChange:function(e){return O(e.target.value)}})]}),Object(u.jsx)(C.a,{variant:"primary",type:"submit",children:"Sign Up"})]})]})};a(202);function D(e){return W.apply(this,arguments)}function W(){return(W=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.post("http://127.0.0.1:8000/api/login/",t).then((function(e){return e.data})).catch((function(e){console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(e){var t=e.setToken,a=Object(n.useState)(!1),r=Object(j.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(),l=Object(j.a)(o,2),d=l[0],b=l[1],h=Object(n.useState)(),p=Object(j.a)(h,2),m=p[0],O=p[1],x=new FormData,f=function(){var e=Object(w.a)(y.a.mark((function e(a){var n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.currentTarget,a.preventDefault(),!1===n.checkValidity()&&a.stopPropagation(),i(!0),x.append("username",d),x.append("password",m),e.next=8,D(x);case 8:(null===(c=e.sent)||void 0===c?void 0:c.token)?(window.location.href="https://alberto512.github.io/ListsWeb/",t(c.token)):"Unable to log in with provided credentials."===(null===c||void 0===c?void 0:c.non_field_errors[0])?I.a.fire({title:"Oops...",text:"You have introduced wrong username or password",icon:"error",willClose:function(){window.location.reload(!1)}}):I.a.fire({title:"Oops...",text:"Something went wrong",icon:"error",willClose:function(){window.location.reload(!1)}});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)("br",{}),Object(u.jsxs)(k.a,{noValidate:!0,validated:s,onSubmit:f,children:[Object(u.jsxs)(k.a.Group,{controlId:"formUsername",children:[Object(u.jsx)(k.a.Label,{children:"Username"}),Object(u.jsx)(k.a.Control,{required:!0,type:"text",placeholder:"Enter username",onChange:function(e){return b(e.target.value)}})]}),Object(u.jsxs)(k.a.Group,{controlId:"formBasicPassword",children:[Object(u.jsx)(k.a.Label,{children:"Password"}),Object(u.jsx)(k.a.Control,{required:!0,type:"password",placeholder:"Password",onChange:function(e){return O(e.target.value)}})]}),Object(u.jsx)(C.a,{variant:"primary",type:"submit",children:"Log in"})]})]})};a(203);function B(e){return e.url.includes("sign")?Object(u.jsx)(F,{setToken:e.setToken}):Object(u.jsx)(P,{setToken:e.setToken})}var E=function(){var e=m().setToken;return Object(n.useEffect)((function(){document.body.style.backgroundColor="#D2A5FF"})),Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(f.a,{children:[Object(u.jsx)(f.a.Header,{children:Object(u.jsxs)(v.a,{fill:!0,className:"justify-content-center",variant:"tabs",defaultActiveKey:"#login",children:[Object(u.jsx)(v.a.Item,{children:Object(u.jsx)(v.a.Link,{href:"#login",children:"Log in"})}),Object(u.jsx)(v.a.Item,{children:Object(u.jsx)(v.a.Link,{href:"#sign",children:"Sign up"})})]})}),Object(u.jsx)(f.a.Body,{children:Object(u.jsx)(B,{url:window.location.href,setToken:e})})]})})]})},G=(a(204),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(t){t.preventDefault(),e.props.value(document.getElementById("input-bar").value)},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsx)("div",{className:"container-search",children:Object(u.jsx)("form",{autoComplete:"off",children:Object(u.jsxs)("div",{className:"tb",children:[Object(u.jsx)("div",{className:"td",children:Object(u.jsx)("input",{id:"input-bar",className:"input-bar",type:"text",placeholder:"Search",required:!0})}),Object(u.jsx)("div",{className:"td",id:"cover",children:Object(u.jsxs)("button",{className:"button-bar",type:"submit",onClick:this.handleClick,children:[Object(u.jsx)("div",{className:"circle"}),Object(u.jsx)("span",{className:"button-span"})]})})]})})})})}}]),a}(n.Component)),M=a(331),V=a(78),_=a.n(V),q=(a(205),function(){var e=localStorage.getItem("token"),t=JSON.parse(e);return t||void 0});function U(e){return 0===e.counter?Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("h1",{children:"No matching items"})}):Object(u.jsx)("p",{})}function R(e){var t=e%3;return 1===t?Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsxs)(f.a,{className:"item_card_hidden",children:[Object(u.jsx)(f.a.Img,{variant:"top"}),Object(u.jsxs)(f.a.Body,{children:[Object(u.jsx)(f.a.Title,{}),Object(u.jsx)(f.a.Text,{}),Object(u.jsx)(C.a,{variant:"primary",children:"View More"})]})]}),Object(u.jsxs)(f.a,{className:"item_card_hidden",children:[Object(u.jsx)(f.a.Img,{variant:"top"}),Object(u.jsxs)(f.a.Body,{children:[Object(u.jsx)(f.a.Title,{}),Object(u.jsx)(f.a.Text,{}),Object(u.jsx)(C.a,{variant:"primary",children:"View More"})]})]})]}):2===t?Object(u.jsxs)(f.a,{className:"item_card_hidden",children:[Object(u.jsx)(f.a.Img,{variant:"top"}),Object(u.jsxs)(f.a.Body,{children:[Object(u.jsx)(f.a.Title,{}),Object(u.jsx)(f.a.Text,{}),Object(u.jsx)(C.a,{variant:"primary",children:"View More"})]})]}):Object(u.jsx)("p",{})}var z=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={myArray:[]},e}return Object(o.a)(a,[{key:"getData",value:function(){var e=Object(w.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("http://127.0.0.1:8000/api/"+t+"/",{headers:{Authorization:"Token "+q()}}).then((function(e){var t=[[]],a=0,n=0;for(var c in e.data)3===n&&(n=0,t[++a]=[]),t[a].push(e.data[c]),n++;return t}));case 2:a=e.sent,this.setState({myArray:a});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getDataCustom",value:function(){var e=Object(w.a)(y.a.mark((function e(t,a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("http://127.0.0.1:8000/api/"+a+"/",{headers:{Authorization:"Token "+q()}}).then((function(e){var a=[[]],n=0,c=0;for(var r in e.data)3===c&&(c=0,a[++n]=[]),e.data[r].title.includes(t)&&(a[n].push(e.data[r]),c++);return a}));case 2:n=e.sent,this.setState({myArray:n});case 4:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.value!==e.value&&this.getDataCustom(this.props.value,this.props.url)}},{key:"componentDidMount",value:function(){_()(".item_card").hover((function(){_()(this).animate({marginTop:"-=1%",marginBottom:"1%"},200)}),(function(){_()(this).animate({marginTop:"0%",marginBottom:"0%"},200)})),this.getData(this.props.url)}},{key:"render",value:function(){var e=this,t=0;return Object(u.jsxs)(c.a.Fragment,{children:[this.state.myArray.map((function(a,n){return Object(u.jsxs)(M.a,{className:"deck",children:[a.map((function(a,n){t++;var c="/ListsWeb/"+e.props.url+"/info/"+a.id;return Object(u.jsxs)(f.a,{className:"item_card",children:[Object(u.jsx)(f.a.Img,{variant:"top",src:a.image}),Object(u.jsxs)(f.a.Body,{className:"item-card-body",children:[Object(u.jsx)(f.a.Title,{children:a.title}),Object(u.jsx)(h.c,{exact:!0,activeClassName:"current",to:c,children:Object(u.jsx)(C.a,{variant:"primary",children:"View More"})})]})]},n)})),R(t)]},n)})),Object(u.jsx)("div",{className:"wrap",children:Object(u.jsx)(U,{counter:t})})]})}}]),a}(n.Component),H=a(334),J=(a(206),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.handleValue=function(t){e.setState({value:t})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#1A43A9"}},{key:"render",value:function(){return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)(G,{value:this.handleValue}),Object(u.jsx)("div",{className:"item-deck",children:Object(u.jsx)(z,{className:"deck",value:this.state.value,url:"anime"})}),Object(u.jsx)(H.a,{className:"button-anime",children:Object(u.jsx)(h.c,{exact:!0,className:"nav",to:"/ListsWeb/anime/add",children:"Add"})})]})}}]),a}(n.Component)),Y=a(37),K=a(142),X=a.n(K),Q=a(148),Z=a(35),$=(a(136),a(305),function(){var e=localStorage.getItem("token"),t=JSON.parse(e);return t||void 0}),ee=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#1A43A9",X.a.init()}},{key:"render",value:function(){var e,t=new FormData,a=Z.b({title:Z.c().required("Write a title for the anime"),type:Z.c().oneOf(["Series","Movie","Special","ONA","OVA"],"Select one type").required("Select one type"),seasons:Z.a().required(),status:Z.c().oneOf(["Airing","Finished","Pending","Cancelled"],"Select the status").required("Status of the anime"),personalStatus:Z.c().oneOf(["Watching","Completed","Plan to Watch","Re-watching","On Hold","Dropped"],"Select the personal status").required("Personal status of the anime"),platform:Z.c().optional("Platform where you can find the anime"),nextSeason:Z.c().optional("Next season of the anime"),additionalComments:Z.c().optional("Write some additional comments"),image:Z.c().optional()});return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsxs)(f.a,{className:"custom-card",children:[Object(u.jsx)(f.a.Header,{className:"card-header-anime",children:"Create new anime"}),Object(u.jsx)(f.a.Body,{className:"card-body-anime",children:Object(u.jsx)(Q.a,{validationSchema:a,onSubmit:function(a){t.append("title",a.title),t.append("type",a.type),t.append("seasons",a.seasons),t.append("status",a.status),t.append("personalStatus",a.personalStatus),t.append("platform",a.platform),t.append("nextSeason",a.nextSeason),t.append("additionalComments",a.additionalComments),e&&t.append("image",e,a.image),S.a.post("http://127.0.0.1:8000/api/anime/",t,{headers:{Authorization:"Token "+$()}}).then((function(){I.a.fire({title:"Good job!",text:"Your anime has been submited",icon:"success",onClose:function(){window.location.reload(!1)}})})).catch((function(e){I.a.fire({title:"Oops...",text:"Something went wrong",icon:"error",onClose:function(){window.location.reload(!1)}})}))},initialValues:{title:"",type:"",seasons:0,status:"",personalStatus:"",platform:"",nextSeason:"",additionalComments:"",image:""},children:function(t){var a=t.handleSubmit,n=t.handleChange,c=t.values,r=t.errors;return Object(u.jsxs)(k.a,{noValidate:!0,onSubmit:a,children:[Object(u.jsxs)(k.a.Row,{children:[Object(u.jsxs)(k.a.Group,{as:Y.a,controlId:"form-grid-title",children:[Object(u.jsx)(k.a.Label,{className:"label",children:"Title"}),Object(u.jsx)(k.a.Control,{name:"title",value:c.title,onChange:n,isInvalid:!!r.title,placeholder:"Anime's title"}),Object(u.jsx)(k.a.Control.Feedback,{type:"invalid",children:r.title})]}),Object(u.jsxs)(k.a.Group,{as:Y.a,controlId:"form-grid-type",children:[Object(u.jsx)(k.a.Label,{className:"label",children:"Type"}),Object(u.jsxs)(k.a.Control,{name:"type",value:c.type,onChange:n,isInvalid:!!r.type,as:"select",children:[Object(u.jsx)("option",{children:"Select type"}),Object(u.jsx)("option",{children:"Series"}),Object(u.jsx)("option",{children:"Movie"}),Object(u.jsx)("option",{children:"Special"}),Object(u.jsx)("option",{children:"ONA"}),Object(u.jsx)("option",{children:"OVA"})]}),Object(u.jsx)(k.a.Control.Feedback,{type:"invalid",children:r.type})]})]}),Object(u.jsxs)(k.a.Row,{children:[Object(u.jsxs)(k.a.Group,{as:Y.a,controlId:"form-grid-seasons",children:[Object(u.jsx)(k.a.Label,{className:"label",children:"Seasons"}),Object(u.jsx)(k.a.Control,{name:"seasons",value:c.seasons,onChange:n,isInvalid:!!r.seasons,type:"number",placeholder:"0"}),Object(u.jsx)(k.a.Control.Feedback,{type:"invalid",children:r.seasons})]}),Object(u.jsxs)(k.a.Group,{as:Y.a,controlId:"form-grid-status",children:[Object(u.jsx)(k.a.Label,{className:"label",children:"Status"}),Object(u.jsxs)(k.a.Control,{name:"status",value:c.status,onChange:n,isInvalid:!!r.status,as:"select",children:[Object(u.jsx)("option",{children:"Select status"}),Object(u.jsx)("option",{children:"Airing"}),Object(u.jsx)("option",{children:"Finished"}),Object(u.jsx)("option",{children:"Pending"}),Object(u.jsx)("option",{children:"Cancelled"})]}),Object(u.jsx)(k.a.Control.Feedback,{type:"invalid",children:r.status})]})]}),Object(u.jsxs)(k.a.Row,{children:[Object(u.jsxs)(k.a.Group,{as:Y.a,controlId:"form-grid-personalStatus",children:[Object(u.jsx)(k.a.Label,{className:"label",children:"Personal status"}),Object(u.jsxs)(k.a.Control,{name:"personalStatus",value:c.personalStatus,onChange:n,isInvalid:!!r.personalStatus,as:"select",children:[Object(u.jsx)("option",{children:"Select personal status"}),Object(u.jsx)("option",{children:"Watching"}),Object(u.jsx)("option",{children:"Completed"}),Object(u.jsx)("option",{children:"Plan to Watch"}),Object(u.jsx)("option",{children:"Re-watching"}),Object(u.jsx)("option",{children:"On Hold"}),Object(u.jsx)("option",{children:"Dropped"})]}),Object(u.jsx)(k.a.Control.Feedback,{type:"invalid",children:r.personalStatus})]}),Object(u.jsxs)(k.a.Group,{as:Y.a,controlId:"form-grid-platform",children:[Object(u.jsx)(k.a.Label,{className:"label",children:"Platform"}),Object(u.jsx)(k.a.Control,{name:"platform",value:c.platform,onChange:n,isInvalid:!!r.platform,placeholder:"Platform"}),Object(u.jsx)(k.a.Control.Feedback,{type:"invalid",children:r.platform})]})]}),Object(u.jsxs)(k.a.Group,{as:Y.a,controlId:"form-grid-nextSeason",children:[Object(u.jsx)(k.a.Label,{className:"label",children:"Next season"}),Object(u.jsx)(k.a.Control,{name:"nextSeason",value:c.nextSeason,onChange:n,isInvalid:!!r.nextSeason,placeholder:"Next season"}),Object(u.jsx)(k.a.Control.Feedback,{type:"invalid",children:r.nextSeason})]}),Object(u.jsxs)(k.a.Group,{controlId:"form-grid-additionalComments",children:[Object(u.jsx)(k.a.Label,{className:"label",children:"Additional comments"}),Object(u.jsx)(k.a.Control,{as:"textarea",rows:"5",name:"additionalComments",value:c.additionalComments,onChange:n,isInvalid:!!r.additionalComments,placeholder:"Write any additional comments"}),Object(u.jsx)(k.a.Control.Feedback,{type:"invalid",children:r.additionalComments})]}),Object(u.jsx)(k.a.Group,{controlId:"form-grid-image",children:Object(u.jsx)(k.a.File,{id:"image",name:"image",value:c.image,onChange:function(t){n(t),function(t){e=t.target.files[0]}(t)},isInvalid:!!r.image,label:"Upload your cover image",accept:".jpg,.png",custom:!0})}),Object(u.jsx)(C.a,{variant:"warning",type:"submit",children:"Submit"})]})}})})]})]})}}]),a}(n.Component),te=(a(306),a(137),a(18)),ae=(a(307),a(308),a(333)),ne=a(332),ce=function(){var e=localStorage.getItem("token"),t=JSON.parse(e);return t||void 0},re=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={anime:[]},e.handleDelete=function(t){t.preventDefault(),S.a.delete("http://localhost:8000/api/anime/"+e.state.anime.id+"/",{headers:{Authorization:"Token "+ce()}}),window.location.replace("http://localhost:3000/ListsWeb/anime")},e}return Object(o.a)(a,[{key:"getData",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("http://127.0.0.1:8000/api/anime/"+this.props.anime.params.id,{headers:{Authorization:"Token "+ce()}}).then((function(e){return e.data}));case 2:t=e.sent,this.setState({anime:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#1A43A9",this.getData()}},{key:"render",value:function(){return Object(u.jsx)(c.a.Fragment,{children:Object(u.jsxs)(ne.a,{container:!0,spacing:6,children:[Object(u.jsx)(ne.a,{item:!0,xs:12,children:Object(u.jsxs)(ae.a,{className:"display-item-paper",children:["TITLE",Object(u.jsx)("br",{}),this.state.anime.title]})}),Object(u.jsx)(ne.a,{item:!0,xs:6,children:Object(u.jsxs)(ae.a,{className:"display-item-paper",children:["TYPE",Object(u.jsx)("br",{}),this.state.anime.type]})}),Object(u.jsx)(ne.a,{item:!0,xs:6,children:Object(u.jsxs)(ae.a,{className:"display-item-paper",children:["SEASONS",Object(u.jsx)("br",{}),this.state.anime.seasons]})}),Object(u.jsx)(ne.a,{item:!0,xs:6,children:Object(u.jsxs)(ae.a,{className:"display-item-paper",children:["STATUS",Object(u.jsx)("br",{}),this.state.anime.status]})}),Object(u.jsx)(ne.a,{item:!0,xs:6,children:Object(u.jsxs)(ae.a,{className:"display-item-paper",children:["PERSONAL STATUS",Object(u.jsx)("br",{}),this.state.anime.personal_status]})}),Object(u.jsx)(ne.a,{item:!0,xs:6,children:Object(u.jsxs)(ae.a,{className:"display-item-paper",children:["PLATFORM",Object(u.jsx)("br",{}),this.state.anime.platform]})}),Object(u.jsx)(ne.a,{item:!0,xs:6,children:Object(u.jsxs)(ae.a,{className:"display-item-paper",children:["NEXT SEASON",Object(u.jsx)("br",{}),this.state.anime.next_season]})}),Object(u.jsx)(ne.a,{item:!0,xs:12,children:Object(u.jsxs)(ae.a,{className:"display-item-paper",children:["ADDITIONAL COMMENTS",Object(u.jsx)("br",{}),this.state.anime.additional_comments]})}),Object(u.jsx)(ne.a,{item:!0,xs:6,children:Object(u.jsx)(C.a,{className:"button-edit",children:"Edit"})}),Object(u.jsx)(ne.a,{item:!0,xs:6,children:Object(u.jsx)(C.a,{className:"button-delete",onClick:this.handleDelete,children:"Delete"})})]})})}}]),a}(n.Component),se=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)(re,{anime:this.props.match})]})}}]),a}(n.Component);var ie=function(){return m().token?Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(te.c,{children:[Object(u.jsx)(te.a,{exact:!0,path:"/ListsWeb/",component:x}),Object(u.jsx)(te.a,{exact:!0,path:"/ListsWeb/anime",component:J}),Object(u.jsx)(te.a,{exact:!0,path:"/ListsWeb/anime/add",component:ee}),Object(u.jsx)(te.a,{exact:!0,path:"/ListsWeb/anime/info/:id",component:se})]})}):Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(te.c,{children:[Object(u.jsx)(te.a,{exact:!0,path:"/ListsWeb/",component:x}),Object(u.jsx)(te.a,{exact:!0,path:"/ListsWeb/auth",component:E})]})})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,335)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(h.a,{children:Object(u.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[309,1,2]]]);
//# sourceMappingURL=main.7c9e3f4a.chunk.js.map