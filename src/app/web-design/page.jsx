 import React from 'react' 
import Head from 'next/head'
import WhatWebDesign from '../components/webdesign/what-we-design/WhatWeDesign'
import QualityService from '../components/webdesign/quality-service/QualityService'
import Roadmap from '../components/webdesign/roadmap/Roadmap'  
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 


function Page() {
  return (
    <>  
              <Head>
                  <title>Vision Groww - Web Design</title>
              </Head>
            <WhatWebDesign/>
            <QualityService/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default Page