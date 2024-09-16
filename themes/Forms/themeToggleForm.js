import { enableDarkModeLoginPage } from "./toogleThemeForm/darkModeAuthPage.js";
import { enableLightModeLoginPage } from "./toogleThemeForm/lightModeAuthPage.js";

let themeButton = document.querySelector(".theme");
let theme = document.querySelector(".js-theme-icon");
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
}
applyPreferedTheme();
themeButton.addEventListener("click", () => {
  if (theme.innerHTML === "dark_mode") {
    localStorage.setItem("theme", "dark");
    applyPreferedTheme();
  } else if (theme.innerHTML === "light_mode") {
    localStorage.setItem("theme", "light");
    applyPreferedTheme();
  }
});
function applyPreferedTheme() {
  const perferedTheme = localStorage.getItem("theme");
  if (perferedTheme === "light") {
    enableLightModeLoginPage();
    theme.innerHTML = "dark_mode";
  } else if (perferedTheme === "dark") {
    theme.innerHTML = "light_mode";
    enableDarkModeLoginPage();
  }
}
