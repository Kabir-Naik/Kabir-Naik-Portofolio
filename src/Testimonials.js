import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import TestItems from './TestItems'
import kn from './Images/Kabir-Naik.jpg'

function Testimonials() {
    return (
        <div>
        <div class="container-fluid">
            <Navbar pc={true}/>
            <h1 style={{fontSize:"3rem"}}>Our clients <i class="fas fa-heart" style={{color:"rgb(232,69,69)"}}></i> our services </h1>
            <div class="container">
                <div class="row my-5">
                    <div class="col py-2">
                        <TestItems cimage={kn} ctext="Simply Amazing"  person="Kabir Naik"/>
                    </div>
                    <div class="col py-2">
                    <TestItems cimage={kn} ctext="Some quick example text to build on the card title and make up the bulk of the card's content." person="Kabir Naik"/>

                    </div>
                    <div class="col py-2">
                    <TestItems cimage={kn} ctext="Some quick example text to build on the card title and make up the bulk of the card's content."  person="Kabir Naik"/>

                    </div>
                    <div class="col py-2">
                    <TestItems cimage={kn} ctext="Some quick example text to build on the card title and make up the bulk of the card's content."  person="Kabir Naik"/>

                    </div>
                </div>    
            </div>
            </div>
            
            <Footer />
            
            </div>
        
    )
}

export default Testimonials
