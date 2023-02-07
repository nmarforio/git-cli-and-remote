import React from "react";
import "./styles.css";

export default function App() {
  return <NewArticle />;
}

function NewArticle() {
  return (
    <article className="article">
      <h2 className="article__title">Hello Everyone</h2>
      <label htmlFor="me">Input</label>
      <input id="me" type="text"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Ceramic_glaze"
      >
        Glazing
      </a>
    </article>
  );
}
