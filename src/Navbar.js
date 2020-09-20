import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    const [isnavTop, setisnavTop] = useState(props.pc)
    
    useEffect(() => {
      if(props.pc === false){
      document.addEventListener('scroll', () => {
        const isTop = window.scrollY > 750;
        if (isTop !== isnavTop) {
            setisnavTop(!isnavTop)
            
        }
      });}
    }, [window.scrollY])
  

    const navcol = isnavTop ? "white" : "black" 
    const navitemcol = isnavTop ? "black" : "white"   
    return (
<nav class="navbar navbar-expand-lg px-1 px-lg-5 py-2 sticky-top" style={{backgroundColor:navcol,color:"white",transition:'0.2s'}}>
    <div class="container-fluid px-5">
    <a class="navbar-brand" style={{color:navitemcol}} href="#">Kabir Naik</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span style={{color:navitemcol}}><i class="fas fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" href="#" style={{color:navitemcol}}>Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/work" class="nav-link" href="#" style={{color:navitemcol}}>Work</Link>
        </li>
        <li class="nav-item">
          <Link to="/testimonials" class="nav-link " aria-current="page" href="#" style={{color:navitemcol}}>Testimonials</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link" href="#" style={{color:navitemcol}}>About</Link>
        </li>
       
    </ul>
    </div>
  </div>
  
</nav>
        
    )
}

export default Navbar
