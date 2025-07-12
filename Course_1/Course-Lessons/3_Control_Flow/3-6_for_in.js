// The for...in loop is used to iterate over the enumerable properties of an object.

const person = {
  name: "John",
  ag: 30,
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

//

const color = ["red", "green", "blue"];

for (const index in color) {
  console.log(`Index ${index}: ${color[index]}`);
}

// Iteration over a nested object
const user = {
  name: "Anna",
  age: 25,
  contact: {
    email: "anna@example.com",
    phone: "123-456",
  },
};

for (const key in user) {
  const value = user[key];
  if (typeof value === "object") {
    for (const subKey in value) {
      console.log(`${key}.${subKey}: ${value[subKey]}`);
    }
  } else {
    console.log(`${key}: ${value}`);
  }
}

// Correct comparison: for...in vs for...of

const colors = ["red", "green", "blue"];

console.log("for...in:");
for (const index in colors) {
  console.log(index); // indeksy: 0, 1, 2
}

console.log("for...of:");
for (const color of colors) {
  console.log(color); // wartości: red, green, blue
}
