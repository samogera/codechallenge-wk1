// Calculates the payee (tax) using the provided KRA rates
function calculateTax(grossSalary) {
    const taxRates = [
      [0, 0],
      [24000, 10],
      [32330, 15],
      [40000, 20],
      [48000, 25],
      [54000, 30],
      [60000, 35],
      [68000, 37]
    ];
  
    let tax = 0;
    for (let i = 0; i < taxRates.length; i++) {
      if (grossSalary <= taxRates[i][0]) {
        tax = grossSalary * taxRates[i][1] / 100;
        break;
      }
      tax = taxRates[i][1] * taxRates[i][0] / 100;
    }
  
    return tax;
  }
  
  // Calculates the NHIF deductions based on the provided NHIF rates
  function calculateNHIFDeductions(basicSalary) {
    if (basicSalary <= 5999) {
      return 150;
    }
    if (basicSalary >= 6000 && basicSalary <= 7999) {
      return 300;
    }
    if (basicSalary >= 8000 && basicSalary <= 11999) {
      return 400;
    }
    if (basicSalary >= 12000 && basicSalary <= 14999) {
      return 500;
    }
    if (basicSalary >= 15000 && basicSalary <= 19999) {
      return 600;
    }
    if (basicSalary >= 20000 && basicSalary <= 24999) {
      return 750;
    }
    if (basicSalary >= 25000 && basicSalary <= 29999) {
      return 850;
    }
    if (basicSalary >= 30000 && basicSalary <= 34999) {
      return 950;
    }
    if (basicSalary >= 35000 && basicSalary <= 39999) {
      return 1050;
    }
    if (basicSalary >= 40000 && basicSalary <= 44999) {
      return 1150;
    }
    if (basicSalary >= 45000 && basicSalary <= 49999) {
      return 1250;
    }
    if (basicSalary >= 50000 && basicSalary <= 59999) {
      return 1350;
    }
    if (basicSalary >= 60000 && basicSalary <= 69999) {
      return 1450;
    }
    if (basicSalary >= 70000 && basicSalary <= 79999) {
      return 1550;
    }
    if (basicSalary >= 80000 && basicSalary <= 89999) {
      return 1650;
    }
    if (basicSalary >= 90000 && basicSalary <= 99999) {
      return 1750;
    }
    return 1800;
  }
  
  // Calculates the NSSF deductions
  