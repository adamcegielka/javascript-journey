// for -> i = 0; i < 5

for (let i = 0; i < 5; i++) {
  console.log("Hello World!", i);
}

// for -> i = 1; i <= 5

for (let i = 1; i <= 5; i++) {
  console.log("Hi Adam!", i);
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

// Skip every 2

for (let i = 0; i <= 10; i += 2) {
  console.log("Skip every 2", i);
}

// Iteration over an array

const fruit = ["apple", "banana", "pear"];

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// Iteration and condition checking

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " - is even");
  }
}

// Breaking the loop (break)

for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
