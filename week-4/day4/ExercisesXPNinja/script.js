//Exercise 1 : Checking The BMI

let personOne = {
    fullName: "Maya Pik",
    mass: 49,
    height: 1.67,
    bmi: function() {
      return (this.mass/ (this.height**2));
    }
  };

  let personTwo = {
    fullName: "Orit Pik",
    mass: 55,
    height: 1.66,
    bmi: function() {
      return (this.mass/ (this.height**2));
    }
  };

  if (personOne.bmi() > personTwo.bmi()) {
    console.log(personOne.fullName + " has larger BMI")
  } else {
    console.log(personTwo.fullName + " has larger BMI")

  }



//Exercise 2 : Grade Average

const grades = [55,44,90,53];

function findAvg(gradesList) {
    
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
      sum += gradesList[i];
    }
    let averageGrade = (sum / gradesList.length);
    console.log(averageGrade);
    console.log(calculate(averageGrade))
    return averageGrade;
   
}

function calculate(averageGrade) {
    if (averageGrade > 65) {
        return "passed";
        } else {
        return "Failed, must repeat the course";
    }
}

findAvg(grades);
 


/*

In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

Create a function called findAvg(gradesList) that takes an argument called gradesList.

Your function must calculate and console.log the average.

If the average is above 65 let the user know they passed

If the average is below 65 let the user know they failed and must repeat the course.
Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
Hint One function must call the other.


*/