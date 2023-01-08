const fs = require('fs')

fs.readFile('text.txt','utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
})

fs.writeFile('new.txt', 'hello', function (err) {
    if (err) {
        console.error(err)
    }
});

fs.appendFile('new.txt', '\n Buy orange juice',function (err) {
    if (err) {
        console.error(err)
        return
    }
})

fs.unlink('new.txt', function (err) {
    console.log('deleted');
});