import React, { useState, useEffect } from 'react';
import "./Banner.css";
import requests from "../Requests.js";
import instance from "../axios.js";


function Banner(){

    const [movie, setMovie] = useState([]);

    async function getBannerMovie(){
        const request = await instance.get(requests.fetchTopRated);
        console.log(request)
        setMovie(request.data.results[Math.floor(Math.random() * (request.data.results.length - 1))])
        return request;
    }

    useEffect(() => getBannerMovie, [])

    console.log("Obtained Banner Movie: ")
    console.log(movie)
    try {
        console.log(movie?.overview);
    } catch (error) {
        throw new Error ("Invalid Movie!")
    }

    // Truncates the description to the first n characters, and add ... to the end
    // If the n'th character is in the middle of the word, cut off the last word and add ... to the end

    function truncateDescription(string, n){
        if (string.length > n - 3){
           const newString = string.substring(0, n - 3)
           const words = newString.split(' ')
           words.pop()
           return words.join(' ') + "...";
        } else {
            return string;
        }
    }
    
    // For Banner.css
    // background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/800px-Black_flag.svg.png");

    return (
        <header className = 'banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        }}>
            <div className = 'banner_content'>
                <h1 className = 'banner_title'>{movie?.name || movie?.title || movie?.the_original_title}</h1>
                <div className = 'banner_buttons'>
                    <button className = 'banner_button'>Play</button>
                    <button className = 'banner_button'>My List</button>
                </div>
                <h1 className = 'banner_description'> {truncateDescription(movie?.overview || "", 200)}</h1>
            </div>

            <div className = 'banner_end'/>
        </header>
    )
}

export default Banner