### 클로저

1. 자바스크립트의 변수 유효범위 지정

어휘적 범위 지정(Lexical Scoping)

```
    function init() {
      var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
      function displayName() { // displayName() 은 내부 함수이며, 클로저다.
        alert(name); // 부모 함수에서 선언된 변수를 사용한다.
      }
      displayName();
    }
    init();

```

JS는 어휘적 환경을 갖는다. 내부 Lexical 환경에서 찾은 후 없다면 전역 Lexical 환경에서 찾는다.

![스크린샷 2023-04-18 오후 6.15.07.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df635bc0-77b4-496f-aa07-af0a86d48172/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.15.07.png)

2. Closure란 ?
   함수와 렉시컬 환경의 조합
   함수가 생성될 당시의 외부 변수를 기억하고, 생성 이후에도 계속 접근이 가능하다.

3. useState의 비동기 실행

```
const Counter = () => {
  const [count, setCount] = useState(0);

  const increase1 = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  const increase2 = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
}

export default Counter;
```

increase1 의 결과는 1이고,
increase2 의 결과는 3이다.

### 왜 🤔

리액트의 setState의 인자가 변수인가 함수인가의 차이는 이렇게 정리한다.
새로운 상태가 바로 이전 상태를 통해 계산되어야하면 함수를 써야한다.

리액트는 퍼포먼스 향상을 위해 특별한 배치 프로세스를 사용하기 때문이다.
여러 setState 업데이트를 한 번에 묶어서 처리한 후 마지막 값을 통해 state를 결정한다.

즉, useState의 함수형 인자는 값을 실시간으로 업데이트한다.

참고
[useState의 동작 원리와 클로저](https://seokzin.tistory.com/entry/React-useState%EC%9D%98-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80)
