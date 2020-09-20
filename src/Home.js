import React from 'react'
import Carousel from './Carousel';
import FeatureFilm from './FeatureFilm';
import Footer from './Footer';
import Header from './Header';
import MFFilm from './MFFilm';
import Navbar from './Navbar';

function Home() {
    return (
        <div>
            <Navbar pc={false}/>
            <Header />
            <FeatureFilm />
            <Carousel />
            <MFFilm />
            <Footer />
        </div>
    )
}

export default Home
