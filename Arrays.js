let marks = [78, 53, 44, 95 ,73, 65];
const fruits = ['Orange', 'Apple', 'Grapes'];
const mixed = ['str', 89, [32, 55]];

const arr = new Array(50,65,28, 'Orange');
// console.log(marks);
// console.log(mixed);
// console.log(fruits[1]);

// console.log(arr.length);
// console.log(Array.isArray('dfdf'));
arr[0] = 'Sonu';
let a = arr[0];
// console.log('element :', a);
// console.log(arr);

let value = marks.indexOf(75);
// console.log(value)

// Mutating or Modifying arrays
// marks.push(95);
// marks.unshift(56);
// marks.pop()
// marks.shift()
// marks.splice(2, 3);
// marks.reverse()
let marks2 = [1, 2, 3, 7]
marks = marks.concat(marks2);
// console.log(marks);

let myobj = {
    'First Name': 'Sonu', 
    Clg: 'KSE',
    isActive: true,
    marks: [15,52,63,76]
}

console.log(myobj)
console.log(myobj['Clg'])
console.log(myobj.Clg)