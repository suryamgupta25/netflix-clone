import React, {useState, useEffect} from 'react';
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

    return (
        <div className ='row'>
            <h2 className = 'row_category'>{props.title}</h2>
        </div>
    )
}

export default Row