import http from 'http';
//import Fireworks from 'fireworks-js';

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Hello')
        res.end()
    }
});

server.listen(3001) //local-host
console.log('Listening on port 3001...')


// const fireworks = new Fireworks()
// fireworks.start()