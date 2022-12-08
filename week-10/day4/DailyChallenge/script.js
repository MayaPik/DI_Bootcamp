//1st Challenge- Use Promise.all

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

async function promising() {
  let result = await Promise.all([promise1, promise2, promise3])
  console.log(result)
}

promising()

//promise all waits for all the promises and return them as array like we asked: [promise1, promise2, promise3]
//promise 1- the 0 of the array is 3, promise 2- 42, promise 3- tell the computer to resolve it after 3 seconds with the value "foo"

//2nd Challenge

const formData = document.getElementById('form')
const latOne = document.getElementById('latOne')
const lonOne = document.getElementById('lonOne')
const latTwo = document.getElementById('latTwo')
const lonTwo = document.getElementById('lonTwo')
formData.addEventListener('submit', getValues)

async function getValues(e) {
  e.preventDefault()
  try {

    const links = [
      `https://api.sunrise-sunset.org/json?lat=${latOne.value}&lng=${lonOne.value}`, 
      `https://api.sunrise-sunset.org/json?lat=${latTwo.value}&lng=${lonTwo.value}`
    ]    
    const promises = await Promise.all(links.map(url => fetch(url)))
    const [first,second] = await Promise.all(promises.map(each => each.json()))

    console.log("sunrise of the first place is at " + first.results.sunrise + " and sunset is at " + first.results.sunset)
    console.log("sunrise of the second place is at " + second.results.sunrise + " and sunset is at " + second.results.sunset)

  }
  catch(err) {
  console.log(err)
  }
  }