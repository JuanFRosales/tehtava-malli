if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const f=e=>n(e,o),d={module:{uri:o},exports:c,require:f};i[o]=Promise.all(s.map((e=>d[e]||f(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/icon-192x192-7271e9e5.png",revision:null},{url:"assets/index-3b165c5d.css",revision:null},{url:"assets/index-ec265d82.js",revision:null},{url:"images/icon-192x192.png",revision:"b6c036e5eff396ee211876bf9696e839"},{url:"images/icon-256x256.png",revision:"84edf4d141d421b5685da78855abce82"},{url:"images/icon-384x384.png",revision:"3cd99731f0f0638cec568a41adb9ec4d"},{url:"images/icon-512x512.png",revision:"56641f8b7d7ceb855757b07afe3483a4"},{url:"index.html",revision:"8b833be3e3ae9fd1252f61e3618e54f5"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"./images/icon-192x192.png",revision:"b6c036e5eff396ee211876bf9696e839"},{url:"./images/icon-256x256.png",revision:"84edf4d141d421b5685da78855abce82"},{url:"./images/icon-384x384.png",revision:"3cd99731f0f0638cec568a41adb9ec4d"},{url:"./images/icon-512x512.png",revision:"56641f8b7d7ceb855757b07afe3483a4"},{url:"manifest.webmanifest",revision:"05893f0758c57068b5f36a3a8c04edf5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
