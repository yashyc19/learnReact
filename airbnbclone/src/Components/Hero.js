import React from 'react'
import photoGrid from '../assets/images/photoGrid.png'

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero--photo">
                <img className='hero--photo--grid' src={photoGrid} alt="photoGrid"/>
            </div>
            <div className="hero--content">
                <h1 className="hero--content--title">
                    Online Experiences
                </h1>
                <p className="hero--content--text">
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    );
};