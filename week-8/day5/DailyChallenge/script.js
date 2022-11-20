let arr = []

function allTruthy(a, b, c) {
    for (i=0; i< arguments.length; i++) {
arr.push(arguments[i])
    }
    console.log(arr.every(element => element == true)); 


}

allTruthy(true, true, true, true, true)
