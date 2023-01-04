const http = require('http')

http.createServer((req,res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1>hello</h1> <h3>bye</h3> <h5> boo </h5>');
}).listen(3001)

