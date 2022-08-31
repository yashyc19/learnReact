import React from 'react'
import airbnbLogo from '../assets/images/airbnbLogo.png'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <a href='/'><img className='navbar--logo' src={airbnbLogo} alt='airbnbLogo' /></a>
        </nav>
    );
};