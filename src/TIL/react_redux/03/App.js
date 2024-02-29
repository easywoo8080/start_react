import { useState } from 'react';
import './../../../App.css';

function ChildComp1(props){
  return (
    <div>
      <h2>Child 1 : {props.gNumber}</h2>
      <ChildComp2 gNumber={props.gNumber}></ChildComp2>
    </div>
  )
}

function ChildComp2(props){
  // const gNumber = 5;
  return (
    <div>
      <h2>Child 2 : {props.gNumber}</h2>
      {/* <ChildComp3 gNumber={gNumber}></ChildComp3> */}
      <ChildComp3 gNumber={props.gNumber}></ChildComp3>
    </div>
  )
}

function ChildComp3(props){
  return (
    <div>
      <h2>Child 3 : {props.gNumber}</h2>
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
        <ChildComp1 gNumber={number}></ChildComp1>
      </div>
    </div>
  );
}

export default App;
