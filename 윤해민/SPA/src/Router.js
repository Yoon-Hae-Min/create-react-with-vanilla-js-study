import React, { reRender, reRenderCount } from "./React.js";

let currentPath = "/";

export const Route = ({ path, element }) => {
  if (path === currentPath) {
    return element;
  }
  return <></>;
};

export const Routes = ({ children }) => {
  if (reRenderCount < 1) {
    window.addEventListener("popstate", () => {
      currentPath = window.location.pathname;
      reRender();
    });
  }
  console.log(reRenderCount);
  return React.createElement(React.Fragment, null, ...children);
};

export const Link = ({ path, element }) => {
  const changePage = (e) => {
    e.preventDefault();
    currentPath = path;
    navigate(e.target.href);
  };
  return (
    <a href={path} onClick={changePage}>
      {element}
    </a>
  );
};

const navigate = (path) => {
  window.history.pushState(null, null, path);
  reRender();
};

export default Link;
