import Kreact, { render } from "./Kreact";
import createRouter from "./Kreact-router";
import About from "./pages/About";
import Home from "./pages/Home";
export const router = createRouter(document.getElementById('root'), [{
  pathname: '/',
  element: Home
}, {
  pathname: '/about',
  element: About
}, {
  pathname: '/contact',
  element: '<h1>Contact</h1>'
}]);
const root = document.getElementById('root');
render(root, Home);