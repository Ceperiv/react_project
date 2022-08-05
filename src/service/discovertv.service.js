import axios from "axios";
import {baseDiscoverTvURL} from "../constants";

const discoverTvService = (page, genreId) =>
    axios.get(baseDiscoverTvURL + (page ? `&page=${page}` : '') + (genreId ? `&with_genres=${genreId}` : ''))

export {discoverTvService}