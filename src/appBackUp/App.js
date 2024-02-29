 import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';
import { useRef } from 'react';



function Button(props){

 return (
  <button type="button" > +dfadfasdf </button>
 )
}
function App() {

  const [inputNumber, setInputNumber] = useState(1);
  function changeNumber(e, props){
    console.log( typeof(e.target.value));
    if( typeof(e.target.value)){

    }
    setInputNumber(e.target.value);
  }
  // funciton reducer(현재값, action  )
  function reducer(oldNumber, action ){
    let insertNum = document.getElementById('insertNumber').value;
    switch (action.type) {
      case  'up':
        return oldNumber + Number(action.getNumber);
        break;
      case  'num':
          return oldNumber = 0;
          break;
      case  'pin':
        return Number(oldNumber - insertNum);
        break;
      default:
        break;
    }

  }




  //const [number, setNumber] = useState(0);
  function add(){
    dispatchNumber({
      type : 'up'
      , getNumber : inputNumber
    });
  }
  function reset(){
    dispatchNumber({
      type : 'num'
      , getNumber : inputNumber
    });
  }
  function sub(){
    dispatchNumber({
      type : 'pin'
      , getNumber : inputNumber
    });
  }
  const initInputValue = 0;

  const [number, dispatchNumber] = useReducer(reducer, 0 );







  function oneReducer(old, action){
    let insertNum = document.getElementById('insertNumber').value;
    console.log(insertNum );

    insertNum = Number(insertNum+1);
    console.log( insertNum );
  }

  const [ onePlus, dispatchOnePlus ] = useReducer( oneReducer, 0);


  return (
    <div className="App">
      
      <div> Hellow 0127 </div>
     
      <button type='button' onClick={sub}> - </button>
      <button type='button' onClick={reset}> reset </button>
      <button type='button' onClick={add}> + </button>
      
      <Button art='50' ele={onePlus} onClick={(e)=>{dispatchOnePlus(10)}}> </Button>
      <p>{number}</p>
      <input type='number' id='insertNumber' value={inputNumber} onChange={changeNumber}></input>
      <input type='number' id='insertNumber' value={inputNumber} onChange={(e)=>{setInputNumber(e.target.value)}}></input>


      <p>Level 01</p>

      <button typ='button' onClick={oneReducer}> 1더하기 </button>
    </div>
  );
}

export default App;
