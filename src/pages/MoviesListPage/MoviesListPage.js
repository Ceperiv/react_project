import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slice";

import {Errors, Genres, MoviesListCard, Pagination} from "../../components";
import '../style.pages.css';
import {ClipLoader} from "react-spinners";


function MoviesListPage() {
    const {movies, isLoading, errors} = useSelector(state => state.movie);
    const {results} = movies
    const location = useLocation();
    const {state: genreId} = location
    const [page, setPage] = useState(1);
    const pageNum = (num) => {
        setPage(num)
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieActions.getAll({page, genreId}))
    }, [page, genreId, dispatch])

    return (
        <div className={'Main'}>
            <div className={'wrap'}>
                <Genres pageNum={pageNum}/>
                <div className={'MoviesList'}>
                    <Outlet/>
                    {errors && <Errors errors={errors}/>}

                    <ClipLoader className={'ClipLoader'} loading={isLoading} color={'brown'} speedMultiplier={1}
                                size={'40px'}/>

                    {!errors && results && results.length === 0 ? (<h1><i>no films in this genre:( yet</i></h1>)
                        : (results && results.map((value, index) => <MoviesListCard key={index} movie={value}/>))}
                </div>
            </div>
            {!errors && <Pagination key={movies.id} page={page} pageNum={pageNum} movies={movies}/>}
        </div>
    );
}

export {MoviesListPage};