//arrow function
//1. Define function
//function calcArea(pi,radius){
//    return pi*(radius**2) //pi*r^2
//}

//const area = calcArea(3.14,5)
//console.log(area)

//2.2 Anonymous function
//const sum = function calcArea(pi,radius){
//    return pi*(radius**2)
//}
//const area = sum(3.14,5)
//console.log(area)

//2.3 Arrow function
//const sum = (pi,radius)=>{
//    return pi*(radius**2) //pi*r^2
//}
//const area = sum(3.14,5)
//console.log(area)

//2.4short arrow function
const sum = (pi,radius)=> pi*(radius**2) //pi*r^2
const area = sum(3.14,5)//called function
console.log(area)