export function annualExpenseData(userName) {
  const expenseList = JSON.parse(localStorage.getItem("expenseList"));
  const userExpense = expenseList[userName];

  const annualExpenseList = {};

  userExpense.forEach((expense) => {
    const expenseDate = new Date(expense[3]);
    const year = expenseDate.getFullYear();

    if (!annualExpenseList[year]) {
      annualExpenseList[year] = 0;
    }

    const now = new Date();
    annualExpenseList[year] += expense[2];
  });
  return annualExpenseList;
}
