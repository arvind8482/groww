'use client';   
import React from 'react' 
import WhatAppDesign from '../components/appdesign/what-app-design/page' 
import AboutAppDesign from '../components/appdesign/about-app-design/page'
import Roadmap from '../components/appdesign/roadmap/page'
import FooterTopBox from '../components/common/footer-top-box/page' 


function AppDesign() {
  return (
    <> 
        <AboutAppDesign/>   
        <WhatAppDesign/> 
        <Roadmap/> 
        <FooterTopBox/> 
    </>
  )
}

export default AppDesign