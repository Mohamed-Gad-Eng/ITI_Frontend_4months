import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllFilms } from "../../services/films.api";



export const filmsAction = createAsyncThunk("films/getall", async (pageNum) => {
    try {
        const res = await getAllFilms(pageNum)
        return res.data
    } catch (err) {
        throw new Error("Error While rerieving Data")
    }
})


const filmsSlice = createSlice({
    name: "films",
    initialState: {
        films: {
            results: [],
            total_pages: 0,
        },
    },
    extraReducers: (builder) => {
        builder.addCase(filmsAction.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(filmsAction.fulfilled, (state, action) => {
            state.loading = false
            state.films = action.payload
        })

        builder.addCase(filmsAction.rejected, (state, action) => {
            state.loading = true
            state.error = action.error
        })
    }
})

export default filmsSlice.reducer