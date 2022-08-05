import React from 'react';

import Img from '../../assets/logo512.png'
import './style.404.css'

function NotFoundPage() {
    return (
        <div className={'NotFoundPage'}>
            <img src={Img} alt={'404 error'}/>
        </div>
    );
}

export {NotFoundPage};