function playTheGame() {
    alert("Hello, let's see if you can guess the same number as the computer");
    let answer = confirm("Would you like to play the game?");
    
    if (!answer) {
      alert("No problem, Goodbye");
    } else {
      const computerNumber = Math.round(Math.random() * 10);
      for (let i = 0; i < 3; i++) {
        let userNumber = askForNum();
        if (compareNumbers(userNumber, computerNumber)) {
          return;
        }
      }
      alert("No more tries")
    }
  }
  
  function askForNum() {
    let USER_NAME = "Add a number between 0 an 10";
    let userNumberString = prompt(USER_NAME);
    let userNumber = parseInt(userNumberString);
    if (Number.isNaN(userNumber)) {
      alert("⛔️ Sorry Not a number, Try again");
      return askForNum();
    }
    if (userNumber > 10 || userNumber < 0) {
      alert("⛔️ number is NOT between values, Try again");
      return askForNum();
    }
    return userNumber;
  }
  
  function compareNumbers(userNumber, computerNumber) {
  
    if (userNumber === computerNumber) {
      alert("WINNER , the number was " + userNumber);
      return true;
    }
    if (userNumber > computerNumber) {
      alert("Your number is bigger then the computer’s, guess again");
      return false;
    }
    if (userNumber < computerNumber) {
      alert("Your number is smaller then the computer’s, guess again");
      return false;
    }
  }
  
