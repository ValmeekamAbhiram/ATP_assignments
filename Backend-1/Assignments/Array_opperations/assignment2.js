/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node" */

    const courses = ["javascript", "react", "node", "mongodb", "express"];

//1. filter() courses with name length > 5
   const courses2=courses.filter(course=>course.length>5)
   console.log(courses2)

//2. map() to convert course names to uppercase
   const courses3=courses.map(course=>course.toUpperCase())
   console.log(courses3)

//3.reduce() to generate a single string:
//"JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
  const courses4=courses3.reduce((accumulator,course)=>accumulator+' | '+course)
   console.log(courses4)

//find() the course "react"
  const findCourse=courses.find(course=>course==='react')
  console.log(findCourse)

//5. findIndex() of "node"
  const findIndexOfCourse=courses.findIndex(course=>course==='node')
  console.log(findIndexOfCourse)