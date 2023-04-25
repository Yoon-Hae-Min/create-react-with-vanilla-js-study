import Kreact, { useState } from './Kreact.js';

export default function Child({ name }) {
  const [count, setCount] = useState(1);

  return (
    <>
      <h2>Child</h2>
      <p>My name is {name}!</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
      }}>
        <button onClick={() => setCount(count + 1)}>+</button >
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  )
}