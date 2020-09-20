import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import logo from "./Images/logo.png"
import MFFilm from './MFFilm'
function About() {
    return (
        <div>
            <Navbar pc={false} />
            <div style={{backgroundColor:"black"}} class="container-fluid py-3">
            <div class="py-0 py-xl-5 py-md-5">
                <div class="row d-flex align-items-center py-5">
                    <div class="col-12 col-xl-6 col-md-6 py-5">
                        <div class="display-1" style={{color:"white",fontWeight:200}}>KNF</div>
                        <hr style={{color:"white" ,margin:50}} />
                        <div class="h5"style={{color:"white",fontWeight:"50"}}>I'm a filmmaker , a science lover,  a tech and one of the best people you'd want to meet. Watch like share and if you love my content please Subscribe. I want to share my journey of my life through my videos thus i have my channel. Enjoy Explore and Create guys !! Thank You</div>
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
                       <a href=""> <img src="https://s3-img.pixpa.com/com/640/32060/rob00196-new-qhxsvg.jpg" class="img-fluid" width="300"/></a>
                    </div>
                    <div class="col-12 col-md-4 col-xl-4  pt-5">
                       <a href="" ><img src="https://s3-img.pixpa.com/com/640/32060/rob00196-new-qhxsvg.jpg" class="img-fluid" width="300"/></a>
                    </div>
                    <div class="col-12 col-md-4 col-xl-4  pt-5">
                       <a href=""><img src="https://s3-img.pixpa.com/com/640/32060/rob00196-new-qhxsvg.jpg" class="img-fluid" width="300"/></a>
                    </div>
                </div>
            </div>
            <h1>Kabir Naik</h1>
            <div class="mx-0 mx-md-5 mx-xl-5">
            <p class="mx-5">My name is Robert Samuel McMahon, and I am a 20 year old video creator. I am primarily based in Rhode Island, but I currently attend the School of Visual Arts in New York. I've made films that were featured at multiple different film festivals around the country and have won many awards.  I am a co-founder and creative director at the Rhode Island digital media company, Deft Film.</p>    
            </div>
            <br />
            <MFFilm />
            <Footer />
        </div>
    )
}

export default About
