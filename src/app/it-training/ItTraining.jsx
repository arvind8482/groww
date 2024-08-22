'use client';   
import React from 'react' 
import WhatItTraining from '../components/it-training/what-it-training/page'
import AboutItTraining from '../components/it-training/about-it-training/page'
import Roadmap from '../components/it-training/roadmap/page'  
import FooterTopBox from '../components/common/footer-top-box/page' 

function ItTraining() {
  return (
    <>   
            <AboutItTraining/>
            <WhatItTraining/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default ItTraining