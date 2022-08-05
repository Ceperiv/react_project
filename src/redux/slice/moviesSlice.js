import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../service";

const initialState = {
    movies: [],
    isLoading: false,
    errors: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page, genreId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService(page, genreId)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
                state.isLoading = false
                state.errors = null
            })
            .addCase(getAll.pending, state => {
                state.isLoading = true
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
                state.isLoading = false
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1)
                if (type === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })

});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll
}
export {movieReducer, movieActions}