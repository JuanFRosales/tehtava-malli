if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>n(e,r),a={module:{uri:r},exports:s,require:f};i[r]=Promise.all(c.map((e=>a[e]||f(e)))).then((e=>(o(...e),s)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app-icon.png",revision:"794b6a9fcb24bf213dcf1946b81799a1"},{url:"app-icon.svg",revision:"104f23f56679710119f4aa3ed33c1da2"},{url:"assets/index-ea013db8.js",revision:null},{url:"icons/icon-192x192.png",revision:"b6c036e5eff396ee211876bf9696e839"},{url:"icons/icon-256x256.png",revision:"84edf4d141d421b5685da78855abce82"},{url:"icons/icon-384x384.png",revision:"3cd99731f0f0638cec568a41adb9ec4d"},{url:"icons/icon-512x512.png",revision:"56641f8b7d7ceb855757b07afe3483a4"},{url:"index.html",revision:"9dc4e0005a4c1f9ea092c8db5baaca51"},{url:"main.css",revision:"e22ff6209bf7346ad60da9ea11363af9"},{url:"Pacifico-Regular.ttf",revision:"8cd9eedd1bcea74e8e98731c32a5ff3e"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"icons/icon-192x192.png",revision:"b6c036e5eff396ee211876bf9696e839"},{url:"icons/icon-256x256.png",revision:"84edf4d141d421b5685da78855abce82"},{url:"icons/icon-384x384.png",revision:"3cd99731f0f0638cec568a41adb9ec4d"},{url:"icons/icon-512x512.png",revision:"56641f8b7d7ceb855757b07afe3483a4"},{url:"manifest.webmanifest",revision:"4210a22097e91492ece2cbc2f087dba7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
