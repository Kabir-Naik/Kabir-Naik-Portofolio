import React from 'react'
import Carousel from './Carousel';
import FeatureFilm from './FeatureFilm';
import Footer from './Footer';
import Header from './Header';
import MFFilm from './MFFilm';
import Navbar from './Navbar';
import mid from "./Images/MINING_DILEMMA.png";
import rend from "./Images/RENDER.png";
import kaju from "./Images/POSTER 3.png";

function Home() {
    return (
        <div>
            <Navbar pc={true}/>
            <Header />
            <FeatureFilm />
            <Carousel />
            <MFFilm img1={kaju} img2={mid} img3={rend} link1={'https://youtu.be/X9go1PyPSog'} link2={'https://youtu.be/mJChoEvx-mc'} link3={'https://youtu.be/qe8cant_b64'} />
            <Footer />
        </div>
    )
}

export default Home
