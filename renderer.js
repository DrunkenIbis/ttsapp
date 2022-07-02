// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// Used for creating a new window

// settings up buttons for
const playBtn = document.getElementById("playbtnEd");
const stopBtn = document.getElementById("stopbtnEd");
const settingsBtn = document.getElementById("settingsbtnEd");
const Readspeedbtn = document.getElementById("ReadspeedbtnEd");

var sliderbar = 0.0;
// outputting the reading speed
document.getElementById("ReadspeedbtnEd").oninput = function() {
  document.getElementById("spanscale").innerHTML = this.value;
  sliderbar = this.value;
};

playBtn.addEventListener("click", function() {
  console.log("Play");

  // test flite2
  const config = window.readConfig(sliderbar);
});

stopBtn.addEventListener("click", function() {
  console.log("Stop");
});

settingsBtn.addEventListener("click", function() {
  console.log("Settings");
});

// Creating the settings window
settingsBtn.addEventListener("click", function(event) {
  createSettingsWindow();
});
