// Removing Elements

const courses = [
  { title: "JavaScript Basics", duration: 30 },
  { title: "Advanced JavaScript", duration: 45 },
  { title: "Web Development", duration: 60 },
  { title: "Node.js Basics", duration: 40 },
  { title: "React Basics", duration: 50 },
];

// first element
const first = courses.shift();
console.log(courses);
console.log(first); // { title: "JavaScript Basics", duration: 30 }

// last element
const last = courses.pop();
console.log(courses);
console.log(last); // { title: "React Basics", duration: 50 }

// end of the array
const end = courses.push({ title: "React Basics", duration: 50 });
console.log(courses);
console.log(end); // 4 (new length of the array)

// beginning of the array
const beginning = courses.unshift({ title: "Node.js Basics", duration: 40 });
console.log(courses);
console.log(beginning); // 5 (new length of the array)

// middle of the array
const middle = courses.splice(1, 1);
console.log(courses);
console.log(middle); // [{ title: "Advanced JavaScript", duration: 45 }]
