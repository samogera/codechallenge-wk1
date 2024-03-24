//Importing the readline module for user to input his/her data
const readline = require('readline');

//Creating an interface for user input
const rl = readline.createInterface({
    input: process.stdin,//reads from user input
    output: process.stdout//writes to the console
});
//Asks users to input student marks
rl.question('Enter student marks: ', (marks) => {
    //coverting the user input to a number
    if (marks < 0 || marks > 100) {
        console.log('Invalid marks. Please enter marks between 0 and 100.');
        rl.close();
    } else {
        //assigning grades based on the ranges below
        let grade;
        if (marks >= 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 49) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }
        //displaying the calculated grade
        console.log(`Grade: ${grade}`);
        rl.close();
    }
});
