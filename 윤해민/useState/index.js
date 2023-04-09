import { useState, render } from "./React.js";

function App() {
  const [state, setState] = useState(35);
  const [state2, setState2] = useState(0);

  const handleIncrement = () => {
    setState(state + 1);
  };
  const handleDecrement = () => {
    setState(state - 1);
  };

  const handleIncrement2 = () => {
    setState2(state + 1);
  };
  const handleDecrement2 = () => {
    setState2(state - 1);
  };
  window.increment = handleIncrement;
  window.decrease = handleDecrement;
  window.increment2 = handleIncrement2;
  window.decrease2 = handleDecrement2;

  return `
    <div>
      <h1>useState</h1>
      <button id="btn" onClick="increment()">+</button>
      <button id="btn" onClick="decrease()">-</button>
      <span>${state}</span>
      <button id="btn" onClick="increment2()">+</button>
      <button id="btn" onClick="decrease2()">-</button>
      <span>${state2}</span>
    </div>
  `;
}

render(App);
