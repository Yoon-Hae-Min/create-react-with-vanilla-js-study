import React, { useState, render, useEffect } from "./React.js";
function App() {
  const [state, setState] = useState(35);
  const [state2, setState2] = useState(0);
  function handleIncrement() {
    setState(pre => pre + 1);
  }
  function handleDecrement() {
    setState(pre => pre - 1);
  }
  function handleIncrement2() {
    setState2(pre => pre + 1);
  }
  function handleDecrement2() {
    setState2(pre => pre - 1);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "useState"), /*#__PURE__*/React.createElement("button", {
    id: "btn1",
    onClick: handleIncrement,
    style: state % 2 === 0 ? {
      color: "red"
    } : {
      color: "white"
    }
  }, "+"), /*#__PURE__*/React.createElement("button", {
    id: "btn2",
    onClick: handleDecrement,
    style: {
      color: "blue"
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, state), /*#__PURE__*/React.createElement("button", {
    id: "btn3",
    onClick: handleIncrement2
  }, "+"), /*#__PURE__*/React.createElement("button", {
    id: "btn4",
    onClick: handleDecrement2
  }, "-"), /*#__PURE__*/React.createElement("span", null, state2));
}
render(App);