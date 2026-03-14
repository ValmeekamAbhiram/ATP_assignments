/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//1. filter() employees from IT department
    const itEmployees=employees.filter(employee=>employee.department==="IT")
    console.log(itEmployees)

/*
2. map() to add:
        netSalary = salary + 10% bonus
*/
    const netSalary=employees.map(employee=>({...employee, netSalary: employee.salary*1.1}))
    console.log(netSalary)

 //3. reduce() to calculate total salary payout
 const totalPayout=employees.reduce((acc,employee)=>acc+employee.salary,0)
 console.log(totalPayout) 
 
 //4. find() employee with salary 30000
    const findEmployee=employees.find(employee=>employee.salary===30000)
    console.log(findEmployee)

  //5. findIndex() of employee "Neha"  
    const nehaIndex=employees.findIndex(employee=>employee.name==="Neha")
    console.log(nehaIndex)