(this["webpackJsonpola-website"]=this["webpackJsonpola-website"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(12),i=n.n(r),c=(n(64),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),r(e),i(e)}))}),l=n(117),s=n(118),d=n(8),p=n(34),b="#211f33",m="#fffffe",u="#feb276",g="#80dae3",j="#5053d4",f=n(10),h=n(22),x=n(54),O=n(122),k=n(123),y=n(42),v=n.n(y),C=n(2),w=Object(l.a)((function(e){return{headerButtonLike:{display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer",padding:"0.665rem",fontSize:"12px",fontWeight:600,letterSpacing:"1px",textTransform:"none",backgroundColor:v.a.rgb(e.palette.background.default).lighten(.3).hex(),border:"3px solid ".concat(e.palette.background.default),borderRadius:"5%","&:hover":{borderColor:v.a.rgb(e.palette.background.default).lighten(.9).hex(),backgroundColor:e.palette.background.default,color:e.palette.primary.light}},tokenIcon:{marginLeft:"0.25rem",height:"1.25rem",width:"1.25rem",minHeight:"1.25rem",minWidth:"1.25rem"},icon:{flexShrink:0,display:"inline-block",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",borderRadius:"50%"}}})),L=a.a.memo((function(e){var t=w(),n=(Object(x.a)(),e.text),o=e.comment,a=e.onClick,r=e.assetSymbol,i=e.className,c=Object(h.a)(e,["text","comment","onClick","assetSymbol","className"]),l=r?"url(".concat("/demo","/tokens/asset_").concat(r,".svg)"):void 0;return Object(C.jsx)(O.a,{in:!0,timeout:500,children:Object(C.jsxs)("div",Object(f.a)(Object(f.a)({className:Object(d.a)([t.headerButtonLike,i]),onClick:a},c),{},{children:[Object(C.jsxs)(k.a,{variant:"body2",children:[n,o&&Object(C.jsx)(k.a,{component:"span",variant:"body2",style:{color:"#E53170"},children:" (".concat(o,")")})]}),r&&Object(C.jsx)("div",{className:Object(d.a)(t.tokenIcon,t.icon),style:{backgroundImage:l}})]}))})})),N=Object(l.a)((function(e){return{contentContainer:{margin:"0 auto",paddingRight:"1.33rem",paddingLeft:"1.33rem",maxWidth:"82rem"}}})),S=a.a.memo((function(e){var t=e.children,n=Object(h.a)(e,["children"]),o=N();return Object(C.jsx)("div",Object(f.a)(Object(f.a)({className:o.contentContainer},n),{},{children:t}))})),D="https://app.ola.finance",R=Object(l.a)((function(e){return{header:{padding:"1rem 0",height:"".concat(50,"px")},alignedRow:{display:"flex",flexDirection:"row",alignItems:"center"},logoLink:{maxHeight:"".concat(50,"px"),height:"".concat(1,"px"),width:"100%",padding:"1rem",backgroundImage:"url(".concat("/demo","/assets/ola_symbol_clear.png)"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundColor:"transparent",transition:"200ms",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{transform:"scale(1.1)"}},logoSpan:{height:"50px",width:"100%",backgroundImage:"url(".concat("/demo","/assets/ola_symbol_clear.png)"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundColor:"transparent"},lnLinkText:{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"1rem",minWidth:127,height:"".concat(50,"px"),color:m,textDecoration:"none",fontSize:"1.2rem",textAlign:"center",transition:"200ms","&:hover":{fontSize:21}},actions:{minHeight:"3rem",justifyContent:"flex-end",color:m},tokenBalance:{display:"flex",alignItems:"center",letterSpacing:"1px",textTransform:"none"},spaceFromRight:{marginRight:"0.25rem"},wantedChain:{}}})),I=Object(p.b)((function(e){var t=R(),n=a.a.useCallback((function(){window.open(D,"_blank")}),[]);return Object(C.jsx)("header",{className:t.header,children:Object(C.jsx)(S,{children:Object(C.jsxs)(s.a,{container:!0,direction:"row",alignItems:"center",children:[Object(C.jsx)(s.a,{item:!0,xs:3,className:t.alignedRow}),Object(C.jsx)(s.a,{item:!0,xs:3}),Object(C.jsx)(s.a,{className:Object(d.a)(t.alignedRow,t.actions),item:!0,xs:6,children:Object(C.jsx)(L,{text:"Go to app",onClick:n,className:t.spaceFromRight})})]})})})})),B=n(15),T=n(119),A=n(56),_=Object(l.a)((function(e){var t;return{actionDiv:{height:"15rem",width:"15rem",display:"flex",flexWrap:"nowrap",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:e.spacing(2),cursor:"pointer",borderRadius:"50%",backgroundColor:b,color:m,transition:"300ms",borderWidth:"4px",borderStyle:"solid",tapHighlightColor:"transparent",position:"relative",overflow:"hidden",opacity:0,animation:"$appear 2500ms forwards","--restingLinkBorderColor":b,boxShadow:"0 0 5px var(--actionColor)","&:hover":(t={},Object(B.a)(t,e.breakpoints.up("sm"),{"--linkBorderColor":"var(--actionColor)",boxShadow:"0 0 20px var(--actionColor)"}),Object(B.a)(t,"color","var(--actionColor)"),Object(B.a)(t,"--restingLinkBorderColor","var(--actionColor)"),t),userSelect:"none"},purpleDiv:{"--actionColor":j,borderColor:j},orangeDiv:{"--actionColor":u,borderColor:"var(--actionColor)"},cyanDiv:{"--actionColor":g,borderColor:g},socialIconsContainer:Object(B.a)({display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",bottom:e.spacing(3),position:"absolute"},e.breakpoints.down("sm"),{bottom:e.spacing(1.5)}),socialIcon:{transition:"300ms, border 600ms",borderRadius:"50%",width:"100px","&:hover":{backgroundColor:"var(--linkBorderColor)"}},textAction:{transition:"300ms",borderRadius:"20%",width:"fit-content",padding:"0.5rem",margin:"0.1rem","&:hover":{backgroundColor:"var(--linkBorderColor)",color:b}},rippleSpan:{position:"absolute",borderRadius:"50%",transform:"scale(0)",animation:"$ripple 600ms linear"},rippleOrange:{backgroundColor:u},rippleBlue:{backgroundColor:j},rippleCyan:{backgroundColor:g},"@keyframes ripple":{to:{transform:"scale(4)",opacity:0}},"@keyframes appear":{from:{opacity:0},to:{opacity:1}}}})),E=a.a.memo((function(e){var t=_(),n=e.title,a=e.message,r=e.socialLinks,i=e.directLinks,c=e.color,l=e.onClick,s=e.className,p=Object(h.a)(e,["title","message","socialLinks","directLinks","color","onClick","className"]);console.log({color:c});var b="ORANGE"===c,u="CYAN"===c,g="BLUE"===c,j=Object(x.a)(),O=b?t.orangeDiv:u?t.cyanDiv:g?t.purpleDiv:void 0,y=Object(o.useRef)(null),v=Object(T.a)(j.breakpoints.down("sm")),w=Object(o.useCallback)((function(e){var n=e.currentTarget,o=document.createElement("span"),a=Math.max(n.clientWidth,n.clientHeight),r=a/2,i=function(e){var t=0,n=0;for(;e;){if("BODY"===e.tagName){var o=e.scrollLeft||document.documentElement.scrollLeft,a=e.scrollTop||document.documentElement.scrollTop;t+=e.offsetLeft-o+e.clientLeft,n+=e.offsetTop-a+e.clientTop}else t+=e.offsetLeft-e.scrollLeft+e.clientLeft,n+=e.offsetTop-e.scrollTop+e.clientTop;e=e.offsetParent}return{x:t,y:n}}(n);o.style.width=o.style.height="".concat(a,"px"),o.style.left="".concat(e.clientX-(i.x+r),"px"),o.style.top="".concat(document.body.scrollTop+e.clientY-(i.y+r),"px"),o.classList.add(t.rippleSpan),o.classList.add("ripple");var c=b?t.rippleOrange:u?t.rippleCyan:g?t.rippleBlue:"";o.classList.add(c);var s=n.getElementsByClassName("ripple")[0];s&&s.remove(),n.appendChild(o),l&&l()}),[t.rippleBlue,t.rippleCyan,t.rippleOrange,t.rippleSpan,g,u,v,b,l]);return Object(C.jsxs)("div",Object(f.a)(Object(f.a)({className:Object(d.a)([t.actionDiv,O,s]),ref:y,onClick:w},p),{},{children:[Object(C.jsx)(k.a,{variant:"h4",children:n}),Object(C.jsx)(k.a,{style:{color:m},children:a}),Object(C.jsxs)("div",{className:t.socialIconsContainer,children:[null===r||void 0===r?void 0:r.map((function(e){return Object(C.jsx)(A.SocialIcon,{url:e,bgColor:"transparent",fgColor:m,className:t.socialIcon},e)})),null===i||void 0===i?void 0:i.map((function(e){return Object(C.jsxs)("div",{onClick:function(){return window.open(e.url,"_blank")},className:t.textAction,children:[" ",e.title]},"".concat(e.title,"_").concat(e.url))}))]})]}))}));var F=Object(l.a)((function(e){return{root:{height:"100%",padding:e.spacing(2),textAlign:"center",color:"#ECF3FF"},logoSpan:{height:"8rem",backgroundImage:"url(".concat("/demo","/assets/ola_symbol_clear.png)"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundColor:"transparent",backgroundPosition:"center",marginRight:"auto",marginLeft:"auto",animation:"$appear 2500ms forwards"},circlesDiv:{display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",width:"calc(min(80rem, 100%))"},mainText:{opacity:0,animation:"$appear 2500ms forwards"},"@keyframes appear":{from:{opacity:0},to:{opacity:1}}}})),W=a.a.memo((function(e){var t=F();a.a.useCallback((function(){window.open(D,"_blank")}),[]);return Object(C.jsx)(S,{style:{height:"100%"},children:Object(C.jsxs)("div",{className:t.root,children:[Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("div",{className:t.logoSpan}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:t.mainText,children:[Object(C.jsx)(k.a,{variant:"h3",style:{fontFamily:"Aeonik, Sans-serif",fontWeight:"bold"},children:"A decentralized protocol for"}),Object(C.jsx)(k.a,{variant:"h3",style:{fontFamily:"Aeonik, Sans-serif",fontWeight:"bold"},children:"programmable lending"})]}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:t.circlesDiv,children:[Object(C.jsx)(E,{color:"ORANGE",title:"Learn",message:"About Ola finance",socialLinks:["https://olafinance.gitbook.io/ola-finance/"],style:{animationDelay:"".concat(.1,"s")}}),Object(C.jsx)(E,{color:"CYAN",title:"Earn",message:"APY% for your crypto",directLinks:[{title:"Go to app",url:"".concat(D,"/fuse")}],style:{animationDelay:"".concat(.1+.2,"s")}}),Object(C.jsx)(E,{color:"BLUE",title:"Join",message:"Our community",socialLinks:["https://telegram.me/ola_finance","https://twitter.com/ola_finance"],style:{animationDelay:"".concat(.5,"s")}})]})]})})})),z=Object(l.a)((function(e){return{app:{height:"100%",background:"linear-gradient(0deg, #3c3ea6 0%, rgba(33,31,51,1) 100%)"},main:{}}}));var P=function(){var e=z();return Object(C.jsxs)("div",{className:e.app,children:[Object(C.jsx)(I,{}),Object(C.jsx)("main",{className:e.main,children:Object(C.jsx)(W,{})})]})},H=n(121),Y=n(120),G=n(58),$=n.n(G),J=n(57),M=n.n(J)()($()({palette:{primary:{main:"#83dbe3"},secondary:{main:j},text:{primary:"#2e2f3e"},background:{default:b}}})),U=a.a.memo((function(e){return Object(C.jsx)(p.a,{children:Object(C.jsx)(H.b,{injectFirst:!0,children:Object(C.jsx)(Y.a,{theme:M,children:Object(C.jsx)(P,{})})})})}));i.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(U,{})}),document.getElementById("root")),c()},64:function(e,t,n){}},[[104,1,2]]]);