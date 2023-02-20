import React from 'react';
import {Badge} from 'rsuite';

function BadgeComponent({movie}) {

    let dateRelease = '';
    if(movie['release_date']){
        dateRelease = movie['release_date']
    } else {
        dateRelease = movie['first_air_date']
    }

    const [year, month, day] = dateRelease.split('-')
    const date = new Date(+year, month - 1, +day, +'00', +'00', +'00');
    const timeStampInSeconds = date.getTime();
    const currentDate = new Date().getTime()
    const days_41 = 3542400000

    return (
        <div className={'BadgeComponent'}>
            {timeStampInSeconds > (currentDate - days_41) && <Badge className={'badge'} content={'NEW'}/>}
        </div>
    );
}

export {BadgeComponent};
