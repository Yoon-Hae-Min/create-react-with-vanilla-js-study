import React, { render } from "./React.js";
import { Route, Routes } from "./Router.js";
import MainPage from "./pages/main.js";
import PostPage from "./pages/post.js";
import UserPage from "./pages/user.js";
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(MainPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/post",
    element: /*#__PURE__*/React.createElement(PostPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/user",
    element: /*#__PURE__*/React.createElement(UserPage, null)
  })));
}
render(App);