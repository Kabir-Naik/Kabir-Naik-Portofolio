import React from 'react'
import Navbar from './Navbar'
import vd from './Images/video.png'
import Footer from './Footer'
import MFFilm from './MFFilm'
import WorkItems from './WorkItems'
import vdi from './Images/wiv.jpg'

function Work() {
    return (
        <div>
        <div class="container-fluid">
        <Navbar pc={true} />
        <div style={{backgroundColor:"white"}} class="container-fluid py-5">
            <div class="py-0 py-xl-5 py-md-5">
                <div class="row d-flex align-items-center py-5">
                    <div class="col-12 col-xl-6 col-md-6 py-5">
                        <div class="display-1" style={{fontWeight:200}}>Check out some of my <strong>Work</strong></div>
                        <hr style={{margin:50}} />
                        <div class="h2"style={{fontWeight:"50"}}>I'm a photographer , videographer and environmentalist</div>
                    </div>
                    <div class="col-12  col-xl-6 col-md-6 py-5">
                        <img src={vd} class="img-fluid" width="400"/>
                    </div>
                </div>
            </div>
            </div>
            <h1 class="py-5">🎥 Works 🎥</h1>
            <WorkItems image={vdi} title="DEFT FILM DIGITAL MEDIA COMPANY" text="Deft Film is the Providence based digital media company that I co-founded with my friend Xander Monge. At Deft Film, I was the creative director, editor, and primary camera operator on many of our projects. Within the first year of our company's creation, we led many advertisements for wineries, restaurants, and local businesses. We also filmed a television commercial for the Tennis Channel, launched a social media management campaign, and have created many public awareness films."/>
            <WorkItems image={vdi} title="DEFT FILM DIGITAL MEDIA COMPANY" text="Deft Film is the Providence based digital media company that I co-founded with my friend Xander Monge. At Deft Film, I was the creative director, editor, and primary camera operator on many of our projects. Within the first year of our company's creation, we led many advertisements for wineries, restaurants, and local businesses. We also filmed a television commercial for the Tennis Channel, launched a social media management campaign, and have created many public awareness films."/>
            <WorkItems image={vdi} title="DEFT FILM DIGITAL MEDIA COMPANY" text="Deft Film is the Providence based digital media company that I co-founded with my friend Xander Monge. At Deft Film, I was the creative director, editor, and primary camera operator on many of our projects. Within the first year of our company's creation, we led many advertisements for wineries, restaurants, and local businesses. We also filmed a television commercial for the Tennis Channel, launched a social media management campaign, and have created many public awareness films."/>
            <WorkItems image={vdi} title="DEFT FILM DIGITAL MEDIA COMPANY" text="Deft Film is the Providence based digital media company that I co-founded with my friend Xander Monge. At Deft Film, I was the creative director, editor, and primary camera operator on many of our projects. Within the first year of our company's creation, we led many advertisements for wineries, restaurants, and local businesses. We also filmed a television commercial for the Tennis Channel, launched a social media management campaign, and have created many public awareness films."/>

            <MFFilm />
            </div>
            <Footer />
        </div>
    )
}

export default Work
