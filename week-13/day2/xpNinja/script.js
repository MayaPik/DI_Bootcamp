let users = []

let faker = require('faker')
let addObject = require('./object')

for (let i=0; i< 20; i++) {
addObject.addObject(faker.name.findName(), faker.address.streetAddress(),faker.address.country(),users)
}

const readlineSync = require('readline-sync');
const name = readlineSync.question('Your name: ');
const streetAddress = readlineSync.question('Your street address: ');
const country = readlineSync.question('Your country: ');
addObject.addObject(name, streetAddress, country,users)

console.log(users)


let rg = require('./rg.js')

console.log(rg.returnNumbers('k5k3q2g5z6x9bn'))

console.log(rg.returnVal('John Doe'))
