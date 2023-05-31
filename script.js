//your JS code here. If required.
function updateOutputText() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

const outputElement = document.getElementById("output");

updateOutputText()
  .then((text) => {
    outputElement.textContent = text;
  })
  .catch((error) => {
    console.error(error);
  });