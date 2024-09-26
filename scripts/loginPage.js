import { renderMessage } from "./utils/errorMessageRender.js";

const continueElem = document.querySelector(".continue");
const errorElem = document.querySelector(".message");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});

if (continueElem) {
  continueElem.addEventListener("click", (event) => {
    let userNameInput = document.querySelector(".userName");
    let passInput = document.querySelector(".pass");

    verifyUser(userNameInput.value, passInput.value);
    userNameInput.value = "";
    passInput.value = "";
  });
}
function verifyUser(userName, pass) {
  const userList = JSON.parse(localStorage.getItem("userList")) || [];
  if (userList.includes(userName)) {
    checkPassValidity(userName, pass);
  } else {
    renderMessage(errorElem, "User not found. Please sign Up..", "red", 10);
  }
}
function checkPassValidity(userName, pass) {
  const passSet = JSON.parse(localStorage.getItem("pass")) || {};
  if (passSet[userName] === pass) {
    window.location.href = `dashboard.html?userName=${userName}`;
  } else {
    renderMessage(errorElem, "Incorrect password. Try again!!!", "red", 10);
  }
}

document.querySelectorAll("input").forEach((elem) => {
  elem.addEventListener("focus", () => {
    const messageElem = document.querySelector(".message");
    if (messageElem.innerHTML !== "") {
      messageElem.innerHTML = "";
    }
  });
});
