// Functions 2

function calculateCartPrice(...num1){  //rest operator
    return num1
}

console.log(calculateCartPrice(22, 33, 44))

const user = {
    username: "suraj",
    price: 329990
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "shrioul",
    price: 99000
})

const myNewArray = [22, 33, 44, 55]

function returnsecondValue(getArray){
    return getArray[2]
}

// console.log(returnsecondValue(myNewArray));

console.log(returnsecondValue([200, 100, 300, 900]));