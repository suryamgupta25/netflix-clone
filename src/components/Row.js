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

    useEffect(() => getMovies);

    //console.log(movies)

    
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


    return (
        <div className = {`row ${isVisible? 'fade_row' : ''} ${!isVisible? 'hide_row' : ''}`} ref = {domRef}>
            <h2 className = 'row_category'>{props.title}</h2>
            <div className = 'row_posters'>
                {movies.map((movie, index) =>  <img className = "poster_image" src = {`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt = ""></img>)}
            </div>
        </div>
    )
}

export default Row