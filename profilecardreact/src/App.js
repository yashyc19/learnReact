import React from 'react'
import { Info } from './Components/Info'
import { About } from './Components/About';
import { Interests } from './Components/Interests';
import { Contact } from './Components/Contact';

export const App = () => {
    return (
        <div className='card'>
            <Info />
            <About />
            <Interests />
            <Contact />
        </div>
    );
}