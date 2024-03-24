"use strict";(self.webpackChunkppl_docs=self.webpackChunkppl_docs||[]).push([[4387],{676:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(4848),i=n(8453);const r={sidebar_position:2},o="Mesh files",l={id:"File Information/mesh-files",title:"Mesh files",description:"In PewPew Live, a mesh is a collection of lines in 3D.",source:"@site/docs/File Information/mesh-files.md",sourceDirName:"File Information",slug:"/File Information/mesh-files",permalink:"/docs/File Information/mesh-files",draft:!1,unlisted:!1,editUrl:"https://github.com/pewpewlive/ppl-docs/edit/master/docs/File Information/mesh-files.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manifest files",permalink:"/docs/File Information/manifest-files"},next:{title:"Sound files",permalink:"/docs/File Information/sound-files"}},a={},c=[{value:"Vertexes",id:"vertexes",level:2},{value:"Segments chains",id:"segments-chains",level:2},{value:"Colors",id:"colors",level:2},{value:"Procedural rendering",id:"procedural-rendering",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"mesh-files",children:"Mesh files"}),"\n",(0,t.jsxs)(s.p,{children:["In PewPew Live, a mesh is a collection of lines in 3D.\nTo create a mesh, you need to list the coordinates of the points making up the model, and how the points are linked.\nLua scripts describing meshes needs to create a table called ",(0,t.jsx)(s.code,{children:"meshes"}),". That table must contain one or more meshes."]}),"\n",(0,t.jsx)(s.p,{children:"Example of a file that defines two meshes:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:"meshes = {\n  { -- A 500x500 square\n    vertexes = {{0,0,0}, {500,0,0}, {500,500,0}, {0,500,0}},\n    colors = {0xffffffff, 0xffff00ff, 0xff00ffff, 0xff0000ff},\n    segments = {{0,1,2,3,0}}\n  },\n  { -- A right-angled triangle\n    vertexes = {{0,0,0}, {500,0,0}, {0,500,0}},\n    colors = {0xffff00ff, 0xff00ffff, 0xff0000ff},\n    segments = {{0,1,2,0}}\n  }\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"vertexes",children:"Vertexes"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"vertexes"})," field contains the list of vertexes. Vertexes are represented by three numbers. Those numbers can be floating point numbers."]}),"\n",(0,t.jsx)(s.h2,{id:"segments-chains",children:"Segments chains"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"segment"})," field describes which vertexes should be joined by a segment. It contain a list of segment chains. Each segment chain is a table that holds a lists of 0-based indexes to vertexes that should be connected by a segment."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Important"}),": There is a difference between ",(0,t.jsx)(s.code,{children:"segments = {{0,1}, {1,2}}"})," and ",(0,t.jsx)(s.code,{children:"segments = {{0,1,2}}"}),". In the first case, 2 separate segments will be generated. In the second case, two segments linked with a miter join will be generated."]}),"\n",(0,t.jsx)(s.h2,{id:"colors",children:"Colors"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.em,{children:"optional"})," ",(0,t.jsx)(s.code,{children:"colors"})," field contains the colors of each vertexes. If the ",(0,t.jsx)(s.code,{children:"colors"})," field is present, it ",(0,t.jsx)(s.strong,{children:"must"})," contain as many colors as there are vertexes. Colors are 32 bit RGBA values."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-lua",children:"0xff0000ff -- opaque red\n0xff000080 -- slightly transparent red\n0xff000000 -- fully transparent red\n"})}),"\n",(0,t.jsx)(s.p,{children:"Note that all meshes are rendered with additive blending."}),"\n",(0,t.jsx)(s.h2,{id:"procedural-rendering",children:"Procedural rendering"}),"\n",(0,t.jsxs)(s.p,{children:["Astute readers may have realized that because ",(0,t.jsx)(s.code,{children:"meshes"})," is described in a Lua script, it can be generated at runtime. See for instance this ",(0,t.jsx)(s.a,{href:"https://github.com/jyaif/ppl-utils/blob/d32dbec8a171c9bcc0f800dcd864f175c42c34fd/content/levels/advanced_graphics/polar_graphic.lua#L36",children:"example"}),"."]})]})}function f(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var t=n(6540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);