export function updateExpense(userName) {
  const expenseList = JSON.parse(localStorage.getItem("expenseList"));
  const userExpense = expenseList[userName];
  let expense = 0;
  userExpense.forEach((element) => {
    expense += Number(element[1]);
  });
  const newUserData = JSON.parse(localStorage.getItem("userData"));
  newUserData[userName].expense = expense;
  localStorage.setItem("userData", JSON.stringify(newUserData));
}
