// Testing the Elements of an Arrays

const numbers = [5, 3, 8, 1, 2];

const hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumber); // true

const allGreaterThanZero = numbers.every((num) => num > 0);
console.log(allGreaterThanZero); // true

const allPositive = numbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive); // true
