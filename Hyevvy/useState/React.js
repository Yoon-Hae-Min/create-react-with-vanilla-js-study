import { Counter, Cat } from "./index.js";
export let currentStateKey = 0;
const states = []; // useState를 여러번 쓸 수 있도록 배열로 구성

//useState 함수 바깥에서 state를 관리하므로 state 값이 유지된다.

export function useState(initState) {
  console.log("hrre", initState);
  const key = currentStateKey;
  if (states.length === key) {
    // state에 값이 없을 때 초기화 진행
    states.push(initState);
  }

  const state = states[key];
  const setState = (newState) => {
    states[key] = newState;
    render();
  };
  currentStateKey += 1;
  return [state, setState];
  //첫 번째 인자로 state 반환, 두 번째 인자로 setState 반환, setState 실행 후 render 실행
}

export function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
          <div>
            ${Counter()}
            ${Cat()}
          </div>
        `;
  currentStateKey = 0;
}
