function React() {
  const rootElement = document.getElementById("root");
  let state = [];
  let setters = [];
  let deps = [];
  let depsCursor = 0;
  let cursor = 0;
  let reRenderCount = 0;
  let rootComponent;
  const render = (component) => {
    rootComponent = component;
    rootElement.appendChild(component());
    cursor = 0;
    depsCursor = 0;
  };
  const reRender = () => {
    reRenderCount += 1;
    cursor = 0;
    depsCursor = 0;
    rootElement.replaceChild(rootComponent(), rootElement.firstChild);
  };
  const createSetter = (index) => (newValue) => {
    if (typeof newValue === "function") {
      state[index] = newValue(state[index]);
    } else {
      state[index] = newValue;
    }
    reRender();
  };
  const useState = (initialState) => {
    if (reRenderCount === 0) {
      state.push(initialState);
      setters.push(createSetter(cursor));
    }
    const currentState = state[cursor];
    const currentSetter = setters[cursor];
    cursor += 1;
    return [currentState, currentSetter];
  };
  const useEffect = (callback, dependencies) => {
    if (reRenderCount === 0) {
      deps[depsCursor] = dependencies;
      callback();
    } else {
      const oldDependencies = deps[depsCursor];
      let hasChanged = !dependencies.every((dep, i) => {
        return Object.is(dep, oldDependencies[i]);
      });
      if (hasChanged) {
        deps[depsCursor] = dependencies;
        callback();
      }
    }
    depsCursor += 1;
  };
  const createElement = (type, props, ...children) => {
    const node = document.createElement(type);
    for (let prop in props) {
      if (prop === "className") {
        node.setAttribute("class", props[prop]);
      } else if (prop === "style") {
        // 스타일은 객체로 넘어오기 때문에 직접 넣어준다
        const style = props[prop];
        for (let key in style) {
          node.style[key] = style[key];
        }
      } else if (typeof props[prop] === "function") {
        // 이벤트 핸들러를 등록한다
        const event = prop.toLowerCase();
        node[event] = props[prop];
      } else {
        // 그외의 attribute
        node.setAttribute(prop, props[prop]);
      }
    }
    children.forEach((child) => {
      if (typeof child === "string" || typeof child === "number") {
        node.appendChild(document.createTextNode(child));
      } else {
        node.appendChild(child);
      }
    });
    return node;
  };
  return {
    render,
    useState,
    useEffect,
    createElement,
  };
}
export default React();
export const { render, useState, useEffect, createElement } = React();
