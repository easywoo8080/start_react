import { useState } from 'react';
import './App.css';

function TopComp1(props){
  return (
    <div>
      <h2>Top 1</h2>
      <TopComp2 gNumber={props.gNumber}></TopComp2>
    </div>
  )
}

function TopComp2(props){
  return (
    <div>
      <h2>Top 2</h2>
      <TopComp3 gNumber={props.gNumber}></TopComp3>
    </div>
  )
}

function TopComp3(props){
  return (
    <div>
      <h2>Top 3 : {props.gNumber}</h2>
    </div>
  )
}

function BottomComp1(props){
  return (
    <div>
      <h2>Bottom 1</h2>
      <BottomComp2
        onCallEvent={()=>{ props.onCallEvent() }}
      ></BottomComp2>
    </div>
  )
}

function BottomComp2(props){
  return (
    <div>
      <h2>Bottom 2</h2>
      <BottomComp3
        onCallEvent={()=>{props.onCallEvent()}}
      ></BottomComp3>
    </div>
  )
}

function BottomComp3(props){
  return (
    <div>
      <h2>Bottom 3</h2>
      <button type='button' onClick={() => { props.onCallEvent() }}>+</button>
    </div>
  )
}

function App() {
  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      <h2>ROOT</h2>
      <hr></hr>
      <div className='top-child'>
        <TopComp1 gNumber={number}></TopComp1>
      </div>
      <hr></hr>
      <div className='bottom-child'>
        <BottomComp1
          onCallEvent={()=>{setNumber(number+1)}}
        ></BottomComp1>
      </div>
    </div>
  );
}

export default App;
