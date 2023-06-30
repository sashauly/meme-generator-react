import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="container">
        <div className="wrapper">
          <div className="form">
            <input
              type="text"
              name="topText"
              placeholder="Top text"
              className="form--input"
              onChange={handleChange}
              value={meme.topText}
            />
            <input
              type="text"
              name="bottomText"
              placeholder="Bottom text"
              className="form--input"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </div>
          <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
          <button className="meme--button" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
      </div>
    </main>
  );
}
