import Kreact from './Kreact';
import Child from './Child';
import Parent from './Parent';


export default function App() {
  const name = '강주혁';

  return (
    <div>
      <h1 style={{ color: 'red' }}>App</h1>
      <Parent>
        <Child name={name} />
      </Parent>
    </div>
  );
}
