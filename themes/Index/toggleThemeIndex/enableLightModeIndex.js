export function enableLightMode() {
  document.body.style.backgroundColor = "#ffffff";

  const header = document.querySelector("header");
  header.style.backgroundColor = "#fafafa";
  header.style.boxShadow = "8px 8px 8px rgb(249,249,249)";

  const navBarItems = document.querySelectorAll(".navBar li");
  navBarItems.forEach((item) => {
    item.style.backgroundColor = "#03045e";
    item.style.color = "#ffffff";
    item.style.border = "1px solid #000000";
  });

  const navBarLinks = document.querySelectorAll(".navBar a");
  navBarLinks.forEach((link) => {
    link.style.color = "#ffffff";
  });

  const logo = document.querySelector(".logo");
  logo.style.color = "#03045e";

  const appNameLink = document.querySelector(".appName a");
  appNameLink.style.color = "#03045e";

  const mainImg = document.querySelector(".main-img");
  if (mainImg) {
    mainImg.style.filter = "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.7))";
  }

  const aboutSection = document.querySelector(".about");
  aboutSection.style.backgroundColor = "#ffffff";
  aboutSection.style.border = "1px solid rgba(111,111,111,0.766)";
  aboutSection.style.color = "#434343";

  const getStartedButton = document.querySelector(".getStarted");
  getStartedButton.style.backgroundColor = "#03045e";
  getStartedButton.style.border = "1px solid #000000";
  getStartedButton.style.color = "#ffffff";

  const signUpAndLoginButtons = document.querySelectorAll(
    ".signUp, .login, .getStarted"
  );
  signUpAndLoginButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#080a93";
    });
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "#03045e";
    });
  });

  const footer = document.querySelector("footer");
  footer.style.backgroundColor = "#000000";
  footer.style.color = "#ffffff";

  const connectLinks = document.querySelectorAll(".Connect a, .email");
  connectLinks.forEach((link) => {
    link.style.color = "#dad9d9";
  });

  const learnMoreLink = document.querySelector(".learnMore");
  learnMoreLink.style.color = "#1518a6";

  const themeButton = document.querySelector(".navBar .theme");
  themeButton.style.color = "#000000";
  themeButton.style.backgroundColor = "transparent";
  themeButton.style.border = "none";

  const contactUs = document.querySelector(".contactUs");
  contactUs.style.backgroundColor = "transparent";
  contactUs.style.color = "#03045e";
  contactUs.addEventListener("mouseover", () => {
    contactUs.style.backgroundColor = "#c9c9c9";
  });
  contactUs.addEventListener("mouseout", () => {
    contactUs.style.backgroundColor = "transparent";
  });
}
