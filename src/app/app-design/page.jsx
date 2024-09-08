'use client';   
import React from 'react' 
import Head from 'next/head'
import WhatAppDesign from '../components/appdesign/what-app-design/WhatAppDesign' 
import AboutAppDesign from '../components/appdesign/about-app-design/AboutAppDesign'
import Roadmap from '../components/appdesign/roadmap/RoadMap'
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 


function Page() {
  return (
    <> 
         <Head>
          <title>Vision Groww - App Design</title>
        </Head>
        <AboutAppDesign/>   
        <WhatAppDesign/> 
        <Roadmap/> 
        <FooterTopBox/> 
    </>
  )
}

export default Page