import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import logo from "./Images/logo.png"
import ka1 from "./Images/ka1.jpg"
import ka2 from "./Images/ka2.jpg"
import ka3 from "./Images/ka3.JPG"
import MFFilm from './MFFilm'
import mid from "./Images/MINING_DILEMMA.png";
import rend from "./Images/RENDER.png";
import pao from "./Images/LIFE_OF_PAO.png";
function About() {
    return (
        <div>
            <Navbar pc={false} />
            <div style={{backgroundColor:"black"}} class="container-fluid py-3">
            <div class="py-0 py-xl-5 py-md-5">
                <div class="row d-flex align-items-center py-5">
                    <div class="col-12 col-xl-6 col-md-6 py-5">
                        <div class="display-1" style={{color:"white",fontWeight:200}}>About</div>
                        <hr style={{color:"white" ,margin:50}} />
                        <div class="h5"style={{color:"white",fontWeight:"50"}}>Through my vision, commitment, innovation and creativity I intend to leave a distinct footprint in the realm of non-fiction productions. I aspire to create powerful and qualitative illustrations for the global audience through inspiration, challenge and ingenuity as we know it and take it a notch further to make it more enjoyable for folks from all walks of life.</div>
                    </div>
                    <div class="col-12  col-xl-6 col-md-6 py-5">
                        <img src={logo} class="img-fluid" width="300"/>
                    </div>
                </div>
            </div>
            </div>
            <div class="container py-5">
                <div class="row pt-5">
                    <div class="col-12 col-md-4 col-xl-4  pt-5">
                       <img src={ka1} class="img-fluid" width="350"/>
                    </div>
                    <div class="col-12 col-md-4 col-xl-4  pt-5">
                       <img src={ka3} class="img-fluid" width="350"/>
                    </div>
                    <div class="col-12 col-md-4 col-xl-4  pt-5">
                      <img src={ka2} class="img-fluid" width="350"/>
                    </div>
                </div>
            </div>
            <h1>Why Documentaries ?</h1>
            <div class="mx-0 mx-md-5 mx-xl-5">
            <p class="mx-5">Documentaries are a very important part of who I am. I can’t claim to be storyteller if I can’t seek the magic in the mundane and the living history behind stone. Ever wondered why someone would rescue snakes for no sort of money at all or what it really takes to create just one glass of toddy? These are the questions that keep me up at night, and more often than not, I find my answers in people. Wonderful, strange, passionate and incredible people. And I am irresistibly drawn to telling their stories the only way I know how. Through my lens.</p>    
            </div>
            <br />
            <a href="mailto:thekabirnaik@gmail.com"><i class="fas ico fa-envelope px-3"></i></a>
            <a href="https://www.instagram.com/thekabirnaik/?hl=en"><i class="fab ico fa-instagram px-3"></i></a>
            <a href="https://www.youtube.com/channel/UClktIjGfK68l4GYgrY7ufFA"><i class="fab ico fa-youtube px-3"></i></a>
            <MFFilm img1={mid} img2={rend} img3={pao} link1={'https://youtu.be/mJChoEvx-mc'} link2={'https://youtu.be/qe8cant_b64'} link3={'https://youtu.be/rZcWl7ajSRQ'}/>

            <Footer />
        </div>
    )
}

export default About
