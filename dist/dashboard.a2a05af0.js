"use strict";const e=localStorage.getItem("allUsers"),t=JSON.parse(e),c=Object.values(t)[0][0],a=Object.values(c)[0];document.querySelector(".account-name").textContent=a.name,document.querySelector(".cardName").textContent=a.name,document.querySelector(".welcome").textContent=`welcome back ${a.name}`,document.querySelector(".acc-no").textContent=a.accountNumber,document.querySelector(".balance").textContent="$ 100000";const n=localStorage.getItem("transfer"),r=JSON.parse(n),o=document.querySelector(".tran-body");r?.slice(-3),async function(){try{let e=await fetch("https://react-http-f3ac8-default-rtdb.firebaseio.com/mikitranssaction.json");if(!e.ok)throw Error("Failed to fetch data");let t=await e.json(),c=Object.values(t),a=c.map(e=>e.transAmount).reduce((e,t)=>e+t);document.querySelector(".balance").textContent=`$ ${1e5-a}`;let n=c?.slice(-3);n.forEach(function(e,t){let c=`
      <div class="trans1">
      <div class="lef">
        <div class="lef-icon">
          <i class="bi-credit-card-fill"></i>
        </div>
        <div class="lef-write">
         ${e.transName}<br /><span>Debit</span>
        </div>
      </div>
      <div class="rit debit">- $${e.transAmount}</div>
    </div>`;o.insertAdjacentHTML("afterbegin",c)})}catch(e){console.error("Error:",e)}}();
//# sourceMappingURL=dashboard.a2a05af0.js.map
