import Kreact from './Kreact.js';
import Child from './Child.js';
import Parent from './Parent.js';

export default function App() {
  const name = '강주혁';

  return (
    <div>
      <h1>App</h1>
      <Parent>
        <Child name={name} />
      </Parent>
    </div>
  );
}
