'use client';
import React from 'react' 
import Image from 'next/image'
function SectionHeading(props) {
  return (
     <>
            <div className={`heading-section ${props.align} mt-5 xl:pb-4`}>
                <h4 className='text-section-subheadingSmall xl:text-section-subheading text-secondary-dark'>{props.subheading}</h4>
                <h2 className='text-section-headingSmall xl:text-section-heading text-primary mb-2 xl:mb-4'>{props.heading}</h2>
                <Image
   src='/images/img-heading.jpg' className={`mb-2 xl:mb-8 ${props.line}`} alt='Services Heading'  width={109} height={5}
    /> 
            </div>
     </>
  )
}

export default SectionHeading