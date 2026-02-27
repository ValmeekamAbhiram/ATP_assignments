//function that recieves an array and search element as args and returns the index of that search element in the array. it should return not found when seached element is not found.
function search(a,key){
    for(let i=0;i<a.length;i++){
        if(a[i]==key){
            return i
        }
    }
    return 'not found';
}
let result=search([90,78,65,98],65)
console.log("the index of searched element is",result)