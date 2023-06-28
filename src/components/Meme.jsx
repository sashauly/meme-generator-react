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
    const randomElement =
      memesArray[Math.floor(Math.random() * memesArray.length)].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomElement,
    }));
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form__input" placeholder="Top text" />
        <input type="text" className="form__input" placeholder="Bottom text" />
        <button className="form__button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} alt="" className="meme__image" />
    </main>
  );
}
