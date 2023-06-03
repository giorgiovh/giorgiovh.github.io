(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),a=n(1),s=n(0),r=Object(a.createContext)(),o=function(e){var t=e.children,n=Object(a.useState)("light"),c=Object(i.a)(n,2),o=c[0],l=c[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="./",j="GVH.",h="Giorgio von Horoch",b="Software Engineer",u="Strong background in building user-centric web applications. Skilled in writing clean, efficient code to prioritize automation and improve user experience. Graduated Summa Cum Laude in Economics and self-motivated in learning new technologies. Bilingual in Spanish and English.",d="https://docs.google.com/document/d/1H1zYl-ooiG01zMJjk6F19_1KkTOdRn22tofAKKFsNd0/edit#heading=h.fy8vh08uaw4e",m={linkedin:"https://www.linkedin.com/in/jorge-von-horoch/",github:"https://github.com/giorgiovh"},g=[{name:"Song Tag",description:"Multiplayer game where players take turns covering songs that start with specific letters. Don't forget to submit your song on time, or the other players will choose one for you!",stack:["React","JavaScript","Material UI","Firebase"],sourceCode:"https://github.com/giorgiovh/js-song-tag",livePreview:"https://js-song-tag.web.app/"},{name:"UFC Wiki",description:"Wiki that to keeps users updated on upcoming UFC events and fighter statistics.",stack:["React","JavaScript","Material UI","Firebase","SportsDataIO API"],sourceCode:"https://github.com/giorgiovh/ufc-wiki",livePreview:"https://ufc-wiki-b409b.web.app/"},{name:"Dough or No Dough",description:"Personal finance app that allows users to keep track of their spending.",stack:["MongoDB","Express","React","NodeJS","JavaScript","Material UI","Firebase","Railway"],sourceCode:"https://github.com/giorgiovh/dough-or-no-dough",livePreview:"https://dough-or-no-dough.web.app/"},{name:"Activism Events",description:"Site that fetches events from Facebook and allows users to create and favorite events. Visbility of events is based on user account type and event privacy settings.",stack:["React","Javascript","Python","SQLAlchemy","FastAPI"],sourceCode:"https://github.com/ActiveVegans/react-active-vegans-website",livePreview:"https://activevegans.org/"}],p=["React","JavaScript","HTML","CSS","Material UI","Express","Node.js","MongoDB","Bootstrap","Axios","Git","PostgreSQL","MySQL","TypeScript","Python","Django"],O="jorgevonhoroch@gmail.com",f=n(16),v=n.n(f),x=n(14),k=n.n(x),N=n(18),_=n.n(N),w=n(17),S=n.n(w),y=(n(28),function(){var e=Object(a.useContext)(r),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,o=Object(a.useState)(!1),l=Object(i.a)(o,2),j=l[0],h=l[1],b=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[g.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(k.a,{}):Object(s.jsx)(v.a,{})}),Object(s.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(S.a,{}):Object(s.jsx)(_.a,{})})]})}),C=(n(32),function(){var e=l,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(y,{})]})}),P=n(11),E=n.n(P),M=n(19),F=n.n(M),I=n.p+"static/media/profile_picture.27c1cef0.jpg",J=(n(33),function(){var e=h,t=b,n=u,c=d,i=m;return Object(s.jsxs)("div",{className:"about center",children:[Object(s.jsx)("img",{className:"about__image",src:I,alt:"Your Name"}),e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[c&&Object(s.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(E.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(F.a,{})})]})]})]})}),R=n(7),A=n.n(R),L=n(20),D=n.n(L),B=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},A()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(E.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(D.a,{})})]})}),T=(n(36),function(){return g.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:g.map((function(e){return Object(s.jsx)(B,{project:e},A()())}))})]}):null}),U=(n(37),function(){return p.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},A()())}))})]}):null}),G=n(21),H=n.n(G),z=(n(38),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(H.a,{fontSize:"large"})})}):null}),K=(n(39),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Q=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),V=(n(41),function(){var e=Object(a.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(C,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(J,{}),Object(s.jsx)(T,{}),Object(s.jsx)(U,{}),Object(s.jsx)(K,{})]}),Object(s.jsx)(z,{}),Object(s.jsx)(Q,{})]})});n(42);Object(c.render)(Object(s.jsx)(o,{children:Object(s.jsx)(V,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a698119e.chunk.js.map