(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{140:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(30),a=n.n(c),o=(n(140),n(7)),s=n(232),r=n(231),l=n(233),d=n(237),j=n(234),u=n(241),b=n(26),h=n.n(b),x=n(45),f=n(18),p=n.n(f);p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var O=function(){var e=Object(x.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"post",url:"/api/get-responses/",data:{params:t}});case 2:return n=e.sent,console.log(t),console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(x.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"post",url:"/api/submit-response/",data:t});case 2:return n=e.sent,console.log("Submitted response"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=n(236),v=(n(245),n(256),n(254),n(255),n(252),n(1));var y=n(225),C=n(16),w=n(69);w.a.register.apply(w.a,Object(C.a)(w.b));var k=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){var n=t.current.getContext("2d");new w.a(n,{type:"scatter",data:{datasets:[{label:"Pitch Frequency",data:e.data,borderWidth:1,backgroundColor:"rgb(255, 99, 132)"}]},options:{scales:{y:{},x:{}}}})}),[]),Object(v.jsx)("canvas",{id:"question-data",ref:t})},S={audioBitsPerSecond:16e3};new AudioContext,new FileReader;function _(){return(_=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0});case 2:return t=e.sent,e.abrupt("return",new MediaRecorder(t,S));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(o.a)(a,2),r=s[0],l=s[1],d=Object(i.useState)(null),j=Object(o.a)(d,2),u=j[0],b=j[1],h=Object(i.useState)(null),x=Object(o.a)(h,2),f=x[0],p=x[1];Object(i.useEffect)((function(){if(null!==u){r?u.start():u.stop();var e=function(e){var t=new AudioContext,n=new FileReader;n.readAsArrayBuffer(e.data),n.onloadend=function(){console.log("data loaded"),t.decodeAudioData(n.result).then((function(t){console.log(t);var n=t.getChannelData(0);p(n),c(URL.createObjectURL(e.data))}))}};return u.addEventListener("dataavailable",e),function(){return u.removeEventListener("dataavailable",e)}}r&&function(){return _.apply(this,arguments)}().then(b,console.error)}),[u,r]);return[n,r,function(){l(!0)},function(){l(!1)},f]},I=function(e){var t=R(),n=Object(o.a)(t,5),c=n[0],a=n[1],s=n[2],l=n[3],j=n[4];return Object(i.useEffect)((function(){j?(console.log("Raw data ready."),e.sets(j)):console.log("No current audio.")}),[j]),Object(v.jsx)("div",{className:"Recorder",id:"recorder",ref:e.forwardedRef,children:Object(v.jsxs)(r.a,{container:!0,children:[Object(v.jsx)("audio",{src:c,controls:!0}),Object(v.jsx)(d.a,{onClick:s,disabled:a,children:"start"}),Object(v.jsx)(d.a,{onClick:l,disabled:!a,children:"stop"})]})})},N=n(235),T=Object(s.a)((function(e){return{content:{justifyContent:"center",display:"flex"},paper:{padding:e.spacing(2),minWidth:"100vw",minHeight:"85vh",display:"flex",elevation:3,position:"relative"},container:{}}}));p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var z=Object(u.e)((function(e){var t=Object(i.useState)("/"),n=Object(o.a)(t,2),c=(n[0],n[1],Object(i.useState)(!1)),a=Object(o.a)(c,2),s=a[0],b=(a[1],Object(i.useState)("")),h=Object(o.a)(b,2),x=h[0],f=h[1],g=(Object(i.useRef)(),Object(i.useRef)(),["id"]),C=Object(u.d)(),w=function(){O(g).then((function(e){var t=e.data;console.log(t.type),C.push("/".concat(t.type))}))},k=T();return Object(i.useEffect)((function(){O(g).then((function(e){var t=e.data;console.log(t),void 0!==t.type&&C.push("/".concat(t.type))}))}),[]),Object(v.jsx)("div",{children:Object(v.jsx)(l.a,{className:k.paper,children:Object(v.jsxs)(r.a,{container:!0,children:[Object(v.jsx)(r.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:Object(v.jsx)(r.a,{item:!0,xs:12,children:Object(v.jsx)(y.a,{in:s,children:Object(v.jsx)(j.a,{variant:"h1",component:"h",gutterBottom:!0})})})}),Object(v.jsx)(r.a,{container:!0,direction:"column",justifyContent:"flex-end",alignItems:"center",children:Object(v.jsxs)(r.a,{item:!0,xs:12,children:[Object(v.jsx)(j.a,{variant:"h1",component:"h2",gutterBottom:!0,children:"Welcome"}),Object(v.jsxs)(j.a,{variant:"h1",component:"h",gutterBottom:!0,children:["Welcome to the study investigating English intonation and learning. Before starting, please observe the following requirements:",Object(v.jsx)(N.a,{direction:"column",xs:4,children:"1. Wear a headset with microphone (or make sure your computer has a microphone. 2. Please open the experiement in Google Chrome."})]})]})}),Object(v.jsx)(r.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:Object(v.jsxs)(N.a,{direction:"row",spacing:6,xs:12,children:[Object(v.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"code",label:"Experiment Code",variant:"outlined",value:x,onChange:function(e){f(e.target.value)}}),Object(v.jsx)(d.a,{onClick:function(){!function(e){O(g).then((function(t){console.log("Checking if user exists...");var n=t.data;"Next"===(null===n||void 0===n?void 0:n.message)&&w(),"None"===n&&p()({method:"post",url:"/api/create-response-set/",data:{code:e}}).then((function(e){console.log("Created response set for user."),w()}))}))}(x)},children:" Enter"})]})})]})})})})),B=function(e){return Object(v.jsx)("div",{className:"Player",children:Object(v.jsx)("audio",{controls:!0,src:e.url})})},E=n(248),W=n(239),L=n(246),F=n(249),A=n(35),q=n(251),M=n(5),H=n(247),P=n(118),D=Object(M.a)(q.a)((function(e){var t=e.theme;return Object(A.a)(Object(A.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})})),X=function(e){var t=e.callback,n=e.wordList,c=e.setWordList,a=e.correct,s=e.incorrect,r=e.force,l=Object(i.useState)(""),j=Object(o.a)(l,2),u=j[0],b=j[1];return Object(v.jsxs)(N.a,{direction:"column",spacing:1,children:[Object(v.jsxs)(N.a,{direction:"row",spacing:6,xs:12,children:[Object(v.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"code",label:"Enter Word",variant:"outlined",value:u,onChange:function(e){b(e.target.value)}}),Object(v.jsx)(d.a,{onClick:function(){var e=n.concat({value:u.toLowerCase(),id:Object(P.v4)()});c(e),b("")},value:u,disabled:a||s||r,children:" Add "}),Object(v.jsx)(d.a,{onClick:function(){t(n)},disabled:a||s||r,children:" Submit"})]}),Object(v.jsx)(N.a,{direction:"row",spacing:2,children:n.map((function(e){return Object(v.jsxs)(D,{children:[e.value,Object(v.jsx)(L.a,{"aria-label":"close",color:"info",size:"small",onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}(e.id)},children:Object(v.jsx)(H.a,{children:"close"})})]},e.id)}))})]})},Q=n(250),J=n(244),U=n(243),Y=function(e){var t;return 0===(t=e%3)?t+=3:t},G=Object(s.a)((function(e){return{content:{justifyContent:"center",display:"flex"},paper:{padding:e.spacing(2),justifyContent:"center",minWidth:"100vw",height:"85vh",display:"flex",elevation:3,position:"relative"}}}));p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var V=Object(u.e)((function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(o.a)(a,2),r=s[0],b=s[1],h=Object(i.useState)(null),x=Object(o.a)(h,2),f=x[0],p=x[1],m=["id","filepath","intonation"],y=Object(u.d)(),C=Object(i.useRef)(),w=G(),k=function(){c(!1),b(!1),O(m).then((function(e){var t=e.data;p(t)}))},S=function(e){var t=e.currentTarget.value;if(t!==f.target){b(!0);var n={eval:0,response:t,response_id:f.response_id};g(n)}else{c(!0),console.log(t);var i={eval:1,response:t,response_id:f.response_id};g(i)}};return Object(i.useEffect)((function(){O(m).then((function(e){var t=e.data;p(t),C.current.textContent=t.text.instructions}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"baseline",alignContent:"center",spacing:5,children:Object(v.jsx)(K,{})}),Object(v.jsxs)(l.a,{className:w.paper,children:[Object(v.jsx)(j.a,{alignSelf:"flex-start",marginRight:"50px",variant:"body1",component:"h2",gutterBottom:!0,xs:3,children:f?"Question: "+f.trial_id+" | Attempts: "+Y(f.response_id):null}),Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:5,children:[Object(v.jsx)(j.a,{variant:"subtitle1",component:"h2",gutterBottom:!0,children:f?f.text.instructions_short:"Loading..."}),Object(v.jsx)(B,{url:f?f.sentence.filepath:null}),Object(v.jsxs)(E.a,{style:{width:"100%"},children:[Object(v.jsx)(F.a,{in:n,children:Object(v.jsx)(W.a,{action:Object(v.jsx)(L.a,{"aria-label":"close",color:"inherit",size:"small"}),sx:{mb:2},children:"Well done! Click next to continue."})}),Object(v.jsx)(F.a,{in:r,children:Object(v.jsxs)(W.a,{action:Object(v.jsx)(L.a,{"aria-label":"close",color:"error",size:"small",onClick:function(){k()},children:Object(v.jsx)(H.a,{children:"close"})}),severity:"error",sx:{mb:2},children:["Try again! Remember to listen to the tone choice at the ",Object(v.jsx)("u",{children:"end"})," of the word."]})})]}),Object(v.jsxs)(N.a,{direction:"row",spacing:18,xs:12,children:[Object(v.jsx)(d.a,{variant:"outlined",size:"large",onClick:function(e){return S(e)},value:"rising",disabled:n||r,children:"Rising"}),Object(v.jsx)(d.a,{variant:"outlined",size:"large",onClick:function(e){return S(e)},value:"level",disabled:n||r,children:"Level"}),Object(v.jsx)(d.a,{variant:"outlined",size:"large",onClick:function(e){return S(e)},value:"falling",disabled:n||r,children:"Falling"})]})]}),Object(v.jsx)(d.a,{size:"large",variant:"contained",style:{alignSelf:"flex-end"},onClick:function(){O(["id"]).then((function(e){var t=e.data;console.log(t),t.task_id!=f.task_id&&(console.log("Task completed. Moving to next task"),y.push("/".concat(t.type))),t.trial_id!=f.trial_id?(console.log("Trial completed. Moving to next trial"),k()):p(t)}))},disabled:!n,children:"Next"})]})]})})),K=function(){G();var e=Object(i.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(L.a,{"aria-label":"close",color:"info",size:"small",onClick:function(){c(!n)},children:Object(v.jsx)(H.a,{children:"help"})}),Object(v.jsx)(U.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+2}},open:n,onClick:function(){c(!1)},children:Object(v.jsx)(l.a,{style:{maxWidth:"1100px"},children:Object(v.jsx)(E.a,{children:Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsx)(N.a,{direction:"row",children:"Task 1. Listening."}),Object(v.jsx)(N.a,{direction:"row",children:"In this task, you will listen to requests spoken with different intonations. For each request, you will identify the tone choice AT THE END of the sentence, where the request is happening."}),Object(v.jsx)(N.a,{direction:"row",children:"In English, there are three general types of intonation."}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("b",{children:"Falling"})," = the voice at the end of the request goes down.",Object(v.jsx)("b",{children:"Rising"})," = the voice at the end of the request goes down.",Object(v.jsx)("b",{children:"Level"})," = the voice does not go up or down."]})]})})})})]})},Z=Object(s.a)((function(e){return{paper:{padding:e.spacing(2),justifyContent:"center",minWidth:"100vw",height:"40vh",display:"flex",elevation:3,position:"relative"}}}));p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var $=function(e){Z();var t=Object(i.useState)(!0),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(L.a,{"aria-label":"close",color:"info",size:"small",onClick:function(){a(!c)},children:Object(v.jsx)(H.a,{children:"help"})}),Object(v.jsx)(U.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+2}},open:c,onClick:function(){a(!1)},children:Object(v.jsx)(l.a,{style:{maxWidth:"1100px",margins:"10px"},children:Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsx)(N.a,{direction:"row",children:Object(v.jsx)(j.a,{children:"Task 1. Listening."})}),Object(v.jsx)(N.a,{direction:"row",children:Object(v.jsxs)(j.a,{children:["In this task, you will listen to requests spoken with different intonations.","\n"," For each request, you will identify the tone choice AT THE END of the sentence, where the request is happening.","\n","In English, there are three general types of intonation.","\n",Object(v.jsx)("b",{children:"Falling"})," = the voice at the end of the request goes down.","\n",Object(v.jsx)("b",{children:"Rising"})," = the voice at the end of the request goes down.","\n",Object(v.jsx)("b",{children:"Level"})," = the voice does not go up or down.","\n"]})})]})})})]})},ee=Object(s.a)((function(e){return{content:{justifyContent:"center",display:"flex"},paper:{padding:e.spacing(2),minWidth:"100vw",height:"85vh",display:"flex",elevation:3,position:"relative",justifyContent:"center"}}}));p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var te=Object(u.e)((function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(o.a)(a,2),r=s[0],b=s[1],h=Object(i.useState)(null),x=Object(o.a)(h,2),f=x[0],p=x[1],m=Object(i.useState)(null),y=Object(o.a)(m,2),C=y[0],w=y[1],k=Object(i.useState)(null),S=Object(o.a)(k,2),_=S[0],R=S[1],I=Object(i.useState)(null),T=Object(o.a)(I,2),z=T[0],A=T[1],q=Object(i.useState)(null),M=Object(o.a)(q,2),P=M[0],D=M[1],X=(Object(i.useRef)(),Object(i.useRef)(),["id","filepath"]),U=Object(u.d)(),G=ee(),V=function(){c(!1),b(!1),O(X).then((function(e){var t=e.data;p(t),A(t.sentence[0]),D(t.sentence[1])}))};return Object(i.useEffect)((function(){O(X).then((function(e){var t=e.data;p(t),console.log(t.sentence[0]),A(t.sentence[0]),D(t.sentence[1])}))}),[]),Object(v.jsx)("div",{children:Object(v.jsxs)(l.a,{className:G.paper,children:[Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:5,children:[Object(v.jsxs)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"baseline",alignContent:"center",spacing:5,children:[Object(v.jsx)(ne,{}),Object(v.jsx)(j.a,{alignSelf:"flex-start",marginRight:"50px",variant:"body1",component:"h2",gutterBottom:!0,xs:3,children:f?"Question: "+f.trial_id+" | Attempts: "+Y(f.response_id):null})]}),Object(v.jsx)(j.a,{variant:"subtitle1",component:"h2",gutterBottom:!0,children:f?f.text.instructions_short:"Loading..."}),Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",alignContent:"center",spacing:6,children:[Object(v.jsxs)(N.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(j.a,{style:{marginRight:"20px",marginLeft:"20px"},variant:"subtitle1",component:"h2",gutterBottom:!0,children:"A"}),Object(v.jsx)(B,{url:z?z.filepath:null})]}),Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(j.a,{style:{marginRight:"20px",marginLeft:"20px"},variant:"subtitle1",component:"h2",gutterBottom:!0,children:"B"}),Object(v.jsx)(B,{url:P?P.filepath:null})]})]}),Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(j.a,{style:{marginRight:"20px",marginLeft:"20px"},variant:"subtitle1",component:"h2",gutterBottom:!0,children:"More Polite?"}),Object(v.jsxs)(J.a,{orientation:"horizontal",value:C,exclusive:!0,onChange:function(e,t){console.log(t),w(t)},children:[Object(v.jsx)(Q.a,{value:f?f.sentence[0]:-1,"aria-label":"A",fullWidth:!0,children:"Sentence A"}),Object(v.jsx)(Q.a,{value:f?f.sentence[1]:-1,"aria-label":"B",fullWidth:!0,children:"Sentence B"})]})]}),Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(j.a,{style:{marginRight:"20px",marginLeft:"20px"},variant:"subtitle1",component:"h2",gutterBottom:!0,children:"More Appropriate Prominence?"}),Object(v.jsxs)(J.a,{orientation:"horizontal",value:_,exclusive:!0,onChange:function(e,t){console.log(t),R(t)},children:[Object(v.jsx)(Q.a,{value:f?f.sentence[0]:-1,"aria-label":"list",children:"Sentence A"}),Object(v.jsx)(Q.a,{value:f?f.sentence[1]:-1,"aria-label":"quilt",children:"Sentence B"})]})]})]}),Object(v.jsxs)(E.a,{style:{width:"100%"},children:[Object(v.jsx)(F.a,{in:n,children:Object(v.jsx)(W.a,{action:Object(v.jsx)(L.a,{"aria-label":"close",color:"inherit",size:"small"}),sx:{mb:2},children:"Well done! Click next to continue."})}),Object(v.jsx)(F.a,{in:r,children:Object(v.jsx)(W.a,{action:Object(v.jsx)(L.a,{"aria-label":"close",color:"error",size:"small",onClick:function(){V()},children:Object(v.jsx)(H.a,{children:"close"})}),severity:"error",sx:{mb:2},children:"Not Quite!."})})]}),Object(v.jsx)(d.a,{size:"medium",variant:"contained",onClick:function(){!function(){var e=f.target,t=_;if(console.log(t),console.log(e),t.id!==e){b(!0);var n={eval:0,response:t.id,response_id:f.response_id};g(n)}else{c(!0),console.log(e);var i={eval:1,response:t.id,response_id:f.response_id};g(i)}}()},children:"Submit"})]}),Object(v.jsx)(d.a,{size:"large",variant:"contained",style:{alignSelf:"flex-end"},onClick:function(){c(!1),O(["id"]).then((function(e){var t=e.data;console.log(t),t.task_id!=f.task_id&&(console.log("Task completed. Moving to next task"),U.push("/".concat(t.type))),t.trial_id!=f.trial_id?(console.log("Trial completed. Moving to next trial"),V()):(V(),p(t),A(t.sentence[0]),D(t.sentence[1]))}))},disabled:!n,children:"Next"})]})})})),ne=function(){ee();var e=Object(i.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(L.a,{"aria-label":"close",color:"info",size:"small",onClick:function(){c(!n)},children:Object(v.jsx)(H.a,{children:"help"})}),Object(v.jsx)(U.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+2}},open:n,onClick:function(){c(!1)},children:Object(v.jsx)(l.a,{style:{maxWidth:"1100px"},children:Object(v.jsx)(E.a,{children:Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsx)(N.a,{direction:"row",children:"Task 3. Listening."}),Object(v.jsx)(N.a,{direction:"row",children:"In this task, you will listen to pairs of sentences. Sentences in each pair will have the same words but different intonation. You will be asked to choose the sentence that has a more natural and polite tone choice (rising, falling, or level) and a more natural and appropriate prominence (stressed words).                    "}),Object(v.jsx)(N.a,{direction:"row",children:"Intonation and politeness."}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("b",{children:"Tone choices"}),"In English, falling tone choices are considered more appropriate and polite. Rising and level tone choices are less polite and are usually not used to make requests to professors, teachers, bosses, advisors, etc.",Object(v.jsx)("b",{children:"Prominence"}),"In English, only the words that are important for the request are stressed in a sentence. In general, only 2-3 contextually important words are normally prominent in a sentence."]})]})})})})]})},ie=n(257);p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var ce=function(){var e=Object(x.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"post",url:"/api/process/",data:t,headers:{"Content-Type":"application/octet-stream"},transformRequest:[function(e){return JSON.stringify(e)}],transformResponse:[function(e){return JSON.parse(e)}]});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(e){console.log(e);for(var t=e.x_y||[],n=0;n<t.length;n++)0===t[n].x&&(t[n].x=NaN),0===t[n].y&&(t[n].y=NaN);return t},oe=Object(s.a)((function(e){return{paper:{padding:e.spacing(2),justifyContent:"center",minWidth:"95vw",height:"85vh",display:"flex",elevation:3,position:"relative"},container:{position:"relative",height:"100%",justifyContent:"center"},grid:{height:"50%",justifyContent:"space-evenly",spacing:"0",alignItems:"center",direction:"column",minHeight:"100%"},button:{position:"absolute",bottom:"50px",right:"50px"},chart:{justifyContent:"center",alignItems:"center",direction:"column",minHeight:"100%",marginBottom:"1vh",minWidth:"30vw"}}})),se=Object(u.e)((function(e){var t=oe(),n=Object(i.useState)(null),c=Object(o.a)(n,2),a=c[0],s=c[1],r=Object(i.useState)(null),b=Object(o.a)(r,2),h=b[0],x=b[1],f=Object(i.useState)(!1),p=Object(o.a)(f,2),m=p[0],y=p[1],C=Object(i.useState)(!1),w=Object(o.a)(C,2),S=(w[0],w[1]),_=Object(i.useState)(!1),R=Object(o.a)(_,2),T=(R[0],R[1]),z=["id","filepath","pitch"],E=Object(i.useRef)(),W=Object(i.useRef)(),L=Object(u.d)(),F=function(){if(a){S(!0);var e={eval:1,response:{data:a},response_id:h.response_id};return g(e),void A()}T(!0);var t={eval:0,response:"",response_id:h.response_id};g(t)},A=function(){O(z).then((function(e){var t=e.data;console.log(t),t.task_id!=h.task_id&&(console.log("Task completed. Moving to next task"),L.push("/".concat(t.type))),t.trial_id!=h.trial_id?(console.log("Trial completed. Moving to next trial"),S(!1),T(!1),O(z).then((function(e){var t=e.data;x(t)}))):x(t)}))};return Object(i.useEffect)((function(){O(z).then((function(e){var t=e.data;x(t),E.current.textContent=t.text.instructions,W.current.textContent=t.text.example_ref}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsxs)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"baseline",alignContent:"center",spacing:5,children:[Object(v.jsx)($,{childExampleRef:W,childInstructionRef:E}),Object(v.jsx)(j.a,{alignSelf:"flex-start",marginRight:"50px",variant:"body1",component:"h2",gutterBottom:!0,xs:3,children:h?"Question: "+h.trial_id+" | Attempts: "+Y(h.response_id):null})]}),Object(v.jsxs)(l.a,{className:t.paper,children:[Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:5,children:[Object(v.jsx)(j.a,{marginRight:"50px",variant:"body1",component:"h1",gutterBottom:!0,children:h?h.text.instructions_short:"Loading..."}),Object(v.jsxs)(N.a,{direction:"column",spacing:5,children:[Object(v.jsxs)(N.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:5,xs:6,children:[h?Object(v.jsx)(l.a,{id:"question-data-container",className:t.chart,children:Object(v.jsx)(k,{data:ae(h.sentence.pitch)})}):Object(v.jsx)(l.a,{id:"response-data-container",className:t.chart,children:Object(v.jsx)(ie.a,{})}),m?Object(v.jsx)(l.a,{id:"response-data-container",className:t.chart,children:Object(v.jsx)(ie.a,{})}):Object(v.jsx)(l.a,{id:"response-data-container",className:t.chart,children:Object(v.jsx)(k,{data:a})})]}),Object(v.jsxs)(N.a,{direction:"row",spacing:22,xs:12,children:[Object(v.jsx)(N.a,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",alignContent:"flex-start",spacing:15,xs:12,children:Object(v.jsx)(B,{url:h?h.sentence.filepath:null})}),Object(v.jsx)(N.a,{direction:"column",justifyContent:"flex-end",alignItems:"flex-end",alignContent:"flex-end",spacing:12,xs:6,children:Object(v.jsx)(I,{alignSelf:"flex-end",sets:function(e){!function(e){var t=e,n=h.response_id;ce({audio:t,response_id:n}).then((function(e){var t=ae(e.data);s(t),y(!1)})),F()}(e),y(!0)}})})]})]})]}),Object(v.jsx)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"flex-start",spacing:5,children:Object(v.jsx)(d.a,{className:t.button,variant:"outlined",onClick:function(){A()},children:"Next"})})]})]})})),re=n(4),le=Object(M.a)(l.a)((function(e){var t=e.theme;return Object(A.a)(Object(A.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})})),de=Object(s.a)((function(e){return{paper:{padding:e.spacing(2),justifyContent:"center",minWidth:"95vw",height:"85vh",display:"flex",elevation:3,position:"relative"},container:{position:"relative",height:"100%",justifyContent:"center"},grid:{height:"50%",justifyContent:"space-evenly",spacing:"0",alignItems:"center",direction:"column",minHeight:"100%"},button:{position:"absolute",bottom:"50px",right:"50px"},chart:{justifyContent:"center",alignItems:"center",direction:"column",minHeight:"275px",marginBottom:"1vh",minWidth:"30vw"}}})),je=Object(u.e)((function(e){var t,n=de(),c=Object(i.useState)(null),a=Object(o.a)(c,2),s=a[0],r=a[1],b=Object(i.useState)(""),h=Object(o.a)(b,2),x=h[0],f=h[1],p=Object(i.useState)(0),y=Object(o.a)(p,2),C=y[0],w=y[1],S=Object(i.useState)(null),_=Object(o.a)(S,2),R=_[0],T=_[1],z=Object(i.useState)(null),B=Object(o.a)(z,2),A=B[0],q=B[1],M=Object(i.useState)(!1),P=Object(o.a)(M,2),D=P[0],X=P[1],Q=Object(i.useState)(!1),J=Object(o.a)(Q,2),U=J[0],G=J[1],V=Object(i.useState)(!1),K=Object(o.a)(V,2),Z=K[0],ee=K[1],te=Object(i.useRef)(),ne=Object(i.useRef)(),oe=["id","sentence"],se=Object(u.d)();return Object(i.useEffect)((function(){O(oe).then((function(e){void 0===t.type&&se.push("/done");var t=e.data;T(t),te.current.textContent=t.text.instructions,ne?ne.current.textContent=t.text.example_text:console.log("Undefined element")}))}),[]),Object(i.useEffect)((function(){q&&(G(!1),ee(!1),q(!1),w(0),f(""),r(null))}),[R]),Object(v.jsxs)("div",{children:[Object(v.jsx)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"baseline",alignContent:"center",spacing:5,children:Object(v.jsx)($,{childExampleRef:function(){return ne},childInstructionRef:te})}),Object(v.jsx)(l.a,{className:n.paper,children:Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(j.a,{marginRight:"50px",variant:"body1",component:"h1",gutterBottom:!0,children:R?R.text.instructions_short:"Loading..."}),Object(v.jsxs)(N.a,(t={direction:"column",justifyContent:"center",alignItems:"center",spacing:3},Object(re.a)(t,"spacing",5),Object(re.a)(t,"children",[Object(v.jsxs)(le,{children:[R?R.sentence.sentence:"Loading..."," "]}),Object(v.jsxs)(N.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:5,xs:6,children:[Object(v.jsx)(j.a,{alignSelf:"flex-start",marginRight:"50px",variant:"body1",component:"h2",gutterBottom:!0,xs:3,children:R?"Question: "+R.trial_id+" | Attempts: "+Y(R.response_id):null}),Object(v.jsxs)(N.a,{direction:"column",children:[D?Object(v.jsx)(l.a,{id:"response-data-container",className:n.chart,style:Object(re.a)({display:"flex",alignContent:"center"},"alignContent","center"),children:Object(v.jsx)(ie.a,{style:{display:"relative"}})}):Object(v.jsx)(l.a,{id:"response-data-container",className:n.chart,style:Object(re.a)({display:"flex",alignContent:"center"},"alignContent","center"),children:Object(v.jsx)(k,{data:s})}),Object(v.jsx)(I,{alignSelf:"flex-end",sets:function(e){!function(e){if(void 0!==e){var t=e,n=R.response_id;ce({audio:t,response_id:n}).then((function(e){var t=ae(e.data);r(t),X(!1)}))}else alert("Something went wrong with the recording. Please try again!")}(e),X(!0)}})]}),Object(v.jsxs)(E.a,{alignSelf:"flex-start",component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(v.jsx)(m.a,{id:"filled-multiline-flexible",label:"What did you do to sound polite?",multiline:!0,maxRows:4,value:x,onChange:function(e){f(e.currentTarget.value)},variant:"filled",minWidth:"300px"}),Object(v.jsx)(F.a,{in:U,children:Object(v.jsx)(W.a,{action:Object(v.jsx)(L.a,{"aria-label":"close",color:"inherit",size:"small"}),sx:{mb:2},children:"Well done! Click next to continue."})}),Object(v.jsx)(F.a,{in:Z,children:Object(v.jsx)(W.a,{action:Object(v.jsx)(L.a,{"aria-label":"close",color:"error",size:"small",onClick:function(){ee(!1)},children:Object(v.jsx)(H.a,{children:"close"})}),severity:"error",sx:{mb:2},children:"Try again! Remember to explain your intonation choices."})})]}),Object(v.jsx)(d.a,{style:{alignSelf:"flex-end"},variant:"outlined",onClick:function(){var e;e={userResponse:{data:s,text:x},target:R.target},e.target,function(){if(q(!0),s&&x){G(!0);var e={eval:1,response:{pitch:s,input:x},response_id:R.response_id};g(e).then((function(e){e.nextTaskId,e.nextType,e.nextTrialId,e.nextResponseId}))}else{ee(!0);var t={eval:0,response:"",response_id:R.response_id};g(t)}}()},disabled:!R||C>R.attempts,children:" Submit"}),Object(v.jsx)(d.a,{style:{alignSelf:"flex-end"},variant:"outlined",onClick:function(){O(oe).then((function(e){var t=e.data;console.log(t),t.task_id!=R.task_id?(console.log("Task completed. Moving to next task"),se.push("/".concat(t.type))):t.trial_id!=R.trial_id?(console.log("Trial completed. Moving to next trial"),T(t)):t.trial_id!=R.trial_id?(console.log("Response submitted. Moving to next attempt in trial set."),T(t)):console.log("Something went wrong, and task was not refreshed.")}))},disabled:!A,children:"Next"})]})]),t))]})})]})})),ue=Object(s.a)((function(e){return{content:{justifyContent:"center",display:"flex"},paper:{padding:e.spacing(2),minWidth:"100vw",height:"85vh",display:"flex",elevation:3,position:"relative",justifyContent:"center"}}}));p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var be=Object(u.e)((function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(o.a)(a,2),r=s[0],b=s[1],h=Object(i.useState)(!1),x=Object(o.a)(h,2),f=x[0],p=x[1],m=Object(i.useState)(null),y=Object(o.a)(m,2),w=y[0],k=y[1],S=Object(i.useState)(0),_=Object(o.a)(S,2),R=_[0],I=_[1],T=Object(i.useState)([]),z=Object(o.a)(T,2),A=z[0],q=z[1],M=Object(i.useState)(null),P=Object(o.a)(M,2),D=(P[0],P[1]),Q=["id","filepath","prominent_words"],J=Object(u.d)(),U=Object(i.useRef)(),G=Object(i.useRef)(),V=ue(),K=function(){I(R+1);var e=new Set;A.forEach((function(t){return e.add(t.value)}));var t=new Set(w.sentence.prominent_words.split(",")),n=new Set(Object(C.a)(t).filter((function(t){return!e.has(t)}))),i=new Set(Object(C.a)(e).filter((function(e){return!t.has(e)})));return console.log(n.size&&i.size),n.size||i.size?(b(!0),!1):(c(!0),console.log(e),!0)},Z=function(){O(Q).then((function(e){var t=e.data;console.log(t),t.task_id!=w.task_id?(console.log("Task completed. Moving to next task"),J.push("/".concat(t.type))):t.trial_id!=w.trial_id?(console.log("Trial completed. Moving to next trial"),k(t)):t.response_id!=w.response_id?(console.log("Response submitted. Moving to next attempt in trial set."),k(t)):console.log("Something went wrong, and task was not refreshed.")}))};return Object(i.useEffect)((function(){O(Q).then((function(e){var t=e.data;k(t),U.current.textContent=t.text.instructions,G.current.textContent=t.text.example_text}))}),[]),Object(i.useEffect)((function(){D&&(c(!1),b(!1),D(!1),I(0))}),[w]),Object(v.jsx)("div",{children:Object(v.jsxs)(l.a,{className:V.paper,children:[Object(v.jsx)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"flex-start",spacing:5,children:Object(v.jsx)(j.a,{alignSelf:"flex-start",marginRight:"50px",variant:"body1",component:"h2",gutterBottom:!0,xs:3,children:w?"Question: "+w.trial_id+" | Attempts: "+Y(w.response_id):null})}),Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:5,children:[Object(v.jsx)(j.a,{variant:"subtitle1",component:"h2",gutterBottom:!0,children:w?w.text.instructions_short:"Loading..."}),Object(v.jsx)(B,{url:w?w.sentence.filepath:null}),Object(v.jsxs)(E.a,{style:{width:"100%"},children:[Object(v.jsx)(F.a,{in:n,children:Object(v.jsx)(W.a,{action:Object(v.jsx)(L.a,{"aria-label":"close",color:"inherit",size:"small"}),sx:{mb:2},children:"Well done! Click next to continue."})}),Object(v.jsx)(F.a,{in:r,children:Object(v.jsxs)(W.a,{action:Object(v.jsx)(L.a,{"aria-label":"close",color:"error",size:"small",onClick:function(){Z()},children:Object(v.jsx)(H.a,{children:"close"})}),severity:"error",sx:{mb:2},children:["Try again! Remember to listen to the tone choice at the ",Object(v.jsx)("u",{children:"end"})," of the word."]})}),Object(v.jsx)(F.a,{in:f,children:Object(v.jsx)(W.a,{action:Object(v.jsx)(L.a,{"aria-label":"close",color:"error",size:"small"}),severity:"error",sx:{mb:2},children:"You've reached the maximum number of attempts. Click next to continue!"})})]}),Object(v.jsx)(N.a,{direction:"row",spacing:18,xs:12,children:Object(v.jsx)(X,{callback:function(){if(K()){var e={eval:1,response:{prominent_words:A},response_id:w.response_id};g(e).then((function(e){e.nextTaskId,e.nextType,e.nextTrialId,e.nextResponseId;D(!0)}))}else{var t={eval:0,response:{prominent_words:A},response_id:w.response_id};g(t).then((function(e){R===w.attempts?p(!0):b(!0),D(!0)}))}},wordList:A,setWordList:q,correct:n,incorrect:r,force:f})})]}),Object(v.jsx)(d.a,{size:"large",variant:"contained",style:{alignSelf:"flex-end"},onClick:function(){Z()},disabled:!n&&!f,children:"Next"})]})})})),he=Object(s.a)((function(e){return{content:{justifyContent:"center",display:"flex"},paper:{padding:e.spacing(2),flexDirection:"column",minWidth:"100vw",minHeight:"80vh",display:"flex",elevation:3,justifyContent:"center",alignItems:"center"},container:{position:"relative",height:"100%",justifyContent:"center"},button:{position:"absolute",bottom:"0",right:"0"},grid:{height:"50%",justifyContent:"center",spacing:"0",alignItems:"center",direction:"column",minHeight:"100%"}}})),xe=Object(u.e)((function(e){var t=he();return Object(v.jsx)("div",{className:t.content,children:Object(v.jsx)(l.a,{className:t.paper,children:Object(v.jsx)(r.a,{container:!0,className:t.grid,children:Object(v.jsx)(j.a,{variant:"h1",component:"h2",gutterBottom:!0,children:"Thank You!"})})})})}));function fe(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(u.a,{children:Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.b,{exact:!0,path:"/",component:z}),Object(v.jsx)(u.b,{exact:!0,path:"/perception-identification-tones",component:V}),Object(v.jsx)(u.b,{exact:!0,path:"/perception-discrimination",component:te}),Object(v.jsx)(u.b,{exact:!0,path:"/perception-identification-prominence",component:be}),Object(v.jsx)(u.b,{path:"/production-controlled",component:se}),Object(v.jsx)(u.b,{path:"/production-guided",component:je}),Object(v.jsx)(u.b,{exact:!0,path:"/done",component:xe})]})})})}var pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,259)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))};a.a.render(Object(v.jsx)(fe,{}),document.getElementById("root")),pe()}},[[173,1,2]]]);
//# sourceMappingURL=main.dd9ab258.chunk.js.map