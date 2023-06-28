"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //! login screen element

  const userEmailInput = document.getElementById("email");
  const userPasswordInput = document.getElementById("password");
  const loginBtn = document.getElementById("login");

  //! dashBord page

  const dashboard = document.querySelector(".dashboard-container");

  let currentUser;

  loginBtn.addEventListener("click", async function (e) {
    e.preventDefault();
    const allusers = [];

    const response = await fetch(
      "https://react-http-f3ac8-default-rtdb.firebaseio.com/mikiBank.json"
    );

    if (!response.ok) {
      alert("Failed to fetch data");
    }
    // check if userName exists

    const data = await response.json();

    allusers.push(data);

    currentUser = await allusers.find((element) => {
      const user = Object.values(element)[0];

      return user.mail === userEmailInput.value;
    });

    if (
      currentUser &&
      Object.values(currentUser)[0].password === +userPasswordInput.value
    ) {
      localStorage.setItem("allUsers", JSON.stringify({ allusers }));
      window.location.href = "dashboard.html";
    } else {
      console.log("error");
      // handle incorrect login credentials here
    }
  });
});
