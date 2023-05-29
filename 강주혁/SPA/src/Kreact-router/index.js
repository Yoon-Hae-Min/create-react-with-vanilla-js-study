import { render } from "../Kreact";

export default function createRouter(root, routes = []) {
  const history = window.history;
  const routeMap = new Map();

  routes.forEach(({ pathname, element }) => {
    routeMap.set(pathname, element);
  });

  function push(pathname, state) {
    history.pushState(state, null, pathname);

    _render(root, pathname);
  }

  window.addEventListener('popstate', () => {
    _render(root, window.location.pathname);
  });

  function _render(root, pathname) {
    const element = routeMap.get(pathname);
    if (!element) throw new Error('NOT FOUND');

    root.innerHTML = '';
    render(root, element);
  }

  return {
    push,
    routes
  }
}