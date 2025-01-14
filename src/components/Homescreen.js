import React from 'react';
import "./Homescreen.css";
import Nav from './Nav.js';
import Banner from './Banner.js';
import Row from './Row.js';
import requests from '../Requests.js';

function HomeScreen(){
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

export default HomeScreen