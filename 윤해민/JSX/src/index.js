import React, { useState, render, useEffect } from "./React.js";

function App() {
  const [state, setState] = useState(35);
  const [state2, setState2] = useState(0);

  function handleIncrement() {
    setState((pre) => pre + 1);
  }
  function handleDecrement() {
    setState((pre) => pre - 1);
  }

  function handleIncrement2() {
    setState2((pre) => pre + 1);
  }
  function handleDecrement2() {
    setState2((pre) => pre - 1);
  }

  return (
    <div>
      <h1>useState</h1>
      <button id="btn1" onClick={handleIncrement}>
        +
      </button>
      <button id="btn2" onClick={handleDecrement}>
        -
      </button>
      <span>{state}</span>
      <button id="btn3" onClick={handleIncrement2}>
        +
      </button>
      <button id="btn4" onClick={handleDecrement2}>
        -
      </button>
      <span>{state2}</span>
    </div>
  );
}

render(App);
