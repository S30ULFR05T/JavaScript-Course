const name = "suraj"
const repo = 5

// console.log(name + repo + " Value");

console.log(`Hello my name is ${name} and my repo is ${repo}`);
// also called String Interpolation

const gameName = new String('Valorant')
console.log(gameName);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('V'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-1, 0)
console.log(anotherString);
// slice negative is not understandable.

const newStringOne = '     Suraj     '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://gmailgoogle.com/suraj%20kdiek"

console.log(url.replace("%20", '='))

console.log(url.includes('gmail'))

const newVariable = new String("Valo-Rant")
console.log(newVariable.split('-'));

