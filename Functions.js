
var i=30;
if (1) {
    let i = 24;
    console.log(i)
}

// console.log(i); -->throws error

function myFun(name) {
    let i = 95;
    console.log(i);
    return `This is ${name}`;
}
console.log(myFun("Anjana"), i)

const mygreet = function (wish = 'Good Morning!', name) {
    let msg = `${wish} Congratulations, ${name} for securing 99% in CET. Hope you have a great future ahead!`;
    return msg;

}


let name = 'Sonu Dutta';
let name2 = 'Vaishakhi Dutta';

let val = mygreet( 'Good Afternoon!' , name);
console.log(val);


const myobj = {
    name: "Sonu Dutta",
    college: function () {
        return "KSE";
    }
}
console.log(myobj.college())

arr = ['snacks', 'vegetable', 'fruits'];

arr.forEach(function (element, index, array) {
    console.log(element, index)
});