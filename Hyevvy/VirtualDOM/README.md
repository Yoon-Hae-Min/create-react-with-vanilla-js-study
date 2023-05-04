# Virtual DOM

### Virtual DOM이란?

JS 라이브러리 또는 프레임워크에서 사용되는 개념으로, 실제 DOM(Document Object Model) 에 대한 추상화된 표현
-> 리액트뿐만 아니라 Vue에서도 사용됨

웹애플리케이션은 사용자의 상호작용에 따라 DOM 요소를 동적으로 변경하는데, 많은 DOM 조작 발생시 성능에 영향을 미치게 된다. 이 때문에 Virtual DOM 은 **성능 개선**을 위해 사용된다.

Virtual DOM은 DOM 조작을 추상화하고, 변경된 부분만 실제 DOM에 적용하는 방식으로 동작한다. 즉, 변경 사항이 있는 요소를 모두 다시 그리는 대신 변경 사항이 있는 요소만 다시 그린다. 이러한 방식으로 Virtual DOM은 DOM 조작의 비용을 줄이고, 성능을 향상시킨다.

### Virtual DOM 과 Shadow DOM 의 차이

Shadow DOM은 **웹 컴포넌트(Web Component)**의 한 요소로, 캡슐화된 DOM 트리를 생성하는 기술입니다. Shadow DOM을 사용하면, HTML과 CSS를 사용하여 구현된 웹 컴포넌트 내부의 요소들을 외부로부터 격리시킬 수 있습니다.

Shadow DOM은 특정 컴포넌트 내부에 DOM 트리를 생성하고, 그 내부에서만 CSS가 적용되도록 합니다. 이를 통해 컴포넌트가 다른 요소와 충돌하지 않고 독립적으로 작동할 수 있습니다. 또한, Shadow DOM은 외부에서 컴포넌트의 내부를 조작하는 것을 막기 때문에 보안성도 높여줍니다.

Shadow DOM을 생성하려면, 컴포넌트의 shadowRoot 속성에 접근하여 새로운 DOM 트리를 생성하고, 그 안에 필요한 요소들을 추가하면 됩니다. 이를 위해 JavaScript를 사용할 수도 있고, HTML의 <template> 태그를 사용하여 마크업을 정의할 수도 있습니다.

Shadow DOM은 웹 컴포넌트의 다른 요소인 Custom Element와 함께 사용될 때 가장 큰 효과를 발휘합니다. Custom Element를 사용하면, 새로운 HTML 요소를 정의하여 사용할 수 있으며, 이 요소는 Shadow DOM과 함께 사용하여 완전히 캡슐화된 컴포넌트를 만들 수 있습니다.
