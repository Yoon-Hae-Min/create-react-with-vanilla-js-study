import App from "./App.js";
import Kreact, { render } from "./Kreact.js";
const root = document.getElementById('root');
render(root, Kreact.createElement(App, null));