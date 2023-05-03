import Kreact from './Kreact';

export default function Parent({ children }) {
  return (
    <div style="background-color: black; color: white">
      {children}
    </div>
  )
}