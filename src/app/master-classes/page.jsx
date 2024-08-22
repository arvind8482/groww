'use client';   
import React from 'react' 
import WhatMasterClasses from '../components/master-classes/what-master-classes/WhatMasterClasses'
import AboutMasterClasses from '../components/master-classes/about-master-classes/AboutMasterClasses'
import Roadmap from '../components/master-classes/roadmap/Roadmap'  
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 

function Page() {
  return (
    <>  
            <AboutMasterClasses/>
            <WhatMasterClasses/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default Page