import Kreact from "../Kreact";
import NavBar from "../components/NavBar";
export default function Home() {
  return Kreact.createElement("div", {
    style: {
      display: 'flex'
    }
  }, Kreact.createElement(NavBar, null), Kreact.createElement("section", null, Kreact.createElement("h1", null, "\uBA54\uC778 \uD398\uC774\uC9C0 \uC785\uB2C8\uB2E4."), Kreact.createElement("p", null, "ASDFASDF")));
}