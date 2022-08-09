const defaultResult = 0;

let currentResult = defaultResult; // we can initialize const with other variable

currentResult = (currentResult + 10) * 3/2-1;
// defaultResult = (currentResult + 10) * 3/2-1;  // --> can not initialize value with const 
let calculationDescription = '(' +defaultResult + ' + 10) * 3/2-1';

outputResult(currentResult,calculationDescription)

