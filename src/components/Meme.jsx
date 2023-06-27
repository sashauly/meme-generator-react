import React from "react";

export default function Meme() {
  return (
    <main>
      <form action="#" className="form">
        <input type="text" className="form__input" placeholder="Top text" />
        <input type="text" className="form__input" placeholder="Bottom text" />
        <button type="submit" className="form__button">
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
}
