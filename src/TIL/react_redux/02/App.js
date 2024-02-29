import { useState } from 'react';
import './../../../App.css';

function ChildComp(props){
  return (
    <div>
      <h2>Child : {props.gNumber}</h2>
    </div>
  )
}

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <h2>{number}</h2>
      <button
        type='button'
        onClick={() => { setNumber(number+1) }}
      >+</button>
      <hr></hr>
      <div className='child'>
        <ChildComp gNumber={number}></ChildComp>
      </div>
    </div>
  );
}

export default App;
