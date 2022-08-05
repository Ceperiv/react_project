import React from 'react';

import {imgURL} from "../../constants";

function SingleInfo({movie}) {
    return (
        <div className={'sub_box'}>

            {movie.backdrop_path &&
                (<img className={'MovieImg'} alt={`movie_image_${movie.name}`}
                      src={imgURL('500') + '/' + movie.backdrop_path}/>)}

            {movie.release_date ?
                (<h4>Release date: {movie.release_date}</h4>)
                : (<h4>Release date: {movie.first_air_date}</h4>)}

            <p>Overview: <i>{movie.overview}</i></p>
        </div>
    );
}

export {SingleInfo};