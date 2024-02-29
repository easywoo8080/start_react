import React from'react';
import Timer from './src/Timer';

function hardProc(params) {
  console.log('Hard Processing....');
}

function App(){
  const [showTimer, setShowTimer] = React.useState(false);


  
 
  const [hardNum, setHardNum] = React.useState(0);

  return (
      <div className="App">App useEffedct02
        <hr></hr>
        <button onClick={()=>{setShowTimer(!showTimer)}}>
          {showTimer ? 'Hide Timer' : 'Show Timer'}
        </button>
        <hr />
        {/* {showTimer ? <Timer></Timer> : null } */}
        {showTimer && <Timer></Timer> }

        <hr></hr>
        <h3>복잡한 연산 함수</h3>
        <input type='number' value={hardNum} onChange={(e)=>{setHardNum(e.target.value)}}></input>
      </div>
  );
}

export default App;