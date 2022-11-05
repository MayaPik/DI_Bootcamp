//Declare a global variable named allBoldItems.
let allBoldItems = [];

//Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

function getBold_items() {
    let boldList = document.querySelectorAll('strong')

    for (let i=0; i< boldList.length; i++) {
    let bold = boldList[i].innerHTML;
    allBoldItems.push(bold);
    }
    return allBoldItems;

}

getBold_items()

//Create a function called highlight() that changes the color of all the bold text to blue.


function highlight() {
    let boldList = document.querySelectorAll('strong')

    for (let i=0; i< boldList.length; i++) {
        boldList[i].style.color = 'blue';
    }
}


//Create a function called return_normal() that changes the color of all the bold text back to black.


function return_normal() {
    let boldList = document.querySelectorAll('strong')

    for (let i=0; i< boldList.length; i++) {
        boldList[i].style.color = 'black';
    }
}


//Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), 
//and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). 

let allText = document.getElementsByTagName('p')[0]

allText.addEventListener("mouseover", highlight);
allText.addEventListener("mouseout", return_normal);

