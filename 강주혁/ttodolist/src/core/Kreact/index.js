import { updateRealDOM, updateVirtualDOM } from "../KreactDOM";

function kreact() {
  const _states = [];
  let _stateIndex = 0;
  let _root = null;
  let _rootComponent = null;
  let _oldNode = null;
  let _newNode = null;
  let flag = false;

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

  function useContext(context) {
    return context._currentValue;
  }

  function createContext(defaultValue) {
    const context = {
      _currentValue: defaultValue,
      Provider: function ({ value, children }) {
        context._currentValue = value;
        return children;
      },
      Consumer: function ({ children }) {
        return children(context._currentValue);
      }
    };
    return context;
  }

  function createElement(type, config, ...children) {
    const props = {};
    let ref = null;
    let key = null;

    if (config !== null) {
      if (config.ref) ref = config.ref;
      if (config.key) key = config.key;

      for (let propName in config) {
        if (Object.hasOwnProperty.call(config, propName) && propName !== 'ref' && propName !== 'key') {
          props[propName] = config[propName];
        }
      }
    }

    props.children = children.reduce((array, child) => {
      if (typeof child !== 'object') {
        const el = {
          type: 'TEXT_ELEMENT',
          props: {
            nodeValue: child,
            children: [],
          }
        };
        return [...array, el];
      }

      if (Array.isArray(child)) return [...array, ...child];

      return [...array, child];
    }, []);

    if (typeof type === 'function') {
      if (typeof type === fragment) return fragment(props, key);

      const el = type(props);

      el.props = {
        ...el.props,
        ref,
        key,
      }

      return el;
    }

    const element = {
      type: type,
      props: {
        ...props,
        ref,
        key,
      }
    }

    return element;
  }

  function fragment(props, key) {
    const element = {
      type: 'FRAGMENT',
      props: {
        ...props,
        key,
      }
    }

    return element;
  }

  function _render() {
    console.log('렌더링')
    _newNode = _rootComponent();

    const commitMap = new Map();
    updateVirtualDOM(_root, _oldNode, _newNode, commitMap); // render phase
    updateRealDOM(commitMap); // commit phase

    _oldNode = _newNode;
  }

  function render(root, component) {
    _root = root;
    _rootComponent = component;
    _oldNode = null;

    _render();
  }

  return {
    useState, render, useContext, createContext, createElement, fragment
  };
}

const Kreact = kreact();

export const { useState, render, useContext, createContext, createElement, fragment } = Kreact;
export default Kreact;