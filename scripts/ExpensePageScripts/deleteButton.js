import { renderPrevExpenseHTML } from "./utils/renderPrevExpenseHTML.js";

export function deleteListElem(userName) {
  const applyEventListener = () => {
    document.querySelectorAll(".deleteButton").forEach((elem, index) => {
      elem.addEventListener("click", () => {
        const expenseList =
          JSON.parse(localStorage.getItem("expenseList")) || {};
        const userExpense = expenseList[userName];
        userExpense.splice(index, 1);
        expenseList[userName] = userExpense;
        localStorage.setItem("expenseList", JSON.stringify(expenseList));
        renderPrevExpenseHTML(userExpense, userName);
        applyEventListener();
      });
    });
  };
  applyEventListener();
}
