'use client';   
import React from 'react' 
import AboutSection from '../components/about/about-section/AboutSection'
import WhoWeAre from '../components/about/who-we-are/WhoWeAre'
import WhatWeDo from '../components/about/what-we-do/WhatWeDo'
import OurApproach from '../components/about/our-approaach/OurApproach'
import WhyChooseUs from '../components/about/why-choose-us/WhyChooseUs'
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 

function Page() {
  return (
    <>  
            <AboutSection/>
            <WhoWeAre/>
            <WhatWeDo/>
            <OurApproach/>
            <WhyChooseUs/>
            <FooterTopBox/> 
    </>
  )
}

export default Page