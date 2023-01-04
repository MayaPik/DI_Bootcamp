const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static(__dirname + '/methods-public'))
app.use(express.urlencoded({extended:false}))

app.get('/api/people',(req,res) => {
    res.status(200).json({success:true, data:people})
})

app.post('/login',(req,res) => {
    const {name} = req.body
    if (name) {
        res.end('hello ' + name)
    }
})

app.listen(5010)
console.log('listen 5010..')

// const logger = require('./logger')
// const auto = require('./auto')

//req => middleware => res
// app.use('/',[logger,auto]) //instead of put it in each app.get, if you put something like the api it works only on api data

// app.get('/',(req,res) => {
//    res.write('hello ' + req.user.name || "")
//     res.write('Home')
//     res.end()
// })

// app.get('/api/about',(req,res) => {
//     res.send('About')
// })

// app.get('/products',(req,res) => {
//     res.send('Products')
// })



// app.use('/', express.static(__dirname+ '/public')) //static is a builtin middleware

// app.get('/home',(req,res) => {
//     res.writeHead('200', {'content-type':'text/html'})
//     res.write('Home Page')
//    res.end()
// })

// app.get('/login',(req,res) => {
//     res.send("send data")
    
// })

// app.all('*', (req,res) => {
//     res.status(404).send('not found')
// })