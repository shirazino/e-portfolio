(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{35:function(e,t,s){},36:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var c=s(29),i=s.n(c),a=(s(35),s(36),s(11)),r=s(1),n=s(8),l=s(0);function o(e){var t=e.notionBlock,c=Object(r.useState)(null),i=Object(a.a)(c,2),n=i[0],o=i[1],j=Object(r.useState)(!0),d=Object(a.a)(j,2),h=d[0],m=d[1];Object(r.useEffect)((function(){s(16)({method:"get",url:"https://notion-api-teal.vercel.app/getblock/".concat(t),headers:{}}).then((function(e){o(e.data),m(!1)})).catch((function(e){o(e)}))}),[]);return Object(l.jsx)("div",{children:h?Object(l.jsx)("h3",{children:"fetching..."}):function(){var e=n.results[0].paragraph.text[0].plain_text,t=n.results[1].paragraph.text[0].plain_text,s=n.results[2].paragraph.text[0].plain_text;return n.status<=400?Object(l.jsx)("p",{children:"server error"}):Object(l.jsxs)("p",{children:[e,Object(l.jsx)("br",{}),t,Object(l.jsx)("br",{}),s]})}()})}function j(){return Object(l.jsx)("div",{className:"d-flex flex-nowrap mb-3",children:Object(l.jsxs)("a",{href:"https://github.com/kashif-js",className:"justLinks mx-auto",children:["See more on GitHub",Object(l.jsx)("img",{className:"ms-2",src:"https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-1.png&r=255&g=255&b=255",height:"30px",width:"30px",alt:"git logo"})]})})}function d(){var e={React:["HTML Tutor","HTML Tutor backend","e-Portfolio","Frontend SPA"],ReactNative:["Coffi-da reviews app"],PHP:["Games reviews PHP","PHP Survey"],Java:["Java Movies DB","Java Aircraft Passenger","Android Programming"],other:["Notion API","Local Mosque IOT","Out Of The Loop game"]},t=[e.React,e.ReactNative,e.PHP,e.Java,e.other],s=t[0].map((function(e,t){return Object(l.jsx)(n.b,{className:"btns",to:"/work/"+e,children:e},t)})),c=t[1].map((function(e,t){return Object(l.jsx)(n.b,{className:"btns",to:"/work/"+e,children:e},t)})),i=t[2].map((function(e,t){return Object(l.jsx)(n.b,{className:"btns",to:"/work/"+e,children:e},t)})),a=t[3].map((function(e,t){return Object(l.jsx)(n.b,{className:"btns",to:"/work/"+e,children:e},t)})),r=t[4].map((function(e,t){return Object(l.jsx)(n.b,{className:"btns",to:"/work/"+e,children:e},t)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"",children:"My work"}),Object(l.jsxs)("p",{children:["Many of my projects are web development websites mostly done with React & Node JS, which involve appropriate industry standard techniques.",Object(l.jsx)("br",{}),"Here I have added my most successful projects from GitHub!"]}),Object(l.jsx)("h5",{children:Object.keys(e)[0]}),Object(l.jsx)("p",{className:"d-flex flex-wrap flex-row",children:s}),Object(l.jsx)("h5",{children:Object.keys(e)[1].replace("t","t ")}),Object(l.jsx)("p",{className:"d-flex flex-wrap flex-row",children:c}),Object(l.jsx)("h5",{children:Object.keys(e)[2]}),Object(l.jsx)("p",{className:"d-flex flex-wrap flex-row",children:i}),Object(l.jsx)("h5",{children:Object.keys(e)[3]}),Object(l.jsx)("p",{className:"d-flex flex-wrap flex-row",children:a}),Object(l.jsx)("h5",{children:Object.keys(e)[4]}),Object(l.jsx)("p",{className:"d-flex flex-wrap flex-row",children:r})]})}function h(){var e={Web_development:["JavaScript","React JS","TypeScript","CSS & Animations"],Languages:["Java","Python"],Back_end:["Node JS","Express JS","PHP","Java Jersey","API dev Postman","Serverless computing"],Mobile:["React Native","Android (Java)"],Platforms:["AWS","Heroku","GCP","Vercel","GitHub"]},t=[e.Web_development,e.Languages,e.Back_end,e.Mobile,e.Platforms],s=[];for(var c in e)s.push(c);var i=t[0].map((function(e,t){return Object(l.jsx)("p",{className:"skills",children:e},t)})),a=t[1].map((function(e,t){return Object(l.jsx)("p",{className:"skills",children:e},t)})),r=t[2].map((function(e,t){return Object(l.jsx)("p",{className:"skills",children:e},t)})),n=t[3].map((function(e,t){return Object(l.jsx)("p",{className:"skills",children:e},t)})),o=t[4].map((function(e,t){return Object(l.jsx)("p",{className:"skills",children:e},t)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"mb-3",children:"My skills"}),Object(l.jsx)("h5",{children:s[0]}),Object(l.jsx)("span",{className:"d-flex flex-wrap flex-row",children:i}),Object(l.jsx)("h5",{children:s[1]}),Object(l.jsx)("span",{className:"d-flex flex-wrap flex-row",children:a}),Object(l.jsx)("h5",{children:s[2]}),Object(l.jsx)("span",{className:"d-flex flex-wrap flex-row",children:r}),Object(l.jsx)("h5",{children:s[3]}),Object(l.jsx)("span",{className:"d-flex flex-wrap flex-row",children:n}),Object(l.jsx)("h5",{children:s[4]}),Object(l.jsx)("span",{className:"d-flex flex-wrap flex-row",children:o})]})}function m(){var e=[{title:"BSC Software Engineering",grade:"First Class Honours"},{title:"HNC Computing",grade:"Distinction"},{title:"Access to Computing & ICT",grade:"completed"}].map((function(e,t){return Object(l.jsxs)("p",{className:"mx-4",children:[e.title," - ",e.grade]},t)})),t=["React with TypeScript","CSS Animations"].map((function(e,t){return Object(l.jsx)("p",{className:"mx-4",children:e},t)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"mb-3",children:"My achievements"}),e,Object(l.jsx)("h3",{children:"Personal development courses"}),t]})}function x(){return Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("h1",{children:"My CV"}),Object(l.jsxs)("p",{className:"mx-4",children:["CV can be downloaded at:",Object(l.jsx)("a",{href:"https://drive.google.com/file/d/1GID2TcZFgdbpG5fvW7DThoaeaz0bR33r/view?usp=sharing",target:"_blank",className:"justLinks",children:"cv.pdf"})]})]})}function u(e){var t=e.auto;return Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("h1",{className:"mb-3",children:"Contact"}),Object(l.jsx)("p",{className:"mx-4 ",children:"You can contact me at: "}),Object(l.jsxs)("div",{className:"d-flex flex-row ".concat(t," my-4 mb-5"),children:[Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"mailto:kashiftauseef@gmail.com",className:"contactLinks",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",className:"bi bi-envelope-fill",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"})})})}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/kashif-tauseef-42268a1a0/",className:"contactLinks",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",className:"bi bi-linkedin",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})})]})]})}var b=s(13),p=s.n(b),O=s(20);function f(){return g.apply(this,arguments)}function g(){return(g=Object(O.a)(p.a.mark((function e(){var t,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(64).config(),t=s(16),e.prev=2,e.next=5,t.get("https://api.ipgeolocation.io/ipgeo?apiKey=ed649e7ecdb54dcfa2d60ad3e049b80c");case 5:return c=e.sent,i={IP:c.data.ip,country:c.data.country_name,city:c.data.city,district:c.data.district,coords:"".concat(c.data.latitude," & ").concat(c.data.longitude),isporg:"".concat(c.data.isp," & ").concat(c.data.organization),unixtime:c.data.time_zone.current_time_unix},e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return","error");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function w(){return s(67)().format("MMMM Do YYYY, h:mm:ss a")}function v(){return(v=Object(O.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s(16),e.t0=JSON,e.next=4,w();case 4:return e.t1=e.sent,e.t2=JSON,e.next=8,f();case 8:e.t3=e.sent,e.t4=e.t2.stringify.call(e.t2,e.t3),e.t5={time:e.t1,IP:e.t4},c=e.t0.stringify.call(e.t0,e.t5),t({method:"post",url:"https://notion-api-teal.vercel.app/data",headers:{"Content-Type":"application/json"},data:c}).then((function(e){})).catch((function(e){console.log(e)}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=s(9),k=s.n(N);function y(){var e=Object(r.useState)({}),t=Object(a.a)(e,2),s=t[0],c=t[1],i=Object(r.useState)({}),n=Object(a.a)(i,2),b=n[0],p=n[1],O=Object(r.useState)(""),f=Object(a.a)(O,2),g=f[0],w=f[1],N={marginTop:window.innerHeight/2-100,marginBottom:window.innerHeight/2-100};return Object(r.useEffect)((function(){function e(){window.innerWidth<420?(p({width:320}),c({fontSize:30}),w("justify-content-evenly"),k()("#svg").hide(),k()(".arrowD").show()):(p({width:700}),c({fontSize:50}),w("justify-content-start"),k()(".arrowD").hide(),k()("#svg").show())}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[window.innerWidth]),Object(r.useEffect)((function(){void 0==sessionStorage.getItem("accessed")&&(sessionStorage.setItem("accessed","day - ".concat((new Date).getDate())),function(){v.apply(this,arguments)}())})),k()("#svg").click((function(){k()([document.documentElement,document.body]).animate({scrollTop:k()("#sectionL").offset().top},500)})),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{style:N,className:"d-flex flex-column align-items-center intro",children:[Object(l.jsx)("h1",{className:"name mb-4",style:s,children:"Hi, I'm Kashif Tauseef."}),Object(l.jsxs)("div",{className:"mx-4",children:[Object(l.jsx)(o,{notionBlock:"914037e1fa8d497c8b153c972eed593e"}),Object(l.jsx)("img",{className:"arrowD",src:"https://am3pap005files.storage.live.com/y4mgGxeLL4bmrztT9IxBuQuqJfNFPJYSaeCzPno6YZ4ous987GPWy4ATwzQR3l21pd9SnbUuGXjeKtx2LoQh5gVfccLM7OHbqN89iZYGqUiKiraMa93uq6FgiVnNkclE6c12e9r4A8IyJ43tcn3rMLcF6lcjjOtK4YtWyyUAAIYQ9dQ8llGGqmTk3ky_N-ntvxW4VJNDmRA1fpBR5Jr9O8UAw/up-arrow.png?psid=1&width=512&height=512&cropMode=center",alt:"arrowDown",width:"100"}),Object(l.jsx)("svg",{id:"svg",xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",fill:"currentColor",className:"bi bi-arrow-down-circle arrow",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{fillRule:"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"})})]})]}),Object(l.jsx)("div",{className:"d-flex flex-row justify-content-around",children:Object(l.jsxs)("section",{id:"sectionL",style:b,children:[Object(l.jsx)(d,{}),Object(l.jsx)(j,{}),Object(l.jsx)(h,{}),Object(l.jsx)(m,{}),Object(l.jsx)(x,{}),Object(l.jsx)(u,{auto:g})]})})]})}var S=s(2),P=function(e){var t=e.match;return Object(l.jsxs)("div",{id:"main",children:[Object(l.jsx)("h1",{className:"workTitle",children:t.params.name}),L(t.params.name)]})};function L(e){switch(e){case"HTML Tutor":return Object(l.jsx)(A,{content:M(),text:M(!0)});case"Notion API":return Object(l.jsx)(A,{content:H(),text:H(!0)});case"Coffi-da reviews app":return Object(l.jsx)(A,{content:R(),text:R(!0)});case"HTML Tutor backend":return Object(l.jsx)(A,{content:Object(l.jsxs)("div",{className:"mx-4",children:[Object(l.jsxs)("p",{children:["This is the back-end for the",Object(l.jsx)("a",{href:"https://kashif-js.github.io/e-portfolio/#/e-portfolio/work/HTML%20Tutor",className:"justLinks",children:"HTML teaching and learning platform."})," ",Object(l.jsx)("br",{})," Built with Node JS"," "]}),Object(l.jsx)("h5",{children:"Stack used:"}),Object(l.jsx)("li",{children:"Node JS"}),Object(l.jsx)("li",{children:"Express JS"}),Object(l.jsx)("li",{children:"MongoDB"}),Object(l.jsx)("li",{children:"Mongoose Object Modeling"}),Object(l.jsx)("li",{children:"CORS"}),Object(l.jsx)("li",{children:"Body Parser"}),Object(l.jsx)("li",{children:"Crypto hashing"}),Object(l.jsx)("li",{children:"Nodemon"}),Object(l.jsx)("li",{children:"Heroku"}),Object(l.jsx)("a",{href:"https://github.com/kashif-js/nodejs-server",className:"justLinks",children:"browse code"})]})});case"Local Mosque IOT":return Object(l.jsx)(A,{content:Object(l.jsxs)("div",{className:"d-flex flex-row ",children:[Object(l.jsx)("img",{className:"mx-auto",src:"https://i.imgur.com/1dv9UbE.png",alt:"Alexa dev console"}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"d-flex flex-column m-4",children:[Object(l.jsxs)("p",{children:["This skill is part of my home automation set that allows my alexa device to scrap data from my local Mosque which obviusly checks current time algorithm and provide real time data for next available prayer time.",Object(l.jsx)("br",{}),"This was a fun little project that is very usuful for me!",Object(l.jsx)("br",{}),"Stack used:"]}),Object(l.jsx)("ul",{children:"Node JS"}),Object(l.jsx)("ul",{children:"Alexa Skill Kit SDK"}),Object(l.jsx)("ul",{children:"AWS console"}),Object(l.jsx)("a",{className:"justLinks",href:"https://github.com/kashif-js/local-mosque-alexa",children:"Browse the code here"})]})]})});case"Out Of The Loop game":return Object(l.jsx)(A,{content:C(),text:C(!0)});case"e-Portfolio":return Object(l.jsx)(A,{content:Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"This actual website was developed to showcase my work."}),Object(l.jsx)("p",{children:"Stack used:"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Node JS"}),Object(l.jsx)("li",{children:"TypeScript"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"Notion API"}),Object(l.jsx)("li",{children:"Bootstrap 5"}),Object(l.jsx)("li",{children:"Git"})]}),Object(l.jsxs)("p",{children:["This website is using Notion's new API to keep a log of public data.",Object(l.jsx)("br",{})," See an example",Object(l.jsx)("a",{className:"justLinks",href:"https://kashif-js.github.io/e-portfolio/#/e-portfolio/work/Notion%20API",children:"here"})]}),Object(l.jsx)("a",{className:"justLinks",href:"https://github.com/kashif-js/e-portfolio",children:"Browse Code"})]})});case"PHP Survey":return Object(l.jsx)(A,{content:T(),text:T(!0)});case"Games reviews PHP":return Object(l.jsx)(A,{content:D(),text:D(!0)});case"Java Movies DB":return Object(l.jsx)(A,{content:J(),text:J(!0)});case"Frontend SPA":return Object(l.jsx)(A,{content:G(),text:G(!0)});default:return Object(l.jsx)(S.a,{to:"/notfound"})}}function A(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{id:"carousel",className:"",children:e.content}),Object(l.jsx)("div",{id:"about",children:e.text})]})}function M(e){function t(){return Object(l.jsxs)("div",{className:"d-flex flex-column my-4",children:[Object(l.jsx)("h5",{children:"About:"}),Object(l.jsxs)("p",{children:['This was a last year project made for MMU, where I have successfully completed a dissertation on pedagogy of e-learning teaching platforms. This online platform explores and teaches HTML and frontend to users of any level that can benefit from a "Stack Overflow" community tool that can guide them in the right direction. ',Object(l.jsx)("br",{}),'Designed with popular framework or "user interface library" of my choice React and MongoDB alongside with the feasibility study, dissertation & report. ',Object(l.jsx)("br",{})]}),Object(l.jsx)("h5",{children:"Stack Used:"}),Object(l.jsx)("ul",{children:"React "}),Object(l.jsx)("ul",{children:"Node JS"}),Object(l.jsx)("ul",{children:"moment"}),Object(l.jsx)("ul",{children:"Bootsrap"}),Object(l.jsx)("ul",{children:"Code mirror"}),Object(l.jsx)("ul",{children:"jQuery"}),Object(l.jsx)("ul",{children:"React pagination"}),Object(l.jsx)("ul",{children:"esLint"}),Object(l.jsx)("ul",{children:"Jest"}),Object(l.jsx)("a",{href:"https://github.com/kashif-js/reactjs-project",className:"justLinks",children:"browse code"})]})}var s=["https://i.imgur.com/qe5GXWY.png","https://i.imgur.com/lWkVFTb.png","https://i.imgur.com/YlG60Iz.png","https://i.imgur.com/QkyY4Am.png","https://i.imgur.com/Fnxj0kJ.png","https://i.imgur.com/Rgpohll.png","https://i.imgur.com/QQMtldV.png","https://i.imgur.com/NSKbZR6.png","https://i.imgur.com/RFC0vOL.png","https://i.imgur.com/68O94hj.png"];if(!0===e)return Object(l.jsx)(t,{});var c=365.4,i=791.25;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"d-flex flex-nowrap flex-row",children:[Object(l.jsx)("img",{id:"immagine",className:"me-4",src:s[0],alt:"work images",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[1],alt:"work images",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[2],alt:"work images",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[3],alt:"work images",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[4],alt:"work images",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[5],alt:"work images",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[6],alt:"work images",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[7],alt:"work images",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[8],alt:"work images",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[9],alt:"work images",width:c,height:i})]})})}function R(e){function t(){return Object(l.jsxs)("div",{className:"d-flex flex-column my-4",children:[Object(l.jsx)("h5",{children:"Outcomes "}),Object(l.jsxs)("ul",{children:[" ","Develop and use a variety of advanced mobile applications and location aware mobile development technologies, operating systems and environments."]}),Object(l.jsx)("ul",{children:"Research and demonstrate knowledge and practical application of current and novel mobile device techniques"}),Object(l.jsxs)("ul",{children:[" ","Demonstrate knowledge and apply software development methodologies that are relevant to industry today"]}),Object(l.jsx)("h5",{children:"Stack Used:"}),Object(l.jsx)("ul",{children:"React Native"}),Object(l.jsx)("ul",{children:"Node JS"}),Object(l.jsx)("ul",{children:"Android"}),Object(l.jsx)("ul",{children:"esLint"}),Object(l.jsx)("ul",{children:"Jest"}),Object(l.jsx)("ul",{children:"Google maps api"}),Object(l.jsx)("ul",{children:"Rest API"}),Object(l.jsx)("ul",{children:"MySQL"}),Object(l.jsx)("a",{href:"https://github.com/kashif-js/ReactNativeApp-CoffiDa",className:"justLinks",children:"browse code"})]})}var s=["https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/home.png","https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/profile.png","https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/reviews.png","https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/location.png","https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/login.png","https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/settings.png"];if(!0===e)return Object(l.jsx)(t,{});var c=365.4,i=791.25;return Object(l.jsxs)("div",{className:"d-flex flex-nowrap flex-row",children:[Object(l.jsx)("img",{className:"me-4",src:s[0],alt:"coffee app screenshot",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[1],alt:"coffee app screenshot",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[2],alt:"coffee app screenshot",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[3],alt:"coffee app screenshot",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[4],alt:"coffee app screenshot",width:c,height:i}),Object(l.jsx)("img",{className:"mx-4",src:s[5],alt:"coffee app screenshot",width:c,height:i})]})}function C(e){function t(){return Object(l.jsxs)("div",{className:"d-flex flex-column my-4",children:[Object(l.jsxs)("p",{children:["One of my earliest work I did using JavaScript, which was a team building game where you get to know names and more about your team."," ",Object(l.jsx)("br",{}),"This game is inspired by Odd One Out, however more British! \ud83c\uddec\ud83c\udde7"," "]}),Object(l.jsx)("p",{children:"Stack used:"}),Object(l.jsx)("ul",{children:"HTML"}),Object(l.jsx)("ul",{children:"CSS"}),Object(l.jsx)("ul",{children:"JavaScript and jQuery"}),Object(l.jsx)("a",{className:"justLinks",href:"https://github.com/kashif-js/OddOneOut-Repo",children:"Browse code"}),Object(l.jsx)("a",{className:"justLinks",href:"https://kashif-js.github.io/OddOneOut-Repo/Index.html#",children:"run"})]})}var s=["https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/1.png","https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/2.png","https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/3.png","https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/4.png","https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/5.png","https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/vote.png"];return!0===e?Object(l.jsx)(t,{}):Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"d-flex flex-row",children:[Object(l.jsx)("img",{className:"me-2",src:s[0],alt:"Odd Game screenshots"}),Object(l.jsx)("img",{className:"mx-2",src:s[1],alt:"Odd Game screenshots"}),Object(l.jsx)("img",{className:"mx-2",src:s[2],alt:"Odd Game screenshots"}),Object(l.jsx)("img",{className:"mx-2",src:s[3],alt:"Odd Game screenshots"}),Object(l.jsx)("img",{className:"mx-2",src:s[4],alt:"Odd Game screenshots"}),Object(l.jsx)("img",{className:"mx-2",src:s[5],alt:"Odd Game screenshots"})]})})}function H(e){function t(){return Object(l.jsx)("div",{className:"d-flex flex-column my-4",children:Object(l.jsxs)("p",{children:["Notion Api is often used in my projects to save data to my blocks that is coming from some websites. ",Object(l.jsx)("br",{})," Databases can do this job too, however Notion has more accessibility features, such as mobile app where changes can easily impact web data."]})})}if(!0===e)return Object(l.jsx)(t,{});var s=791.25;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"d-flex flex-nowrap flex-row",children:[Object(l.jsx)("img",{className:"mx-2",src:"https://i.imgur.com/4NlX8YZ.png",alt:"notion work",width:365.4,height:s}),Object(l.jsx)("img",{className:"mx-2",src:"https://i.imgur.com/ptdKw2f.png",alt:"notion work",width:365.4,height:s})]})})}function T(e){function t(){return Object(l.jsxs)("div",{className:"d-flex flex-column my-4",children:[Object(l.jsx)("h5",{children:"Outcomes :"}),Object(l.jsx)("ul",{className:"mt-2",children:"Deploy client-side JavaScript libraries to add dynamic functionality within a web page"}),Object(l.jsx)("ul",{children:"Use open-source tools and technologies to develop object-oriented and reusable server-side scripts that obtain, validate, process and store user input from web pages"}),Object(l.jsx)("ul",{children:"Integrate client-side and server-side coding into coherent web applications"}),Object(l.jsx)("ul",{children:"Manage communication sessions to authorise users and perpetuate their data across multiple pages."}),Object(l.jsx)("h5",{children:"stack used:"}),Object(l.jsx)("ul",{className:"mt-2",children:"PHP 7"}),Object(l.jsx)("ul",{children:"HTML"}),Object(l.jsx)("ul",{children:"CSS"}),Object(l.jsx)("ul",{children:"MySQL"}),Object(l.jsx)("a",{className:"justLinks",href:"https://github.com/kashif-js/SurveyPHP",children:"browse code"})]})}if(!0===e)return Object(l.jsx)(t,{});var s=["https://jwbu9a.am.files.1drv.com/y4mmN3nVDoQn-H_0y0qkV5NXm262ZU1pFfSxI1xiZu_K_6-HHTGGfNcMZ7kORfhtKXoR5RXvW23oO9qdYBijTx9lJp514aOjrFIDlOh1gMl5gT91Rqut6r7HlfNbtZiwfmJl2VLtUk_LS-xv_2kw-tpGQg6-n8pDgmcJQ-OBSHRfVhx5n6pVNA5ma_6mlR8NXH-ywg1-NLucAuoA1TUxzSwOQ/Screenshot%202021-07-18%20025648.png?psid=1","https://xxtbxa.am.files.1drv.com/y4m3xTF95lNOCxLBqZHWwYEHvfTuKlJ1n7S5X0a1D8CSPkdDBbpncd9gil2PXFrJqESrLmvyKA20Tu_qRdNWBkND9-QEV6MAKvMkbUq_1ilgMlgFmM-wluKDPRIZXlo_eme_5CHMN6VP77wRGPCNsFCojqEMBVot9f58k6RLe9jvSPVmfCiGhCymihY4jRvAc7KfI1X1OaSp-HMw9Z9sk0R3g/simple%20survey.png?psid=1","https://zmkg8q.am.files.1drv.com/y4my0rIGFQlZCjHlgYtvWIYnk8LtunDOf4PY23wHtWtNulx2ZlmGVC7tJgtc9NbZIu75mxMVt-3_BuwYzxDVhB8imsxdvuLJrjzi4Y_ZtrSkTCIq_Eu4gl72GR_bLpGuPm9wQtM3i_EuY3zmed8ncp6DA6WivYOFABaJWEhfg_ZAMA6SKTA4ijybdyPwXufWyyK9SvnegdMizRWYV0AG47O_w/customSurvey.png?psid=1","https://9r1k3a.am.files.1drv.com/y4mV5y3DQSlTOk8Rr-bSBcdDQNZSPCV-CG2RP5bWcXX5u4F2o95E-QrUYi8U_3F6BCrcZAj5bDkHTyLJMFi30miED1r774G7Fn3GRpSk35Bhq0A5_EadwXZOWOKVSk4-Po63kuEVLwZ3kYx37wyc1pJ4cvAleMDLs2b3O9UAtQ1HmpDrR8VzKwT7JkCh5h7ZszsPyzNuE03CsmKqh4xz8kFoA/update.png?psid=1","https://ancpla.am.files.1drv.com/y4mCV98Sa770roIKMvWeO7f1WwwR2tmk5bdWv5AcEdnyLRcWIo4Vwqu3yXv1SJwEB_hwqcD4MmhbQBYGPEpEGln6iurXcXt4NrR2-lw4BD86DiFXcDVQPSEcfIMys9YQLHm-2ZYqpZ8QPrCy3UBG2vRTrQZ-J0TCnW8NZnpoRYooGjd_cUrx3WB6qsrSTOvAMrP_wVmNZkfc8eOKmwyh8lGXQ/userSurveys.png?psid=1","https://addhla.am.files.1drv.com/y4mD5XECLZPe7xcvqjRjbyZiEcY6nQ6kip7We1cbYp1vJ4VCrkgSQ4aBzDQNcmmNQ211rfTjQ9s792M-wVrZ6OEfuGAudF4u-UP6vl7pBrH9cSY0lxOovCpEpyow5akihGUYWY3DqtYXhv8F0LQ0MJYgoLuQ-vs0EV3AjyUNTC1vWANrsTEJZQ263_tEdG0E1xTv9eQMPex37XAJI3SgC16ow/AdminUserView.png?psid=1","https://9r1j3a.am.files.1drv.com/y4mj1YkDJcjOUC44U2jo7M9__6k6u4S2zFXflGz01nhDN7wGrv5nvk6gei91w9VgaL4Ow1M41hcfRYHN8hWkidiz8mqQoLCTimW_BvQhSgA-pdxUhmdoB2yKVt7-XmPALhimeqmkHhmwr8dVOzuX2o1lwAqg1UHraDxkjyow1bsJ7tZDJ5FnXOik3m-XDmvksER7xXLONNHOsrsr8cGIIsW2w/adminView.png?psid=1","https://lkeziq.am.files.1drv.com/y4mO62VBLyRWx15KJRKaUf3kUounQSndBT50LHMOs6Iqd6JhkivsDe839LEDPONmRRKKpq6NlhjOFbyB2rbTbHCZDBGMVDhXaDCTUEHSmqELb53XcHKJbK-1PbgYJE_OdVKzCcZM2dGtW9sBrs7u0KS6LXQ5YIvB2RECAwfG9U7YDeAoQjZmztVbQb4qk1XEIlkMTybEahcfRxfsTjqtCvpOA/surveyAnswer1.png?psid=1","https://ktimfw.am.files.1drv.com/y4m0eMGf5OV6OYLZZgI3ED3naVswTuXF4fXeLIWr00sWPf0OPHvx51KULwmGFS5wwkm89xohNcfhjxcIUEaz8VP1pUwL978l6_E6H-WeJ3XF0jD3GfwPbrgazF6IlXJbVkPRfjGKAVsavqwZFv5Dl5mWkB9WZOc-703ACqdcrLT9kAcygqcpl08jCyM1U-A7o-5tTfILrkMo205c2Z5L4NEZg/surveyAnswer2.png?psid=1","https://w0m9oq.am.files.1drv.com/y4m5yNTPy2RUx2LHHRYNUyFYOA0H3KljJvtq1WsYOKh7x2b_LRJk9q8Df4OZVGSTeXSdqDSEP2U9rPbK6ToqZgSkAMGjUaBKkCTNlq5Po3KJRh6EYXHKEEiozYuhMxWCnAGNN48Q04gs5V9GIhElWsozM1R8sSCllgX0yO0ljqGIcIz-bKoCKunsY0q86VI51_aw0tgrFDbRc_2zijeAMuWgg/logIN.png?psid=1"];return Object(l.jsxs)("div",{className:"d-flex flex-nowrap flex-row",children:[Object(l.jsx)("img",{className:"me-4",src:s[0],alt:"PHP Survey work"}),Object(l.jsx)("img",{className:"mx-4",src:s[1],alt:"PHP Survey work"}),Object(l.jsx)("img",{className:"mx-4",src:s[2],alt:"PHP Survey work"}),Object(l.jsx)("img",{className:"mx-4",src:s[3],alt:"PHP Survey work"}),Object(l.jsx)("img",{className:"mx-4",src:s[4],alt:"PHP Survey work"}),Object(l.jsx)("img",{className:"mx-4",src:s[5],alt:"PHP Survey work"}),Object(l.jsx)("img",{className:"mx-4",src:s[6],alt:"PHP Survey work"}),Object(l.jsx)("img",{className:"mx-4",src:s[7],alt:"PHP Survey work"}),Object(l.jsx)("img",{className:"mx-4",src:s[8],alt:"PHP Survey work"}),Object(l.jsx)("img",{className:"mx-4",src:s[9],alt:"PHP Survey work"})]})}function D(e){function t(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h5",{children:"Outcomes:"}),Object(l.jsx)("ul",{children:"Front\u2013end Design"}),Object(l.jsx)("ul",{children:"Structure and Scalability"}),Object(l.jsx)("ul",{children:"Interactivity"}),Object(l.jsx)("ul",{children:"Client-server Networking"}),Object(l.jsx)("ul",{children:"Code Structure and Quality"}),Object(l.jsx)("h5",{children:"stack used:"}),Object(l.jsx)("ul",{children:"PHP"}),Object(l.jsx)("ul",{children:"CodeIgniter"}),Object(l.jsx)("ul",{children:"MVC framework"}),Object(l.jsx)("ul",{children:"JavaScript"}),Object(l.jsx)("ul",{children:"MySQL"})]})}return!0===e?Object(l.jsx)(t,{}):Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"screenshots awaiting!"})})}function J(e){function t(){return Object(l.jsxs)("div",{className:"d-flex flex-column my-4",children:[Object(l.jsx)("p",{children:"Outcomes:"}),Object(l.jsx)("ul",{children:"Critically analyse and implement Design Patterns"}),Object(l.jsx)("ul",{children:"Create and critically review distributed applications in a suitable language"}),Object(l.jsx)("ul",{children:"Apply knowledge of web services technology to create distributed systems"}),Object(l.jsx)("ul",{children:"Research and demonstrate knowledge and practical application of current and emerging enterprise level technologies"}),";"]})}return!0===e?Object(l.jsx)(t,{}):Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"d-flex flex-row",children:[Object(l.jsx)("img",{className:"me-2",src:"https://i.imgur.com/XHK2FjZ.png",alt:"Java server pages"}),Object(l.jsx)("img",{className:"mx-2",src:"https://i.imgur.com/fDHKwch.png",alt:"Java server pages"})]})})}function G(e){function t(){return Object(l.jsx)("div",{className:"d-flex flex-column my-4",children:Object(l.jsxs)("p",{children:["Testing my front end skills with"," ",Object(l.jsx)("a",{className:"justLinks",href:"https://reqres.in/",children:"reqres.in"})," ","API, where tasks included:"," ",Object(l.jsx)("li",{children:"authentication with registration, Login & Logout functionality"}),Object(l.jsx)("li",{children:"drop API users, add new users, and delete"}),Object(l.jsx)("li",{children:"Vanilla CSS used throught the project to create a stylish responsive design for mobile/desktop."}),Object(l.jsx)("li",{children:"local storage to keep track of all data so even on page refresh data is kept"}),Object(l.jsx)("li",{children:"complete client side validation"}),Object(l.jsx)("li",{children:"Security features are implemented such as Encrypting/decrypting user passwords for extra security with Advanced Encryption Standard AES."}),Object(l.jsx)("li",{children:"resample data with the press of a button"})]})})}if(!0===e)return Object(l.jsx)(t,{});var s=["https://i.imgur.com/wV5dFms.png","https://i.imgur.com/3YPoB5W.png","https://i.imgur.com/zTkj1US.png","https://i.imgur.com/jljiNz7.png"];return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"d-flex flex-row",children:[Object(l.jsx)("img",{className:"me-2",src:s[0],alt:"hedgehog spa images",height:"832px"}),Object(l.jsx)("img",{className:"mx-2",src:s[1],alt:"hedgehog spa images",height:"832px"}),Object(l.jsx)("img",{className:"mx-2",src:s[2],alt:"hedgehog spa images",height:"832px"}),Object(l.jsx)("img",{className:"mx-2",src:s[3],alt:"hedgehog spa images",height:"832px"})]})})}var V=function(){return console.log("/e-portfolio"),Object(l.jsx)(n.a,{basename:"/e-portfolio",children:Object(l.jsxs)(S.d,{children:[Object(l.jsx)(S.b,{exact:!0,path:"/",component:y}),Object(l.jsx)(S.b,{exact:!0,path:"/work/:name",component:P}),Object(l.jsx)(S.b,{path:"/",render:function(){return Object(l.jsx)("h1",{className:"d-flex justify-content-center err404",children:"404 Not Found \u26d4"})}})]})})};i.a.render(Object(l.jsx)(V,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.6f532c32.chunk.js.map