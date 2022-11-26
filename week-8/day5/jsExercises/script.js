//Question 1:
//Clean the room function:

function organizer(arr) {
    let newArr = [];
    arr.sort(function (a,b) {
        return a-b;
    });

    arr.forEach(number => {
       if (newArr.every(arro => arro.toString().includes(number) === false)) {
         let ans = (arr.filter(num => num === number))
         if (ans.length === 1) {
            let [b] = ans
            ans = b 
         }
         newArr.push(ans)
        }
        });
        return newArr
}

organizer([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20])


//[[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].


//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

function organizerBounos(arr) {
    let newArr = [];

    const nums = arr.filter(n => typeof n == "number").sort((a, b) => a - b); //takes all the numbers, sort them 
    
    nums.forEach(number => {
        if (newArr.every(arro => arro.toString().includes(number) === false)) {
          let ans = (arr.filter(num => num === number))
          if (ans.length === 1) {
             let [b] = ans
             ans = b 
          }
          newArr.push(ans)
         }
         });    

    const non_nums = arr.filter(x => typeof x != "number").sort(); // Store everything that is not a number in an array (and then sort lexicographically)
    const final = [[newArr], [non_nums]];

    
            return final
}

organizerBounos([1, "2", "3", 2] )

//[[1,2], ["2", "3"]]

//Question 2:
//Write a javascript function that takes an array of numbers and a target number.

    function findTheAns(arr, num) {
        arr.forEach(element => {
            let elemnt2 = num - element;
            if (arr.includes(elemnt2)) {
            ans = [element,elemnt2]
            }
        });
        return ans

    }

    findTheAns([1,2,3], 4)
//For example: findTheAns([1,2,3], 4) should return [1,3]



//Question 3:
//Write a function that converts HEX to RGB.
function convertor(main,g,b) {
    if (g===undefined) {
            const r = parseInt(main.slice(1, 3), 16);
            const g = parseInt(main.slice(3, 5), 16);
            const b = parseInt(main.slice(5, 7), 16);
           return { r, g, b };
        }  
      else {
        let arr = main.toString(16) + g.toString(16) + b.toString(16)
        return `#${arr}`
    
    }}
  console.log(convertor(28, 135, 201)); // #1c87c9
  console.log(convertor("#1c87c9")); // #1c87c9

