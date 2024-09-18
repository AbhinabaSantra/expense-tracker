import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { renderMessage } from "../utils/errorMessageRender.js";
import { userData } from "../../data/userData.js";

let expenseList = JSON.parse(localStorage.getItem("expenseList")) || {};
const expenseCatagoryInput = document.querySelector(".expenseName");
const amountInput = document.querySelector(".amount");
const dateInput = document.querySelector(".date");
const expenseNameError = document.querySelector(".expenseNameError");
const amountError = document.querySelector(".amountError");
const successMessage = document.querySelector(".successMessage");

//adding the default value of date i.e. that days date
const date = new dayjs();

export function addSection(userName) {
  dateInput.value = `${date.format("YYYY-MM-DD")}`;
  document.querySelector(".addExpense").addEventListener("click", () => {
    const error = errorCheck();
    if (!error) {
      databaseUpdates();
    }
  });
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focus", () => {
      expenseNameError.innerHTML = "";
      amountError.innerHTML = "";
    });
  });
}

function errorCheck() {
  let error = false;
  if (amountInput.value === "") {
    renderMessage(amountError, "Amount cannot be empty", "red", 12);
    amountError.style.marginBottom = "12px";
    error = true;
  }
  if (expenseCatagoryInput.value === "") {
    renderMessage(
      expenseNameError,
      "Expense catagory cannot be empty",
      "red",
      12
    );
    expenseNameError.style.marginBottom = "12px";
    error = true;
  }
  return error;
}

function databaseUpdates(userName) {
  let userExpense = expenseList[userName];

  if (!userExpense) {
    expenseList[userName] = [];
    userExpense = expenseList[userName];
  }

  // Create a new expense object
  const newExpense = [
    expenseCatagoryInput.value,
    amountInput.value,
    dateInput.value,
  ];

  // Push the new expense object to the user's expense array
  userExpense.push(newExpense);
  localStorage.setItem("expenseList", JSON.stringify(expenseList));
  renderMessage(successMessage, "Expense Added 👍", "green", 12);
}
