(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const b=s=>{const{name:o,address:e,company:c}=s,t=document.createElement("tr"),n=document.createElement("td");n.innerText=o;const r=document.createElement("td");r.innerText=e;const a=document.createElement("td");return a.innerText=c,t.appendChild(n),t.appendChild(r),t.appendChild(a),t},x=(s,o)=>{const{name:e,address:c,city:t,postalCode:n,phone:r,company:a}=s;let l=`<h3>${e}</h3>
    <p>${a}</p>
    <p>${c} ${n} ${t}</p>
    <p>${r}</p>
    <table>
      <tr>
        <th>Course</th>
        <th>Diet</th>
        <th>Price</th>
      </tr>
    `;return o.courses.forEach(d=>{const{name:m,diets:h,price:p}=d;l+=`
          <tr>
            <td>${m}</td>
            <td>${h??" - "}</td>
            <td>${p??" - "}</td>
          </tr>
          `}),l+="</table>",l},y=s=>`
        <h3>Error</h3>
        <p>${s}</p>
        `,g=async(s,o={})=>{const e=await fetch(s,o);if(!e.ok)throw new Error(`Error ${e.status} occured`);return e.json()},w="https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1",M={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};const i=document.querySelector("dialog");if(!i)throw new Error("Modal not found");i.addEventListener("click",()=>{i.close()});const f=(s,o,e,c)=>Math.sqrt((e-s)**2+(c-o)**2),u=s=>{const o=document.querySelector("table");if(!o)throw new Error("Table not found");o.innerHTML="",s.forEach(e=>{const c=b(e);o.appendChild(c),c.addEventListener("click",async()=>{try{document.querySelectorAll(".highlight").forEach(a=>{a.classList.remove("highlight")}),c.classList.add("highlight"),i.innerHTML="";const n=await g(w+`/restaurants/daily/${e._id}/fi`),r=x(e,n);i.insertAdjacentHTML("beforeend",r),i.showModal()}catch(t){i.innerHTML=y(t.message),i.showModal()}})})},C=s=>{console.warn(`ERROR(${s.code}): ${s.message}`)},v=async s=>{try{const o=s.coords,e=await g(w+"/restaurants");console.log(e),e.sort((r,a)=>{const l=o.latitude,d=o.longitude,m=r.location.coordinates[1],h=r.location.coordinates[0],p=f(l,d,m,h),E=a.location.coordinates[1],L=a.location.coordinates[0],$=f(l,d,E,L);return p-$}),u(e);const c=document.querySelector("#sodexo"),t=document.querySelector("#compass"),n=document.querySelector("#reset");if(!c)throw new Error("Button not found");if(!t)throw new Error("Button not found");if(!n)throw new Error("Button not found");c.addEventListener("click",()=>{const r=e.filter(a=>a.company==="Sodexo");console.log(r),u(r)}),t.addEventListener("click",()=>{const r=e.filter(a=>a.company==="Compass Group");console.log(r),u(r)}),n.addEventListener("click",()=>{u(e)})}catch(o){i.innerHTML=y(o.message),i.showModal()}};navigator.geolocation.getCurrentPosition(v,C,M);
