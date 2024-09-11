localStorage.setItem("userList", JSON.stringify(["user1"]));
localStorage.setItem("pass", JSON.stringify({ user1: "789456123" }));
const continueElem = document.querySelector(".continue");
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
  const userList = JSON.parse(localStorage.getItem("userList"));
  console.log(userName);
  if (userList.includes(userName)) {
    checkPassValidity(userName, pass);
  } else {
    errorMessageRender("User not found. Please sign Up..");
  }
}
function checkPassValidity(userName, pass) {
  const passSet = JSON.parse(localStorage.getItem("pass"));
  if (passSet[userName] === pass) {
    window.location.href = "dashboard.html";
  } else {
    errorMessageRender("Incorrect password. Try again!!!");
  }
}
function errorMessageRender(message) {
  const errorElem = document.querySelector(".message");
  errorElem.innerHTML = message;
  errorElem.style.margin = "10px 0px 0px 0px";
}
document.querySelectorAll("input").forEach((elem) => {
  elem.addEventListener("click", () => {
    const messageElem = document.querySelector(".message");
    if (messageElem.innerHTML !== "") {
      messageElem.innerHTML = "";
    }
  });
});
