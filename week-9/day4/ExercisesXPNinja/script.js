let form = document.forms[0];
let deleteButton = document.getElementById('delete');
let text = document.getElementById('text');
let space = document.getElementById('space')
form.addEventListener('submit', sendWord)

function sendWord(e) {
  e.preventDefault()
  let word = text.value
  let xhr = new XMLHttpRequest();

  xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`, true);

  xhr.onload = function(){
    if(xhr.status != 200){
      console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
    }
    else{
       let gifs = JSON.parse(xhr.response).data
       console.log(gifs)
       if (space.innerHTML === "") {
          gifs.forEach(gif => {
          let imageGif = document.createElement('img');
          imageGif.src = gif.images.original.url
          imageGif.style.width = '100px'
          imageGif.style.height = '100px'
          space.appendChild(imageGif)
          });
        }
       deleteButton.addEventListener('click', deleteGifs)
        function deleteGifs() {
        gifs = [];
        space.innerHTML = ""
        text.value = ""
        }  
    }
  }
  xhr.send()
}
