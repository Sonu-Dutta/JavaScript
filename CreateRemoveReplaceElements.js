
let element = document.createElement('li');
let text = document.createTextNode('list-6 (new)');
element.appendChild(text)

// Add a class name to the li element
element.className = 'child1';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = 'list-6 (created)';
// element.innerHTML = '<b>list-6 <b>'; //if you want to use <b> element, then use innerHTML

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// // console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'element2';
elem2.className = 'elem2';
let tnode = document.createTextNode('Hello dear!');
elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('firstli'));
myul.removeChild(document.getElementById('lastli'));


let pr = elem2.getAttribute('class');
// let pr = elem2.getAttribute('id');

// let pr = elem2.hasAttribute('href');//to check if attribute is present or not
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myElem2title');
console.log(elem2, pr);