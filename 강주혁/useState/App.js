import { useState } from "./React.js";

export default function App() {
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState(() => '강주혁');

  window.setName = (name) => setName(name);
  window.setToggle = () => setToggle((prev) => !prev);
  window.increment = () => setCount(count + 1);
  window.equal = () => setCount(count);
  window.decrement = () => setCount(count - 1);

  return `
        <div>
          <h1>useState</h1>
          <p>이름: ${name}</p>
          <p>현재 카운트: ${count}</p>
          <button onclick="increment()">증가</button>
          <button onclick="equal()">동일</button>
          <button onclick="decrement()">감소</button>
          <button onclick="setToggle()">${toggle}</button>
        </div>
      `;

}