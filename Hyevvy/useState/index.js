import { useState, currentStateKey, render } from "./React.js";

export function Counter() {
  const [count, setCount] = useState(1);

  window.increment = () => setCount(count + 1);

  return `
    <div>
      <strong>count: ${count} </strong>
      <button onclick="increment()">증가</button>
    </div>
  `;
}

export function Cat() {
  const [cat, setCat] = useState("고양이");

  window.meow = () => setCat(cat + " 야옹!");

  return `
    <div>
      <strong>${cat}</strong>
      <button onclick="meow()">고양이의 울음소리</button>
    </div>
  `;
}

render();
