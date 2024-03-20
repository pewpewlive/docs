"use strict";(self.webpackChunkppl_docs=self.webpackChunkppl_docs||[]).push([[7558],{3376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var i=n(4848),s=n(8453),a=n(6540);function o(){const[e,t]=(0,a.useState)("2.718"),n=(0,a.useRef)(null);return(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"text",defaultValue:"2.718",onInput:e=>t(e.target.value)}),(0,i.jsx)("input",{type:"button",defaultValue:"to FixedPoint \u2192",onClick:()=>{n.current.value=function(e){console.log(e);let t=parseFloat(e),n=Math.abs(t),i=Math.floor(n);i>2<<51&&(i=2<<51);let s=t<0?"-":"",a=Math.floor(n%1*4096),o="";return 0!=a&&(o="."+a),`${s}${i}${o}fx`}(e)}}),(0,i.jsx)("input",{type:"text",readonly:!0,ref:n})]})}const r={sidebar_position:1},l="Types",c={id:"api/types",title:"Types",description:"int",source:"@site/docs/api/types.mdx",sourceDirName:"api",slug:"/api/types",permalink:"/docs/api/types",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/types.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/category/api"},next:{title:"pewpew library",permalink:"/docs/api/pewpew-library"}},d={},u=[{value:"int",id:"int",level:2},{value:"FixedPoint",id:"fixedpoint",level:2},{value:"EntityId",id:"entityid",level:2},{value:"String",id:"string",level:2},{value:"float",id:"float",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"types",children:"Types"}),"\n",(0,i.jsx)(t.h2,{id:"int",children:"int"}),"\n",(0,i.jsx)(t.p,{children:"Stores integers. Used for many things, including durations and colors.\nDurations represents a number of game ticks. There are 30 game ticks per seconds. For example, a duration of 45 ticks represents 1.5 seconds.\nColors are stored in 32 bits in the RGBA order. For example, 0xff000080 encodes pure red (0xff0000) with an alpha value of 0x80."}),"\n",(0,i.jsx)(t.h2,{id:"fixedpoint",children:"FixedPoint"}),"\n",(0,i.jsx)(t.p,{children:"Stores fixed point numbers.\nUsed for storing and computing all the game related values that require more precision than what integer numbers can provide. That includes coordinates, angles, velocities, etc...\nThis built-in type is specific to PewPew, and does not exist in other Lua interpreters, which is why it is documented more thoroughly than the other types.\nA FixedPoint constant is defined using a number followed by the fx postfix:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:"local a = 100fx\n"})}),"\n",(0,i.jsx)(t.p,{children:"You can perform regular arithmetic operations on it (+, -, /, *, <, ==, >, and, or, xor), but you can't mix FixedPoint values with non-FixedPoint values:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:"local a = 100fx\nlocal b = a / 3fx -- Ok\nlocal c = a / 3   -- Not ok! 3 is not a FixedPoint\n"})}),"\n",(0,i.jsx)(t.p,{children:"Internally, FixedPoint numbers are implemented using dux_fixed, which uses 64 bits integers. 52 bits are used to encode the integral part, leaving 12 bits for the fractional part.\nYou can initialize the fractional part by placing a '.' followed by an integer in the range [0, 4095]:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:"local a = 1fx -- Stores the value 1\nlocal b = 1.0fx -- Stores the value 1\nlocal c = 1.2048fx -- Stores the value 1.5\nlocal d = 1.4095fx -- Stores the value 1.9997558...\nlocal e = -1.4095fx -- Stores the value -1.9997558...\nlocal f = 1.4096fx -- Not ok! The decimal part must be less than 4096\n"})}),"\n",(0,i.jsx)(t.p,{children:"Here's an interactive converter that can help understanding the format:"}),"\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(t.h2,{id:"entityid",children:"EntityId"}),"\n",(0,i.jsx)(t.p,{children:"An integer that identifies an entity. EntityIds are guaranteed to be unique: they are not reused for the duration of a game."}),"\n",(0,i.jsx)(t.h2,{id:"string",children:"String"}),"\n",(0,i.jsx)(t.p,{children:"Stores a sequence of characters.\nTypically used to hold text and file paths. The API only accepts strings less than 1000 bytes long."}),"\n",(0,i.jsx)(t.h2,{id:"float",children:"float"}),"\n",(0,i.jsx)(t.p,{children:"Stores floating point numbers. Because they make determinism hard to guarantee, floats must only be used in Lua scripts that define meshes or sounds. Although it is still technically possible to use floats in game scripts, they will eventually be forbidden."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);