import Nav from './Nav.js';
import './Banner.css';
import {useLocation} from "react-router-dom";
//import instance from '../axios.js';

// When window.open() is used instead of navigate(), the session resets, so we can't grab the movie directly from the state
// Instead, we can get the id from params and do another lookup using the API to get the movie

function MoviePage(){

    const {state} = useLocation();
    const movie = state.movie;

    if (!movie) {
        return <div>Movie not found</div>;
    }
    
    function getDay(day){
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
        let dates = day.split("-")
        return `${months[dates[1]]} ${dates[2]}, ${dates[0]}`

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

            
            <h1 className='rating_score'>Rating: {movie.vote_average.toFixed(1)}/10</h1>
            <h3 className='rating_score'>(across {movie.vote_count} reviewers)</h3>
            <h2 className = 'release_date'>Date Released: {getDay(movie.release_date)}</h2>
            {
                // Optional: Create 10 stars here and color them in based on the rating score
            }
            {
                // Required: Write a list of genres based on the movie's genres
            }
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>
            <h1>Surlax</h1>

        </div>
    )
}

export default MoviePage;