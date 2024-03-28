const myObject = {
    js: "Javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const [key, value] in myObject) {
    console.log(`${key} shortcut is ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    console.log(key, programming[key]);
}

const map = new map()

map.set('USA', "america")
map.set("in", 'india')
map.set("kr", "korea")
map.set("sl", 'srilanka')
map.set("nz", 'newzealand')

for (const key in map) {
    console.log(key);
}

// iteration on map can not be done

