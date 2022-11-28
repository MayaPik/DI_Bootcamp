//Create a function that:

//takes in two strings as two parameters
//and returns a boolean that indicates whether or not the first string is an anagram of the second string.

function checkAnagram(str1,str2) {
    let one = [...str1.replace(" ", "").trimStart().trimEnd().toLowerCase()]
    let two = [...str2.replace(" ", "").trimStart().trimEnd().toLowerCase()]
    return (one.every(letter => two.includes(letter)))

}

checkAnagram("Astronomer", "Moon starer")
checkAnagram("School master" , "The classroom")
checkAnagram("The Morse Code" ,"Here come dots")
