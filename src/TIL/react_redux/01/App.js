import { useState } from 'react';
import './../../../App.css';

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <h2>{number}</h2>
      <button
        type='button'
        onClick={() => { setNumber(number+1) }}
      >+</button>
    </div>
  );
}

export default App;
