"use strict";document.addEventListener("DOMContentLoaded",function(){let e;let t=document.getElementById("email"),n=document.getElementById("password"),a=document.getElementById("login");document.querySelector(".login-content"),document.querySelector(".dashboard-container"),a.addEventListener("click",async function(a){a.preventDefault();let o=[],l=await fetch("https://react-http-f3ac8-default-rtdb.firebaseio.com/mikiBank.json"),c=await l.json();o.push(c),(e=await o.find(e=>{let n=Object.values(e)[0];return n.mail===t.value}))&&Object.values(e)[0].password===+n.value?(localStorage.setItem("allUsers",JSON.stringify({allusers:o})),window.location.replace("dashboard.html")):console.log("error")})});
//# sourceMappingURL=index.5f1229e1.js.map
