import { RouterContext } from "../../App";
import Kreact from "../Kreact";

export function Outlet({ pathname }) {
  setTimeout(() => {
    const router = Kreact.useContext(RouterContext);
    if (!router) {
      return;
    }
    const route = router.routes.find(route => route.pathname === pathname);

    if (!route) {
      throw new Error('NOT FOUND');
    }

    router.push(pathname, { outlet: true });
  }, 0);


  return <div id={pathname}></div>;
}

export default Outlet;
