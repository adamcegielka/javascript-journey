// Objects - Date

const currentDate = new Date();
console.log("Current Date and Time:", currentDate);

const specificDate = new Date(2023, 0, 1); // January 1, 2023
console.log("Specific Date:", specificDate);

const dateFromString = new Date("2023-01-01T00:00:00Z");
console.log("Date from String:", dateFromString);

const dateWithTime = new Date(2023, 0, 1, 12, 0, 0); // January 1, 2023 at 12:00 PM
console.log("Date with Time:", dateWithTime);

// Getting date components
const now = new Date();

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth());
console.log("Day:", now.getDate());
console.log("Hour:", now.getHours());

console.log("Date String:", now.toDateString()); // Format: "Fri Jul 18 2025"
console.log("Time String:", now.toTimeString()); // Format: "10:30:00 GMT+0000"
console.log("ISO String:", now.toISOString()); // Format ISO: "2025-07-18T10:30:00.000Z"
console.log("UTC String:", now.toUTCString()); // Format UTC: "Fri, 18 Jul 2025 10:30:00 GMT"
