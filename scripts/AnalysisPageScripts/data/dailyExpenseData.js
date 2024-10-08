export function dailyExpenseData(userName) {
  const expenseList = JSON.parse(localStorage.getItem("expenseList")) || {};
  const userExpense = expenseList[userName] || [];

  const dailyExpenseList = Array(31).fill(0);
  userExpense.forEach((expense) => {
    const expenseDate = new Date(expense[3]);
    const date = expenseDate.getDate() - 1;
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
