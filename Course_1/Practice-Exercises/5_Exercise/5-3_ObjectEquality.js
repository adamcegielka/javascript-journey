// Exercise - Object Equality

let address1 = new Address("123 Main St", "Springfield", "IL", "62701");
let address2 = new Address("123 Main St", "Springfield", "IL", "62701");
let address3 = address1;

// Constructor function
function Address(street, city, state, zip) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

function areEqual(addr1, addr2) {
  return (
    addr1.street === addr2.street &&
    addr1.city === addr2.city &&
    addr1.state === addr2.state &&
    addr1.zip === addr2.zip
  );
}
function areSame(addr1, addr2) {
  return addr1 === addr2;
}
console.log("Address 1:", address1);
console.log("Address 2:", address2);
console.log("Address 3:", address3);
console.log("Are address1 and address2 equal?", areEqual(address1, address2)); // true
console.log("Are address1 and address2 the same?", areSame(address1, address2)); // false
console.log("Are address1 and address3 the same?", areSame(address1, address3)); // true
