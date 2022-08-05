import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {discoverTvActions} from "../../redux/slice";
import {ClipLoader} from "react-spinners";

import {Errors, Genres, MoviesListCard, Pagination} from "../../components";
import '../style.pages.css';

function DiscoverTvPage() {
    const {discoverTv, isLoading, errors} = useSelector(state => state.discoverTv);
    const {results} = discoverTv
    const location = useLocation();
    const {state: genreId} = location
    const [page, setPage] = useState(1);
    const pageNum = (num) => {
        setPage(num)
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(discoverTvActions.getAll({page, genreId}))
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

                    {!errors && results && results.length === 0 ? (<h1><i>no sitcoms in this genre:( yet</i></h1>)
                        : (results && results.map((value, index) => <MoviesListCard key={index} movie={value}/>))}
                </div>
            </div>
            {!errors && <Pagination key={discoverTv.id} page={page} pageNum={pageNum} movies={discoverTv}/>}
        </div>
    );
}

export {DiscoverTvPage};