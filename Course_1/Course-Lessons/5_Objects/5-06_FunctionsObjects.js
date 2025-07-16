// Objects - Functions are Objects

// Functions can have properties and methods, just like regular objects.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

Circle.call({}, 1); // Using call to invoke Circle with a specific context
Circle.apply({}, [1, 2, 3]); // Using apply to invoke Circle with an array of arguments

const another = new Circle(1);
console.log(another.constructor); // Output: [Function: Circle]
