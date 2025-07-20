// Exercise - Blog Post Object

// title
// body
// author
// views
// comments
//    (author, body)
// isLive

const blogPost = {
  title: "Understanding JavaScript Objects",
  body: "JavaScript objects are a fundamental part of the language, allowing you to store collections of data and more complex entities.",
  author: "Jane Doe",
  views: 5,
  comments: [
    {
      author: "John Smith",
      body: "Great article! Very informative.",
    },
    {
      author: "Alice Johnson",
      body: "I learned a lot from this, thanks!",
    },
  ],
  isLive: true,
  showPost: function () {
    return `${this.title} by ${this.author}\n${this.body}\nViews: ${this.views}\nLive: ${this.isLive}`;
  },
};

console.log(blogPost.title);
console.log(blogPost);
console.log(blogPost.showPost());
