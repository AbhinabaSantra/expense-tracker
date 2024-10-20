import { renderMessage } from "../utils/errorMessageRender.js";

const updateButton = document.querySelector(".updateButton");
const incomeInput = document.querySelector(".incomeInput");
const savingsInput = document.querySelector(".savingsInput");
const errorElem = document.querySelector(".errorMessage");

//Main function for rendering updatesection in settings page
export function updateSection(userName) {
  [incomeInput, savingsInput].forEach((elem) => {
    elem.addEventListener("click", () => {
      errorElem.innerHTML = "";
      errorElem.style.display = "none";
    });
  });
  updateButton.addEventListener("click", () => {
    if (!incomeInput.value && !savingsInput.value) {
      errorElem.style.display = "flex";
      renderMessage(errorElem, "Nothing to Update", "red", 12);
      return;
    }
    userauth(userName);
  });
}

// Asks user for password berfore modifying the credentials
function userauth(userName) {
  Swal.fire({
    title: "Confirm Password",
    text: "Enter password to confirm changes :",
    icon: "warning",
    confirmButtonText: "Verify",
    showCancelButton: "true",

    input: "password",
    inputAttributes: {
      autocapitalize: "off",
      autocorrect: "off",
    },
    inputValidator: (value) => {
      const passSet = JSON.parse(localStorage.getItem("pass")) || {};
      if (passSet[userName] !== value) {
        return "Incorrect Password!!! Try Again!";
      } else {
        dataUpdate(userName);
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Success",
        text: "Credentials updated",
        icon: "success",
        confirmButtonText: "Close",
      });
    }
  });
}

// Updating the userData in database[localStorage]
function dataUpdate(userName) {
  //loading form localstorage
  const userDatabase = JSON.parse(localStorage.getItem("userData"));
  const userData = userDatabase[userName];

  //Prev data inintialization
  const prevIncome = userData.income;
  const prevSavings = userData.savings;

  //Data modification
  userData.income = incomeInput.value || prevIncome;
  userData.savings = savingsInput.value || prevSavings;
  localStorage.setItem("userData", JSON.stringify(userDatabase));
}
