import React from 'react';
import {Link, NavLink} from "react-router-dom";

import './style.header.css';
import {ChangeTheme} from "../ChangeTheme/ChangeTheme";
import Image from '../../assets/logo192.png'

function Header() {
    return (
        <div className={'Header'}>
            <Link to={'/Movies'}> <img src={Image} alt={'logo'}/></Link>

            <ul className={'navigation'}>
                <li><NavLink to={'/Movies'}>Movies</NavLink></li>
                <li><NavLink to={'/DiscoverTv'}>Discover Tv</NavLink></li>
            </ul>

            <ChangeTheme/>
        </div>
    );
}

export {Header};