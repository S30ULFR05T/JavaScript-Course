const number = [1,2,3,4,5,6,7,8,9,10]

// const newNumber = number.filter( (num) => num > 4 )
// console.log(newNumber);

// const newNumber = number.filter ((num) => {
//     return num > 4
// })
// console.log(newNumber);



const newNums = []
number.filter((num) => {
    if (num > 4){
        newNums.push(num)
    }
})
console.log(newNums);

