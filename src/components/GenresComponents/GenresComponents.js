import React from 'react';
import {NavLink} from "react-router-dom";

function GenresComponents({genres, pageNum}) {
    const {id, name} = genres

    const submit = () => {
        pageNum(1)
        window.scrollTo({left: 0, top: 0, behavior: "smooth"})
    }

    return (
        <li>
            <NavLink className={'GenresList'} onClick={submit} to={`${name.split(' ').join('')}`} state={id}>{name}</NavLink>
        </li>
    );
}

export {GenresComponents};