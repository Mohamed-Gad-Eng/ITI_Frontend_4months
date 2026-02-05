import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:"counter",
    initialState:{
        counter:0
    },
    reducers:{
        changeCounter:(state,action)=>{
          state.counter=action.payload
        },
        increaseCounter:(state)=>{
          state.counter=state.counter+1
        },
        decreaseCounter:(state)=>{
            state.counter=state.counter-1
        }
    }
})

export const {changeCounter,increaseCounter,decreaseCounter} = counterSlice.actions

export default counterSlice.reducer