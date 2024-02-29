import { createSlice } from '@reduxjs/toolkit';
const timerSlice = createSlice({
  name : 'timeName'
  , initialState : {value : 24, aa : 12 , bb : 8}
  , reducers : {
    ADD : (state, action)=>{state.value = state.value + action.step}
    , SUB : (state, action)=>{}
    , RESET : (state, action)=>{}
    , CHECKED : (state, action)=>{}
  }
});

  export default timerSlice;