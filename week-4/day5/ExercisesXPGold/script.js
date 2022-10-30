let stringOf = " ";


function number(num) {
    stringOf += num;
    return document.getElementById("line").innerHTML = stringOf;
}

function operator(operator) { 
    stringOf += operator;
    return document.getElementById("line").innerHTML = stringOf;

}

function equal() {
    return document.getElementById("line").innerHTML = eval(stringOf);

}

function reset() {
    stringOf= "";
    return document.getElementById("line").innerHTML = stringOf;

}

function deleteLast() {
    stringOf = stringOf.substring(0, stringOf.length - 1);
    return document.getElementById("line").innerHTML = stringOf;

}

