import React from 'react'
import Image from 'next/image'
import SectionHeading from '../../common/section-heading/page'

function AboutItTraining() {
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
                    <SectionHeading subheading="What we’ll provide" heading="IT Training Services" align="text-left" line="mx-none" /> 
                    <p className='text-default-size '>
                    At Visiongroww, our IT Training services are designed to equip individuals and teams with the
skills needed to excel in the ever-evolving tech landscape. Our training programs cover a range
of topics, including Cloud & DevOps, Web Development, AI/ML, and IoT. Here’s a detailed look
at each area:
                     </p>
               
               </div>

           </div>
    </section>
</>
  )
}

export default AboutItTraining