import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);
  function handleAdd() {
    setPeople(people + 1);
  }
  function handelSub() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={handleAdd} onSub={handelSub} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
