"use strict";(self.webpackChunkppl_docs=self.webpackChunkppl_docs||[]).push([[5559],{6304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>h,metadata:()=>r,toc:()=>c});var i=t(4848),a=t(8453),s=t(3554),o=t.n(s);const h={sidebar_position:1},l="60 FPS Animation",r={id:"Guides/Other/fps-animation",title:"60 FPS Animation",description:"Tutorial created by WinterNox.",source:"@site/docs/Guides/Other/60-fps-animation.mdx",sourceDirName:"Guides/Other",slug:"/Guides/Other/fps-animation",permalink:"/docs/Guides/Other/fps-animation",draft:!1,unlisted:!1,editUrl:"https://github.com/pewpewlive/ppl-docs/edit/master/docs/Guides/Other/60-fps-animation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/docs/Guides/Lua/advanced"},next:{title:"Design principles",permalink:"/docs/other/level-design-principles"}},d={},c=[{value:"YouTube tutorial",id:"youtube-tutorial",level:3},{value:"Mesh animations",id:"mesh-animations",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Setting up",id:"setting-up",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Making the mesh",id:"making-the-mesh",level:4},{value:"Creating the entity and assigning it the mesh",id:"creating-the-entity-and-assigning-it-the-mesh",level:4},{value:"Animating the mesh",id:"animating-the-mesh",level:3},{value:"Making the animation 60 FPS",id:"making-the-animation-60-fps",level:3}];function m(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"60-fps-animation",children:"60 FPS Animation"}),"\n",(0,i.jsxs)(n.p,{children:["Tutorial created by ",(0,i.jsx)(n.a,{href:"https://github.com/WinterNox",children:"WinterNox"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"youtube-tutorial",children:"YouTube tutorial"}),"\n",(0,i.jsx)("iframe",{src:"//www.youtube.com/embed/145kDy9nr3E",frameborder:"0",allowfullscreen:!0,width:"100%",height:"480px"}),"\n",(0,i.jsx)(n.h3,{id:"mesh-animations",children:"Mesh animations"}),"\n",(0,i.jsx)(n.p,{children:"Mesh animations in PewPew Live are achieved by iterating through multiple meshes that are slightly different from each other. The meshes are usually stored in a single file and are made procedurally."}),"\n",(0,i.jsx)(n.h3,{id:"limitations",children:"Limitations"}),"\n",(0,i.jsx)(n.p,{children:"If you have some experience with level creation, you should know that PewPew Live runs at 30 ticks per second and that the graphics are interpolated. However, the interpolation only applies to transformations (position, rotation and scale). But, what about mesh animations? Since you can only change something about the entity per tick, mesh animations would be limited to 30 frames per second. Thankfully, the PPL Lua API has just the right function that can be used to achieve 60 FPS mesh animations. This function is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"pewpew.customizable_entity_set_flipping_meshes(entity_id, file_path, index1, index2)\n"})}),"\n",(0,i.jsx)(n.p,{children:"When used, the entity will switch between the two specified meshes in a single game tick. But, how does that help us achieve 60 FPS animations? Let's see."}),"\n",(0,i.jsx)(n.h3,{id:"setting-up",children:"Setting up"}),"\n",(0,i.jsxs)(n.p,{children:["Before we can start making an animation and assigning it to an entity, we need to have a base level that we can work with.\nStart by creating a new folder in ",(0,i.jsx)(n.code,{children:"./content/levels/"}),". In the newly created folder, make sure you have these files:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"level.lua"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"graphics.lua"})," (The name of your mesh file can be different, but remember it!)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"manifest.json"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you need a basic ",(0,i.jsx)(n.code,{children:"manifest.json"}),", here is a template you can use."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "60 FPS",\n  "descriptions": ["Amazing"],\n  "entry_point": "level.lua",\n  "has_score_leaderboard": false\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(n.p,{children:["Now that we have a level base, we can start making our mesh and entity. If at any point you face a problem, try following the steps again, or check the ",(0,i.jsxs)(n.a,{href:"https://github.com/pewpewlive/ppl-utils/tree/master/content/levels/sample_animation",children:["final ",(0,i.jsx)(n.code,{children:".lua"})," files"]}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"making-the-mesh",children:"Making the mesh"}),"\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"graphics.lua"})," (or your mesh file) and start by writing the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"meshes = {}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Since our meshes are going to be procedurally generated, we won't be making every vertex by hand, instead, we will make Lua do that for us! Essentially when making a procedural mesh, we make a table with our vertexes and segments, that we later add to the ",(0,i.jsx)(n.code,{children:"meshes"})," table. The vertex and segment tables are going to hold the generated points and segment indexes."]}),"\n",(0,i.jsx)(n.p,{children:"Add this to your mesh file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"-- Tables for our mesh vertexes, segments\nlocal computed_vertexes, computed_segments = {}, {}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now we need a way to populate the tables with our mesh points and segments."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Note: In this example, we will be making a hexagon!"})}),"\n",(0,i.jsxs)(n.p,{children:["Start by defining the ",(0,i.jsx)(n.code,{children:"radius"})," and ",(0,i.jsx)(n.code,{children:"small_radius"})," variables. They will be used when generating the hexagon sides. Also, create a variable ",(0,i.jsx)(n.code,{children:"i"}),", which will be used for the segments. Now, create a for loop that will go from ",(0,i.jsx)(n.code,{children:"0"})," to ",(0,i.jsx)(n.code,{children:"math.pi * 2"})," and increment by ",(0,i.jsx)(n.code,{children:"math.pi * 2 / 6"})," (since we want it to be a hexagon). Get the corresponding sine and cosine of the angle (y and x positions). Multiply one pair by the default radius and one by the smaller radius, and add them to the vertexes table. To add the needed segment indexes, we need to connect the vertexes together. Connect the inner hexagon vertex to the outer one, connect the inner hexagon vertex with its own next vertex, and connect the outer hexagon vertex the same way. Increment the segment counter by 2."]}),"\n",(0,i.jsx)(n.p,{children:"The resulting code should look something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local radius = 96  -- Outer hexagon\nlocal small_radius = 48  -- Inner hexagon\n\nlocal i = 0\nfor angle = 0, math.pi * 2, math.pi * 2 / 6 do  -- We want to go from angle 0 to 2\u03c0, skipping by 2\u03c0 / 6, making a hexagon\n  local y, x = math.sincos(angle)  -- y and x positions on the unit circle\n\n  table.insert(computed_vertexes, {x * radius, y * radius})  -- Vertex for the outer hexagon\n  table.insert(computed_vertexes, {x * small_radius, y * small_radius})  -- Vertex for the inner hexagon\n\n  table.insert(computed_segments, {i, i + 1})  -- Line joining the corresponding vertices of the inner and outer hexagons\n  table.insert(computed_segments, {i, i + 2})  -- Line joining the vertex of the outer hexagon to its next one\n  table.insert(computed_segments, {i + 1, i + 3})  -- Line joining the vertex of the inner hexagon to its next one\n\n  i = i + 2\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Because of the way we added the segments, at the end of the for loop we get extra segments that are unnecessary. After the for loop, we can remove them by doing this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"table.remove(computed_segments, #computed_segments)  -- Removal of the last segment as there is no vertex at index i + 3 during the last iteration\ntable.remove(computed_segments, #computed_segments)  -- No vertex at index i + 2 during the last iteration\ntable.remove(computed_segments, #computed_segments)  -- A line is already present joining the vertices\n"})}),"\n",(0,i.jsx)(n.p,{children:"At the end, we add the mesh made up of the generated vertexes and segments."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"table.insert(meshes, {\n  vertexes = computed_vertexes,\n  segments = computed_segments\n})\n"})}),"\n",(0,i.jsx)(n.h4,{id:"creating-the-entity-and-assigning-it-the-mesh",children:"Creating the entity and assigning it the mesh"}),"\n",(0,i.jsxs)(n.p,{children:["Now, go to ",(0,i.jsx)(n.code,{children:"level.lua"}),", and start by creating an entity at position ",(0,i.jsx)(n.code,{children:"(0fx, 0fx)"}),". Next, set the entity's mesh to the one we just created."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local id = pewpew.new_customizable_entity(0fx, 0fx)\npewpew.customizable_entity_set_mesh(id, "/dynamic/graphics.lua", 0)  -- Change the filename if needed\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Note: Setting level size and creating a player is optional."})}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"ppl-utils.exe"})," and open your level at ",(0,i.jsx)(n.a,{href:"http://localhost:9000/pewpew.html",children:"http://localhost:9000/pewpew.html"})]}),"\n",(0,i.jsxs)(n.p,{children:["You should see the following:\n",(0,i.jsx)(n.img,{src:"https://github.com/pewpewlive/ppl-utils/assets/42890752/10aa6ab4-46cb-4798-b8f8-a72435d42b32",alt:"Initial mesh"})]}),"\n",(0,i.jsx)(n.p,{children:"If you don't, you might have made a mistake somewhere! Check the steps to make the mesh again and check for mistakes."}),"\n",(0,i.jsx)(n.h3,{id:"animating-the-mesh",children:"Animating the mesh"}),"\n",(0,i.jsx)(n.p,{children:"Let's get into animating our mesh! For this tutorial, we will have the outer hexagon rotating clockwise and the inner hexagon counterclockwise."}),"\n",(0,i.jsx)(n.p,{children:'To do this, we need multiple "meshes" that we will set our entity to.'}),"\n",(0,i.jsx)(n.p,{children:"In your mesh file, change for loop to the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"for angle_offset = 0, math.pi * 2, math.pi * 2 / 60 do  -- Our animation will have 60 frames. We want the hexagons to make a full rotation each 60 frames (2 seconds). This does not mean the animation is 60FPS yet!\n  -- Tables for our mesh vertexes, segments\n  local computed_vertexes, computed_segments = {}, {}\n\n  local radius = 96  -- Outer hexagon\n  local small_radius = 48  -- Inner hexagon\n\n  local i = 0\n  for angle = 0, math.pi * 2, math.pi * 2 / 6 do  -- We want to go from angle 0 to 2\u03c0, skipping by 2\u03c0 / 6, making a hexagon\n    local y, x = math.sincos(angle)  -- y and x positions on the unit circle\n\n    table.insert(computed_vertexes, {x * radius, y * radius})  -- Vertex for the outer hexagon\n    table.insert(computed_vertexes, {x * small_radius, y * small_radius})  -- Vertex for the inner hexagon\n\n    table.insert(computed_segments, {i, i + 1})  -- Line joining the corresponding vertices of the inner and outer hexagons\n    table.insert(computed_segments, {i, i + 2})  -- Line joining the vertex of the outer hexagon to its next one\n    table.insert(computed_segments, {i + 1, i + 3})  -- Line joining the vertex of the inner hexagon to its next one\n\n    i = i + 2\n  end\n\n  table.remove(computed_segments, #computed_segments)  -- Removal of the last segment as there is no vertex at index i + 3 during the last iteration\n  table.remove(computed_segments, #computed_segments)  -- No vertex at index i + 2 during the last iteration\n  table.remove(computed_segments, #computed_segments)  -- A line is already present joining the vertices\n\n  table.insert(meshes, {\n    vertexes = computed_vertexes,\n    segments = computed_segments\n  })\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"As you can see, the real mesh generation code is pretty much the same, just that we repeat it several times instead, making it have frames!"}),"\n",(0,i.jsx)(n.p,{children:"Now, most importantly, we need to change the way we get the points of our hexagon. Since we want the outer hexagon to turn clockwise and the inner one counterclockwise, we need to change the angles depending on which frame we are on. Since each frame is going to have a specific angle offset, we can add that to our initial angles, meaning we have to change this line:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local y, x = math.sincos(angle)\n"})}),"\n",(0,i.jsx)(n.p,{children:"into"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local y, x = math.sincos(angle - angle_offset)\n"})}),"\n",(0,i.jsx)(n.p,{children:"And add a new line below it like so:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local y2, x2 = math.sincos(angle + angle_offset)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We will use ",(0,i.jsx)(n.code,{children:"x2"})," and ",(0,i.jsx)(n.code,{children:"y2"})," for the inner hexagon. To do this, replace the ",(0,i.jsx)(n.code,{children:"x * small_radius"})," and ",(0,i.jsx)(n.code,{children:"y * small_radius"})," coordinates for the inner hexagon with ",(0,i.jsx)(n.code,{children:"x2 * small_radius"})," and ",(0,i.jsx)(n.code,{children:"y2 * small_radius"})," respectively."]}),"\n",(0,i.jsxs)(n.p,{children:["We now have 60 frames of meshes that we can use to animate our entity. To do this, we need to use an index which will increase every tick, and use that to set the entity's mesh. This can be done like so:\nIn ",(0,i.jsx)(n.code,{children:"level.lua"}),", replace the second line with this code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local mesh_index = 0\npewpew.entity_set_update_callback(id, function()\n  -- We have 60 frames out of 61 total frames. The last frame is equal to the first one and is unused.\n  -- The index of the 60th frame is 59. (Although we are using lua, mesh and sound indexes start from 0 in PewPew Lib API.)\n  -- Loop when we have exceeded past the last frame.\n  if mesh_index > 59 then\n    mesh_index = 0\n  end\n\n  pewpew.customizable_entity_set_mesh(id, "/dynamic/graphics.lua", mesh_index)\n  mesh_index = mesh_index + 1\nend)\n'})}),"\n",(0,i.jsx)(n.p,{children:"The code is pretty self-explanatory. We increment the index every tick and use that index to set the mesh. Since the meshes we have generated have small changes in them, doing this creates an animation."}),"\n",(0,i.jsx)(n.p,{children:"The result should look something like this:"}),"\n",(0,i.jsx)(o(),{controls:!0,playing:!0,loop:!0,url:"https://github.com/pewpewlive/ppl-utils/assets/42890752/5a2c1a1c-d079-4497-ab83-deca095ca01a"}),"\n",(0,i.jsx)(n.p,{children:"As you can see, it is an animation. Though, this animation is running at only 30 frames per second. This is an issue. An animation running at 30 FPS will not look good with the rest of the level as the level might have other content that moves. And as you already know, position transformation is interpolated by PewPew Live. This means that, even though the level runs at 30 ticks per second, the game will interpolate the graphics and display them at 60 FPS or 90 FPS for example. (The game interpolates the graphics as per the refresh rate of the device, which will usually be higher than 30Hz.) To ensure that the difference between the rest of the level and our mesh animation is minimal, we have to make our mesh animation run on at least 60 FPS."}),"\n",(0,i.jsx)(n.h3,{id:"making-the-animation-60-fps",children:"Making the animation 60 FPS"}),"\n",(0,i.jsx)(n.p,{children:"Open your mesh file and replace the line"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"for angle_offset = 0, math.pi * 2, math.pi * 2 / 60 do  -- 60\n  -- Code that generates the meshes\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"with"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"for angle_offset = 0, math.pi * 2, math.pi * 2 / 120 do  -- 120\n  -- Code that generates the meshes\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"The new code will create 121 frames or meshes for us, out of which 120 will be used. (This is because the last and first frames are the same.)"}),"\n",(0,i.jsx)(n.p,{children:"If you save the files and run your level, you might notice that the animation is getting reset halfway through. This is because at the 60th frame, we have gone only 50% through the animation."}),"\n",(0,i.jsxs)(n.p,{children:["Since we now have 120 frames, we need to change the code in ",(0,i.jsx)(n.code,{children:"level.lua"})," to account for this change. Open ",(0,i.jsx)(n.code,{children:"level.lua"})," and change the line"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"if mesh_index > 59 then\n  mesh_index = 0\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"to"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"if mesh_index > 119 then\n  mesh_index = 0\nend\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The new code now shows the complete animation when running the level. However, it is visibly slower. Why is this the case? Remember, in the previous case, the variable ",(0,i.jsx)(n.code,{children:"angle_offset"})," was increasing by ",(0,i.jsx)(n.code,{children:"2\u03c0/60"})," every frame. Now, it is increasing by ",(0,i.jsx)(n.code,{children:"2\u03c0/120"})," every frame. You might be wondering why we did this. This is because to achieve a 60 FPS animation that runs with the same speed, we need to have double the amount of frames that we had previously. We now just need to speed the animation back to its original speed."]}),"\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"level.lua"})," and change"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"mesh_index = mesh_index + 1\n"})}),"\n",(0,i.jsx)(n.p,{children:"to"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"mesh_index = mesh_index + 2\n"})}),"\n",(0,i.jsx)(n.p,{children:"This should make the animation return to its original speed, as we are skipping every other frame. However, if you save the files and run your level, you will notice no change between the current animation and the one we had at the start. You would in fact be right, there is no difference between the two. Our animation still runs at 30 FPS. This is where flipping meshes comes into play."}),"\n",(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"level.lua"})," and replace"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'pewpew.customizable_entity_set_mesh(id, "/dynamic/graphics.lua", mesh_index)\n'})}),"\n",(0,i.jsx)(n.p,{children:"with"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'pewpew.customizable_entity_set_flipping_meshes(id, "/dynamic/graphics.lua", mesh_index, mesh_index + 1)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["What does this exactly do? When we set flipping meshes of an entity, that entity goes over the two specified meshes in a single game tick. This means that, in the first game tick, it will have the mesh at ",(0,i.jsx)(n.code,{children:"index 0"})," for half a tick and will have the mesh at ",(0,i.jsx)(n.code,{children:"index 1"})," for the rest half of a tick. In the next tick, we are resetting the flipping meshes. The variable ",(0,i.jsx)(n.code,{children:"mesh_index"})," now has a value of ",(0,i.jsx)(n.code,{children:"2"}),". The entity now has the mesh at ",(0,i.jsx)(n.code,{children:"index 2"})," for half a tick and has the mesh at ",(0,i.jsx)(n.code,{children:"index 3"})," for half a tick. Notice that we have gone over 4 meshes in just 2 game ticks (2 meshes per game tick)! The way in which we have used this creates an animation that runs at 60 FPS. Now, if you ",(0,i.jsx)(n.strong,{children:"save the files and run your level"}),", you'll notice that it is a lot smoother than our initial animation. It is exactly twice as smooth. It might look something like this:"]}),"\n",(0,i.jsx)(o(),{controls:!0,playing:!0,loop:!0,url:"https://github.com/pewpewlive/ppl-utils/assets/42890752/342de310-cc7b-4b4b-8c35-5cf34d078ad0"}),"\n",(0,i.jsx)(n.p,{children:"Congratulations! You have successfully made an animation that runs at 60 frames per second. I hope that you were able to understand this fairly well. Now, experiment with your code and make creative animations."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);