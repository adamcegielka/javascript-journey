// Emptying an Array

let courses = [
  { title: "JavaScript Basics", duration: 30 },
  { title: "Advanced JavaScript", duration: 45 },
  { title: "Web Development", duration: 60 },
  { title: "Node.js Basics", duration: 40 },
  { title: "React Basics", duration: 50 },
];

// Method 1: Reassigning to an empty array
courses = [];
console.log(courses); // []

// Method 2: Setting length to 0
courses.length = 0;
console.log(courses); // []

// Method 3: Using splice
courses.splice(0, courses.length);
console.log(courses); // []

// Method 4: Using pop in a loop
while (courses.length > 0) {
  courses.pop();
}
console.log(courses); // []
