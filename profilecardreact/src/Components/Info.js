import React from 'react'

export const Info = () => {
    return (
        <div className='container'>
            <div className='info'>
                <div><img alt='Elon Musk' className='info--image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg' /></div>
                <div><h1 className='info--name'> Elon Musk </h1></div>
                <div><div className='info--title'> CEO, Tesla </div></div>
                <div><a href='https://www.elonmusk.com' className='info--link'>https://www.elonmusk.com</a></div>
                <div className='info--contact'>
                    <div className='info--contact--email'>Email</div>
                    <div className='info--contact--linkedin'>LinkedIn</div>
                </div>
                <hr className='info--hr'/>
            </div>
        </div>
    );
};