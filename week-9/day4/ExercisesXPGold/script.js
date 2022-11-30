
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My', true);

xhr.onload = function(){
  if(xhr.status != 200){
    console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
  }
  else{
     let gifs = JSON.parse(xhr.response).data
     console.log(gifs)
     let imageGif = document.createElement('img');
     imageGif.src = gifs[Math.floor((Math.random()*50))].images.original.url
     document.body.appendChild(imageGif)
  }
}
xhr.send()