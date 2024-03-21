// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     // console.log(element);

//     if(element == 5){
//         console.log("5 is best");

//     }
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     console.log("outer loop ", i);
//     for (let j = 0; j < 10; j++) {
//         console.log("inner loop", j);

//     }

// }

for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(i + "*" + j + " = " + i*j);
  }
}
