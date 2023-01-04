const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const http = require('http')

http.createServer((req,res) => {
    res.end(JSON.stringify(user));
}).listen(8000)
