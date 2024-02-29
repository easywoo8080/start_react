import { useState } from 'react';
import './App.css';

function ChildComp1(props){
  return (
    <div>
      <h2>Child 1 : {props.gNumber}</h2>
      <ChildComp2
        gNumber={props.gNumber}
        onCallEvent={()=>{ props.onCallEvent() }}
      ></ChildComp2>
    </div>
  )
}

function ChildComp2(props){
  return (
    <div>
      <h2>Child 2 : {props.gNumber}</h2>
      <ChildComp3
        gNumber={props.gNumber}
        onCallEvent={()=>{props.onCallEvent()}}
      ></ChildComp3>
    </div>
  )
}

function ChildComp3(props){
  return (
    <div>
      <h2>Child 3 : {props.gNumber}</h2>
      <button type='button' onClick={() => { props.onCallEvent() }}>+</button>
    </div>
  )
}

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <h2>{number}</h2>
      <hr></hr>
      <div className='child'>
        <ChildComp1
          gNumber={number}
          onCallEvent={()=>{setNumber(number+1)}}
        ></ChildComp1>
      </div>
    </div>
  );
}

export default App;
