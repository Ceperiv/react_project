import axios from "axios";

import {baseMovieURL} from "../constants";

const movieService = (page, genreId) =>
    axios.get(baseMovieURL + (page ? `&page=${page}` : '') + (genreId ? `&with_genres=${genreId}` : ''))

export {movieService}