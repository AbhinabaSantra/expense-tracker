import { renderPrevExpenseHTML } from "./utils/renderPrevExpenseHTML.js";

export function displayPrevExpense(userName) {
  const expenseList = JSON.parse(localStorage.getItem("expenseList")) || {};
  const userExpense = expenseList[userName];
  const reversedUserExpense = userExpense.reverse();
  renderPrevExpenseHTML(reversedUserExpense, userName);
}
