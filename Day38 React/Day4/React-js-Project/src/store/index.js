import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter'
import loaderReducer from './slices/loader'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        loader:loaderReducer
    }
})


/*
{
counter:{
        counter:0
    }
loader:{
        loader:false
    }
}


*/
export default store