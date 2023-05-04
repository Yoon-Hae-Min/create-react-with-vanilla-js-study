// Element 클래스 : 가상 DOM 의 요소
// render 메서드를 통해 실제 DOM 노드로 변환된다.
class Element {
  constructor(tagName, attrs, children) {
    this.tagName = tagName;
    this.attrs = attrs;
    this.children = children;
  }

  render() {
    const el = document.createElement(this.tagName);
    for (const [key, value] of Object.entries(this.attrs)) {
      el.setAttribute(key, value);
    }
    for (const child of this.children) {
      const childEl =
        child instanceof Element
          ? child.render()
          : document.createTextNode(child);
      el.appendChild(childEl);
    }
    return el;
  }
}

// Virtual DOM : 실제 DOM 노드와 가상 DOM을 관리
// `rootEl` 프로퍼티는 실제 DOM의 루트 요소를 나타냄
// `virtualRoot` 프로퍼티는 이전 가상 DOM의 루트 요소를 나타내며, `update` 메서드는 실제 DOM에서 변경이 발생하면 가상 DOM을 업데이트함ㄴ
class VirtualDOM {
  constructor(rootEl) {
    this.rootEl = rootEl;
    this.virtualRoot = null;
  }

  // 두 가상 DOM 노드를 비교하고, 변경이 필요한 경우 실제 DOM 을 업데이트한다.
  diff(node1, node2) {
    if (node1 === node2) {
      return;
    }
    if (node1 instanceof Element && node2 instanceof Element) {
      if (node1.tagName !== node2.tagName) {
        node1.replaceWith(node2.render());
      } else {
        const attrs1 = node1.attrs;
        const attrs2 = node2.attrs;
        for (const [key, value] of Object.entries(attrs1)) {
          if (attrs2[key] !== value) {
            node1.setAttribute(key, attrs2[key]);
          }
        }
        for (const [key, value] of Object.entries(attrs2)) {
          if (!attrs1.hasOwnProperty(key)) {
            node1.setAttribute(key, value);
          }
        }
        const children1 = node1.children;
        const children2 = node2.children;
        const len1 = children1.length;
        const len2 = children2.length;
        if (len1 < len2) {
          for (let i = len1; i < len2; i++) {
            node1.appendChild(children2[i].render());
          }
        } else if (len1 > len2) {
          for (let i = len1 - 1; i >= len2; i--) {
            node1.removeChild(node1.childNodes[i]);
          }
        }
        for (let i = 0; i < Math.min(len1, len2); i++) {
          this.diff(node1.childNodes[i], children2[i]);
        }
      }
    } else {
      node1.replaceWith(node2.render());
    }
  }

  update() {
    if (!this.virtualRoot) {
      this.virtualRoot = new Element(this.rootEl.tagName, {}, []);
    }
    const newVirtualRoot = new Element(this.rootEl.tagName, {}, []);
    const children = Array.from(this.rootEl.childNodes);
    for (const child of children) {
      newVirtualRoot.children.push(this.createVirtualNode(child));
    }
    this.diff(this.virtualRoot, newVirtualRoot);
    this.virtualRoot = newVirtualRoot;
  }

  createVirtualNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }
    const tagName = node.tagName.toLowerCase();
    const attrs = {};
    for (const { name, value } of node.attributes) {
      attrs[name] = value;
    }
    const children = Array.from(node.childNodes).map((child) =>
      this.createVirtualNode(child)
    );
    return new Element(tagName, attrs, children);
  }
}

// 사용 예시
const rootEl = document.getElementById("root");
const vdom = new VirtualDOM(rootEl);
vdom.update();
