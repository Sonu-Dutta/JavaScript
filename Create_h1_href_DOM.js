// let head=document.createElement('h4');
// let txt=document.createTextNode('Go to Youtube');
// head.appendChild(txt);

// let link = document.querySelector('form.cont');
// link.appendChild(head);

// let head1=document.createElement('a')
// let txt1=document.createTextNode('www.youtube.com');
// head1.appendChild(txt1);

// let link1= document.querySelector('div.cont1');
// link1.appendChild(head1);

//-------------------------------------------------
// let cont=document.getElementById('container');
// let link=document.createElement('a');
// link.setAttribute('href',"youtube.com");

// let head=document.createElement('h4');
// head.innerText="Go to Youtube";

// link.appendChild(head);
// cont.appendChild(link);
// console.log(cont);

//-------------------------------------------------

let point=document.getElementById('cont1');
let inp2=document.createElement("input");
inp2.setAttribute('placeholder','Enter your name');

// let txt=document.createElement("i");
// txt.innerText="Name: ";

// inp2.appendChild(txt);
point.appendChild(inp2);
console.log(point);
// ----------------------------------------------------

let point2=document.getElementById('cont1');
let br=document.createElement('br');
point2.appendChild(br);
console.log(point2);

// ----------------------------------------------------
let point1=document.getElementById('cont1');
let inp3=document.createElement("input");
inp3.setAttribute('placeholder','Enter your phone no');

point1.appendChild(inp3);
console.log(point1)