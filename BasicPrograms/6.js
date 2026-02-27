//function that recieves an array of numbers and returns their sum
function sum(a){
    let sum=0
    for(let i=0;i<a.length;i++){
        sum=sum+a[i]
    }
    return sum
}
let result=sum([90,78,65,98])
console.log("the sum is",result)