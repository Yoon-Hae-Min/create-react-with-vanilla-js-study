import Kreact, { render } from "./Kreact";
import createRouter from "./Kreact-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


export const router = createRouter(document.getElementById('root'),
  [
    {
      pathname: '/',
      element: Home,
    },
    {
      pathname: '/about',
      element: About,
    },
    {
      pathname: '/contact',
      element: Contact,
    },
  ]
);

console.log('하이')

const root = document.getElementById('root');
render(root, Home);
