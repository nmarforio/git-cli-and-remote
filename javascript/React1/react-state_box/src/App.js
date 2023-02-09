import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setActive] = useState(false);
  const [text, setText] = useState(true);

  function handleClick() {
    setActive(!isActive);
    setText(!text);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{text ? "Activate" : "Deactivate"}</button>
    </main>
  );
}
