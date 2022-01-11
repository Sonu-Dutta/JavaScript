console.log("Hello everyone!");
function greet(name, lastMsg){
    console.log("Good Morning! " + name+", "+lastMsg);
}
// greet();

timeOut=setTimeout(greet, 3000, "Sonu", "Take care!"); //3 sec later
console.log(timeOut);
// setTimeout(greet(),4000);---->Wrong as it is calling the function inside setTimeout

// clearTimeout(1);
// clearTimeout(timeOut);

// intervalID=setInterval(greet,2000,"Vaishakhi","Meet soon...");
// clearInterval(intervalID);

function displayTime(){
    time=new Date();
    console.log(time);
    document.getElementById('time').innerHTML=time;
}
setInterval(displayTime,2000);

