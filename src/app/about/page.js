import React from 'react'
import Header from '../components/common/header/page'
import AboutSection from '../components/about/about-section/page'
import WhoWeAre from '../components/about/who-we-are/page'
import WhatWeDo from '../components/about/what-we-do/page'
import OurApproach from '../components/about/our-approaach/page'
import WhyChooseUs from '../components/about/why-choose-us/page'
import FooterTopBox from '../components/common/footer-top-box/page'
import Footer from '../components/common/footer/page'

function page() {
  return (
    <>
       <Header />
       <AboutSection/>
       <WhoWeAre/>
       <WhatWeDo/>
       <OurApproach/>
       <WhyChooseUs/>
       <FooterTopBox/> 
       <Footer /> 
    </>
  )
}

export default page