// DOM- Document Object Model
// document.getElementById('click').click();
document.getElementById('click').style.borderRadius="0.5rem";
document.getElementById('click').style.backgroundColor="green";
document.getElementById('click').style.color="white";
document.getElementById('click').style.padding="1rem";


let a = document.getElementById('click');
// console.log(a);

let b = document.getElementsByClassName("container");
// console.log(b);
// b[0].style.background = "lightblue";

// Get element by class-name
b[0].classList.add("bg-primary");
b[0].classList.add("text-success");
 // b[0].classList.remove("text-success");

// console.log(a.innerHTML);//to print content of that element including html tags
// console.log(a.innerText); //to print content of that element only

// console.log(b[0].innerHTML);
// console.log(b[0].innerText); 

// // Get element by tag-name
tn = document.getElementsByTagName('p')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = "Hello, this is a created paragraph";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('i');
createdElement2.innerText = "This is a created italic";
tn[0].replaceChild(createdElement2, createdElement);
// // removeChild(element); ---> removes an element


