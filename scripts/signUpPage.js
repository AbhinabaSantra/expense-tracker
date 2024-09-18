import { userData } from "../data/userData.js";
import { renderMessage } from "./utils/errorMessageRender.js";

// Query selectors for elements
const userNameInput = document.querySelector(".userName");
const passInput = document.querySelector(".pass");
const confirmPass = document.querySelector(".confirm-pass");
const continueButton = document.querySelector(".continue");
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});

// Check username availability when focus is moved away from username input
userNameInput.addEventListener("blur", () => {
  let userList = JSON.parse(localStorage.getItem("userList")) || [];
  if (userNameInput.value === "") {
    renderMessage(message1, "", "", 0);
  } else if (userList.includes(userNameInput.value)) {
    renderMessage(message1, "Username already exists", "red", 10);
  } else {
    renderMessage(message1, "Username available", "green", 10);
  }
});

// Clear message1 when continue button is clicked and display appropriate message in message2
continueButton.addEventListener("click", handleContinue);

function handleContinue() {
  let userList = JSON.parse(localStorage.getItem("userList")) || [];
  let passList = JSON.parse(localStorage.getItem("pass")) || {};

  // Clear message1 and display result in message2 instead
  renderMessage(message1, "", "", 0);

  if (userList.includes(userNameInput.value)) {
    renderMessage(
      message2,
      "Username already exists. Please choose another username.",
      "red",
      10
    );
    return;
  }

  if (passInput.value !== confirmPass.value) {
    renderMessage(message2, "Passwords do not match", "red", 10);
    return;
  }

  // Update user list and password
  updateUserListAndPass(userList, passList);
}

// Update local storage with new username and password
function updateUserListAndPass(userList, passList) {
  userList.push(userNameInput.value);
  passList[userNameInput.value] = passInput.value;
  localStorage.setItem("userList", JSON.stringify(userList));
  localStorage.setItem("pass", JSON.stringify(passList));

  userDataEntryCreation(userNameInput.value);

  window.location.href = `userDataInit.html?userName=${userNameInput.value}`;
}

// Clear messages on focus for all inputs
document.querySelectorAll("input").forEach((elem) => {
  elem.addEventListener("focus", () => {
    renderMessage(message2, "", ""); // Clear message2 on focus
  });
});

// better method=>
// Reset form and clear messages when returning to the page via back button
// window.addEventListener("pageshow", () => {
//   form.reset(); // Reset all input fields
//   renderMessage(message1, "", ""); // Clear message1
//   renderMessage(message2, "", ""); // Clear message2
// });
userNameInput.addEventListener("focus", () => {
  renderMessage(message1, "", "");
});
