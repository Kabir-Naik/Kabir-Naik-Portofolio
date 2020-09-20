import React from 'react'

function WorkItems(props) {
    return (
        <div class="container">
            <div class="row py-5">
                <div class="col-12 col-md-4 col-xl-4">
                   <a href={props.link}> <img src={props.image} class="img-fluid" /> </a>
                </div>
                <div class="col-12 col-md-8 col-xl-8" style={{textAlign:"start",overflowWrap: 'break-word'}}>
                <h1>{props.title}</h1>
                <br />
                <p>{props.text}</p>
                </div>
                
            </div>
        </div>
    )
}

export default WorkItems
