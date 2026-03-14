/*
Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/
const marks = [78, 92, 35, 88, 40, 67];

//1. filter() marks ≥ 40 (pass marks)
 const passmarks=marks.filter(mark=>mark>=40)
 console.log(passmarks)

// 2. map() to add 5 grace marks to each student
 const addMarks=marks.map(mark=>mark+5)
 console.log(addMarks)

//3.reduce() to find highest mark
 const maxMarks=marks.reduce((accumulator,mark)=>accumulator>mark?accumulator:mark)
 console.log(maxMarks)

//4. find() first mark below 40
 const findMark=marks.find(mark=>mark<40)
 console.log(findMark)

//5.findIndex() of mark 92
 const findIndexOfMark=marks.findIndex(mark=>mark===92)
 console.log(findIndexOfMark)