const express = require('express');
const app = express();

let menu = [
    {
        name: "Margarita",
        price: 10,
        ingredients: ["Tomato Sauce", "Mozzarella", "Basil"]
    },
    {
        name: "Bianca",
        price: 13,
        ingredients: ["Ricotta", "Mozzarella", "Garlic"]
    },
    {
        name: "Etna",
        price: 14,
        ingredients: ["Tomato sauce", "Mozzarella", "Anchovies", "Capers", "Olives"]
    }
]


// set the view engine to ejs
// sets EJS as the view engine for the Express application
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    res.render('index',{ nameRestaurant: "Papa Pizza", pizzaMenu: menu }); //renders the home.ejs file
})

app.listen(3005, () => console.log('Example app listening on port 3005!'));