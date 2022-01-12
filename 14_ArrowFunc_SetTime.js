
// Arrow Functions
// function summ(a, b){
//     return a+b;
// }
// summ = (a,b)=>{
//     return a+b;
// }

logging = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
    console.log("logged")
}
// SetTimeout and setinterval
clr = setTimeout(logging, 5000);
// clr = setInterval(logging, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout
