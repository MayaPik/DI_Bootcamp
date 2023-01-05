const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/',express.static(__dirname+'/public'))
app.use('/register', express.static(__dirname + "/public/register.html"))
app.use('/login', express.static(__dirname + "/public/login.html"))

app.post('/register', async (req, res) => {
    try{
        let useri = fs.readFileSync('./json.json')
        let users = JSON.parse(useri.toString('utf-8'))
        console.log(users)
        let foundUser = users.find((data) => req.body.username === data.username || req.body.password === data.password );
        if (!foundUser) {    
            let newUser = {
                id: new Date(),
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            };
            users.push(newUser)
            fs.writeFile('json.json', JSON.stringify(users), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
              });
            console.log('User list', users);
            res.send("<div align ='center'><h2>Hello! Your acount is now created!</h2></div>")
        } else {
            res.send("<div align ='center'><h2>Username already used</h2><a href='./register.html'>Register again</a></div>");
        }
    } catch(err){
        res.status(400).send("Server Error");
        console.log(err)
    }
});


app.post('/login', async (req, res) => {
    try{
        let useri = fs.readFileSync('./json.json')
        let users = JSON.parse(useri.toString('utf-8'))
        let foundUser = users.find((data) => req.body.username == data.username && req.body.password == data.password);
        if (foundUser) {
                res.send(`<div align ='center'><h3>Hello ${foundUser.name} welcome back!</h3></div>`);
            } else {
                res.send("<div align ='center'><h2>Username is not registered</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");
            }
    } catch(err){
        console.log(err)
        res.send("Internal server error");
    }
});

app.listen(8006)
