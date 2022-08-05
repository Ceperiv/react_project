import React from 'react';
import {Link} from "react-router-dom";

import '../../pages/style.pages.css';
import {BadgeComponent} from "../BadgeComponent/BadgeComponent";

function MovieInfo({movie}) {

    return (
        <div>
            {movie.title ?
                (<Link to={'/movie/' + movie.title.split(' ').join('_')} state={{...movie}} className={'MovieInfo'}>
                    <BadgeComponent movie={movie}/>
                    <h2>{movie.title}</h2>
                    <h4>{movie.release_date}</h4>
                </Link>) :
                (<Link to={'/movie/' + movie.name.split('-').join('_')} state={{...movie}} className={'MovieInfo'}>
                    <BadgeComponent movie={movie}/>
                    <h2>{movie.name}</h2>
                    <h4>{movie.first_air_date}</h4>
                </Link>)}
        </div>

    );
}

export {MovieInfo};