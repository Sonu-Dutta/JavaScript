console.log("Date and Time");
let dt=new Date();
// let dt=new Date(0); //reference date
// let dt=new Date(1000); //1 sec after reference date
// console.log(dt);

// let newDt=new Date("2025-09-26");
// console.log(newDt);

// let newdt= new Date(year, month, date, hours, minutes, seconds);
// let newdt= new Date(2030, 0, 8, 4, 22, 32);
// console.log(newdt);

// let myDate = new Date();
// console.log("Time : ",myDate.getTime()); 
// console.log("Year : ",myDate.getFullYear());
// console.log("Day : ",myDate.getDay());
// console.log("Minutes : ",myDate.getMinutes());
// console.log("Hours : ",myDate.getHours());
// console.log("Date : ",myDate.getDate());

// console.log(myDate.setDate(19));

setInterval(updateTime,1000);
function updateTime(){
    time.innerHTML = new Date();
}
