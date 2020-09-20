import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
    return (
        <div class="container-fluid mb-0" style={{backgroundColor:"black"}}>
           <div class="row pt-5">
                <div class='col-12 col-md-6 col-xl-6 py-3'>
                    <div style={{textAlign:"start"}}>
                    <h3 class="mx-5" style={{color:"white"}}>Kabir Naik</h3>
                    <p class="mx-5 mt-4" style={{fontWeight:"100",color:"white"}}>Enjoy , Explore , Create</p>
                    </div>
                </div>
                <div class='col-12 col-md-6 col-xl-6'>
                    <div class="row">
                        <div class="col-12 col-md-6 col-xl-6 py-3">
                        <div style={{textAlign:"start"}}>                            
                        <h5 class="mx-5"style={{color:"white"}}>Follow</h5>
                        <a href="https://www.youtube.com/c/KabirNaik/" style={{textDecoration:"none"}}><h6 class="mt-4 mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px"}}>YouTube</h6></a>
                        <a href="https://twitter.com/thekabirnaik" style={{textDecoration:"none"}}><h6 class="mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px"}}>Twitter</h6></a>
                        </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-6 py-3">
                        <div style={{textAlign:"start"}}>                            
                        <h5 class="mx-5" style={{color:"white"}}>Explore</h5>
                        <Link to="/" style={{textDecoration:"none"}}><h6 class="mt-4 mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px"}}>Home</h6></Link>
                        <Link to="/work" style={{textDecoration:"none"}}><h6 class="mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px"}}>Work</h6></Link>
                        <Link to="/testimonials" style={{textDecoration:"none"}}><h6 class="mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px"}}>Testimonials</h6></Link>
                        <Link to="/about" style={{textDecoration:"none"}}><h6 class="mx-5" style={{fontWeight:"100",color:"white",marginTop:"0px"}}>About</h6></Link>
                        </div>
                        </div>
                    </div>
                </div>
           </div>
           <h6 style={{fontWeight:"100",color:"white"}}>Copyright © 2020 Kabir Naik. All rights reserved.</h6>
           <br />
        </div>
    )
}

export default Footer
