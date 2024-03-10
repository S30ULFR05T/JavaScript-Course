// Objects

// Singleton - through constructor

// object literals

const mySymbol = Symbol("frost")

const jsUser = {
    name: "Suraj",
    "full name": "Suraj Kumar",
    [mySymbol]: "seoulfrost",
    age: 24,
    location: "Delhi",
    email: "Suraj@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday"]
}

// Object value access:
console.log(jsUser.email)  // dot syntax directly converts object name to string value
console.log(jsUser["email"])
// Square bracket funciton allows user to access data in any form key is mentioned in objects
console.log(jsUser["full name"])

console.log(jsUser[mySymbol])
console.log(typeof jsUser[mySymbol]);

jsUser.email = "kumarsuraj@fs.com" // updating values of objects
console.log(jsUser);
// Object.freeze(jsUser) // freeze() function is used to freeze the object values so that no can overwrite it.
// jsUser.email = "rohitkumar@yahoo.com"
// console.log(jsUser["email"]);

jsUser.greeting = function(){
    console.log("Hello Suraj");
}
jsUser.greeting2 = function(){
    console.log(`Hello Suraj Two, ${this.age}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());







