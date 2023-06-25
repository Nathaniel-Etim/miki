"use strict";

const localStorageitem = localStorage.getItem("allUsers");
const allUsers = JSON.parse(localStorageitem);

const spec = Object.values(allUsers)[0][0];
const user = Object.values(spec)[0];

console.log(user);

document.querySelector(".name").textContent = user.name;
document.querySelector(".mail").textContent = user.mail;
document.querySelector(".address").textContent = user.homeAddress;
