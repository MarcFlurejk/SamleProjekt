//DOM elements

const lengthRange = document.getElementById("lengthRange");
const lengthDisplayEl = document.getElementById("lengthDisplay");
const resultEl = document.getElementById("result");
const upperCaseEl = document.getElementById("Uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");

//eventlistener for slide ranger to display the length
lengthRange.addEventListener("input", (e) => {
  lengthDisplayEl.textContent = e.target.value;
});
generateEl.addEventListener("click", () => {
  const length = lengthRange.value;
  const medLower = lowerCaseEl.checked;
  const medUpper = upperCaseEl.checked;
  const medNumber = numbersEl.checked;
  const medSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    medLower,
    medUpper,
    medNumber,
    medSymbol,
    length
  );
});

// returns random string and number
function randomLowerCase() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
function randomUpperCase() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
function randomNumber() {
  const num = "1234567890";
  return num[Math.floor(Math.random() * num.length)];
}
function randomSymbol() {
  const symbols = '!"#%&/()=?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const tegnArray = [];

  if (lower) {
    tegnArray.push("lower");
  }
  if (upper) {
    tegnArray.push("upper");
  }
  if (number) {
    tegnArray.push("number");
  }
  if (symbol) {
    tegnArray.push("symbol");
  }

  for (let i = 0; i < length; i++) {
    const typeTegn = tegnArray[Math.floor(Math.random() * tegnArray.length)];
    switch (typeTegn) {
      case "lower":
        generatedPassword += randomLowerCase();
        break;
      case "upper":
        generatedPassword += randomUpperCase();
        break;
      case "number":
        generatedPassword += randomNumber();
        break;
      case "symbol":
        generatedPassword += randomSymbol();
        break;
    }
  }
  if (tegnArray.length === 0) {
    return "";
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
