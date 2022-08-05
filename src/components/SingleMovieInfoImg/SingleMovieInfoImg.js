import React from 'react';

import {imgURL} from "../../constants";

function SingleMovieInfoImg({movie}) {

    return (
        <img className={'MovieImg'} alt={`movie_image_${movie.title}`} src={imgURL('500') + '/' + movie.poster_path}/>
    );
}

export {SingleMovieInfoImg};