'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeading from '../../common/section-heading/SectionHeading'

function AboutAppDesign() {
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
                    <SectionHeading subheading="What we’ll provide" heading="App Design Services (Android/iOS)" align="text-left" line="mx-none" /> 
                    <p className='text-default-size '>
                    At Visiongroww, we specialize in creating stunning and user-friendly mobile applications for both
Android and iOS platforms. Our app design services encompass everything from initial concept
to final deployment, ensuring your app is not only visually appealing but also highly functional.
Here’s a detailed look at the components of our app design services:
                     </p>
               
               </div>

           </div>
    </section>
</>
  )
}

export default AboutAppDesign