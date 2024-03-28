const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const nums = myNumbers.map( (num) => num + 10)
// console.log(nums);

// const nums = myNumbers.map( (num) => {return num + 10})
// console.log(nums);

const newNumbers = myNumbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num)=> num >=49)

console.log(newNumbers);