import Kreact from './Kreact.js';
export default function Parent({
  name
}) {
  return Kreact.createElement("div", {
    style: "background-color: blue"
  }, Kreact.createElement("h1", null, "Parent: ", name));
}