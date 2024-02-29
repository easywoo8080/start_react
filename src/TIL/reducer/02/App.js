import { useReducer, useState } from 'react';
import './App.css';

function App() {
  // useState
  /* const [number, setNumber] = useState(0);

  function add(){
    setNumber(number+1)
  }
  function reset(){
    setNumber(0)
  }
  function sub(){
    setNumber(number-1)
  } */

 
  // useReducer

  // function reducer(현재값, action){
    function countReducer(oldNumber, action){
      if(action === 'up'){
        return oldNumber + 1
      } else if(action === 'reset'){
        return 0
      } else if(action === 'down'){
        return oldNumber -1
      }
  }

  function add(){
    dispatchNumber('up')
  }
  function reset(){
    dispatchNumber('reset')
  }
  function sub(){
    dispatchNumber('down')
  }

  const [number, dispatchNumber] = useReducer(countReducer, 0)

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
