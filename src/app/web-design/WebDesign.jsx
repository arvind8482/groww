'use client';   
import React from 'react' 
import WhatWebDesign from '../components/webdesign/what-we-design/WhatWeDesign'
import QualityService from '../components/webdesign/quality-service/QualityService'
import Roadmap from '../components/webdesign/roadmap/Roadmap'  
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 


function WebDesign() {
  return (
    <>  
            <WhatWebDesign/>
            <QualityService/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default WebDesign