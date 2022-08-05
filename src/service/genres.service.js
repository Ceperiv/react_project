import axios from "axios";

import {genresURL} from "../constants";

const genresService = () => axios.get(genresURL)

export {genresService}