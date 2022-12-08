//🌟 Exercise 1: Conversion

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

async function conversion() {
  try {
    let data = await fetch("https://www.swapi.tech/api/starships/9/")
    if (data.status == 400) {
      throw new Error("API - wrong link")
    } else {
      let response = await data.json()
      console.log(response.result)
    }
  }
  catch(err) {
  console.log(err)
  }
}

conversion()

//🌟 Exercise 2: Analyze
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//Analyse the code provided above before executing it - what will be the outcome?
//calling
//...rest of the code from program runs
//resolved (after 2 seconds)