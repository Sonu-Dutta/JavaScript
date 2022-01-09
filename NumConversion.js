let num;
// string to number
num = Number('100');
console.log(num, typeof num); // 100

// boolean to number
num = Number(false);
console.log(num, typeof num); // 0

//null to number
num = Number(' ')
console.log(num, typeof num); // 0

//undefined to number
num = Number(undefined);
console.log(num, typeof num); // NaN
