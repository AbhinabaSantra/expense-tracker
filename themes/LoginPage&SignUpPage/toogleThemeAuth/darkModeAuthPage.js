export function enableDarkModeLoginPage() {
  document.body.style.backgroundColor = "#1e1e1e";
  document.body.style.color = "#ffffff";

  const form = document.querySelector("form");
  form.style.backgroundColor = "#252525";
  form.style.boxShadow = "10px 10px 30px rgba(0, 0, 0, 0.6)";
  form.style.border = "1px solid #444444";

  const inputElem = document.querySelectorAll("input");
  inputElem.forEach((item) => {
    item.style.backgroundColor = "#252525";
    item.style.color = "#ffffff";
    item.style.borderBottom = "3px solid #444444";
  });

  const signUpSpanElem = document.querySelectorAll(
    ".signUpSection span,.loginSection span"
  );
  signUpSpanElem.forEach((span) => {
    span.style.color = "#aaaaaa";
  });

  const theme = document.querySelector(".theme");
  theme.style.color = "#ffffff";
}
