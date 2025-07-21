// Arrays - Functions

const courses = [
  { title: "JavaScript Basics", duration: 30 },
  { title: "Advanced JavaScript", duration: 45 },
  { title: "Web Development", duration: 60 },
];

const course = courses.find((course) => course.title === "JavaScript Basics");

console.log(course); // { title: "JavaScript Basics", duration: 30 }
