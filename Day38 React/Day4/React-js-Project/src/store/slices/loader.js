import { createSlice } from "@reduxjs/toolkit";



const loaderSlice=createSlice({
    name:"loader",
    initialState:{
        loader:false
    },
    reducers:{
        changeLoader:(state,action)=>{
            state.loader=action.payload
        }
    }
})


export const {changeLoader}=loaderSlice.actions
export default loaderSlice.reducer