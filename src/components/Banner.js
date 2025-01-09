import React from 'react';
import "./Banner.css";

function Banner(){

    function truncateDescription(string, n){
        if (string.length > n){
            return string.substring(0, n) + "...";
        } else {
            return string;
        }
    }

    return (
        <header className = 'banner'>
            <div className = 'banner_content'>
                <h1 className = 'banner_title'>Movie Title</h1>
                <div className = 'banner_buttons'>
                    <button className = 'banner_button'>Play</button>
                    <button className = 'banner_button'>My List</button>
                </div>
                <h1 className = 'banner_description'> {truncateDescription('Halsfnapnfgoajbgnalakgpashgoasjnfouabigaos;gnaousdffagdaglnsakgnfao;neeeeeeeeeeeeeeeeeeeeeeee', 147)}</h1>
            </div>

            <div className = 'banner_end'/>
        </header>
    )
}

export default Banner