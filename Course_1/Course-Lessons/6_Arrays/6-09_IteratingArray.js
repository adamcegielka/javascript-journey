// Iterating an Array

let courses = [
  { title: "JavaScript Basics", duration: 30 },
  { title: "Advanced JavaScript", duration: 45 },
  { title: "Web Development", duration: 60 },
  { title: "Node.js Basics", duration: 40 },
  { title: "React Basics", duration: 50 },
];

for (let i = 0; i < courses.length; i++) {
  console.log(courses[i].title); // Logs each course title
}

// Numbers
const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
  console.log(number);
}

numbers.forEach((number) => {
  console.log(number);
});
