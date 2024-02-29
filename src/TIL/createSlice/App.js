import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
//import counterSlice from './counterSlice';
import { ADD_Action, SUB } from './counterSlice';


function Counter() {
  // 유즈 셀렉터로 필요한 값 가져오려면 f(펑션, 함수)를 사용해야 한다.
  //const count = useSelector(f);
  // state는 이름이 필요없고 저장소 통째로 가져오기대문에 어떤이름든 상관없지만 가독성을 위해 같은 이름으로 한다.
  //const count = useSelector((state)=>{ return state.value});
  // 위와 아래는 같은 것 매개변수가 1개면 () 생략가능 리턴이 하나면 {}와 return 생략가능
  const count = useSelector(state => {
    console.log(state);
    return state.counter.value
  });
  const dispatch = useDispatch();
  return(
    <div>counter configureStore
      <p>count : {count} </p>
      {/* <button onClick={()=>{dispatch(({type : 'counterName/ADD', step : 2}))}}>ADD</button> */}
      {/* <button onClick={()=>{dispatch(counterSlice.actions.ADD_Action(3))}}>ADD.action</button> */}
      <button onClick={()=>{dispatch(ADD_Action(3))}}>ADD.action</button>
      <button onClick={()=>{dispatch(SUB(2))}}>SUB</button>
    </div>
  )
}

function App() {

  return (
    <Provider store={store}>
      <div>
        <h2>Bottom 3</h2>
        <Counter></Counter>
      </div>
    </Provider>
  )
}


/*
// 스토어용
function reducer(state, action) {
  const newState = {...state};
  if( action.type === 'ADD'){
    return { value : newState.value + 1};
  }
  return newState;
}
// 스토어용
const initialState = {value : 1, aa :'aa', bb : 'bb'};
// createStore를 사용할때 기본인자로 reducer가 사용되고 초기값을 넣는자리는 initialState 자리
const store = createStore(reducer, initialState);

function Counter() {
  // 유즈 셀렉터로 필요한 값 가져오려면 f(펑션, 함수)를 사용해야 한다.
  //const count = useSelector(f);
  // state는 이름이 필요없고 저장소 통째로 가져오기대문에 어떤이름든 상관없지만 가독성을 위해 같은 이름으로 한다.
  //const count = useSelector((state)=>{ return state.value});
  // 위와 아래는 같은 것 매개변수가 1개면 () 생략가능 리턴이 하나면 {}와 return 생략가능
  const count = useSelector(state => state.value);
  const dispatch = useDispatch();
  return(
    <div>counter component
      <p>count : {count} </p>
      <button onClick={(store)=>{dispatch(({type : 'ADD'}))}}>ADD</button>
    </div>
  )
}

function App() {

  return (
    <Provider store={store}>
      <div>
        <h2>Bottom 3</h2>
        <Counter></Counter>
      </div>
    </Provider>
  )
}

*/


export default App;
