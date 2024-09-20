import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export function displayPrevExpense(userName) {
  console.log("called");
  let prevExpenseList = "";

  const expenseList = JSON.parse(localStorage.getItem("expenseList")) || {};
  const userExpense = expenseList[userName];
  const reversedUserExpense = userExpense.reverse();
  for (let i = 0; i < reversedUserExpense.length && i < 10; i++) {
    prevExpenseList += `
          <div class="listItems">
              <span class="expenseNameList">${userExpense[i][0]} </span>
              <span class="dateList">${dayjs(userExpense[i][2]).format(
                "DD-MM-YY"
              )}</span>
              <span class="amountList">${userExpense[i][1]}</span>
              <button class="deleteButton"><span class="material-symbols-outlined">
                  delete
              </span></button>
          </div>
          `;
  }
  document.querySelector(".expenseTable").innerHTML = prevExpenseList;
}
