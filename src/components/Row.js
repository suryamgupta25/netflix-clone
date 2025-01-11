import React, {useState, useEffect, useRef} from 'react';
import instance from '../axios';
import './Row.css';

// from HomeScreen, props will be in the form of:
// {title, fetchUrl}
function Row(props){

    const [movies, setMovies] = useState([]);

    async function getMovies(){
        const request = await instance.get(props.fetchUrl);
        setMovies(request.data.results);
        return request;
    }

    useEffect(() => getMovies, [props.fetchUrl]);

    console.log(movies)

    /*
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, [])
    */

    return (
        <div className ='row'>
            <h2 className = 'row_category fade_in'>{props.title}</h2>
            
            <div className = 'row_posters fade_in'>
                {movies.map((movie, index) =>  <img className = "poster_image" src = {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt = ""></img>)}
            </div>
        </div>
    )
}

export default Row