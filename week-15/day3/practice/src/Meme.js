import React, { useState } from 'react';
import './Meme.css'
const Meme = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [randomImage, setRandomImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTopText(document.getElementById("top").value)
    setBottomText(document.getElementById("bottom").value)
    setRandomImage('https://i.imgflip.com/1bij.jpg');
};


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Top Text" id='top'/>
        <input type="text" placeholder="Bottom Text" id='bottom'/>
        <button type="submit">Generate Meme</button>
      </form>
      {randomImage && (
        <div>
         <div className='top'>{topText}</div>
          <img src={randomImage} alt="Random Meme" />
          <div className='bottom'>{bottomText}</div>
        </div>
      )}
    </div>
  );
};

export default Meme;
