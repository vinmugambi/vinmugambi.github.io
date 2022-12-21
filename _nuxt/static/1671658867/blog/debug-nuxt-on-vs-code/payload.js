__NUXT_JSONP__("/blog/debug-nuxt-on-vs-code", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak){return {data:[{page:{slug:"debug-nuxt-on-vs-code",title:"Debug a Nuxt.js project in VS code",draft:false,tagline:"Spend less time hunting bugs in your Nuxt.js project",toc:[{id:K,depth:x,text:L},{id:M,depth:x,text:N},{id:O,depth:x,text:P}],body:{type:Q,children:[{type:b,tag:"notice",props:{},children:[{type:a,value:"\nThis post is only useful if you are familiar with Vue.js, Nuxt.js, JavaScript and Visual Studio Code. For this guide to work fo you, you must have Chrome installed in your computer.\n"}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"One thing that make Visual Studio formidable for JavaScript development is its first class support for JS debugging. A debugger allows you to pause code execution at a specific line and watch your program's state or even execute extra code against it. Among the first things I do after creating a new JavaScript project is to make it debuggable on Visual Studio Code."}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"In this article, I will show you how I configure debugging on every Nuxt.js project I work on. "},{type:b,tag:i,props:{},children:[{type:a,value:u}]},{type:a,value:" files require compilation unlike plain JS files, which makes it a little bit harder to debug them accurately. Nuxt runs "},{type:b,tag:i,props:{},children:[{type:a,value:u}]},{type:a,value:" files on the server which further complicates the issue."}]},{type:a,value:f},{type:b,tag:"sink",props:{},children:[{type:a,value:" \nThe newly released Nuxt 3 promises a lot, but I still recommend using Nuxt 2 for its stability and good documentation.\n"}]},{type:a,value:f},{type:b,tag:y,props:{id:K},children:[{type:b,tag:v,props:{href:"#configure-the-debugger",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:L}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"The first step to debugging a nuxt project is to configure how webpack generates source maps. To do this, add an "},{type:b,tag:i,props:{},children:[{type:a,value:R}]},{type:a,value:" function to the "},{type:b,tag:i,props:{},children:[{type:a,value:S}]},{type:a,value:" object in your "},{type:b,tag:i,props:{},children:[{type:a,value:T}]},{type:a,value:" file."}]},{type:a,value:f},{type:b,tag:U,props:{className:[V]},children:[{type:b,tag:c,props:{className:[W]},children:[{type:a,value:T}]},{type:b,tag:X,props:{className:[Y,"language-js"]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,D,Z]},children:[{type:a,value:"export"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,D,Z]},children:[{type:a,value:"default"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,"literal-property",k]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"config"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,D,"control-flow"]},children:[{type:a,value:"if"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:a,value:"ctx"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"isDev"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n        config"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"devtool"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"="}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"isClient"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"?"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'source-map'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"'inline-source-map'"}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ac}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"To configure VS code debugger for the project. Create a "},{type:b,tag:i,props:{},children:[{type:a,value:ad}]},{type:a,value:" file copy this into it."}]},{type:a,value:f},{type:b,tag:U,props:{className:[V]},children:[{type:b,tag:c,props:{className:[W]},children:[{type:a,value:ad}]},{type:b,tag:X,props:{className:[Y,"language-json"]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"version\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"0.2.0\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"chrome\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"url\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"http:\u002F\u002Flocalhost:3000\""}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"node\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"console\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"integratedTerminal\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"program\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"${workspaceFolder}\u002Fnode_modules\u002F.bin\u002Fnuxt\""}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"compounds\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"Nuxt:fullstack\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:y,props:{id:M},children:[{type:b,tag:v,props:{href:"#start-the-debugger",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:N}]},{type:a,value:f},{type:b,tag:"ol",props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Open the debug tab from Vs code's side menu."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Select "},{type:b,tag:i,props:{},children:[{type:a,value:"Nuxt:fullstack"}]},{type:a,value:" as the the RUN AND DEBUG option in the side menu"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Click the green-outlined play button beside the RUN AND DEBUG label. This will start the nuxt development server in the VS code integrated terminal and open a chrome window with a tab pointing to development server on port 3000"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Wait for the nuxt to build the server."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Set a breakpoint on or "},{type:b,tag:i,props:{},children:[{type:a,value:".js"}]},{type:a,value:" file, the script part any "},{type:b,tag:i,props:{},children:[{type:a,value:u}]},{type:a,value:" by adding a "},{type:b,tag:i,props:{},children:[{type:a,value:J}]},{type:a,value:" line where you want your code to stop."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Reload the concerned page, to trigger a breakpoint."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:b,tag:"img",props:{format:"gif",src:"\u002Fdemo.gif"},children:[]}]},{type:a,value:f},{type:b,tag:"pitfall",props:{},children:[{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"There are two things I haven't figured out yet:"}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Accurately setting breakpoints using VS code interface - When you set breakpoints using the red mark beside the line number, the code breaks at a different place. See "},{type:b,tag:v,props:{href:"https:\u002F\u002Fgithub.com\u002Fvuejs\u002Fvetur\u002Fissues\u002F1399",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Debugging *.vue files puts breakpoints in wrong place"}]}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Bounding breakpoints in "},{type:b,tag:i,props:{},children:[{type:a,value:u}]},{type:a,value:" files to the server debugger - This makes it hard to debug Nuxt server-side functions like "},{type:b,tag:i,props:{},children:[{type:a,value:"asyncData"}]},{type:a,value:" and "},{type:b,tag:i,props:{},children:[{type:a,value:"fetch"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"After grappling with these issues for almost a day, I decided let them go, instead opting to set breakpoints manually, the JavaScript way, by inserting a "},{type:b,tag:i,props:{},children:[{type:a,value:J}]},{type:a,value:" statement after the line I want to debug."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:y,props:{id:O},children:[{type:b,tag:v,props:{href:"#conclusion",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:P}]},{type:a,value:f},{type:b,tag:p,props:{},children:[{type:a,value:"I know setting breakpoints by adding the "},{type:b,tag:i,props:{},children:[{type:a,value:J}]},{type:a,value:" statement might not be the solution you want, I have been there for a day, it might just be the one you need. After all, it achieves the same goal.\nThank you for reading. I hope you find this article helpful."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fdebug-nuxt-on-vs-code",extension:ak,createdAt:w,updatedAt:w,readingTime:"3 min read"},_img:{}}],fetch:{"data-v-28496ccc:0":{contacts:{slug:"contacts",social:[{name:"Github",link:"https:\u002F\u002Fgithub.com\u002Fvinmugambi",icon:"github.svg"},{name:"Twitter",link:"https:\u002F\u002Ftwitter.com\u002Fmougambi",icon:"twitter.svg"}],email:"vinmugambi17@gmail.com",toc:[],body:{type:Q,children:[]},dir:"\u002F",path:"\u002Fcontacts",extension:ak,createdAt:w,updatedAt:w,readingTime:"0 min read"}}},mutations:void 0}}("text","element","span","token","punctuation","\n"," ","operator","code",":","property","string",",","\n      ","\n    ","p","{","\n  ","}","li",".vue","a","2022-12-21T21:40:28.233Z",2,"h2","true",-1,"icon","icon-link","keyword",".","property-access","[","\"name\"","]","debugger","configure-the-debugger","Configure the debugger","start-the-debugger","Start the debugger","conclusion","Conclusion","root","extend","build","nuxt.config.js","div","nuxt-content-highlight","filename","pre","line-numbers","module","("," ctx",")","comment","\u002F\u002F ...",".vscode\u002Flaunch.json","\"configurations\"","\"type\"","\"request\"","\"launch\"","\"Nuxt:client\"","\"Nuxt:server\"",".md")));