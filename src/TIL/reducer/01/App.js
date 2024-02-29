import { useReducer, useState } from 'react';
import './App.css';



function App() {
  const [number, setNumber] = useState(0);

  function add(){
    setNumber(number+1)
  }
  function reset(){
    setNumber(0)
  }
  function sub(){
    setNumber(number-1)
  }

  return (
    <div className="App">
      <button type='button' onClick={sub}>-</button>
      <button type='button' onClick={reset}>reset</button>
      <button type='button' onClick={add}>+</button>
      {/*<button type='button' onClick={
        () => setNumber(number + 1)
      }>+</button>*/}
      <p>{number}</p>
    </div>
  );
}

export default App;
