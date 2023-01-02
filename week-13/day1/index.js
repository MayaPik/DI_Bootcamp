function sayHello(name) {
    console.log(`Hello ${name}`)
}

sayHello('Maya')


console.log() //global scope
//in browser - we have window...

globalThis.console.log('Hello')

const logger = require('./logger')
console.log(logger)

logger.log('blue')