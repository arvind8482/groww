import React from 'react' 
import Head from 'next/head'
import WhatItConsulting from '../components/it-consulting/what-it-consulting/WhatItConsulting'
import AboutItConsulting from '../components/it-consulting/about-it-consulting/AboutItConsulting'
import Roadmap from '../components/it-consulting/roadmap/Roadmap'  
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 

function Page() {
  return (
    <>   
         <Head>
          <title>Vision Groww - It Consulting</title>
        </Head>
            <AboutItConsulting/>
            <WhatItConsulting/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default Page