function make_pizza(size, ...toppings) {
    console.log(`size of the Pizza: ${size}`)
    for (topping of toppings) {
        console.log(`put some ${topping}`)
    }
}

module.exports.make_pizza = make_pizza