export function enableLightModeLoginPage() {
  document.body.style.backgroundColor = "#ffffff";
  document.body.style.color = "#000000";

  const form = document.querySelector("form");
  form.style.backgroundColor = "#ffffff";
  form.style.boxShadow = "10px 10px 30px rgba(0, 0, 0, 0.4)";
  form.style.border = "1px solid #494949";

  const inputElem = document.querySelectorAll("input");
  inputElem.forEach((item) => {
    item.style.backgroundColor = "#ffffff";
    item.style.color = "#000000";
    item.style.borderBottom = "3px solid #888888";
  });

  const signUpSpanElem = document.querySelectorAll(
    ".signUpSection span,.loginSection span"
  );
  signUpSpanElem.forEach((span) => {
    span.style.color = "#353535";
  });

  const theme = document.querySelector(".theme");
  theme.style.color = "#000000";
}
