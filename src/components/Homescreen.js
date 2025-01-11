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
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
            />
            <Row
            title="Top Rated"
            fetchUrl = {requests.fetchTopRated}
            />
            <Row
            title="Action Movies"
            fetchUrl = {requests.fetchTopRated}
            />
            <Row
            title="Comedy Movies"
            fetchUrl = {requests.fetchTopRated}
            />
            <Row
            title="Horror Movies"
            fetchUrl = {requests.fetchTopRated}
            />
            <Row
            title="Romance Movies"
            fetchUrl = {requests.fetchTopRated}
            />
            <Row
            title="Documentaries"
            fetchUrl = {requests.fetchTopRated}
            />

        </div>
    )
}

export default HomeScreen