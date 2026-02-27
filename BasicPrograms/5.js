//function that recieves 3 numbers args and returns the big number
function big(a,b,c){
    if(a>b && a>c){
        return a
    }
    else if(b>a && b>c){
        return b
    }
    else {
        return c
    }
 }
let result = big(10,25,15)
console.log("the big number is",result)