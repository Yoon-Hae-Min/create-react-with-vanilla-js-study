import Kreact from './Kreact.js';

export default function Parent({ name }) {
  return (
    <div style="background-color: blue">
      <h1>Parent: {name}</h1>
    </div>
  )
}