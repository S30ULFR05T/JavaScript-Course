// Objects 3
// Destructuring and JSON API

const course = {
    coursename: "python",
    price: "100",
    courseteacher: "shrioul"
}

const {courseteacher} = course //destructuring objects
console.log(courseteacher);

const {coursename: coursetitle} = course //renaming object keys
console.log(coursetitle)

