let keyboards = document.getElementsByClassName('box')
let sounds = document.getElementsByTagName('audio')

for (let element of keyboards) {
    element.addEventListener('click', playsound);
    let ClassOfElement = element.getAttribute('class');
    function playsound(event) {
      for (let i=0; i< sounds.length; i++) {
        let SoundOfElement = sounds[i].getAttribute('class');
        if (ClassOfElement.includes(SoundOfElement)){
        sounds[i].currentTime = 0;
        sounds[i].play()
    }
    }
   
    event.preventDefault();
}

document.addEventListener('keydown', (event) => {
    let x = event.key + "1";
    
    if (ClassOfElement.includes(x)) { 
        element.setAttribute('class', 'box active')

        for (let j=0; j< sounds.length; j++) {
            let SoundOfElement = sounds[j].getAttribute('class');
            if (ClassOfElement.includes(SoundOfElement)){
            sounds[j].currentTime = 0;
            sounds[j].play(); 

    }
} }
});

document.addEventListener('keyup', (event) => {
    let x = event.key + "1";
    if (ClassOfElement.includes(x)) { 
        element.setAttribute('class', 'box')
}
});
}



    
