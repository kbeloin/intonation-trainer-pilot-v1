(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{140:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(30),a=n.n(c),s=(n(140),n(7)),r=n(232),o=n(231),l=n(233),d=n(237),j=n(234),u=n(241),b=n(26),h=n.n(b),x=n(45),f=n(18),p=n.n(f);p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var O=function(){var e=Object(x.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"post",url:"/api/get-responses/",data:{params:t}});case 2:return n=e.sent,console.log(t),console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(x.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"post",url:"/api/submit-response/",data:t});case 2:return n=e.sent,console.log("Submitted response"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=n(236),v=(n(245),n(256),n(254),n(255),n(252),n(1));var y=n(225),C=n(16),w=n(69);w.a.register.apply(w.a,Object(C.a)(w.b));var k=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){var n=t.current.getContext("2d");new w.a(n,{type:"scatter",data:{datasets:[{label:"Pitch Frequency",data:e.data,borderWidth:1,backgroundColor:"rgb(255, 99, 132)"}]},options:{scales:{y:{},x:{}}}})}),[]),Object(v.jsx)("canvas",{id:"question-data",ref:t})},S={audioBitsPerSecond:16e3};new AudioContext,new FileReader;function _(){return(_=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0});case 2:return t=e.sent,e.abrupt("return",new MediaRecorder(t,S));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),r=Object(s.a)(a,2),o=r[0],l=r[1],d=Object(i.useState)(null),j=Object(s.a)(d,2),u=j[0],b=j[1],h=Object(i.useState)(null),x=Object(s.a)(h,2),f=x[0],p=x[1];Object(i.useEffect)((function(){if(null!==u){o?u.start():u.stop();var e=function(e){var t=new AudioContext,n=new FileReader;n.readAsArrayBuffer(e.data),n.onloadend=function(){console.log("data loaded"),t.decodeAudioData(n.result).then((function(t){console.log(t);var n=t.getChannelData(0);p(n),c(URL.createObjectURL(e.data))}))}};return u.addEventListener("dataavailable",e),function(){return u.removeEventListener("dataavailable",e)}}o&&function(){return _.apply(this,arguments)}().then(b,console.error)}),[u,o]);return[n,o,function(){l(!0)},function(){l(!1)},f]},R=function(e){var t=I(),n=Object(s.a)(t,5),c=n[0],a=n[1],r=n[2],l=n[3],j=n[4];return Object(i.useEffect)((function(){j?(console.log("Raw data ready."),e.sets(j)):console.log("No current audio.")}),[j]),Object(v.jsx)("div",{className:"Recorder",id:"recorder",ref:e.forwardedRef,children:Object(v.jsxs)(o.a,{container:!0,children:[Object(v.jsx)("audio",{src:c,controls:!0}),Object(v.jsx)(d.a,{onClick:r,disabled:a,children:"start"}),Object(v.jsx)(d.a,{onClick:l,disabled:!a,children:"stop"})]})})},N=n(235),T=Object(r.a)((function(e){return{content:{justifyContent:"center",display:"flex"},paper:{padding:e.spacing(2),minWidth:"100vw",minHeight:"85vh",display:"flex",elevation:3,position:"relative"},container:{}}}));p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var z=Object(u.e)((function(e){var t=Object(i.useState)("/"),n=Object(s.a)(t,2),c=(n[0],n[1],Object(i.useState)(!1)),a=Object(s.a)(c,2),r=a[0],b=(a[1],Object(i.useState)("")),h=Object(s.a)(b,2),x=h[0],f=h[1],g=(Object(i.useRef)(),Object(i.useRef)(),["id"]),C=Object(u.d)(),w=function(){O(g).then((function(e){console.log(e);var t=e.data;console.log(t.type),C.push("/".concat(t.type))}))},k=T();return Object(i.useEffect)((function(){O(g).then((function(e){var t=e.data;console.log(t),void 0!==t.type&&C.push("/".concat(t.type))}))}),[]),Object(v.jsx)("div",{children:Object(v.jsx)(l.a,{className:k.paper,children:Object(v.jsxs)(o.a,{container:!0,children:[Object(v.jsx)(o.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:Object(v.jsx)(o.a,{item:!0,xs:12,children:Object(v.jsx)(y.a,{in:r,children:Object(v.jsx)(j.a,{variant:"h1",component:"h",gutterBottom:!0})})})}),Object(v.jsx)(o.a,{container:!0,direction:"column",justifyContent:"flex-end",alignItems:"center",children:Object(v.jsxs)(o.a,{item:!0,xs:12,children:[Object(v.jsxs)(j.a,{variant:"subtitle1",component:"h2",gutterBottom:!0,children:["Welcome",Object(v.jsx)("br",{})]}),Object(v.jsxs)(j.a,{variant:"subtitle1",component:"h2",gutterBottom:!0,children:[Object(v.jsx)("br",{}),"Welcome to the study investigating English intonation and learning. Before starting, please observe the following requirements:",Object(v.jsxs)(N.a,{direction:"column",xs:4,children:[" ",Object(v.jsx)("br",{}),"1. Wear a headset with microphone (or make sure your computer has a microphone)."]}),Object(v.jsxs)(N.a,{direction:"column",xs:4,children:[" ",Object(v.jsx)("br",{}),"2. Please open the experiement in Google Chrome."]}),Object(v.jsxs)(N.a,{direction:"column",xs:4,children:[" ",Object(v.jsx)("br",{}),"3. You will have three attempts per question; once this number of attempts has been reached, the program will automatically progress."]})]})]})}),Object(v.jsx)(o.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:Object(v.jsxs)(N.a,{direction:"row",spacing:6,xs:12,children:[Object(v.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"code",label:"Experiment Code",variant:"outlined",value:x,onChange:function(e){f(e.target.value)}}),Object(v.jsx)(d.a,{onClick:function(){!function(e){O(g).then((function(t){console.log("Checking if user exists...");var n=t.data;"Next"===(null===n||void 0===n?void 0:n.message)&&w(),"None"===n&&p()({method:"post",url:"/api/create-response-set/",data:{code:e}}).then((function(e){console.log("Created response set for user."),w()}))}))}(x)},children:" Enter"})]})})]})})})})),W=function(e){return Object(v.jsx)("div",{className:"Player",children:Object(v.jsx)("audio",{controls:!0,src:e.url})})},B=n(247),L=n(239),E=n(249),q=n(248),A=n(250),F=n(246),M=n(244),H=function(e){var t;return 0===(t=e%3)?t+=3:t},D=n(243),P=Object(r.a)((function(e){return{content:{justifyContent:"center",display:"flex"},paper:{padding:e.spacing(2),minWidth:"100vw",height:"85vh",display:"flex",elevation:3,position:"relative",justifyContent:"center"}}}));p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var X=Object(u.e)((function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),r=Object(s.a)(a,2),o=r[0],b=r[1],h=Object(i.useState)(null),x=Object(s.a)(h,2),f=x[0],p=x[1],m=Object(i.useState)(null),y=Object(s.a)(m,2),C=y[0],w=y[1],k=Object(i.useState)(null),S=Object(s.a)(k,2),_=S[0],I=S[1],R=Object(i.useState)(null),T=Object(s.a)(R,2),z=T[0],D=T[1],X=Object(i.useState)(null),J=Object(s.a)(X,2),U=J[0],Y=J[1],G=(Object(i.useRef)(),Object(i.useRef)(),["id","filepath"]),V=Object(u.d)(),K=P(),Z=function(){c(!1),b(!1),O(G).then((function(e){var t=e.data;p(t),D(t.sentence[0]),Y(t.sentence[1])}))};return Object(i.useEffect)((function(){O(G).then((function(e){var t=e.data;p(t),D(t.sentence[0]),Y(t.sentence[1])}))}),[]),Object(v.jsx)("div",{children:Object(v.jsxs)(l.a,{className:K.paper,children:[Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:5,children:[Object(v.jsxs)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"baseline",alignContent:"center",spacing:5,children:[Object(v.jsx)(Q,{}),Object(v.jsx)(j.a,{alignSelf:"flex-start",marginRight:"50px",variant:"body1",component:"h2",gutterBottom:!0,xs:3,children:f?"Question ID: "+f.trial_id+" | Attempt: "+H(f.response_id)+" of 3":null})]}),Object(v.jsx)(j.a,{variant:"subtitle1",component:"h2",gutterBottom:!0,children:f?f.text.instructions_short:"Loading..."}),Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",alignContent:"center",spacing:6,children:[Object(v.jsxs)(N.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(j.a,{style:{marginRight:"20px",marginLeft:"20px"},variant:"subtitle1",component:"h2",gutterBottom:!0,children:"A"}),Object(v.jsx)(W,{url:z?z.filepath:null})]}),Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(j.a,{style:{marginRight:"20px",marginLeft:"20px"},variant:"subtitle1",component:"h2",gutterBottom:!0,children:"B"}),Object(v.jsx)(W,{url:U?U.filepath:null})]})]}),Object(v.jsxs)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"baseline",alignContent:"center",spacing:5,children:[Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(j.a,{style:{marginRight:"20px",marginLeft:"20px"},variant:"subtitle1",component:"h2",gutterBottom:!0,children:"More Polite?"}),Object(v.jsxs)(M.a,{orientation:"horizontal",value:C,exclusive:!0,onChange:function(e,t){console.log(t),w(t)},children:[Object(v.jsx)(F.a,{value:f?f.sentence[0]:-1,"aria-label":"A",fullWidth:!0,children:"Sentence A"}),Object(v.jsx)(F.a,{value:f?f.sentence[1]:-1,"aria-label":"B",fullWidth:!0,children:"Sentence B"})]})]}),Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:3,children:[Object(v.jsx)(j.a,{style:{marginRight:"20px",marginLeft:"20px"},variant:"subtitle1",component:"h2",gutterBottom:!0,children:"More Appropriate Prominence?"}),Object(v.jsxs)(M.a,{orientation:"horizontal",value:_,exclusive:!0,onChange:function(e,t){console.log(t),I(t)},children:[Object(v.jsx)(F.a,{value:f?f.sentence[0]:-1,"aria-label":"list",children:"Sentence A"}),Object(v.jsx)(F.a,{value:f?f.sentence[1]:-1,"aria-label":"quilt",children:"Sentence B"})]})]}),Object(v.jsx)(d.a,{size:"medium",variant:"contained",onClick:function(){!function(){var e=f.target,t=_;if(console.log(t),console.log(e),t.id!==e){b(!0);var n={eval:0,response:t.id,response_id:f.response_id};g(n)}else{c(!0),console.log(e);var i={eval:1,response:t.id,response_id:f.response_id};g(i)}}()},children:"Submit"})]})]}),Object(v.jsxs)(B.a,{style:{width:"100%"},children:[Object(v.jsx)(q.a,{in:n,children:Object(v.jsx)(L.a,{action:Object(v.jsx)(E.a,{"aria-label":"close",color:"inherit",size:"small"}),sx:{mb:2},children:"Well done! Click next to continue."})}),Object(v.jsx)(q.a,{in:o,children:Object(v.jsx)(L.a,{action:Object(v.jsx)(E.a,{"aria-label":"close",color:"error",size:"small",onClick:function(){Z()},children:Object(v.jsx)(A.a,{children:"close"})}),severity:"error",sx:{mb:2},children:"Not Quite!"})})]})]}),Object(v.jsx)(d.a,{size:"large",variant:"contained",style:{alignSelf:"flex-end"},onClick:function(){c(!1),O(["id"]).then((function(e){var t=e.data;console.log(t),t.task_id!=f.task_id&&(console.log("Task completed. Moving to next task"),V.push("/".concat(t.type))),t.trial_id!=f.trial_id?(console.log("Trial completed. Moving to next trial"),Z()):(Z(),p(t),D(t.sentence[0]),Y(t.sentence[1]))}))},disabled:!n,children:"Next"})]})})})),Q=function(){P();var e=Object(i.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(E.a,{"aria-label":"close",color:"info",size:"small",onClick:function(){c(!n)},children:Object(v.jsx)(A.a,{children:"help"})}),Object(v.jsx)(D.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+2}},open:n,onClick:function(){c(!1)},children:Object(v.jsx)(l.a,{style:{maxWidth:"1100px",padding:"3%"},justifyContent:"center",minWidth:"95vw",height:"50vh",display:"flex",elevation:3,position:"relative",children:Object(v.jsx)(B.a,{children:Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsxs)(N.a,{direction:"row",children:["Task 3. Listening. ",Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("br",{}),"In this task, you will listen to pairs of sentences. Sentences in each pair will have the same words but different intonation. You will be asked to choose the sentence that has a more natural and polite tone choice (rising, falling, or level) and a more natural and appropriate prominence (stressed words).                    "]}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("br",{}),"Intonation and politeness."]}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsx)("b",{children:"Tone choices"}),Object(v.jsx)("br",{}),"In English, falling tone choices are considered more appropriate and polite.",Object(v.jsx)("br",{}),"Rising and level tone choices are less polite and are usually not used to make requests to professors, teachers, bosses, advisors, etc.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsx)("b",{children:"Prominence"}),Object(v.jsx)("br",{}),"In English, only the words that are important for the request are stressed in a sentence. ",Object(v.jsx)("br",{}),"In general, only 2-3 contextually important words are normally prominent in a sentence.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]})]})]})})})})]})},J=n(257);p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var U=function(){var e=Object(x.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"post",url:"/api/process/",data:t,headers:{"Content-Type":"application/octet-stream"},transformRequest:[function(e){return JSON.stringify(e)}],transformResponse:[function(e){return JSON.parse(e)}]});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){console.log(e);for(var t=e.x_y||[],n=0;n<t.length;n++)0===t[n].x&&(t[n].x=NaN),0===t[n].y&&(t[n].y=NaN);return t},G=Object(r.a)((function(e){return{content:{justifyContent:"center",display:"flex"},paper:{padding:e.spacing(2),justifyContent:"center",minWidth:"100vw",height:"85vh",display:"flex",elevation:3,position:"relative"}}}));p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var V=Object(u.e)((function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),r=Object(s.a)(a,2),o=r[0],b=r[1],h=Object(i.useState)(null),x=Object(s.a)(h,2),f=x[0],p=x[1],m=["id","filepath","intonation"],y=Object(u.d)(),C=(Object(i.useRef)(),G()),w=function(){c(!1),b(!1),O(m).then((function(e){var t=e.data;p(t)}))},k=function(e){var t=e.currentTarget.value;if(t!==f.target){b(!0);var n={eval:0,response:t,response_id:f.response_id};g(n)}else{c(!0),console.log(t);var i={eval:1,response:t,response_id:f.response_id};g(i)}};return Object(i.useEffect)((function(){O(m).then((function(e){var t=e.data;p(t)}))}),[]),Object(v.jsx)("div",{children:Object(v.jsxs)(l.a,{className:C.paper,children:[Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:5,children:[Object(v.jsxs)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"baseline",alignContent:"center",spacing:5,children:[Object(v.jsx)(K,{}),Object(v.jsx)(j.a,{alignSelf:"flex-start",marginRight:"50px",variant:"body1",component:"h2",gutterBottom:!0,xs:3,children:f?"Question ID: "+f.trial_id+" | Attempt: "+H(f.response_id)+" of 3":null})]}),Object(v.jsx)(j.a,{variant:"subtitle1",component:"h2",gutterBottom:!0,children:f?f.text.instructions_short:"Loading..."}),Object(v.jsx)(W,{url:f?f.sentence.filepath:null}),Object(v.jsxs)(B.a,{style:{width:"100%"},children:[Object(v.jsx)(q.a,{in:n,children:Object(v.jsx)(L.a,{action:Object(v.jsx)(E.a,{"aria-label":"close",color:"inherit",size:"small"}),sx:{mb:2},children:"Well done! Click next to continue."})}),Object(v.jsx)(q.a,{in:o,children:Object(v.jsxs)(L.a,{action:Object(v.jsx)(E.a,{"aria-label":"close",color:"error",size:"small",onClick:function(){w()},children:Object(v.jsx)(A.a,{children:"close"})}),severity:"error",sx:{mb:2},children:["Try again! Remember to listen to the tone choice at the ",Object(v.jsx)("u",{children:"end"})," of the word."]})})]}),Object(v.jsxs)(N.a,{direction:"row",spacing:18,xs:12,children:[Object(v.jsx)(d.a,{variant:"outlined",size:"large",onClick:function(e){return k(e)},value:"rising",disabled:n||o,children:"Rising"}),Object(v.jsx)(d.a,{variant:"outlined",size:"large",onClick:function(e){return k(e)},value:"level",disabled:n||o,children:"Level"}),Object(v.jsx)(d.a,{variant:"outlined",size:"large",onClick:function(e){return k(e)},value:"falling",disabled:n||o,children:"Falling"})]})]}),Object(v.jsx)(d.a,{size:"large",variant:"contained",style:{alignSelf:"flex-end"},onClick:function(){O(["id"]).then((function(e){var t=e.data;t.task_id!=f.task_id&&(console.log("Task completed. Moving to next task"),y.push("/".concat(t.type))),t.trial_id!=f.trial_id?(console.log("Trial completed. Moving to next trial"),w()):p(t)}))},disabled:!n,children:"Next"})]})})})),K=function(){G();var e=Object(i.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(E.a,{"aria-label":"close",color:"info",size:"small",onClick:function(){c(!n)},children:Object(v.jsx)(A.a,{children:"help"})}),Object(v.jsx)(D.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+2}},open:n,onClick:function(){c(!1)},children:Object(v.jsx)(l.a,{style:{maxWidth:"1100px",padding:"3%"},justifyContent:"center",minWidth:"95vw",height:"50vh",display:"flex",elevation:3,position:"relative",children:Object(v.jsx)(B.a,{children:Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsxs)(N.a,{direction:"row",children:["Task 1. Listening.",Object(v.jsx)("br",{})]}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("br",{}),"In this task, you will listen to requests spoken with different intonations.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"For each request, you will identify the tone choice AT THE END of the sentence, where the request is happening."]}),Object(v.jsx)("br",{}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("br",{}),"In English, there are three general types of intonation."]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("b",{children:"Falling"})," = the voice at the end of the request goes down.",Object(v.jsx)("br",{}),Object(v.jsx)("b",{children:"Rising"})," = the voice at the end of the request goes down.",Object(v.jsx)("br",{}),Object(v.jsx)("b",{children:"Level"})," = the voice does not go up or down.",Object(v.jsx)("br",{})]})]})})})})]})},Z=Object(r.a)((function(e){return{paper:{padding:e.spacing(2),justifyContent:"center",minWidth:"100vw",height:"40vh",display:"flex",elevation:3,position:"relative"}}}));p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var $=function(e){Z();var t=Object(i.useState)(!0),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(E.a,{"aria-label":"close",color:"info",size:"small",onClick:function(){a(!c)},children:Object(v.jsx)(A.a,{children:"help"})}),Object(v.jsx)(D.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+2}},open:c,onClick:function(){a(!1)},children:Object(v.jsx)(l.a,{style:{maxWidth:"1100px",margins:"10px"},children:Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsx)(N.a,{direction:"row",children:Object(v.jsx)(j.a,{children:"Task 1. Listening."})}),Object(v.jsx)(N.a,{direction:"row",children:Object(v.jsxs)(j.a,{children:["In this task, you will listen to requests spoken with different intonations.","\n"," For each request, you will identify the tone choice AT THE END of the sentence, where the request is happening.","\n","In English, there are three general types of intonation.","\n",Object(v.jsx)("b",{children:"Falling"})," = the voice at the end of the request goes down.","\n",Object(v.jsx)("b",{children:"Rising"})," = the voice at the end of the request goes down.","\n",Object(v.jsx)("b",{children:"Level"})," = the voice does not go up or down.","\n"]})})]})})})]})},ee=Object(r.a)((function(e){return{paper:{padding:e.spacing(2),justifyContent:"center",minWidth:"95vw",height:"85vh",display:"flex",elevation:3,position:"relative"},container:{position:"relative",height:"100%",justifyContent:"center"},grid:{height:"50%",justifyContent:"space-evenly",spacing:"0",alignItems:"center",direction:"column",minHeight:"100%"},button:{position:"absolute",bottom:"50px",right:"50px"},chart:{justifyContent:"center",alignItems:"center",direction:"column",minHeight:"100%",marginBottom:"1vh",minWidth:"30vw"}}})),te=Object(u.e)((function(e){var t=ee(),n=Object(i.useState)(null),c=Object(s.a)(n,2),a=c[0],r=c[1],o=Object(i.useState)(null),b=Object(s.a)(o,2),h=b[0],x=b[1],f=Object(i.useState)(!1),p=Object(s.a)(f,2),m=p[0],y=p[1],C=Object(i.useState)(!1),w=Object(s.a)(C,2),S=(w[0],w[1]),_=Object(i.useState)(!1),I=Object(s.a)(_,2),T=(I[0],I[1]),z=["id","filepath","pitch"],B=Object(i.useRef)(),L=Object(i.useRef)(),E=Object(u.d)(),q=function(){if(a){S(!0);var e={eval:1,response:{data:a},response_id:h.response_id};return g(e),void A()}T(!0);var t={eval:0,response:"",response_id:h.response_id};g(t)},A=function(){O(z).then((function(e){var t=e.data;console.log(t),t.task_id!=h.task_id&&(console.log("Task completed. Moving to next task"),E.push("/".concat(t.type))),t.trial_id!=h.trial_id?(console.log("Trial completed. Moving to next trial"),S(!1),T(!1),O(z).then((function(e){var t=e.data;x(t)}))):x(t)}))};return Object(i.useEffect)((function(){O(z).then((function(e){var t=e.data;x(t)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsxs)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"baseline",alignContent:"center",spacing:5,children:[Object(v.jsx)($,{childExampleRef:L,childInstructionRef:B}),Object(v.jsx)(j.a,{alignSelf:"flex-start",marginRight:"50px",variant:"body1",component:"h2",gutterBottom:!0,xs:3,children:h?"Question ID: "+h.trial_id+" | Attempt: "+H(h.response_id)+" of 3":null})]}),Object(v.jsxs)(l.a,{className:t.paper,children:[Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:5,children:[Object(v.jsx)(j.a,{marginRight:"50px",variant:"body1",component:"h1",gutterBottom:!0,children:h?h.text.instructions_short:"Loading..."}),Object(v.jsxs)(N.a,{direction:"column",spacing:5,children:[Object(v.jsxs)(N.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:5,xs:6,children:[h?Object(v.jsx)(l.a,{id:"question-data-container",className:t.chart,children:Object(v.jsx)(k,{data:Y(h.sentence.pitch)})}):Object(v.jsx)(l.a,{id:"response-data-container",className:t.chart,children:Object(v.jsx)(J.a,{})}),m?Object(v.jsx)(l.a,{id:"response-data-container",className:t.chart,children:Object(v.jsx)(J.a,{})}):Object(v.jsx)(l.a,{id:"response-data-container",className:t.chart,children:Object(v.jsx)(k,{data:a})})]}),Object(v.jsxs)(N.a,{direction:"row",spacing:22,xs:12,children:[Object(v.jsx)(N.a,{direction:"column",justifyContent:"flex-start",alignItems:"flex-start",alignContent:"flex-start",spacing:15,xs:12,children:Object(v.jsx)(W,{url:h?h.sentence.filepath:null})}),Object(v.jsx)(N.a,{direction:"column",justifyContent:"flex-end",alignItems:"flex-end",alignContent:"flex-end",spacing:12,xs:6,children:Object(v.jsx)(R,{alignSelf:"flex-end",sets:function(e){!function(e){var t=e,n=h.response_id;U({audio:t,response_id:n}).then((function(e){var t=Y(e.data);r(t),y(!1)})),q()}(e),y(!0)}})})]})]})]}),Object(v.jsx)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"flex-start",spacing:5,children:Object(v.jsx)(d.a,{className:t.button,variant:"outlined",onClick:function(){A()},children:"Next"})})]})]})})),ne=n(4),ie=n(35),ce=n(5),ae=Object(ce.a)(l.a)((function(e){var t=e.theme;return Object(ie.a)(Object(ie.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})})),se=Object(r.a)((function(e){return{paper:{padding:e.spacing(2),justifyContent:"center",minWidth:"95vw",height:"85vh",display:"flex",elevation:3,position:"relative"},container:{position:"relative",height:"100%",justifyContent:"center"},grid:{height:"50%",justifyContent:"space-evenly",spacing:"0",alignItems:"center",direction:"column",minHeight:"100%"},button:{position:"absolute",bottom:"50px",right:"50px"},chart:{justifyContent:"center",alignItems:"center",direction:"column",minHeight:"275px",marginBottom:"1vh",minWidth:"30vw"}}})),re=Object(u.e)((function(e){var t,n=se(),c=Object(i.useState)(null),a=Object(s.a)(c,2),r=a[0],o=a[1],b=Object(i.useState)(""),h=Object(s.a)(b,2),x=h[0],f=h[1],p=Object(i.useState)(0),y=Object(s.a)(p,2),C=y[0],w=y[1],S=Object(i.useState)(null),_=Object(s.a)(S,2),I=_[0],T=_[1],z=Object(i.useState)(null),W=Object(s.a)(z,2),F=W[0],M=W[1],D=Object(i.useState)(!1),P=Object(s.a)(D,2),X=P[0],Q=P[1],G=Object(i.useState)(!1),V=Object(s.a)(G,2),K=V[0],Z=V[1],$=Object(i.useState)(!1),ee=Object(s.a)($,2),te=ee[0],ie=ee[1],ce=Object(i.useRef)(),re=Object(i.useRef)(),le=["id","sentence"],de=Object(u.d)();return Object(i.useEffect)((function(){O(le).then((function(e){"Done"===e.type&&de.push("/done");var t=e.data;T(t),ce.current.textContent=t.text.instructions,re?re.current.textContent=t.text.example_text:console.log("Undefined element")}))}),[]),Object(i.useEffect)((function(){M&&(Z(!1),ie(!1),M(!1),w(0),f(""),o(null))}),[I]),Object(v.jsx)("div",{children:Object(v.jsx)(l.a,{className:n.paper,children:Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:5,children:[Object(v.jsxs)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"baseline",alignContent:"center",spacing:5,children:[Object(v.jsx)(oe,{}),Object(v.jsx)(j.a,{alignSelf:"flex-start",marginRight:"50px",variant:"body1",component:"h2",gutterBottom:!0,xs:3,children:I?"Question ID: "+I.trial_id+" | Attempt: "+H(I.response_id)+" of 3":null})]}),Object(v.jsx)(j.a,{variant:"subtitle1",component:"h2",gutterBottom:!0,children:I?I.text.instructions_short:"Loading..."}),Object(v.jsxs)(N.a,(t={direction:"column",justifyContent:"center",alignItems:"center",spacing:3},Object(ne.a)(t,"spacing",5),Object(ne.a)(t,"children",[Object(v.jsxs)(ae,{children:[I?I.sentence.sentence:"Loading..."," "]}),Object(v.jsxs)(N.a,{direction:"row",justifyContent:"center",alignItems:"center",spacing:5,xs:6,children:[Object(v.jsxs)(N.a,{direction:"column",children:[X?Object(v.jsx)(l.a,{id:"response-data-container",className:n.chart,style:Object(ne.a)({display:"flex",alignContent:"center"},"alignContent","center"),children:Object(v.jsx)(J.a,{style:{display:"relative"}})}):Object(v.jsx)(l.a,{id:"response-data-container",className:n.chart,style:Object(ne.a)({display:"flex",alignContent:"center"},"alignContent","center"),children:Object(v.jsx)(k,{data:r})}),Object(v.jsx)(R,{alignSelf:"flex-end",sets:function(e){!function(e){if(void 0!==e){var t=e,n=I.response_id;U({audio:t,response_id:n}).then((function(e){var t=Y(e.data);o(t),Q(!1)}))}else alert("Something went wrong with the recording. Please try again!")}(e),Q(!0)}})]}),Object(v.jsxs)(B.a,{alignSelf:"flex-start",component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(v.jsx)(m.a,{id:"filled-multiline-flexible",label:"What did you do to sound polite?",multiline:!0,maxRows:4,value:x,onChange:function(e){f(e.currentTarget.value)},variant:"filled",minWidth:"300px"}),Object(v.jsx)(q.a,{in:K,children:Object(v.jsx)(L.a,{action:Object(v.jsx)(E.a,{"aria-label":"close",color:"inherit",size:"small"}),sx:{mb:2},children:"Well done! Click next to continue."})}),Object(v.jsx)(q.a,{in:te,children:Object(v.jsx)(L.a,{action:Object(v.jsx)(E.a,{"aria-label":"close",color:"error",size:"small",onClick:function(){ie(!1)},children:Object(v.jsx)(A.a,{children:"close"})}),severity:"error",sx:{mb:2},children:"Try again! Remember to explain your intonation choices."})})]}),Object(v.jsx)(d.a,{style:{alignSelf:"flex-end"},variant:"outlined",onClick:function(){var e;e={userResponse:{data:r,text:x},target:I.target},e.target,function(){if(M(!0),r&&x){Z(!0);var e={eval:1,response:{pitch:r,input:x},response_id:I.response_id};g(e).then((function(e){e.nextTaskId,e.nextType,e.nextTrialId,e.nextResponseId}))}else{ie(!0);var t={eval:0,response:"",response_id:I.response_id};g(t)}}()},disabled:!I||C>I.attempts,children:" Submit"}),Object(v.jsx)(d.a,{style:{alignSelf:"flex-end"},variant:"outlined",onClick:function(){O(le).then((function(e){var t=e.data;console.log(t),"Done"===t&&de.push("/done"),t.task_id!=I.task_id?(console.log("Task completed. Moving to next task"),de.push("/".concat(t.type))):t.trial_id!=I.trial_id?(console.log("Trial completed. Moving to next trial"),T(t)):t.trial_id!=I.trial_id?(console.log("Response submitted. Moving to next attempt in trial set."),T(t)):console.log("Something went wrong, and task was not refreshed.")}))},disabled:!F,children:"Next"})]})]),t))]})})})})),oe=function(){se();var e=Object(i.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(E.a,{"aria-label":"close",color:"info",size:"small",onClick:function(){c(!n)},children:Object(v.jsx)(A.a,{children:"help"})}),Object(v.jsx)(D.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+2}},open:n,onClick:function(){c(!1)},children:Object(v.jsx)(l.a,{style:{maxWidth:"1100px",padding:"3%"},justifyContent:"center",minWidth:"95vw",height:"50vh",display:"flex",elevation:3,position:"relative",children:Object(v.jsx)(B.a,{children:Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsxs)(N.a,{direction:"row",children:["Task 4. Speaking.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("br",{}),"In this last task, you will record yourself saying requests, paying attention to the tone choices and prominence.                    "]}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("br",{}),"Repeat the sentence you see below. Remember to pay attention to your tone choices at the end of the sentence and your prominence (stressed words).",Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsx)("b",{children:"Tone choices: "}),Object(v.jsx)("br",{}),"Remember that falling intonation is more polite and appropriate at the end of a request to a professor or an advisor.",Object(v.jsx)("br",{})]}),Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsx)("b",{children:"Prominence"})," ",Object(v.jsx)("br",{}),"Remember to only stress contextually important words in the sentence (2-3 words maximum)."]})]})]})})})})]})},le=n(251),de=n(118),je=Object(ce.a)(le.a)((function(e){var t=e.theme;return Object(ie.a)(Object(ie.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})})),ue=function(e){var t=e.callback,n=e.wordList,c=e.setWordList,a=e.correct,r=e.incorrect,o=e.force,l=Object(i.useState)(""),j=Object(s.a)(l,2),u=j[0],b=j[1];return Object(v.jsxs)(N.a,{direction:"column",spacing:1,children:[Object(v.jsxs)(N.a,{direction:"row",spacing:6,xs:12,children:[Object(v.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"code",label:"Enter Word",variant:"outlined",value:u,onChange:function(e){b(e.target.value)}}),Object(v.jsx)(d.a,{onClick:function(){var e=n.concat({value:u.toLowerCase(),id:Object(de.v4)()});c(e),b("")},value:u,disabled:a||r||o,children:" Add "}),Object(v.jsx)(d.a,{onClick:function(){t(n)},disabled:a||r||o,children:" Submit"})]}),Object(v.jsx)(N.a,{direction:"row",spacing:2,children:n.map((function(e){return Object(v.jsxs)(je,{children:[e.value,Object(v.jsx)(E.a,{"aria-label":"close",color:"info",size:"small",onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}(e.id)},children:Object(v.jsx)(A.a,{children:"close"})})]},e.id)}))})]})},be=Object(r.a)((function(e){return{content:{justifyContent:"center",display:"flex"},paper:{padding:e.spacing(2),minWidth:"100vw",height:"85vh",display:"flex",elevation:3,position:"relative",justifyContent:"center"}}}));p.a.defaults.xsrfCookieName="csrftoken",p.a.defaults.xsrfHeaderName="X-CSRFToken";var he=Object(u.e)((function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),r=Object(s.a)(a,2),o=r[0],b=r[1],h=Object(i.useState)(!1),x=Object(s.a)(h,2),f=x[0],p=x[1],m=Object(i.useState)(null),y=Object(s.a)(m,2),w=y[0],k=y[1],S=Object(i.useState)(0),_=Object(s.a)(S,2),I=_[0],R=_[1],T=Object(i.useState)([]),z=Object(s.a)(T,2),F=z[0],M=z[1],D=Object(i.useState)(null),P=Object(s.a)(D,2),X=(P[0],P[1]),Q=["id","filepath","prominent_words"],J=Object(u.d)(),U=(Object(i.useRef)(),Object(i.useRef)(),be()),Y=function(){R(I+1);var e=new Set;F.forEach((function(t){return e.add(t.value)}));var t=new Set(w.sentence.prominent_words.split(",")),n=new Set(Object(C.a)(t).filter((function(t){return!e.has(t)}))),i=new Set(Object(C.a)(e).filter((function(e){return!t.has(e)})));return console.log(n.size&&i.size),n.size||i.size?(b(!0),!1):(c(!0),console.log(e),!0)},G=function(){O(Q).then((function(e){var t=e.data;console.log(t),t.task_id!=w.task_id?(console.log("Task completed. Moving to next task"),J.push("/".concat(t.type))):t.trial_id!=w.trial_id?(console.log("Trial completed. Moving to next trial"),M([]),k(t)):t.response_id!=w.response_id?(console.log("Response submitted. Moving to next attempt in trial set."),k(t)):console.log("Something went wrong, and task was not refreshed.")}))};return Object(i.useEffect)((function(){O(Q).then((function(e){var t=e.data;k(t)}))}),[]),Object(i.useEffect)((function(){X&&(c(!1),b(!1),X(!1),R(0))}),[w]),Object(v.jsx)("div",{children:Object(v.jsxs)(l.a,{className:U.paper,children:[Object(v.jsxs)(N.a,{direction:"column",justifyContent:"center",alignItems:"center",spacing:5,children:[Object(v.jsxs)(N.a,{direction:"row",justifyContent:"flex-start",alignItems:"baseline",alignContent:"center",spacing:5,children:[Object(v.jsx)(xe,{}),Object(v.jsx)(j.a,{alignSelf:"flex-start",marginRight:"50px",variant:"body1",component:"h2",gutterBottom:!0,xs:3,children:w?"Question ID: "+w.trial_id+" | Attempt: "+H(w.response_id)+" of 3":null})]}),Object(v.jsx)(j.a,{variant:"subtitle1",component:"h2",gutterBottom:!0,children:w?w.text.instructions_short:"Loading..."}),Object(v.jsx)(W,{url:w?w.sentence.filepath:null}),Object(v.jsxs)(B.a,{style:{width:"100%"},children:[Object(v.jsx)(q.a,{in:n,children:Object(v.jsx)(L.a,{action:Object(v.jsx)(E.a,{"aria-label":"close",color:"inherit",size:"small"}),sx:{mb:2},children:"Well done! Click next to continue."})}),Object(v.jsx)(q.a,{in:o,children:Object(v.jsx)(L.a,{action:Object(v.jsx)(E.a,{"aria-label":"close",color:"error",size:"small",onClick:function(){G()},children:Object(v.jsx)(A.a,{children:"close"})}),severity:"error",sx:{mb:2},children:"Try again! Listen and try again."})}),Object(v.jsx)(q.a,{in:f,children:Object(v.jsx)(L.a,{action:Object(v.jsx)(E.a,{"aria-label":"close",color:"error",size:"small"}),severity:"error",sx:{mb:2},children:"You've reached the maximum number of attempts. Click next to continue!"})})]}),Object(v.jsx)(N.a,{direction:"row",spacing:18,xs:12,children:Object(v.jsx)(ue,{callback:function(){if(Y()){var e={eval:1,response:{prominent_words:F},response_id:w.response_id};console.log("Correct response registered."),g(e).then((function(e){e.nextTaskId,e.nextType,e.nextTrialId,e.nextResponseId;X(!0)}))}else{console.log("Incorrect response registered.");var t={eval:0,response:{prominent_words:F},response_id:w.response_id};g(t).then((function(e){console.log("Attempts: ",I),console.log("Attempts: ",w.attempts),I===w.attempts?p(!0):b(!0),X(!0)}))}},wordList:F,setWordList:M,correct:n,incorrect:o,force:f})})]}),Object(v.jsx)(d.a,{size:"large",variant:"contained",style:{alignSelf:"flex-end"},onClick:function(){G()},disabled:!n&&!f,children:"Next"})]})})})),xe=function(){be();var e=Object(i.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(v.jsxs)("div",{children:[Object(v.jsx)(E.a,{"aria-label":"close",color:"info",size:"small",onClick:function(){c(!n)},children:Object(v.jsx)(A.a,{children:"help"})}),Object(v.jsx)(D.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+2}},open:n,onClick:function(){c(!1)},children:Object(v.jsx)(l.a,{style:{maxWidth:"1100px",padding:"3%"},justifyContent:"center",minWidth:"95vw",height:"50vh",display:"flex",elevation:3,position:"relative",children:Object(v.jsx)(B.a,{children:Object(v.jsxs)(N.a,{direction:"column",children:[Object(v.jsxs)(N.a,{direction:"row",children:["Task 2: Listening",Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("br",{}),"In this task, you will listen to requests spoken with different intonation."]}),Object(v.jsx)("br",{}),Object(v.jsxs)(N.a,{direction:"row",children:[Object(v.jsx)("br",{}),"For each request, you will identify the prominent words."]}),Object(v.jsx)("br",{}),Object(v.jsxs)(N.a,{direction:"row",children:["Prominent words are those words that are stressed in a sentence. They are usually ",Object(v.jsx)("b",{children:"louder"})," and a ",Object(v.jsx)("b",{children:"bit longer"})," than the other words."]})]})})})})]})},fe=Object(r.a)((function(e){return{content:{justifyContent:"center",display:"flex"},paper:{padding:e.spacing(2),flexDirection:"column",minWidth:"100vw",minHeight:"80vh",display:"flex",elevation:3,justifyContent:"center",alignItems:"center"},container:{position:"relative",height:"100%",justifyContent:"center"},button:{position:"absolute",bottom:"0",right:"0"},grid:{height:"50%",justifyContent:"center",spacing:"0",alignItems:"center",direction:"column",minHeight:"100%"}}})),pe=Object(u.e)((function(e){var t=fe();return Object(v.jsx)("div",{className:t.content,children:Object(v.jsx)(l.a,{className:t.paper,children:Object(v.jsx)(o.a,{container:!0,className:t.grid,children:Object(v.jsx)(j.a,{variant:"h1",component:"h2",gutterBottom:!0,children:"Thank You!"})})})})}));function Oe(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(u.a,{children:Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.b,{exact:!0,path:"/",component:z}),Object(v.jsx)(u.b,{exact:!0,path:"/perception-identification-tones",component:V}),Object(v.jsx)(u.b,{exact:!0,path:"/perception-discrimination",component:X}),Object(v.jsx)(u.b,{exact:!0,path:"/perception-identification-prominence",component:he}),Object(v.jsx)(u.b,{path:"/production-controlled",component:te}),Object(v.jsx)(u.b,{path:"/production-guided",component:re}),Object(v.jsx)(u.b,{path:"/done",component:pe})]})})})}var ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,259)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};a.a.render(Object(v.jsx)(Oe,{}),document.getElementById("root")),ge()}},[[173,1,2]]]);
//# sourceMappingURL=main.0d8636c0.chunk.js.map