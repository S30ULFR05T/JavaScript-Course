// Control Flow


// if

// if (condition) {
//     code;
// }

const isUserLoggedIn = true
const temperature = 29

if (isUserLoggedIn) {
    console.log("User Logged In Successfully");
}

if (temperature > 50) {
    console.log("Temperature is greater than 50");
}
else {
    console.log("Temperature is less than 50");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = 'fly';
    // const power = 'fly';
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);

const balance = 1000

// if (balance > 500) console.log("test");

// if (balance > 500) console.log("test"), 
// console.log("test2");

if (balance < 500) {
    console.log("less than");
}
else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 900) {
    console.log("less than 900");
}
else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy");
}


if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1);


// Terniary Operator ----------
// condition ? ture : false

const number = 16

number >= 20 ? console.log("number is greater than 20") : console.log("number is less than 20");

