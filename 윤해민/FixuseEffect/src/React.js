function React() {
  const rootElement = document.getElementById("root");
  // 실제로 랜더링 되는 DOM
  let state = [];
  // state를 저장하는 배열
  let setters = [];
  // state를 변경하는 함수를 저장하는 배열
  let hookQueue = [];
  // useEffect를 저장하는 배열
  let deps = [];
  // useEffect의 deps를 저장하는 배열
  let depsCursor = 0;
  // deps의 인덱스
  let cursor = 0;
  // state의 인덱스
  let reRenderCount = 0;
  // reRender가 실행된 횟수
  let rootComponent;

  const updateElement = (parent, oldNode, newNode, index = 0) => {
    if (!oldNode && newNode) {
      // 노드가 추가 되었을떄
      return parent.appendChild(newNode);
    } else if (!newNode && oldNode) {
      // 노드가 삭제 되었을때
      return parent.removeChild(parent.childNodes[index]);
    } else if (newNode.nodeType === 3 && oldNode.nodeType === 3) {
      // text 노드라면
      if (newNode.textContent !== oldNode.textContent) {
        return parent.replaceChild(newNode, parent.childNodes[index]);
      }
      return oldNode;
    } else if (newNode.nodeName !== oldNode.nodeName) {
      // 노드가 바뀌었을때
      const index = [...parent.childNodes].indexOf(oldNode);
      return oldNode.remove(), parent.appendChild(newNode, index);
    }
    updateAttribute(parent.childNodes[index], newNode, oldNode);
    const newLength = newNode.childNodes.length;
    const oldLength = oldNode.childNodes.length;
    // 자식 노드 탐색
    for (let i = 0; i < Math.max(newLength, oldLength); i++) {
      updateElement(oldNode, oldNode.childNodes[i], newNode.childNodes[i], i);
    }
  };

  const updateAttribute = (target, newNode, oldNode) => {
    const newNodeObj = Object.entries(newNode.attributes);
    const oldNodeObj = Object.entries(oldNode.attributes);
    for (const [index, attribute] of newNodeObj) {
      if (
        attribute.name === oldNodeObj[index][1].name &&
        attribute.value === oldNodeObj[index][1].value
      ) {
        continue;
      }
      target.setAttribute(attribute.name, attribute.value);
    }
  };

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
    updateElement(
      rootElement.childNodes[0],
      rootElement.childNodes[0],
      rootComponent()
    );
    while (hookQueue.length) {
      hookQueue.shift().callback();
    }
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
      hookQueue.push({ callback });
    } else {
      const oldDependencies = deps[depsCursor];
      let hasChanged = !dependencies.every((dep, i) => {
        return Object.is(dep, oldDependencies[i]);
      });
      if (hasChanged) {
        deps[depsCursor] = dependencies;
        hookQueue.push({ callback });
      }
    }
    depsCursor += 1;
  };

  const createElement = (type, props, ...children) => {
    if (typeof type === "function") {
      return type();
    }
    const node = document.createElement(type);

    for (let prop in props) {
      if (prop === "className") {
        node.setAttribute("class", props[prop]);
      } else if (prop === "style") {
        const style = props[prop];
        for (let key in style) {
          node.style[key] = style[key];
        }
      } else if (typeof props[prop] === "function") {
        const event = prop.toLowerCase();
        node[event] = props[prop];
      } else {
        node.setAttribute(prop, props[prop]);
      }
    }
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        node.appendChild(document.createTextNode(child));
      } else {
        node.appendChild(child);
      }
    }
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
