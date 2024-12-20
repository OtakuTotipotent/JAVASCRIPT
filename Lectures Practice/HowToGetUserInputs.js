

import { createInterface } from 'readline'; // this module has standard input/output library/interface
const rl = createInterface({ // gets input & output operations
    input: process.stdin,
    output: process.stdout
});

var name = ""; // variables initialization
var age = 18;

// getting user inputs
rl.question('Please enter Your name : ', (name) => {
    rl.question('Now, enter your age : ', (age) => {
        console.log(`Hello ${name}, Nice to meet you at ${age}!`);
        rl.close(); // necessary to close this at the end
    });
});
