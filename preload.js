// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});

// Access the clicp boardholder
const { clipboard } = require("electron");

// Preload libs for later use
// or, override the platform
const say = require("say");

//const Say = require('say').Say
//const say = new Say('darwin' || 'win32' || 'linux')
//https://stackoverflow.com/questions/54544519/electron-require-is-not-defined

window.readConfig = function(test) {
  console.log("Text has been spoken2. " + test);
  var message = "you know what we need? some more waffles!";

  //console.log('Text has been spoken3. ' + say.getInstalledVoices(callback))
  //https://www.npmjs.com/package/say

  // Use default system voice and speed
  //say.speak("What's up, dog?", null, 1.0, (err) => {
  say.speak("What's up, dog?", null, test, (err) => {
    if (err) {
      return console.error("FUNDET: " + err);
    }
    console.log("Text has been spoken.");
  });

  const text = clipboard.readText();
  console.log("udholderen:" + text);

  //say.speak(message)
};
