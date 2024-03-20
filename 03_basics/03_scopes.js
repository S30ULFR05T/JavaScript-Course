// Scopes ---
// Local Scope and Gloal Scope

// let a = 10
// const b =20
// var c = 30

// {}   this is called scope

var c = 300  // Global Scope
let a = 300


if(true){           // Block scope
    let a = 10
    const b =20
    var c = 30
    console.log("Inner ", a);
}

console.log(a);
// console.log(b);
console.log(c);  // It prints out value of c, which should not be

// Interview:- Browser Console and Node console act different in global scope concept

