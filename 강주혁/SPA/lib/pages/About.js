import Kreact from "../Kreact";
import NavBar from "../components/NavBar";
export default function About() {
  return Kreact.createElement("div", {
    style: {
      display: 'flex'
    }
  }, Kreact.createElement(NavBar, null), Kreact.createElement("h1", null, "About \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4."), Kreact.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"));
}