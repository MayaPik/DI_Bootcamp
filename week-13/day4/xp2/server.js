
const express = require('express')
const app = express()

//1
app.use(express.static(__dirname + '/public'))

app.get('/answer', (req, res) => {
    const user = {
      firstname: 'John',
      lastname: 'Doe'
    };
    res.json(user);
    console.log(user)
  });

app.listen(4000)

//2
app.get('/:id', (req, res) => {
   const id = req.params
   console.log(id)
   res.end(JSON.stringify(id))
  });


//3
