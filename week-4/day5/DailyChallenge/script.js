
function printTheSong() {
    let word = "";
    number = askANumber();
    for (let i=0; i< number; i++) {
        if (i===0) {
            word = "it";
        } else {
            word = "them";
        }

    console.log( number + " bottles of beer on the wall ");
    console.log( number + " bottles of beer");
    console.log( "Take " + (i+1) + " down, pass " + word + " around");
    console.log( (number-i-1) + " bottles of beer on the wall ");
    console.log("");
        number = (number-i-1);
    }
    console.log( number + " bottles of beer on the wall ")
    console.log( "Take " + number + " down, pass them around")
    console.log( "no bottle of beer on the wall")




}

function askANumber() {
    let NUMBER = "CHOOSE A NUMBER TO START WITH";
    let number = prompt(NUMBER);
    if (number > 99) {
        alert("⛔️ Sorry! too much, try again");
        return askANumber();
      }
      return number;
    }




printTheSong();