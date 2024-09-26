import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { sortDate } from "../sortDate.js";
import { deleteListElem } from "../deleteButton.js";

export function renderPrevExpenseHTML(list, userName) {
  let prevExpenseList = `
        <div class="listItems listItemHeader">
            <div class="expenseNameList listHead">
                <p>Expense Name</p>
            </div>
            <div class="dateList listHead">
                <p>Date</p>
                <div>
                    <span class="material-symbols-outlined arrowUp">
                        arrow_drop_up
                    </span>
                    <span class="material-symbols-outlined arrowDown">
                        arrow_drop_down
                    </span>
                </div>
            </div>
            <div class="amountList listHead">
                <p>Amount</p>
            </div>
        </div>`;
  for (let i = 0; i < list.length && i < 10; i++) {
    prevExpenseList += `
        <div class="listItems" data-index=${i}>
            <span class="expenseNameList">${list[i][0]} </span>
            <span class="dateList">${dayjs(list[i][2]).format(
              "DD-MM-YY"
            )}</span>
            <span class="amountList">${list[i][1]}</span>
            <button class="deleteButton"><span class="material-symbols-outlined">
                delete
            </span></button>
        </div>
        `;
  }
  document.querySelector(".expenseTable").innerHTML = prevExpenseList;
  sortDate(userName);
  deleteListElem(userName);
}
