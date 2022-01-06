
// General Loops: for, while, do-while
// let a =35;
// a +=1;
// a++;
// console.log(a);
// for(let i=0; i<200;i++){
//     console.log(i);
// }

// let j = 100;
// while (j < 10) {
//   console.log(j + 1);
//   j += 1;
// }

// let k = 0;
// do {
//     if(k===4){
//         k +=1;
//         continue;
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 10);

let arr = [32,25,56,44,62,53];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

let obj = {
    Name: "Sonu Dutta",
    Age: 22,
    College: "KSE"
}
for(let key in obj){
    console.log(` ${key} is ${obj[key]}`)
}

console.log('Done');