const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let shoppingList = []

let firstId = 0;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/' , express.static(__dirname + '/public'))

app.post('/items', (req,res) => {
    const item = {
      id: firstId,
      product: req.body.product,
      amount: req.body.amount
    };
    shoppingList.push(item);
    firstId++;
    let list = ""
   shoppingList.forEach(item => {
      list += item.product + ":" + item.amount + "<br>"
  });
  res.send(list)

  });

app.listen(8005)