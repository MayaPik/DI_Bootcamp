let sentence = "The movie is not really bad, I like it";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");



if ( wordNot < wordBad ) {
    let notBad = (sentence.slice(wordNot, wordBad)+ "bad");
        
        console.log(sentence.replace(notBad, "good"));
} else {
    console.log(sentence);

}