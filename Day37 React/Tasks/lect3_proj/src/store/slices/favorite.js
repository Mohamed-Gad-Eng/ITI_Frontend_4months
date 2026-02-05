import { createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favorite:[]
    },
    reducers:{
        addFavorite:(state, action) => {
            state.favorite.push(action.payload)
        },
        removeFavorite:(state, action) => {
            state.favorite = state.favorite.filter((item) => item.id !== action.payload);
        },
        removeAllFavorite:(state, action) => {
            state.favorite = []
        }
    }
})

export const {addFavorite, removeFavorite, removeAllFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer