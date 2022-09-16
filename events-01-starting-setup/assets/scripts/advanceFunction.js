// factory Function
// normal function
// function calculateTax(amount,Tax){
//     return amount * Tax
// }

// const vatAmount = calculateTax(100,0.19);
// const incomeTax = calculateTax(100,0.25);

// console.log(vatAmount,incomeTax);

// factory function
function crearteTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = crearteTaxCalculator(0.19);
const calculateIncomeTax = crearteTaxCalculator(0.25);

// console.log(vatAmount,incomeTax);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(500));

// closures scope

let userName = "Admin";

function greetUser() {
  console.log("Hello " + userName);
}

userName = "Max";
greetUser();

// recursion
//using simple function
// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  //   if (n === 1) {
  //     return x;
  //   }
  //   return x * powerOf(x, n - 1);

  return n === 1 ? x : x * powerOf(x, n - 1);
}

const powr = powerOf(2, 3);
console.log(powr);


// gen rendom no between min and max
function randomIntBetween(min,max){ 
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomIntBetween(2,10));