'use client';   
import React from 'react'
import Header from '../components/common/header/page'
import WhatMasterClasses from '../components/master-classes/what-master-classes/page'
import AboutMasterClasses from '../components/master-classes/about-master-classes/page'
import Roadmap from '../components/master-classes/roadmap/page'  
import FooterTopBox from '../components/common/footer-top-box/page'
import Footer from '../components/common/footer/page'

function ItConsulting() {
  return (
    <>
            <Header />   
            <AboutMasterClasses/>
            <WhatMasterClasses/>
            <Roadmap/>
            <FooterTopBox/>
            <Footer/> 
    </>
  )
}

export default ItConsulting