// // import { useState } from 'react';
// import React from 'react';
// import './App.css';
// import { createStore } from 'redux';
// import { Provider, useSelector, useDispatch } from 'react-redux'

// function App() {
//   // const [number, setNumber] = useState(0)

//   function reducer(currentState, action){

//     if( currentState === undefined ){
//       return {
//         number: 1
//       }
//     }

//     const newState = { ...currentState }

//     if( action.type === 'ADD'){
//       newState.number++
//     }

    
  
//     return newState
//   }
  
//   const store = createStore(reducer)

//   return (
//     <div className="App">
//       <h2>ROOT</h2>
//       <hr></hr>

//       <Provider store={store}>
//         <div className='top-child'>
//           <TopComp1></TopComp1>
//         </div>
//         <hr></hr>
//         <div className='bottom-child'>
//           <BottomComp1></BottomComp1>
//         </div>
//         </Provider>
//     </div>
//   );
// }

// function TopComp1(){
//   return (
//     <div>
//       <h2>Top 1</h2>
//       <TopComp2></TopComp2>
//     </div>
//   )
// }

// function TopComp2(){
//   return (
//     <div>
//       <h2>Top 2</h2>
//       <TopComp3></TopComp3>
//     </div>
//   )
// }

// function TopComp3(){
//   function f(state){
//     return state.number;
//   }

//   const number = useSelector(f)

//   return (
//     <div>
//       <h2>Top 3 : {number}</h2>
//     </div>
//   )
// }

// function BottomComp1(){
//   return (
//     <div>
//       <h2>Bottom 1</h2>
//       <BottomComp2></BottomComp2>
//     </div>
//   )
// }

// function BottomComp2(){
//   return (
//     <div>
//       <h2>Bottom 2</h2>
//       <BottomComp3></BottomComp3>
//     </div>
//   )
// }

// function BottomComp3(){

//   const dispatch = useDispatch()
//   return (
//     <div>
//       <h2>Bottom 3</h2>
//       <button
//         type='button'
//         onClick={() => { dispatch({ type: 'ADD' }) }}
//       >+</button>
//     </div>
//   )
// }

// export default App;
