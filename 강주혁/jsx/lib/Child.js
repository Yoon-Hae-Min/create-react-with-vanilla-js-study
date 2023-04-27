import Kreact, { useState } from './Kreact.js';
export default function Child({
  name
}) {
  const [count, setCount] = useState(1);
  return Kreact.createElement(Kreact.fragment, null, Kreact.createElement("h2", null, "Child"), Kreact.createElement("p", null, "My name is ", name, "!"), Kreact.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px'
    }
  }, Kreact.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "+"), Kreact.createElement("p", null, count), Kreact.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "-")));
}