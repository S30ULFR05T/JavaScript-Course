const coding = ['js', 'python', 'java', 'cpp']

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item2) => {
//     console.log(item2);
// } )

// function printMe (item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) =>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        language: "python",
        languageFileName: "py"
    },
    {
        language: "javascript",
        languageFileName: "js"
    },
    {
        language: "c-sharp",
        languageFileName: "c#`"
    }
]

myCoding.forEach( (item)=> {

    console.log(item.languageFileName);
})

//High Order Array Loop ---- Again