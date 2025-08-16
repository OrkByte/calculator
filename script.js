const display = document.querySelector("#display");

const buttons = {
  "1": document.querySelector("#btnOne"),
  "2": document.querySelector("#btnTwo"),
  "3": document.querySelector("#btnThree"),
  "4": document.querySelector("#btnFour"),
  "5": document.querySelector("#btnFive"),
  "6": document.querySelector("#btnSix"),
  "7": document.querySelector("#btnSeven"),
  "8": document.querySelector("#btnEight"),
  "9": document.querySelector("#btnNine"),
  "0": document.querySelector("#btnZero"),
  ".": document.querySelector("#btnDot"),
  "+": document.querySelector("#btnAdd"),
  "-": document.querySelector("#btnSubtract"),
  "*": document.querySelector("#btnMultiply"),
  "/": document.querySelector("#btnDivide"),
  "=": document.querySelector("#btnEqual"),
  "c": document.querySelector("#btnClear"),
}

let valueOne = "";
let operator = "";
let currentOperatorFunc = null;
let valueTwo = "";

addEventListeners();

function addEventListeners() {
  for (let key of Object.keys(buttons)) {
    buttons[key].addEventListener("click", () => handleBtnClick(key));
  }
}

function handleBtnClick(userInput) {
  switch(userInput) {
    case "1":
      assignNum("1");
      break;
    case "2":  
      assignNum("2");
      break;
    case "3":
      assignNum("3");
      break;
    case "4":
      assignNum("4");
      break;
    case "5":
      assignNum("5");
      break;
    case "6":
      assignNum("6");
      break;
    case "7":
      assignNum("7");
      break;
    case "8":
      assignNum("8");
      break;
    case "9":
      assignNum("9");
      break;
    case "0":
      assignNum("0");
      break;
    // case ".":
    //   assignNum(".");
    //   break;
    case "+":
      assignOperator("+", add);
      break;
    case "-":
      assignOperator("-", subtract);
      break;
    case "*":
      assignOperator("*", multiply);
      break;
    case "/":
      assignOperator("/", divide);
      break;
    case "=":
      if (operator === "") return;
      const result = getOperationResult(currentOperatorFunc);
      displayResult(result);
      valueOne = result;
      reset();
      break;
    case "c":
      valueOne = "";
      displayResult(valueOne);
      reset();
      break;
  }
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


