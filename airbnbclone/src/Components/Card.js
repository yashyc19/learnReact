import React from 'react'

export const Card = (props) => {
    return (
        <div className='card'>
            <div className='card--image'>
                <img src={props.img} alt='mountainBike' />
            </div>
            <div className='card--tag'>
                {props.tag}
            </div>
            <div className='card--rating'>
                <i class="fa fa-solid fa-star" /> {props.rating} · {props.country}
            </div>
            <div className='card--title'>
                {props.title}
            </div>
            <div className='card--pricing'>
                <b>From ${props.price}</b>/person
            </div>
        </div>
    );
};