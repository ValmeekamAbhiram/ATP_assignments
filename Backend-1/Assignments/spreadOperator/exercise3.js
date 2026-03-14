//Create a function that receives any number of args as arguments and return their sum using REST parameter

function sum(...b){
    return b.reduce((acc,element)=>acc+element)
}

let sum1=sum(10,20,30,40)
console.log(sum1)