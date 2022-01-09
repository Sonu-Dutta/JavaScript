// NaN, 0, undefined, null, "" are converting to false
// everything else, including objects, to true

res=Boolean(1); 
console.log(res, typeof res); 

res= Boolean(0); 
console.log(res, typeof res); 

res= Boolean("hello");
console.log(res, typeof res); 

res= Boolean(""); 
console.log(res, typeof res); 
