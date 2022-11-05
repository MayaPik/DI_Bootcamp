let totalTip = document.getElementById('totalTip');
totalTip.style.display = 'none';


function calculateTip() {

let billAmount = document.getElementById('billAmt').value;

let serviceQuality = document.getElementById('serviceQual').value;

let numberOfPeople = document.getElementById('numOfPeople').value;


if (serviceQuality == 0 || billAmount == "") {
    alert("Plese enter all the information");
}

if (numberOfPeople < 1) {
    numberOfPeople = 1;
}


let total = (( billAmount * serviceQuality ) / numberOfPeople).toFixed(2) ; 
totalTip.style.display = 'block';

let tip = document.getElementById('tip');
tip.innerText = total;

}
