import React from "react";
import "./styles.css";

export default function App() {
  function handelClick() {
    console.log("You clicked");
  }
  return (
    <NewBut
      text="Ciao"
      color="red"
      disabled={false}
      onButtonclick={handelClick}
    />
  );
}

function NewBut({ color, text, disabled, onButtonclick }) {
  return (
    <button
      disabled={disabled}
      style={{ color, backgroundColor: "black", height: "100px" }}
      onClick={onButtonclick}
    >
      {text}
    </button>
  );
}
