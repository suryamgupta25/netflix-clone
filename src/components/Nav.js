import React, { useState, useEffect } from 'react';
import './Nav.css';
import {useNavigate} from 'react-router-dom';


function Nav(){

    const [show, handleShow] = useState(false);

    const navigate = useNavigate();

    const moveNavbar = () => {
        if (typeof window !== 'undefined'){
            if (window.scrollY > 280){
                handleShow(true);
            } else if (window.scrollY < 240){
                handleShow(false);
            }
        } else {
            throw new Error("Window not defined!")
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", moveNavbar);
        return () => window.removeEventListener("scroll", moveNavbar);
    }, []);

    // Closure instead of function
    const handleHomeClick = () => {
        navigate('/home', {});
    }

    return (
        <div className='nav'>
            <div className={`nav_contents ${show && 'nav_black'}`}>
                {
                    // On click, need a closure, not a direct function call, else the function will always be called when the page is loading
                }
                <img className='nav_logo' src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png' alt='' onClick={() => handleHomeClick()}></img>
                <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''></img>
            </div>
        </div>
    )

}

export default Nav;