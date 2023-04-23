import Kreact from './Kreact.js';
import Parent from './Parent.js';

export default function App() {
  const name = '강주혁';

  return (
    <div>
      <h1>App</h1>
      <Parent name={name} />
    </div>
  );
}
