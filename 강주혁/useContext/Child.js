import { CountContext } from "./App.js";
import { useContext } from "./React.js";

export default function Child() {
  const { count, setCount } = useContext(CountContext);
  window.increase = () => setCount(count + 1);
  window.decrease = () => setCount(count - 1);

  return `
    <div>
      <p>${count}</p>
      <button onclick="increase()">증가</button>
      <button onclick="decrease()">감소</button>
    </div>
    
  `;
}