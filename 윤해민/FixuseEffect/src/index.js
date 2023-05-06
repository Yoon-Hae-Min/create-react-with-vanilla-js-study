import Component from "./Component.js";
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

  useEffect(() => {
    console.log("state 값이 바뀌었습니다");
    setState2((pre) => pre - 1);
  }, [state]);

  useEffect(() => {
    if (state2 < -10) {
      console.log("그만좀 줄여!!");
    }
  }, [state2]);

  return (
    <div>
      <h1>useState</h1>
      <Component />
      <button
        id="btn1"
        onClick={handleIncrement}
        style={state % 2 === 0 ? { color: "red" } : { color: "white" }}
      >
        +
      </button>
      <button id="btn2" onClick={handleDecrement} style={{ color: "blue" }}>
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
