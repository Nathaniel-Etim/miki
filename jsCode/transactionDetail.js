"use strict";

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

    tensaction.forEach(function (mov, i) {
      const html = `
        <div class="loan-item1">
        <p>${mov.date}</p>
        <p>${mov.transName}</p>
        <p class="red">- $${mov.transAmount}</p>
        <p class="none">Debit</p>
        <p class="none">#53BV899GFT</p>
      </div>`;
      document
        .querySelector(".loan-history-items")
        .insertAdjacentHTML("afterbegin", html);
    });

    // Further processing or handling of the retrieved data can be done here
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
