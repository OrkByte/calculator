const display = document.querySelector("#display");

// { key: [ domElement, callbackFn ] } The key is the button type and 
// the value is an array containing the DOM element and a callback function
const buttons = { 
  "1": [document.querySelector("#btnOne"), () => assignNum("1")],
  "2": [document.querySelector("#btnTwo"), () => assignNum("2")],
  "3": [document.querySelector("#btnThree"), () => assignNum("3")],
  "4": [document.querySelector("#btnFour"), () => assignNum("4")],
  "5": [document.querySelector("#btnFive"), () => assignNum("5")],
  "6": [document.querySelector("#btnSix"), () => assignNum("6")],
  "7": [document.querySelector("#btnSeven"), () => assignNum("7")],
  "8": [document.querySelector("#btnEight"), () => assignNum("8")],
  "9": [document.querySelector("#btnNine"), () => assignNum("9")],
  "0": [document.querySelector("#btnZero"), () => assignNum("0")],
  ".": [document.querySelector("#btnDot"), () => assignNum(".")],
  "+": [document.querySelector("#btnAdd"), () => assignOperator("+", add)],
  "-": [document.querySelector("#btnSubtract"), () => assignOperator("-", subtract)],
  "*": [document.querySelector("#btnMultiply"), () => assignOperator("*", multiply)],
  "/": [document.querySelector("#btnDivide"), () => assignOperator("/", divide)],
  "=": [document.querySelector("#btnEqual"), () => handleBtnEqualClick("=")],
  "c": [document.querySelector("#btnClear"), () => handleBtnClearClick("c")],
}

let valueOne = "";
let valueTwo = "";
let operator = "";
let currentOperatorFunc = null;

addEventListeners();

function addEventListeners() {
  for (let key of Object.keys(buttons)) {
    buttons[key][0].addEventListener("click", () => {
      const callBackFn = buttons[key][1];
      callBackFn(key);
    });
  }
}

function handleBtnEqualClick() {
  if (operator === "") return;
  const result = getOperationResult(currentOperatorFunc);
  displayResult(result);
  valueOne = result;
  reset();
}

function handleBtnClearClick() {
  valueOne = "";
  displayResult(valueOne);
  reset();
}
    
function displayResult(result) {
  display.value = result;
}

function reset() {
  currentOperatorFunc = null;
  valueTwo = "";
  operator = "";
}

function assignNum(num) {
  if (valueOne === "") {
    valueOne = num;
  } else if (valueTwo !== "" && operator !== "") {
    valueTwo += num;
  } else if (valueOne !== "" && operator !== "") {
    valueTwo = num;
  } else {
    valueOne += num;
  }

  displayResult(valueTwo ? valueTwo : valueOne);
  print();
}

function assignOperator(o, operatorFn) {
  if (valueOne === "") return;

  if (valueOne !== "" && valueTwo !== "") {
    valueOne = getOperationResult(
      currentOperatorFunc ? currentOperatorFunc : operatorFn
    );
    displayResult(valueOne);
    valueTwo = "";
  } 

  operator = o;
  currentOperatorFunc = operatorFn;
  print();
}

function getOperationResult(operatorFn) {
  return String(operatorFn(parseInt(valueOne), parseInt(valueTwo)));
}

function print() {
  console.log("----------");
  console.log({valueOne});
  console.log({operator});
  console.log({currentOperatorFunc});
  console.log({valueTwo});  
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


