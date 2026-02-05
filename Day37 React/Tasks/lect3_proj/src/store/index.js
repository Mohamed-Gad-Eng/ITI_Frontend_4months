import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from './slices/favorite'
import filmsReducer from './slices/films'



const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        films: filmsReducer
    }
})


export default store