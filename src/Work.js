import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MFFilm from './MFFilm'
import WorkItems from './WorkItems'
import wp1 from './Images/WPOSTER1.png'
import wp2 from './Images/WPOSTER2.png'
import wp3 from './Images/WPOSTER3.png'
import wp4 from './Images/WPOSTER4.png'
import wp5 from './Images/WPOSTER5.jpg'
import varve from './Images/varve.png'
import ajanta from './Images/AJANTA.png'
import af2020 from './Images/ASSAM_FLOODS_2020.png'
function Work() {
    return (
        <div>
        <div class="container-fluid px-0">
        <Navbar pc={false} />
        <div class="container-fluid py-5 workdiv" style={{backgroundColor:"white",color:"black"}} >
            <div class="py-0 py-xl-5 py-md-5">
                <div class="row d-flex align-items-center py-5">
                    <div class="col-12 col-xl-12 col-md-12 py-5">
                        <div class="display-1" style={{fontWeight:200}}>Some of my <strong>Work</strong></div>
                        <hr style={{margin:50}} />
                        <div class="h2"style={{fontWeight:"50"}}>Capturing The Human Experience</div>
                    </div>
                    
                </div>
            </div>
            </div>
            <h1 class="py-5">DOCUMENTARIES</h1>
            <WorkItems link={'https://www.youtube.com/watch?v=FpjrQWV2ur0'} image={wp1} title="FARMING WOES" text="There is a general concern in Goa over increasing number of people specially youth turning their back to farming. As more and more fields are kept fellow, our dependence on agriculture produce from outside is increasing day by day. It is not the apathy towards farming always the reason for people to shun this age old practice. Many a times, like in this case, farmers are forced to abandon their fields due to external forces like natural calamity and vermin menace. In this situations, the government agencies can play a very crucial role in compensating the farmers for their losses adequately and promptly so that farmers are not forced to give up farming out of frustration and helplessness."/>
            <WorkItems link={'https://www.youtube.com/watch?v=mJChoEvx-mc&t=370s'} image={wp2} title="MINING DILEMMA" text="Mining activity has finally resumed in Goa's mining belt bringing much needed relief to thousands who are dependent on this activity. However, this environmentally destructive activity needs to be regulated to avoid past mistakes and it's smooth sailing. Need based & not greed based mining should be the mantra."/>
            <WorkItems link={'https://www.youtube.com/watch?v=EW_dqLHfgWY'} image={wp3} title="THE SNAKE RESCUER" text="There so many people all around the world doing so many things without seeing the profit, just wanting to help out. This film is about one such person who must have saved the lives of hundreds of animals. He is now giving food to street animals during the lockdown, do help him out on his endeavor."/>
            <WorkItems link={'https://www.youtube.com/watch?v=4IlNkCspmKs'} image={wp4} title="TRAIL OF DESTRUCTION" text="We are at a critical crossroads in our world today. We are the first generation on our planet to truly understand the far-reaching impacts that human actions are having on our environment, and yet, we are the last generation that can truly make the biggest impact in solving these challenges. The development of the country is implied by the construction of many large projects like building large scale dams, bridges and nationwide highways."/>
            <WorkItems link={'https://www.youtube.com/watch?v=qe8cant_b64'} image={wp5} title="RENDER : GOA'S DYING OCCUPATION" text="Toddy tapping is the collection of juice from the bud or spadix of palm tree flowers - has been practised in Southeast Asia for centuries. British explorer Captain Jatoddy distillerymes Cook found the islanders of Sawut in the Indonesian archipelago, tapping toddy from palm trees in 1770, and using it as a drink and an animal feed. This profession is not attracting the younger generation due to huge risk to life involved in this profession and poor returns."/>

            <MFFilm img1={varve} img2={ajanta} img3={af2020} link1={'https://youtu.be/PsdA9LUOK5c'} link2={'https://youtu.be/6k_JSNXGi1o'} link3={'https://youtu.be/tyASwdp2VZI '}/>
            </div>
            <Footer />
        </div>
    )
}

export default Work
