import { createSlice } from "@reduxjs/toolkit";



const authSlice=createSlice({
    name:"auth",
    initialState:{
        isLoggedin:localStorage.getItem('token')?true:false
    },
    reducers:{
        changeAuth:(state,action)=>{
            state.isLoggedin=action.payload
        }
    }
})

export const {changeAuth}=authSlice.actions
export default authSlice.reducer