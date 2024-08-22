'use client';
import React from 'react'
import Image from 'next/image'
import SectionHeading from '../../common/section-heading/SectionHeading'
import Button from '../../common/button/Button'
function AboutUs() {
  return (
    <>
         <section className='py-20 px-8 xl:px-0 bg-secondary'>
                <div className='container mx-auto flex flex-col xl:flex-row xl:space-x-6'>
                    <div className='w-full xl:w-1/2'>
                    <Image
      src="/images/img-about.png"  className='w-full mb-6 xl:mb-0'  width={619} height={368}
      alt=" VisionGroww is a dynamic and innovative IT solutions provider dedicated to delivering top-notch services in web and app design"
    />
            
                    </div>
                    <div className='w-full xl:w-1/2'>
                         <SectionHeading subheading="About Us" heading="What We Offer" align="text-left" line="mx-none" /> 
                         <p className='text-default-size '>
                         VisionGroww is a dynamic and innovative IT solutions provider dedicated to delivering top-notch services in web and app design, IT training, consultancy, and master classes. Our expert team is committed to helping businesses thrive in the digital age by offering comprehensive and customized solutions. At VisionGroww, we combine creativity, technology, and expertise to drive growth and success for our clients.   
                         </p>
                      <div className='pt-10'>
                      <Button href="/about" text="More about us!" />  
                      </div>
                    </div>
     
                </div>
         </section>
    </>
  )
}

export default AboutUs