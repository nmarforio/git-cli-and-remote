import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? "Is Happy 😁" : "Is Sad 😭"}</h1>;
}
