//import the readline module to read input from the user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//ask user to enter their basic salary
rl.question('Enter basic salary: ', (basicSalary) => {
    //ask user to enter their benefits
    rl.question('Enter benefits: ', (benefits) => {
        const paye = 0.3 * (basicSalary + benefits);
        const nhifDeductions = 0.02 * (basicSalary + benefits);
        const nssfDeductions = 0.04 * (basicSalary + benefits);
        const grossSalary = basicSalary + benefits - paye - nhifDeductions - nssfDeductions;
        const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;
        //print results
        console.log(`Paye: ${paye}`);
        console.log(`NHIF Deductions: ${nhifDeductions}`);
        console.log(`NSSF Deductions: ${nssfDeductions}`);
        console.log(`Gross Salary: ${grossSalary}`);
        console.log(`Net Salary: ${netSalary}`);
        //close the readlline interface
        rl.close();
    });
});