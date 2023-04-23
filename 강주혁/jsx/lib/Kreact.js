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
    const setState = newState => {
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
      Provider: function ({
        value,
        children
      }) {
        context._currentValue = value;
        return children();
      },
      Consumer: function ({
        children
      }) {
        return children(context._currentValue);
      }
    };
    return context;
  }
  function createElement(type, config, ...children) {
    const props = {};
    const ref = null;
    const key = null;
    if (config !== null) {
      if (config.ref) ref = config.ref;
      if (config.key) key = config.key;
      for (let propName in config) {
        if (Object.hasOwnProperty.call(config, propName) && propName !== 'ref' && propName !== 'key') {
          props[propName] = config[propName];
        }
      }
    }
    if (typeof type === 'function') {
      const el = type(props);
      el.props = {
        ...el.props,
        ref,
        key
      };
      return el;
    }
    if (children.length === 1) {
      props.children = children[0];
    } else if (children.length > 1) {
      props.children = children;
    }
    const element = {
      type: type,
      props: {
        ...props,
        ref,
        key
      }
    };
    return element;
  }
  function _render() {
    console.log('렌더링');
    const createNode = element => {
      const newElement = document.createElement(element.type);
      Object.keys(element.props).forEach(prop => {
        if (prop === 'ref' || prop === 'key' || prop === 'children') return;
        const newAttribute = document.createAttribute(prop);
        newAttribute.value = element.props[prop];
        newElement.setAttributeNode(newAttribute);
      });
      if (element.props?.children) {
        if (typeof element.props.children !== 'object') {
          newElement.appendChild(document.createTextNode(element.props.children));
          return newElement;
        }
        if (!Array.isArray(element.props.children)) element.props.children = [element.props.children];
        element.props.children.forEach(child => typeof child === 'object' ? newElement.appendChild(createNode(child)) : newElement.appendChild(document.createTextNode(child)));
      }
      return newElement;
    };
    const newElement = createNode(_rootElement);
    _root.appendChild(newElement);
  }
  function render(root, Element) {
    _root = root;
    _rootElement = Element;
    _render();
  }
  return {
    useState,
    render,
    useContext,
    createContext,
    createElement
  };
}
const Kreact = kreact();
export const {
  useState,
  render,
  useContext,
  createContext,
  createElement
} = Kreact;
export default Kreact;