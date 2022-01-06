console.log('Hello everyone');
const name = 'Sonu Dutta';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is para</p>";

html = html.concat('this', ' str2');
// console.log(html);
console.log(html.length); //property
console.log(html.toLowerCase()); //method()
// console.log(html.toUpperCase());
// console.log(html);


// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(2));
// console.log(html.endsWith('str2'));
// console.log(html.includes(' is'));
// console.log(html.substring(1,6));
// console.log(html.slice(0, 4))
console.log(html.substring(-4)); //returns all string
console.log(html.slice(-4)); //returns last 4 char
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

let favcol1 = 'blue\'';
let favcol2 = 'green';
let myHtml =` Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${favcol1} and ${favcol2}`;

document.body.innerHTML = myHtml;