const age = 11;
const doesDrive = false;
const a = 30;

// if (age!=18){
//     console.log('Age is not 18')
// }

// if(age !== 50){
//     console.log('Age is not 50')
// }

// else{
//     console.log('Age is unknown')
// }

if (typeof a !== 'undefined'){
    console.log('Variable is defined');
}
else{
    console.log('Variable is not defined');
}

if (doesDrive || age>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

console.log(age==50? 'Age is 50': 'Age is not 50');

// switch (age) {
//     case 18:
//         console.log("You are 18");
//         break;

//     case 25:
//         console.log("You are 25");
//         break;

//     case 40:
//         console.log("You are 40");
//         break;

//     default:
//         console.log("Age is unknown");
//         break;
// }