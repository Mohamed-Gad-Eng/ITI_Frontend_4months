import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter'
import loaderReducer from './slices/loader'
import productsReducer from './slices/products'
const store = configureStore({
    reducer: {
        counter: counterReducer,
        loader: loaderReducer,
        products: productsReducer
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
products:{
   products:[],
   loading:false,
   error:null
}
}


*/
export default store