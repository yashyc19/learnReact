import React from 'react'
import mountainBike from '../assets/images/mountainBike.png'

export const Card = () => {
    return (
        <div className='cardsection'>
            <div className='card'>
                <div className='card--image'>
                    <img src={mountainBike} alt='mountainBike' />
                </div>
                <div className='card--tag'>
                    SOLD OUT
                </div>
                <div className='card--rating'>
                    <i class="fa fa-solid fa-star" /> 5.0(100) · USA
                </div>
                <div className='card--title'>
                    Group Mountain Biking
                </div>
                <div className='card--pricing'>
                    <b>From $50</b>/person
                </div>
            </div>
        </div>
    );
};