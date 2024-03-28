// High Order Array Loops

// for of

// for (const iterator of object) {     // Syntax of forof()
    
// }

const arr = [1, 2, 4, 5, 7]

for (const num of arr) {
    console.log(num);
}

const str = "hello world"

for (const greet of str) {
    console.log(`Each character is ${greet}`);
}

// Maps

const map = new Map()           // map defining
map.set('IN', "India")
map.set('USA', "America")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}

const myGame = {
    'game1': "valorant",
    'game2': "mlbb"
}

// for (const [key, value] of myGame) {
//     console.log(key, value);
// }

