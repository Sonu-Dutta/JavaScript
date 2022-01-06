// Type conversion 
console.log('Good Afternoon');
let myVar;
myVar = String(45);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));

let i = 15;
// console.log(i.toString())

let stri = Number("98");
stri = Number("84sd4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseFloat('95.198');
console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("98");
let mynum = 95;

console.log(mystr + mynum);