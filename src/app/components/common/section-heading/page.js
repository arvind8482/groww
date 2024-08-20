import React from 'react' 
import Image from 'next/image'
function SectionHeading(props) {
  return (
     <>
            <div className={`heading-section ${props.align} pb-4`}>
                <h4 className='text-section-subheading text-secondary-dark'>{props.subheading}</h4>
                <h2 className='text-section-heading text-primary mb-4'>{props.heading}</h2>
                <Image
   src='/images/img-heading.jpg' className={`mb-8 ${props.line}`} alt='Services Heading'  width={109} height={5}
    /> 
            </div>
     </>
  )
}

export default SectionHeading