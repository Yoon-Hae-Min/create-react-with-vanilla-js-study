import Kreact from './Kreact.js';

export default function Parent({ children }) {
  return (
    <div style="background-color: blue">
      {children}
    </div>
  )
}