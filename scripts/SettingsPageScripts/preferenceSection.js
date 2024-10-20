const monthlyRadio = document.querySelector(".monthlyPreferenceInput");
const annualRadio = document.querySelector(".annualPreferenceInput");
const saveButton = document.querySelector(".preferenceButton");
export function preferenceSectionRender(userName) {
  saveButton.addEventListener("click", () => {
    let checkedElem;
    [monthlyRadio, annualRadio].forEach((elem) => {
      if (elem.checked) {
        checkedElem = elem.value;
      }
    });
    preferenceUpdate(userName, checkedElem);
  });
}

function preferenceUpdate(userName, checkElem) {
  const preferences = JSON.parse(localStorage.getItem("preferences")) || {};
  let userPreference = preferences[userName];
  if (!userPreference) {
    preferences[userName] = { dataView: "monthly" };
    userPreference = preferences[userName];
  }
  userPreference.dataView = checkElem;
  localStorage.setItem("preferences", JSON.stringify(preferences));
}
