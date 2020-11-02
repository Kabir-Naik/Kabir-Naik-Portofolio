import React from 'react'
import Carousel from './Carousel';
import FeatureFilm from './FeatureFilm';
import Footer from './Footer';
import Header from './Header';
import MFFilm from './MFFilm';
import Navbar from './Navbar';
import mid from "./Images/MINING_DILEMMA.png";
import rend from "./Images/RENDER.png";
import pao from "./Images/LIFE_OF_PAO.png";

function Home() {
    return (
        <div>
            <Navbar pc={false}/>
            <Header />
            <FeatureFilm />
            <Carousel />
            <MFFilm img1={mid} img2={rend} img3={pao} link1={'https://youtu.be/mJChoEvx-mc'} link2={'https://youtu.be/qe8cant_b64'} link3={'https://youtu.be/rZcWl7ajSRQ'}/>
            <Footer />
        </div>
    )
}

export default Home
