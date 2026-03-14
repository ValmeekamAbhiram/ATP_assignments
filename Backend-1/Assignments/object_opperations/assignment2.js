/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
   */

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1. filter() students who passed (marks ≥ 40)
 const passmarks=students.filter(student=>student.marks>=40)
 console.log(passmarks)

/*
 2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D
*/
 const grade=students.map(student=>({...student, grade: student.marks>=90?'A':student.marks>=75?'B':student.marks>=60?'C':'D'}))
 console.log(grade)

 //3. reduce() to calculate average marks
  const averageMarks=students.reduce((acc,student)=>acc+student.marks,0)/students.length
  console.log(averageMarks)

//4. find() the student who scored 92
  const student92=students.find(student=>student.marks===92)
  console.log(student92)

//5. findIndex() of student "Kiran"
  const kiranIndex=students.findIndex(student=>student.name==="Kiran")
  console.log(kiranIndex)