function changeStarToLetter(){
  const string = askForWord();
  let stars = changeToStars(string);
  console.log(stars);


  for (let m=0; m<10; m++) {
  let letter = getALetter();
  for (let i=0; i<string.length; i++) {
    if (letter == string[i]) {
      stars = replaceChar(stars, letter, i);
    }  
} 
console.log(stars);

  if (stars === string) {
  console.log("You Won!");
  return
    }
  }
  console.log("You Lost!");
}

function askForWord() {
  const WORD = "Add a word";
  const stringWord = prompt(WORD);
  if (stringWord.length < 8) {
    alert("⛔️ Sorry! the word is too short, try again");
    return askForWord();
  }
  return stringWord;
}

function changeToStars(string) {
  let stars = "";
      for (let j=0; j< string.length; j++) {
        stars += "*";
      }
    return stars;
}

function getALetter() {
  let LETTER = "Give me a letter";
  return prompt(LETTER);
  
}


function replaceChar(origString, replaceChar, index) {
  const firstPart = origString.substr(0, index);
  const lastPart = origString.substr(index + 1);

  return firstPart + replaceChar + lastPart;
}


changeStarToLetter();