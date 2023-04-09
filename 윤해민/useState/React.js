function React() {
  const rootElement = document.getElementById("root");
  let state = [];
  let setters = [];
  let cursor = 0;
  let reRenderCount = 0;
  let rootComponent;

  const render = (component) => {
    rootComponent = component;
    rootElement.innerHTML = component();
    cursor = 0;
  };

  const reRender = () => {
    reRenderCount += 1;
    cursor = 0;
    rootElement.innerHTML = rootComponent();
  };

  const createSetter = (index) => (newValue) => {
    state[index] = newValue;
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

  return { render, useState };
}

export const { render, useState } = React();
