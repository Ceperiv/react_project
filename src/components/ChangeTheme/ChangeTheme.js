import React from 'react';

function ChangeTheme() {

    const darkTheme = () => {
        const body = document.querySelector('body')
        const header = document.querySelector('.Header')
        const genres = document.querySelectorAll('.GenresList')
        const nav = document.querySelectorAll('.navigation a')
        const pagination = document.querySelectorAll('.Pagination a')
        const h1style = document.querySelectorAll('h1')

        body.style.background = 'honeydew';
        header.style.background = '#9c2af5';
        genres.forEach(value => value.style.color = 'indigo')
        nav.forEach(value => value.style.color = 'honeydew')
        pagination.forEach(value => value.style.color = 'indigo')
        h1style.forEach(value => value.style.color = 'black')

    };

    const lightTheme = () => {
        const body = document.querySelector('body')
        const header = document.querySelector('.Header')
        const genres = document.querySelectorAll('.GenresList')
        const nav = document.querySelectorAll('.navigation a')
        const pagination = document.querySelectorAll('.Pagination a')
        const h1style = document.querySelectorAll('h1')


        body.style.background = '';
        header.style.background = '';
        genres.forEach(value => value.style.color = '')
        nav.forEach(value => value.style.color = '')
        pagination.forEach(value => value.style.color = '')
        h1style.forEach(value => value.style.color = '')

    }

    return (
        <div className={'ChangeTheme'}>
            <h4>Theme</h4>

            <input onClick={darkTheme} type={"radio"} value={'Light'} name={'Theme'}/>
            <label className={'labelLight'}>Light</label>

            <input onFocus={lightTheme} type={"radio"} value={'Dark'} name={'Theme'} defaultChecked/>
            <label className={'labelDark'}>Dark</label>

        </div>
    );
}

export {ChangeTheme};