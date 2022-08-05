import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {discoverTvService} from "../../service/discovertv.service";

const initialState = {
    discoverTv: [],
    isLoading: false,
    errors: null
}

const getAll = createAsyncThunk(
    'discoverTvSlice/getAll',
    async ({page, genreId}, {rejectWithValue}) => {
        try {
            const {data} = await discoverTvService(page, genreId)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const discoverTvSlice = createSlice({
    name: 'discoverTv.Slice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.discoverTv = action.payload
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
    }
});


const {reducer: discoverTvReducer} = discoverTvSlice;
const discoverTvActions = {
    getAll
}

export {discoverTvActions, discoverTvReducer}