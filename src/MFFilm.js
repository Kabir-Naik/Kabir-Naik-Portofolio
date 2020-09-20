import React from 'react'
import JMT from './Images/JMT.png'
import "./FF.css"
function MFFilm() {
    return (
        <div class="container-fluid my-5">
            <h1 style={{fontSize:"3rem"}} class="py-5">More Featured Films</h1>
            <div class="row mx-5 my-5 d-flex justify-content-center">
                <div class="col-12 py-5 col-md-4 col-xl-4 zoomer">
                   <a href="https://www.youtube.com/c/KabirNaik/about"> <img src={JMT} class="img-fluid sva-img" width="250"/></a>
                </div>
                <div class="col-12 py-5 col-md-4 col-xl-4 zoomer">
                <a href=""><img src={JMT} class="img-fluid sva-img"  width="250"/></a>
                </div>
                <div class="col-12 py-5 col-md-4 col-xl-4 zoomer">
                <a href=""><img src={JMT} class="img-fluid sva-img"  width="250"/></a>
                </div>
            </div>
        </div>
    )
}

export default MFFilm
