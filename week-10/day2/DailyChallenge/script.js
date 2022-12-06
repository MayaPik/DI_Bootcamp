//1rst Daily Challenge
/*
function makeAllCaps(arr) {
 return new Promise((resolve,reject) => {
  if (arr.every(word => typeof(word) == 'string')) {
    resolve(arr.map(word => word = word.toUpperCase()));
  } else {
    reject(arr + " - The array does not contain only strings")
  }
 })
}

function sortWords(arr) {
  return new Promise((resolve,reject) => {
    if (arr.length > 4) {
      resolve(arr.sort((a, b) => a.localeCompare(b)));
    } else {
      reject(arr + " - the array is shorter than 4")
    }
   })
}
  makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

  makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error))

  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))
*/
//2nd Daily Challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`


function toJS(jsonObject) {
  return new Promise((resolve,reject) => {
   if (jsonObject.length > 0) {
     resolve(result = JSON.parse(jsonObject));
   } else {
     reject(error)
   }
  }).then(result => toMorse(result)).catch(error => console.log(error)).finally(() => console.log("done converting the object"))
 }

 let buttonAdd = document.getElementById('add')
 buttonAdd.addEventListener('click', function() { toJS(morse); } )


function toMorse(result) {
  let basic = prompt("Type in the word you want to translate",).toLowerCase()
  answer = basic.split('');
  let arrayOfKeys = Object.keys(result);
  let arrayOfValues = Object.values(result);
    return new Promise((resolve,reject) => {
      if (answer.every(char=> arrayOfKeys.includes(char)))
      {
        const morseArray = answer.map((char) => {
          let position = arrayOfKeys.indexOf(char);
          return arrayOfValues[position]
        })
        resolve(morseArray);    
      } else {
        let throwing = answer.filter(char => !arrayOfKeys.includes(char))
        reject(`the promise rejects because the characters: ${throwing} does not exist in the morse javascript object`);
        alert("You used character/s that does not exist :" + throwing)
      }

    }).then(result => joinWords(result, basic)).catch(error => console.log(error)).finally(() => console.log("done translating the user's answer"))
 }

function joinWords(morseTranslation, answer) {
  let screen = document.getElementById('screen')
  screen.innerHTML += "<br>" + answer +":<br>"
  morseTranslation.map((char) => {
    screen.innerHTML += char + "<br>"
  })
}

