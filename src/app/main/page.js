import React from 'react'
import Welcome from '../components/home/welcome/page'
import Services from '../components/home/servives/page'
import WhyVisionGroww from '../components/home/why-visiongroww/page'
import AboutUs from '../components/home/about-us/page'
// import Clients from '../components/home/clients/page'

function Main() {
  return (
    <>
        <Welcome/>
        <Services/>
        <WhyVisionGroww/>
        <AboutUs/>
        {/* <Clients/> */}
    </>
  )
}

export default Main