
const imgURL = (width) => `https://image.tmdb.org/t/p/w${width}`;
const  genresURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=1a5acf6059a5f7859f3b1eaa77d93d9b&language=en-US';
const baseMovieURL = 'https://api.themoviedb.org/3/discover/' +
    'movie?api_key=1a5acf6059a5f7859f3b1eaa77d93d9b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video' +
    '=false&with_watch_monetization_types=flatrate';
const baseDiscoverTvURL ='https://api.themoviedb.org/3/discover/tv?api_key=1a5acf6059a5f7859f3b1eaa77d93d9b&language=en-US' +
    '&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types' +
    '=flatrate&with_status=0&with_type=0';
export {imgURL, genresURL, baseMovieURL, baseDiscoverTvURL}

