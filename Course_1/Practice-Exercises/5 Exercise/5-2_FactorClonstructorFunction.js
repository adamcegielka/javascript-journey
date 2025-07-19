// Exercise - Factory and Constructor Function

// Factory function
const addressFactory = (street, city, state, zip) => {
  return {
    street,
    city,
    state,
    zip,
    showAddress: function () {
      return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
    },
  };
};

const address1 = addressFactory("123 Main St", "Springfield", "IL", "62701");
console.log(address1);
console.log(address1.showAddress());

// Constructor function
function Address(street, city, state, zip) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.showAddress = function () {
    return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
  };
}
const address2 = new Address("789 Oak St", "Los Angeles", "CA", "90001");
console.log(address2);
console.log(address2.showAddress());
