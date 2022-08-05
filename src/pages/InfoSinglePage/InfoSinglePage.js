import React from 'react';
import {useLocation} from "react-router-dom";

import {SingleMovieInfoImg, SingleInfo} from "../../components";
import './style.single.info.css'

function InfoSinglePage() {
    const {state: movie} = useLocation();

    return (
        <div className={'Main'}>
            <div className={'MovieInfo'}><h2>Movie Info</h2>
                <hr/>
                <h2><i>{movie.original_title}</i></h2>
                <div className={'box'}>
                    <SingleMovieInfoImg movie={movie}/>
                    <SingleInfo movie={movie}/>
                </div>
            </div>
        </div>
    );
}

export {InfoSinglePage};