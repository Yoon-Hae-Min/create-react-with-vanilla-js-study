function React() {
  const rootElement = document.getElementById("root");
  let state;
  let reRenderCount = 0;
  let rootComponent;

  const render = (component) => {
    rootComponent = component;
    rootElement.innerHTML = component();
  };

  const reRender = () => {
    reRenderCount += 1;
    rootElement.innerHTML = rootComponent();
  };

  const useState = (initialState) => {
    if (reRenderCount === 0) state = initialState;
    const setState = (newState) => {
      state = newState;
      reRender();
    };
    return [state, setState];
  };

  return { render, useState };
}

export const { render, useState } = React();
