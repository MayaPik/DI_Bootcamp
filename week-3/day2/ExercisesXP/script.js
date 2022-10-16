//Exercise 1 
    // Your Favorite Food

let favoriteFood = "Pizza";
let timeOfMeal = "Dinner";

console.log("I eat " + favoriteFood + " at every " + timeOfMeal);


//Exercise 2
    // Series

const myWatchedSeries = ["Black Mirror", "Money Heist", "The Big Bang Theory"];

let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + " and the " + myWatchedSeries[2];


console.log("I watched 3 series : " + myWatchedSeriesSentence);

    //part II

    myWatchedSeries[2] = "Friends";
    myWatchedSeries.push("Brooklyn 99")
    myWatchedSeries.unshift("Orange Is the new Black");
    myWatchedSeries.splice(1,1);

    console.log(myWatchedSeries[1][2]);

    console.log(myWatchedSeries);

//Exercise 3
    // The Temperature Converter

let celcius = 32;
let fahrenheit = (celcius / 5) * 9 + 32;
    


console.log(celcius + " °C is " + fahrenheit + " °F.");

//Exercise 4
    // Guess The Answers #1

let c;
let a = 34;
let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23
    // Actual: 23

        // c is undefined

        console.log(3 + 4 + '5'); //75


//Exercise 5
    // Guess The Answers #2

    typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: ?
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: true
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: 'hamburgers'

"hamburgers" - "s"
// Prediction: ?
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: '13'

"1" - "3"
// Prediction: ?
// Actual: -2

"johnny" + 5
// Prediction: 'johnny5'
// Actual: 'johnny5'

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction: 'hellohellohellohellohellohellohellohellohellohello....."
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false







//Exercise 6
    // Guess The Answers #3

5 + "34"
// Prediction: '534'
// Actual:' 534'

5 - "4"
// Prediction: NaN
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: NaN
// Actual: 5

"Java" + "Script"
// Prediction: 'JavaScript'
// Actual: 'JavaScript'

" " + " "
// Prediction: '  '
// Actual: '  '

" " + 0
// Prediction: ' 0'
// Actual: ' 0'

true + true
// Prediction: 2
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: 0
// Actual: false

3 - 4
// Prediction: -1 
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN
