import Nav from './Nav.js';
import './Banner.css';
import {useLocation} from "react-router-dom";
import './MoviePage.css';
//import instance from '../axios.js';

// When window.open() is used instead of navigate(), the session resets, so we can't grab the movie directly from the state
// Instead, we can get the id from params and do another lookup using the API to get the movie

export default function MoviePage(){

    const {state} = useLocation();
    const movie = state.movie;

    if (!movie) {
        return (
            <div>Movie not found</div>
        )
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
            <h2 className = 'release_date'>Date Released: {getDay(movie.release_date)}</h2>
            <h3 className = 'genre_list'>Genres: </h3>
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