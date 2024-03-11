// Objects part 2

// const tinderUSer = new Object()  //singleton object
const tinderUSer = {}  //non-singleton object

tinderUSer.id = "123abs"
tinderUSer.name = "Sunny"
tinderUSer.isLoggedIn = false


console.log(tinderUSer);

const regularUser = {
    email: "kumarsunny@yout.com",
    fullname: {
        userfullname: {
            firstname: "sunny",
            lastname: "kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // this method is used to access nested funciton.

console.log(regularUser.fullname?.userfullname.firstname); // ? mark is used to provide more security and protection on nested function and majorly used in api or getting response from user

const obj1 = {
    1: "a", 
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2}
// console.log(obj3);
// It provides output as list of nested objects { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj3 = Object.assign(obj1, obj2) // this combines all parameter objects into one object
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2) // {} adding in parameter confirms that output is combines one obejct
console.log(obj4);   // {} this parameter acts as target and except this parameter all other variables act as source.

const obj5 = {...obj1, ...obj2} // Spread operator 
console.log(obj5)

const users = [
    {
        id: 1,
        email: "kumars@gmail.com"
    },
    {
        id: 1,
        email: "kumars@gmail.com"
    },
    {
        id: 1,
        email: "kumars@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUSer);

console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));

console.log(tinderUSer.hasOwnProperty('isLoggedIn')); //hasOwnProperty() is used to check the property in object is available or not
 // gives output in boolean form

