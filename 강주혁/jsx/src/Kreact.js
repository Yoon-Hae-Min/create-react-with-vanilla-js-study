function kreact() {
  const _states = [];
  let _stateIndex = 0;
  let _rootElement = null;
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

  function useContext(context) {
    return context._currentValue;
  }

  function createContext(defaultValue) {
    const context = {
      _currentValue: defaultValue,
      Provider: function ({ value, children }) {
        context._currentValue = value;
        return children();
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

    const createNode = (element) => {
      const { type, props } = element;
      if (type === 'TEXT_ELEMENT') return document.createTextNode(props.nodeValue);
      if (type === 'FRAGMENT') {
        const fragment = document.createDocumentFragment();
        props.children.forEach(child => {
          fragment.appendChild(createNode(child));
        });

        return fragment;
      }

      const newElement = document.createElement(type);

      Object.keys(props).forEach(prop => {
        if (prop === 'ref' || prop === 'key' || prop === 'children') return;
        if (prop === 'className') {
          newElement.setAttribute('class', props[prop]);
          return;
        }
        if (prop === 'style' && typeof props[prop] === 'object') {
          const style = props[prop];
          Object.keys(style).forEach(styleName => {
            newElement.style[styleName] = style[styleName];
          });
          return;
        }

        if (prop.startsWith('on')) {
          const eventName = prop.substring(2).toLowerCase();
          newElement.addEventListener(eventName, props[prop]);
          return;
        }

        const newAttribute = document.createAttribute(prop);
        newAttribute.value = props[prop];
        newElement.setAttributeNode(newAttribute);
      });

      props.children.forEach(child => {
        newElement.appendChild(createNode(child));
      });

      return newElement;
    }

    const newElement = createNode(_rootElement());

    _root.firstChild ? _root.replaceChild(newElement, _root.firstChild) : _root.appendChild(newElement);
  }

  function render(root, Element) {
    _root = root;
    _rootElement = Element;

    _render();
  }

  return {
    useState, render, useContext, createContext, createElement, fragment
  };
}

const Kreact = kreact();

export const { useState, render, useContext, createContext, createElement, fragment } = Kreact;
export default Kreact;