(this["webpackJsonpreact-linkedin-practices"]=this["webpackJsonpreact-linkedin-practices"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},336:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"trimNewline",(function(){return he}));var a=n(2),s=n(0),i=n.n(s),c=n(11),o=n.n(c),l=(n(119),n(47)),u=n(14),d=(n(120),n(17)),j=n(29),b=n(393),h=n(394),m=n(395),O=n(337),p=n(44),f=n(397),x=n(375),v=n(427),g=n(421),w=n(396),k=n(341),y=n(377),C=n(339),S=n(379),R=n(340),E=n(380),q=n(382),N=n(381),T=n(383),I=n(384),A=n(385),L=n(374),D=n(373),B=Object(D.a)({palette:{type:"light"}}),P=n(74),F={light:B,dark:Object(D.a)({palette:{type:"dark",primary:{main:"#26292C",light:"rgb(81, 91, 95)",dark:"rgb(26, 35, 39)",contrastText:"#ffffff"},secondary:{main:"#FFB74D",light:"rgb(255, 197, 112)",dark:"rgb(200, 147, 89)",contrastText:"rgba(0, 0, 0, 0.87)"},error:{main:P.a.A400}}})};var z=i.a.createContext({currentTheme:"light",setTheme:function(e){return console.log("setTheme function is null")}}),_=function(e){var t=e.children,n=localStorage.getItem("appTheme")||"light",r=Object(s.useState)(n),i=Object(d.a)(r,2),c=i[0],o=i[1],l=function(e){return F[e]}(c),u={currentTheme:c,setTheme:function(e){localStorage.setItem("appTheme",e),o(e)}};return Object(a.jsx)(z.Provider,{value:u,children:Object(a.jsx)(L.a,{theme:l,children:t})})},G=Object(x.a)((function(e){return Object(v.a)({toolbar:e.mixins.toolbar,navDrawer:Object(j.a)({},e.breakpoints.up("md"),{display:"none"})})})),W=function(e){var t=G(),n=e.openStatus,r=e.handleCloseDrawer,i=Object(u.g)(),c=Object(s.useContext)(z),o=c.currentTheme,l=c.setTheme,d=function(e){r(),i.push(e)};return Object(a.jsxs)(y.a,{anchor:"right",open:n,onClose:r,className:t.navDrawer,children:[Object(a.jsx)("div",{className:t.toolbar}),Object(a.jsxs)(C.a,{children:[Object(a.jsx)(S.a,{}),Object(a.jsxs)(R.a,{button:!0,onClick:function(){return d("/assessment-list")},children:[Object(a.jsx)(E.a,{children:Object(a.jsx)(N.a,{})}),Object(a.jsx)(q.a,{primary:"Assessment List"})]},"assessment"),Object(a.jsxs)(R.a,{button:!0,onClick:function(){return d("/about-me")},children:[Object(a.jsx)(E.a,{children:Object(a.jsx)(T.a,{})}),Object(a.jsx)(q.a,{primary:"About"})]},"about-me"),Object(a.jsx)(S.a,{}),Object(a.jsxs)(R.a,{children:[Object(a.jsx)(E.a,{children:Object(a.jsx)(k.a,{edge:"start",onClick:function(e){l("light"===o?"dark":"light")},children:"light"===o?Object(a.jsx)(I.a,{}):Object(a.jsx)(A.a,{})})}),Object(a.jsx)(q.a,{primary:"Dark Theme"})]},"switch-theme")]})]})},Q=n(13),M=n(387),U=n(388),J=n(75),H=n(389),$=n(390),K=n(391),V=n(392),X=n(386),Y=Object(x.a)((function(e){return Object(v.a)({settingButton:Object(j.a)({display:"none",textTransform:"none"},e.breakpoints.up("md"),{display:"flex"})})})),Z=function(){var e=Y(),t=Object(s.useContext)(z),n=t.currentTheme,r=t.setTheme,c=i.a.useState(!1),o=Object(d.a)(c,2),l=o[0],u=o[1],j=i.a.useRef(null),b=function(e){j.current&&j.current.contains(e.target)||u(!1)};function h(e){"Tab"===e.key&&(e.preventDefault(),u(!1))}var m=i.a.useRef(l),O=function(e){var t=!0===e.target.checked?"dark":"light";r(t)};return i.a.useEffect((function(){!0===m.current&&!1===l&&j.current.focus(),m.current=l}),[l]),Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(k.a,{ref:j,"aria-controls":l?"settings-list-grow":void 0,"aria-haspopup":"true",onClick:function(){u((function(e){return!e}))},className:e.settingButton,children:Object(a.jsx)(X.a,{})}),Object(a.jsx)(M.a,{open:l,anchorEl:j.current,role:void 0,transition:!0,disablePortal:!0,className:e.settingButton,children:function(e){var t=e.TransitionProps,r=e.placement;return Object(a.jsx)(U.a,Object(Q.a)(Object(Q.a)({},t),{},{style:{transformOrigin:"bottom"===r?"center top":"center bottom"},children:Object(a.jsx)(J.a,{children:Object(a.jsx)(H.a,{onClickAway:b,children:Object(a.jsx)($.a,{autoFocusItem:l,id:"settings-list-grow",onKeyDown:h,children:Object(a.jsxs)(K.a,{disableRipple:!0,style:{backgroundColor:"transparent"},children:[Object(a.jsx)(V.a,{checked:"light"!==n,onChange:O,name:"dark-theme-switch"}),Object(a.jsx)(p.a,{children:"Dark Theme"})]})})})})}))}})]})},ee=Object(x.a)((function(e){return Object(v.a)({tabItems:Object(j.a)({display:"none",textTransform:"none"},e.breakpoints.up("md"),{display:"flex"}),navDrawerButton:Object(j.a)({},e.breakpoints.up("md"),{display:"none"})})}));var te,ne=function(){var e,t=Object(u.g)(),n=ee(),r=window.location.href.includes("/about")?1:0,c=Object(s.useState)(r),o=Object(d.a)(c,2),l=o[0],j=o[1],x=Object(s.useState)(!1),v=Object(d.a)(x,2),y=v[0],C=v[1],S=Object(b.a)();return Object(s.useEffect)((function(){t.listen((function(e,t){console.log(e.pathname),e.pathname.includes("/assessment-list")?j(0):e.pathname.includes("/about")&&j(1)}))}),[t]),Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(O.a,{appear:!1,direction:"down",in:!S,children:Object(a.jsx)(h.a,{children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)(p.a,{variant:"h6",children:"LinkedIn Practice Assessment"}),Object(a.jsx)("div",{style:{flexGrow:1}}),Object(a.jsxs)(g.a,{value:l,onChange:function(e,t){j(t)},className:n.tabItems,children:[Object(a.jsx)(w.a,{label:"Assessment List",onClick:function(){return t.push("/assessment-list")}}),Object(a.jsx)(w.a,{label:"About",onClick:function(){return t.push("/about")}})]}),Object(a.jsx)(Z,{}),Object(a.jsx)(k.a,{className:n.navDrawerButton,onClick:(e=!0,function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&C(e)}),children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(W,{openStatus:y,handleCloseDrawer:function(){return C(!1)}})]})})})})},re=n(398),ae=n(399),se=n(428),ie=n(402),ce=n(425),oe=n(422),le=n(403),ue=n(404),de=n(58),je=n.n(de),be=n(82),he=function(e){return e.toString().replace(/^\n+|\n+$/g,"")},me=function(){var e=Object(be.a)(je.a.mark((function e(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/master/README.md",e.abrupt("return",fetch("https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/master/README.md").then((function(e){return e.text().then((function(e){var t=e.match(/\| \[Adobe(.|\n)*\|/g);if(null!=t){var n=(t=t[0].split("\n")).map((function(e){var t,n=(e.match(/\[(.*)\]/i)||[void 0,void 0])[1],r=(e.match(/\[.*\]\((.*)\)/)||[void 0,void 0])[1],a=parseInt((e.match(/=>(.*)questions/i)||["0","0"])[1]),s=null===(t=(e.match(/questions\s+\|(.*)\s+\|/)||[void 0,void 0])[1])||void 0===t?void 0:t.trim();return{title:n,link:r=void 0!==r?"https://raw.githubusercontent.com/Ebazhanov/in-quiz-questions/master/"+r.replace(/<|>/g,""):void 0,numQuestions:a,assessmentStatus:s}}));return n=n.filter((function(e){return e.title&&["with answers","partially answered"].includes(e.assessmentStatus||"")})),localStorage.setItem("assessmentInfos",JSON.stringify(n)),n}throw alert("Failed to parse list of assessment."),new Error("Failed to parse list of assessment.")}))})).catch((function(e){})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(be.a)(je.a.mark((function e(t){var n,r,a,s;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.link){e.next=19;break}return e.next=3,fetch(t.link);case 3:return e.next=5,e.sent.text();case 5:if(n=e.sent,r=t.link.split("/").slice(0,-1).join("/"),0!==(a=ke(n,r)).length){e.next=10;break}throw new Error("Failed to partition question.");case 10:if(0!==(s=a.map(fe).filter(pe)).length){e.next=15;break}throw new Error("No question parsed for ".concat(t.title,"."));case 15:localStorage.setItem(t.title||"default_title",JSON.stringify({assessmentInfo:t,questionSets:s}));case 16:return e.abrupt("return",{assessmentInfo:t,questionSets:s});case 19:throw new Error("Link to Question for ".concat(t.title," not found."));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(e){return e.answer.length>0&&e.choice.length>3},fe=function(e){var t=e.split(/(?<=\s{0,1}\n)/g)||[];if(0===t.length)throw new Error("Failed to break down question");var n="default question",a=-1;t.some((function(e,r){return!!e.match(/-\s{0,1}\[[x{0,1}|\s]\]/i)&&(n=t.slice(0,r).join(""),a=r,!0)})),n=r.trimNewline(n);var s=t.slice(a).join(""),i=xe(s);return Object(Q.a)({question:n},i)},xe=function(e){var t=e.trim().split(/(?=-\s{0,1}\[[x{0,1}|\s]\])/gi),n=ge(t),r=we(t),a=ve(t),s=r[t.length-1].replace(a||"","");return r[t.length-1]=s,{choice:r,answer:n,detail:a}},ve=function(e){var t=(e=e.map(r.trimNewline))[e.length-1].match(/\n{2,}.*$/g),n=t?t[0]:"";return""===n&&e.some((function(e){var t=e.match(/<{2,3}-{0,3}\s{0,1}CORRECT.*/i);return!!t&&(n=t[0].replace(/<{2,3}-{0,3}\s{0,1}CORRECT/i,""),!0)})),""!==n?r.trimNewline(n):void 0},ge=function(e){var t=e.map((function(e){return!!e.match(/\[x\]/i)}));return(t=!1===t.includes(!0)?e.map((function(e){return!!e.match(/<{2,3}-{0,3}\s{0,1}CORRECT/i)})):t).map((function(e,t){return e?t:-1})).filter((function(e){return-1!==e}))},we=function(e){var t=e.map((function(e){return e.replace(/-\s{0,1}\[[x{0,1}|\s]\]/gi,"")}));return(t=(t=t.map((function(e){return e.replace(/<{2,3}-{0,3}\s{0,1}CORRECT.*/gi,"")}))).map((function(e){return e.replace(/<{2,3}-{0,3}\s{0,1}WRONG.*/gi,"")}))).map(r.trimNewline)},ke=function(e,t){var n=(e.match(/#{3,5}\s{0,1}Q{0,1}\.{0,1}\s{0,1}\d+(.|\n)*/g)||[void 0])[0];if(n){var r=n.split(/(?=#{3,5}\s{0,1}Q{0,1}\.{0,1}\s{0,1}\d+\.{0,1})/g).filter((function(e){return e.length>4}));return r=r.map((function(e){var n=e.match(/\[.*]\(((?!https).*)\)/);if(n){var r=n[0].replace("(","("+t+"/");return e=e.replace(/\[.*]\(((?!https).*)\)/,r)}return e}))}return[]},ye=Object(x.a)((function(e){return Object(v.a)({upperBgDiv:{display:"flex",height:"5vh",width:"100%",backgroundColor:e.palette.secondary.main,backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover",justifyContent:"center",minHeight:"300px"},btmBgDiv:{display:"flex",width:"100%",justifyContent:"center",minHeight:"600px",marginTop:-80},assessmentItem:{height:"6vh"},itemListTextSecondary:Object(j.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"})})})),Ce=function(){var e=ye(),t=Object(u.g)(),n=Object(s.useState)(void 0),r=Object(d.a)(n,2),c=r[0],o=r[1],l=Object(s.useState)({search:"",assessmentStatus:""}),j=Object(d.a)(l,2),b=j[0],h=j[1];Object(s.useEffect)((function(){me().then((function(e){o(e)})).catch((function(e){return alert(e)}))}),[]);var m=null===c||void 0===c?void 0:c.filter((function(e){var t,n;return(null===(t=e.title)||void 0===t?void 0:t.toLowerCase().includes(b.search))&&(null===(n=e.assessmentStatus)||void 0===n?void 0:n.toLowerCase().includes(b.assessmentStatus))}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:e.upperBgDiv}),Object(a.jsx)("div",{className:e.btmBgDiv,children:Object(a.jsxs)(J.a,{elevation:3,style:{width:"85vw"},children:[Object(a.jsx)("div",{style:{height:"2vh"}}),Object(a.jsx)(p.a,{variant:"h3",style:{margin:16},children:"LinkedIn Assessment Practice List"}),Object(a.jsx)(p.a,{variant:"h5",style:{margin:16},children:Object(a.jsx)(re.a,{color:"textSecondary",href:"https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes",children:"LinkedIn assessment practices from GitHub"})}),Object(a.jsx)(S.a,{}),Object(a.jsxs)(ae.a,{container:!0,spacing:1,children:[Object(a.jsx)(ae.a,{item:!0,xs:1}),Object(a.jsx)(ae.a,{item:!0,xs:6,children:Object(a.jsx)(se.a,{id:"outlined-full-width",label:"Search",placeholder:"type here...",helperText:"Search Assessment",onChange:function(e){h(Object(Q.a)(Object(Q.a)({},b),{},{search:e.target.value}))},margin:"normal",InputLabelProps:{shrink:!0},style:{marginLeft:"1%"},variant:"outlined",fullWidth:!0})}),Object(a.jsx)(ae.a,{item:!0,xs:4,children:Object(a.jsxs)(ie.a,{variant:"outlined",margin:"normal",style:{width:"90%"},children:[Object(a.jsx)(ce.a,{htmlFor:"outlined-age-native-simple",children:"Status"}),Object(a.jsxs)(oe.a,{native:!0,label:"Status",inputProps:{name:"age",id:"outlined-age-native-simple"},onChange:function(e){"string"===typeof(e.target.value||"")&&h(Object(Q.a)(Object(Q.a)({},b),{},{assessmentStatus:e.target.value}))},children:[Object(a.jsx)("option",{"aria-label":"None",value:""}),Object(a.jsx)("option",{value:"with answer",children:"with answers"}),Object(a.jsx)("option",{value:"partially answered",children:"partially answered"}),Object(a.jsx)("option",{value:"answers required",children:"answers required"})]})]})}),Object(a.jsx)(ae.a,{item:!0,xs:1})]}),m?Object(a.jsx)(le.a,{maxWidth:"sm",style:{border:"1px solid rgb(212, 212, 212)",borderRadius:25},children:Object(a.jsx)(C.a,{component:"nav",children:m.map((function(n,r){return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)(R.a,{divider:!0,button:!0,disableRipple:!0,className:e.assessmentItem,style:0===r?{borderTopLeftRadius:15,borderTopRightRadius:15}:r===m.length-1?{borderBottomLeftRadius:15,borderBottomRightRadius:15}:{borderRadius:0},children:[Object(a.jsx)(q.a,{inset:!0,primary:n.title,secondary:Object(a.jsx)("span",{className:e.itemListTextSecondary,children:"".concat(n.numQuestions," questions ").concat(n.assessmentStatus)})}),Object(a.jsx)(k.a,{onClick:function(){return t.push("/practice/".concat(n.title))},children:Object(a.jsx)(ue.a,{})})]})},n.title)}))})}):null]})})]})},Se=n(412),Re=n(414),Ee=n(415),qe=n(416),Ne=n(413),Te=n(83);!function(e){e.NEUTRAL="NEUTRAL",e.CORRECT="CORRECT",e.WRONG="WRONG",e.SELECTED="SELECTED"}(te||(te={}));var Ie=s.createContext(void 0),Ae=s.createContext(void 0),Le={questionSets:[],curr_session:[]},De=function(e,t){switch(t.type){case"selectChoices":var n=e.curr_session;return n[t.questionIdx].selected=t.selectedIdx,n[t.questionIdx].status=te.SELECTED,Object(Q.a)(Object(Q.a)({},e),{},{curr_session:n});case"submitAnswer":var r=e.curr_session,a=r[t.questionIdx];return a.selected=t.selectedIdx,!function(e,t){var n,r={},a=Object(Te.a)(e);try{for(a.s();!(n=a.n()).done;){var s=n.value;r[s+typeof s]=1}}catch(d){a.e(d)}finally{a.f()}var i,c=Object(Te.a)(t);try{for(c.s();!(i=c.n()).done;){var o=i.value,l=o+typeof o;if(!r[l])return!1;r[l]=2}}catch(d){c.e(d)}finally{c.f()}for(var u in r)if(1===r[u])return!1;return!0}(a.answer,a.selected)?a.status=te.WRONG:a.status=te.CORRECT,r[t.questionIdx]=a,Object(Q.a)(Object(Q.a)({},e),{},{curr_session:r});case"changePractice":var s=t.questionSets.map((function(e){return{status:te.NEUTRAL,answer:e.answer,selected:null}}));return Object(Q.a)(Object(Q.a)({},e),{},{questionSets:t.questionSets,curr_session:s});default:throw new Error("Unhandled action type")}},Be=function(e){var t=e.children,n=s.useReducer(De,Le),r=Object(d.a)(n,2),i=r[0],c=r[1];return Object(a.jsx)(Ie.Provider,{value:i,children:Object(a.jsx)(Ae.Provider,{value:c,children:t})})},Pe=function(){var e=s.useContext(Ae);if(void 0===e)throw new Error("usePracticeDispatch must be used within a PracticeProvider");return e},Fe=n(405),ze=n(406),_e=n(424),Ge=n(407),We=n(423),Qe=n(408),Me=n(409),Ue=n(411),Je=n(410),He=n(97),$e=n(95),Ke=n(5),Ve=n(96),Xe=n.n(Ve),Ye=function(e){return Object(v.a)({listItem:{marginTop:e.spacing(1)},markdownItem:{backgroundColor:"transparent",textAlign:"left",width:"100%"},markdownLink:{color:e.palette.secondary.dark}})},Ze=Object(x.a)(Ye),et=function(e){return{overrides:{h1:{component:p.a,props:{gutterBottom:!0,variant:"h5"}},h2:{component:p.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:p.a,props:{gutterBottom:!0,variant:"subtitle1",style:{margin:"0.35em"}}},h4:{component:p.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:p.a,props:{paragraph:!0,style:{margin:"0.35em"}}},a:{component:re.a,props:{className:e.markdownLink,rel:"noopener noreferrer",target:"_blank"}},li:{component:Object(Ke.a)(Ye)((function(e){var t=e.classes,n=Object(He.a)(e,["classes"]);return Object(a.jsx)("li",{className:t.listItem,children:Object(a.jsx)(p.a,Object(Q.a)({component:"span"},n))})}))},img:{props:{style:{maxWidth:"100%"}}},code:{props:{style:{marginRight:"1vw"}}}}}};function tt(e){var t=Ze(),n=Object(s.useRef)(null),r=Object(s.useContext)(z).currentTheme;return Object(s.useEffect)((function(){var e,t,a,s,i,c,o,l,u;"light"===r?(null===(t=document)||void 0===t||null===(a=t.querySelector('link[title="light"]'))||void 0===a||a.removeAttribute("disabled"),null===(s=document)||void 0===s||null===(i=s.querySelector('link[title="dark"]'))||void 0===i||i.setAttribute("disabled","disabled")):(null===(c=document)||void 0===c||null===(o=c.querySelector('link[title="dark"]'))||void 0===o||o.removeAttribute("disabled"),null===(l=document)||void 0===l||null===(u=l.querySelector('link[title="light"]'))||void 0===u||u.setAttribute("disabled","disabled"));null===n||void 0===n||null===(e=n.current)||void 0===e||e.querySelectorAll("pre code").forEach((function(e){Xe.a.highlightBlock(e)}))}),[n,r]),Object(a.jsx)("div",{className:t.markdownItem,ref:n,children:Object(a.jsx)($e.a,Object(Q.a)({options:et(t)},e))})}var nt=Object(x.a)((function(e){return Object(v.a)({root:{display:"flex",flexWrap:"nowrap"},labelroot:{margin:2,marginRight:0},label:{overflow:"auto",marginRight:0,width:"100%"},correctChoice:{backgroundColor:e.palette.success.main,borderRadius:20},wrongChoice:{backgroundColor:e.palette.error.main,borderRadius:20}})})),rt=function(e){var t=nt(),n=e.questionSet,r=Object(s.useState)([]),i=Object(d.a)(r,2),c=i[0],o=i[1],l=Object(s.useState)(!1),u=Object(d.a)(l,2),j=u[0],b=u[1],h=Pe();return Object(a.jsxs)(Fe.a,{variant:"outlined",children:[Object(a.jsxs)(ze.a,{children:[Object(a.jsx)(tt,{children:n.question}),Object(a.jsx)(ie.a,{classes:{root:t.root},component:"fieldset",children:Object(a.jsx)(_e.a,{classes:{root:t.root},"aria-label":"choice",name:"choices",value:c.length>0?c[0]:null,onChange:function(t){var n=parseInt(t.target.value);o([n]),h({type:"selectChoices",questionIdx:e.questionNum,selectedIdx:c})},children:n.choice.map((function(e,r){var i={};return j&&(c.includes(r)&&!n.answer.includes(r)?i={className:t.wrongChoice}:n.answer.includes(r)&&(i={className:t.correctChoice})),Object(s.createElement)(Ge.a,Object(Q.a)(Object(Q.a)({},i),{},{disabled:j,classes:{root:t.labelroot,label:t.label},key:r,value:r,control:Object(a.jsx)(We.a,{}),label:Object(a.jsx)(tt,{children:e})}))}))})})]}),Object(a.jsx)(Qe.a,{children:Object(a.jsxs)(Me.a,{disabled:j,variant:"outlined",onClick:function(){b(!0),h({type:"submitAnswer",questionIdx:e.questionNum,selectedIdx:c})},"aria-expanded":j,"aria-label":"show answer.",children:[Object(a.jsx)(Je.a,{}),Object(a.jsx)("span",{style:{marginLeft:5},children:"Check Answer"})]})}),Object(a.jsx)(Ue.a,{in:j,timeout:"auto",unmountOnExit:!0,children:n.detail?Object(a.jsx)(ze.a,{children:Object(a.jsx)(tt,{children:n.detail})}):null})]})},at=n(19),st=n(420),it=Object(x.a)((function(e){return Object(v.a)({reviewQuestion:{fontWeight:"bolder","&:hover":{textDecoration:"underline",cursor:"pointer"}},correctResult:{height:10,backgroundColor:e.palette.success.main},wrongResult:{height:10,backgroundColor:e.palette.error.main},neutralResult:{height:10,backgroundColor:e.palette.grey[500]},resultIndicator:{display:"block",width:"100%",textAlign:"center"}})})),ct=function(e){var t=it();return Object(a.jsxs)("div",{style:{width:"".concat(e.percentage,"%")},children:[Object(a.jsx)("div",{className:e.className}),Object(a.jsx)("span",{className:t.resultIndicator,children:"".concat(e.percentage,"%")})]})},ot=function(e){var t=Object(at.a)(),n=it(),r=function(){var e=s.useContext(Ie);if(void 0===e)throw new Error("usePracticeState must be used within a PracticeProvider");return e}(),i=e.handleGotoQuestion,c=function(e){switch(e){case te.CORRECT:return t.palette.success.main;case te.WRONG:return t.palette.error.main;default:return t.palette.text.primary}},o=function(){var e=r.curr_session.length,t=r.curr_session.filter((function(e){return e.status===te.CORRECT})).length,s=r.curr_session.filter((function(e){return e.status===te.WRONG})).length,i=r.curr_session.filter((function(e){return e.status===te.NEUTRAL})).length,c=Math.round(t/e*100),o=Math.round(s/e*100),l=Math.round(i/e*100);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(st.a,{flexDirection:"row",marginBottom:5,children:[Object(a.jsx)(p.a,{variant:"body1",display:"block",children:"Correct: ".concat(t)}),Object(a.jsx)(p.a,{variant:"body1",display:"block",children:"Neutral: ".concat(i)}),Object(a.jsx)(p.a,{variant:"body1",display:"block",children:"Wrong: ".concat(s)})]}),Object(a.jsx)(p.a,{variant:"caption",align:"center",children:"Result Bar"}),Object(a.jsxs)("div",{style:{marginBottom:20,display:"flex"},children:[Object(a.jsx)(ct,{percentage:c,className:n.correctResult}),Object(a.jsx)(ct,{percentage:l,className:n.neutralResult}),Object(a.jsx)(ct,{percentage:o,className:n.wrongResult})]})]})};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o,{}),Object(a.jsx)(ae.a,{container:!0,spacing:5,justify:"center",alignItems:"flex-start",children:r.curr_session.map((function(e,t){return Object(a.jsx)(ae.a,{item:!0,xs:1,children:Object(a.jsx)(p.a,{className:n.reviewQuestion,style:{color:c(e.status)},variant:"button",onClick:function(){i("question-".concat(t))},children:t+1})},t)}))})]})},lt=Object(x.a)((function(e){return Object(v.a)({floatingButton:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"}})})),ut=function(){var e=lt(),t=Object(u.h)().title,n=Object(s.useState)(),r=Object(d.a)(n,2),c=r[0],o=r[1],l=Object(s.useState)(!1),j=Object(d.a)(l,2),b=j[0],h=j[1],m=Pe(),O=Object(s.useMemo)((function(){return(null===c||void 0===c?void 0:c.questionSets.reduce((function(e,t,n){return e["question-"+String(n)]=i.a.createRef(),e}),{}))||{}}),[null===c||void 0===c?void 0:c.questionSets]),p=function(){h(!b)},f=Object(s.useMemo)((function(){return Object(a.jsx)(C.a,{children:null===c||void 0===c?void 0:c.questionSets.map((function(e,t){return Object(a.jsx)(R.a,{style:{display:"block"},ref:O["question-"+String(t)],children:Object(a.jsx)(rt,{questionNum:t,questionSet:e})},t)}))})}),[null===c||void 0===c?void 0:c.questionSets,O]);return Object(s.useEffect)((function(){var e=localStorage.getItem(t);if(e){var n=JSON.parse(e);o(n),m({type:"changePractice",questionSets:(null===n||void 0===n?void 0:n.questionSets)||[]}),console.log("available in local storage")}else console.log("not available in local storage"),me().then((function(e){var n=null===e||void 0===e?void 0:e.filter((function(e){return e.title===t}))[0];n?Oe(n).then((function(e){o(e),m({type:"changePractice",questionSets:e.questionSets})})):alert("Fail to retrieve assessment")}))}),[t,m]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(le.a,{style:{marginTop:"74px"},children:c?f:Object(a.jsx)("p",{children:"LOADING"})}),Object(a.jsxs)(Se.a,{variant:"extended",onClick:p,className:e.floatingButton,color:"secondary","aria-label":"submit or check",children:[Object(a.jsx)(Ne.a,{}),"Review"]}),Object(a.jsxs)(Re.a,{open:b,"aria-labelledby":"qna-review-title","aria-details":"qna-review-details",onClose:p,style:{width:"90vw",height:"90vh"},children:[Object(a.jsx)(Ee.a,{id:"qna-review-title",children:"Questions and Answers Review"}),Object(a.jsx)(qe.a,{style:{padding:50,paddingTop:0,overflowX:"hidden"},children:Object(a.jsx)(ot,{handleGotoQuestion:function(e){var t;null===(t=O[e].current)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"center"}),h(!b)}})})]})]})},dt=n(417),jt=n(418),bt=function(){var e=Object(s.useState)(),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){fetch("https://raw.githubusercontent.com/wkm97/react-linkedin-practices/master/USEFUL_REFERENCE.md").then((function(e){e.text().then((function(e){return r(e)}))}))}),[]),Object(a.jsxs)(le.a,{style:{marginTop:84},children:[Object(a.jsx)(Fe.a,{style:{margin:20},children:Object(a.jsxs)(ze.a,{children:[Object(a.jsx)(p.a,{align:"left",variant:"h5",children:"Data Source:"}),Object(a.jsx)(p.a,{align:"left",variant:"body1",children:Object(a.jsx)(re.a,{color:"textSecondary",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes",children:"Linkedin Quiz Answers, Skill Assessments Test - Collected by Ebazhanov and Collaborators."})})]})}),Object(a.jsxs)(Fe.a,{style:{margin:20},children:[Object(a.jsxs)(ze.a,{children:[Object(a.jsxs)(st.a,{display:"flex",children:[Object(a.jsx)(p.a,{variant:"h5",children:"Project Repository:"}),Object(a.jsx)("div",{style:{flexGrow:1}}),Object(a.jsx)(Me.a,{variant:"outlined",onClick:function(){return window.open("https://github.com/wkm97/react-linkedin-practices/issues","_blank")},children:"Report Issues"})]}),Object(a.jsx)(p.a,{align:"left",variant:"body1",children:Object(a.jsx)(re.a,{color:"textSecondary",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/wkm97/react-linkedin-practices",children:"React LinkedIn Practices - Created by wkm97"})})]}),Object(a.jsxs)(Qe.a,{children:[Object(a.jsx)("div",{style:{flexGrow:1}}),Object(a.jsx)(Me.a,{onClick:function(){return window.open("https://github.com/wkm97/","_blank")},children:Object(a.jsx)(dt.a,{fontSize:"large"})}),Object(a.jsx)(Me.a,{onClick:function(){return window.open("https://www.linkedin.com/in/wkm97/","_blank")},children:Object(a.jsx)(jt.a,{fontSize:"large"})})]})]}),Object(a.jsx)(Fe.a,{style:{margin:20},children:Object(a.jsx)(ze.a,{children:n?Object(a.jsx)(tt,{align:"left",children:n}):Object(a.jsx)("div",{})})})]})};var ht=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(ne,{}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(u.a,{to:"/assessment-list"})}}),Object(a.jsx)(u.b,{exact:!0,path:"/assessment-list",children:Object(a.jsx)(Ce,{})}),Object(a.jsx)(u.b,{path:"/practice/:title",children:Object(a.jsx)(Be,{children:Object(a.jsx)(ut,{})})}),Object(a.jsx)(u.b,{exact:!0,path:"/about",children:Object(a.jsx)(bt,{})})]})]})})},mt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,430)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))},Ot=n(419);o.a.render(Object(a.jsxs)(_,{children:[Object(a.jsx)(Ot.a,{}),Object(a.jsx)(ht,{})]}),document.getElementById("root")),mt()}},[[336,1,2]]]);
//# sourceMappingURL=main.52d3c14a.chunk.js.map