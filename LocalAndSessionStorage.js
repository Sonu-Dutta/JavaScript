console.log("Hello Sonu!");
// localStorage
let arr=['Mango','Apple','Grapes'];

// Add a key-value pair inside local storage
localStorage.setItem('Name','Sonu');
localStorage.setItem('SName','Dutta');
// localStorage.setItem('Fruits',arr);
localStorage.setItem('Fruits',JSON.stringify(arr));

// Clears the entire localStorage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name');

// Retrieve items from the local storage
// console.log(window.localStorage);
// console.log(typeof(window.localStorage));
// console.log(typeof(window.localStorage.Name));

let fruits=localStorage.getItem('Fruits');
fruits=JSON.parse(localStorage.getItem('Fruits'));//converted to array
console.log(fruits);

// sessionStorage
sessionStorage.setItem('Name','Vaishakhi');
sessionStorage.setItem('SurName','Dutt');
sessionStorage.setItem('Fruit',JSON.stringify(arr));
// sessionStorage.clear();

// In sessionStorage item is stored temporarily, after restarting browser content disappears.
// In localStorage item is stored permanently, after restarting browser content is still present.