import { useReducer, useState } from 'react';
import './App.css';

function App() {
  const [ sNumber, setSnumber ] = useState(1)
  // console.log('sNumber Type : ', sNumber);
  
  // useReducer
  // const initNumber = 20;

  // function reducer(현재값, action){
    function countReducer(oldNumber, action){
      if(action.type === 'up'){
        return oldNumber + action.gNumber
      } else if(action.type === 'reset'){
        // return initNumber
        return 0
      } else if(action.type === 'down'){
        return oldNumber - action.gNumber
      }
  }

  function add(){
    dispatchNumber({
      type: 'up',
      gNumber: sNumber
    })
  }
  function reset(){
    dispatchNumber('reset')
  }
  function sub(){
    dispatchNumber('down')
  }

  // const [number, dispatchNumber] = useReducer(countReducer, initNumber)
  const [rNumber, dispatchNumber] = useReducer(countReducer, 0)

  function changeNumber(event){
    // console.log(event)
    // console.log(typeof event.target.value)
    // setSnumber(event.target.value)
    setSnumber( Number(event.target.value) )
  }

  return (
    <div className="App">
      <button type='button' onClick={sub}>-</button>
      <button type='button' onClick={reset}>reset</button>
      <button type='button' onClick={add}>+</button>
      {/*<button type='button' onClick={
        () => setNumber(number + 1)
      }>+</button>*/}
      <p>{rNumber}</p>
      <p>
      <p><input type='text' value={sNumber} onChange={changeNumber}></input></p>
      </p>
    </div>
  );
}

export default App;
