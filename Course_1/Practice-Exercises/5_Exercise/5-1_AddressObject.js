// Exercise - Address Object

// street, city, state, zip, showAddress
const address = {
  street: "123 Main St",
  city: "Springfield",
  state: "IL",
  zip: "62701",
  showAddress: function () {
    return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
  },
};

console.log(address.showAddress());

//

let address2 = {
  street: "456 Elm St",
  city: "Kansas City",
  state: "MO",
  zip: "64101",
};

function showAddress(address2) {
  for (let key in address2) console.log(key, address[key]);
}

showAddress(address2);
