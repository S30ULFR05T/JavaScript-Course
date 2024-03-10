// Arrays ----

const myArray = [0,1,2,3,4,5,6,7,8]

// array is object in javascript
// array element cannot be accessed by aribitary strings

console.log(myArray[2]);

const myArr2 = new Array(1,23,4,34)

// Array methods

myArray.push(9)
console.log(myArray);

myArray.pop(9)
console.log(myArray);

myArray.unshift(0)
console.log(myArray);

myArray.shift()
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(6));

const newArray = myArray.join()
// join() function convertes the array into string and bind them together.

console.log(myArray)
console.log(typeof newArray)

// Slice, splice -----

console.log("A", myArray);
const newarray1 = myArray.slice(1,3)
console.log(newarray1);

console.log("B", myArray);
const newArray2 = myArray.splice(1,3)
console.log(newArray2);
// Splice() function manupilates the original array where slice() function doesn't do any manupilation with origianl array.

