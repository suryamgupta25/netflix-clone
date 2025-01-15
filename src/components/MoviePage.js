import React from 'react';
import Nav from './Nav.js';
import './Banner.css';

function MoviePage({movie}){
    return (
        <div className = "moviePage">
            <Nav/>
            <div className = 'banner' style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}>
                <div className = 'banner_content'>
                    <h1 className = 'banner_title'>{movie?.name || movie?.title || movie?.the_original_title}</h1>
                    <div className = 'banner_buttons'>
                        <button className = 'banner_button'>Play</button>
                        <button className = 'banner_button'>My List</button>
                    </div>
                    <h1 className = 'banner_description'> {movie?.overview}</h1>
                </div>

                <div className = 'banner_end'/>
            </div>
        </div>
    )
}

export default MoviePage;