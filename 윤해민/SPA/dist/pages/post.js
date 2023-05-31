import React from "../React.js";
import { Link } from "../Router.js";
const PostPage = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "post \uD398\uC774\uC9C0 \uC785\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Link, {
    path: "/post",
    element: "post 페이지"
  }), /*#__PURE__*/React.createElement(Link, {
    path: "/",
    element: "main 페이지"
  }), /*#__PURE__*/React.createElement(Link, {
    path: "/user",
    element: "user 페이지"
  }));
};
export default PostPage;