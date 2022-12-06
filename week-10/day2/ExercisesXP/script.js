//🌟 Exercise 1 : Comparison

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num < 10) {
      resolve("The Number Is less than 10. Correct");
    } else {
      reject("Rejected The number is greater than 10");
    }
  });
};

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))
  
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//🌟 Exercise 2 : Promises

let fourSeconds = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 4000);
    // setTimeout(() => {
    //   reject();
    // }, 3000);
}).then(result => console.log(result)).catch(result => console.log("Ooops something went wrong"))

let promise2 = Promise.resolve('success').then(result => console.log(result))

//🌟 Exercise 3 : Resolve & Reject

let three = Promise.resolve(3).then(result => console.log(result)) //to create a promise that will resolve itself with a value of 3.
let boo = Promise.reject("Boo").catch(result => console.log(result)) //to create a promise that will reject itself with the string “Boo!”
