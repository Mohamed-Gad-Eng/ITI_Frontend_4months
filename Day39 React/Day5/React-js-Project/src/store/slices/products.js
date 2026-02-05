import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/products.api";


export const productsAction = createAsyncThunk("products/getAll", async () => {
    try {
        const res = await getAllProducts()
        return res.data.products
    } catch (err) {
        throw new Error("Error while retrieving products")
    }

})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers:{
       updateProducts:(state,action)=>{
        state.products=action.payload
       }
    },
    extraReducers: (builder) => {
        builder.addCase(productsAction.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(productsAction.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload
        })

        builder.addCase(productsAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error
        })
    }
})

export const {updateProducts}=productsSlice.actions
export default productsSlice.reducer