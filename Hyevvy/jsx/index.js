const jsx = (strings, ...args) => {
  // strings
  // args: ${} 에 포함된 아규먼트, 자식 컴포넌트, 이벤트 함수, state/props등이 해당된다.

  if (!strings[0] && args.length) {
    throw new Error("파싱 불가");
  }

  let template = document.createElement("div");

  template.innerHTML = strings.map((str, index) => {
    return `${str}${argsString}`;
  });
  return template.firstElementChild ?? template;
};
