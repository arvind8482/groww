import React from 'react' 
function SectionHeadingTwoLine(props) {
  return (
     <>
            <div className={`heading-section ${props.align} pb-4`}> 
                <h2 className='text-section-heading text-primary mb-4'>{props.heading}</h2>
                <img src='images/img-heading.jpg' className={`mb-8 ${props.line}`} alt='Services Heading' />
            </div>
     </>
  )
}

export default SectionHeadingTwoLine