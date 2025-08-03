// Reducing an Array

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum); // 15

const product = numbers.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1,
);
console.log(product); // 120
