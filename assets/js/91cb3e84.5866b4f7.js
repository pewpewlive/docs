"use strict";(self.webpackChunkppl_docs=self.webpackChunkppl_docs||[]).push([[298],{7962:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(4848),d=i(8453);const s={sidebar_position:3},r="fmath library",a={id:"APIs/Fmath",title:"Fmath",description:"fmath contains a set of mathematical functions that work with FixedPoint numbers and integers. fmath replaces Lua's math library in game scripts (you can use Lua's math library outside of game scripts).",source:"@site/docs/APIs/Fmath.md",sourceDirName:"APIs",slug:"/APIs/Fmath",permalink:"/docs/APIs/Fmath",draft:!1,unlisted:!1,editUrl:"https://github.com/pewpewlive/ppl-docs/edit/master/docs/APIs/Fmath.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"PewPew",permalink:"/docs/APIs/PewPew"},next:{title:"Standard libraries",permalink:"/docs/APIs/standard-libraries"}},o={},c=[{value:"Functions",id:"functions",level:2},{value:"<code>max_fixedpoint()</code>",id:"max_fixedpoint",level:3},{value:"<code>random_fixedpoint()</code>",id:"random_fixedpoint",level:3},{value:"<code>random_int()</code>",id:"random_int",level:3},{value:"<code>sqrt()</code>",id:"sqrt",level:3},{value:"<code>from_fraction()</code>",id:"from_fraction",level:3},{value:"<code>to_int()</code>",id:"to_int",level:3},{value:"<code>abs_fixedpoint()</code>",id:"abs_fixedpoint",level:3},{value:"<code>to_fixedpoint()</code>",id:"to_fixedpoint",level:3},{value:"<code>sincos()</code>",id:"sincos",level:3},{value:"<code>atan2()</code>",id:"atan2",level:3},{value:"<code>tau()</code>",id:"tau",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"fmath-library",children:"fmath library"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"fmath"})," contains a set of mathematical functions that work with FixedPoint numbers and integers. ",(0,t.jsx)(n.code,{children:"fmath"})," replaces Lua's ",(0,t.jsx)(n.code,{children:"math"})," library in game scripts (you can use Lua's ",(0,t.jsx)(n.code,{children:"math"})," library outside of game scripts)."]}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,t.jsx)(n.h3,{id:"max_fixedpoint",children:(0,t.jsx)(n.code,{children:"max_fixedpoint()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"fmath.max_fixedpoint(): FixedPoint\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the maximum value a fixedpoint integer can take."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"random_fixedpoint",children:(0,t.jsx)(n.code,{children:"random_fixedpoint()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"fmath.random_fixedpoint(\n  min: FixedPoint,\n  max: FixedPoint\n): FixedPoint\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns a random fixedpoint value in the range [",(0,t.jsx)(n.code,{children:"min"}),", ",(0,t.jsx)(n.code,{children:"max"}),"]. ",(0,t.jsx)(n.code,{children:"max"})," must be greater or equal to ",(0,t.jsx)(n.code,{children:"min"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"random_int",children:(0,t.jsx)(n.code,{children:"random_int()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"fmath.random_int(\n  min: int,\n  max: int\n): int\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns an integer in the range [",(0,t.jsx)(n.code,{children:"min"}),", ",(0,t.jsx)(n.code,{children:"max"}),"]. ",(0,t.jsx)(n.code,{children:"max"})," must be greater or equal to ",(0,t.jsx)(n.code,{children:"min"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"sqrt",children:(0,t.jsx)(n.code,{children:"sqrt()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"fmath.sqrt(x: FixedPoint): FixedPoint\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the square root of ",(0,t.jsx)(n.code,{children:"x"}),". ",(0,t.jsx)(n.code,{children:"x"})," must be greater or equal to 0."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"from_fraction",children:(0,t.jsx)(n.code,{children:"from_fraction()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"fmath.from_fraction(\n  numerator: int,\n  denominator: int\n): FixedPoint\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the fixedpoint value representing the fraction ",(0,t.jsx)(n.code,{children:"numerator"}),"/",(0,t.jsx)(n.code,{children:"denominator"}),". ",(0,t.jsx)(n.code,{children:"denominator"})," must not be equal to zero."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"to_int",children:(0,t.jsx)(n.code,{children:"to_int()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"fmath.to_int(value: FixedPoint): int\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the integral part of the ",(0,t.jsx)(n.code,{children:"value"}),"."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"abs_fixedpoint",children:(0,t.jsx)(n.code,{children:"abs_fixedpoint()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"fmath.abs_fixedpoint(value: FixedPoint): FixedPoint\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the absolute value."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"to_fixedpoint",children:(0,t.jsx)(n.code,{children:"to_fixedpoint()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"fmath.to_fixedpoint(value: int): FixedPoint\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns a fixedpoint value with the integral part of ",(0,t.jsx)(n.code,{children:"value"}),", and no fractional part."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"sincos",children:(0,t.jsx)(n.code,{children:"sincos()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"fmath.sincos(angle: FixedPoint): FixedPoint, FixedPoint\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns the sinus and cosinus of ",(0,t.jsx)(n.code,{children:"angle"}),". ",(0,t.jsx)(n.code,{children:"angle"})," is in radian."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"atan2",children:(0,t.jsx)(n.code,{children:"atan2()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"fmath.atan2(\n  y: FixedPoint,\n  x: FixedPoint\n): FixedPoint\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the principal value of the arc tangent of y/x. Returns a value in the range [0, 2\u03c0[."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"tau",children:(0,t.jsx)(n.code,{children:"tau()"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"fmath.tau(): FixedPoint\n"})}),"\n",(0,t.jsx)(n.p,{children:"Returns \u03c4 (aka 2\u03c0)."})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const d={},s=t.createContext(d);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);