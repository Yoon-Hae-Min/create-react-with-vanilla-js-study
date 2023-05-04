## [JSX 이해하기](https://ko.legacy.reactjs.org/docs/jsx-in-depth.html)

### JSX 란?

JSX는 React.createElement(component, props, ...children) 함수에 대한 문법적 설탕을 제공한다.

예시

```jsx
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

위의 코드는 다음과 같이 컴파일된다.

```js
React.createElement(MyButton, { color: "blue", shadowSize: 2 }, "Click Me");
```

### JSX의 특징

1. 대문자로 시작하는 JSX 태그는 React 컴포넌트를 지정한다. <br/>
2. React가 스코프 내에 존재해야 한다.
   1. <Foo />와 같은 JSX 표현을 쓰려한다면 Foo가 반드시 스코프내에 존재해야한다.
   2. JS 번들러를 사용하지 않고, `<script>` 태그를 통해 React를 불러왔다면 React는 전역 변수로 존재하기 때문에 별도로 불러올 필요가 없다. <br />
3. JSX 타입을 위한 점 표기법 사용

   ```jsx
   import React from "react";
   const MyComponents = {
     DatePicker: function DatePicker(props) {
       return <div>Imagine a {props.color} datepicker here.</div>;
     },
   };

   function BlueDatePicker() {
     return <MyComponents.DatePicker color="blue" />;
   }
   ```

4. 사용자 정의 컴포넌트는 반드시 대문자로 시작해야한다.

   1. Element가 소문자로 시작하는 경우 `<div>` 나 `<span>` 같은 내장 컴포넌트라는 것을 의미하며 'div'나 'span' 같은 문자열 형태로 React.createElement에 전달된다.

5. JSX 안에서의 prop 사용

   1. 아래 예시처럼 JS 표현을 {} 안에 넣어서 JSX 안에서 prop으로 사용 가능하다.

   ```jsx
   <MyComponent foo={1 + 2 + 3 + 4} />
   ```

   단, if 와 for 문은 JS 표현식이 아니므로 JSX안에서 사용은 할 수 없지만, JSX 밖 주변 코드에서 사용할 수 있다.

6. 문자열 리터럴
   1. 문자열 리터럴은 prop으로 넘겨줄 수 있다.
   ```jsx
    <MyComponent message="hello world" />
    <MyComponent message={'hello world'} />
   ```
7. Props의 기본값은 True다
   Prop에 어떤 값도 넘기지 않을 경우 기본적으로 true다.

8. 속성 펼치기
   props에 해당하는 객체를 이미 가지고 있다면 ...을 전개 연산자로 사용해 전체 객체를 통으로 넘겨줄 수 있다.
   그러나, 전개 연산자는 유용하지만 불필요한 prop을 컴포넌트에 넘기거나 유효하지 않은 HTML 속성들을 DOM에 넘기기도 한다. 꼭 필요할 때만 사용하는 것을 권장한다!

## 참고자료

[우아한 태크 캠프 - woowahan-jsx](https://github.com/woowa-techcamp-2021/woowahan-jsx/blob/main/src/index.ts)

[바닐라JS(TS)로 리액트 SPA 구현하기](https://danminblog.tistory.com/81)
