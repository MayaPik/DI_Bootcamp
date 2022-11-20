let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = () => groceries.fruits.forEach((fruit) => console.log(fruit));
displayGroceries()

//Create another arrow function named cloneGroceries
//In the function, create a variable named user that is a copy of the client variable. 
//(Tip : make the user variable equal to the client variable)

//In the function, create a variable named shopping that is equal to the groceries variable.
//Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
//Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

const cloneGroceries = () => { 
    let user = client; 
    client = 'bety';
    console.log(user); //not changed- reference by value
    let shopping = groceries;
    groceries.totalPrice = '35$'
    groceries.other.payed = false;
    console.log(shopping) //changed- because it is begin refer to the same place
}
cloneGroceries()