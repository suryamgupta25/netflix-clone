import React, {useState, useEffect} from 'react';
import "./Homescreen.css";
import Nav from './Nav.js';
import instance from '../axios';
import Banner from './Banner.js';
import Row from './Row.js';
import requests from '../Requests.js';


function HomeScreen(){

    const [moviePages, setMoviePages] = useState([]);

    /*
    const movieRequests = [requests.fetchTopRated,
        requests.fetchNetflixOriginals,
        requests.fetchTrending,
        requests.fetchActionMovies,
        requests.fetchComedyMovies, 
        requests.fetchHorrorMovies, 
        requests.fetchRomanceMovies, 
        requests.fetchDocumentaries
    ]
    */

    useEffect(() => {
        async function addMovieRoutes(){
            const request = await instance.get(requests.fetchTopRated);
            setMoviePages([...moviePages, request.data.results])
            return request;
        }
        addMovieRoutes();
    });

    if (moviePages.length === 0) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className='homeScreen'>
            <Nav/>
            <Banner/>
            <Row
            title = "For You"
            fetchUrl = {requests.fetchTopRated}
            />
            <Row
            title = "Netflix Originals"
            fetchUrl = {requests.fetchNetflixOriginals}
            />
            <Row
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
            />
            <Row
            title="Top Rated"
            fetchUrl = {requests.fetchTopRated}
            />
            <Row
            title="Action Movies"
            fetchUrl = {requests.fetchActionMovies}
            />
            <Row
            title="Comedy Movies"
            fetchUrl = {requests.fetchComedyMovies}
            />
            <Row
            title="Horror Movies"
            fetchUrl = {requests.fetchHorrorMovies}
            />
            <Row
            title="Romance Movies"
            fetchUrl = {requests.fetchRomanceMovies}
            />
            <Row
            title="Documentaries"
            fetchUrl = {requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen;