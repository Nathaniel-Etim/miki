"use strict";const e=localStorage.getItem("allUsers"),t=JSON.parse(e),c=Object.values(t)[0][0],n=Object.values(c)[0];document.querySelector(".account-name").textContent=n.name,document.querySelector(".cardName").textContent=n.name,document.querySelector(".welcome").textContent=`welcome back ${n.name}`,document.querySelector(".acc-no").textContent=n.accountNumber,document.querySelector(".balance").textContent="$ 25000";const a=localStorage.getItem("transfer"),r=JSON.parse(a),o=document.querySelector(".tran-body"),l=r?.slice(-3);if(r&&r.length>=0){let e=r.map(e=>e.transAmount).reduce((e,t)=>e+t);document.querySelector(".balance").textContent=`$ ${25e3-e}`,l.forEach(function(e,t){let c=`
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
</div>`;o.insertAdjacentHTML("afterbegin",c)})}
//# sourceMappingURL=dashboard.237400c2.js.map
