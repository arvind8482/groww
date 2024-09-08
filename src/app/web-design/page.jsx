import React from 'react'; 
import WhatWebDesign from '../components/webdesign/what-we-design/WhatWeDesign'
import QualityService from '../components/webdesign/quality-service/QualityService'
import Roadmap from '../components/webdesign/roadmap/Roadmap'  
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 

export const metadata = {
  title: "Web Design - Vision Groww",
  description: "",
};


function Page() {
  return (
    <>   
            <WhatWebDesign/>
            <QualityService/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default Page