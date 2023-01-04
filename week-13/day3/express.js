
/*app.METHOD(PATH, HANDLER)
app is an instance of Express
METHOD is an HTTP express method
PATH is the endpoint
HANDLER is the function executed when a request is received from the path*/


// const express = require('express')
// const res = require('express/lib/response')
// const app = express()
// port = 3001
// app.get('/', (req,res) => res.send('Hello World'))
// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

//The request is an instance of the http.IncomingMessage class
//The response is an instance of the http.ServerResponse class.

//HTTP headers let the client and the server pass additional information with an HTTP request or response. There is a standard for these headers; we will use the Content-Type header and set it to text/html.

//The end method tells the server that all of the response headers and body have been sent. The server now knows that the message is complete. This method must be called on each response.

const http = require('http')
const server = http.createServer((req,res) => {
    if (req.url == '/welcome') {
        res.setHeader("Content-Type","application/json")
        res.writeHead(200)
        res.end(JSON.stringify({message: "Welcome New Year!"}))
    } else {
    res.end("Another Page")
    }
})

server.listen(5001)
console.log('Node.js is listening at 5001')


const json =
{
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                { "value": "New", "onclick": "CreateNewDoc()" },
                { "value": "Open", "onclick": "OpenDoc()" },
                { "value": "Close", "onclick": "CloseDoc()" }
            ]
        }
    }
}
http.createServer((req,res) => {
    if (req.url == '/menu') {
        res.setHeader("Content-Type","application/json")
        res.writeHead(200)
        res.end(JSON.stringify(json))
    } else {
    res.end("Another Page")
    }
}).listen(5002)
console.log('Node.js is listening at 5002')

const express = require('express')
const { updateSpread } = require('typescript')
// const app = express()

// app.use(logger)

// app.get('/', (req, res) => {
//     console.log('main')
//     res.send('Home Page')
//     next()
// })

// app.get('/users', auth, (req, res) => {
//     res.send('Users Page, Admin - ' + req.admin)
//     console.log('users')
// })

// function logger(req,res,next) {
//     console.log(req.originalUrl)
//     console.log('log')
//     next()
// }

// function auth(req,res,next) {
//     console.log('auth')
//     if (req.query.admin === 'true') {
//         req.admin = true;
//         next()
//         return
//     } else {
//         res.send('no auth')
//     }
// }

// app.listen(5003)

const app = express()

// app.use(getTime);
// app.use('/second-route', getTime);

// function getTime(req,res,next) {
//     const currentDate =  new Date()
//     res.send(`Current date: ${currentDate.toDateString()} <br> Current time: ${currentDate.toTimeString()}`);
//     next()
// }

// app.get('/', function (req, res) {
//     res.send('GET request to the homepage')
//   })
  
//   // POST method route
//   app.post('/', function (req, res) {
//     res.send('POST request to the homepage')
//   })

// app.get('/tutorial/:userId/books/:number', (req, res) => {
//     console.log("req.params: ", req.params)
//     console.log(req.query)
//     res.send(`Tutorial about book number ${req.params.number}!, your user ID is ${req.params.userId}`)
// })


app.get('/tutorial', (req, res) => {
console.log(req.query)
// if (isNaN(req.params.id)) {
//     res.status(400).send('Bad request!') //error handler 
// }
if (req.query.happy = true) {
    res.send('i am happy')
}
})


app.listen(5003)





