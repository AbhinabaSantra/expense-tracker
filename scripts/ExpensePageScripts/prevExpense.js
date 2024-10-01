import { renderPrevExpenseHTML } from "./utils/renderPrevExpenseHTML.js";

export function displayPrevExpense(userName) {
  const expenseList = JSON.parse(localStorage.getItem("expenseList")) || {};
  const userExpense = expenseList[userName];
  if (!userExpense || userExpense.length === 0) {
    document.querySelector(".prevExpense").style.display = "none";
    return;
  }
  const reversedUserExpense = userExpense.reverse();
  renderPrevExpenseHTML(reversedUserExpense, userName);
}
