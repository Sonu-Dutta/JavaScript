// Normal function
// function greet(){
//     console.log("Good Evening!");
// }
// greet();

// Arrow function
let greet=()=>{
    console.log("Good Morning!");
}
greet();

// let greet=()=>console.log("Good Night!");


let sum1=(a,b)=>{
    console.log(a+b);
}
sum1(26,35);

let sum2=(a,b)=>a+b;
console.log(sum2(6,5));

let half=a=>a/2;

setTimeout(()=>{
    console.log("Hello!")
},3000)

let obj1={
    greeting:"Good Morning, ",
    names:["Sonu", "Sandhya", "Vaishakhi", "Anjana"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greeting+"Hi "+ student);
        });
    }
}
obj1.speak();