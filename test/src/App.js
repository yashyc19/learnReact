import React from 'react'
import { Joke } from './Components/Joke'

export const App = () => {
    return (
        <div>
            <Joke 
                setup="" 
                punchline="lorem ipsum dolor sit amet and voila we have a puchline" />
            <Joke 
                setup="This is a setup for joke 1" 
                punchline="lorem ipsum dolor sit amet and voila we have a puchline" />
            <Joke 
                setup="This is a setup for joke 2" 
                punchline="lorem ipsum dolor sit amet and voila we have a puchline" />
            <Joke 
                setup="This is a setup for joke 3" 
                punchline="lorem ipsum dolor sit amet and voila we have a puchline" />
            <Joke 
                setup="This is a setup for joke 4" 
                punchline="lorem ipsum dolor sit amet and voila we have a puchline" />
            <Joke 
                setup="This is a setup for joke 5" 
                punchline="lorem ipsum dolor sit amet and voila we have a puchline" />
        </div>
    );
};