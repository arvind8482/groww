'use client';   
import React from 'react'
import Header from '../components/common/header/page'
import WhatAppDesign from '../components/AppDesign/what-app-design/page' 
import AboutAppDesign from '../components/appdesign/about-app-design/page'
import Roadmap from '../components/appdesign/roadmap/page'
import FooterTopBox from '../components/common/footer-top-box/page'
import Footer from '../components/common/footer/page'


function AppDesign() {
  return (
    <>
        <Header />
        <AboutAppDesign/>   
        <WhatAppDesign/> 
        <Roadmap/> 
        <FooterTopBox/>
        <Footer/>
    </>
  )
}

export default AppDesign