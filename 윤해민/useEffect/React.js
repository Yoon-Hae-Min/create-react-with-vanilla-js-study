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
    rootElement.innerHTML = component();
    cursor = 0;
    depsCursor = 0;
  };

  const reRender = () => {
    reRenderCount += 1;
    cursor = 0;
    depsCursor = 0;
    rootElement.innerHTML = rootComponent();
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

  return { render, useState, useEffect };
}

export const { render, useState, useEffect } = React();
