const userEmail = "suraj@gmail.com"  // here value is treated as true
const userArray = []

if (userEmail) {
    console.log("got user email");
}
else {
    console.log("don't have user email");
}

// falsy values --

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN



// truthy values --

// "0", 'false', " ", [], {}, function(){}


if (userArray.length === 0) {
    console.log("array is empty");
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}


// Browser Console Interview --

// false == 0  --> true
// false == '' --> true
// 0 == '' --> true

