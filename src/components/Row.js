import React, {useState, useEffect, useRef} from 'react';
import instance from '../axios';
import { truncateDescription } from './Banner';
import './Row.css';
//import {Route, useNavigate} from 'react-router-dom';
//import MoviePage from './MoviePage.js';


// from HomeScreen, props will be in the form of:
// {title, fetchUrl}
function Row(props){

    const [movies, setMovies] = useState([]);
    //let useZScore4 = true;

    async function getMovies(){
        const request = await instance.get(props.fetchUrl);
        setMovies(request.data.results);
        return request;
    }

    const [useZScore4, setUseZScore4] = useState(false);

    const handleZScore = () => {
        console.log("Hi");
        setUseZScore4(prev => !prev);
        console.log(useZScore4);
    };

    useEffect(() => getMovies);
    
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        const element = domRef.current;
        observer.observe(element);
        return () => { 
            observer.unobserve(element);
        }
    }, []);

    // Figure out next: How to handle routing to movie pages

    /*

    const navigate = useNavigate();

    const handleClick = (movie) => {
        navigate(<Route exact path='`/movie/{movie?.name}`' element=<MoviePage movie={movie}/>/>);
    }
    
    */

    // React doesn't allow JSX to directly inject a <script> tag into the DOM. It is only used for rendering HTML elements
    return (
        <div className = {`row ${isVisible? 'fade_row' : ''} ${!isVisible? 'hide_row' : ''}`} ref = {domRef}>
            <h2 className = 'row_category'>{props.title}</h2>
            <div className = 'row_posters'>
                {movies.map((movie, index) =>  
                        <div className = "poster_container">
                            <img className = "poster_image" src = {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt = ""></img>
                            <div className = "play_button"></div>
                            <div className = {`movie_info ${useZScore4 ? 'zIndex4' : 'zIndex5'}`} onAnimationStart={handleZScore}>
                                <h2 className = "movie_info_content movie_info_title">{movie?.name || movie?.title || movie?.the_original_title}</h2>
                                <h3 className = "movie_info_content">Rating: {movie.vote_average.toFixed(1)}/10</h3>
                                <h3 className = "movie_info_content">{truncateDescription(movie?.overview || "", 100)}</h3>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Row;