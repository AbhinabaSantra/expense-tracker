export function monthlyExpenseData(userName) {
  const expenseList = JSON.parse(localStorage.getItem("expenseList"));
  const userExpense = expenseList[userName];

  const monthlyExpense = Array(13).fill(0);

  userExpense.forEach((expense) => {
    const expenseDate = new Date(expense[3]);
    const month = expenseDate.getMonth() + 1;
    const now = new Date();
    if (expenseDate.getFullYear() === now.getFullYear()) {
      monthlyExpense[month] += expense[2];
    }
  });
  return monthlyExpense;
}
