import React from 'react'
import kn from './Images/Kabir-Naik.jpg'

function TestItems(props) {
    return (
        <div>
            <div class="card mr-auto ml-auto">
                <div class="mx-0 mx-xl-5 mx-md-5  my-5">
                <div class="mx-5 ">    
                <img src={props.cimage} class="card-img-top" alt="..." style={{borderRadius:"10rem"}}/>
                </div>
                </div>
                <div class="card-body">
                    <p class="card-text">{props.ctext}</p>
                </div>
                <div class="card-footer text-muted">
                    {props.person}
                </div>
            </div>
        </div>
    )
}

export default TestItems
