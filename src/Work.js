import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MFFilm from './MFFilm'
import WorkItems from './WorkItems'
import wp1 from './Images/WNPOSTER1.PNG'
import wp2 from './Images/WPOSTER2.png'
import wp3 from './Images/WNPOSTER3.PNG'
import wp4 from './Images/WPOSTER4.png'
import wp5 from './Images/WPOSTER5.jpg'
import lop from './Images/LIFE_OF_PAO.png'
import tms from './Images/THE_MILK_STORY.png'
import af2020 from './Images/ASSAM_FLOODS_2020.png'
import bhui from './Images/Bhuiput.png'
import elg from './Images/elg.png'
function Work() {
    return (
        <div>
        <div class="container-fluid px-0">
        <Navbar pc={false} />
        <div class="container-fluid py-5 workdiv" style={{backgroundColor:"white",color:"black"}} >
            <div class="py-0 py-xl-5 py-md-5">
                <div class="row d-flex align-items-center py-2">
                    <div class="col-12 col-xl-12 col-md-12 py-4">
                        <div class="display-6" style={{fontWeight:200}}>Capturing The Human Experience</div>
                        
                    </div>
                    
                </div>
            </div>
            </div>
            <h1 class="py-5">DOCUMENTARIES</h1>
            <WorkItems link={'https://www.youtube.com/watch?v=7WaPSOuPY-E'} image={bhui} title="भुंयपुत | DOCUMENTARY" text="The story of a 100-year-old farmer who has withstood the tempests of time.In this global age wherein people pursue materialistic goals, one man dares to question this paradigm. Simplicity being the arrow of his spirit took him on the meandering path of life, where today he stands at a crossroad seeing farms around him being abandoned & modern generations not nurturing the legacy he sowed. He fears these farms will vanish with the passage of time which takes him further away from the clutches of modern society.'Bhuiput' covers the story of an inspiring man who dedicated the entirety of his life to the reins of his land"/>
            <WorkItems link={'https://www.youtube.com/watch?v=h-InAtg0gz4&t=525s'} image={elg} title="THE E-LEARNING GAP" text="Since the beginning of 2020, the dreaded Covid-19 pandemic has taken the world by storm and has brought forth countless challenges in each and every sphere of life. The education system was no exception. The Education System in Goa has been grappling with the challenges since the past year and a half. The closing of every school in the state was thought to be a temporary measure in the initial phases, but soon became a part of everyday life with the massive surge of Covid-19 cases. With no other options left, the education system jumped onto the E-Learning bandwagon. "/>
            <WorkItems link={'https://www.youtube.com/watch?v=hfsveSuirmI'} image={wp1} title="GOA'S CANE ARTISANS" text="Cane and Bamboo have a very close and old relationship with mankind. Cane and bamboo craft is believed to be the oldest creation of man and is considered to be the oldest craft which was initiated in Goa region. These craftsmen mainly made cane items which were of use to fishermen during catching of fish and also fabricated a Dalli in which they could store the dry grains and other food items."/>
            <WorkItems link={'https://www.youtube.com/watch?v=mJChoEvx-mc&t=370s'} image={wp2} title="MINING DILEMMA" text="Mining activity has finally resumed in Goa's mining belt bringing much needed relief to thousands who are dependent on this activity. However, this environmentally destructive activity needs to be regulated to avoid past mistakes and it's smooth sailing. Need based & not greed based mining should be the mantra."/>
            <WorkItems link={'https://www.youtube.com/watch?v=EW_dqLHfgWY'} image={wp3} title="KAJUGOTTO" text=" Kajugotto is a totally self reliant village, hardly dependent on the outside world for any of its basic requirements.The nearest motorable road to Kajugotto is over 3 Km away.The nearest high school is 3.5 Km away. Children walk for nearly three hours (to and fro) everyday to reach the high school."/>
            <WorkItems link={'https://www.youtube.com/watch?v=4IlNkCspmKs'} image={wp4} title="TRAIL OF DESTRUCTION" text="We are at a critical crossroads in our world today. We are the first generation on our planet to truly understand the far-reaching impacts that human actions are having on our environment, and yet, we are the last generation that can truly make the biggest impact in solving these challenges. The development of the country is implied by the construction of many large projects like building large scale dams, bridges and nationwide highways."/>
            <WorkItems link={'https://www.youtube.com/watch?v=qe8cant_b64'} image={wp5} title="RENDER : GOA'S DYING OCCUPATION" text="Toddy tapping is the collection of juice from the bud or spadix of palm tree flowers - has been practised in Southeast Asia for centuries. British explorer Captain Jatoddy distillerymes Cook found the islanders of Sawut in the Indonesian archipelago, tapping toddy from palm trees in 1770, and using it as a drink and an animal feed. This profession is not attracting the younger generation due to huge risk to life involved in this profession and poor returns."/>

            <MFFilm img1={lop} img2={tms} img3={af2020} link1={'https://youtu.be/rZcWl7ajSRQ'} link2={'https://youtu.be/3ojMSu00Fuk'} link3={'https://youtu.be/tyASwdp2VZI '}/>
            </div>
            <Footer />
        </div>
    )
}

export default Work
