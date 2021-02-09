(this["webpackJsonpreact-linkedin-practices"]=this["webpackJsonpreact-linkedin-practices"]||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},336:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"trimNewline",(function(){return fe}));var a=n(2),s=n(0),c=n.n(s),i=n(11),o=n.n(i),l=(n(119),n(47)),u=n(14),d=(n(120),n(17)),j=n(29),b=n(393),h=n(394),m=n(395),O=n(337),p=n(44),f=n(397),x=n(375),v=n(427),g=n(421),w=n(396),k=n(341),y=n(377),S=n(339),C=n(379),R=n(340),T=n(380),E=n(382),q=n(381),N=n(383),I=n(384),L=n(385),A=n(374),B=n(373),D=Object(B.a)({palette:{type:"light"}}),P=n(74),F={light:D,dark:Object(B.a)({palette:{type:"dark",primary:{main:"#26292C",light:"rgb(81, 91, 95)",dark:"rgb(26, 35, 39)",contrastText:"#ffffff"},secondary:{main:"#FFB74D",light:"rgb(255, 197, 112)",dark:"rgb(200, 147, 89)",contrastText:"rgba(0, 0, 0, 0.87)"},error:{main:P.a.A400}}})};var _=c.a.createContext({currentTheme:"light",setTheme:function(e){return console.log("setTheme function is null")}}),z=function(e){var t=e.children,n=localStorage.getItem("appTheme")||"light",r=Object(s.useState)(n),c=Object(d.a)(r,2),i=c[0],o=c[1],l=function(e){return F[e]}(i),u={currentTheme:i,setTheme:function(e){localStorage.setItem("appTheme",e),o(e)}};return Object(a.jsx)(_.Provider,{value:u,children:Object(a.jsx)(A.a,{theme:l,children:t})})},G="/react-linkedin-practices",Q="".concat(G,"/assessment-list"),W="".concat(G,"/about"),M="".concat(G,"/practice"),U=Object(x.a)((function(e){return Object(v.a)({toolbar:e.mixins.toolbar,navDrawer:Object(j.a)({},e.breakpoints.up("md"),{display:"none"})})})),J=function(e){var t=U(),n=e.openStatus,r=e.handleCloseDrawer,c=Object(u.g)(),i=Object(s.useContext)(_),o=i.currentTheme,l=i.setTheme,d=function(e){r(),c.push(e)};return Object(a.jsxs)(y.a,{anchor:"right",open:n,onClose:r,className:t.navDrawer,children:[Object(a.jsx)("div",{className:t.toolbar}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)(C.a,{}),Object(a.jsxs)(R.a,{button:!0,onClick:function(){return d(Q)},children:[Object(a.jsx)(T.a,{children:Object(a.jsx)(q.a,{})}),Object(a.jsx)(E.a,{primary:"Assessment List"})]},"assessment"),Object(a.jsxs)(R.a,{button:!0,onClick:function(){return d(W)},children:[Object(a.jsx)(T.a,{children:Object(a.jsx)(N.a,{})}),Object(a.jsx)(E.a,{primary:"About"})]},"about"),Object(a.jsx)(C.a,{}),Object(a.jsxs)(R.a,{children:[Object(a.jsx)(T.a,{children:Object(a.jsx)(k.a,{edge:"start",onClick:function(e){l("light"===o?"dark":"light")},children:"light"===o?Object(a.jsx)(I.a,{}):Object(a.jsx)(L.a,{})})}),Object(a.jsx)(E.a,{primary:"Dark Theme"})]},"switch-theme")]})]})},H=n(13),$=n(387),K=n(388),X=n(75),Y=n(389),V=n(390),Z=n(391),ee=n(392),te=n(386),ne=Object(x.a)((function(e){return Object(v.a)({settingButton:Object(j.a)({display:"none",textTransform:"none"},e.breakpoints.up("md"),{display:"flex"})})})),re=function(){var e=ne(),t=Object(s.useContext)(_),n=t.currentTheme,r=t.setTheme,i=c.a.useState(!1),o=Object(d.a)(i,2),l=o[0],u=o[1],j=c.a.useRef(null),b=function(e){j.current&&j.current.contains(e.target)||u(!1)};function h(e){"Tab"===e.key&&(e.preventDefault(),u(!1))}var m=c.a.useRef(l),O=function(e){var t=!0===e.target.checked?"dark":"light";r(t)};return c.a.useEffect((function(){!0===m.current&&!1===l&&j.current.focus(),m.current=l}),[l]),Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(k.a,{ref:j,"aria-controls":l?"settings-list-grow":void 0,"aria-haspopup":"true",onClick:function(){u((function(e){return!e}))},className:e.settingButton,children:Object(a.jsx)(te.a,{})}),Object(a.jsx)($.a,{open:l,anchorEl:j.current,role:void 0,transition:!0,disablePortal:!0,className:e.settingButton,children:function(e){var t=e.TransitionProps,r=e.placement;return Object(a.jsx)(K.a,Object(H.a)(Object(H.a)({},t),{},{style:{transformOrigin:"bottom"===r?"center top":"center bottom"},children:Object(a.jsx)(X.a,{children:Object(a.jsx)(Y.a,{onClickAway:b,children:Object(a.jsx)(V.a,{autoFocusItem:l,id:"settings-list-grow",onKeyDown:h,children:Object(a.jsxs)(Z.a,{disableRipple:!0,style:{backgroundColor:"transparent"},children:[Object(a.jsx)(ee.a,{checked:"light"!==n,onChange:O,name:"dark-theme-switch"}),Object(a.jsx)(p.a,{children:"Dark Theme"})]})})})})}))}})]})},ae=Object(x.a)((function(e){return Object(v.a)({tabItems:Object(j.a)({display:"none",textTransform:"none"},e.breakpoints.up("md"),{display:"flex"}),navDrawerButton:Object(j.a)({},e.breakpoints.up("md"),{display:"none"})})}));var se,ce=function(){var e,t=Object(u.g)(),n=ae(),r=window.location.href.includes(W)?1:0,i=Object(s.useState)(r),o=Object(d.a)(i,2),l=o[0],j=o[1],x=Object(s.useState)(!1),v=Object(d.a)(x,2),y=v[0],S=v[1],C=Object(b.a)();return Object(s.useEffect)((function(){t.listen((function(e,t){console.log(e.pathname),e.pathname.includes("/assessment-list")?j(0):e.pathname.includes("/about")&&j(1)}))}),[t]),Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(O.a,{appear:!1,direction:"down",in:!C,children:Object(a.jsx)(h.a,{children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)(p.a,{variant:"h6",children:"LinkedIn Practice Assessment"}),Object(a.jsx)("div",{style:{flexGrow:1}}),Object(a.jsxs)(g.a,{value:l,onChange:function(e,t){j(t)},className:n.tabItems,children:[Object(a.jsx)(w.a,{label:"Assessment List",onClick:function(){return t.push(Q)}}),Object(a.jsx)(w.a,{label:"About",onClick:function(){return t.push(W)}})]}),Object(a.jsx)(re,{}),Object(a.jsx)(k.a,{className:n.navDrawerButton,onClick:(e=!0,function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&S(e)}),children:Object(a.jsx)(f.a,{})}),Object(a.jsx)(J,{openStatus:y,handleCloseDrawer:function(){return S(!1)}})]})})})})},ie=n(398),oe=n(399),le=n(428),ue=n(402),de=n(425),je=n(422),be=n(403),he=n(404),me=n(58),Oe=n.n(me),pe=n(82),fe=function(e){return e.toString().replace(/^\n+|\n+$/g,"")},xe=function(){var e=Object(pe.a)(Oe.a.mark((function e(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://raw.githubusercontent.com/wkm97/react-linkedin-practices/master/ASSESSMENTLIST.md",e.abrupt("return",fetch("https://raw.githubusercontent.com/wkm97/react-linkedin-practices/master/ASSESSMENTLIST.md").then((function(e){return e.text().then((function(e){var t=e.match(/\| \[Adobe(.|\n)*\|/g);if(null!=t){var n=(t=t[0].split("\n")).map((function(e){var t,n=(e.match(/\[(.*)\]/i)||[void 0,void 0])[1],r=(e.match(/\[.*\]\((.*)\)/)||[void 0,void 0])[1],a=parseInt((e.match(/=>(.*)questions/i)||["0","0"])[1]),s=null===(t=(e.match(/questions\s+\|(.*)\s+\|/)||[void 0,void 0])[1])||void 0===t?void 0:t.trim();return{title:n,link:r=void 0!==r?"https://raw.githubusercontent.com/Ebazhanov/in-quiz-questions/master/"+r.replace(/<|>/g,""):void 0,numQuestions:a,assessmentStatus:s}}));return n=n.filter((function(e){return e.title&&["with answers","partially answered"].includes(e.assessmentStatus||"")})),localStorage.setItem("assessmentInfos",JSON.stringify(n)),n}throw alert("Failed to parse list of assessment."),new Error("Failed to parse list of assessment.")}))})).catch((function(e){})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(){var e=Object(pe.a)(Oe.a.mark((function e(t){var n,r,a,s;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.link){e.next=20;break}return e.next=3,fetch(t.link);case 3:return e.next=5,e.sent.text();case 5:if(n=e.sent,r=t.link.split("/").slice(0,-1).join("/"),0!==(a=Re(n,r)).length){e.next=10;break}throw new Error("Failed to partition question.");case 10:if((s=a.map(we).filter(ge)).forEach((function(e,t){var n,r;s[t].question=(n=e.question,r=t+1,n.replace(/#{3,5}\s{0,1}Q{0,1}\.{0,1}\s{0,1}\d+\.{0,1}/g,"Q ".concat(r,".")))})),0!==s.length){e.next=16;break}throw new Error("No question parsed for ".concat(t.title,"."));case 16:localStorage.setItem(t.title||"default_title",JSON.stringify({assessmentInfo:t,questionSets:s}));case 17:return e.abrupt("return",{assessmentInfo:t,questionSets:s});case 20:throw new Error("Link to Question for ".concat(t.title," not found."));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(e){return e.answer.length>0&&e.choice.length>3},we=function(e){var t=e.split(/(?<=\s{0,1}\n)/g)||[];if(0===t.length)throw new Error("Failed to break down question");var n="default question",a=-1;t.some((function(e,r){return!!e.match(/-\s{0,1}\[[x{0,1}|\s]\]/i)&&(n=t.slice(0,r).join(""),a=r,!0)})),n=r.trimNewline(n);var s=t.slice(a).join(""),c=ke(s);return Object(H.a)({question:n},c)},ke=function(e){var t=e.trim().split(/(?=-\s{0,1}\[[x{0,1}|\s]\])/gi),n=Se(t),r=Ce(t),a=ye(t),s=r[t.length-1].replace(a||"","");return r[t.length-1]=s,{choice:r,answer:n,detail:a}},ye=function(e){var t=(e=e.map(r.trimNewline))[e.length-1].match(/\n{2,}.*$/g),n=t?t[0]:"";return""===n&&e.some((function(e){var t=e.match(/<{2,3}-{0,3}\s{0,1}CORRECT.*/i);return!!t&&(n=t[0].replace(/<{2,3}-{0,3}\s{0,1}CORRECT/i,""),!0)})),""!==n?r.trimNewline(n):void 0},Se=function(e){var t=e.map((function(e){return!!e.match(/\[x\]/i)}));return(t=!1===t.includes(!0)?e.map((function(e){return!!e.match(/<{2,3}-{0,3}\s{0,1}CORRECT/i)})):t).map((function(e,t){return e?t:-1})).filter((function(e){return-1!==e}))},Ce=function(e){var t=e.map((function(e){return e.replace(/-\s{0,1}\[[x{0,1}|\s]\]/gi,"")}));return(t=(t=t.map((function(e){return e.replace(/<{2,3}-{0,3}\s{0,1}CORRECT.*/gi,"")}))).map((function(e){return e.replace(/<{2,3}-{0,3}\s{0,1}WRONG.*/gi,"")}))).map(r.trimNewline)},Re=function(e,t){var n=(e.match(/#{3,5}\s{0,1}Q{0,1}\.{0,1}\s{0,1}\d+(.|\n)*/g)||[void 0])[0];if(n){var r=n.split(/(?=#{3,5}\s{0,1}Q{0,1}\.{0,1}\s{0,1}\d+\.{0,1})/g).filter((function(e){return e.length>4}));return r=r.map((function(e){var n=e.match(/\[.*]\(((?!https).*)\)/);if(n){var r=n[0].replace("(","("+t+"/");return e=e.replace(/\[.*]\(((?!https).*)\)/,r)}return e}))}return[]},Te=Object(x.a)((function(e){return Object(v.a)({upperBgDiv:{display:"flex",height:"5vh",width:"100%",backgroundColor:e.palette.secondary.main,backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"cover",justifyContent:"center",minHeight:"300px"},btmBgDiv:{display:"flex",width:"100%",justifyContent:"center",minHeight:"600px",marginTop:-80},assessmentItem:{height:"6vh"},itemListTextSecondary:Object(j.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"})})})),Ee=function(){var e=Te(),t=Object(u.g)(),n=Object(s.useState)(void 0),r=Object(d.a)(n,2),i=r[0],o=r[1],l=Object(s.useState)({search:"",assessmentStatus:""}),j=Object(d.a)(l,2),b=j[0],h=j[1];Object(s.useEffect)((function(){xe().then((function(e){o(e)})).catch((function(e){return alert(e)}))}),[]);var m=null===i||void 0===i?void 0:i.filter((function(e){var t,n;return(null===(t=e.title)||void 0===t?void 0:t.toLowerCase().includes(b.search))&&(null===(n=e.assessmentStatus)||void 0===n?void 0:n.toLowerCase().includes(b.assessmentStatus))}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:e.upperBgDiv}),Object(a.jsx)("div",{className:e.btmBgDiv,children:Object(a.jsxs)(X.a,{elevation:3,style:{width:"85vw"},children:[Object(a.jsx)("div",{style:{height:"2vh"}}),Object(a.jsx)(p.a,{variant:"h3",style:{margin:16},children:"LinkedIn Assessment Practice List"}),Object(a.jsx)(p.a,{variant:"h5",style:{margin:16},children:Object(a.jsx)(ie.a,{color:"textSecondary",href:"https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes",children:"LinkedIn assessment practices from GitHub"})}),Object(a.jsx)(C.a,{}),Object(a.jsxs)(oe.a,{container:!0,spacing:1,children:[Object(a.jsx)(oe.a,{item:!0,xs:1}),Object(a.jsx)(oe.a,{item:!0,xs:6,children:Object(a.jsx)(le.a,{id:"outlined-full-width",label:"Search",placeholder:"type here...",helperText:"Search Assessment",onChange:function(e){h(Object(H.a)(Object(H.a)({},b),{},{search:e.target.value}))},margin:"normal",InputLabelProps:{shrink:!0},style:{marginLeft:"1%"},variant:"outlined",fullWidth:!0})}),Object(a.jsx)(oe.a,{item:!0,xs:4,children:Object(a.jsxs)(ue.a,{variant:"outlined",margin:"normal",style:{width:"90%"},children:[Object(a.jsx)(de.a,{htmlFor:"outlined-age-native-simple",children:"Status"}),Object(a.jsxs)(je.a,{native:!0,label:"Status",inputProps:{name:"age",id:"outlined-age-native-simple"},onChange:function(e){"string"===typeof(e.target.value||"")&&h(Object(H.a)(Object(H.a)({},b),{},{assessmentStatus:e.target.value}))},children:[Object(a.jsx)("option",{"aria-label":"None",value:""}),Object(a.jsx)("option",{value:"with answer",children:"with answers"}),Object(a.jsx)("option",{value:"partially answered",children:"partially answered"}),Object(a.jsx)("option",{value:"answers required",children:"answers required"})]})]})}),Object(a.jsx)(oe.a,{item:!0,xs:1})]}),m?Object(a.jsx)(be.a,{maxWidth:"sm",style:{border:"1px solid rgb(212, 212, 212)",borderRadius:25},children:Object(a.jsx)(S.a,{component:"nav",children:m.map((function(n,r){return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)(R.a,{divider:!0,button:!0,disableRipple:!0,className:e.assessmentItem,style:0===r?{borderTopLeftRadius:15,borderTopRightRadius:15}:r===m.length-1?{borderBottomLeftRadius:15,borderBottomRightRadius:15}:{borderRadius:0},children:[Object(a.jsx)(E.a,{inset:!0,primary:n.title,secondary:Object(a.jsx)("span",{className:e.itemListTextSecondary,children:"".concat(n.numQuestions," questions ").concat(n.assessmentStatus)})}),Object(a.jsx)(k.a,{onClick:function(){return t.push("".concat(M,"/").concat(n.title))},children:Object(a.jsx)(he.a,{})})]})},n.title)}))})}):null]})})]})},qe=n(412),Ne=n(414),Ie=n(415),Le=n(416),Ae=n(413),Be=n(83);!function(e){e.NEUTRAL="NEUTRAL",e.CORRECT="CORRECT",e.WRONG="WRONG",e.SELECTED="SELECTED"}(se||(se={}));var De=s.createContext(void 0),Pe=s.createContext(void 0),Fe={questionSets:[],curr_session:[]},_e=function(e,t){switch(t.type){case"selectChoices":var n=e.curr_session;return n[t.questionIdx].selected=t.selectedIdx,n[t.questionIdx].status=se.SELECTED,Object(H.a)(Object(H.a)({},e),{},{curr_session:n});case"submitAnswer":var r=e.curr_session,a=r[t.questionIdx];return a.selected=t.selectedIdx,!function(e,t){var n,r={},a=Object(Be.a)(e);try{for(a.s();!(n=a.n()).done;){var s=n.value;r[s+typeof s]=1}}catch(d){a.e(d)}finally{a.f()}var c,i=Object(Be.a)(t);try{for(i.s();!(c=i.n()).done;){var o=c.value,l=o+typeof o;if(!r[l])return!1;r[l]=2}}catch(d){i.e(d)}finally{i.f()}for(var u in r)if(1===r[u])return!1;return!0}(a.answer,a.selected)?a.status=se.WRONG:a.status=se.CORRECT,r[t.questionIdx]=a,Object(H.a)(Object(H.a)({},e),{},{curr_session:r});case"changePractice":var s=t.questionSets.map((function(e){return{status:se.NEUTRAL,answer:e.answer,selected:null}}));return Object(H.a)(Object(H.a)({},e),{},{questionSets:t.questionSets,curr_session:s});default:throw new Error("Unhandled action type")}},ze=function(e){var t=e.children,n=s.useReducer(_e,Fe),r=Object(d.a)(n,2),c=r[0],i=r[1];return Object(a.jsx)(De.Provider,{value:c,children:Object(a.jsx)(Pe.Provider,{value:i,children:t})})},Ge=function(){var e=s.useContext(Pe);if(void 0===e)throw new Error("usePracticeDispatch must be used within a PracticeProvider");return e},Qe=n(405),We=n(406),Me=n(424),Ue=n(407),Je=n(423),He=n(408),$e=n(409),Ke=n(411),Xe=n(410),Ye=n(97),Ve=n(95),Ze=n(5),et=n(96),tt=n.n(et),nt=function(e){return Object(v.a)({listItem:{marginTop:e.spacing(1)},markdownItem:{backgroundColor:"transparent",textAlign:"left",width:"100%"},markdownLink:{color:e.palette.secondary.dark}})},rt=Object(x.a)(nt),at=function(e){return{overrides:{h1:{component:p.a,props:{gutterBottom:!0,variant:"h5"}},h2:{component:p.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:p.a,props:{gutterBottom:!0,variant:"subtitle1",style:{margin:"0.35em"}}},h4:{component:p.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:p.a,props:{paragraph:!0,style:{margin:"0.35em"}}},a:{component:ie.a,props:{className:e.markdownLink,rel:"noopener noreferrer",target:"_blank"}},li:{component:Object(Ze.a)(nt)((function(e){var t=e.classes,n=Object(Ye.a)(e,["classes"]);return Object(a.jsx)("li",{className:t.listItem,children:Object(a.jsx)(p.a,Object(H.a)({component:"span"},n))})}))},img:{props:{style:{maxWidth:"100%"}}},code:{props:{style:{marginRight:"1vw"}}}}}};function st(e){var t=rt(),n=Object(s.useRef)(null),r=Object(s.useContext)(_).currentTheme;return Object(s.useEffect)((function(){var e,t,a,s,c,i,o,l,u;"light"===r?(null===(t=document)||void 0===t||null===(a=t.querySelector('link[title="light"]'))||void 0===a||a.removeAttribute("disabled"),null===(s=document)||void 0===s||null===(c=s.querySelector('link[title="dark"]'))||void 0===c||c.setAttribute("disabled","disabled")):(null===(i=document)||void 0===i||null===(o=i.querySelector('link[title="dark"]'))||void 0===o||o.removeAttribute("disabled"),null===(l=document)||void 0===l||null===(u=l.querySelector('link[title="light"]'))||void 0===u||u.setAttribute("disabled","disabled"));null===n||void 0===n||null===(e=n.current)||void 0===e||e.querySelectorAll("pre code").forEach((function(e){tt.a.highlightBlock(e)}))}),[n,r]),Object(a.jsx)("div",{className:t.markdownItem,ref:n,children:Object(a.jsx)(Ve.a,Object(H.a)({options:at(t)},e))})}var ct=Object(x.a)((function(e){return Object(v.a)({root:{display:"flex",flexWrap:"nowrap"},labelroot:{margin:2,marginRight:0},label:{overflow:"auto",marginRight:0,width:"100%"},correctChoice:{backgroundColor:e.palette.success.main,borderRadius:20},wrongChoice:{backgroundColor:e.palette.error.main,borderRadius:20}})})),it=function(e){var t=ct(),n=e.questionSet,r=Object(s.useState)([]),c=Object(d.a)(r,2),i=c[0],o=c[1],l=Object(s.useState)(!1),u=Object(d.a)(l,2),j=u[0],b=u[1],h=Ge();return Object(a.jsxs)(Qe.a,{variant:"outlined",children:[Object(a.jsxs)(We.a,{children:[Object(a.jsx)(st,{children:n.question}),Object(a.jsx)(ue.a,{classes:{root:t.root},component:"fieldset",children:Object(a.jsx)(Me.a,{classes:{root:t.root},"aria-label":"choice",name:"choices",value:i.length>0?i[0]:null,onChange:function(t){var n=parseInt(t.target.value);o([n]),h({type:"selectChoices",questionIdx:e.questionNum,selectedIdx:i})},children:n.choice.map((function(e,r){var c={};return j&&(i.includes(r)&&!n.answer.includes(r)?c={className:t.wrongChoice}:n.answer.includes(r)&&(c={className:t.correctChoice})),Object(s.createElement)(Ue.a,Object(H.a)(Object(H.a)({},c),{},{disabled:j,classes:{root:t.labelroot,label:t.label},key:r,value:r,control:Object(a.jsx)(Je.a,{}),label:Object(a.jsx)(st,{children:e})}))}))})})]}),Object(a.jsx)(He.a,{children:Object(a.jsxs)($e.a,{disabled:j,variant:"outlined",onClick:function(){b(!0),h({type:"submitAnswer",questionIdx:e.questionNum,selectedIdx:i})},"aria-expanded":j,"aria-label":"show answer.",children:[Object(a.jsx)(Xe.a,{}),Object(a.jsx)("span",{style:{marginLeft:5},children:"Check Answer"})]})}),Object(a.jsx)(Ke.a,{in:j,timeout:"auto",unmountOnExit:!0,children:n.detail?Object(a.jsx)(We.a,{children:Object(a.jsx)(st,{children:n.detail})}):null})]})},ot=n(19),lt=n(420),ut=Object(x.a)((function(e){return Object(v.a)({reviewQuestion:{fontWeight:"bolder","&:hover":{textDecoration:"underline",cursor:"pointer"}},correctResult:{height:10,backgroundColor:e.palette.success.main},wrongResult:{height:10,backgroundColor:e.palette.error.main},neutralResult:{height:10,backgroundColor:e.palette.grey[500]},resultIndicator:{display:"block",width:"100%",textAlign:"center"}})})),dt=function(e){var t=ut();return Object(a.jsxs)("div",{style:{width:"".concat(e.percentage,"%")},children:[Object(a.jsx)("div",{className:e.className}),Object(a.jsx)("span",{className:t.resultIndicator,children:"".concat(e.percentage,"%")})]})},jt=function(e){var t=Object(ot.a)(),n=ut(),r=function(){var e=s.useContext(De);if(void 0===e)throw new Error("usePracticeState must be used within a PracticeProvider");return e}(),c=e.handleGotoQuestion,i=function(e){switch(e){case se.CORRECT:return t.palette.success.main;case se.WRONG:return t.palette.error.main;default:return t.palette.text.primary}},o=function(){var e=r.curr_session.length,t=r.curr_session.filter((function(e){return e.status===se.CORRECT})).length,s=r.curr_session.filter((function(e){return e.status===se.WRONG})).length,c=r.curr_session.filter((function(e){return e.status===se.NEUTRAL})).length,i=Math.round(t/e*100),o=Math.round(s/e*100),l=Math.round(c/e*100);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(lt.a,{flexDirection:"row",marginBottom:5,children:[Object(a.jsx)(p.a,{variant:"body1",display:"block",children:"Correct: ".concat(t)}),Object(a.jsx)(p.a,{variant:"body1",display:"block",children:"Neutral: ".concat(c)}),Object(a.jsx)(p.a,{variant:"body1",display:"block",children:"Wrong: ".concat(s)})]}),Object(a.jsx)(p.a,{variant:"caption",align:"center",children:"Result Bar"}),Object(a.jsxs)("div",{style:{marginBottom:20,display:"flex"},children:[Object(a.jsx)(dt,{percentage:i,className:n.correctResult}),Object(a.jsx)(dt,{percentage:l,className:n.neutralResult}),Object(a.jsx)(dt,{percentage:o,className:n.wrongResult})]})]})};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o,{}),Object(a.jsx)(oe.a,{container:!0,spacing:5,justify:"center",alignItems:"flex-start",children:r.curr_session.map((function(e,t){return Object(a.jsx)(oe.a,{item:!0,xs:1,children:Object(a.jsx)(p.a,{className:n.reviewQuestion,style:{color:i(e.status)},variant:"button",onClick:function(){c("question-".concat(t))},children:t+1})},t)}))})]})},bt=Object(x.a)((function(e){return Object(v.a)({floatingButton:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"}})})),ht=function(){var e=bt(),t=Object(u.h)().title,n=Object(s.useState)(),r=Object(d.a)(n,2),i=r[0],o=r[1],l=Object(s.useState)(!1),j=Object(d.a)(l,2),b=j[0],h=j[1],m=Ge(),O=Object(s.useMemo)((function(){return(null===i||void 0===i?void 0:i.questionSets.reduce((function(e,t,n){return e["question-"+String(n)]=c.a.createRef(),e}),{}))||{}}),[null===i||void 0===i?void 0:i.questionSets]),p=function(){h(!b)},f=Object(s.useMemo)((function(){return Object(a.jsx)(S.a,{children:null===i||void 0===i?void 0:i.questionSets.map((function(e,t){return Object(a.jsx)(R.a,{style:{display:"block"},ref:O["question-"+String(t)],children:Object(a.jsx)(it,{questionNum:t,questionSet:e})},t)}))})}),[null===i||void 0===i?void 0:i.questionSets,O]);return Object(s.useEffect)((function(){var e=localStorage.getItem(t);if(e){var n=JSON.parse(e);o(n),m({type:"changePractice",questionSets:(null===n||void 0===n?void 0:n.questionSets)||[]}),console.log("available in local storage")}else console.log("not available in local storage"),xe().then((function(e){var n=null===e||void 0===e?void 0:e.filter((function(e){return e.title===t}))[0];n?ve(n).then((function(e){o(e),m({type:"changePractice",questionSets:e.questionSets})})):alert("Fail to retrieve assessment")}))}),[t,m]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(be.a,{style:{marginTop:"74px"},children:i?f:Object(a.jsx)("p",{children:"LOADING"})}),Object(a.jsxs)(qe.a,{variant:"extended",onClick:p,className:e.floatingButton,color:"secondary","aria-label":"submit or check",children:[Object(a.jsx)(Ae.a,{}),"Review"]}),Object(a.jsxs)(Ne.a,{open:b,"aria-labelledby":"qna-review-title","aria-details":"qna-review-details",onClose:p,style:{width:"90vw",height:"90vh"},children:[Object(a.jsx)(Ie.a,{id:"qna-review-title",children:"Questions and Answers Review"}),Object(a.jsx)(Le.a,{style:{padding:50,paddingTop:0,overflowX:"hidden"},children:Object(a.jsx)(jt,{handleGotoQuestion:function(e){var t;h(!b),window.scrollTo({top:null===(t=O[e].current)||void 0===t?void 0:t.offsetTop,behavior:"smooth"})}})})]})]})},mt=n(417),Ot=n(418),pt=function(){var e=Object(s.useState)(),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){fetch("https://raw.githubusercontent.com/wkm97/react-linkedin-practices/master/USEFUL_REFERENCE.md").then((function(e){e.text().then((function(e){return r(e)}))}))}),[]),Object(a.jsxs)(be.a,{style:{marginTop:84},children:[Object(a.jsx)(Qe.a,{style:{margin:20},children:Object(a.jsxs)(We.a,{children:[Object(a.jsx)(p.a,{align:"left",variant:"h5",children:"Data Source:"}),Object(a.jsx)(p.a,{align:"left",variant:"body1",children:Object(a.jsx)(ie.a,{color:"textSecondary",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes",children:"Linkedin Quiz Answers, Skill Assessments Test - Collected by Ebazhanov and Collaborators."})})]})}),Object(a.jsxs)(Qe.a,{style:{margin:20},children:[Object(a.jsx)(We.a,{children:Object(a.jsxs)(lt.a,{display:"flex",children:[Object(a.jsx)(p.a,{variant:"h5",children:Object(a.jsx)(ie.a,{color:"textSecondary",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/wkm97/react-linkedin-practices",children:"(REPOSITORY) React LinkedIn Practices - Created by wkm97"})}),Object(a.jsx)("div",{style:{flexGrow:1}}),Object(a.jsx)($e.a,{variant:"outlined",onClick:function(){return window.open("https://github.com/wkm97/react-linkedin-practices/issues","_blank")},children:"Report Issues"})]})}),Object(a.jsxs)(He.a,{children:[Object(a.jsx)("div",{style:{flexGrow:1}}),Object(a.jsx)($e.a,{onClick:function(){return window.open("https://github.com/wkm97/","_blank")},children:Object(a.jsx)(mt.a,{fontSize:"large"})}),Object(a.jsx)($e.a,{onClick:function(){return window.open("https://www.linkedin.com/in/wkm97/","_blank")},children:Object(a.jsx)(Ot.a,{fontSize:"large"})})]})]}),Object(a.jsx)(Qe.a,{style:{margin:20},children:Object(a.jsx)(We.a,{children:n?Object(a.jsx)(st,{align:"left",children:n}):Object(a.jsx)("div",{})})})]})};var ft=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(ce,{}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{exact:!0,path:G,render:function(){return Object(a.jsx)(u.a,{to:Q})}}),Object(a.jsx)(u.b,{exact:!0,path:Q,children:Object(a.jsx)(Ee,{})}),Object(a.jsx)(u.b,{path:"".concat(M,"/:title"),children:Object(a.jsx)(ze,{children:Object(a.jsx)(ht,{})})}),Object(a.jsx)(u.b,{exact:!0,path:W,children:Object(a.jsx)(pt,{})})]})]})})},xt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,430)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},vt=n(419);o.a.render(Object(a.jsxs)(z,{children:[Object(a.jsx)(vt.a,{}),Object(a.jsx)(ft,{})]}),document.getElementById("root")),xt()}},[[336,1,2]]]);
//# sourceMappingURL=main.bafa29ac.chunk.js.map