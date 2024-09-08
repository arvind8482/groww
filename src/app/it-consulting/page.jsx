import React from 'react'  
import WhatItConsulting from '../components/it-consulting/what-it-consulting/WhatItConsulting'
import AboutItConsulting from '../components/it-consulting/about-it-consulting/AboutItConsulting'
import Roadmap from '../components/it-consulting/roadmap/Roadmap'  
import FooterTopBox from '../components/common/footer-top-box/FooterTopBox' 
export const metadata = {
  title: "It Consulting - Vision Groww",
  description: "",
};
function Page() {
  return (
    <>   
     
            <AboutItConsulting/>
            <WhatItConsulting/>
            <Roadmap/>
            <FooterTopBox/> 
    </>
  )
}

export default Page