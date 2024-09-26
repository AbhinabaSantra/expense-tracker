import { updateUserData } from "./utils/dataModification.js";

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});

//initializing the input elements
const incomeInput = document.querySelector(".income") || 0;
const savingsInput = document.querySelector(".savings") || 0;

//getting userName from url
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get("userName");

document.querySelector(".continue").addEventListener("click", () => {
  updateUserData(userName, incomeInput.value, 0, savingsInput.value);
  window.location.href = `dashboard.html?userName=${userName}`;
});
