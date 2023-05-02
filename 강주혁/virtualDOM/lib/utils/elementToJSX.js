import Kreact from "../Kreact/Kreact.js";
const elementToJSX = element => {
  return Kreact.createElement(Kreact.fragment, null, element);
};
export default elementToJSX;