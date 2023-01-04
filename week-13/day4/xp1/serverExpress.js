const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('hello <br> my name is maya <br> nice to meet you')
})

app.listen(3001)