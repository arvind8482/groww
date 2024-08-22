'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeading from '../../common/section-heading/page'

function AboutSection() {
  return (
    <>
    <section className='py-20 px-8 xl:px-0 bg-white'>
           <div className='container mx-auto flex flex-col xl:items-center xl:flex-row xl:space-x-6'>
               <div className='w-full xl:w-1/2'>
               <Image
      src="/images/img-about.png"
      width={619}
      height={368}
      alt=""
    /> 
               </div>
               <div className='w-full xl:w-1/2'>
                    <SectionHeading subheading="About Us" heading="What We Offer" align="text-left" line="mx-none" /> 
                    <p className='text-default-size '>
                    Welcome to VisionGroww, your trusted partner in digital transformation. We specialize in delivering top-notch services across a range of technologies, ensuring your business stands out in the digital landscape. Our comprehensive service offerings and expert team are dedicated to bringing your vision to life with excellence and precision.
                    </p>
               
               </div>

           </div>
    </section>
</>
  )
}

export default AboutSection