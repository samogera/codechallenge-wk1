function speedDetector(speed) {
  // Validate the input
  if (typeof speed !== 'number' || !Number.isFinite(speed)) {
    throw new Error('Input must be a finite number.');
  }

  const speedLimit = 70;
  const maxDemeritPoints = 12;

  // Calculate the number of demerit points
  let demeritPoints = Math.floor((speed - speedLimit) / 5);

  // Check for a suspended license
  if (demeritPoints > maxDemeritPoints) {
    return 'License suspended';
  }

  // Print the result
  if (demeritPoints === 0) {
    console.log('Ok');
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
}

// Test the function
speedDetector(80); // Prints: Points: 2
speedDetector(131); // Prints: License suspended
speedDetector(70); // Prints: Ok