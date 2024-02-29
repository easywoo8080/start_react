import { useReducer, useState } from 'react';
import './App.css';

function App() {
  const [ sNumber, setSnumber ] = useState(1)

    function countReducer(oldNumber, action){
      if(action.type === 'up'){
        return oldNumber + action.gNumber
      } else if(action.type === 'reset'){
        return 0
      } else if(action.type === 'down'){
        return oldNumber - action.gNumber
      }
  }

  const [rNumber, dispatchNumber] = useReducer(countReducer, 0)

  return (
    <div className="App">
      <button type='button' onClick={()=>{dispatchNumber({type:'down', gNumber: sNumber})}}>-</button>
      <button type='button' onClick={()=>{dispatchNumber({type:'reset', gNumber: sNumber})}}>reset</button>
      <button type='button' onClick={()=>{dispatchNumber({type:'up', gNumber: sNumber})}}>+</button>
      <p>{rNumber}</p>
      <p>
      <p><input type='text' value={sNumber} onChange={(e)=>{
        setSnumber(Number(e.target.value))
      }}></input></p>
      </p>
    </div>
  );
}

export default App;
