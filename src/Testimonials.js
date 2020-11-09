import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import TestItems from './TestItems'
import omd from './Images/omkarD.jpeg'
import nm from './Images/noahM.jpeg'
import an from './Images/amitN.jpeg'
import ss from './Images/sudeshS.jpeg'
import ok from './Images/omK.jpeg'
import rb from './Images/rajatB.jpeg'
import vr from './Images/vishalR.jpeg'

function Testimonials() {
    return (
        <div>
        <div class="container-fluid">
            <Navbar pc={true}/>
            <h1 style={{fontSize:"3rem"}}>Our clients <i class="fas fa-heart" style={{color:"rgb(232,69,69)"}}></i> our services </h1>
            <div class="container">
                <div class="row my-5">
                    <div class="col py-2">
                        <TestItems cimage={omd} ctext="Kabir is young, passionate and enthusiastic and will definitely go a long way as a creator. His videos are very enriching and he tries to bring forward a different aspect of the Goan life, it's cultures and traditions in a simple yet informative way. His videos are worth a watch."  person="Omkar Dharwadkar – Wildlife Film maker / Naturalist"/>
                    </div>
                   
                    <div class="col py-2">
                    <TestItems cimage={an} ctext="Kabir Naik is a deciplined guy who has a strong vision about things around us. The fact that he is trying to showcase our very own culture which is slowly fading away at this young age, earns him real respect. I'm pretty sure, his journey which started a few years would serve a lot to society and nature in coming years."  person="Amit Naik - Musician"/>

                    </div>
                    <div class="col py-2">
                    <TestItems cimage={ss} ctext="Working with Kabir has always been fascinating and a joy to learn something new may be in cinematography or may be in editing the master piece in his hand is just as how he thinks. I still remember when we actually met and discussed a script and we both agreed on doing it without any arguments because thats how filmmakers think and work together"  person="Sudesh Shet - Film Director & Producer"/>

                    </div>
                    <div class="col py-2">
                    <TestItems cimage={ok} ctext="Kabir Naik is one of the most proactive, dilligent and hardest working youngsters in the state. His films inspire me to do more in my life. Extremely proud of him for exploring all facets of Goan culture and helping inform the world about the rural traditions of our beautiful state"  person="Om Khandeparkar - Mass Communication Student"/>

                    </div>
                    <div class="col py-2">
                    <TestItems cimage={rb} ctext="I have seen efforts Kabir is taking to produce quality videos on various topics for quite a some time now. When most youngsters of his age are busy making tiktoks and reels, Kabir's strive to create content relate to nature and cleanliness is absolutely outstanding. I wish him good luck and hope he will create some award and heart winning content again and again"  person="Rajat Bakre - Owner T 4 tasty"/>

                    </div>
                    <div class="col py-2">
                    <TestItems cimage={vr} ctext="Kabir makes videos on everything about Goa that is worth knowing - all the big and important issues, of course, but also the small ordinary things. His topics are well researched and heart felt. Still a teenager, but as the most prolific YouTuber in the state, he has set an example for the other youth to follow."  person="Vishal Rawlley - Film maker / Artist"/>

                    </div>
                    <div class="col py-2">
                    <TestItems cimage={nm} ctext="Kabir is one of the most interesting kids I’ve ever met. I’ve seen a lot of passionate creators at his age. I like to think that I was the same way. But it is very rare to see someone so young with his level of artistic discipline and prowess. I love all the Goa based documentaries that he creates ( I send them to all my family Whatsapp groups), and I think he is truly inspirational, both for me and my peers, and for the next generation of Goan filmmakers." person="Noah Martins - Comedian, Host of DFTL Podcast"/>

                    </div>
                </div>    
            </div>
            </div>
            
            <Footer />
            
            </div>
        
    )
}

export default Testimonials
