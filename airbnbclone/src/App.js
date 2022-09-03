import React from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Card } from './Components/Card'
// images
import mountainBike from './assets/images/mountainBike.png'
import swimmer from './assets/images/swimmer.png'
import weddingPhoto from './assets/images/weddingPhotography.png'

export const App = () => {
    return (
        <div className='application'>
            <Navbar />
            <Hero />
            <div className='cardsection'>
                <Card 
                    id={1}
                    img={swimmer}
                    tag="SOLD OUT"
                    rating="5.0(8)"
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    price={136} />
                <Card 
                    id={2}
                    img={weddingPhoto}
                    tag="ONLINE"
                    rating="5.0(30)"
                    country="USA"
                    title="Learn Wedding Photography"
                    price={125} />
                <Card 
                    id={3}
                    img={mountainBike}
                    tag=""
                    rating="5.0(100)"
                    country="USA"
                    title="Group Mountain Biking"
                    price={50} />
                <Card 
                    id={1}
                    img={swimmer}
                    tag="SOLD OUT"
                    rating="5.0(8)"
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    price={136} />
                <Card 
                    id={2}
                    img={weddingPhoto}
                    tag="ONLINE"
                    rating="5.0(30)"
                    country="USA"
                    title="Learn Wedding Photography"
                    price={125} />
                <Card 
                    id={3}
                    img={mountainBike}
                    tag=""
                    rating="5.0(100)"
                    country="USA"
                    title="Group Mountain Biking"
                    price={50} />
            </div>
        </div>
    );
};