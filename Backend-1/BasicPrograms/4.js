//the smallest element in marks array
let marks=[90,78,65,98]
let a=marks[0]
for(let i=0;i<marks.length;i++){
    if(a>marks[i]){
        a=marks[i]
    } 
  }
console.log("the smallest element is",a)