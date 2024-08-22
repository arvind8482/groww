'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeading from '../../common/section-heading/SectionHeading'

function AboutItConsulting() {
  return (
    <>
    <section className='py-20 px-8 xl:px-0 bg-white'>
           <div className='container mx-auto flex flex-col xl:items-center xl:flex-row xl:space-x-6'>
               <div className='w-full xl:w-1/2'>
               <Image
      src="/images/web-design-1.png"
      width={619}
      height={368}
      alt=""
    /> 
               </div>
               <div className='w-full xl:w-1/2'>
                    <SectionHeading subheading="IT Consultancy" heading="Services" align="text-left" line="mx-none" /> 
                    <p className='text-default-size '>
                    At Visiongroww, our IT consultancy services are designed to help organizations optimize their IT
infrastructure, streamline processes, and achieve their technology goals. We offer expert
guidance in key areas including Cloud Integration, Cloud Migration, DevOps, and Web
Development. Here’s a detailed look at each consultancy service:

                     </p>
               
               </div>

           </div>
    </section>
</>
  )
}

export default AboutItConsulting