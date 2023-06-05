import React, { render, useEffect } from "./React.js";

let currentPath = window.location.pathname;

export const Route = ({ path, element }) => {
  if (path === currentPath) {
    return element;
  }
  return <></>;
};

export const Routes = ({ children }) => {
  useEffect(() => {
    window.addEventListener("popstate", () => {
      currentPath = window.location.pathname;
      render();
    });
  }, []);
  return React.createElement(React.Fragment, null, ...children);
};

export const Link = ({ path, element, style }) => {
  const changePage = (e) => {
    e.preventDefault();
    currentPath = path;
    navigate(e.target.href);
  };
  return (
    <a href={path} onClick={changePage} style={style}>
      {element}
    </a>
  );
};

const navigate = (path) => {
  window.history.pushState(null, null, path);
  render();
};

export default Link;
