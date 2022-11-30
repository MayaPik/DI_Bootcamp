//🌟 Exercise 1 : Giphy API

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My', true);

xhr.onload = function(){
  if(xhr.status != 200){
    console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
  }
  else{
     console.log(JSON.parse(xhr.response))
  }
}
xhr.send()

//🌟 Exercise 2 : Giphy API

let xhrSun = new XMLHttpRequest();
xhrSun.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My', true);

xhrSun.onload = function(){
  if(xhr.status != 200){
    console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
  }
  else{
     console.log(JSON.parse(xhrSun.response))
  }
}
xhrSun.send()