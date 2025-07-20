// Exercise - Price Range Objects

function PriceRange(min, max) {
  this.min = min;
  this.max = max;
  this.isAffordable = function (price) {
    return price >= this.min && price <= this.max;
  };
}

let priceRange1 = new PriceRange(10, 50);
let priceRange2 = new PriceRange(20, 100);

console.log(`Is $30 affordable in range 1? ${priceRange1.isAffordable(30)}`); // true
console.log(`Is $30 affordable in range 2? ${priceRange2.isAffordable(30)}`); // true
console.log(`Is $5 affordable in range 1? ${priceRange1.isAffordable(5)}`); // false
console.log(`Is $60 affordable in range 2? ${priceRange2.isAffordable(60)}`); // false

// Create multiple price ranges and check if a price is affordable in each range
let priceRanges = [
  new PriceRange(5, 15),
  new PriceRange(20, 40),
  new PriceRange(50, 80),
];
function checkPriceInRanges(price) {
  for (let i = 0; i < priceRanges.length; i++) {
    if (priceRanges[i].isAffordable(price)) {
      console.log(
        `Price $${price} is affordable in range ${i + 1}: $${priceRanges[i].min} - $${priceRanges[i].max}`,
      );
    } else {
      console.log(
        `Price $${price} is NOT affordable in range ${i + 1}: $${priceRanges[i].min} - $${priceRanges[i].max}`,
      );
    }
  }
}
checkPriceInRanges(10); // Check if $10 is affordable in all ranges
checkPriceInRanges(30); // Check if $30 is affordable in all ranges

// Create more price ranges and check affordability
let priceRange3 = new PriceRange(15, 25);
let priceRange4 = new PriceRange(30, 60);
console.log(`Is $20 affordable in range 3? ${priceRange3.isAffordable(20)}`); // true
console.log(`Is $20 affordable in range 4? ${priceRange4.isAffordable(20)}`); // false
console.log(`Is $50 affordable in range 3? ${priceRange3.isAffordable(50)}`); // false
console.log(`Is $50 affordable in range 4? ${priceRange4.isAffordable(50)}`); // true

// Create an array of price ranges with labels and tooltips
let priceRange5 = [
  { label: "$", tooltip: "inexpensive", min: 0, max: 20 },
  { label: "$$", tooltip: "moderate", min: 21, max: 50 },
  { label: "$$$", tooltip: "expensive", min: 51, max: 100 },
];

let restaurantPrices = [
  { averagePerPerson: 15 },
  { averagePerPerson: 35 },
  { averagePerPerson: 75 },
];

function checkRestaurantPrices(prices) {
  for (let i = 0; i < prices.length; i++) {
    let price = prices[i].averagePerPerson;
    let affordable = false;
    for (let j = 0; j < priceRange5.length; j++) {
      if (price >= priceRange5[j].min && price <= priceRange5[j].max) {
        console.log(
          `Restaurant with average price $${price} is ${priceRange5[j].tooltip}`,
        );
        affordable = true;
        break;
      }
    }
    if (!affordable) {
      console.log(`Restaurant with average price $${price} is out of range`);
    }
  }
}
checkRestaurantPrices(restaurantPrices); // Check restaurant prices against defined ranges
