// console.log("hello world")
// console.log("check list for JS and new project learning")
// console.log("Plaese complete the course with in time")
// let x=2;
// let y=3;
// let z=6;
// console.log("This is the total:",x*y*z*x*y)
// const tepm=50;
// console.log(tepm)
// let employDetails = {
//     peru:"vamsi",
//     age:25,
//     role:"tester",
//     from:"West Godavari",
//     QA:"yes"
// }

// array sorting and filtering

const points = [40, 100, 1, 5, 25, 7, 3, 2, 1, 100, 10, 10];
// points.sort(function(a,b){return(a-b)})
// console.log(points)
// points.sort(function(a,b){return(b-a)})
// console.log(points)
// points.reverse()
// console.log(points)
let uniqueArr = [...new Set(points)]
console.log("This is an array with suplicate elements:",points)
console.log("This is an array with unique elements:",uniqueArr)
 uniqueArr.sort(function(a,b){return(a-b)})
 console.log("This is an array with unique sorted elements:",uniqueArr)
 uniqueArr.reverse()
 console.log("This is an array with unique sorted elements in decending order:",uniqueArr)
 uniqueArr.shift(100)
 console.log("This is an array with unique sorted elements in decending order after filtering:",uniqueArr)
