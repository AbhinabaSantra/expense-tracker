export function enableDarkMode() {
  document.body.style.backgroundColor = "#121212";
  document.body.style.color = "#e0e0e0";

  const header = document.querySelector("header");
  header.style.backgroundColor = "#1e1e1e";
  header.style.boxShadow = "8px 8px 8px rgba(0, 0, 0, 0.5)";

  const navBarItems = document.querySelectorAll(".navBar li");
  navBarItems.forEach((item) => {
    item.style.backgroundColor = "#333333";
    item.style.color = "#e0e0e0";
    item.style.border = "1px solid #444444";
  });

  const navBarLinks = document.querySelectorAll(".navBar a");
  navBarLinks.forEach((link) => {
    link.style.color = "#e0e0e0";
  });

  const logo = document.querySelector(".logo");
  logo.style.color = "#e0e0e0";

  const appNameLink = document.querySelector(".appName a");
  appNameLink.style.color = "#87ceeb";

  const mainImg = document.querySelector(".main-img");
  if (mainImg) {
    mainImg.style.filter = "drop-shadow(5px 5px 10px rgba(75,75,75,0.5))";
  }

  const aboutSection = document.querySelector(".about");
  aboutSection.style.backgroundColor = "#1e1e1e";
  aboutSection.style.border = "1px solid #444444";
  aboutSection.style.color = "#e0e0e0";

  const getStartedButton = document.querySelector(".getStarted");
  getStartedButton.style.backgroundColor = "#333333";
  getStartedButton.style.border = "1px solid #444444";
  getStartedButton.style.color = "#e0e0e0";

  const signUpAndLoginButtons = document.querySelectorAll(
    ".signUp, .login, .getStarted"
  );
  signUpAndLoginButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#444444";
    });
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "#333333";
    });
  });

  const footer = document.querySelector("footer");
  footer.style.backgroundColor = "#1e1e1e";
  footer.style.color = "#e0e0e0";

  const connectLinks = document.querySelectorAll(".Connect a, .email");
  connectLinks.forEach((link) => {
    link.style.color = "#87ceeb";
  });

  const learnMoreLink = document.querySelector(".learnMore");
  learnMoreLink.style.color = "#87ceeb";

  const themeButton = document.querySelector(".navBar .theme");
  themeButton.style.color = "#e0e0e0";
  themeButton.style.backgroundColor = "transparent";
  themeButton.style.border = "none";

  const contactUsButton = document.querySelector(".navBar .contactUs");
  if (contactUsButton) {
    contactUsButton.style.backgroundColor = "transparent";
    contactUsButton.style.color = "white";
    contactUsButton.addEventListener("mouseover", () => {
      contactUsButton.style.backgroundColor = "#333333";
    });
    contactUsButton.addEventListener("mouseout", () => {
      contactUsButton.style.backgroundColor = "transparent";
    });
  }
}
