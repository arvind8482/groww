import React from 'react' 
import Head from 'next/head'
import WhatMasterClasses from '../components/master-classes/what-master-classes/WhatMasterClasses'
import AboutMasterClasses from '../components/master-classes/about-master-classes/AboutMasterClasses'
import Roadmap from '../components/master-classes/roadmap/Roadmap'  
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 
export const metadata = {
  title: "Master Classes - Vision Groww",
  description: "",
};
function Page() {
  return (
    <>  
           <Head>
          <title>Vision Groww - Master Classes</title>
          </Head>
            <AboutMasterClasses/>
            <WhatMasterClasses/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default Page