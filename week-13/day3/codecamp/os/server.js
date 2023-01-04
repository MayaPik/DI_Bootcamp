const http = require('http')

http.createServer((req,res) => {
    if (req.url === '/') {
    res.write('story')
    res.write('fairytale')
    res.end()
    } else {
        res.end('cant find what you looked for')
    }
}).listen(5004)

console.log(__dirname)
console.log(__filename)
//console.log(process)