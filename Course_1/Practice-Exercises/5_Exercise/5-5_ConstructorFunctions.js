// Exercise - Constructor Functions

let blogPost2 = new Post(
  "JavaScript Functions",
  "Functions are the building blocks of JavaScript, allowing you to encapsulate code for reuse.",
  "Alice Johnson",
);

console.log(blogPost2);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
