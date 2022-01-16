let btn=document.getElementById('btn');
// btn.addEventListener('click',func); 
btn.addEventListener('dblclick',func); 
function func(e){
    console.log("Thanks for submitting!",e);
    e.preventDefault();//it will not submit
}

document.querySelector('.child2').addEventListener('mousedown',function(){
    console.log("mousedown on div");
})


// document.querySelector('.child2').addEventListener('mouseenter',function(){
//     console.log("mouseentered on div");
// })


// document.querySelector('.child2').addEventListener('mouseleave',function(){
//     console.log("you have not entered div");
// })

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.color='blue';
    document.body.style.backgroundColor=`rgb(${e.offsetX}, ${e.offsetY},150)`
    console.log("you are in div");
})

