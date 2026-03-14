import { validateDueDate,validatePriority,validateTitle } from "./validator.js";

    let tasks = [];

    function addTask(title,priority,dueDate){
        if(!validateTitle()&&!validatePriority()&&!validateDueDate())
        {
            return "Invalid task"
        }
        tasks.push(title,priority,dueDate)
        return "Task added succesfully"
    }

// 2. Get all tasks
function getAllTasks() {
// Return all tasks
return tasks
}

 // 3. Mark task as complete
function completeTask(title) {
    let task = tasks.find(t => t.title === title);
    if (task){
        tasks = tasks.map(t => t.title === title ? {...t, status:'completed'} : t);
        return "Task marked as complete"
    }
    return "Task not found"
}

export {addTask,getAllTasks,completeTask}
