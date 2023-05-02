export function createVirtualDOM(element) {
  const {
    type,
    props
  } = element;
  if (type === 'TEXT_ELEMENT') return document.createTextNode(props.nodeValue);
  if (type === 'FRAGMENT') {
    const fragment = document.createDocumentFragment();
    props.children.forEach(child => {
      fragment.appendChild(createVirtualDOM(child));
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
    newElement.appendChild(createVirtualDOM(child));
  });
  return newElement;
}
;
export function updateRealDOM(newElement, container) {
  if (!container.firstChild) return container.appendChild(newElement);
  return container.replaceChild(newElement, container.firstChild);
}
export function updateVirtualDOM(root, oldNode, newNode, index = 0) {
  console.log('updateVirtualDOM', root, oldNode, newNode);
  if (!oldNode) return root.appendChild(createVirtualDOM(newNode));
  if (!newNode) return root.removeChild(root.childNodes[index]);
  if (oldNode.type !== newNode.type) return root.replaceChild(createVirtualDOM(newNode), root.childNodes[index]);
  if (oldNode.type === 'TEXT_ELEMENT' && newNode.type === 'TEXT_ELEMENT') {
    console.log(root, oldNode, newNode);
    if (oldNode.props.nodeValue !== newNode.props.nodeValue) {
      console.log('텍스트 업데이트');
      const newElement = createVirtualDOM(newNode);
      return root.replaceChild(newElement, root.childNodes[index]);
    }
  }
  if (oldNode.type === 'FRAGMENT') {
    const oldChildren = oldNode.props.children;
    const newChildren = newNode.props.children;
    const max = Math.max(oldChildren.length, newChildren.length);
    for (let i = 0; i < max; i++) {
      updateVirtualDOM(root, oldChildren[i], newChildren[i], i);
    }
    return root;
  }
  const oldProps = oldNode.props;
  const newProps = newNode.props;
  if (oldNode.type !== 'TEXT_ELEMENT') {
    Object.keys(newProps).forEach(prop => {
      if (prop === 'ref' || prop === 'key' || prop === 'children') return;
      if (prop === 'className') {
        root.childNodes[index].setAttribute('class', newProps[prop]);
        return;
      }
      if (prop === 'style' && typeof newProps[prop] === 'object') {
        const style = newProps[prop];
        Object.keys(style).forEach(styleName => {
          root.childNodes[index].style[styleName] = style[styleName];
        });
        return;
      }
      if (prop.startsWith('on')) {
        const eventName = prop.substring(2).toLowerCase();
        root.childNodes[index].removeEventListener(eventName, oldProps[prop]);
        root.childNodes[index].addEventListener(eventName, newProps[prop]);
        return;
      }
      const newAttribute = document.createAttribute(prop);
      newAttribute.value = newProps[prop];
      root.childNodes[index].setAttributeNode(newAttribute);
    });
  }
  const oldChildren = oldNode.props.children;
  const newChildren = newNode.props.children;
  const max = Math.max(oldChildren.length, newChildren.length);
  for (let i = 0; i < max; i++) {
    console.log(`for loop${i}`, i, root, oldChildren[i], newChildren[i]);
    updateVirtualDOM(root.childNodes[index], oldChildren[i], newChildren[i], i);
  }
  return root;
}