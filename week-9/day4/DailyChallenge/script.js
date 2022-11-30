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

          let imageDiv = document.createElement('div');
          imageDiv.style.display = 'flex'
          imageDiv.style.flexDirection = 'column'
         

          let imageGif = document.createElement('img');
          imageGif.src = gifs[Math.floor((Math.random()*50))].images.original.url;
            
          imageDiv.style.width = '100px';
          imageGif.style.height = '100px';
          imageDiv.style.margin = '10px'
          let imageDelete = document.createElement('button');
          imageDelete.innerText = "Delete Gif"
          imageDelete.addEventListener('click', function(){ space.removeChild(imageDiv) })
          imageDiv.appendChild(imageGif)
          imageDiv.appendChild(imageDelete)
          space.appendChild(imageDiv)

          
       deleteButton.addEventListener('click', deleteGifs)
        function deleteGifs() {
        space.innerHTML = ""
        text.value = ""
        }  
    }
  }
  xhr.send()
}
