const { fi } = require('faker/lib/locales');
const fs = require('fs');

fs.readFile('./hello.txt',(err,data) => {
    if (err) {
        console.log('error')
    } 
    console.log(data.toString('utf-8'))
});

const file = fs.readFileSync('./hello.txt') //stuck the entire program if building a server
console.log(file.toString('utf-8'))

fs.appendFile('./hello.txt', ' This is so cool! yo', err => {
    if (err) {
    console.log(err)
    }
})


fs.writeFile('./bye.txt', 'bye', err => {
    if (err) {
    console.log(err)
    }
})