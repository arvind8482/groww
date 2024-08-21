'use client';   
import React from 'react'
import Header from '../components/common/header/page'
import WhatItConsulting from '../components/it-consulting/what-it-consulting/page'
import AboutItConsulting from '../components/it-consulting/about-it-consulting/page'
import Roadmap from '../components/it-consulting/roadmap/page'  
import FooterTopBox from '../components/common/footer-top-box/page'
import Footer from '../components/common/footer/page'

function ItConsulting() {
  return (
    <>
            <Header />   
            <AboutItConsulting/>
            <WhatItConsulting/>
            <Roadmap/>
            <FooterTopBox/>
            <Footer/> 
    </>
  )
}

export default ItConsulting