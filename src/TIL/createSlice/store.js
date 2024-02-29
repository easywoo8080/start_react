import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import timerSlice from './timerSlice';

// 슬라이스로 잘린 저장소를 하나로 합쳐주는 함수
const store = configureStore({
    reducer : {
      counter : counterSlice.reducer
      , timer : timerSlice.reducer
    }
  });


  

  export default store;