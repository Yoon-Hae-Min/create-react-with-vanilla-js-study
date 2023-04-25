import Kreact from './Kreact.js';
export default function Child({
  name
}) {
  return Kreact.createElement(Kreact.fragment, null, Kreact.createElement("h2", null, "Child"), Kreact.createElement("p", null, "My name is ", name, "!"));
}