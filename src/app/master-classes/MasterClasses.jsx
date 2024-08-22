'use client';   
import React from 'react' 
import WhatMasterClasses from '../components/master-classes/what-master-classes/page'
import AboutMasterClasses from '../components/master-classes/about-master-classes/page'
import Roadmap from '../components/master-classes/roadmap/page'  
import FooterTopBox from '../components/common/footer-top-box/page' 

function MasterClasses() {
  return (
    <>  
            <AboutMasterClasses/>
            <WhatMasterClasses/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default MasterClasses