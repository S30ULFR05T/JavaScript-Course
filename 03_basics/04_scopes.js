// Scopes - 2

//nested scope
function one(){
    const username = "suraj"

    function two(){           // function two() can access all variables, defined in one()
        const website = "riot.com"
        console.log(username);
    }
    // console.log(website);        // website is defined inside the two() so this variable ended after closing scope

    two()               // since two() can access function one(), so it printed
}
one()

if(true){
    const username = "suraj"
    if (username === "suraj"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  // out of scope
}

// console.log(username);  // out of scope

// ++++++++++++++++++++++++  concept ++++++++++++


console.log(addone(5))
function addone(num){  // this is a basic function
    return num + 1
}
// this above written code don't give any error and prints output we doing console.log



addTwo(5)
const addTwo = function(num){   // this is also called expression and funciton as well  and addTwo is variable which holds function
    return num + 2
}
// here above written code gives error because addTwo holds a function (addTwo is not a complete function)
// gives error while doing console.log(addTwo(5))
// this is also called hoisting in javascript where we learn about how javascript fetch value, access data etc.