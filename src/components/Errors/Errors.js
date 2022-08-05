import React from 'react';

import './style.errors.css'

function Errors({errors}) {

    let error = '';
    if (!errors) {
        error = null
    } else if (errors.errors instanceof Array) {
        error = errors.errors[0]
    } else if (errors.status_message) {
        error = errors.status_message
    } else {
        error = 'UNKNOWN ERROR:( try to reload'
    }
      return (
        <div className={'Errors'}>

            {errors && <h1>:({error}</h1>}

        </div>
    );
}

export {Errors};