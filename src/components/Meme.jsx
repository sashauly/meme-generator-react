import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomElement =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    setMemeImage(randomElement.url);
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
      <img src={memeImage} alt="" className="meme__image" />
    </main>
  );
}
