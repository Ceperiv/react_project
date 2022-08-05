import {PosterPreview} from "../PosterPreview/PosterPreview";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {StarsRating} from "../StarsRating/StarsRating";

import '../../pages/style.pages.css';

function MoviesListCard({movie}) {

    return (
        <div className={'MovieListCard'}>
            <PosterPreview movie={movie}/>
            <MovieInfo movie={movie}/>
            <StarsRating movie={movie}/>
        </div>
    );
}

export {MoviesListCard};