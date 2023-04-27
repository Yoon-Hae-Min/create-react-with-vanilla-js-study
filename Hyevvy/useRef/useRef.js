```js
    //바닐라 JS
    const myDiv = document.querySelector('.my-div');
    myDiv.addEventListener('click', callbackFn);

    //리액트
    const myDiv = useRef(null);
    <div ref={myDiv} />
    myDiv.current.addEventListener('click', callbackFn);

    document.querySelector('.my-div'); 이 반환하는 값이 myRef.current에 똑같이 담겨 있음!
```;
