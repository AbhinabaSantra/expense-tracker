import { userData } from "../data/userData.js";
import { headerRender } from "./utils/headerRender.js";
import { hrefUpdate } from "./utils/hrefUpdate.js";

const userName = headerRender("DD MMMM YY");
hrefUpdate(userName);

document.querySelector(".incomeValue").innerHTML = userData[userName].income;
document.querySelector(".expenseValue").innerHTML =
  userData[userName]["expense"];
document.querySelector(".remainValue").innerHTML =
  userData[userName]["income"] -
  userData[userName]["expense"] -
  userData[userName]["savings"];
document.querySelector(".savingsValue").innerHTML =
  userData[userName]["savings"];
