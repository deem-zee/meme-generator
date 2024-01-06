
import React from "react";
export default function Meme() {
  

const [meme, setMeme] = React.useState({
  topText: '',
  bottomText: '',
  randomImage: 'http://i.imgflip.com/1bij.jpg'
})

const [allMemeImages, setMemeImages] = React.useState([])

React.useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => setMemeImages(data.data.memes))
}, [])

function handleChange(event) {
  const {name, value} = event.target;
  setMeme(prevValue => {
    return {
      ...prevValue,
      [name]: value
    }
  })
}


  function getMemeImage(e) {
    e.preventDefault();
    const memesArray = allMemeImages;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((oldVal) => ({
      ...oldVal,
      randomImage: url
    }))

}

console.log(meme)
  return (
    <main>
      <form className="generator">
        <div className="generator-toptext">
          <label htmlFor="toptext">Top text</label>
          <input
            type="text"
            name="topText"
            id="toptext"
            value={meme.topText}
            onChange={handleChange}/>
        </div>
        <div className="generator-bottext">
          <label htmlFor="bottext">Bottom text</label>
          <input
            type="text"
            name="bottomText"
            id="bottext"
            value={meme.bottomText}
            onChange={handleChange}/>
        </div>
        <button 
          onClick={getMemeImage}
          className="generator-generate">
            <span>Get a new meme image</span>
            <img src="https://smaylikivk.ru/media/smiles/1f5bc-kartina.png" alt="pic-frame emoji"  className="generator-generate-img"/>
        </button>   
      </form>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme-image"/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
      
    </main>
  )
}