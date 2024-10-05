export function dailyExpenseData(userName) {
  const expenseList = JSON.parse(localStorage.getItem("expenseList"));
  const userExpense = expenseList[userName];

  const dailyExpenseList = Array(32).fill(0);
  userExpense.forEach((expense) => {
    const expenseDate = new Date(expense[3]);
    const date = expenseDate.getDate();
    const now = new Date();
    if (
      expenseDate.getMonth() === now.getMonth() &&
      expenseDate.getFullYear() === now.getFullYear()
    ) {
      dailyExpenseList[date] += expense[2];
    }
  });
  return dailyExpenseList;
}
