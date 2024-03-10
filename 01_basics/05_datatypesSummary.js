// Primitive

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID)

const bigNumber = 2345929087492342348723
console.log(bigNumber)


// Reference (Non Primitive)

// Array, Object, Functions

let avengers = ["ironMan", "Thor", "spiderMan", "antMan", "Wakanda", "doctorStrange"]

let newObject = {
    name: "Suraj Kumar",
    age: 22,
}

const newFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);

// Stack (primitive), heap (non-primitive)

let myYoutubeChannel = "S30ULFR05T"

let anotherChannel = myYoutubeChannel

anotherChannel = "valoristGames"

console.log(myYoutubeChannel);
console.log(anotherChannel);

// Stack gives reference or copy of variable if it access via another name

let userOne = {
    email: "suraj@gmail.com",
    pass: "suraj"
}

let userTwo = userOne

userTwo.email = "kumar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// Heap doesn't give reference of variable if it access via another name i.e., object name or something like this

