// In javascript data is defined from midnight of 1 January, 1970 UTC

// DATES---

let myDate = new Date()
console.log(myDate.toString()); //This give output as Day Month Date Year Time TimeZone (IST)
console.log(myDate.toDateString()); //This give output as Day Month Date Year
console.log(myDate.toLocaleDateString()); // This give ouput as DD/MM/YYYY
console.log(myDate.toLocaleString()); // This give ouput as DD/MM/YYYY, Time AM/PM

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 24)
console.log(myCreatedDate.toDateString());

let myCreatedDateOne = new Date("2023-01-24")
console.log(myCreatedDateOne.toLocaleString());

let myCreatedDateTwo = new Date ("01-24-2000")
console.log(myCreatedDateTwo.toLocaleString());

let myTimeStamp = Date.now()
// Date.now() function gives current time in MILLISECOND
console.log(myTimeStamp);


console.log(myCreatedDateTwo.getTime());

console.log(Math.floor(Date.now()/1000));
// This gives output in SECONDS

let newDate = new Date()
console.log(newDate.getMonth());
// Month and Day starts from 0 so We always add +1 to get output from 1 
console.log(newDate.getMonth() + 1);

let nothingDate = new Date()

nothingDate.toLocaleString('default', {
    weekday: 'long'
})
// Above topic not understandable...