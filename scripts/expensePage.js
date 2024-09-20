import { addSection } from "./ExpensePageScripts/AddSection.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { displayPrevExpense } from "./ExpensePageScripts/prevExpense.js";

const dateTime = document.querySelector(".dateTime");
const date = new dayjs();
dateTime.innerHTML = `~ ${date.format("DD MMM YYYY")}`;

const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get("userName");
const profileName = document.querySelector(".userName");
profileName.innerHTML = userName;

document.querySelector(
  ".dashboardLink"
).href = `dashboard.html?userName=${userName}`;
document.querySelector(
  ".expenseLink"
).href = `expense.html?userName=${userName}`;
document.querySelector(".reportLink").href = `report.html?userName=${userName}`;
document.querySelector(".budgetLink").href = `budget.html?userName=${userName}`;

addSection(userName);
displayPrevExpense(userName);
