import { updateExpense } from "../utils/updateExpense.js";
import { renderPrevExpenseHTML } from "./utils/renderPrevExpenseHTML.js";

export function deleteListElem(userName) {
  const applyEventListener = () => {
    document.querySelectorAll(".deleteButton").forEach((elem) => {
      elem.addEventListener("click", () => {
        const expenseList =
          JSON.parse(localStorage.getItem("expenseList")) || {};
        const userExpense = expenseList[userName];
        const expenseId = Number(elem.dataset.id);
        const updatedUserExpense = userExpense.filter(
          (expenseItem) => expenseItem[0] !== expenseId
        );
        expenseList[userName] = updatedUserExpense;
        localStorage.setItem("expenseList", JSON.stringify(expenseList));
        renderPrevExpenseHTML(updatedUserExpense.reverse(), userName);
        applyEventListener();
        updateExpense(userName);
      });
    });
  };
  applyEventListener();
}
