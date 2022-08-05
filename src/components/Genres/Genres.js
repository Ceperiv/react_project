import React, {useEffect} from 'react';
import {Link, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ClipLoader} from "react-spinners";

import {genresActions} from "../../redux/slice";
import {GenresComponents} from "../index";
import './style.genres.css'

function Genres({pageNum}) {

    const {genres, isLoading, errors} = useSelector(state => state.genre)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])

    const submit = () => {
        pageNum(1)
        window.scrollTo({left: 0, top: 0, behavior: "smooth"})
    }

    return (
        <div className={'Genres'}>
            <ul>
                <Link className={'GenresList'} onClick={submit} to={'All'}>Show All</Link>

                {errors && <h2 className={'errors'}><i> :(404 {errors.status_message}</i></h2>}
                <ClipLoader className={'ClipLoader'} loading={isLoading} color={'brown'} speedMultiplier={1}
                            size={'40px'}/>

                {genres && genres.map((value, index) =>
                    <GenresComponents key={index} pageNum={pageNum} genres={value}/>)}
            </ul>
            <Outlet/>
        </div>
    );
}

export {Genres};