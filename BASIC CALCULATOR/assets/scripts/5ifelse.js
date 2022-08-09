const defaultResult = 0; //global scope variable
let currentResult = defaultResult;
const logEntries = []; // using array

// Exicuting functions "indirectly"
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWirteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
    if (calculationType === "ADD") {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }
        createAndWirteOutput(mathOperator, initialResult, enteredNumber);
        writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function addition(){
    calculateResult('ADD')
};
function subtract(){
    calculateResult('SUBTRACT')
};
function multiply(){
    calculateResult('MULTIPLY')
};
function divide(){
    calculateResult()
};

addBtn.addEventListener("click", addition);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
