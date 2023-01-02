const largeNumber = require('./main').largeNumber;
const b = 5;

let result = largeNumber + b

let http = require('http');

http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body>My Module is <br> ${result}<h1>Hi there at the frontend</h1></body></html>`);
    console.log('listeing on port 300...')

}).listen(3000); 

const currentTime = require('./main').currentTime();
console.log(currentTime)
http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>${currentTime}</h1></body></html>`);
    console.log('listeing on port 8080...')

}).listen(8080); 
