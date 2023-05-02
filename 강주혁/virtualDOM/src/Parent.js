import Kreact from './Kreact/Kreact.js';

export default function Parent({ children }) {
  return (
    <div style="background-color: black; color: white">
      {children}
    </div>
  )
}