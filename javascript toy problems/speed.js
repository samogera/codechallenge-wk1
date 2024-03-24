// Import the readline module to read input from the user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Prompt the user for the speed of a car
rl.question('Enter the speed of a car: ', (speed) => {
    // Convert the speed to a number
    speed = parseFloat(speed);
   // Initialize the number of demerit points
    let demeritPoints = 0;
   // Check if the speed is above the limit
    if (speed > 70) {
        // Calculate the number of demerit points
        demeritPoints = Math.floor((speed - 70) / 5);
    }
// Print the number of demerit points
    if (demeritPoints == 0) {
        console.log("Ok");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
   // Check if the driver's license should be suspended
    if (demeritPoints > 12) {
        console.log("License suspended");
    }
// Close the readline interface
    rl.close();
});