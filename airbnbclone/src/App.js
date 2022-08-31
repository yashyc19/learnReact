import React from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Card } from './Components/Card'

export const App = () => {
    return (
        <div className='application'>
            <Navbar />
            <Hero />
            <Card />
        </div>
    );
};