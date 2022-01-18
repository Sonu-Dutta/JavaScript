console.log("Object Prototype");

// Object literal : Object.prototype
let obj1 = {
    name: "Sonu ",
    age: 22,
    address: "Pune"
}
console.log(obj1);

function Object1(givenName){
    this.name=givenName;
}

Object1.prototype.setName=function(newName){
    this.name=newName;
}

Object1.prototype.getName=function(){
    return this.name;
}

let obj2 = new Object1('Vaishakhi');
console.log(obj2);
console.log(obj2.setName("Raj"));
console.log(obj2.getName());
