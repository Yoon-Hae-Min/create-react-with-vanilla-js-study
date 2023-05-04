# VirtualDOM

## virtualDOM?

> DOM 구조를 본따 만든 Javascript 객체 (트리구조)   
> 변경된 점만 확인하고 그 부분만 수정해서 한 번에 레이아웃 계산 → 성능 개선 (Diff 알고리즘)

저번 주차에서 JSX와 virtualDOM, 그리고 realDOM으로 옮기는 작업까지 했다.

하지만 변경된 점만 확인해서 그 부분만 수정하지 않고, 전체를 바꾸도록 구현했기 때문에, 이번 주차에서는 Diff 알고리즘을 구현해보았다.

그리고 `_render` 함수에서 virtualDOM을 만드는 코드도 들어가 있어서, 따로 `KreactDOM` 폴더를 생성해서 분리해두었다.

virtualDOM 객체를 만드는 함수를 분리하여 `createVirtualDOM` 을 만들고, virtualDOM을 비교하는 로직(Diff 알고리즘)이 들어간 `updateVirtualDOM` 을 만들었다.

## 설치 및 실행
```bash
npm install
npm run dev
```
