import React from 'react'
import { Navbar } from './Components/Navbar'
import { Main } from './Components/Main'

export const App = () => {
    return (
        <div className='container'>
            <Navbar />
            <Main />
        </div>
    );
}