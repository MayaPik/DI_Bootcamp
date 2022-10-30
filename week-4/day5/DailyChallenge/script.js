let arr = prompt("Enter several words (separated by commas)").split(",");
let startsOfFirst = "****";

function longest_str_in_array(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (let j = 0; j < arra.length; j++) {
        let maxi = arra[j].length;
        if (maxi > max_str) {
            ans = arra[j];
            max_str = maxi;
        }
    }
    return ans;
}

 x = longest_str_in_array(arr);

 let FirstNum = x.length ;


for (let k=0; k < FirstNum; k++) {
    startsOfFirst += "*";
}
console.log (startsOfFirst) 



for (let i=0; i<arr.length; i++) {  
let spacesNum = (x.trim(" ").length - arr[i].trim(" ").length); 
let SpacesOfEnd = " ";
    for (let m=0; m<spacesNum; m++) {
        SpacesOfEnd += " ";
    }
    console.log("* " + arr[i].trim(" ") + SpacesOfEnd + " *");
}


console.log (startsOfFirst)




/*
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you:

Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:*/