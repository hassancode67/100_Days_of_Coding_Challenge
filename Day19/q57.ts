// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

let grades = [87, 67, 89, 56, 78]

let average = grades.reduce((elem, elem2) =>  elem + elem2) / grades.length

console.log(average)