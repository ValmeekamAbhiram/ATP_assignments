import { addTask,getAllTasks,completeTask} from "./task.js";

addTask("Buy groceries","high","2024-12-12")
console.log(getAllTasks())
completeTask("Buy groceries")