// Filtering an Arrays

const numbers = [5, 3, 8, 1, 2];

const filteredNumbers = numbers.filter((num) => num > 3);
console.log(filteredNumbers); // [5, 8]

const filteredNumbers2 = numbers.filter(function (value) {
  return value < 5;
});
console.log(filteredNumbers2); // [3, 1, 2]

const strings = ["banana", "apple", "cherry"];
const filteredStrings = strings.filter((str) => str.startsWith("a"));
console.log(filteredStrings); // ["apple"]

const courses = [
  { title: "JavaScript Basics", duration: 3 },
  { title: "Advanced JavaScript", duration: 5 },
  { title: "HTML & CSS", duration: 2 },
];
const filteredCourses = courses.filter((course) => course.duration > 3);
console.log(filteredCourses); // [{ title: "Advanced JavaScript", duration: 5 }]
