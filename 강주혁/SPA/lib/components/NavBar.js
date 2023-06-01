import Kreact from "../Kreact";
import { router } from "..";
export default function NavBar() {
  return Kreact.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      border: '1px solid black',
      padding: '10px',
      margin: '10px'
    }
  }, Kreact.createElement("li", {
    onClick: () => router.push('/')
  }, "home"), Kreact.createElement("li", {
    onClick: () => router.push('/about')
  }, "about"), Kreact.createElement("li", {
    onClick: () => router.push('/contact')
  }, "contact"));
}