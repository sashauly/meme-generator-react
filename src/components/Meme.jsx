import React from "react";
import memesData from "../memesData.js";

/**
 * Challenge: Get a random image from the `memesData` array
 * when the "new meme image" button is clicked.
 *
 * Log the URL of the image to the console. (Don't worry
 * about displaying the image yet)
 */
export default function Meme() {
  function handleClick() {
    const memesArray = memesData.data.memes;
    const randomElement =
      memesArray[Math.floor(Math.random() * memesArray.length)];
    const url = memesArray[randomElement].url;
    console.log(url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form__input" placeholder="Top text" />
        <input type="text" className="form__input" placeholder="Bottom text" />
        <button className="form__button" onClick={handleClick}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
