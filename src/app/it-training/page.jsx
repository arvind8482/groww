import React from 'react' 
import Head from 'next/head'
import WhatItTraining from '../components/it-training/what-it-training/WhatItTraining'
import AboutItTraining from '../components/it-training/about-it-training/AboutItTraining'
import Roadmap from '../components/it-training/roadmap/Roadmap'  
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 

function Page() {
  return (
    <>   
          <Head>
          <title>Vision Groww - It Training</title>
          </Head>
            <AboutItTraining/>
            <WhatItTraining/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default Page