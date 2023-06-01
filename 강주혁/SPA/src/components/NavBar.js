import Kreact from "../Kreact"
import { router } from ".."

export default function NavBar() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      border: '1px solid black',
      padding: '10px',
      margin: '10px',
    }}>
      <li onClick={() => router.push('/')}>home</li>
      <li onClick={() => router.push('/about')}>about</li>
      <li onClick={() => router.push('/contact')}>contact</li>
    </div>
  )
}