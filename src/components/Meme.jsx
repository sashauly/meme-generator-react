import React from "react";

export default function Meme() {
  return (
    <main>
      <div className="form">
        <input type="text" className="form__input" placeholder="Top text" />
        <input type="text" className="form__input" placeholder="Bottom text" />
        <button className="form__button">Get a new meme image 🖼</button>
      </div>
    </main>
  );
}
