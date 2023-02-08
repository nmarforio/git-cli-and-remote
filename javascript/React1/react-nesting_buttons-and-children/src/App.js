import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Amici</Button>
      <Button>Hello</Button>
      <Button>Hola</Button>
      <Button>Friends</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
