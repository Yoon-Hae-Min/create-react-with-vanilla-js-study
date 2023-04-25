import Kreact from './Kreact.js';
import Child from './Child.js';
import Parent from './Parent.js';
export default function App() {
  const name = '강주혁';
  return Kreact.createElement("div", null, Kreact.createElement("h1", {
    style: {
      color: 'red'
    }
  }, "App"), Kreact.createElement(Parent, null, Kreact.createElement(Child, {
    name: name
  })));
}