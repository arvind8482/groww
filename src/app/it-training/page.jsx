import React from 'react'  
import WhatItTraining from '../components/it-training/what-it-training/WhatItTraining'
import AboutItTraining from '../components/it-training/about-it-training/AboutItTraining'
import Roadmap from '../components/it-training/roadmap/Roadmap'  
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 
export const metadata = {
  title: "It Training - Vision Groww",
  description: "",
};
function Page() {
  return (
    <>   
        
            <AboutItTraining/>
            <WhatItTraining/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default Page