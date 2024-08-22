'use client';
import React from 'react'
import Head from 'next/head';
import Welcome from '../components/home/welcome/Welcome'
import Services from '../components/home/services/Services'
import WhyVisionGroww from '../components/home/why-visiongroww/WhyVisionGroww'
import AboutUs from '../components/home/about-us/AboutUs'
import ClientSection from '../components/home/client-section/ClientScreen'
 
 

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