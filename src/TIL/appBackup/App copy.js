// import './App.css';
// import { useReducer } from 'react';
// import Sub from './component/Sub';
// import { createStore } from 'redux';
// // connect : 재사용성 관련 클래스
// import { Provider, useSelector, useDispatch, connect } from 'react-redux';

// function App() {
//   function reducer(currentState, action ) {

//     if( currentState === undefined ){
//       console.log('currentState_currentState : ', currentState);
//       return{
//         number : 100
//         , aa : 2
//         , bb : 3
//         , cc : 4
//         , isDark : true
//       }
//     }
    
//     const newState = {...currentState};
    
   
//     return newState;
    
//   }
//   const store = createStore(reducer);
//   console.log('store : ', store);
//   console.log('store : ', store.number);
//   return (
//       <div className='container'>
//         <Provider store={store}>
//           <Sub></Sub>
//         </Provider>
//       </div>
//   );
// }

// export default App;
