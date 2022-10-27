//🌟 Exercise 1 : Information
//Part I : function with no parameters

function infoAboutMe() {
    console.log("My name is Maya")
}

infoAboutMe();


//Part II : function with three parameters

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("your name is " + personName + " you are " + personAge + " years old and your favotire color is " + personFavoriteColor);

}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// Exercise 2 : Tips

function calculateTip() {
    let billAmount = parseInt(prompt("What is the amount of the bill?", ));
        if (billAmount < 50) {
            let tip = 0.2*billAmount
            console.log(billAmount + tip);
        } else if (billAmount > 200) {
            let tip = 0.1*billAmount
            console.log(billAmount + tip);
        } else {
            let tip = 0.15*billAmount
            console.log(billAmount + tip);
        }
}

calculateTip();

/* Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

Call the calculateTip() function. */

// Exercise 3 : Find The Numbers Divisible By 23

function isDivisible() {
    let numbersArray = [];
    let numersSum = 0;
    for (let i=0; i< 500; i++) {
       if (i%23 === 0) {
        numbersArray.push(i);
        numersSum += i;
       }
    }
    console.log(numbersArray)
    console.log(numersSum)
}

isDivisible();

/*In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.

Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313 */


//Bonus: Add a parameter divisor to the function.

function isDivisibleNew(divisor) {
    let numbersArray = [];
    let numersSum = 0;
    for (let i=0; i< 500; i++) {
       if (i%divisor === 0) {
        numbersArray.push(i);
        numersSum += i;
       }
    }
    console.log(numbersArray)
    console.log(numersSum)
}

isDivisibleNew(3);

// Exercise 4 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 



let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalPrice = 0;
    for (let i=0; i<shoppingList.length; i++) {
        let fruit = shoppingList[i];
        if (stock[fruit] > 0) {
            totalPrice += prices[fruit];
            stock[fruit] = (stock[fruit]-1)
        }
        }
        console.log(totalPrice);
        return totalPrice;
        }


    myBill(shoppingList);


/*The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.

Call the myBill() function.

Bonus: If the item is in stock, decrease the item’s stock by 1 */


//Exercise 5 : What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange) {
    let amount = ((amountOfChange[0]*0.25) + (amountOfChange[1]*0.10) + (amountOfChange[2]*0.05) + (amountOfChange[3]*0.01));
    if (amount >= itemPrice) {
        return true;
    } else {
        return false;
    }

}
changeEnough(4.25, [25, 20, 5, 0]);

/*
If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

Change will always be represented in the following order: quarters, dimes, nickels, pennies.
A quarters is 0.25
A dimes is 0.10
A nickel is 0.05
A penny is 0.01
*/



//Exercise 6 : Vacations Costs

function totalVacationCost() {

    const MESSAGE_NIGHTS = "How many nights do you want to stay?"
    let numOfNights = prompt(MESSAGE_NIGHTS);
    while (/^[0-9]+$/i.test(numOfNights) == false) {
        numOfNights = prompt(MESSAGE_NIGHTS);
    }
    const MESSAGE_DAYS = "How many days do you want to rent the car?"
    let numOfDays = prompt(MESSAGE_DAYS);
    while (/^[0-9]+$/i.test(numOfDays) == false) {
        numOfDays = prompt(MESSAGE_DAYS);
    }
    const MESSAGE_PLACE= "Where is your destination?"
    let destinationPlace = prompt(MESSAGE_PLACE);
    while (/^[a-z]+$/i.test(destinationPlace) == false) {
        destinationPlace = prompt(MESSAGE_PLACE);
    }
    
    function  hotelCost() {
        return ((numOfNights * 140));

    //It should ask the user for the number of nights they would like to stay in the hotel.
    //If the user doesn’t answer or if the answer is not a number, ask again.
    //the hotel costs $140 per night. The function should return the total price of the hotel.
    }

    function planeRideCost() {
    
        if (/^[london]/i.test(destinationPlace)) {
            return (183);
        } else if (/^[paris]/i.test(destinationPlace)) {
            return (220);
        } else {
            return (300);
        }

    //It should ask the user for their destination.
    //if the user doesn’t answer or if the answer is not a string, ask again.
    //The function should return a different price depending on the location.
    //“London”: 183$
    //“Paris” : 220$
    //All other destination : 300$ 
    }

    function rentalCarCost() { 

        if (numOfDays >10) {
            return (((numOfDays * 40)*0.95));
        } else {
        return ((numOfDays * 40));
        }
    // It should ask the user for the number of days they would like to rent the car.
    //If the user doesn’t answer or if the answer is not a number, ask again.
    //Calculate the cost to rent the car. The car costs $40 everyday.
    //If the user rents a car for more than 10 days, they get a 5% discount.
    //The function should return the total price of the car rental.
    }

    let car =rentalCarCost();
    let hotel = hotelCost();
    let plane =  planeRideCost();
    let full = car + hotel + plane;

    console.log("The hotel costs "+ hotel + "$, The car costs " + car +"$ and the plane ticket costs " + plane + "$");
    console.log("The whole vacation will cost you " +full + "$")

    
//Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

}

totalVacationCost()

//Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.*/
