import { render } from "../Kreact";

export default function createRouter(root, routes = []) {
  const history = window.history;
  const routeMap = new Map();

  routes.forEach(({ pathname, element, children }) => {
    routeMap.set(pathname, { element, type: 'parent', parentPathname: null, outlet: false });

    children && children.forEach(({ pathname: childPathname, element }) => {
      if (childPathname.startsWith('/')) throw new Error('childPathname must not start with /');

      routeMap.set(pathname + childPathname, { element, type: 'child', parentPathname: pathname, outlet: false });
    });
  });

  function push(pathname, state) {
    history.pushState(state, null, pathname);

    routeMap.set(pathname, { ...routeMap.get(pathname), outlet: state?.outlet ?? false });

    _render(root, pathname);
  }

  window.addEventListener('popstate', () => {
    _render(root, window.location.pathname, true);
  });

  function _render(root, pathname, isPopState = false) {
    const { element, type, parentPathname, outlet } = routeMap.get(pathname);
    if (!element) throw new Error('NOT FOUND');

    if (isPopState) {

      const key = type === 'child' ? parentPathname : pathname;
      const { outlet } = routeMap.get(key);

      if (outlet) {
        document.getElementById(key).innerHTML = '';
        render(document.getElementById(key), element);

        return;
      }

      root.innerHTML = '';
      render(root, element);

      return;
    }

    if (outlet && type === 'parent') {
      render(document.getElementById(pathname), element);

      return;
    }

    if (type === 'child') {
      const { outlet } = routeMap.get(parentPathname)

      if (outlet) {
        document.getElementById(parentPathname).innerHTML = '';
        render(document.getElementById(parentPathname), element);

        return;
      }
    }

    root.innerHTML = '';
    render(root, element);
  }

  return {
    push,
    routes
  }
}