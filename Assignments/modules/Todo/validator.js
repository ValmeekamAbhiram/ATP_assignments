// 1. Validate task title (not empty, min 3 chars)

function validateTitle(title){
    if(!title)
        return "Title cannot be empty"
    if(title.length<3)
        return "Title must be at least 3 characters long"
}
//2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
 try{
    if(priority!='low'||priority!='medium'||priority!='high')
        console.log("Invalid priority")
    }
catch(err)
{
    console.log(err.message)
}      
}
// 3. Validate due date (must be future date)
function validateDueDate(date) {
let dueDate=new Date("2024-12-12")//yyyy-mm-dd
let today=new Date()
if(dueDate>today)
    return "Ivalid dueDate"
return true;
}
export {validateDueDate,validatePriority,validateTitle}
