import Nav from './Nav.js';
import React, {useState, useEffect} from 'react';
import './Banner.css';
import {useLocation} from "react-router-dom";
import './MoviePage.css';
import instance from '../axios.js';

// When window.open() is used instead of navigate(), the session resets, so we can't grab the movie directly from the state
// Instead, we can get the id from params and do another lookup using the API to get the movie

function MoviePage(){

    const [genreList, setGenreList] = useState([]);

    const {state} = useLocation();
    const movie = state.movie;

    const genres = movie.genre_ids
    
    useEffect(() => {
        async function getGenres(){
            //console.log(genres)
            const request = await instance.get(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
     
            const movie_genre_list = request.data.genres
            //console.log(movie_genre_list);

            // The problem with the below for-in when trying to loop through an array is the values of the variables g and m
            // g and m are the enumerable properties of an object, usually strings. In the case of an array, these will be the indices
            // If we want to loop through values, use either a numerical index or forEach

            /*
            for (const g in genres){
                console.log(g)
                for (const m in movie_genre_list){
                    console.log(m)
                    if (m.id === g){
                        setGenreList(prev => [prev, m.name])
                    }
                }
            }
            */

            // Can't directly use break or continue with for loop, but to stop it, can set a flag variable or use every()/some()

            let movieGenres = genres.reduce((acc, g) => {
                //console.log(g);
                movie_genre_list.some(m => {
                    //console.log(m.id);
                    if (m.id === g){
                        //The problem with calling setGenreList() multiple times is because states in React are immutable
                        // Calling setGenreList multiple times will prevent genreList from being set equal to something else
                        // Need to either edit immutably or do operations on mutable arrays, then call setGenreList after once everything is completed

                        //setGenreList(prev => {prev.push(m.name); return prev})
                        acc.push(m.name)
                        return true;
                    }
                    return false;
                })
                return acc;
            }, []);

            setGenreList(movieGenres)
            return request
        }

        getGenres();
        //eslint-disable-next-line
    }, []); // Empty dependency array so this function can only run once, during first mount of the component

    console.log(genreList);
    
    function getDay(){
        const months = {
            '01': 'January',
            '02': 'February',
            '03': 'March',
            '04': 'April',
            '05': 'May',
            '06': 'June',
            '07': 'July',
            '08': 'August',
            '09': 'September',
            '10': 'October',
            '11': 'November',
            '12': 'December'
        }
        let dates = movie.release_date?.split("-")
        return `${months[dates[1]]} ${dates[2]}, ${dates[0]}`
    }

    /*
    function getGenres(movie, genreString){
        let genreList = []
        const genres = movie.genre_ids
        const request = await instance.get(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        console.log(request)
        const movie_genre_list = request.data.genres
        for (const g in genres){
            movie_genre_list.forEach(m => {if (m.id == g){genreList.push(m.name)}})
        }
        genreString = movie_genre_list.join(', ')
        return request
    }
    */

    let movieRating = movie.vote_average.toFixed(1)

    if (!movie) {
        return (
            <div>Movie or genres not found</div>
        )
    }

    return (
        <div className = "moviePage">
            <Nav/>
            <div className = 'banner' style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            }}>
                <div className = 'banner_content'>
                    <h1 className = 'banner_title'>{movie.name || movie.title || movie.the_original_title}</h1>
                    <div className = 'banner_buttons'>
                        <button className = 'banner_button'>Play</button>
                        <button className = 'banner_button'>My List</button>
                    </div>
                </div>
                <div className = 'banner_end'/>
            </div>

            <h1> {movie.overview}</h1>

            
            <h1 className='rating_score'>Rating: {movieRating}/10</h1>
            <h3 className='rating_score'>(across {movie.vote_count} reviewers)</h3>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {
                // 10 star rating using the font awesome star character
            }
            <div className="rating">
                <span className={`fa fa-star ${movieRating-- > 1? `checked` : movieRating + 1 > 0? "partially-checked" : "unchecked"}`} style={(movieRating + 1)<1 && (movieRating + 1) > 0? {"--rating": `${(movieRating + 1) * 100}%`} : {}}></span>
                <span className={`fa fa-star ${movieRating-- > 1? `checked` : movieRating + 1 > 0? "partially-checked" : "unchecked"}`} style={(movieRating + 1)<1 && (movieRating + 1) > 0? {"--rating": `${(movieRating + 1) * 100}%`} : {}}></span>
                <span className={`fa fa-star ${movieRating-- > 1? `checked` : movieRating + 1 > 0? "partially-checked" : "unchecked"}`} style={(movieRating + 1)<1 && (movieRating + 1) > 0? {"--rating": `${(movieRating + 1) * 100}%`} : {}}></span>
                <span className={`fa fa-star ${movieRating-- > 1? `checked` : movieRating + 1 > 0? "partially-checked" : "unchecked"}`} style={(movieRating + 1)<1 && (movieRating + 1) > 0? {"--rating": `${(movieRating + 1) * 100}%`} : {}}></span>
                <span className={`fa fa-star ${movieRating-- > 1? `checked` : movieRating + 1 > 0? "partially-checked" : "unchecked"}`} style={(movieRating + 1)<1 && (movieRating + 1) > 0? {"--rating": `${(movieRating + 1) * 100}%`} : {}}></span>
                <span className={`fa fa-star ${movieRating-- > 1? `checked` : movieRating + 1 > 0? "partially-checked" : "unchecked"}`} style={(movieRating + 1)<1 && (movieRating + 1) > 0? {"--rating": `${(movieRating + 1) * 100}%`} : {}}></span>
                <span className={`fa fa-star ${movieRating-- > 1? `checked` : movieRating + 1 > 0? "partially-checked" : "unchecked"}`} style={(movieRating + 1)<1 && (movieRating + 1) > 0? {"--rating": `${(movieRating + 1) * 100}%`} : {}}></span>
                <span className={`fa fa-star ${movieRating-- > 1? `checked` : movieRating + 1 > 0? "partially-checked" : "unchecked"}`} style={(movieRating + 1)<1 && (movieRating + 1) > 0? {"--rating": `${(movieRating + 1) * 100}%`} : {}}></span>
                <span className={`fa fa-star ${movieRating-- > 1? `checked` : movieRating + 1 > 0? "partially-checked" : "unchecked"}`} style={(movieRating + 1)<1 && (movieRating + 1) > 0? {"--rating": `${(movieRating + 1) * 100}%`} : {}}></span>
                <span className={`fa fa-star ${movieRating-- > 1? `checked` : movieRating + 1 > 0? "partially-checked" : "unchecked"}`} style={(movieRating + 1)<1 && (movieRating + 1) > 0? {"--rating": `${(movieRating + 1) * 100}%`} : {}}></span>
            </div>
            <h2 className = 'release_date'>Date Released: {getDay()}</h2>
            <h3 className = 'genre_list'>Genres: {genreList.join(', ')}</h3>
        </div>
    )
}

export default MoviePage;