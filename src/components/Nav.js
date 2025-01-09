import React from 'react';
import './Nav.css';

function Nav(){
    return (
        <div className='nav'>
            <div className='nav_contents'>
                <img className='nav_logo' src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png' alt=''></img>
                <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''></img>
            </div>
        </div>
    )
}

export default Nav;