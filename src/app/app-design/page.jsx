    
import React from 'react'  
import WhatAppDesign from '../components/appdesign/what-app-design/WhatAppDesign' 
import AboutAppDesign from '../components/appdesign/about-app-design/AboutAppDesign'
import Roadmap from '../components/appdesign/roadmap/RoadMap'
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 
export const metadata = {
  title: "App Design - Vision Groww",
  description: "",
};

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