// Break and Continue

// Break
let i = 0;
while (i < 10) {
    if (i === 5) break;

    console.log(i);
    i++;      
}

// Continue
let j = 0;
while (j < 10) {
    if (j % 2 === 0) {
        j++;
        continue; // Skip even numbers
    }
    
    console.log(j);
    j++;
}