import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const clickHandlersub = () => {
    setCount(count - 1);
    console.log(count);
  };
  const clickHandleradd = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={clickHandlersub}>
          -
        </button>
        <button type="button" onClick={clickHandleradd}>
          +
        </button>
      </div>
    </div>
  );
}
