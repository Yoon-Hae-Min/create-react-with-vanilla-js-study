import Kreact from './Kreact.js';

export default function Child({ name }) {
  return (
    <>
      <h2>Child</h2>
      <p>My name is {name}!</p>
    </>
  )
}