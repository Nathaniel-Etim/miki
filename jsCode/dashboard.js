"use strict";

const localStorageitem = localStorage.getItem("allUsers");
const allUsers = JSON.parse(localStorageitem);

const spec = Object.values(allUsers)[0][0];
const user = Object.values(spec)[0];

const amount = 100000;

const userName = (document.querySelector(".account-name").textContent =
  user.name);
const cardName = (document.querySelector(".cardName").textContent = user.name);
const welcome = (document.querySelector(
  ".welcome"
).textContent = `welcome back ${user.name}`);

const accountNumber = (document.querySelector(".acc-no").textContent =
  user.accountNumber);
const balance = (document.querySelector(
  ".balance"
).textContent = `$ ${amount}`);

const localStorageTransfer = localStorage.getItem("transfer");
const userTransfer = JSON.parse(localStorageTransfer);

const containerMovements = document.querySelector(".tran-body");
const lastThreeItems = userTransfer?.slice(-3);

async function fetchData() {
  try {
    const response = await fetch(
      "https://react-http-f3ac8-default-rtdb.firebaseio.com/mikitranssaction.json"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const tensaction = Object.values(data);

    const alltrans = tensaction
      .map((el) => {
        return el.transAmount;
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue);

    document.querySelector(".balance").textContent = `$ ${amount - alltrans}`;

    const lastThreeItems = tensaction?.slice(-3);

    lastThreeItems.forEach(function (mov, i) {
      const html = `
      <div class="trans1">
      <div class="lef">
        <div class="lef-icon">
          <i class="bi-credit-card-fill"></i>
        </div>
        <div class="lef-write">
         ${mov.transName}<br /><span>Debit</span>
        </div>
      </div>
      <div class="rit debit">- $${mov.transAmount}</div>
    </div>`;
      containerMovements.insertAdjacentHTML("afterbegin", html);
    });

    // Further processing or handling of the retrieved data can be done here
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
