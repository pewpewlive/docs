"use strict";(self.webpackChunkppl_docs=self.webpackChunkppl_docs||[]).push([[279],{9991:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=s(4848),n=s(8453);const l={sidebar_position:1},r="Home",o={id:"home",title:"Home",description:"This community-maintained wiki holds the resources useful for creating custom levels for PewPew Live.",source:"@site/docs/home.md",sourceDirName:".",slug:"/home",permalink:"/ppl-docs/docs/home",draft:!1,unlisted:!1,editUrl:"https://github.com/pewpewlive/ppl-docs/edit/master/docs/home.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Types",permalink:"/ppl-docs/docs/APIs/types"}},a={},d=[{value:"Level structure",id:"level-structure",level:2},{value:"Uploading your level",id:"uploading-your-level",level:2},{value:"PewPew Live&#39;s Lua",id:"pewpew-lives-lua",level:2},{value:"Recommended Lua Style guide",id:"recommended-lua-style-guide",level:2},{value:"Helpful tools and utilities",id:"helpful-tools-and-utilities",level:2}];function c(e){const i={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"home",children:"Home"}),"\n",(0,t.jsx)(i.p,{children:"This community-maintained wiki holds the resources useful for creating custom levels for PewPew Live."}),"\n",(0,t.jsxs)(i.p,{children:["Levels are created by writing Lua code. If you are new to programming or new to Lua, a good first step is to start with the ",(0,t.jsx)(i.a,{href:"Guides/Lua/beginner",children:"Beginner"})," guide."]}),"\n",(0,t.jsxs)(i.p,{children:["If you are already familiar with programming, a good approach is to first look at the examples (for example, the ",(0,t.jsx)(i.a,{href:"https://github.com/jyaif/ppl-utils/blob/d32dbec8a171c9bcc0f800dcd864f175c42c34fd/content/levels/simple_level/",children:"simple_level"}),") to get a feeling of how a level is made, and then come back to the wiki to get more precise information about the various aspect of level creation."]}),"\n",(0,t.jsxs)(i.p,{children:["If you have questions, the game's creator and many level creators are available on ",(0,t.jsx)(i.a,{href:"https://pewpew.live/discord",children:"Discord"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"level-structure",children:"Level structure"}),"\n",(0,t.jsxs)(i.p,{children:["A level is a directory that contains a ",(0,t.jsx)(i.a,{href:"File%20Information/manifest-files",children:"manifest"})," and Lua files. The Lua files fall in three categories:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Files that describe ",(0,t.jsx)(i.a,{href:"File%20Information/mesh-files",children:"graphics"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Files that describe ",(0,t.jsx)(i.a,{href:"File%20Information/sound-files",children:"sounds"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Files that describe the behavior of the level. They make use of the ",(0,t.jsx)(i.a,{href:"APIs/PewPew",children:"pewpew"})," and ",(0,t.jsx)(i.a,{href:"APIs/Fmath",children:"fmath"})," libraries, which require an understanding of the ",(0,t.jsx)(i.a,{href:"APIs/types",children:"types"})," used."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"uploading-your-level",children:"Uploading your level"}),"\n",(0,t.jsxs)(i.p,{children:["You can upload your level by signing into your account on ",(0,t.jsx)(i.a,{href:"https://pewpew.live",children:"https://pewpew.live"})," and navigating to the ",(0,t.jsx)(i.em,{children:"Manage your custom levels"})," page."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"screenshot of UI for uploading",src:s(6727).A+"",width:"514",height:"248"})}),"\n",(0,t.jsx)(i.h2,{id:"pewpew-lives-lua",children:"PewPew Live's Lua"}),"\n",(0,t.jsx)(i.p,{children:"PewPew Live embeds a slightly customized version of Lua 5.3."}),"\n",(0,t.jsx)(i.p,{children:"Among the changes are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Added a ",(0,t.jsx)(i.a,{href:"APIs/types",children:"fixed point type"})," to make the game logic deterministic everywhere."]}),"\n",(0,t.jsx)(i.li,{children:"Iteration over tables was made deterministic."}),"\n",(0,t.jsx)(i.li,{children:'The interpreter search for files in a virtual "dynamic" directory.'}),"\n",(0,t.jsxs)(i.li,{children:["The interpreter has aggressive ",(0,t.jsx)(i.a,{href:"Other/game-limits",children:"memory limits"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"recommended-lua-style-guide",children:"Recommended Lua Style guide"}),"\n",(0,t.jsxs)(i.p,{children:["When writing code, it is recommended to follow ",(0,t.jsx)(i.a,{href:"https://github.com/luarocks/lua-style-guide",children:"LuaRocks's style guide"}),", but using 2 space\nindentation to be consistent with the rest of PewPew's codebase."]}),"\n",(0,t.jsx)(i.h2,{id:"helpful-tools-and-utilities",children:"Helpful tools and utilities"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://hybroid.pewpew.live/pps/",children:"PewPew Snippets"})," is an essential Visual Studio Code extension that offers autocompletion and useful code snippets for creating levels."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://github.com/ModEngineer/PewPewLive-MeshExporter",children:"PewPewLive-MeshExporter"})," is a Blender plugin for converting scenes into PewPew Live 3D meshes."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6727:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/manage-custom-levels-e8bb20ab8e46d62174c0c1ea7bc3bbd6.png"},8453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>o});var t=s(6540);const n={},l=t.createContext(n);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);