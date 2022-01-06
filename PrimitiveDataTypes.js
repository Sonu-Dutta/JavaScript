// Primitive data types

// String
let name = "Hello Sonu";
console.log("My string is: " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 99.48;
console.log("Data type is " + (typeof marks));

// Boolean
let b = true;
console.log("Data type is " + (typeof b));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data Types

// Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// Object Literals
let stMarks = {
    Sonu: 99,
    Vaishakhi: 98,
    Rohan: 34
}
console.log( typeof stMarks);

function findName() {
    
}
console.log( typeof findName);

let date = new Date();
console.log( typeof date);