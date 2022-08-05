import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {discoverTvReducer, movieReducer} from "./slice";
import {genresReducer} from "./slice";

const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genresReducer,
    discoverTv: discoverTvReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}