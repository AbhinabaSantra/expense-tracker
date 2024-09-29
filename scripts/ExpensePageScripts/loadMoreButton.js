import { renderPrevExpenseHTML } from "./utils/renderPrevExpenseHTML.js";

let listLength = 10;
export function loadMoreButton(userName) {
  document.querySelector(".loadMore").addEventListener("click", () => {
    const expenseList = JSON.parse(localStorage.getItem("expenseList")) || {};
    const userExpense = expenseList[userName];
    const reversedUserExpense = userExpense.reverse();
    listLength += 10;
    renderPrevExpenseHTML(reversedUserExpense, userName, listLength);
  });
}
