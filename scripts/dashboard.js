import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { userData } from "../data/userData.js";

const dateTime = document.querySelector(".dateTime");
const date = new dayjs();
dateTime.innerHTML = `~ ${date.format("DD MMMM YYYY")}`;

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
document.querySelector(
  ".reportLink"
).href = `analysis.html?userName=${userName}`;
document.querySelector(".budgetLink").href = `modify.html?userName=${userName}`;

document.querySelector(".incomeValue").innerHTML = userData[userName].income;
document.querySelector(".expenseValue").innerHTML =
  userData[userName]["expense"];
document.querySelector(".remainValue").innerHTML =
  userData[userName]["income"] -
  userData[userName]["expense"] -
  userData[userName]["savings"];
document.querySelector(".savingsValue").innerHTML =
  userData[userName]["savings"];
