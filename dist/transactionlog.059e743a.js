"use strict";!async function(){try{let t=await fetch("https://react-http-f3ac8-default-rtdb.firebaseio.com/mikitranssaction.json");if(!t.ok)throw Error("Failed to fetch data");let e=await t.json(),a=Object.values(e);a.map(t=>t.transAmount).reduce((t,e)=>t+e),a.forEach(function(t,e){let a=`
        <div class="loan-item1">
        <p>${t.date}</p>
        <p>${t.transName}</p>
        <p class="red">- $${t.transAmount}</p>
        <p class="none">Debit</p>
        <p class="none">#53BV899GFT</p>
      </div>`;document.querySelector(".loan-history-items").insertAdjacentHTML("afterbegin",a)})}catch(t){console.error("Error:",t)}}();
//# sourceMappingURL=transactionlog.059e743a.js.map
