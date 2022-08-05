import React, {useState} from 'react';
import ReactStars from "react-rating-stars-component";

import './style.star.rating.css';

function StarsRating({movie}) {
    const {vote_average, vote_count} = movie
    const [newRating, setNewRating] = useState(0);
    const [votes, setVotes] = useState(0);
    const ratingChanged = (newRating) => {
        setNewRating(newRating/2)
        setVotes(1)
    };

      return (
        <div className={'StarsRating'}>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                value={(vote_average + newRating) / 2}
                filledIcon={null}/>
            <p className={'vote_count'}><i>{vote_count + votes} votes</i></p>
        </div>
    );
}

export {StarsRating};