import React from'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';


// 2. 스토어에 저장할 리듀서 생성(스토어 생성시 초기값 구역이 state로 들어감)
function reducer(state, action) {
  const  newState = {...state};
  console.log('newState : ', newState);
  if (action.type === 'ADD') {
    // 리턴하는 객체명은 의미없이 그 안에 내용을 수정하려면 아래 방식으로 변경 가능 이미 state가 객체 타입이기때문에 
    // 따로 객체를 호출할 필요가 없음
    return {value : newState.value + 1}
  }
  return newState;
}
// 1. 스토어에 초기값 저장
const initalState = {value : 1, aa : 2, bb : 3 };
// 3. 데이터를 저장할 스토어 생성(사용할 리듀서 함수, 초기값)
const store = createStore(reducer, initalState);

// 4. 사용할 함수 생성 
function Counter() {
  // 5. 스토어에서 사용할 변수 선택( 전체를 가져올 수도 있음 ) 
  // 무기명 함수로 가져오는 값과 반환될 값이 1개 뿐이면 ()와 {return} 생략 가능
  const count = useSelector(state => state.value);
  // 6. 스토어의 값을 변경하기 위한 디스패쳐 생성
  const dispatch = useDispatch();

  return(
    <div>
      <p> counter : {count}</p>
      <button onClick={()=>{ dispatch(({type:'ADD'})) }}>ADD</button>
    </div>
  )
}

function App(){

  return (
    <Provider store={store}>
      <div className="App">App Div
        <Counter></Counter>
      </div>
     </Provider>
  );
}

export default App;