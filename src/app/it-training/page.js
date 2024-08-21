'use client';   
import React from 'react'
import Header from '../components/common/header/page'
import WhatItTraining from '../components/it-training/what-it-training/page'
import AboutItTraining from '../components/it-training/about-it-training/page'
import Roadmap from '../components/it-training/roadmap/page'  
import FooterTopBox from '../components/common/footer-top-box/page'
import Footer from '../components/common/footer/page'

function ItTraining() {
  return (
    <>
            <Header />   
            <AboutItTraining/>
            <WhatItTraining/>
            <Roadmap/>
            <FooterTopBox/>
            <Footer/> 
    </>
  )
}

export default ItTraining