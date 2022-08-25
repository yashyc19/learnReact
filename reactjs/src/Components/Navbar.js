import React from 'react'
import googleLogo from '../images/googleLogo.png'

export const Navbar = () => {
    return (
        <nav className='nav'>
            <img src={googleLogo} alt='logo' width="50" className='nav--logo'/>
            <h3 className='nav--name'>Google</h3>
            <h4 className='nav--title'>React Course - Project 1</h4>
        </nav>
    );
};