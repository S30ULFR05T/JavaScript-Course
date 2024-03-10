const score = 44
console.log(score);

const balance = new Number(100)
console.log(balance);

const newVariableOne = balance.toString()
console.log(balance.toFixed(2));
console.log(typeof newVariableOne);

const otherNumber = 23.99
console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));


// Maths-----------------


// console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(9.9));

console.log(Math.random());
//random() is the most used function in javascript in Math library

console.log((Math.random()*10) + 1);
// This above (random*10)+1 always give values greater than 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// This above formula always give output value greather than 10
// Above formula to be remember and notice

