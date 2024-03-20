// Immediately Invoked Function Expression (IIFE)

// function db(){
//     console.log("DB Connected");
// }
// db()            // in this methond we have to call db() function to execute this code


(function db(){
    console.log("DB Connected");
})();            // whereas in this method it calls function automitally whenever it executes

// (code)()

// Interview:- we use to remove the pollution of global variable which has been declared there, for that we use iife

( function dbtwo() {        // Named IIFE
    console.log("DB Connected Two");
} )();

( (name) => {               // Simple IIFE
    console.log(`DB Connected Three ${name}`);
} )("mongodb");