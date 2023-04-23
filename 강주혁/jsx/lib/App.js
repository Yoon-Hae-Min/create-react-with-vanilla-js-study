import Kreact from './Kreact.js';
import Parent from './Parent.js';
export default function App() {
  const name = '강주혁';
  return Kreact.createElement("div", null, Kreact.createElement("h1", null, "App"), Kreact.createElement(Parent, {
    name: name
  }));
}