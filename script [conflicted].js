const display = null;

const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");

// number buttons
const btnObj = {
  "1": btnOne,
  "2": btnTwo,
}

// const btnOne = document.querySelector("#btnOne");
// const btnTwo = document.querySelector("#btnTwo");
// const btnThree = document.querySelector("#btnThree");
// const btnFour = document.querySelector("#btnFour");
// const btnFive = document.querySelector("#btnFive");
// const btnSix = document.querySelector("#btnSix");
// const btnSeven = document.querySelector("#btnSeven");
// const btnEight = document.querySelector("#btnEight");
// const btnNine = document.querySelector("#btnNine");
// const btnZero = document.querySelector("#btnZero");
// const btnClear = document.querySelector("#btnClear");
// const btnDot = document.querySelector("#btnDot");

// // operator buttons
// const btnAdd = document.querySelector("#btnAdd");
// const btnSubtract = document.querySelector("#btnSubtract");
// const btnMultiply = document.querySelector("#btnMultiply");
// const btnDivide = document.querySelector("#btnDivide");
// const btnEqual = document.querySelector("#btnEqual");

// variables
const valueOne = null;
const valueTwo = null;

addEventListeners();

function addEventListeners() {
  for (let key of Object.keys(btnObj)) {
    btnObj[key].addEventListener("click", () => console.log("clicked"));
  }
}

// function addToInputStr(userInput) {
//   console.log(userInput);
// }

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}


