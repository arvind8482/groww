'use client';   
import React from 'react'
import Header from '../components/common/header/page'
import WhatWebDesign from '../components/webdesign/what-we-design/page'
import QualityService from '../components/webdesign/quality-service/page'
import Roadmap from '../components/webdesign/roadmap/page'  
import FooterTopBox from '../components/common/footer-top-box/page'
import Footer from '../components/common/footer/page'


function WebDesign() {
  return (
    <>
            <Header />   
            <WhatWebDesign/>
            <QualityService/>
            <Roadmap/>
            <FooterTopBox/>
            <Footer/>
    </>
  )
}

export default WebDesign