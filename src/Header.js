import React from 'react'
import kni from "./Images/PROFILE_IMAGE.jpg"
function Header() {
    return (
        <div>
        <div style={{backgroundColor:"black"}} class="container-fluid py-5">
            <div class="py-0 py-xl-5 py-md-5">
                <div class="row d-flex align-items-center py-5">
                    <div class="col-12 col-xl-6 col-md-6 py-5">
                        <div class="display-1" style={{color:"white",fontWeight:200}}>KABIR NAIK</div>
                        <hr style={{color:"white" ,margin:50}} />
                        <div class="h2"style={{color:"white",fontWeight:"50"}}>Documentary film maker based in Goa</div>
                    </div>
                    <div class="col-12  col-xl-6 col-md-6 py-5">
                        <img src={kni} class="img-fluid" style={{borderRadius:"10rem"}} width="300px"  />
                    </div>
                </div>
            </div>
            </div>
            </div>
    )
}

export default Header
