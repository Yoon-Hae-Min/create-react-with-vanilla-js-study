## Fiber란?

React 16 버전부터는 stack이 아니라 fiber를 갖고 있고, 제대로 사용된 건 18버전부터이다.

### 그래서 Fiber가 뭔데? 🤔

React 컴포넌트에 특화된 stack 의 재구현이다.

### 왜 Fiber를 쓰는건데?

**1. Stack 과의 비교**
Stack 은 후입선출구조이지만, Fiber는 **순서와 상관없이** 꺼낼 수 있다

꺼내는 순서가 고정되어있다고 하면 렌더링 순서를 유연하게 가져갈 수가 없다.
-> 렌더링 순서를 조정하기 위해 stack -> fiber로 변화함

스택은 동기식이었고, 항목을 추가하고 제거할 수는 있지만 스택이 비워져야할 때까지 동작해야했고, 스택 조정자는 중간에 중단할 수 없다.

**2. 작업을 청크로 분할하고 작업의 우선 순위를 지정하는 기능이 있다.**
작업을 일시중지할수도 있다.
이전에 완료된 작업을 재사용하거나 필요하지않은 경우 중단할 수도 있다.
React reconciler와 달리 `비동기`식이다

### Fiber의 구성

일반 JS 객체이다.
리액트는 파이버(작업 단위)를 처리하고 FinishWork라는 항목으로 끝낸다.
그 다음 이 작업을 커밋하여 DOM 에 눈에 띄는 변경사항을 가져온다.

** 첫 단계: 렌더링 단계 **

사용자에게 보이지않는 모든 종류의 비동기 작업을 수행한다
리액트 작업의 우선순위를 정하고 일부 작업을 일시 중지하거나 폐기할 수 있다.

** 두번 째 단계: 커밋 단계 **

동기식이며 중단될 수 없다.

### Fiber의 속성

- Fiber는 무언가(리액트 구성 요소, DOM 노드, 다른 것의 인스턴스..)와 1:1로 매칭된다.
- 무언가의 유형은 태그 속성에 지정된다.

### Fiber와 React Elements의 차이

- 일부 속성, 특히 유형과 키를 공유한다.
- React elements는 매번 재생성되지만 Fiber는 가능한 한 자주 재사용된다.

### Fiber Properties

- children, sibling, return 이 있다.

![Fiber Properties](https://velog.velcdn.com/images/hyevvy/post/c1f41857-8b6e-4158-9a11-b7c440855491/image.png)

### 출처

[React 까보기 시리즈 개요(feat. Fiber vs Stack)](https://www.youtube.com/watch?v=JadWu4Ygnyc)

[반응 섬유 란 무엇입니까? React.js 심층 분석 #2](https://www.youtube.com/watch?v=0ympFIwQFJw)
