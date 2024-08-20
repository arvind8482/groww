'use client';
import React from 'react'
import Head from 'next/head';
import Welcome from '../components/home/welcome/page'
import Services from '../components/home/servives/page'
import WhyVisionGroww from '../components/home/why-visiongroww/page'
import AboutUs from '../components/home/about-us/page'
import ClientSection from '../components/home/client-section/page'
 
 

function Main() {
  return (
    <>
       <Head>
        <title>About Us - Vision Groww</title>
        <meta name="description" content="Learn more about us, what we do, and why you should choose us." />
      </Head>
        <Welcome/>
        <Services/>
        <WhyVisionGroww/>
        <AboutUs/>  
        <ClientSection/>
    </>
  )
}

export default Main