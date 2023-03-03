//  Title: Calculator

//   Version:1.0 v

//   Developer: Ashkan Salehpour

// Description : Engineering calculator function with JS

// Selectors
let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");

for (item of btn) {
  item.addEventListener("click", (e) => {
    BtnVal = e.target.innerText;

    if (BtnVal == "×") {
      BtnVal = "*";
    }

    if (BtnVal == "÷") {
      BtnVal = "/";
    }
    screen.value += BtnVal;
  });
}

// Math calculation

function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function pow3() {
  screen.value = Math.pow(screen.value, 3);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function log() {
  screen.value = Math.log(screen.value);
}

function pi() {
  screen.value = 3.14159265359;
}

function sqrt3() {
  screen.value = Math.pow(screen.value, 1 / 3);
}

function backspace() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}

// Start making darkMode toggle button
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("darkmode");
  // 2. Update darkMode in localStorage
  localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
  // get their darkMode setting
  darkMode = localStorage.getItem("darkMode");

  // if it not current enabled, enable it
  if (darkMode !== "enabled") {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});
