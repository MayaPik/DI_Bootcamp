const express = require('express')
const app = express()


app.listen(8004)

app.use('/dalle.jpg', express.static(__dirname + '/public/dalle.jpg'))
app.use('/picture', express.static(__dirname + '/public/pic.html'))

app.get('/aboutMe/:hobby',(req,res) => {
    let hobby = req.params
    if (typeof(hobby.hobby) == 'string') {
    res.send(hobby.hobby)
    res.end()
    } else {
    res.status(404).send('error')
    }
})

const bodyParser = require('body-parser')
app.use('/form', express.static(__dirname + '/public/form.html'))


app.use(bodyParser.urlencoded({ extended: false }));

app.post('/formData', (req, res) => {
    const formData = req.body;
    console.log();
    res.send(`Hey! <i>${formData.email}</i> sent you a message: ${formData.message}`);
  });
  