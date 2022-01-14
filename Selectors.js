console.log('Selector in js');
/*
element selectors:
1. Single element selector
2. Multi element selector

*/

// 1. Single element selector
let element = document.getElementById('myFirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = 'red';
// element.innerText = 'Good morning!';
// element.innerHTML = '<b>Gpod Afternoon!</b>';
// console.log(element);
// // console.log(element.innerText);


let sel = document.querySelector('#myFirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel = document.querySelector('h1');
sel.style.color = 'blue';
// console.log(sel)

// // 2. Multi element selector
// let elems = document.getElementsByClassName('child');
// elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems)
// console.log(elems[2])

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//    element.style.color = 'purple'; 
// }

// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'green'; 
// });

// console.log(elems[0].getElementsByClassName('child'))
