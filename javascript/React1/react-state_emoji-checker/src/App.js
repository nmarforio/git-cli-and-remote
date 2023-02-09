import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("?");

  const validCode = "🐡🐠🐋";

  const handlerclick = (fishemoji) => {
    if (code === "?") {
      setCode(fishemoji);
    } else {
      setCode(code + fishemoji);
    }
  };
  const resetCode = () => {
    setCode("?");
    console.log(code);
  };
  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handlerclick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handlerclick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handlerclick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={resetCode}>
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
