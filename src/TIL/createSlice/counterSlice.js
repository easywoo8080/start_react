import { configureStore, createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name : 'counterName'
    , initialState : {value : 12, aa : 16 , bb : 17}
    , reducers : {
      // ADD_Action은 Action의 값에 따라 조건문을 사용하여야하는데 그 대신 바로 case문 형태로 사용할 수 있다.
      ADD_Action : (state, action)=>{
        const newState = {...state};
        console.log(newState);
        console.log(action);
        return {value : state.value + action.payload}
      }
      , ADD : (state, action)=>{
        const newState = {...state};
        console.log(newState);
        console.log(action);
        return {value : state.value + action.step}
      }
      , SUB : (state, action)=>{
        const newState = {...state};
        console.log(newState);
        console.log(action);
        return {value : state.value - action.payload}
      }
      , RESET : (state, action)=>{}
      , CHECKED : (state, action)=>{}
    }
  });

  export default counterSlice;
  export const {ADD, SUB} = counterSlice.actions;
  export const {ADD_Action} = counterSlice.actions;