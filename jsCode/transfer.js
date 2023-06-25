"use strict";

const localStorageitem = localStorage.getItem("allUsers");
const allUsers = JSON.parse(localStorageitem);

const spec = Object.values(allUsers)[0][0];
const user = Object.values(spec)[0];

// Select the first form with name="bank-transfer-form"
const form1 = document.forms[0];

// Select the second form with name="bank-transfer-form"
const form2 = document.forms[1];

// Select the relevant input fields from form1
const accountName = form2.querySelector(".input-accountname");
const transferAmount = form2.querySelector(".input-amount");

// element
const userName = document.querySelector(".userName");
const transferPin = document.getElementById("pin");
const transfer = document.querySelector(".blue");

userName.textContent = `Hi, ${user.name}`;

transfer.addEventListener("click", async function (event) {
  event.preventDefault();

  // Access the input values
  const transName = accountName.value;
  const transAmount = transferAmount.value;

  function getCurrentFormattedDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

  const currentFormattedDate = getCurrentFormattedDate();

  const response = await fetch(
    "https://react-http-f3ac8-default-rtdb.firebaseio.com/mikitranssaction.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any required authentication headers or other headers here
      },
      body: JSON.stringify({
        transName,
        transAmount: +transAmount,
        date: currentFormattedDate,
      }),
    }
  );
  window.location.replace("dashboard.html");
});
