import Kreact from "../Kreact";

const getElementWithStyle = (element, props, oldProps) => {
  Object.keys(props).forEach(prop => {
    if (prop === 'ref' || prop === 'key' || prop === 'children') return;
    if (prop === 'className') {
      element.setAttribute('class', props[prop]);
      return;
    }
    if (prop === 'style' && typeof props[prop] === 'object') {
      const style = props[prop];
      Object.keys(style).forEach(styleName => {
        element.style[styleName] = style[styleName];
      });
      return;
    }
    if (prop.startsWith('on')) {
      const eventName = prop.substring(2).toLowerCase();
      if (oldProps) element.removeEventListener(eventName, oldProps[prop]);
      element.addEventListener(eventName, props[prop]);
      return;
    }

    const newAttribute = document.createAttribute(prop);
    newAttribute.value = props[prop];
    element.setAttributeNode(newAttribute);
  });

  return element;
}

export function createVirtualDOM(element) {
  const { type, props } = element;

  if (type === 'TEXT_ELEMENT') return document.createTextNode(props.nodeValue);
  if (type === 'FRAGMENT') {
    const fragment = document.createDocumentFragment();
    props.children.forEach(child => fragment.appendChild(createVirtualDOM(child)));

    return fragment;
  }

  const newElement = getElementWithStyle(document.createElement(type), props);

  props.children.forEach(child => {
    if (!child.type) return;
    newElement.appendChild(createVirtualDOM(child));
  });

  return newElement;
};

export function updateVirtualDOM(root, oldNode, newNode, commitMap, index = 0) {
  if (!oldNode) return commitMap.set('appendChild', { root, child: createVirtualDOM(newNode) });
  if (!newNode) return commitMap.set('removeChild', { root, child: root.childNodes[index] });
  if (oldNode.type !== newNode.type) return commitMap.set('replaceChild', { root, newChild: createVirtualDOM(newNode), oldChild: root.childNodes[index] });

  if (
    oldNode.type === 'TEXT_ELEMENT'
    && newNode.type === 'TEXT_ELEMENT'
    && oldNode.props.nodeValue !== newNode.props.nodeValue
  ) {
    const newElement = createVirtualDOM(newNode);
    return commitMap.set('replaceChild', { root, newChild: newElement, oldChild: root.childNodes[index] });
  }

  const oldProps = oldNode.props;
  const newProps = newNode.props;
  if (oldNode.type !== 'TEXT_ELEMENT' && oldNode.type !== 'FRAGMENT') {
    getElementWithStyle(root.childNodes[index], newProps, oldProps);
  }

  const max = Math.max(oldProps.children.length, newProps.children.length);

  for (let i = 0; i < max; i++) {
    updateVirtualDOM(
      oldNode.type === 'FRAGMENT' ? root : root.childNodes[index],
      oldProps.children[i],
      newProps.children[i],
      commitMap,
      i
    );
  }

  return root;
}

export function updateRealDOM(commitMap) {
  commitMap.forEach((value, key) => {
    switch (key) {
      case 'appendChild':
        value.root.appendChild(value.child);
        break;
      case 'removeChild':
        value.root.removeChild(value.child);
        break;
      case 'replaceChild':
        value.root.replaceChild(value.newChild, value.oldChild);
        break;
    }
  });
}