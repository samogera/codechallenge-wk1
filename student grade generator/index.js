// Function to get student grade
function getStudentGrade(mark) {
  // Check if the mark is greater than 79
    if (mark > 79) {
      //If its true return the string 'A'
      return 'A';
    }
    //If the mark is not greater than 79, check if it is greater than or equal to 60
     else if (mark >= 60) {
      // If true return string 'B'
      return 'B';
    } // If the mark is not greater than or equal to 60, check if it is greater than or equal to 49
    else if (mark >= 49) {
      // if the true return string 'C'
      return 'C';
    } //If the mark is not greater than or equal to 49, check if it is greater than or equal to 40
    else if (mark >= 40) {
      //If true return string 'D'
      return 'D';
    } else {
      //If the mark is not greater than or equal to 40, return the string 'E'
      return 'E';
    }
  } 