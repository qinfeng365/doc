import{p as n,o as a,c as o}from"./chunks/framework.7ae304b1.js";function s(){return fetch("https://api.github.com/repos/dingyi222666/koishi-plugin-chathub/releases").then(t=>t.json()).then(t=>{var e;return((e=t==null?void 0:t[0])==null?void 0:e.name)??""}).then(t=>{if(!t)return;console.log(t);const e=document.querySelector("div.VPHero.VPHomeHero > div > div.main > p.tagline"),i=document.createElement("samp");i.classList.add("docs-chathub-release-tag"),i.innerText=t,e==null||e.appendChild(i)})}const d=JSON.parse('{"title":"Koishi ChatHub 插件文档","description":"","frontmatter":{"layout":"home","title":"Koishi ChatHub 插件文档","editLink":true,"hero":{"name":"Koishi ChatHub","text":"使用教程 & 开发指南","tagline":"多平台模型接入，可扩展，多种输出格式，由 LangChain 驱动开发，提供语言模型聊天服务的 Koishi 插件","actions":[{"theme":"brand","text":"了解更多","link":"/guide/introduction"},{"theme":"alt","text":"在 GitHub 上查看","link":"https://github.com/dingyi222666/koishi-plugin-chathub"}]},"features":[{"icon":"🛠️","title":"快速部署","details":"运行 Koishi 后安装相关插件，简易配置后即可使用，无需编写复杂配置文件。"},{"icon":"🌻","title":"多平台模型接入","details":"我们支持 OpenAI (API), Bing Chat 等平台接入，后续还会继续接入更多平台。"},{"icon":"🔩","title":"高扩展性","details":"中间件系统，多平台模型接入与调用 API ，易于第三方开发者扩展。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1689252850000}'),c={name:"index.md"},l=Object.assign(c,{setup(t){return n(()=>{s()}),(e,i)=>(a(),o("div"))}});export{d as __pageData,l as default};