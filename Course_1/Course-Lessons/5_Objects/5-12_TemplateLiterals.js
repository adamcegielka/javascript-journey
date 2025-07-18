// Objects - Template Literals

const message = "How are you\n" + '"doing" today?';
console.log(message);

// Template ``
const message2 = `How are you
"doing" today?`;
console.log(message2);

// Using variables in template literals
const name = "John";
const email = `Hello ${name},

Thank you for your email.
I've got your ${2 + 5} messages.

Best regards,
Jane Doe`;
console.log(email);
