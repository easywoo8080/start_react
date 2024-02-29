import React, { useEffect, useState } from 'react';
// 2024-02-17 15:50

function App() {
  console.log('App실행 되었습니다. ');
  const [count, setCount ] = useState(0);
  const [second, setSecond ] = useState(0);


  const CountUpdate = ()=>{
    setCount( count + 1 );
  }
  const SecondUpdate = ()=>{
    setSecond( second + 1 );
  }
  console.log("useEffect 실행동작 확인 ");
  useEffect(() => {
    console.log('useEffec가 실행합니다. : ', count);
  });
  useEffect(() => {
    console.log('useEffec가 실행합니다 []. : ', count);
  },[]);
  useEffect(() => {
    console.log('useEffec가 실행합니다 [1]. : ', count);
  },[1]);
  useEffect(() => {
    console.log('useEffec가 실행합니다 [second]. : ', second);
  },[second]);

  return (
      <div>
        <h1>2024-0</h1>
        <p>COUNT : {count} </p>
        <button onClick={CountUpdate}>UPDATE</button>
        <p>second : {second} </p>
        <button onClick={SecondUpdate}>UPDATE</button>
      </div>

  )
}
export default App;
