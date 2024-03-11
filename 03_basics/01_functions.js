// Functions

function nameing(){
    console.log("s");
    console.log("3");
    console.log("0");
    console.log("u");
    console.log("l");
    console.log("f");
    console.log("r");
    console.log("0");
    console.log("5");
    console.log("t");
}

nameing()

function addTwoNumber(number1, number2){
    // console.log(number1 + number2)  //method 1

    // let result = number1 + number2
    // return result  //method 2

    return number1 + number2  //method 3

}

// addTwoNumber(2, 3)  //method 1

// console.log("Result: ", result); //method 2

const result = addTwoNumber(4, 6)
console.log(result); //method 3

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter username");
    }
    return `${username} just logged in...`
}

// console.log(loginUserMessage("Suraj"))
console.log(loginUserMessage()); //it takes arguments as undefined

