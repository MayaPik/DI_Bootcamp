//Exercise 1 : The World Translator

let lang = prompt("Which language do you speak?", );
let langLower = lang.toLowerCase();

switch (langLower) {

    case "france":
        console.log("Bonjour");
        break;

    case "english":
        console.log("Hello");
        break;
    
    case "hebrew":
        console.log("Shalom");
        break;

        default:
        console.log("01110011 01101111 01110010 01110010 01111001");
        break;

}


//Exercise 2 : The Grade Assigner

let grade = prompt("What is your grade?", );

if (grade > 90 ) {
    console.log("A")
} else if (grade > 80 && grade <= 90) {
    console.log("B")
} else if (grade >= 70 && grade <= 80) {
    console.log("C")
} else if (grade < 70) {
    console.log("D")
} else {
    console.log("Error")
}


//Exercise 3 : Verbing

let verb = prompt("Plese type a verb", );

if (verb.length >= 3) {
    if (verb.endsWith("ing")) {
        verb = verb.concat("ly");
    } else {
        verb = verb.concat("ing");
    }
} else {
}

console.log(verb);
