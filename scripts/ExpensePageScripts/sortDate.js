import { renderPrevExpenseHTML } from "./utils/renderPrevExpenseHTML.js";

export function sortDate(userName) {
  const applyEventListeners = () => {
    document.querySelector(".arrowUp").addEventListener("click", () => {
      const expenseList = JSON.parse(localStorage.getItem("expenseList")) || {};
      const userExpense = expenseList[userName] || [];
      if (userExpense.length === 0) return;
      const sortedUserExpense = userExpense.sort(
        (a, b) => new Date(a[2]) - new Date(b[2])
      );
      renderPrevExpenseHTML(sortedUserExpense, userName);
      applyEventListeners();
    });

    document.querySelector(".arrowDown").addEventListener("click", () => {
      const expenseList = JSON.parse(localStorage.getItem("expenseList")) || {};
      const userExpense = expenseList[userName] || [];
      if (userExpense.length === 0) return;
      const sortedUserExpense = userExpense.sort(
        (a, b) => new Date(b[2]) - new Date(a[2])
      );
      renderPrevExpenseHTML(sortedUserExpense, userName);
      applyEventListeners();
    });

    document.querySelector(".dateList p").addEventListener("click", () => {
      const expenseList = JSON.parse(localStorage.getItem("expenseList")) || {};
      const userExpense = expenseList[userName] || [];
      if (userExpense.length === 0) return;
      const reversedUserExpense = userExpense.reverse();
      renderPrevExpenseHTML(reversedUserExpense, userName);
      applyEventListeners();
    });
  };

  applyEventListeners();
}
