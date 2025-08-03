// Sorting Arrays

const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers); // [1, 2, 3, 5, 8]

const sortedNumbersReverse = numbers.reverse();
console.log(sortedNumbersReverse); // [2, 1, 8, 3, 5]

const strings = ["banana", "apple", "cherry"];
const sortedStrings = strings.sort();
console.log(sortedStrings); // ["apple", "banana", "cherry"]

//
const courses = [
  { title: "JavaScript Basics", duration: 3 },
  { title: "Advanced JavaScript", duration: 5 },
  { title: "HTML & CSS", duration: 2 },
];

courses.sort((a, b) => a.duration - b.duration);
console.log(courses);
