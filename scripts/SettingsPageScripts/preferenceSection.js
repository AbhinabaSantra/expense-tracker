const monthlyRadio = document.querySelector(".monthlyPreferenceInput");
const annualRadio = document.querySelector(".annualPreferenceInput");
const saveButton = document.querySelector(".preferenceButton");
export function preferenceSectionRender(userName) {
  autoCheckedSavedPreference(userName);
  checkBeforeReload();
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

function autoCheckedSavedPreference(userName) {
  const preferences = JSON.parse(localStorage.getItem("preferences")) || {};
  const userPreference = preferences[userName];
  const preferenceView = userPreference.dataView || "monthly";
  [monthlyRadio, annualRadio].forEach((elem) => {
    if (preferenceView === elem.value) {
      elem.checked = true;
    }
  });
}

// function checkBeforeReload() {
//   let change = false;
//   document.querySelector("main").addEventListener("change", () => {
//     change = true;
//   });
//   window.addEventListener("beforeunload", (event) => {
//     event.preventDefault();
//     event.returnValue = "hello";
//     alert("hello");
//   });
// }
