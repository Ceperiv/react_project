import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import {DiscoverTvPage, InfoSinglePage, MoviesListPage} from "../../pages";
import '../../pages/style.pages.css';
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";

function Routers() {

    return (
        <div className={'Routers'}>
            <Routes>
                <Route index element={<Navigate to="/Movies" replace/>} />
                <Route path={'/Movies'} element={<MoviesListPage/>}>
                    <Route path={'All'}/>
                    <Route path={':name'}/>
                </Route>

                <Route path={'/DiscoverTv'} element={<DiscoverTvPage/>}>
                    <Route path={'All'}/>
                    <Route path={':name'}/>
                </Route>

                <Route path={'/movie/' + ':title'} element={<InfoSinglePage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>

    );
}

export{Routers};