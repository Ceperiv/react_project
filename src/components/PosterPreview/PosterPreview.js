import React from 'react';
import {Link} from "react-router-dom";

import {imgURL} from "../../constants";
import '../../pages/style.pages.css';

function PosterPreview({movie}) {

    return (
        <div>
            {movie.title ? (<Link to={'/movie/' + movie.title.split(' ').join('_')} state={{...movie}}>
                <img alt={movie.title} src={imgURL('400') + '/' + movie.poster_path}/>
            </Link>) : (<Link to={'/movie/' + movie.name.split(' ').join('_')} state={{...movie}}>
                <img alt={movie.name} src={imgURL('400') + '/' + movie.poster_path}/>
            </Link>)}
        </div>
    );
}

export {PosterPreview};