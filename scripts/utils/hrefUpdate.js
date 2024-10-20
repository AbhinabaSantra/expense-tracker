// prettier-ignore
export function hrefUpdate(userName) {
  document.querySelector(".dashboardLink").href = `dashboard.html?userName=${userName}`;
  document.querySelector(".expenseLink").href = `expense.html?userName=${userName}`;
  document.querySelector(".reportLink").href = `analysis.html?userName=${userName}`;
  document.querySelector(".budgetLink").href = `settings.html?userName=${userName}`;
  document.querySelector(".dashboardLinkBottom").href = `dashboard.html?userName=${userName}`;
  document.querySelector(".expenseLinkBottom").href = `expense.html?userName=${userName}`;
  document.querySelector(".reportLinkBottom").href = `analysis.html?userName=${userName}`;
  document.querySelector(".budgetLinkBottom").href = `settings.html?userName=${userName}`;
}
