const continueElem = document.querySelector(".continue");

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
  console.log(userName);
  if (userList.includes(userName)) {
    checkPassValidity(userName, pass);
  } else {
    errorMessageRender("User not found. Please sign Up..");
  }
}
function checkPassValidity(userName, pass) {
  const passSet = JSON.parse(localStorage.getItem("pass")) || {};
  if (passSet[userName] === pass) {
    window.location.href = `dashboard.html?userName=${userName}`;
  } else {
    errorMessageRender("Incorrect password. Try again!!!");
  }
}
function errorMessageRender(message) {
  const errorElem = document.querySelector(".message");
  errorElem.innerHTML = message;
  errorElem.style.margin = "10px 0px 0px 0px";
  errorElem.style.color = "red";
}
document.querySelectorAll("input").forEach((elem) => {
  elem.addEventListener("focus", () => {
    const messageElem = document.querySelector(".message");
    if (messageElem.innerHTML !== "") {
      messageElem.innerHTML = "";
    }
  });
});
