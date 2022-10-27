const numbers = [5,0,9,1,7,4,2,6,3,8];

let numbersArray = numbers.toString();

let numbersJoin = numbers.join(", ");

/*Using the .toString() method convert the array to a string.
Using the .join()method convert the array to a string. Try passing different values into the join.
Eg .join(“+”), .join(” “), .join(“”) */


function bubbleSort(array) {

    for(let i = 0; i < 2; i++){ //for every number- do this
        for( let m=0; m < (array.length-i); m++){ //brings every number again
            //console.log(array[m]);   5 0 9 1...
            //console.log(array[m+1]); 0 9 1 7...


            if (array[m+1] > array[m]) {
                let temp = array[m+1] // temp is the one we want to bring one place back
                array[m+1] = array[m] //switching
                array[m] = temp
                // 5, 9, 1.... 0
            }

    }

}
console.log(array);

}
bubbleSort(numbers);
