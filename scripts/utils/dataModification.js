import { userData } from "../../data/userData.js";
export function updateUserData(user, income, expense, savings) {
  userData[user]["income"] = income;
  userData[user]["expense"] = expense;
  userData[user]["savings"] = savings;
  localStorage.setItem("userData", JSON.stringify(userData));
}
