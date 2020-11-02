import React from 'react'

import "./FF.css"
function MFFilm(props) {
    return (
        <div class="container-fluid mt-5">
            <h1 style={{fontSize:"3rem"}} class="pb-2">MY FILMS</h1>
            <div class="row mx-5 my-5 d-flex justify-content-center">
                <div class="col-12 py-5 col-md-4 col-xl-4 zoomer">
                   <a href={props.link1}> <img src={props.img1} class="img-fluid sva-img" width="250"/></a>
                </div>
                <div class="col-12 py-5 col-md-4 col-xl-4 zoomer">
                <a href={props.link2}><img src={props.img2} class="img-fluid sva-img"  width="250"/></a>
                </div>
                <div class="col-12 py-5 col-md-4 col-xl-4 zoomer">
                <a href={props.link3}><img src={props.img3} class="img-fluid sva-img"  width="250"/></a>
                </div>
            </div>
        </div>
    )
}

export default MFFilm
