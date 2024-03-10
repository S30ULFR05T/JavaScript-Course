const dc = ["Flash", "reverseFlash", "savitar"]
const marvel = ["ironMan", "thor", "spiderman"]

// dc.push(marvel)

// console.log(dc);

const allHeroes = dc.concat(marvel)
console.log(allHeroes);

const new_all_heroes = [...marvel, ...dc] // This is spread functions and most used function in js
console.log(new_all_heroes);

const anotherArray = [1,23,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Suraj"))
console.log(Array.from("Suraj"))
console.log(Array.from({name: "Suraj"})); //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

