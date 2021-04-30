import React from 'react'
import "./FF.css"
function FeatureFilm() {
    return (
        <div class="container py-5">
            <h1 style={{fontSize:"3rem"}} class="my-5">ABOUT ME</h1>
            <h4 style={{fontWeight:"350"}} class="my-5">I am just a curious kid trying to understand and document the world. I love telling stories which matter to me through films and music.</h4>

            <div class="row justify-content-center">
                <div class="col-12 col-md-12 col-xl-12">
            <div class="d-flex justify-content-center" style={{width:"1000"}}>
            <iframe width="853" height="480" src="https://www.youtube.com/embed/aL_OdLbAe1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
            </div>
            
        </div>
    )
}

export default FeatureFilm
