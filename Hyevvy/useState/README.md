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
