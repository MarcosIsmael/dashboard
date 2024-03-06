import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    count: number;
    isReady:boolean;
}

const initialState :CounterState= {
count:5,
isReady:false,
}

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initState(state,{payload}:PayloadAction<number>){
      if(state.isReady) return
      state.count = payload
      state.isReady = true
    },
    addOne(state){
      state.count++
    },
    substractOne(state){
      if(state.count === 0) return
      state.count--
    }

  }
});

export const { substractOne, addOne,initState} = counter.actions

export default counter.reducer