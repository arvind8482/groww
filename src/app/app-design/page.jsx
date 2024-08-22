'use client';   
import React from 'react' 
import WhatAppDesign from '../components/appdesign/what-app-design/WhatAppDesign' 
import AboutAppDesign from '../components/appdesign/about-app-design/AboutAppDesign'
import Roadmap from '../components/appdesign/roadmap/RoadMap'
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 


function Page() {
  return (
    <> 
        <AboutAppDesign/>   
        <WhatAppDesign/> 
        <Roadmap/> 
        <FooterTopBox/> 
    </>
  )
}

export default Page