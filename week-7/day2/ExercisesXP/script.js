// Exercise 1 : Scope

//#1
function funcOne() {
  let a = 5;
  if(a > 1) {
      a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}


// #1.1 - run in the console:
funcOne() 
// #1.2 What will happen if the variable is declared //a = 3
// with const instead of let ? //not working

//#2
const b = 0;
function funcTwo() {
  b = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${b}`);
}

// #2.1 - run in the console:
funcThree() //b=0
funcTwo() //b=5 
funcThree() //none
// #2.2 What will happen if the variable is declared 
// with const instead of let ? -> only the first one will run


//#3
function funcFour() {
  window.a = "hello";
}


function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() //not working
funcFive() //hello


//#4
const c = 1;
function funcSix() {
  const c = "test";
  alert(`inside the funcSix function ${c}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ? //same


//#5
let a = 2;
if (true) {
  let a = 5;
  alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? //same