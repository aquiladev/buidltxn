(this.webpackJsonpbuidltxn=this.webpackJsonpbuidltxn||[]).push([[1],{167:function(e,t,n){},184:function(e,t){},194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),i=n.n(c),o=n(102),s=(n(167),n(29)),l=n(49),d=n(129),u=n(239),b=n(257),j=n(30),p=n(76),h=n(82),f=n(46),O=n(242),m=n(260),g=n(196),x=n(116),v="https://mainnet.infura.io/v3/3947c045ca5a4d68bff484fb038fb11c",w="https://rinkeby.infura.io/v3/3947c045ca5a4d68bff484fb038fb11c",y=new p.a({supportedChainIds:[1,4]}),C=new h.b({rpc:{1:v,4:w},qrcode:!0,pollingInterval:12e3}),k=new x.a({url:v,appName:"Buidltxn",supportedChainIds:[1,4]});var N=n(249),S=n(250),L=n(133),T=n(243),E=n(259),I=n(48),F=n(117),W=n.n(F),z=n(7),M=Object(u.a)((function(){return{icon:{height:"1rem",width:"1rem",borderRadius:"1.125rem",borderColor:"black"}}}));function _(e){var t=e.account,n=M(),r=Object(a.useRef)();return Object(a.useEffect)((function(){t&&r.current&&(r.current.innerHTML="",r.current.appendChild(W()(16,parseInt(t.slice(2,10),16))))}),[t]),Object(z.jsx)("div",{className:n.icon,ref:r})}var A=n(269),H=Object(u.a)((function(){return{modal:{padding:20},box:{display:"flex"},account:{paddingLeft:8},btn:{padding:0,marginLeft:20}}}));function R(e){var t=e.anchorEl,n=e.onClose,a=H(),r=Object(j.c)(),c=r.account,i=r.deactivate,o=r.connector,s=Boolean(t),l=function(){n&&n()};return Object(z.jsx)(A.a,{open:s,anchorEl:t,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:Object(z.jsx)(O.a,{className:a.modal,children:Object(z.jsxs)(E.a,{className:a.box,children:[Object(z.jsx)(_,{account:c}),Object(z.jsx)(L.a,{className:a.account,children:c&&"".concat(c.slice(0,6),"...").concat(c.slice(c.length-4,c.length))}),Object(z.jsx)(T.a,{size:"small",className:a.btn,onClick:function(){i(),o.close&&o.close(),l()},children:"Disconnect"})]})})})}var B=n(130),V=n(24),D=n(263),G=n(247),q=n(245),J=n(244),U=n(246),P=n(122),K=n.n(P),Y=n.p+"static/media/mm.ff38276e.png",Z=n.p+"static/media/wc.304e3277.svg",Q=n.p+"static/media/cw.a3a7d7fd.svg",X={MetaMask:y,WalletConnect:C,"Coinbase Wallet":k},$={MetaMask:Y,WalletConnect:Z,"Coinbase Wallet":Q},ee=Object(u.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},btn:{minWidth:300,padding:16,justifyContent:"flex-start",textTransform:"none"},grow:{flexGrow:1},img:{width:"auto",maxWidth:26,maxHeight:24,margin:"0 auto"}}})),te=r.a.forwardRef((function(e,t){return Object(z.jsx)(J.a,Object(V.a)({direction:"up",ref:t},e))})),ne=function(e){var t=ee(),n=e.children,a=e.onClose,r=Object(B.a)(e,["children","onClose"]);return Object(z.jsxs)(q.a,Object(V.a)(Object(V.a)({disableTypography:!0,className:t.root},r),{},{children:[Object(z.jsx)(L.a,{variant:"h6",children:n}),a?Object(z.jsx)(U.a,{"aria-label":"close",className:t.closeButton,onClick:a,children:Object(z.jsx)(K.a,{})}):null]}))};function ae(e){var t=e.isOpen,n=e.onClose,a=ee(),r=Object(j.c)().activate,c=function(){n&&n()};return Object(z.jsxs)(D.a,{open:t,onClose:c,TransitionComponent:te,maxWidth:"lg",keepMounted:!0,children:[Object(z.jsx)(ne,{onClose:c,children:"Connect to a wallet"}),Object(z.jsx)(G.a,{children:Object.keys(X).map((function(e){return Object(z.jsx)("div",{children:Object(z.jsxs)(T.a,{onClick:function(){r(X[e])},className:a.btn,children:[Object(z.jsx)(L.a,{variant:"body1",children:e}),Object(z.jsx)("div",{className:a.grow}),Object(z.jsx)("img",{src:$[e],alt:e,className:a.img})]},e)})}))})]})}var re={1:"https://api.etherscan.io/",3:"https://api-ropsten.etherscan.io/",4:"https://api-rinkeby.etherscan.io/",5:"https://api-goerli.etherscan.io/",42:"https://api-kovan.etherscan.io/"},ce={1:"Mainnet",3:"Ropsten",4:"Rinkeby",5:"Goerli",42:"Kovan",100:"xDai",30:"Orchid",31:"OrchidTestnet",99:"Core",77:"Sokol",61:"Classic",8:"Ubiq",108:"Thundercore",18:"ThundercoreTestnet",163:"Lightstreams",122:"Fuse",15001:"MaticTestnet"},ie=Object(u.a)((function(e){return{box_net:{display:"flex",alignItems:"center",background:e.palette.action.selected,borderRadius:6,padding:8,marginRight:8,color:e.palette.text.primary},box_acc:{display:"flex",alignItems:"center",background:e.palette.action.selected,borderRadius:6,paddingLeft:8},info_btn:{margin:"2px 2px 2px 6px",background:e.palette.action.disabled,color:e.palette.text.primary,textTransform:"none"},info_btn_text:{paddingRight:6},connect_btn:{background:e.palette.action.active,color:e.palette.text.primary}}}));function oe(){var e=ie(),t=Object(j.c)(),n=t.account,a=t.library,c=t.chainId,i=r.a.useState(),o=Object(s.a)(i,2),l=o[0],d=o[1],u=r.a.useState(null),b=Object(s.a)(u,2),p=b[0],h=b[1],f=r.a.useState(),O=Object(s.a)(f,2),m=O[0],g=O[1];return r.a.useEffect((function(){if(n&&a){var e=!1;return a.getBalance(n).then((function(t){e||d(t)})).catch((function(){e||d(null)})),function(){e=!0,d(void 0)}}}),[n,a,c]),n?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(E.a,{className:e.box_net,children:Object(z.jsx)(L.a,{children:ce[c]||c})}),Object(z.jsxs)(E.a,{className:e.box_acc,children:[l&&parseFloat(Object(I.b)(l)).toFixed(3)," ETH",Object(z.jsxs)(T.a,{className:e.info_btn,onClick:function(e){return h(e.currentTarget)},children:[Object(z.jsx)(L.a,{className:e.info_btn_text,children:n&&"".concat(n.slice(0,6),"...").concat(n.slice(n.length-4,n.length))}),Object(z.jsx)(_,{account:n})]}),Object(z.jsx)(R,{anchorEl:p,onClose:function(){return h(null)}})]})]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(T.a,{className:e.connect_btn,onClick:function(){return g(!0)},color:"secondary",children:"Connect to a wallet"}),Object(z.jsx)(ae,{isOpen:m,onClose:function(){return g(!1)}})]})}var se=Object(u.a)((function(e){return{header:{background:"transparent",boxShadow:"none"},logo:{maxWidth:32,paddingRight:8},title:Object(l.a)({fontSize:"1rem"},e.breakpoints.up("sm"),{fontSize:"1.5rem"}),grow:{flexGrow:1,paddingLeft:30}}}));function le(e){e.changeMode;var t=se();return Object(z.jsx)("header",{children:Object(z.jsx)(N.a,{position:"fixed",className:t.header,children:Object(z.jsxs)(S.a,{children:[Object(z.jsx)("img",{src:"logo.png",alt:"logo",className:t.logo}),Object(z.jsx)(L.a,{className:t.title,variant:"h5",noWrap:!0,children:"Buidltxn"}),Object(z.jsx)("div",{className:t.grow}),Object(z.jsx)(oe,{})]})})})}var de=n(56),ue=n(4),be=n.n(ue),je=n(58),pe=n(252),he=n(258),fe=n(254),Oe=n(266),me=n(255),ge=n(125),xe=n.n(ge),ve=n(127),we=n.n(ve),ye=n(126),Ce=n.n(ye),ke=n(264),Ne=n(253),Se=n(262),Le=n(265),Te=n(267),Ee=Object(u.a)((function(){return{inputForm:{marginTop:10}}}));function Ie(e){var t=e.abi,n=e.onUpdate,r=Ee(),c=Object(a.useState)([]),i=Object(s.a)(c,2),o=i[0],l=i[1],d=Object(a.useState)({selector:"",params:[]}),u=Object(s.a)(d,2),b=u[0],j=u[1];Object(a.useEffect)((function(){var e=new f.a.utils.Interface(t);l(Object.values(e.functions).filter((function(e){return!e.constant})).map((function(t){var n="".concat(t.name,"(").concat(t.inputs.map((function(e){return"".concat(e.type)})).join(","),")"),a=e.getSighash(n);return Object(V.a)(Object(V.a)({},t),{},{uniqueName:n,sigHash:a})})))}),[t]);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(he.a,{label:"Function",size:"small",variant:"outlined",defaultValue:b.selector,onChange:function(e){j({selector:e.target.value,params:[]}),n&&n({selector:e.target.value,params:[],error:void 0,result:void 0})},fullWidth:!0,select:!0,children:o.map((function(e){return Object(z.jsxs)(Te.a,{value:e.uniqueName,children:[e.uniqueName," - ",e.sigHash]})}))}),b.selector&&function(e){var t=o.find((function(t){return t.uniqueName===e}));return Object(z.jsx)(z.Fragment,{children:t.inputs.length>0&&t.inputs.map((function(e,a){return Object(z.jsx)(pe.a,{className:r.inputForm,children:Object(z.jsx)(he.a,{label:"".concat(e.name," (").concat(e.type,")"),variant:"outlined",size:"small",color:"primary",defaultValue:b.params[a],value:b.params[a],placeholder:e.type,fullWidth:!0,onChange:function(e){var t=b.selector,r=b.params;r[a]=e.target.value,j(Object(V.a)(Object(V.a)({},b),{},{params:r})),n&&n({selector:t,params:r,error:void 0,result:void 0})}})},"".concat(t.sigHash,"_").concat(a))}))})}(b.selector)]})}var Fe=Object(u.a)((function(e){return{stepper:{padding:0},form:Object(l.a)({display:"flex"},e.breakpoints.down("sm"),{minWidth:"initial"}),grow:{flexGrow:1},label:{marginTop:4,marginLeft:8},divider:{marginTop:14,marginBottom:14},abi_loading:{marginLeft:8},alert:{marginTop:8},btn:{marginRight:8}}}));function We(e){e.mode;var t=Fe(),n=Object(j.c)(),r=n.library,c=n.chainId,i=n.active,o=Object(a.useState)({value:"",isValid:!0,isLoading:!1,isDisabled:!1,type:void 0}),l=Object(s.a)(o,2),d=l[0],u=l[1],b=Object(a.useState)({abi:void 0,error:void 0,isLoading:!1}),p=Object(s.a)(b,2),h=p[0],O=p[1],g=Object(a.useState)({selector:void 0,params:[],error:void 0,result:void 0}),x=Object(s.a)(g,2),v=x[0],w=x[1],y=function(){var e=Object(je.a)(be.a.mark((function e(t){var n;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=re[c])||O({abi:void 0,error:"Etherscan does not support the network",isLoading:!1}),e.next=4,fetch("".concat(n,"api?module=contract&action=getabi&address=").concat(t,"&apikey=CW1N8TD93FUZMTI46EWNV7K6TRJS7C9HU2")).then((function(e){return e.json()})).then((function(e){var t=e.message,n=e.result;O("NOTOK"===t?{abi:void 0,error:n,isLoading:!1}:{abi:JSON.parse(n),error:void 0,isLoading:!1})})).catch((function(e){O({abi:void 0,error:e,isLoading:!1})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(je.a)(be.a.mark((function e(){var t,n,a;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.a.Contract(d.value,h.abi,r.getSigner()),e.prev=1,e.next=4,(n=t.callStatic)[v.selector].apply(n,Object(de.a)(v.params));case 4:a=e.sent,w(Object(V.a)(Object(V.a)({},v),{},{error:void 0,result:JSON.stringify(a)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(Object(V.a)(Object(V.a)({},v),{},{error:e.t0,result:void 0}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(je.a)(be.a.mark((function e(){var t,n,a;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.a.Contract(d.value,h.abi,r.getSigner()),e.prev=1,e.next=4,(n=t.estimateGas)[v.selector].apply(n,Object(de.a)(v.params));case 4:a=e.sent,w(Object(V.a)(Object(V.a)({},v),{},{error:void 0,result:a.toString()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(Object(V.a)(Object(V.a)({},v),{},{error:e.t0,result:void 0}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(je.a)(be.a.mark((function e(){var t,n,a;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.a.Contract(d.value,h.abi,r.getSigner()),e.prev=1,e.next=4,(n=t.functions)[v.selector].apply(n,Object(de.a)(v.params));case 4:a=e.sent,w(Object(V.a)(Object(V.a)({},v),{},{error:void 0,result:a.toString()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(Object(V.a)(Object(V.a)({},v),{},{error:e.t0,result:void 0}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(ke.a,{orientation:"vertical",className:t.stepper,children:[Object(z.jsxs)(Ne.a,{expanded:!0,completed:"Contract"===d.type,children:[Object(z.jsx)(Se.a,{children:"Contract"}),Object(z.jsxs)(Le.a,{children:[Object(z.jsxs)(pe.a,{className:t.form,children:[Object(z.jsx)(he.a,{label:"Address",variant:"outlined",size:"small",color:"primary",className:t.grow,fullWidth:!0,disabled:d.isDisabled||!i,defaultValue:d.value,error:!d.isValid,onChange:function(){var e=Object(je.a)(be.a.mark((function e(t){var n,a;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,!f.a.utils.isAddress(n)){e.next=13;break}return u({value:n,isValid:!0,isLoading:!0,isDisabled:!1,type:void 0}),e.next=5,r.getCode(n);case 5:if(a=e.sent,u({value:n,isValid:!0,isLoading:!1,isDisabled:"0x"!==a,type:"0x"!==a?"Contract":"EOA"}),"0x"===a){e.next=11;break}return O({abi:void 0,isLoading:!0}),e.next=11,y(n);case 11:e.next=14;break;case 13:u({value:n,isValid:!1,isLoading:!1,isDisabled:!1,type:void 0});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),helperText:d.isValid?"":"Incorrect address"}),d.isLoading&&Object(z.jsx)(fe.a,{color:"inherit",size:18,thickness:5}),d.type&&Object(z.jsx)(Oe.a,{variant:"outlined",color:"secondary",label:d.type,className:t.label})]}),"EOA"===d.type&&Object(z.jsx)(m.a,{severity:"warning",className:t.alert,children:"Externally Owned Account(EOA) not supported yet"}),"Contract"===d.type&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(me.a,{className:t.divider}),h.isLoading?Object(z.jsxs)(pe.a,{className:t.form,children:[Object(z.jsx)(fe.a,{color:"inherit",size:18,thickness:5}),Object(z.jsx)(L.a,{className:t.abi_loading,children:"Loading ABI from Etherscan"})]}):Object(z.jsxs)(z.Fragment,{children:[h.error&&Object(z.jsx)(m.a,{severity:"error",children:h.error}),h.abi&&Object(z.jsx)(he.a,{label:"ABI",variant:"outlined",color:"primary",defaultValue:JSON.stringify(h.abi,null," "),disabled:!0,multiline:!0,fullWidth:!0,maxRows:5})]})]})]})]}),Object(z.jsxs)(Ne.a,{expanded:h.abi,children:[Object(z.jsx)(Se.a,{children:"Transaction"}),Object(z.jsx)(Le.a,{children:h.abi&&Object(z.jsx)(Ie,{abi:h.abi,onUpdate:function(e){w(e)}})})]}),Object(z.jsxs)(Ne.a,{expanded:v.selector,children:[Object(z.jsx)(Se.a,{children:"Actions"}),Object(z.jsxs)(Le.a,{children:[Object(z.jsx)(T.a,{color:"primary",variant:"contained",className:t.btn,startIcon:Object(z.jsx)(xe.a,{}),onClick:C,disabled:!i,children:"Call"}),Object(z.jsx)(T.a,{color:"primary",variant:"contained",className:t.btn,startIcon:Object(z.jsx)(Ce.a,{}),onClick:k,disabled:!i,children:"Estimate"}),Object(z.jsx)(T.a,{color:"primary",variant:"contained",className:t.btn,startIcon:Object(z.jsx)(we.a,{}),onClick:N,disabled:!i,children:"Send"}),v.error&&Object(z.jsx)(m.a,{severity:"error",className:t.alert,children:v.error.message}),v.result&&Object(z.jsxs)(m.a,{severity:"info",className:t.alert,children:["Result: ",v.result]})]})]})]})})}var ze=n(256),Me=n(128),_e=n.n(Me),Ae=Object(u.a)((function(){return{footer:{alignItems:"center",background:"transparent",boxShadow:"none"}}}));function He(){var e=Ae();return Object(z.jsxs)(N.a,{position:"static",className:e.footer,children:[Object(z.jsx)(L.a,{variant:"body1",children:"Sometimes transactions are difficult, Buidltxn aims to help building transactions."}),Object(z.jsxs)(S.a,{children:[Object(z.jsx)(ze.a,{href:"//github.com/aquiladev/buidltxn",target:"_blank",rel:"noopener",children:Object(z.jsx)(U.a,{color:"default","aria-label":"GitHub repo",component:"span",children:Object(z.jsx)(_e.a,{fontSize:"default"})})}),Object(z.jsx)(Oe.a,{label:"main.4183c3",variant:"outlined"})]})]})}var Re=Object(d.a)({palette:{primary:{main:"#c0c0c0"}},overrides:{MuiFilledInput:{input:{paddingTop:"13px"}},MuiDialogActions:{root:{display:"block"}},MuiAlert:{message:{width:"100%",overflow:"scroll"}}}}),Be=Object(u.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",minHeight:"100%"},content:{paddingTop:e.spacing(16),paddingBottom:e.spacing(8),minHeight:100},paper:{padding:e.spacing(3)},title:Object(l.a)({fontSize:"1rem"},e.breakpoints.up("sm"),{fontSize:"1.5rem"}),grow:{flexGrow:1,paddingLeft:30}}}));function Ve(e){return console.error(e),e instanceof p.b?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof j.a?"You're connected to an unsupported network.":e instanceof p.c||e instanceof h.a?"Please authorize this website to access your Ethereum account.":"An unknown error occurred. Check the console for more details."}function De(e){return new f.a.providers.Web3Provider(e)}function Ge(){var e=Be(),t=Object(j.c)(),n=t.connector,r=t.error,c=Object(a.useState)(),i=Object(s.a)(c,2),o=i[0],l=i[1],d=Object(a.useState)("basic"),u=Object(s.a)(d,2),p=u[0],h=u[1];return Object(a.useEffect)((function(){o&&o===n&&l(void 0)}),[o,n]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(j.c)(),n=t.active,r=t.error,c=t.activate;Object(a.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!r&&!e){var a=function(){console.log("Handling 'connect' event"),c(y)},i=function(e){console.log("Handling 'chainChanged' event with payload",e),c(y)},o=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&c(y)},s=function(e){console.log("Handling 'networkChanged' event with payload",e),c(y)};return t.on("connect",a),t.on("chainChanged",i),t.on("accountsChanged",o),t.on("networkChanged",s),function(){t.removeListener&&(t.removeListener("connect",a),t.removeListener("chainChanged",i),t.removeListener("accountsChanged",o),t.removeListener("networkChanged",s))}}}),[n,r,e,c])}(!function(){var e=Object(j.c)(),t=e.activate,n=e.active,r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){y.isAuthorized().then((function(e){e?t(y,void 0,!0).catch((function(){o(!0)})):o(!0)}))}),[]),Object(a.useEffect)((function(){!i&&n&&o(!0)}),[i,n]),i}()||!!o),Object(z.jsx)(b.a,{theme:Re,children:Object(z.jsxs)("div",{className:e.root,children:[Object(z.jsx)(le,{changeMode:h}),Object(z.jsxs)(O.a,{maxWidth:"basic"===p?"sm":"md",className:e.content,children:[!!r&&Object(z.jsx)(m.a,{variant:"filled",severity:"error",style:{position:"fixed",zIndex:1200,bottom:10,left:10},children:Ve(r)}),Object(z.jsx)(g.a,{elevation:3,className:e.paper,children:Object(z.jsx)(We,{mode:p})})]}),Object(z.jsx)(He,{})]})})}var qe=function(){return Object(z.jsx)(j.b,{getLibrary:De,children:Object(z.jsx)(Ge,{})})},Je=function(){return Object(z.jsx)(qe,{})},Ue=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,860)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};o.a.initialize("UA-204830998-1"),o.a.pageview(window.location.pathname+window.location.search),i.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(Je,{})}),document.getElementById("root")),Ue()}},[[194,2,5]]]);
//# sourceMappingURL=main.7dad92a5.chunk.js.map