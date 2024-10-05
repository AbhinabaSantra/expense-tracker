import { addSection } from "./ExpensePageScripts/AddSection.js";
import { displayPrevExpense } from "./ExpensePageScripts/prevExpense.js";
import { loadMoreButton } from "./ExpensePageScripts/loadMoreButton.js";
import { headerRender } from "./utils/headerRender.js";
import { hrefUpdate } from "./utils/hrefUpdate.js";

const userName = headerRender();
hrefUpdate(userName);

addSection(userName);
displayPrevExpense(userName);
loadMoreButton(userName);
