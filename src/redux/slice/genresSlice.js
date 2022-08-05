import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../service";

const initialState = {
    genres: [],
    isLoading:false,
    errors:null
};

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService()
            return data.genres
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload
                state.isLoading = false
                state.errors = null
            })
            .addCase(getAll.pending, state => {
                state.isLoading = true
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
    }
});

const {reducer: genresReducer} = genresSlice;
const genresActions = {
    getAll
}

export {genresReducer, genresActions}
