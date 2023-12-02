"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5598],{4240:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var i=s(5893),t=s(1151);const a={},c="\u5f00\u59cb\u4f7f\u7528",d={id:"desktop/wing/Get start",title:"\u5f00\u59cb\u4f7f\u7528",description:"\u914d\u7f6e",source:"@site/docs/desktop/wing/Get start.md",sourceDirName:"desktop/wing",slug:"/desktop/wing/Get start",permalink:"/docs/desktop/wing/Get start",draft:!1,unlisted:!1,editUrl:"https://github.com/iofomo/fomosite/blob/main/website/docs/desktop/wing/Get start.md",tags:[],version:"current",frontMatter:{},sidebar:"wing",previous:{title:"Wing",permalink:"/docs/desktop/wing/Introduce"},next:{title:"\u64cd\u4f5c\u6307\u5357",permalink:"/docs/desktop/wing/User guide"}},r={},o=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:5},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:5},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4",id:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4",level:5},{value:"\u83b7\u53d6\u4ee3\u7801",id:"\u83b7\u53d6\u4ee3\u7801",level:5}];function l(e){const n={code:"code",h1:"h1",h3:"h3",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5f00\u59cb\u4f7f\u7528",children:"\u5f00\u59cb\u4f7f\u7528"}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,i.jsx)(n.h5,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ python setup.py install\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5b89\u88c5\u6210\u529f\u540e\u4f1a\u5728\u7cfb\u7edf\u7528\u6237\u76ee\u5f55\u4e0b\u521b\u5efa\u4e24\u4e2a\u6587\u4ef6\u5939"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# Windows\nC:\\Users\\\\${user name}\\.wing\nC:\\Users\\\\${user name}\\bin\n\n# Linux/MacOS\n/Users/${user name}/.wing\n/Users/${user name}/bin\n"})}),"\n",(0,i.jsx)(n.h5,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Windows\uff1a"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06",(0,i.jsx)(n.code,{children:"C:\\Users\\${user name}\\bin"}),"\u6dfb\u52a0\u81f3\u7cfb\u7edf\u73af\u5883\u53d8\u91cf"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5364).Z+"",width:"374",height:"422"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5163).Z+"",width:"568",height:"568"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(2272).Z+"",width:"412",height:"392"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Linux/MacOS\uff1a"})}),"\n",(0,i.jsxs)(n.p,{children:["\u914d\u7f6e",(0,i.jsx)(n.code,{children:"~/bin"}),"\u4e3a\u53ef\u6267\u884c\u5168\u5c40\u76ee\u5f55"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ vi ~/.bash_profile\n$ export PATH=~/bin:$PATH\n$ source ~/.bash_profile\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,i.jsx)(n.h5,{id:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4",children:"\u521b\u5efa\u5de5\u4f5c\u7a7a\u95f4"}),"\n",(0,i.jsxs)(n.p,{children:["\u6dfb\u52a0\u5de5\u4f5c\u7a7a\u95f4\u5bf9\u5e94\u7684\u4ee3\u7801",(0,i.jsx)(n.code,{children:"git"}),"\u5e93\u670d\u52a1\u5730\u5740\uff0c\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# \u672c\u5730\u7d22\u5f15\u6a21\u5f0f\n# wing -space add {space name} {git host}\n# such as:\n$ wing -space add test git@github.com/iofomo\n$ wing -space add test2 ssh://git@192.168.1.250:1022\n\n# \u4e91\u7aef\u7d22\u5f15\u6a21\u5f0f\n# wing -space add {space name} {git host} {manifest}\n# such as:\n$ wing -space add test git@github.com/iofomo manifest.git\n$ wing -space add test2 ssh://git@192.168.1.250:1022 manifest.git\n"})}),"\n",(0,i.jsx)(n.h5,{id:"\u83b7\u53d6\u4ee3\u7801",children:"\u83b7\u53d6\u4ee3\u7801"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ mkdir test\n$ cd test\n\n# wing init {space name} {branch/tag} {manifest file}\n# such as:\n$ wing init test master admin.xml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u82e5\u4e3a\u672c\u5730\u7d22\u5f15\u6a21\u5f0f\uff0c\u5219\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u6a21\u677f\u7d22\u5f15\u6587\u4ef6\uff08",(0,i.jsx)(n.code,{children:".wing/manifests/admin.xml"}),"\uff09\uff0c\u9700\u8981\u6dfb\u52a0\u8981\u540c\u6b65\u7684\u4ee3\u7801\u5e93\u6620\u5c04\u5173\u7cfb\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<manifest>\n\n    <remote name="origin" fetch=".."/>\n\n    \x3c!-- branch --\x3e\n    <default revision="master" remote="origin" sync-j="4"/>\n\n    \x3c!-- TODO add git here ... --\x3e\n\x3c!--    <project path="xxx" name="xxx.git" />    --\x3e\n\n</manifest>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},5364:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/10-90543a2125ea19838a960e653a7dca27.png"},2272:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/11-624d05e6a3d464dff99b278836c397c8.png"},5163:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/12-a4de9b8155d4ce8bb4eadfa34131733e.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>c});var i=s(7294);const t={},a=i.createContext(t);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);