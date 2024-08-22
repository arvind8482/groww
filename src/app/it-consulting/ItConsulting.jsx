'use client';   
import React from 'react' 
import WhatItConsulting from '../components/it-consulting/what-it-consulting/page'
import AboutItConsulting from '../components/it-consulting/about-it-consulting/page'
import Roadmap from '../components/it-consulting/roadmap/page'  
import FooterTopBox from '../components/common/footer-top-box/page' 

function ItConsulting() {
  return (
    <>   
            <AboutItConsulting/>
            <WhatItConsulting/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default ItConsulting