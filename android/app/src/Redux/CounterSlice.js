import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
};

const counterSlice = createSlice({
      name:"counter",
      initialState,
      reducers:{
        Increment(state){
            state.value+=1;
        },
        Decrement(state){
            state.value-=1;
        },
        reset(state){
            state.value =0;
        }
      }
})

export const {Increment,Decrement,reset} = counterSlice.actions;

export default counterSlice.reducer;