'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeading from '../../common/section-heading/SectionHeading'

function WhatWebDesign() {
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
                    <SectionHeading subheading="What we’ll provide" heading="In Web Design" align="text-left" line="mx-none" /> 
                    <p className='text-default-size '>
                    With Visiongroww&apos;s web design services, you can be confident that your online presence will be professionally crafted, secure, and maintained to the highest standards. Let us help you create a website that not only meets but exceeds your expectations.
                      </p>
               
               </div>

           </div>
    </section>
</>
  )
}

export default WhatWebDesign