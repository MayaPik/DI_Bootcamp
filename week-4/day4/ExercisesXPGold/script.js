//Exercise 1 : Is_Blank

//Write a program to check whether a string is blank or not.

function isBlank(state) {
    if (state.length === 0) {
        return true
    } else {
        return false
    }
}

console.log(isBlank(''));
console.log(isBlank('abc'));


//Exercise 2 : Abbrev_name

function abbrevName(name) {
    let indexOfAbb = (name.indexOf(" ") +1)
    return (name.slice(0,indexOfAbb+1)) + "." ;
}

console.log(abbrevName("Robin Singh"));



//Exercise 3 : SwapCase

//Write a JavaScript function which takes a string as an argument and swaps the case of each character.

function change(stringi) {
    let newString = "";
    for (i=0; i<stringi.length; i++) {
        if (stringi[i] == stringi[i].toUpperCase()) {
        newString += stringi[i].toLowerCase();
        } else {
        newString += stringi[i].toUpperCase();
    }
    }
    return newString;
}
console.log(change("The Quick Brown Fox"))

// Exercise 4 : Omnipresent Value
//Create a function that determines whether an argument is omnipresent for a given array.

function isOmnipresent(arrayOne, givenNum) {
        for (var i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i].includes(givenNum) == true ) {
            continue;
            } else {
                return false;
            }
        } return true;

    }

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[6, 1], [1, 3], [5, 1], [6, 1]], 6));
