"use strict";(self.webpackChunkppl_docs=self.webpackChunkppl_docs||[]).push([[1080],{8417:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=s(4848),r=s(8453);const l={sidebar_position:1},a="Beginner Lua Tutorial",o={id:"lua-guides/beginner",title:"Beginner Lua Tutorial",description:"https://repl.it/languages/lua can be used to try Lua in the browser.",source:"@site/docs/lua-guides/beginner.md",sourceDirName:"lua-guides",slug:"/lua-guides/beginner",permalink:"/docs/lua-guides/beginner",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lua-guides/beginner.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lua programming guides",permalink:"/docs/category/lua-programming-guides"},next:{title:"Intermediate",permalink:"/docs/lua-guides/intermediate"}},t={},d=[{value:"PRINTING EXAMPLE",id:"printing-example",level:3},{value:"VARIABLES EXAMPLE",id:"variables-example",level:3},{value:"IF STATEMENT EXAMPLE",id:"if-statement-example",level:3},{value:"FOR LOOP EXAMPLE",id:"for-loop-example",level:3},{value:"NESTED FOR LOOP EXAMPLE",id:"nested-for-loop-example",level:3},{value:"WHILE LOOP EXAMPLE",id:"while-loop-example",level:3},{value:"BREAK LOOPS EXAMPLE",id:"break-loops-example",level:3},{value:"FUNCTIONS EXAMPLE",id:"functions-example",level:3},{value:"TABLES EXAMPLE",id:"tables-example",level:3},{value:"FOR I, V IN PAIRS LOOP EXAMPLE",id:"for-i-v-in-pairs-loop-example",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"beginner-lua-tutorial",children:"Beginner Lua Tutorial"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://repl.it/languages/lua",children:"https://repl.it/languages/lua"})," can be used to try Lua in the browser."]}),"\n",(0,i.jsx)(n.p,{children:"These examples are more for review, rather than learning! If you see something here that you don't understand, continue to watch Lua tutorials on youtube!"}),"\n",(0,i.jsx)(n.h3,{id:"printing-example",children:"PRINTING EXAMPLE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'print("Hello world!")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Output:\n",(0,i.jsx)(n.code,{children:"Hello World!"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"print(2+3)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Output:\n",(0,i.jsx)(n.code,{children:"5"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'print("2+3")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Output:\n",(0,i.jsx)(n.code,{children:"2+3"})]}),"\n",(0,i.jsxs)(n.p,{children:["Anything in quotation marks ",(0,i.jsx)(n.code,{children:'" "'})," or ",(0,i.jsx)(n.code,{children:"' '"})," is a string. Printing a string will output exactly what you type! Anything not inside of quotation marks are registered as numbers, variables, or mathematics!"]}),"\n",(0,i.jsx)(n.h3,{id:"variables-example",children:"VARIABLES EXAMPLE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"my_variable = 5\nprint(my_variable)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Output:\n",(0,i.jsx)(n.code,{children:"5"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"x = 2\ny = 10\nprint(x+y)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Output:\n",(0,i.jsx)(n.code,{children:"12"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'x = 2\ny = 10\nprint("x+y")\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Output:\n",(0,i.jsx)(n.code,{children:"x+y"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'some_text = "this is cool"\nprint(some_text)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Output:\n",(0,i.jsx)(n.code,{children:"this is cool"})]}),"\n",(0,i.jsx)(n.p,{children:"Variables can be assigned practically any value! You can store them as numbers, strings, and more!"}),"\n",(0,i.jsx)(n.h3,{id:"if-statement-example",children:"IF STATEMENT EXAMPLE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'x = 6\nif x > 5 then\n  print("Greater than 5!")\nend\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Output:\n",(0,i.jsx)(n.code,{children:"Greater than 5!"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'a = true\nb = false\n\nif a then\n  print("True")\nend\n\nif a and b then\n  print("True")\nelse\n  print("False")\nend\n\nif a or b then\n  print("True")\nelse\n  print("False")\nend\n\nif b then\n  print("True")\nend\n'})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"True\nFalse\nTrue\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'x = 5\ny = 5\nif x == y then\n  print("True")\nend\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Output:\n",(0,i.jsx)(n.code,{children:"True"})]}),"\n",(0,i.jsx)(n.p,{children:'Variables can also be assigned boolean values, which are true and false! With "and" statements, both or all arguments need to be true to equal true in total! With "or" statements, only one needs to be true to equal true in total! Both or all need to be false to be false in total!'}),"\n",(0,i.jsx)(n.h3,{id:"for-loop-example",children:"FOR LOOP EXAMPLE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'for i = 1, 5 do\n  print("Hello!")\nend\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The following output is repeated 5 times:\n",(0,i.jsx)(n.code,{children:"Hello!"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"for i = 1, 10 do\n  print(i)\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"for i = 1, 10, 2 do\n  print(i)\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1\n3\n5\n7\n9\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"for i = 0, -10, -1 do\n   print(i)\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"0\n-1\n-2\n-3\n-4\n-5\n-6\n-7\n-8\n-9\n-10\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local loopcount = 25\nfor i = 1, loopcount do\n  print("Loop!")\nend\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The following output is repeated 25 times:\n",(0,i.jsx)(n.code,{children:"Loop!"})]}),"\n",(0,i.jsx)(n.p,{children:'For loops are useful for running the same code multiple times! The first line of the for loop has the syntax for i = Index, End Value, Increments. You set i as your starting value, separate with a comma, set your end value, and you can optionally set your increment as your third value. Don\'t forget the "do"!'}),"\n",(0,i.jsx)(n.h3,{id:"nested-for-loop-example",children:"NESTED FOR LOOP EXAMPLE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'for i = 1, 5 do\n  print("This is the outer loop!")\n  for j = 1, 3 do\n    print("This is the inner loop!")\n  end\nend\n'})}),"\n",(0,i.jsx)(n.p,{children:"The following output is repeated 5 times:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"This is the outer loop!\nThis is the inner loop!\nThis is the inner loop!\nThis is the inner loop!\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local swim_laps = 10\nlocal paddles = 5\nfor i = 1, swim_laps do\n  print("Lap : "..i)\n  for j = 1, paddles do\n    print("Paddle : "..j)\n  end\nend\n'})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Lap : 1\nPaddle : 1\nPaddle : 2\n"})}),"\n",(0,i.jsx)(n.p,{children:"...etc."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'for i = 1, 5 do\n  for i = 1, 2 do\n    print("This is fine!")\n  end\nend\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The following output is repeated 10 times:\n",(0,i.jsx)(n.code,{children:"This is fine!"})]}),"\n",(0,i.jsx)(n.p,{children:"You are allowed to put for loops inside of other for loops! In if you put a for loop that repeats 3 times inside of a for loop that repeats 5 times, that inner loop runs 15 times total! With for loops, you can use any variable as your index! And with nested for loops, it is good practice to use different variables, like using i and j instead of using i twice."}),"\n",(0,i.jsx)(n.h3,{id:"while-loop-example",children:"WHILE LOOP EXAMPLE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local x = 3\nwhile x > 0 do\n  print(x)\n  x = x - 1\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"3\n2\n1\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local x = 3\nlocal y = 4\nwhile x > 0 and y > 0 do\n  print(x,y)\n  x = x - 1\n  y = y - 1\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"3 4\n2 3\n1 2\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'while true do\n  print("Hello!")\nend\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The following output is repeated indefinitely:\n",(0,i.jsx)(n.code,{children:"Hello!"})]}),"\n",(0,i.jsx)(n.p,{children:"A while loop is very similar to a for loop, except you can think of it as an if statement and for loop combined! The while loop runs while the conditions are true. So for a while true do loop, the loop runs forever! Be careful when making a while true do loop!"}),"\n",(0,i.jsx)(n.h3,{id:"break-loops-example",children:"BREAK LOOPS EXAMPLE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'while true do\n  print("loop!")\n  break\nend\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The above loop will only run once. Output:\n",(0,i.jsx)(n.code,{children:"loop!"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'x = 0\nwhile true do\n  print("loop!")\n  x = x + 1\n  if x >=2 then\n    break\n  end\nend\n'})}),"\n",(0,i.jsx)(n.p,{children:"The above loop will run 2 times. Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"loop!\nloop!\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"for i = 1, 10 do\n  print(i)\n  if i >= 3 then\n    break\n  end\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1\n2\n3\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"break"})," is very useful! The purpose for ",(0,i.jsx)(n.code,{children:"break"})," is to stop a loop from running! So using ",(0,i.jsx)(n.code,{children:"break"})," in a for or while loop will ultimately terminate it!"]}),"\n",(0,i.jsx)(n.h3,{id:"functions-example",children:"FUNCTIONS EXAMPLE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local function myFunction()\n  local x = 4\n  local y = 2\n  print(x + y)\nend\n\nmyFunction()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"6\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local function AddNum(num1, num2)\n  print(num1 + num2)\nend\n\nAddNum(99,121)\nAddNum(44,33)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"220\n77\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local function Cubed(number)\n  newNumber = number*number*number\n  return newNumber\nend\n\nlocal x = Cubed(2)\nlocal y = Cubed(3)\n\nprint(x,y)\n\nlocal a = Cubed(10)\nprint(a)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"8 27\n1000\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Functions are good for reducing the amount of code you have to write. If you have a piece of code you are going to use over and over with slightly different values, then make that piece of code a function! You can give functions ",(0,i.jsx)(n.strong,{children:"parameters"})," which is the num1 and num2 in myFunction(num1, num2). When you use the function later in your code, don't forget to fill in the parentheses! You can also use ",(0,i.jsx)(n.code,{children:"return"})," to essentially turn a function into a value."]}),"\n",(0,i.jsx)(n.h3,{id:"tables-example",children:"TABLES EXAMPLE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local myTable = {1,5,3}\n\nprint(myTable[1])\nprint(myTable[2])\nprint(myTable[3])\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1\n5\n3\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local names = {\n  "Bob",\n  "Moses",\n  "Joe"\n}\nfor i = 1, #names do\n  print(names[i])\nend\n\nnames[4] = "Dawn"\nprint(names[4])\ntable.insert(names,"Rambo")\nprint(names[5])\n'})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Bob\nMoses\nJoe\nDawn\nRambo\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local person = {\n  health = 100,\n  speed = 20,\n  isAwesome = true,\n  name = "John"\n}\nprint("This person\'s health is "..person.health)\nprint("This person\'s health is "..person["health"])\nprint("This person\'s speed is "..person.speed)\nprint("This person is awesome. "..person.isAwesome)\nprint("This person\'s name is "..person.name)\nprint("This person\'s name is "..person["name"])\n\nperson.home = "USA"\nperson["money"] = 250\n\nprint("This person\'s home is "..person.home)\nprint("This person has "..person["money"].." dollars!")\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"This person's health is 100\nThis person's health is 100\nThis person's speed is 20\nThis person is awesome. true\nThis person's name is John\nThis person's name is John\nThis person's home is USA\nThis person has 250 dollars!\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Tables are very good for storing lots of information. You can even put things inside of tables after the table is made! Done with table.insert(TableName, data) or you add things with table[n] = data. And remember, the table doesn't have to be defined on the same line! The brackets "," can be on separate lines to make it easier to read!"]}),"\n",(0,i.jsx)(n.h3,{id:"for-i-v-in-pairs-loop-example",children:"FOR I, V IN PAIRS LOOP EXAMPLE"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"local numbers = {3, 4, 99, 202, -3}\n\nfor i, v in pairs(numbers) do\n  print(i, v)\nend\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1 3\n2 4\n3 99\n4 202\n5 -3\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local names = {"Jack", "Mike", "Melinda", "Stacy"}\n\nfor index, person in pairs(names) do\n  print("Person "..index.." is "..person)\nend\n'})}),"\n",(0,i.jsx)(n.p,{children:"Output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Person 1 is Jack\nPerson 2 is Mike\nPerson 3 is Melinda\nPerson 4 is Stacy\n"})}),"\n",(0,i.jsx)(n.p,{children:'For i, v in pairs loops are a useful kind of for loop! They basically go through a list and use the data stored in the table. The variable i is the index or position of the table where the data is stored. The variable v is the value of the data. Inside of pairs() is the table you want to use: pairs(TableName). The variables don\'t have to be named "i" and "v", they can be named whatever you want!'})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(6540);const r={},l=i.createContext(r);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);