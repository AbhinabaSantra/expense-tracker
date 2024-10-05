import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export function headerRender(format = "DD MMM YYYY") {
  const dateTime = document.querySelector(".dateTime");
  const date = new dayjs();
  dateTime.innerHTML = `~ ${date.format(format)}`;

  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("userName");
  const profileName = document.querySelector(".userName");
  profileName.innerHTML = userName;

  return userName;
}
