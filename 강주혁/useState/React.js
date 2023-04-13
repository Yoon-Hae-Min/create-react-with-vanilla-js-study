function React() {
  const _states = [];
  let _stateIndex = 0;
  let _component = null;
  let _root = null;

  function useState(initialState) {
    let stateIndex = _stateIndex++;

    if (_states[stateIndex] === undefined) {
      if (typeof initialState === 'function') initialState = initialState();
      _states[stateIndex] = initialState;
    }
    let state = _states[stateIndex];

    const setState = (newState) => {
      if (typeof newState === 'function') newState = newState(state);
      if (Object.is(_states[stateIndex], newState)) return;
      _states[stateIndex] = newState;
      _stateIndex = 0;
      _render();
    };

    return [state, setState];
  }

  function _render() {
    console.log('렌더링')
    _root.innerHTML = _component();
  }

  function render(root, Component) {
    _root = root;
    _component = Component;

    _render();
  }

  return {
    useState, render
  };
}

const { useState, render } = React();

export { useState, render };