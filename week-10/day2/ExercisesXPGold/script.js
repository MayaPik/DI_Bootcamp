const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/people/4'
  ]

let requests = urls.map(url => fetch(url));


Promise.all(requests).then(respones => respones.forEach(respone => {
    console.log(respone)
})).catch(error => console.log("Failed, the error is - " + error))