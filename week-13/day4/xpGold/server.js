const express = require('express')
const app = express()
const body_parser = require('body-parser')

app.use(express.static(__dirname))

// parse application/x-www-form-urlencoded
app.use(body_parser.urlencoded({ extended: false }))

app.use(function (req, res) {
        res.setHeader('Content-Type', 'text/html')
        console.log(req.body)
        res.end(JSON.stringify(req.body))
      })
app.listen(8001)
