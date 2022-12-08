//Exercise 1: Analyze #2

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }

// sequentialStart()

// Analyse the code provided above before executing it - what will be the outcome?
// '==SEQUENTIAL START=='
// "starting slow promise"
//"slow promise is done"
//slow
//starting fast promise
//fast

//Exercise 2: Analyze #3


// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)
//Analyse the code provided above before executing it - what will be the outcome?
//==CONCURRENT START with await==
//starting slow promise
//starting fast promise
//fast promise is done
//slow promise is done
//slow
//fast

//Exercise 3 : Modify Fetch With Async/Await


const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
      ];

async function getData() {
  try {
    const promises = await Promise.all(urls.map(url => fetch(url)))
    // const [ users, posts, albums ] = await Promise.all(promises.map(each => each.json()))

    //   console.log('users', users);
    //   console.log('posta', posts);
    //   console.log('albums', albums);
    for await (let each of promises) {
      const data = await each.json()
      console.log(data)
    }
  }
  catch(err) {
  console.log(err)
  }
}

getData()