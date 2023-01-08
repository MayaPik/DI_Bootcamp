const fs = require('fs')
//1
fs.readFile('Right-Left_Week7JS/RightLeft.txt','utf-8', function(err,res) {
    if (err) {
        console.error(err)
        return
    }
    let total = 1
   const data = [...res]
   data.forEach(sign => {
    if (sign == '>') {
       total++
    } else {
       total--
    }
   });
   console.log(total)
})

//2
fs.readFile('Right-Left_Week7JS/RightLeft.txt','utf-8', function(err,res) {
    if (err) {
        console.error(err)
        return
    }
    let total = 0
    let step = 0
    let minonereached = false;

   const data = [...res]
   data.forEach(sign => {
    if (sign == '>') {
       total++
       step++
    } else if (sign == '<')  {
       total--
       step++
    }
    if (total === -1 && minonereached == false) {
        console.log(`reached position -1 at character number ${step}`);
        minonereached = true
    }
   });
})

