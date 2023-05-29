import Kreact from './Kreact';
export default function Parent({
  children
}) {
  return Kreact.createElement("div", {
    style: "background-color: black; color: white"
  }, children);
}