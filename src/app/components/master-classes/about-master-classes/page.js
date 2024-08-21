import React from 'react'
import Image from 'next/image'
import SectionHeading from '../../common/section-heading/page'

function AboutMasterClasses() {
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
                    <SectionHeading subheading="About" heading="Master Classes" align="text-left" line="mx-none" /> 
                    <p className='text-default-size '>
                    Visiongroww’s Master Classes are designed to provide in-depth knowledge and hands-on
experience with cutting-edge tools and technologies. Our master classes cover a range of topics
including development tools, cloud certifications, databases, full-stack development, and data
science. Here’s a detailed look at each master class offering:


                     </p>
               
               </div>

           </div>
    </section>
</>
  )
}

export default AboutMasterClasses